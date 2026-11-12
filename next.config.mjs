/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Artwork Audius (CDN dinamis)
      { protocol: "https", hostname: "**.audius.co" },
      { protocol: "https", hostname: "audius.co" },
      // Placeholder / sumber gambar lain
      { protocol: "https", hostname: "**.jamendo.com" },
      { protocol: "https", hostname: "**.dzcdn.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
};

export default nextConfig;
