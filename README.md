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
| Pages | `src/pages/` |
| Fiverr-safe portfolio (no contact details) | `src/pages/work.astro` → `/work.html` |
| Upwork-safe portfolio (no contact details) | `src/pages/upwork.astro` → `/upwork.html` |
| Shared layout for both platform pages | `src/components/PlatformPortfolio.astro` |
| Images, logo, favicon, CNAME | `public/` |

Add a case study by copying a file in `src/content/case-studies/`, then edit its frontmatter.
To show a client video testimonial, set `videoTestimonial` to the YouTube video ID.

## Deploy

Every push to `main` builds and deploys automatically (`.github/workflows/deploy.yml`).
Repository Settings → Pages → Source must be set to **GitHub Actions**.
