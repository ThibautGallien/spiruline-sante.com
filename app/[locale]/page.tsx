import { useTranslations } from 'next-intl';
import { generateSEOMetadata } from '@/lib/seo';
import { StructuredData } from '@/components/seo/structured-data';
import { getBlogPosts } from '@/lib/content';
import { locales } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NewsletterForm } from '@/components/forms/newsletter-form';
import { Leaf, Shield, Zap, Award, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return generateSEOMetadata({
    title: 'Spirulina Health - Découvrez les Bienfaits de la Spiruline, Phycocyanine et Oméga-3',
    description: 'Votre guide complet pour une santé optimale avec les super-aliments naturels. Explorez les propriétés exceptionnelles de la spiruline, phycocyanine et oméga-3.',
    keywords: ['spiruline', 'phycocyanine', 'oméga-3', 'super-aliments', 'santé naturelle', 'antioxydants'],
    locale: locale as any,
    canonicalUrl: `/${locale}`,
  });
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home');
  const commonT = useTranslations('common');
  const blogPosts = getBlogPosts(locale).slice(0, 3);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Spirulina Health',
    url: 'https://spirulina-health.com',
    logo: 'https://spirulina-health.com/images/logo.png',
    description: t('description'),
    sameAs: [
      'https://facebook.com/spirulinahealth',
      'https://twitter.com/spirulinahealth',
      'https://instagram.com/spirulinahealth'
    ]
  };

  const products = [
    {
      title: 'Spiruline',
      description: 'Micro-algue riche en protéines, vitamines et minéraux essentiels',
      image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: `/${locale}/spirulina`,
      icon: Leaf
    },
    {
      title: 'Phycocyanine',
      description: 'Pigment bleu aux propriétés antioxydantes et anti-inflammatoires',
      image: 'https://images.pexels.com/photos/7689732/pexels-photo-7689732.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: `/${locale}/phycocyanin`,
      icon: Shield
    },
    {
      title: 'Oméga-3',
      description: 'Acides gras essentiels pour la santé cardiovasculaire et cérébrale',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: `/${locale}/omega-3`,
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: t('benefits.natural'),
      description: t('benefits.naturalDesc')
    },
    {
      icon: Award,
      title: t('benefits.scientific'),
      description: t('benefits.scientificDesc')
    },
    {
      icon: Shield,
      title: t('benefits.quality'),
      description: t('benefits.qualityDesc')
    }
  ];

  return (
    <>
      <StructuredData data={organizationSchema} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
              <Link href={`/${locale}/spirulina`}>
                {t('heroButton')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('featuredProducts')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <product.icon className="h-5 w-5 text-green-600" />
                    <CardTitle>{product.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={product.href}>
                      {commonT('learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {blogPosts.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('latestArticles')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} {commonT('readingTime')}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/${locale}/blog/${post.slug}`}>
                        {commonT('readMore')}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href={`/${locale}/blog`}>
                  Voir tous les articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('newsletterTitle')}
            </h2>
            <p className="text-green-100 mb-8">
              {t('newsletterDescription')}
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}