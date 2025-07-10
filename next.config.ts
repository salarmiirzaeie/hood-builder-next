import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // for static export
  output: "export",
  images: {
    unoptimized: true,
  },
  // reactStrictMode: true,
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig;
