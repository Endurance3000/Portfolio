# Sanish Shrestha — Developer Portfolio

A Next.js 15+ production portfolio built on a single core principle: the platform itself demonstrates the engineering capabilities it describes. 

Instead of embedding static preview media, the hero section renders a live **topographic contour grid** that warps dynamically based on localized pointer tracking—acting as a direct architectural extension of the hardware-accelerated graphics and particle systems detailed throughout the platform.

---

## 🛠️ Tech Stack & Architecture

*   **Framework:** Next.js (App Router, Static Export Archetype)
*   **Compiler Engine:** Turbopack
*   **Styling & Design Tokens:** Tailwind CSS, Custom CSS Variables
*   **Animation & Interactivity:** Framer Motion / Canvas API
*   **Deployment:** GitHub Pages Pipeline via automated GitHub Actions workflows

---

## 🏗️ Project Architecture & Directory Mapping

```text
src/
├── app/
│   ├── layout.tsx         # Root layout, dynamic metadata bindings, global font context
│   ├── page.tsx           # Monolithic viewport assembler
│   └── globals.css        # Core tokens (fluid typography, hardware overlays, themes)
├── components/
│   ├── ContourField.tsx   # Signatures warping grid canvas element (Hero background)
│   ├── CustomCursor.tsx   # CAD-style absolute crosshair tracking system with vector readouts
│   ├── GrainOverlay.tsx   # Static high-frequency film/paper grain emulation layer
│   ├── Nav.tsx            # Context-aware sticky navigation boundary
│   ├── Hero.tsx           # Context entry block
│   ├── About.tsx          # Technical profile & biographical data matrix
│   ├── Registers.tsx      # Multi-state architecture breakdown
│   ├── Projects.tsx       # State-driven expandable project interface components
│   ├── Contact.tsx        # Gateway boundaries & network configurations
│   └── icons/
│       └── BrandIcons.tsx # High-performance optimized inline SVG brand assets
└── data/
    └── content.ts         # Centralized typed configuration matrix (Source of Truth)

⚡ Development & Deployment
Local Environment Setup
Clone the repository and install the development dependencies:

Bash
npm install
npm run dev
The local development server will initialize at http://localhost:3000.

Production Compilation & Optimization
To execute strict type checking, compile the application, and run optimizing minification layers via Next.js and Turbopack:

Bash
npm run build
npm start
Static Build Pipeline (GitHub Pages Deployment)
The platform utilizes Next.js static asset generation via output: 'export' declared within next.config.ts. The repository includes a production-ready CI/CD pipeline situated at .github/workflows/deploy.yml.

To deploy changes to a custom apex domain or submodule domain:

Push your latest commits directly to your production branch:

Bash
git add .
git commit -m "feat: optimize rendering performance"
git push origin main
Navigate to your GitHub repository: Settings → Pages.

Under Build and deployment → Source, ensure the target is set to GitHub Actions.

The system automatically reads the public/CNAME bundle parameters to map builds seamlessly directly to www.sanishthapashrestha.com.np.

⚙️ Project Customization
Content Updates
To update your biographical profile, modify project schemas, adjust status parameters, or swap social anchors, edit the core data file directly. Do not modify component logic for text iterations:

Bash
nano src/data/content.ts
Typography Configuration
The configuration relies on variable web fonts (Fraunces, Inter, JetBrains Mono) bound directly onto the Document Object Model root via Next.js Optimization layers.

TypeScript
// Configured inside src/app/layout.tsx
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"], // Explicit weights omitted to prevent Turbopack axis validation faults
});
Custom Tailwind extensions map these directly to standard utilities (font-serif, font-body, font-mono) by referencing standard CSS variable mappings (var(--font-display)).
