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
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: `www.${process.env.NEXT_PUBLIC_DOMAIN_URL}` }],
      destination: `${process.env.NEXT_PUBLIC_DOMAIN_URL}:path*`,
      permanent: true
    }
  ]
}

module.exports = nextConfig
