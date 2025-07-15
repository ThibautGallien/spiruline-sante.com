import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { getBlogPosts } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ArrowRight, Star, CheckCircle, Heart, Gift } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Spirulina Health - Découvrez les Bienfaits de la Spiruline, Phycocyanine et Oméga-3",
    description:
      "Votre guide complet pour une santé optimale avec les super-aliments naturels. Découvrez nos produits Zinzino et Xelliss recommandés par nos experts.",
    keywords: [
      "spiruline",
      "phycocyanine",
      "oméga-3",
      "zinzino",
      "xelliss",
      "balance oil",
      "phycosci x14",
      "super-aliments",
    ],
    canonicalUrl: "",
  });
}

export default function HomePage() {
  const blogPosts = getBlogPosts().slice(0, 3);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spirulina Health",
    url: "https://spiruline-sante.com",
    logo: "https://spiruline-sante.com/images/logo.png",
    description:
      "Votre guide complet pour une santé optimale avec les super-aliments naturels",
  };

  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Spiruline premium en poudre",
      title: "Spiruline Premium",
      subtitle: "La micro-algue aux 1000 vertus",
    },
    {
      src: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Compléments Oméga-3 naturels",
      title: "Oméga-3 Essentiels",
      subtitle: "Pour votre santé cardiovasculaire",
    },
    {
      src: "https://images.pexels.com/photos/7689732/pexels-photo-7689732.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Phycocyanine liquide concentrée",
      title: "Phycocyanine Pure",
      subtitle: "Le pigment bleu aux propriétés exceptionnelles",
    },
  ];

  const xellissProducts = [
    {
      name: "PHYCOSCI X14",
      description:
        "Découvrez la puissance concentrée de la phycocyanine avec PhycoSci X14, un extrait naturel aux bienfaits revitalisants pour l'énergie et l'immunité.",
      detailedDescription:
        "Boostez votre vitalité grâce à cette solution pure et efficace, conçue pour soutenir votre bien-être au quotidien.",
      image: "/images/phycosci-x14.jpg", // Tu changeras cette image
      benefits: [
        "Énergie naturelle",
        "Immunité renforcée",
        "Antioxydants puissants",
        "Formule concentrée",
      ],
      cta: "Je Découvre",
      href: "/blog/phycosci-x14-xelliss",
      color: "blue",
    },
    {
      name: "A3 SPIRULINA PILLS",
      description:
        "Faites le plein de nutriments essentiels avec A3 Spirulina Pills. Ces comprimés concentrés de spiruline vous apportent un soutien naturel.",
      detailedDescription:
        "Pour une énergie durable, un système immunitaire renforcé et un bien-être global. Idéal pour ceux qui recherchent un coup de pouce quotidien en toute simplicité.",
      image: "/images/a3-spirulina-pills.jpg", // Tu changeras cette image
      benefits: [
        "Nutriments concentrés",
        "Énergie durable",
        "Système immunitaire",
        "Simplicité d'usage",
      ],
      cta: "Je Découvre",
      href: "/blog/a3-spirulina-pills-de-xelliss-avis",
      color: "green",
    },
    {
      name: "BALANCE OIL+",
      description:
        "Équilibrez votre santé avec Balance Oil+, une synergie puissante d'Omega-3 et de Vitamine D pour nourrir votre corps.",
      detailedDescription:
        "Chaque dose favorise la clarté mentale, l'immunité et le bien-être global. Adoptez cette solution complète pour une vitalité durable.",
      image: "/images/balance-oil-plus.jpg", // Tu changeras cette image
      benefits: [
        "Ratio oméga parfait",
        "Clarté mentale",
        "Immunité optimale",
        "Vitalité durable",
      ],
      cta: "Je Découvre",
      href: "https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/health/701005/BalanceOil",
      color: "orange",
      external: true,
    },
  ];

  const testimonials = [
    {
      name: "Marie L.",
      text: "Grâce à BalanceOil+, mes analyses sanguines se sont considérablement améliorées en 3 mois.",
      rating: 5,
      product: "BalanceOil+",
    },
    {
      name: "Pierre D.",
      text: "PhycoSci X14 m'a redonné une énergie que je n'avais plus depuis des années !",
      rating: 5,
      product: "PhycoSci X14",
    },
    {
      name: "Sophie M.",
      text: "Les guides spiruline m'ont aidée à faire le bon choix. Service client très professionnel.",
      rating: 5,
      product: "Conseils",
    },
  ];

  return (
    <>
      <StructuredData data={organizationSchema} />

      {/* Hero Section avec Carrousel */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  🏆 Experts en Super-Aliments
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transformez Votre Santé avec les
                <span className="text-green-600"> Super-Aliments</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez notre sélection de produits premium Zinzino et
                Xelliss, ainsi que nos guides experts sur la spiruline,
                phycocyanine et oméga-3 pour une santé optimale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                    target="_blank"
                  >
                    🛒 Boutique Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/spiruline">📖 Guides Gratuits</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Livraison rapide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Garantie satisfaction</span>
                </div>
              </div>
            </div>

            {/* Carrousel d'images */}
            <div className="relative">
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-96 rounded-2xl overflow-hidden group">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">
                            {image.title}
                          </h3>
                          <p className="text-white/90">{image.subtitle}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Prominente */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    🎁 Recevez Votre Guide Gratuit !
                  </h2>
                  <p className="text-green-100 text-lg">
                    + Conseils exclusifs et offres réservées aux abonnés
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto mb-6">
              <NewsletterForm variant="dark" size="lg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Guide PDF spiruline offert</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Offres exclusives -20%</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Conseils d'experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits Xelliss et Zinzino */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Produits Premium Recommandés
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une sélection rigoureuse de compléments haut de gamme,
              scientifiquement formulés et approuvés par nos experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {xellissProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 hover:border-green-200"
              >
                <div
                  className={`relative h-64 bg-gradient-to-br ${
                    product.color === "blue"
                      ? "from-blue-50 to-blue-100"
                      : product.color === "green"
                      ? "from-green-50 to-green-100"
                      : "from-orange-50 to-orange-100"
                  } flex items-center justify-center`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 ${
                        product.color === "blue"
                          ? "bg-blue-600"
                          : product.color === "green"
                          ? "bg-green-600"
                          : "bg-orange-600"
                      } text-white text-xs font-bold rounded-full`}
                    >
                      PREMIUM
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl mb-3">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <p className="text-sm text-gray-600 mt-2">
                    {product.detailedDescription}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <CheckCircle
                          className={`h-4 w-4 ${
                            product.color === "blue"
                              ? "text-blue-600"
                              : product.color === "green"
                              ? "text-green-600"
                              : "text-orange-600"
                          } flex-shrink-0`}
                        />
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full ${
                      product.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : product.color === "green"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-orange-600 hover:bg-orange-700"
                    } text-lg py-6`}
                  >
                    <Link
                      href={product.href}
                      target={product.external ? "_blank" : undefined}
                    >
                      {product.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Rejoignez Notre Communauté Santé
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-green-400">50K+</div>
              <div className="text-gray-300">Lecteurs mensuels</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-blue-400">98%</div>
              <div className="text-gray-300">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-purple-400">
                1000+
              </div>
              <div className="text-gray-300">Commandes livrées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">5★</div>
              <div className="text-gray-300">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Des milliers de personnes ont déjà transformé leur santé
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-l-4 border-green-500"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        {testimonial.name}
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                      {testimonial.product}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Commencer Votre Transformation Santé ?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Rejoignez des milliers de personnes qui ont déjà optimisé leur
              santé avec nos produits premium et guides experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg py-4 px-8 h-auto"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                  target="_blank"
                >
                  🛒 Découvrir la Boutique
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 font-semibold text-lg py-4 px-8 h-auto"
                asChild
              >
                <Link href="/spiruline">📚 Guides Gratuits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
