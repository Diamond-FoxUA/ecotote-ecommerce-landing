import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/((?!img|icons|favicon\\.ico|.*\\..*).*)",
        destination: "/en",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
