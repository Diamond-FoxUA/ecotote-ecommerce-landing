import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    imageSizes: [288, 310, 340, 576, 620, 680]
  },

  async redirects() {
    return [
      {
        source: "/:locale((?:en|uk))/:path+",
        destination: "/:locale",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
