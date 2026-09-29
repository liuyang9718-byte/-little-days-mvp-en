create extension if not exists pgcrypto;

create table children (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null,
  name text not null,
  birth_date date not null,
  avatar_path text,
  created_at timestamptz not null default now()
);

create table daily_entries (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  entry_date date not null,
  headline text,
  funny_moment text,
  mood text,
  parent_note text,
  created_at timestamptz not null default now(),
  unique(child_id, entry_date)
);

create table photo_memories (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  entry_date date not null,
  storage_path text not null,
  caption text,
  created_at timestamptz not null default now()
);

create table sleep_logs (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  sleep_date date not null,
  bedtime timestamptz,
  wake_time timestamptz,
  night_wakings integer not null default 0,
  night_feeds integer not null default 0,
  nap_minutes integer not null default 0,
  sleep_quality integer check (sleep_quality between 1 and 5),
  notes text
);

create table food_logs (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  eaten_at timestamptz not null default now(),
  food_name text not null,
  meal_type text,
  liked_level integer check (liked_level between 1 and 5),
  first_try boolean not null default false,
  reaction text,
  notes text
);

create table health_logs (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  logged_at timestamptz not null default now(),
  category text not null,
  temperature_c numeric,
  weight_kg numeric,
  height_cm numeric,
  symptom text,
  medication text,
  clinician_note text,
  notes text
);

create table milestones (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  milestone_date date not null,
  category text,
  title text not null,
  notes text,
  created_at timestamptz not null default now()
);

create table story_logs (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  read_at timestamptz not null default now(),
  title text not null,
  language text,
  liked_level integer check (liked_level between 1 and 5),
  notes text
);

create table todos (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  title text not null,
  category text,
  due_date date,
  completed boolean not null default false,
  created_at timestamptz not null default now()
);

create table ai_reports (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references children(id) on delete cascade,
  report_type text not null check (report_type in ('weekly','monthly','stage')),
  period_start date,
  period_end date,
  content jsonb not null,
  created_at timestamptz not null default now()
);

create index idx_daily_entries_child_date on daily_entries(child_id, entry_date desc);
create index idx_photo_memories_child_date on photo_memories(child_id, entry_date desc);
create index idx_sleep_logs_child_date on sleep_logs(child_id, sleep_date desc);
create index idx_food_logs_child_time on food_logs(child_id, eaten_at desc);
create index idx_health_logs_child_time on health_logs(child_id, logged_at desc);
