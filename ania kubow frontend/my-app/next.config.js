/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    SECRET_KEY: process.env.SECRET_KEY,
  },
};

module.exports = nextConfig
