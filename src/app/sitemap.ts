import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://free-for-students.vercel.app'; // Replace with the actual domain later if it changes

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Adding the /admin page to sitemap isn't strictly necessary, 
    // and usually you don't want admins indexed, but if there are other routes 
    // we would add them here.
  ];
}
