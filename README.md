# Akhilesh portfolio

A Next.js portfolio for AI/ML systems, retrieval, computer vision, IoT, and embedded work.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Build with `npm run build`.

## Contact form

The contact page works without setup by opening a populated email draft. Visitors can also copy the email address directly.

To enable direct form delivery, create a form in [Formspree](https://formspree.io/create), then copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID` to the ID after `/f/` in your Formspree endpoint. Restart the development server or rebuild the deployed site. The form then shows a send confirmation or a clear error, and keeps email as a fallback. The endpoint ID is public; no private key belongs in client code.

Set `NEXT_PUBLIC_SITE_URL` to the site's public URL before building outside Vercel. This ensures social preview image URLs point to the deployed host.

## Content and visuals

Edit `src/content/projects.ts` to update project facts and the simplified workflow diagrams. The diagrams describe the existing case studies and do not represent screenshots or measured performance. Keep numeric claims aligned with the résumé or other evidence you can share.
