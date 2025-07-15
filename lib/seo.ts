import { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/images/og-default.jpg",
  canonicalUrl,
}: SEOConfig): Metadata {
  const baseUrl = "https://spiruline-sante.com";
  const fullTitle = title.includes("Spirulina Health")
    ? title
    : `${title} | Spirulina Health`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
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
      locale: "fr_FR",
      type: "website",
      url: canonicalUrl ? `${baseUrl}/${canonicalUrl}` : baseUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
    },
    alternates: {
      canonical: canonicalUrl ? `${baseUrl}/${canonicalUrl}` : baseUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  benefits: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: "Complément Alimentaire",
    brand: {
      "@type": "Brand",
      name: "Spirulina Health",
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
    },
    additionalProperty: product.benefits.map((benefit) => ({
      "@type": "PropertyValue",
      name: "Bienfait Santé",
      value: benefit,
    })),
    inLanguage: "fr",
  };
}

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  datePublished: string;
  author: string;
  category: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Spirulina Health",
      logo: {
        "@type": "ImageObject",
        url: "https://spiruline-sante.com/images/logo.png",
        width: 250,
        height: 60,
      },
    },
    articleSection: article.category,
    inLanguage: "fr",
    url: article.url ? `https://spiruline-sante.com/${article.url}` : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url
        ? `https://spiruline-sante.com/${article.url}`
        : undefined,
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ label: string; href?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://spiruline-sante.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `https://spiruline-sante.com${item.href}` : undefined,
      })),
    ],
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
