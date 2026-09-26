# Hung Vo | AI Security Engineer Portfolio

Personal portfolio for [Hung Vo](https://www.linkedin.com/in/hungvotrung/): AI Security Engineer, with fourteen years in DevSecOps and platform engineering behind it.

## Live

[https://portfolio.atas.tech/](https://portfolio.atas.tech/)

## What's on the page

- **Hero and stats** — role, positioning, and four at-a-glance numbers for recruiters.
- **Showreel** — a 15-second motion reel (`public/showreel/`). Muted autoplay only while in view, pause and sound toggles, no autoplay under `prefers-reduced-motion`. Rendered from code; source lives outside this repo.
- **Featured: OmaSafe** — the 2026 flagship: a Rust CLI, an Omarchy bar plugin, and a multi-host agent skill for evidence-first plugin review, with an architecture flow and the design principles behind it.
- **Projects grid** — filterable by Agentic AI, Security, Omarchy and DevOps. Covers BlindPass, Dependency Guard, the OmaSafe agent skill, Dropdown Terminal, Unraid Monitor, Lunar Calendar, BlindDrop, and past platform and SIEM work. Plugins listed on the Omarchy marketplace show live engagement: views, install-command copies and hearts.
- **Interactive terminal** — `help`, `whoami`, `projects`, `skills`, `experience`, `contact`, `open <project-id>`, with Tab completion and command history.
- **Experience timeline, skills, contact** — fourteen years from systems administration to security leadership.

## Design notes

- Dark and light themes. The choice persists in `localStorage`, falls back to the system preference, and can be forced with `?theme=light` or `?theme=dark`.
- Space Grotesk for text, JetBrains Mono for labels, chips and the terminal. Lucide icons only; no icon font.
- Framer Motion reveals honour `prefers-reduced-motion`.
- All content lives in `src/data/portfolio.ts`. Update a project or a role there and every section, plus the terminal, follows.
- SEO: JSON-LD `Person` with `SoftwareApplication` entries, Open Graph card at `public/og.png`, `llms.txt` for AI agents, sitemap and robots.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) and [Framer Motion](https://www.framer.com/motion/)
- GitHub Pages via GitHub Actions

## Development

```bash
npm ci
npm run dev      # local dev server
npm run build    # type-check and production build
npm run lint
npm run preview  # serve the production build
npm run stats    # refresh the Omarchy marketplace snapshot
```

### Marketplace stats

`npm run stats` reads the public, read-only engagement endpoint that powers
plugins.omarchy.org and rewrites two generated artifacts: the snapshot in
`src/data/pluginStats.ts` and the marked block in `public/llms.txt`. It records
nothing, so it never posts a view, copy or heart event of its own.

The numbers are baked in at build time rather than fetched in the browser. The
endpoint returns every plugin on the marketplace and is served `no-store`, so a
runtime fetch would cost each visitor the full payload for four numbers.

The deploy workflow runs the script before the build, so a push refreshes the
figures. On a network failure it logs a warning, leaves the committed snapshot
in place and exits 0, so the build cannot break on a third-party outage. Every
figure on the page is labelled with the date it was captured.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages under the custom domain in `public/CNAME`.

## Security

Commits are signed. To verify locally, add the public key to your `allowed_signers` file and run `git log --show-signature`.

---
Made by [Hung Vo](https://github.com/tuthan)
