import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://zareshmeridian.com', lastModified: new Date() },
    { url: 'https://zareshmeridian.com/studio', lastModified: new Date() },
    { url: 'https://zareshmeridian.com/academy', lastModified: new Date() },
    { url: 'https://zareshmeridian.com/products', lastModified: new Date() },
    { url: 'https://zareshmeridian.com/about', lastModified: new Date() },
  ]
}
