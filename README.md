# Adirvion

A government job notification site for India — Railways, Banking, SSC, UPSC,
Defence, State PSCs and PSUs in one place, with verified deadlines and a
closing-soon ticker.

## Stack

- React 18 + Vite
- No external UI library — all styling is plain CSS / inline styles using a
  small design-token system (see `src/index.css`)
- No backend yet — job listings live in `src/data/jobs.js` as a typed mock
  array

## Run locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. For a production build:

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/` — deployable as-is to
Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any static host.

## Project structure

```
src/
  data/jobs.js        Mock job data + helpers (getStatus, formatDate)
  components/
    Header.jsx         Sticky nav
    Hero.jsx            Headline + "closing soonest" ticker strip
    FilterBar.jsx       Search input + category pills
    JobList.jsx          Filtering logic, renders JobCard list
    JobCard.jsx          Individual listing with ticket-stub countdown
    HowItWorks.jsx      Trust / verification section
    Footer.jsx            Site footer
  App.jsx               Composes everything, owns filter state
  index.css            Design tokens (colors, fonts, spacing) + global reset
```

## Connecting a real backend later

Everything reads from the `jobs` array exported by `src/data/jobs.js`. To
wire up a real API or CMS, the only change needed is in that one file —
no component needs to change as long as the shape matches:

```js
export const jobs = [
  {
    id: 'unique-slug',
    title: 'Post name — Recruitment',
    org: 'Issuing organisation',
    category: 'railway' | 'banking' | 'ssc' | 'upsc' | 'defence' | 'state-psc' | 'teaching' | 'psu',
    vacancies: 1234,            // or null if not specified
    qualification: '...',
    notificationNo: '...',
    postedDate: 'YYYY-MM-DD',
    lastDate: 'YYYY-MM-DD',     // drives the "days left" countdown
    examDate: 'YYYY-MM-DD',     // optional
    applicationFee: '...',
    ageLimit: '...',
    location: '...',
    officialLink: 'https://...',
    description: '...',
    featured: true | false,
  },
]
```

A natural next step (not built yet, since you said "just the front-end for
now") is replacing the static array with a `fetch()` call to a real API, or
hooking up a headless CMS (Sanity, Strapi, Contentful) so non-developers can
post new notifications without touching code. Happy to build that admin/data
layer whenever you're ready — it's a clean follow-on from this structure.

## Notes

- All job data in `src/data/jobs.js` is illustrative/placeholder content for
  demonstration. Replace with real, verified notifications before
  publishing — and double check every last date against the official PDF
  before going live, as this site's own "How it works" section promises.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via
  `index.html` — requires internet access at runtime (standard for any
  website, not a code issue).
