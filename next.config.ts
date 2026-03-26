import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,              // catches React issues
  productionBrowserSourceMaps: false, // hides source maps in prod

  // So assets work on live when app is served from a subpath or different origin
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },

  compiler: {
    removeConsole: true,              // removes console logs in production
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
