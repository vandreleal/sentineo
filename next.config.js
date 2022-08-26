const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const runtimeCaching = require("next-pwa/cache")

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_KEY: process.env.API_KEY,
    HOST: process.env.HOST,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = () => {
  const plugins = [withBundleAnalyzer, withPWA]
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  })
}
