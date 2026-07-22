import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → อัปโหลดโฟลเดอร์ out/ ขึ้น hosting ได้เลย (cPanel, Netlify, GitHub Pages)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
