/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  images: {
    remotePatterns: [],
  },
  // Lower peak RAM during `next build` on small VPS instances (4GB)
  webpack: (webpackConfig) => {
    webpackConfig.parallelism = 1
    return webpackConfig
  },
}

export default config
