# Shinn Wai Yan Bo — Portfolio

Personal portfolio site for **Shinn Wai Yan Bo**, Power Platform Solution Architect & AI
Enablement Leader. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

Live at: https://EthanShinn.github.io

## Structure

- `src/data/content.ts` — all resume/portfolio content (profile, experience, skills,
  projects, certifications). Edit this file to update the site's text.
- `src/components/` — one component per section (Hero, About, Experience, Skills,
  Projects, Certifications, Contact, Footer, Navbar).
- `public/` — static assets, including the downloadable resume and Power Platform
  portfolio PDFs.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deployment (GitHub Pages)

This repo deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`)
on every push to `main`:

1. One-time setup on GitHub: **Settings → Pages → Source → GitHub Actions**.
2. Push to `main` — the workflow builds the Vite app and publishes `dist/` to GitHub
   Pages.
3. Because this repo is named `<username>.github.io`, it is served at the domain root
   (`https://<username>.github.io`) with no extra `base` path configuration needed.

To deploy manually instead, run `npm run build` and push the contents of `dist/` to
whichever branch/host you prefer.
