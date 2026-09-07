# Haneen Walid — Portfolio

An interactive personal portfolio built with React, Vite, Tailwind CSS,
Framer Motion, and GSAP/ScrollTrigger.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are written to `dist/` — deploy that folder to
Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
src/
  components/   Navbar, custom cursor, footer
  sections/     Hero, About, Skills, Projects, Experience, Education,
                Services, Contact — one file per section on the page
  data/         Content for skills, projects, and experience, kept
                separate from the components that render them
```

## Customizing

- **Colors & type** — edit the `theme.extend` block in `tailwind.config.js`.
- **Copy & content** — section copy lives inline in each file in
  `src/sections/`; structured content (skills, projects, timeline) lives
  in `src/data/`.
- **Projects** — update `src/data/projects.js` with real project links
  once they're live (`links.live` / `links.source`), and swap the
  generative `ProjectArt` visuals in `src/sections/Projects.jsx` for real
  screenshots when you have them.
- **Contact details** — update the email/LinkedIn/GitHub values in
  `src/sections/Contact.jsx`.

## Notes

- The custom cursor and most decorative motion automatically disable on
  touch devices and respect `prefers-reduced-motion`.
- Icons are from `react-icons` — swap any icon by importing a different
  one from the same package.
