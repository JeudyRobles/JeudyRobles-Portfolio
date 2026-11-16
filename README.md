# Jeudy Robles — Portfolio 

A bilingual (EN/ES) portfolio site built with React and Vite, statically prerendered for SEO, showcasing frontend and WordPress projects.

<!-- [TODO: add a static screenshot here, e.g. ![Portfolio screenshot](docs/screenshot.png). No GIF for now.] -->

**Live demo:** [jeudyrobles.vercel.app](https://jeudyrobles.vercel.app/) · **Spanish version:** [jeudyrobles.vercel.app/es](https://jeudyrobles.vercel.app/es)

**Stack:** React 19, Vite 6, Emotion, AOS, Lenis, Tippy.js, ESLint, pnpm, Vercel.

## Problem it solves

A portfolio has to be found, read quickly, and work for visitors in more than one language. This site:

- Presents my profile, tech stack, CV (EN and ES PDFs) and five featured projects in a single page.
- Serves English at `/` and Spanish at `/es`, with a language switcher in the nav.
- Ships real HTML for both routes at build time, so crawlers and no-JS clients get content instead of an empty `<div id="root">`.

## Technical decisions

- **Prerendering instead of a runtime SSR/framework.** `vite-plugin-prerender` renders `/` and `/es` with headless Chromium after `vite build` (see `vite.config.js`). The result is static files that can be hosted anywhere, without adopting a meta-framework.
- **Custom `PlatformRenderer` for Linux builds.** On Linux (e.g. Vercel's build environment) the config uses `@sparticuz/chromium` and Puppeteer, because a stock Chrome isn't available there. Other platforms launch Puppeteer with `--no-sandbox`.
- **Language from the URL path, not from state.** `LanguageContext` reads `window.location.pathname` (`/es` → Spanish, otherwise English). Each language is a real URL that can be prerendered and indexed; switching languages is a full navigation. Translations live in `src/i18n/translations.js`, with English as the fallback.
- **SEO handled in code.** `App.jsx` updates `<title>`, description, Open Graph/Twitter tags, canonical, `hreflang` alternates and JSON-LD per language. `public/` includes `robots.txt` and `sitemap.xml`.
- **Reduced-motion support.** If the user prefers reduced motion (or the page is being prerendered), AOS animations and Lenis smooth scrolling are disabled.
- **Styling:** Emotion for component-scoped styles (e.g. the nav) plus plain CSS files per component and a global `src/styles/index.css`.
- **Not used (as far as the code shows):** no router library, no state manager, no CSS framework, no test framework.
- **Why this stack:** I chose these tools mainly to learn them.

## Run locally

Requirements: Node.js and [pnpm](https://pnpm.io/) (`packageManager` is `pnpm@11.4.0`; with Corepack: `corepack enable`).
[TODO: confirm the minimum Node.js version. `package.json` has no `engines` field and there is no `.nvmrc`.]

```bash
git clone https://github.com/JeudyRobles/JeudyRobles-Portfolio.git
cd JeudyRobles-Portfolio
pnpm install
pnpm dev
```

Other scripts (from `package.json`):

```bash
pnpm build     # vite build + prerender of / and /es into dist/
pnpm preview   # serve the production build
pnpm lint      # eslint .
```

Note: `pnpm build` launches headless Chromium for prerendering, so it needs Puppeteer's browser (or `@sparticuz/chromium` on Linux) to be available. `pnpm-workspace.yaml` allows the `esbuild` and `puppeteer` install scripts.

To see the Spanish version locally, open `/es` in the dev server.

## Tests

There are no automated tests in this repository. The only check is linting:

```bash
pnpm lint
```

## Contact

Jeudy Robles — [LinkedIn](https://www.linkedin.com/in/jeudyrobles/) · [GitHub](https://github.com/JeudyRobles) · jeudyjrp@gmail.com
