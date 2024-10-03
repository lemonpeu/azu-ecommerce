/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1", "strapi-ecommerce-production-25bc.up.railway.app", "localhost:1336"]
  },
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL
  }
}

module.exports = nextConfig
