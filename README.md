# Lydda Market & Bakery

A bespoke, responsive React experience for Lydda Market & Bakery in Falls Church, Virginia. The site combines bilingual storytelling, a lightweight procedural 3D hero, tactile bento layouts, validated catering inquiries, local-business schema, and accessible motion.

## Stack

- React 19 + Vite for a fast production foundation
- Framer Motion for viewport-aware, reduced-motion-friendly reveals
- Lenis for opt-in inertial scrolling
- React Hook Form + Zod for accessible client-side inquiry validation
- Lucide React for consistent lightweight interface icons
- Custom Canvas, SVG, and CSS artwork to avoid heavy image and 3D payloads

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Build and preview the production output with:

```bash
npm run build
npm run preview
```

Run the static code check with `npm run lint`.

## Content and form delivery

Business details live in `src/constants/site.js`; structured SEO data is in `src/utils/schema.js`. The inquiry currently provides a polished client-side confirmation flow. Before launch, connect `OrderForm.jsx` to the preferred email, CRM, or serverless form endpoint inside the validated submit handler.

## Deploy to Vercel

Import the repository into Vercel and keep the default Vite settings (`npm run build`, output directory `dist`). `vercel.json` supplies SPA routing and long-lived asset caching. Point the production domain to the project, update the canonical business URL in the JSON-LD if needed, and replace the generated Open Graph SVG only if a photographic social card becomes available.

## Accessibility and performance

The site provides semantic landmarks, visible focus states, labelled controls, keyboard-operable navigation, reduced-motion behavior, lazy canvas loading, capped device-pixel ratio, responsive layouts, and a no-WebGL fallback. Phone and map actions use direct mobile-friendly links.
