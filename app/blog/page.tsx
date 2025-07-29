import { generateSEOMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Heart,
  Sparkles,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Blog Spiruline et Santé Naturelle - Conseils d'Experts",
    description:
      "Découvrez nos articles d'experts sur la spiruline, phycocyanine, oméga-3 et compléments naturels. Conseils santé, études scientifiques et guides pratiques.",
    canonicalUrl: "blog",
    keywords: [
      "blog spiruline",
      "santé naturelle",
      "phycocyanine",
      "oméga-3",
      "compléments alimentaires",
      "nutrition santé",
      "conseils experts",
      "bien-être naturel",
      "micronutrition",
    ],
  });
}

export default function BlogPage() {
  const breadcrumbItems = [{ label: "Blog Spiruline et Santé Naturelle" }];

  // Articles réels basés sur la structure existante de votre site
  // Ces articles utilisent des images par défaut ou spécifiques selon le contenu
  const articles = [
    {
      slug: "spiruline-cheveux",
      title: "Spiruline et Cheveux : Guide Complet 2024",
      excerpt:
        "Découvrez comment la spiruline transforme vos cheveux : réduit la chute de 68%, stimule la croissance et renforce la fibre capillaire.",
      readTime: "12 min",
      date: "15 décembre 2024",
      author: "Thibaut",
      // Image par défaut spiruline/cheveux
      defaultImage: "spiruline",
      isPopular: true,
    },
    {
      slug: "xelliss-produits",
      title: "Xelliss produits : bienfaits, usages et où les acheter",
      excerpt:
        "Les produits Xelliss incarnent l'innovation dans le domaine de la nutrition. Découvrez la gamme complète : spiruline, phycocyanine, carafe filtrante.",
      readTime: "10 min",
      date: "26 novembre 2024",
      author: "Thibaut",
      defaultImage: "products",
      isNew: true,
    },
    {
      slug: "avis-zinzino-arnaque-ou-produits-de-qualite",
      title: "Avis Zinzino : arnaque ou produits de qualité ?",
      excerpt:
        "Notre analyse complète et objective des produits Zinzino : qualité, prix, business model et avis clients authentiques.",
      readTime: "15 min",
      date: "20 novembre 2024",
      author: "Équipe Spirulina Health",
      defaultImage: "analysis",
      isPopular: true,
    },
    {
      slug: "bienfaits-spiruline-peau-guide-complet",
      title: "Bienfaits de la spiruline pour la peau",
      excerpt:
        "Comment la spiruline peut transformer votre peau : hydratation, anti-âge, éclat naturel. Conseils d'utilisation et recettes DIY.",
      readTime: "8 min",
      date: "15 novembre 2024",
      author: "Dr. Marie Dubois",
      defaultImage: "skincare",
    },
    {
      slug: "balance-oil-zinzino-avis",
      title: "Balance Oil Zinzino : avis et test complet",
      excerpt:
        "Test approfondi de Balance Oil Zinzino : composition, bienfaits des oméga-3, prix et retours d'expérience utilisateurs.",
      readTime: "12 min",
      date: "10 novembre 2024",
      author: "Thibaut",
      defaultImage: "omega3",
    },
    {
      slug: "spiruline-fer",
      title: "Spiruline et fer : la solution contre la carence",
      excerpt:
        "Pourquoi la spiruline est une excellente source de fer biodisponible. Lutter efficacement contre l'anémie et la fatigue.",
      readTime: "7 min",
      date: "5 novembre 2024",
      author: "Dr. Sophie Leclerc",
      defaultImage: "spiruline",
    },
    {
      slug: "phycosci-x14-xelliss",
      title: "PhycoSci X14 Xelliss : concentré de phycocyanine",
      excerpt:
        "Découvrez PhycoSci X14, le concentré liquide de spiruline le plus riche en phycocyanine du marché.",
      readTime: "6 min",
      date: "1er novembre 2024",
      author: "Thibaut",
      defaultImage: "phycocyanine",
    },
    {
      slug: "omega-3-cheveux",
      title: "Oméga-3 et cheveux : guide complet",
      excerpt:
        "Les bienfaits des oméga-3 EPA et DHA pour la santé capillaire. Prévenir la chute, stimuler la croissance et apporter brillance.",
      readTime: "9 min",
      date: "28 octobre 2024",
      author: "Dr. Marie Dubois",
      defaultImage: "omega3",
    },
    {
      slug: "a3-spirulina-pills-de-xelliss-avis",
      title: "A3 Spirulina Pills Xelliss : avis et test",
      excerpt:
        "Test complet des comprimés A3 Spirulina Pills de Xelliss : efficacité, qualité et retours d'expérience.",
      readTime: "8 min",
      date: "25 octobre 2024",
      author: "Thibaut",
      defaultImage: "pills",
    },
    {
      slug: "carafe-filtrante-xelliss-xelliwater",
      title: "Carafe filtrante Xelliss XelliWater : test et avis",
      excerpt:
        "Test complet de la carafe filtrante Xelliss : efficacité, qualité et rapport qualité-prix.",
      readTime: "7 min",
      date: "20 octobre 2024",
      author: "Thibaut",
      defaultImage: "water",
    },
  ];

  // Fonction pour obtenir l'image par défaut selon le type de contenu
  const getDefaultImage = (imageType: string) => {
    const imageMap = {
      spiruline:
        "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800",
      phycocyanine:
        "https://images.pexels.com/photos/3762881/pexels-photo-3762881.jpeg?auto=compress&cs=tinysrgb&w=800",
      omega3:
        "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800",
      products:
        "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
      pills:
        "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800",
      skincare:
        "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
      analysis:
        "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800",
      water:
        "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800",
      default:
        "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800",
    };
    return imageMap[imageType as keyof typeof imageMap] || imageMap.default;
  };

  // Composant pour les articles sans image (fallback)
  const ArticleCardWithoutImage = ({
    article,
  }: {
    article: (typeof articles)[0];
  }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border hover:border-green-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {article.isPopular && (
              <Badge className="bg-red-500 text-white text-xs">Populaire</Badge>
            )}
            {article.isNew && (
              <Badge className="bg-green-500 text-white text-xs">Nouveau</Badge>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            {article.readTime}
          </div>
        </div>
        <CardTitle className="text-lg line-clamp-3 group-hover:text-green-600 transition-colors">
          {article.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="w-full h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
          <FileText className="h-6 w-6 text-green-600" />
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {article.date}
            </div>
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="text-green-600 hover:text-green-700"
            asChild
          >
            <Link href={`/blog/${article.slug}`}>
              Lire
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container px-4 md:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <BookOpen className="h-4 w-4 mr-1" />
              Blog Expert
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Sparkles className="h-4 w-4 mr-1" />
              Santé Naturelle
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Blog Spiruline et
            <span className="text-green-600"> Santé Naturelle</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Découvrez nos articles d'experts sur la spiruline, phycocyanine,
            oméga-3 et compléments naturels. Conseils pratiques, études
            scientifiques et guides complets pour optimiser votre bien-être
            naturellement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <FileText className="mr-2 h-5 w-5" />
              Tous les Articles
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Heart className="mr-2 h-5 w-5" />
              Articles Populaires
            </Button>
          </div>

          {/* Stats simples */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="bg-white/70 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Articles</div>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">15k+</div>
              <div className="text-sm text-gray-600">Lecteurs</div>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-lg p-4 text-center md:block hidden">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-sm text-gray-600">Experts</div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Articles principaux */}
            <div className="lg:col-span-3">
              {/* Article Featured */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Article à la Une
                  </h2>
                </div>

                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-200">
                  <div className="relative h-72 lg:h-96">
                    <Image
                      src={getDefaultImage(articles[0].defaultImage)}
                      alt={articles[0].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 space-x-2">
                      {articles[0].isPopular && (
                        <Badge className="bg-red-500 text-white">
                          <Heart className="h-3 w-3 mr-1" />
                          Populaire
                        </Badge>
                      )}
                      {articles[0].isNew && (
                        <Badge className="bg-green-500 text-white">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Nouveau
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 line-clamp-2">
                        {articles[0].title}
                      </h3>
                      <p className="text-white/90 mb-4 line-clamp-2 text-lg">
                        {articles[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-white/80 text-sm">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {articles[0].author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {articles[0].date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {articles[0].readTime}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-white text-gray-900 hover:bg-gray-100"
                          asChild
                        >
                          <Link href={`/blog/${articles[0].slug}`}>
                            Lire l'article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Articles récents */}
              <section className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Articles Récents
                  </h2>
                  <span className="text-gray-500">
                    {articles.length} articles
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {articles.slice(1).map((article, index) => (
                    <Card
                      key={article.slug}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 group border hover:border-green-200"
                    >
                      <div className="relative h-48">
                        <Image
                          src={getDefaultImage(article.defaultImage)}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute top-3 left-3 space-x-2">
                          {article.isPopular && (
                            <Badge className="bg-red-500 text-white text-xs">
                              <Heart className="h-3 w-3 mr-1" />
                              Populaire
                            </Badge>
                          )}
                          {article.isNew && (
                            <Badge className="bg-green-500 text-white text-xs">
                              <Sparkles className="h-3 w-3 mr-1" />
                              Nouveau
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg line-clamp-2 group-hover:text-green-600 transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <div className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {article.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {article.date}
                            </div>
                          </div>

                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-green-600 hover:text-green-700"
                            asChild
                          >
                            <Link href={`/blog/${article.slug}`}>
                              Lire l'article
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Fix complet du problème de superposition */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Newsletter - Position sticky corrigée avec espacement et z-index */}
                <div className="lg:sticky lg:top-8 lg:z-20">
                  <Card className="shadow-lg border-2 bg-white">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        Restez informé !
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center mb-4 text-sm">
                        Recevez nos derniers conseils santé et articles
                        directement dans votre boîte mail.
                      </p>
                      <NewsletterForm size="sm" />
                      <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-center">
                        <div className="bg-green-50 p-2 rounded">
                          <div className="font-semibold text-green-700">
                            2k+
                          </div>
                          <div className="text-green-600">Abonnés</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <div className="font-semibold text-blue-700">
                            1/sem
                          </div>
                          <div className="text-blue-600">Newsletter</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Espacement pour éviter la superposition */}
                <div className="lg:pt-4"></div>

                {/* Articles populaires - Position normale avec z-index bas */}
                <Card className="lg:relative lg:z-0 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-red-600" />
                      Articles Populaires
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {articles
                        .filter((article) => article.isPopular)
                        .slice(0, 4)
                        .map((article, index) => (
                          <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="block group"
                          >
                            <div className="flex space-x-3">
                              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                                <ImageIcon className="h-6 w-6 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm line-clamp-2 group-hover:text-green-600 transition-colors">
                                  {article.title}
                                </h4>
                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {article.date}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Info site */}
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-purple-600" />À
                      propos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Spirulina Health est votre source d'information fiable sur
                      la spiruline, phycocyanine et compléments naturels.
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href="/about">
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
