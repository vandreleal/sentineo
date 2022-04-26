/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = withPlugins([withBundleAnalyzer, withPWA], {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_KEY: process.env.API_KEY,
    HOST: process.env.HOST,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    // SVG Loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
})

module.exports = nextConfig
