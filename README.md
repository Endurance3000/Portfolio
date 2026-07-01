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
