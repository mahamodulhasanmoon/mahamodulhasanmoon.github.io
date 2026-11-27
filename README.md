# mahamodulhasan.me

Portfolio of **Mahamodul Hasan Moon**: full stack developer, AI automation specialist and DevOps engineer.
Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages by GitHub Actions.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Edit content

| What | Where |
| --- | --- |
| Services, FAQ, skills, stats, review, contact links | `src/data/site.ts` |
| Structured data (Person, Organization) | `src/data/schema.ts` |
| Case studies (one Markdown file each) | `src/content/case-studies/` |
| Gallery events (one folder per event with its photos) | `src/content/events/` |
| Pages | `src/pages/` |
| Fiverr-safe portfolio (no contact details) | `src/pages/work.astro` → `/work` |
| Upwork-safe portfolio (no contact details) | `src/pages/upwork.astro` → `/upwork` |
| Shared layout for both platform pages | `src/components/PlatformPortfolio.astro` |
| Images, logo, favicon, CNAME | `public/` |

### Add an event to the gallery

1. Copy `src/content/events/_example-event/` to a new folder without the underscore, e.g. `src/content/events/devfest-2026/`
2. Put the photos in that folder (any size; they are resized and converted to WebP/AVIF at build time)
3. Edit `index.md`: title, date, location, description and one entry per photo (`src`, `alt`, optional `caption`)
4. Push to `main`

Events are sorted newest first. The **Gallery** menu item appears automatically once one event is published.

Add a case study by copying a file in `src/content/case-studies/`, then edit its frontmatter.
To show a client video testimonial, set `videoTestimonial` to the YouTube video ID.

## Deploy

Every push to `main` builds and deploys automatically (`.github/workflows/deploy.yml`).
Repository Settings → Pages → Source must be set to **GitHub Actions**.
