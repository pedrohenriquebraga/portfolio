/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
    localeDetection: true,
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
}

module.exports = nextConfig
