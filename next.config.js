/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1", "https://strapi-ecommerce-production-85a7.up.railway.app/", "localhost"]
  }
}

module.exports = nextConfig
