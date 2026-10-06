# KMS – Korsholms Måleriservice Ab (demo)

Sales demo for KMS / Mustasaaren Maalauspalvelu Oy, built by Fusion Sites.
One-page Next.js + Tailwind site with a SV/FI language toggle and Framer Motion animations.

```bash
npm install
npm run dev     # http://localhost:3000  (append ?lang=fi for the Finnish version)
npm run build
```

Deploys to Vercel as-is (framework preset: Next.js, no env vars).

## Before going live
- Replace every "Platshållare" image (hero, gallery, team photo) with KMS's own photos.
- Remove the demo banner (`src/components/DemoBanner.tsx`) and the `robots: noindex` in `src/app/layout.tsx`.
- Connect the quote form (`src/components/QuoteForm.tsx`) to email/backend — it is front-end only now.

All copy lives in `src/lib/content.ts` (Swedish and Finnish).
