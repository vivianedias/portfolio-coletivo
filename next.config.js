/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async headers() {
    return [
      {
        source: "/api/:path",
        headers: [
          {
            key: "Access-Control-Allow-Headers",
            value: "api-key",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://dev.to",
          },
        ],
      },
    ];
  },
  //
};

module.exports = nextConfig
