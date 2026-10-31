import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jiowyjwepebnofaavcpp.supabase.co",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },

  poweredByHeader: false,
  compress: true,
};

export default withIntlayer(nextConfig);