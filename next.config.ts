import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // Mockup reviewer avatars — TODO: replace with real client photos.
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        // DFW Urethane's own hosted images.
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
