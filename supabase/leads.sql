-- Shared leads table for all hosted client sites.
-- Run this ONCE in the shared "hosting" Supabase project (not per-site, and
-- not in the link-hq project). Each site's form inserts with its own `site`
-- value; RLS lets the anon key INSERT only — leads are read via the dashboard.

create table public.leads (
  id             uuid primary key default gen_random_uuid(),
  site           text not null,              -- e.g. 'readyassetfinance.com.au'
  name           text not null,
  phone          text not null,
  email          text,                        -- unused by this site; for future sites
  message        text,                        -- ditto
  preferred_time text,
  source_page    text,
  created_at     timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "anon insert only"
  on public.leads
  for insert
  to anon
  with check (
    site is not null
    and char_length(name)  between 2 and 120
    and char_length(phone) between 8 and 40
  );

-- No select/update/delete policies for anon on purpose.

-- For the agency portal / dashboard views later:
create index leads_site_created_idx on public.leads (site, created_at desc);
