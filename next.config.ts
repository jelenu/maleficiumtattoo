import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  images: {
    domains: ["iodmzonefszwyeqfpivz.supabase.co"], 
  },
};

export default withIntlayer(nextConfig);
