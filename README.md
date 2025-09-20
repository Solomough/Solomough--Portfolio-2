# Solomough - Portfolio (Frontend)

This repository contains a modern, mobile-first portfolio for **Solomough** built with Vite + React + TailwindCSS and Framer Motion.

## Quick setup (on your phone using a code editor app or on desktop)
1. Create a new GitHub repo named `solomough-portfolio`.
2. Copy the files from this project into the repo with the same file structure.
3. Install dependencies locally or on your cloud IDE: `npm install`.
4. Run locally: `npm run dev`.
5. Deploy to Vercel (connect your GitHub repo, set build command `npm run build` and output `dist`).

## Replace these placeholders
- Email link: `YOUR_EMAIL` (use `mailto:youremail@example.com`).
- Social links: `YOUR_GITHUB`, `YOUR_LINKEDIN`, `YOUR_TWITTER`.
- Contact form: replace `FORMSPREE_ENDPOINT` with your Formspree action URL.
- Visitor counter: edit `COUNTAPI_NAMESPACE` and `COUNTAPI_KEY` in `src/components/Footer.jsx`.
- Profile photo: overwrite `/src/assets/profile.jpg` with your professional DP (same filename).

## Contact form without backend
This template uses Formspree. Sign up at https://formspree.io, create a form, and paste the endpoint into Contact.jsx.

## Visitor counter
This template uses CountAPI (https://countapi.xyz). Open CountAPI docs and create a namespace (e.g., `solomough-portfolio`) and a key (e.g., `visits`). Then set them in Footer.jsx.
