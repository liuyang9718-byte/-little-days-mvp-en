# Architecture

## MVP
- Next.js 14 / App Router
- React
- Mobile-first responsive UI
- PWA manifest
- Mock data in UI
- Supabase-ready SQL schema

## V2 data layer
- Supabase Auth
- Postgres tables from `/supabase/schema.sql`
- Supabase Storage for photos
- Row Level Security
- Server-side OpenAI calls for weekly/monthly summaries

## Privacy principles
- GitHub stores code only.
- Child photos, health notes, and family data belong in private authenticated storage.
- Never expose the OpenAI API key in client-side code.
- Enable RLS before using real family data.
