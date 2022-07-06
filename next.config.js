/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['www.w3schools.com', 'cdn.dribbble.com']
  }
}

module.exports = nextConfig
