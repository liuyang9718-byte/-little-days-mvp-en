# Little Days

A mobile-first baby growth journal MVP.

## Included

- Today dashboard
- Quick entry form
- Growth timeline
- Health page
- Story / food / milestones library
- AI growth assistant mockup
- Bottom-tab mobile navigation
- PWA manifest
- Supabase database schema
- Wireframe and architecture docs

## Project structure

```text
little-days-mvp-en/
├─ app/
│  ├─ page.tsx
│  ├─ add/page.tsx
│  ├─ timeline/page.tsx
│  ├─ health/page.tsx
│  ├─ library/page.tsx
│  ├─ ai/page.tsx
│  ├─ layout.tsx
│  └─ globals.css
├─ components/
│  └─ BottomNav.tsx
├─ docs/
│  ├─ WIREFRAME.md
│  └─ ARCHITECTURE.md
├─ public/
│  └─ manifest.webmanifest
├─ supabase/
│  └─ schema.sql
├─ .env.example
├─ package.json
└─ README.md
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Put it on GitHub

```bash
git init
git add .
git commit -m "Initial Little Days MVP"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Open it on your phone

The easiest MVP deployment path is Vercel:

1. Create a private GitHub repository.
2. Push this folder to GitHub.
3. Sign in to Vercel and choose **Add New Project**.
4. Import the GitHub repo.
5. Vercel detects Next.js automatically.
6. Deploy.
7. Open the generated HTTPS URL on iPhone.
8. Safari → Share → **Add to Home Screen**.

The app already includes a basic PWA manifest, so it can behave like a home-screen web app.

## Next implementation milestone

Connect Supabase:
1. Create Supabase project.
2. Run `/supabase/schema.sql`.
3. Add Supabase Auth.
4. Enable Row Level Security.
5. Add private photo bucket.
6. Replace demo data with database reads/writes.
7. Add weekly/monthly AI report API routes.

## Important privacy note

Do not commit real child photos, medical details, `.env.local`, Supabase keys, or OpenAI keys to GitHub.

## Demo status

The screens use sample content. Quick Add confirms a demo action only; it does not save data. The AI page is a visual placeholder and does not call an AI model. Keep real child photos and health information out of this frontend until private authentication and storage are connected.
