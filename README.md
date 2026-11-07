# PigeonRAG — Pre-launch landing page

A standalone, responsive single-page-feel product landing page built with Next.js, React, TypeScript and custom CSS.

## What's included

- Navigation that switches between Overview, Product, Architecture, Technology and About without traditional long-page scrolling.
- Responsive mobile navigation.
- PigeonRAG wordmark using the pigeon icon supplied by the project owner.
- Custom 3D pigeon hero artwork, with subtle floating/orbit animation.
- Dark graphite, cool-white and teal technical visual system.
- Slack brand icon, GitHub and email links.
- Product, architecture, stack and implementation-status content.
- Reduced-motion support and basic SEO metadata.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configure public links

Edit the `LINKS` object near the top of `app/page.tsx`:

```ts
const LINKS = {
  github: "https://github.com/Ummehani18/VaultRAG",
  email: "mailto:YOUR_EMAIL@example.com",
  slack: "https://YOUR-SLACK-INVITE-LINK",
  collaborate: "mailto:YOUR_EMAIL@example.com?subject=Interested%20in%20PigeonRAG"
};
```

Replace the email and Slack placeholders before deployment. The GitHub URL currently points to the existing VaultRAG repository; update it if/when the repository is renamed to PigeonRAG.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Extract this ZIP.
2. Push the folder to a new GitHub repository (for example, `pigeonrag-website`).
3. Import that repository into Vercel.
4. Select Next.js and deploy.

## Product-claim accuracy

This site describes PigeonRAG as a working prototype under active development. It does not claim production readiness, complete security validation or proven end-to-end air-gapped operation. These limitations should remain visible until they are actually validated.

## Brand assets

- `public/pigeon-icon.png` — the pigeon icon supplied by the project owner.
- `public/pigeon-3d.png` — custom generated 3D pigeon illustration for the hero.
