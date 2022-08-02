/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true,
      pure: true,
    },
  },
}

module.exports = nextConfig
