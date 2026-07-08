// Callback-form lead handler.
// Inserts the lead into Supabase (anon key — RLS allows insert only) and sends
// an email notification via Resend. Email failure never fails the lead.
//
// Vercel env vars required:
//   SUPABASE_URL        — the SHARED hosting Supabase project (one project for all hosted sites)   *** PLACEHOLDER ***
//   SUPABASE_ANON_KEY   — that project's anon/public key                                           *** PLACEHOLDER ***
//   RESEND_API_KEY      — Resend API key (optional; email skipped if unset)
//   LEAD_NOTIFY_EMAIL   — inbox that receives lead alerts     *** PLACEHOLDER — James to fill with the business's preferred inbox ***
//   EMAIL_FROM          — e.g. "Ready Asset Finance <leads@readyassetfinance.com.au>" (domain must be verified in Resend)

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });

  const { name, phone, preferred_time, source_page, company } = req.body || {};

  // Honeypot: real users never fill "company". Pretend success so bots move on.
  if (company) return res.status(200).json({ ok: true });

  const cleanName = String(name || '').trim().slice(0, 120);
  const cleanPhone = String(phone || '').trim().slice(0, 40);
  if (cleanName.length < 2 || cleanPhone.replace(/\D/g, '').length < 8) {
    return res.status(400).json({ error: 'name and a valid phone are required' });
  }
  const lead = {
    site: 'readyassetfinance.com.au', // shared leads table across hosted sites
    name: cleanName,
    phone: cleanPhone,
    preferred_time: String(preferred_time || '').slice(0, 40) || null,
    source_page: String(source_page || '').slice(0, 200) || null,
  };

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    console.error('Supabase env vars not set — lead lost:', lead);
    return res.status(500).json({ error: 'not configured' });
  }

  // Legacy anon keys are JWTs and also go in the Authorization header; the new
  // sb_publishable_* keys must be sent as `apikey` only.
  const key = process.env.SUPABASE_ANON_KEY;
  const headers = {
    'Content-Type': 'application/json',
    apikey: key,
    Prefer: 'return=minimal',
  };
  if (key.startsWith('eyJ')) headers.Authorization = `Bearer ${key}`;

  const r = await fetch(`${process.env.SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers,
    body: JSON.stringify(lead),
  });
  if (!r.ok) {
    console.error('Supabase insert failed', r.status, await r.text().catch(() => ''));
    return res.status(500).json({ error: 'could not save lead' });
  }

  // Email notification — best-effort, never blocks the lead.
  try {
    if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_EMAIL) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'Ready Asset Finance <onboarding@resend.dev>',
          to: [process.env.LEAD_NOTIFY_EMAIL],
          subject: `New callback request — ${lead.name}`,
          text: [
            'New callback request from readyassetfinance.com.au',
            '',
            `Name:           ${lead.name}`,
            `Phone:          ${lead.phone}`,
            `Preferred time: ${lead.preferred_time || 'Call me anytime'}`,
            `Page:           ${lead.source_page || '/'}`,
            `Received:       ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' })} (Brisbane)`,
          ].join('\n'),
        }),
      });
    } else {
      console.warn('RESEND_API_KEY / LEAD_NOTIFY_EMAIL not set — lead saved but no email sent');
    }
  } catch (e) {
    console.error('lead email failed (lead still saved):', e);
  }

  return res.status(200).json({ ok: true });
};
