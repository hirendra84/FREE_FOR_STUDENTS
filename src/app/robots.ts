import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Don't crawl the admin panel
    },
    sitemap: 'https://free-for-students.vercel.app/sitemap.xml',
  };
}
