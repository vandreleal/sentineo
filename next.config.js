const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

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
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
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
