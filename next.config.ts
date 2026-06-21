import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  images: {
    domains: ["jiowyjwepebnofaavcpp.supabase.co"], 
  },
  optimizePackageImports: ["lucide-react", "react-icons"],
  poweredByHeader: false,
  compress: true,
};

export default withIntlayer(nextConfig);
