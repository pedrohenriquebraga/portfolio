const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
// eslint-disable-next-line import/no-anonymous-default-export
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "/server-sitemap-server"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}sitemap.xml`,
      `${siteUrl}server-sitemap.xml`,
    ],
  },
};