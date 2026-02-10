import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,                // catches React issues
  productionBrowserSourceMaps: false,   // hides source maps in prod
  output: "export",                     // full static export
  compiler: {
    // optimize Tailwind classes
    removeConsole: true,                // removes console logs in production
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },           // prevent clickjacking
          { key: "X-Content-Type-Options", value: "nosniff" }, // block MIME sniffing
          { key: "Referrer-Policy", value: "no-referrer" },    // hide referrer info
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" } // no sensors
        ],
      },
    ];
  },
};

export default nextConfig;
