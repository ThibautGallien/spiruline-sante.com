import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Star,
  Clock,
  AlertTriangle,
  Leaf,
  Heart,
  ShoppingBag,
  ArrowRight,
  Info,
} from "lucide-react";
import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";

// Métadonnées SEO
export const metadata: Metadata = generateSEOMetadata({
  title: "Qu'est-ce que la spiruline ? Guide complet 2025 | Spiruline Santé",
  description:
    "Découvrez tout sur la spiruline : définition, bienfaits, composition, dosage et utilisation. Guide expert complet sur cette micro-algue super-aliment.",
  keywords: [
    "qu'est-ce que la spiruline",
    "spiruline définition",
    "spiruline bienfaits",
    "spiruline composition",
    "spiruline utilisation",
    "spiruline dosage",
    "spiruline guide",
    "micro-algue spiruline",
    "super-aliment spiruline",
    "spiruline arthrospira",
    "spiruline contre-indications",
    "A3 Spirulina Pills",
    "spiruline histoire",
    "spiruline aztèques",
  ],
  canonicalUrl: "spiruline/la-spiruline-cest-quoi",
  ogImage: "/images/spiruline-definition-og.jpg",
});

const SpirulineArticle = () => {
  // Données structurées pour l'article
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Qu'est-ce que la spiruline ? Guide complet 2025",
    description:
      "Guide complet sur la spiruline : définition, histoire, bienfaits, composition, utilisation et précautions. Tout savoir sur cette micro-algue exceptionnelle.",
    datePublished: "2025-01-24T00:00:00.000Z",
    dateModified: "2025-01-24T00:00:00.000Z",
    author: {
      "@type": "Person",
      name: "Dr. Spiruline Expert",
    },
    publisher: {
      "@type": "Organization",
      name: "Spiruline Santé",
      logo: {
        "@type": "ImageObject",
        url: "https://spiruline-sante.com/images/logo.png",
        width: 250,
        height: 60,
      },
    },
    articleSection: "Guide",
    inLanguage: "fr",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://spiruline-sante.com/spiruline/la-spiruline-cest-quoi",
    },
    wordCount: 2000,
    keywords: [
      "spiruline",
      "micro-algue",
      "super-aliment",
      "nutrition",
      "santé",
    ],
  };

  // Fil d'Ariane
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://spiruline-sante.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Spiruline",
        item: "https://spiruline-sante.com/spiruline",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Qu'est-ce que la spiruline ?",
      },
    ],
  };

  // FAQ données structurées
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "La spiruline peut-elle soigner des maladies ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La spiruline est un complément alimentaire, pas un médicament. Elle soutient la santé générale mais ne peut pas diagnostiquer, traiter ou guérir des maladies. Consultez toujours un médecin pour tout problème de santé.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est l'apparence de la spiruline ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La spiruline fraîche est d'un vert-bleu intense. Sous forme de poudre ou comprimés, elle prend une couleur vert foncé caractéristique avec une odeur légèrement marine.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps avant de voir les effets ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les premiers effets (énergie, vitalité) peuvent se ressentir après 1-2 semaines. Pour des bénéfices optimaux, une cure de 3 mois minimum est recommandée.",
        },
      },
      {
        "@type": "Question",
        name: "La spiruline convient-elle aux végétariens ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, la spiruline est 100% végétale et convient parfaitement aux végétariens et végans. Elle est même recommandée pour compléter leur apport en protéines et vitamine B12.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on prendre la spiruline en continu ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, la spiruline peut être consommée en continu. Il est cependant recommandé de faire des pauses de quelques semaines tous les 3-6 mois pour éviter l'accoutumance.",
        },
      },
    ],
  };

  // Données produit structurées
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "A3 Spirulina Pills",
    description:
      "Spiruline premium en comprimés, 80 comprimés pour 20 jours de cure. Spirulina maxima cultivée en photobioréacteurs pour une qualité optimale.",
    brand: {
      "@type": "Brand",
      name: "Xelliss",
    },
    category: "Complément Alimentaire",
    offers: {
      "@type": "Offer",
      price: "37",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Contenance",
        value: "80 comprimés",
      },
      {
        "@type": "PropertyValue",
        name: "Durée",
        value: "20 jours",
      },
      {
        "@type": "PropertyValue",
        name: "Dosage",
        value: "2g par dose",
      },
    ],
  };

  const benefits = [
    "Protéines complètes (60-70%)",
    "Fer hautement biodisponible",
    "Vitamines B, A, E, K",
    "Antioxydants puissants",
    "Soutien du système immunitaire",
    "Amélioration de l'énergie",
  ];

  const sideEffects = [
    "Troubles digestifs légers",
    "Maux de tête (début)",
    "Réactions allergiques (rare)",
    "Interactions médicamenteuses possibles",
  ];

  const contraindications = [
    "Phénylcétonurie",
    "Maladies auto-immunes",
    "Hémochromatose",
    "Anticoagulants (surveillance)",
  ];

  const historicalFacts = [
    {
      period: "XIVe siècle",
      fact: "Consommée par les Aztèques au lac Texcoco",
    },
    { period: "1940", fact: "Redécouverte par le botaniste Pierre Dangeard" },
    {
      period: "1974",
      fact: "Déclarée 'meilleur aliment pour l'humanité' par l'ONU",
    },
    {
      period: "2000s",
      fact: "Boom commercial et études scientifiques modernes",
    },
  ];

  return (
    <>
      {/* Données structurées JSON-LD */}
      <StructuredData data={articleStructuredData} />
      <StructuredData data={breadcrumbStructuredData} />
      <StructuredData data={faqStructuredData} />
      <StructuredData data={productStructuredData} />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span>Accueil</span> → <span>Spiruline</span> →{" "}
          <span className="text-gray-900 font-medium">
            Qu'est-ce que la spiruline ?
          </span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qu'est-ce que la spiruline ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez cette micro-algue exceptionnelle, véritable trésor
            nutritionnel consommé depuis des siècles et reconnu aujourd'hui
            comme un super-aliment.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>8 min de lecture</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Guide Expert</span>
            </div>
          </div>
        </div>

        {/* Résumé bullet points */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              🌟 Ce que vous allez découvrir :
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-lg">Définition scientifique claire</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-lg">
                  Composition nutritionnelle complète
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-lg">
                  Histoire et origines ancestrales
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-lg">
                  Bienfaits scientifiquement prouvés
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-lg">Dosage et utilisation pratique</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-lg">
                  Précautions et contre-indications
                </span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <a href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                  🛒 Découvrir A3 Spirulina Pills - 37€
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-sm text-gray-600 text-center mt-2">
                ✅ 80 comprimés • 🚚 Livraison rapide • 💰 Qualité garantie
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Définition principale */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Définition : La spiruline, une micro-algue d'exception
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              La spiruline (<em>Arthrospira platensis</em> et{" "}
              <em>Spirulina maxima</em>) est une{" "}
              <strong>micro-algue bleu-vert</strong>
              de la famille des cyanobactéries. Contrairement à ce que son nom
              suggère, ce n'est pas une algue au sens strict, mais un
              micro-organisme qui existe sur Terre depuis plus de 3,5 milliards
              d'années.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Mesurant entre 0,1 et 0,3 millimètres, la spiruline doit son nom à
              sa <strong>forme spiralée caractéristique</strong>. Elle pousse
              naturellement dans les eaux alcalines des lacs tropicaux et
              subtropicaux, principalement en Afrique, Asie et Amérique
              centrale.
            </p>
          </div>

          <Card className="mt-6 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Le saviez-vous ?
                  </h4>
                  <p className="text-blue-800">
                    La spiruline est considérée par l'ONU comme{" "}
                    <strong>"l'aliment du futur"</strong> et pourrait nourrir
                    l'humanité grâce à son rendement exceptionnel et sa richesse
                    nutritionnelle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Histoire de la spiruline */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Histoire ancestrale : Des Aztèques à nos jours
          </h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bien avant d'être reconnue comme un super-aliment moderne, la
              spiruline était déjà consommée par les{" "}
              <strong>civilisations préhispaniques</strong>. Les Aztèques
              récoltaient cette "boue bleue" dans le lac Texcoco et l'appelaient{" "}
              <em>"tecuitlatl"</em>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {historicalFacts.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    {item.period}
                  </Badge>
                  <p className="text-gray-700">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Composition nutritionnelle */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Composition nutritionnelle : Un trésor de nutriments
          </h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              La spiruline est l'un des aliments les plus riches de la planète.
              Sa composition exceptionnelle explique pourquoi elle est
              considérée comme un <strong>super-aliment complet</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Protéines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  60-70%
                </div>
                <p className="text-sm text-gray-700">
                  Protéines complètes avec les 9 acides aminés essentiels. Plus
                  riche que la viande !
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800">Fer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  2,4mg
                </div>
                <p className="text-sm text-gray-700">
                  Pour 4 comprimés (17% des VNR). Fer hautement biodisponible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-800">Vitamines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  B12
                </div>
                <p className="text-sm text-gray-700">
                  Riche en vitamines B, A (57% VNR), E, K (28% VNR) et minéraux.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bienfaits principaux */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quels sont les bienfaits de la spiruline ?
          </h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Les bienfaits de la spiruline sont nombreux et{" "}
              <strong>scientifiquement documentés</strong>. Voici les
              principales actions sur votre organisme :
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-green-900 mb-3">
                Actions principales :
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>• Soutient le métabolisme énergétique¹</div>
                <div>• Réduit la fatigue⁶</div>
                <div>• Soutient les fonctions cognitives⁴</div>
                <div>• Contribue à une fonction sanguine normale⁵</div>
                <div>• Favorise le système immunitaire²,³</div>
                <div>• Maintient la santé musculaire⁷,⁸ et osseuse⁹,¹⁰</div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dosage et utilisation */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment utiliser la spiruline ? Dosage et conseils
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  Dosage recommandé
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">A3 Spirulina Pills :</h4>
                  <p className="text-lg">
                    <strong>4 comprimés par jour</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    = 2g de spiruline pure
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quand prendre :</h4>
                  <p className="text-sm">• De préférence avec un repas</p>
                  <p className="text-sm">• Avec un grand verre d'eau</p>
                  <p className="text-sm">• Le matin pour l'énergie</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800">
                  Conseils d'utilisation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Commencer progressivement (1-2 comprimés)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Augmenter graduellement jusqu'à 4/jour
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Conserver dans un endroit sec</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Cure de 3 mois recommandée</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Précautions et contre-indications */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Effets indésirables et contre-indications
          </h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bien que généralement bien tolérée, la spiruline peut présenter
              certains <strong>effets secondaires</strong>
              chez certaines personnes, particulièrement en début de cure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertTriangle className="h-5 w-5" />
                  Effets secondaires possibles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sideEffects.map((effect, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{effect}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <AlertTriangle className="h-5 w-5" />
                  Contre-indications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {contraindications.map((contra, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{contra}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">
                    Important :
                  </h4>
                  <p className="text-red-800">
                    Si vous êtes enceinte, allaitez ou souffrez d'un problème de
                    santé, consultez votre médecin avant d'utiliser ce produit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Produit */}
        <section>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Prêt à découvrir les bienfaits de la spiruline ?
              </h3>
              <p className="text-lg text-green-800 mb-6">
                A3 Spirulina Pills vous offre une spiruline de qualité premium
                dans un format pratique et concentré.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>
                      <strong>80 comprimés</strong> (1 mois)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>
                      <strong>2g de spiruline</strong> par dose
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>
                      <strong>Qualité garantie</strong>
                    </span>
                  </div>
                </div>
              </div>
              <a href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/">
                <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Commander A3 Spirulina Pills - 37€
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-sm text-gray-600 mt-4">
                ✅ Livraison rapide • 💰 Paiement sécurisé • 📞 Support client
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions fréquentes sur la spiruline
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  La spiruline peut-elle soigner des maladies ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  La spiruline est un complément alimentaire, pas un médicament.
                  Elle soutient la santé générale mais ne peut pas
                  diagnostiquer, traiter ou guérir des maladies. Consultez
                  toujours un médecin pour tout problème de santé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Quelle est l'apparence de la spiruline ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  La spiruline fraîche est d'un vert-bleu intense. Sous forme de
                  poudre ou comprimés, elle prend une couleur vert foncé
                  caractéristique avec une odeur légèrement marine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Combien de temps avant de voir les effets ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Les premiers effets (énergie, vitalité) peuvent se ressentir
                  après 1-2 semaines. Pour des bénéfices optimaux, une cure de 3
                  mois minimum est recommandée.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  La spiruline convient-elle aux végétariens ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Oui, la spiruline est 100% végétale et convient parfaitement
                  aux végétariens et végans. Elle est même recommandée pour
                  compléter leur apport en protéines et vitamine B12.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Peut-on prendre la spiruline en continu ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Oui, la spiruline peut être consommée en continu. Il est
                  cependant recommandé de faire des pauses de quelques semaines
                  tous les 3-6 mois pour éviter l'accoutumance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusion : Pourquoi choisir la spiruline ?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              La spiruline n'est pas qu'une simple tendance santé : c'est un{" "}
              <strong>aliment complet </strong>
              aux propriétés nutritionnelles exceptionnelles, consommé depuis
              des millénaires et validé par la science moderne.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Que vous cherchiez à <strong>améliorer votre énergie</strong>,
              renforcer votre système immunitaire ou optimiser votre nutrition,
              la spiruline peut être un excellent complément à une alimentation
              équilibrée et un mode de vie sain.
            </p>
          </div>

          <Card className="mt-6 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-blue-900 mb-3">
                La spiruline est faite pour vous si :
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Vous manquez d'énergie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Vous êtes sportif</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Vous êtes végétarien/végan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Vous voulez renforcer votre immunité</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Final */}
        <div className="text-center py-12">
          <a href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-6">
              <Leaf className="mr-3 h-6 w-6" />
              Commencer avec A3 Spirulina Pills
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </a>
          <p className="text-gray-600 mt-4">
            Votre voyage vers une meilleure santé commence ici 🌱
          </p>
        </div>
      </div>
    </>
  );
};

export default SpirulineArticle;
