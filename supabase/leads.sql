-- Ready Asset Finance — leads table.
-- Run this in the Supabase SQL editor of the NEW project created for this site.
-- RLS is locked so the anon key can INSERT only — it cannot read, update or
-- delete leads. View leads via the Supabase dashboard (service role).

create table public.leads (
  id             uuid primary key default gen_random_uuid(),
  name           text not null,
  phone          text not null,
  preferred_time text,
  source_page    text,
  created_at     timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "anon insert only"
  on public.leads
  for insert
  to anon
  with check (true);

-- No select/update/delete policies for anon on purpose.
