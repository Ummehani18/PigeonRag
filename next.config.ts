import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep file tracing scoped to this project instead of the parent user folder.
  outputFileTracingRoot: process.cwd()
};

export default nextConfig;
