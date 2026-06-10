import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  images: {
    domains: ["iodmzonefszwyeqfpivz.supabase.co"], 
  },
  optimizePackageImports: ["lucide-react", "react-icons"],
  poweredByHeader: false,
  compress: true,
};

export default withIntlayer(nextConfig);
