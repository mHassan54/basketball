import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // Add the port if you're running on localhost with a port
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [];
  },
  async redirects() {
    return [
      // {
      //   source: "/((?!api/|login|_next|static|public|assets|images|icons).*)*",
      //   destination: "/login",
      //   permanent: true,
      // },
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
