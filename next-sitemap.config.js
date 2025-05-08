/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.nabaaalkhaleej.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*'],
      },
    ],
    additionalSitemaps: [
      'https://www.nabaaalkhaleej.com/sitemap.xml',
      'https://www.nabaaalkhaleej.com/server-sitemap.xml',
      'https://www.nabaaalkhaleej.com/blog-sitemap.xml',
    ],
  },
  exclude: ['/404', '/500', '/server-sitemap.xml'],
  outDir: './public',
  // Alternate languages for each page
  alternateRefs: [
    {
      href: 'https://www.nabaaalkhaleej.com',
      hreflang: 'ar',
    },
    {
      href: 'https://www.nabaaalkhaleej.com/en',
      hreflang: 'en',
    },
  ],
  // Transformations to format URLs correctly
  transform: async (config, path) => {
    // Add priority for blog posts
    if (path.includes('/blog/') && !path.endsWith('/blog')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Higher priority for main pages
    if (path === '/' || path === '/services' || path === '/about' || path === '/contact' || path === '/track-order' || path === '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Return the default transformation for most paths
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}; 