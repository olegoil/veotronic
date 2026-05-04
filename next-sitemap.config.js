// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://veotronic.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [
            'https://veotronic.com/sitemap.xml',
        ],
    },
    exclude: ['/admin', '/dashboard'], // исключите ненужные страницы
}