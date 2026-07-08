# readyassetfinance.com.au

Full redesign of the Ready Asset Finance site (Brisbane finance broker), replacing the
old WordPress site. Static HTML on Vercel + Supabase callback form, same stack as the
other LINK client sites.

- **Business:** Rypro Pty Ltd T/As Ready Asset Finance · ABN 38 633 895 066 ·
  ACR #546989 of AFAS Group Pty Ltd (ACL #414426) · 07 3059 9853
- **Conversion:** every CTA deep-links to the matching AFOS quote funnel at
  `readyassetfinance.afos.io` (URLs verified against the live site 2026-07-08).

## Editing pages

**Don't edit the root `*.html` files directly** — they are generated. Edit
[build/data.mjs](build/data.mjs) (copy, FAQs, funnel URLs, lender panel) or
[build/build.mjs](build/build.mjs) (template/CSS/JS), then:

```
npm run generate
```

That regenerates `index.html`, the 8 category pages, both legal pages and `sitemap.xml`.
Legal page bodies live in `build/legal/*.html`.

## Pages

`/` plus `/car-finance /caravan-finance /boat-finance /motorbike-finance
/personal-loans /business-loans /commercial-finance /leisure-finance
/privacy-policy /terms-and-conditions`

301s from the old WordPress paths are in [vercel.json](vercel.json).

> ⚠️ The old site's terms page was eCarz boilerplate (wrong business, wrong fees), so
> `/terms-and-conditions` was written fresh — worth a legal once-over.

## Setup still required (placeholders)

1. **Supabase** — create a new project, run [supabase/leads.sql](supabase/leads.sql),
   then set Vercel env vars `SUPABASE_URL` and `SUPABASE_ANON_KEY` (RLS allows
   anon INSERT only).
2. **Lead email** — set `LEAD_NOTIFY_EMAIL` (business inbox for lead alerts),
   `RESEND_API_KEY`, and `EMAIL_FROM` (verified domain in Resend). Without these,
   leads still save to Supabase; only the email is skipped.
3. **DNS / domain** — after preview approval: add `readyassetfinance.com.au` (canonical)
   and `www` (redirect → apex) to the Vercel project, then switch DNS at the registrar.
   **Do not touch DNS until James confirms.**

Google Tag Manager container `GTM-TQR85VQG` is carried over from the old site on every page.

## Assets

All self-hosted (no external logo APIs, fonts self-hosted in `assets/fonts/`).
`assets/lenders/` holds the 36-lender panel crawled from the old site's media library —
greyscale at rest, colour on hover, counter-scrolling two-row marquee with
pause-on-hover and `prefers-reduced-motion` fallback.
`logo-dark.png` / `logo-white.png` were generated from the old site's white-on-black
logo (background knocked out; navy recolour for light header).
