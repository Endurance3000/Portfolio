# Sanish Shrestha — Portfolio

A Next.js portfolio built around one idea: the site itself demonstrates the
skill it's describing. The hero section is a topographic contour grid that
warps as your cursor moves near it — a direct nod to the hand-tracked
particle system project, rendered as the page's own structural backdrop
instead of a demo video.

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Important: fonts

This project was built in a sandboxed environment that couldn't reach
Google Fonts, so `src/app/globals.css` currently uses system font stacks
(`Georgia`/`Palatino` for the serif display face, system sans for body,
system mono for the diagnostic/label text) as a fallback.

**On your machine, restore the real typefaces** for the intended look:

1. In `src/app/layout.tsx`, add back:
   ```tsx
   import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

   const fraunces = Fraunces({
     variable: "--font-display",
     subsets: ["latin"],
     axes: ["opsz", "SOFT", "WONK"],
     weight: ["300", "400", "500", "600", "700", "900"],
     style: ["normal", "italic"],
   });
   const inter = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["400","500","600","700"] });
   const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400","500","600"] });
   ```
   and add `${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`
   to the `<html>` className.
2. The `--font-display` / `--font-body` / `--font-mono` variables already
   used by the `font-serif` / `font-body` / `font-mono` Tailwind utilities
   will pick up the real typefaces automatically once the `next/font`
   variables are back — no other changes needed.

The rest of the design (colors, layout, motion, content) doesn't depend on
this — it'll just look noticeably better with the intended serif/mono pairing.

## Deploying to GitHub Pages (free, with your existing domain)

This project is already configured for static export (`output: 'export'`
in `next.config.ts`), which is what GitHub Pages needs since it only serves
static files — no Node.js server.

### 1. Push this code to a GitHub repo

```bash
cd sanish-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Endurance3000/<your-repo-name>.git
git push -u origin main
```

(You can reuse your old portfolio repo, or make a new one — either works,
since the deploy workflow below builds from whatever repo it's added to.)

### 2. Turn on GitHub Actions deploys

The workflow file is already in `.github/workflows/deploy.yml` — it builds
the site and deploys it automatically on every push to `main`. You just
need to flip one setting:

1. In your repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch" — that's the old method and won't run the
   Next.js build).
3. Push to `main` (or re-run the workflow from the **Actions** tab) and
   wait for it to go green.

### 3. Point your domain at it

You said this was already working before through GitHub Pages, so your
DNS is very likely already configured correctly — you may not need to
touch it at all. To confirm:

- `public/CNAME` in this project already contains
  `www.sanishthapashrestha.com.np`, so it'll be included in every build
  automatically.
- In **Settings → Pages → Custom domain**, make sure it shows
  `www.sanishthapashrestha.com.np` and that **Enforce HTTPS** is checked.
- If it ever needs to be set up from scratch, your DNS provider needs:
  - A `CNAME` record for `www` → `endurance3000.github.io`
  - Optionally, A records for the apex domain (`sanishthapashrestha.com.np`
    without `www`) pointing at GitHub's IPs, if you want the bare domain
    to work too: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
    `185.199.111.153`.

DNS changes can take anywhere from a few minutes to 24 hours to propagate.

### Updating the live site later

Once this is set up, deploying changes is just:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions rebuilds and redeploys automatically — no manual export
step needed.



```
src/
  app/
    layout.tsx        — root layout, fonts, metadata
    page.tsx           — assembles all sections
    globals.css         — design tokens (color, font, utility classes)
  components/
    CustomCursor.tsx    — CAD-style crosshair cursor with coordinate readout
    GrainOverlay.tsx     — subtle paper-grain texture
    ContourField.tsx      — the signature warping grid (hero backdrop)
    Nav.tsx                — sticky nav + mobile menu
    Hero.tsx                — hero section
    About.tsx                 — bio + field notes panel
    Registers.tsx              — "structured vs experimental" method section
    Projects.tsx                 — expandable project cards
    Contact.tsx                   — social links + footer
    icons/BrandIcons.tsx           — custom GitHub/LinkedIn/Instagram/Facebook icons
  data/
    content.ts                      — all real content (bio, projects, socials, stack)
```

**To edit your info**, everything lives in `src/data/content.ts` — name,
bio, project descriptions, social links, tech stack. You shouldn't need to
touch component files just to update content.

### Why custom icons?

The installed version of `lucide-react` dropped brand/logo icons (GitHub,
LinkedIn, etc. aren't in it anymore), so `BrandIcons.tsx` has small
hand-drawn SVG versions of the four social icons you need. If you want to
swap to `react-icons` or another icon set instead, those four imports in
`Contact.tsx` and `Projects.tsx` are the only places that reference them.

## Notes on content honesty

The project cards intentionally don't have fake demo/live links — Canopy,
the gesture particle field, and the personality engine are all real,
in-progress work without public deployments yet. Each card instead shows
an honest status badge ("in development", "academic submission — local
only", "experimental build"). When you do deploy or open-source any of
these, just add `liveUrl` / `repoUrl` fields to the relevant project object
in `content.ts` and wire up a link in `Projects.tsx`.
