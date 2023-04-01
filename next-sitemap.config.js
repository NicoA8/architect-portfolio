/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_WEBSITE,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ["/server-sitemap.xml"],
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.NEXT_PUBLIC_WEBSITE}/server-sitemap.xml`,
        ],
    },
};
