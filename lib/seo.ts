import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  locale: string;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-default.jpg',
  canonicalUrl,
  locale
}: SEOConfig): Metadata {
  const baseUrl = 'https://spirulina-health.com';
  const fullTitle = `${title} | Spirulina Health`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: 'website',
      url: canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
    },
    alternates: {
      canonical: canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl,
    },
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  benefits: string[];
  locale: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: 'Health Supplement',
    brand: {
      '@type': 'Brand',
      name: 'Spirulina Health'
    },
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR'
    },
    additionalProperty: product.benefits.map(benefit => ({
      '@type': 'PropertyValue',
      name: 'Health Benefit',
      value: benefit
    }))
  };
}

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  datePublished: string;
  author: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Spirulina Health',
      logo: {
        '@type': 'ImageObject',
        url: 'https://spirulina-health.com/images/logo.png'
      }
    },
    articleSection: article.category,
    inLanguage: 'fr'
  };
}