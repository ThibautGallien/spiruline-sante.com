import { generateSEOMetadata } from '@/lib/seo';
import { getBlogPosts } from '@/lib/content';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Blog Santé - Actualités Spiruline, Phycocyanine et Oméga-3',
    description: 'Découvrez nos derniers articles sur les bienfaits de la spiruline, phycocyanine et oméga-3. Conseils, études scientifiques et actualités santé.',
    keywords: ['blog santé', 'spiruline articles', 'phycocyanine études', 'oméga-3 conseils', 'nutrition santé'],
    locale: 'fr',
    canonicalUrl: '/blog',
  });
}

export default function BlogPage() {
  const blogPosts = getBlogPosts('fr');

  const breadcrumbItems = [
    { label: 'Blog Santé' }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="container py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blog Santé
        </h1>
        <p className="text-xl text-gray-600">
          Actualités, conseils et découvertes sur la spiruline, phycocyanine et oméga-3
        </p>
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Catégories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {blogPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun article disponible</p>
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Article à la une</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge>{featuredPost.category}</Badge>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readingTime} min de lecture</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Lire plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p className="text-gray-600">Article vedette</p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Tous les articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{post.readingTime} min de lecture</span>
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${post.slug}`}>
                          Lire plus
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}