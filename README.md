# Sanish Shrestha — Portfolio

A modern portfolio built with **Next.js**, designed around a simple philosophy:

> **The portfolio itself should demonstrate the skills it represents.**

Instead of using static visuals, the homepage features an interactive topographic contour field that dynamically responds to cursor movement. Inspired by my hand-tracked particle system project, it transforms an experimental concept into the site's primary visual identity.

---

## Preview

**Live Website**

https://www.sanishthapashrestha.com.np

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS Animations
- GitHub Actions
- GitHub Pages

---

## Features

- Interactive hero section with a cursor-responsive contour field
- Smooth animations and transitions
- Fully responsive design
- Custom-designed SVG social media icons
- Structured content management through a single data file
- Static export for GitHub Pages deployment
- Automatic deployment using GitHub Actions

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── ContourField.tsx
│   ├── CustomCursor.tsx
│   ├── GrainOverlay.tsx
│   ├── Hero.tsx
│   ├── Nav.tsx
│   ├── Projects.tsx
│   ├── Registers.tsx
│   └── icons/
│       └── BrandIcons.tsx
│
└── data/
    └── content.ts
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Production Build

Build the project:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

## Customizing Content

All personal information is stored in a single location:

```
src/data/content.ts
```

From there you can update:

- Name
- Biography
- Project information
- Social links
- Technology stack
- Contact details

No component changes are required for normal content updates.

---

## Typography

The original design uses the following Google Fonts:

- Fraunces
- Inter
- JetBrains Mono

The repository currently falls back to system fonts to ensure builds succeed in environments without external font access.

To restore the intended typography, import the fonts in `src/app/layout.tsx` using `next/font/google` and attach the generated font variables to the `<html>` element.

The existing CSS variables (`--font-display`, `--font-body`, and `--font-mono`) will automatically use the restored fonts without requiring additional styling changes.

---

## Deployment

The project is configured for static export using:

```ts
output: "export"
```

making it compatible with **GitHub Pages**.

Deployment is fully automated through **GitHub Actions**.

After pushing to the `main` branch, GitHub Actions builds and deploys the latest version automatically.

---

## Custom Domain

The repository includes a `public/CNAME` file for:

```
www.sanishthapashrestha.com.np
```

When using GitHub Pages, simply configure Pages to deploy from **GitHub Actions** and ensure the custom domain is enabled.

---

## Updating the Website

Publishing updates only requires the standard Git workflow:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The deployment pipeline automatically builds and publishes the latest version.

---

## Social Icons

Recent versions of `lucide-react` no longer include brand icons such as GitHub and LinkedIn.

This project therefore uses lightweight custom SVG icons located in:

```
src/components/icons/BrandIcons.tsx
```

These can easily be replaced with another icon library if desired.

---

## Project Philosophy

Every featured project represents real work.

Rather than including placeholder demos or fabricated links, projects display their actual development status (such as *In Development*, *Academic Submission*, or *Experimental Build*).

Repository links and live demos can be added later by extending the corresponding project entries in `src/data/content.ts`.

---

## License

This project is intended as a personal portfolio and source of inspiration.

Feel free to explore the code and learn from it, but please do not copy the portfolio design or content directly.
