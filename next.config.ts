import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: GitHub Pages only serves static files, no Node.js server.
  // This makes `next build` emit a fully static `out/` folder instead of
  // requiring `next start`.
  output: "export",

  // No Next.js image server available on static hosting, so skip the
  // built-in image optimizer. This project doesn't use next/image, but
  // setting this avoids surprises if you add it later.
  images: {
    unoptimized: true,
  },

  // No basePath/assetPrefix needed: this site is served from a custom
  // domain at the root (sanishthapashrestha.com.np), not from a
  // username.github.io/repo-name subpath.
};

export default nextConfig;

