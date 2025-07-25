import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
  Shield,
  Star,
  Heart,
  Target,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Spiruline et Perte de Poids : Guide Complet 2024",
    description:
      "La spiruline aide-t-elle vraiment à perdre du poids ? Découvrez son effet coupe-faim, son impact sur le métabolisme et comment l'utiliser efficacement.",
    keywords: [
      "spiruline perte de poids",
      "spiruline maigrir",
      "spiruline coupe faim",
      "spiruline métabolisme",
      "spiruline ventre",
      "comment prendre spiruline",
      "spiruline efficace",
      "A3 spirulina pills",
    ],
    canonicalUrl: "blog/spiruline-perte-de-poids",
  });
}

export default function SpirulinePertePoids() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Spiruline et Perte de Poids" },
  ];

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "La spiruline fait-elle perdre du poids rapidement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, la spiruline n'est pas un brûleur de graisses rapide. Elle agit comme un coupe-faim naturel et optimise le métabolisme. Une perte de 2-4 kg sur 3 mois est réaliste en complément d'un régime adapté.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on prendre de la spiruline pendant un régime strict ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, c'est même recommandé ! Sa richesse nutritionnelle évite les carences fréquentes lors des régimes restrictifs, tout en apportant un effet de satiété.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il prendre de la spiruline pour voir des résultats ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les premiers effets (réduction appétit) apparaissent dès 7-15 jours. Pour une perte de poids visible, comptez 4-6 semaines minimum.",
        },
      },
    ],
  };

  // Schema for article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Spiruline et Perte de Poids : Un Allié Naturel Pour Votre Silhouette ?",
    description:
      "Guide complet sur l'utilisation de la spiruline pour la perte de poids : effet coupe-faim, impact métabolique et conseils d'utilisation.",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    author: {
      "@type": "Person",
      name: "Équipe Spirulina Health",
    },
    publisher: {
      "@type": "Organization",
      name: "Spirulina Health",
      logo: {
        "@type": "ImageObject",
        url: "https://spiruline-sante.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://spiruline-sante.com/blog/spiruline-perte-de-poids",
    },
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Spiruline et Perte de Poids : Un Allié Naturel Pour Votre Silhouette
            ?
          </h1>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-8">
            <span>📅 Mis à jour le 15 janvier 2024</span>
            <span>⏱️ 8 min de lecture</span>
            <span>👤 Équipe Spirulina Health</span>
          </div>
        </header>

        {/* Résumé en bullet points */}
        <Card className="mb-12 border-l-4 border-green-500 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-green-800">
              🌟 Ce que vous allez découvrir :
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Effet coupe-faim naturel</strong> : Comment la
                  spiruline réduit l'appétit naturellement
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Métabolisme boosté</strong> : Son impact réel sur la
                  combustion des graisses
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Pour qui ça marche</strong> : Profils qui bénéficient
                  le plus de ses effets
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Mode d'emploi précis</strong> : Dosage optimal et
                  moment de prise
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Résultats attendus</strong> : Délais réalistes et
                  effets mesurables
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Précautions importantes</strong> : Contre-indications
                  et effets secondaires
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border">
              <p className="text-lg text-center mb-4">
                <strong>🛒 Envie d'essayer dès maintenant ?</strong>
              </p>
              <Button
                asChild
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-4"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  Découvrir A3 Spirulina Pills (37€ - 3 semaines)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Vous cherchez une solution naturelle pour vous aider dans votre
            perte de poids ? La spiruline, cette micro-algue aux propriétés
            exceptionnelles, fait beaucoup parler d'elle. Mais peut-elle
            réellement vous aider à perdre du poids ? Dans ce guide complet,
            vous découvrirez comment la spiruline agit sur votre métabolisme,
            son effet coupe-faim et comment l'utiliser efficacement pour
            soutenir vos objectifs minceur.
          </p>
        </div>

        {/* Comment ça marche */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comment la spiruline agit-elle sur la perte de poids ?
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            La spiruline ne fait pas maigrir par magie, mais elle possède des
            propriétés qui peuvent soutenir efficacement une démarche de perte
            de poids. Voici comment elle fonctionne concrètement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-green-700">
                  <Target className="h-6 w-6 mr-2" />
                  Effet coupe-faim naturel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  La spiruline contient{" "}
                  <strong>60 à 70% de protéines complètes</strong>, soit plus
                  que la viande ou le poisson.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Réduction des fringales entre repas
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Diminution naturelle des portions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Évite les grignotages sucrés
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-blue-700">
                  <Zap className="h-6 w-6 mr-2" />
                  Boost du métabolisme
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  Stimule votre métabolisme grâce à sa richesse en nutriments
                  essentiels.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Fer biodisponible (oxygénation)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Vitamines B (énergie)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    +8 à 12% de dépense énergétique
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-purple-700">
                  <Heart className="h-6 w-6 mr-2" />
                  Régulation glycémique
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  Stabilise le taux de sucre sanguin, évitant le stockage des
                  graisses.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    -8% glycémie à jeun
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    -15% cholestérol total
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                    Évite les pics d'insuline
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spiruline et ventre */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            La spiruline peut-elle dégonfler le ventre ?
          </h2>

          <Card className="bg-blue-50 border-l-4 border-blue-500">
            <CardContent className="pt-6">
              <p className="text-xl text-blue-900 font-semibold mb-4">
                <strong>
                  Oui, la spiruline peut aider à réduire les ballonnements
                </strong>{" "}
                grâce à ses propriétés détoxifiantes et anti-inflammatoires.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                La <strong>phycocyanine</strong>, son pigment bleu aux puissants
                effets antioxydants, aide à :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg">
                    Réduire l'inflammation intestinale
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg">
                    Éliminer les toxines digestives
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg">
                    Améliorer le transit intestinal
                  </span>
                </div>
              </div>

              <p className="text-lg text-blue-800 font-medium mt-4">
                <strong>Résultat :</strong> un ventre moins gonflé et une
                silhouette plus harmonieuse dès les premières semaines.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Réalisme */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spiruline et perte de poids : soyons réalistes
          </h2>

          <Card className="bg-orange-50 border-l-4 border-orange-500">
            <CardContent className="pt-6">
              <p className="text-xl text-orange-900 font-semibold mb-4">
                <strong>Important à retenir :</strong> La spiruline n'est pas un
                brûleur de graisses miraculeux. Elle ne vous fera pas perdre 10
                kilos en buvant simplement un shake.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Son rôle est de <strong>soutenir efficacement</strong> votre
                démarche globale incluant :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-lg">
                    Alimentation équilibrée hypocalorique
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-lg">Activité physique régulière</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-lg">Bonne hydratation</span>
                </div>
              </div>

              <p className="text-lg text-orange-800 font-medium mt-4">
                La spiruline vous aide en réduisant la sensation de faim, en
                évitant les carences nutritionnelles liées aux régimes, et en
                optimisant votre métabolisme.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comment utiliser */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comment utiliser la spiruline pour perdre du poids ?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="h-6 w-6 mr-2 text-green-600" />
                  Dosage optimal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-4">
                <p>
                  <strong>Dose recommandée :</strong> 3 à 5 grammes par jour
                  (soit 4 comprimés de A3 Spirulina Pills)
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Protocole sur 3 mois :
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-2" />
                      <span>
                        <strong>Semaine 1-2 :</strong> 2g/jour pour habituer
                        l'organisme
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-2" />
                      <span>
                        <strong>Semaine 3-12 :</strong> 4g/jour (dose optimale)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 text-green-600 mr-2" />
                      <span>
                        <strong>Au-delà :</strong> Maintien ou cures ponctuelles
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Clock className="h-6 w-6 mr-2 text-blue-600" />
                  Quand la prendre ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    🌅 Le matin à jeun :
                  </h4>
                  <p>
                    2 comprimés 30 min avant le petit-déjeuner avec un grand
                    verre d'eau pour un effet coupe-faim maximal.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    🍽️ Avant le repas principal :
                  </h4>
                  <p>
                    2 comprimés 20-30 minutes avant votre repas le plus copieux
                    pour réduire naturellement les portions.
                  </p>
                </div>

                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-green-800">
                    <strong>✅ Conseil d'expert :</strong> Associez la prise à
                    un grand verre d'eau (300ml) pour amplifier l'effet de
                    satiété.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                🎁 Recevez nos conseils minceur spiruline
              </h3>
              <p className="text-lg text-green-100 mb-6">
                Guides exclusifs, astuces d'experts et offres réservées aux
                abonnés
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm variant="dark" size="lg" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Formes de spiruline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Sous quelle forme consommer la spiruline pour maigrir ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="h-6 w-6 mr-2 text-green-600" />
                  Comprimés ⭐ Recommandé
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p className="font-semibold text-green-800 mb-3">Avantages :</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Dosage précis et constant
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Pas de goût désagréable
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Facilité de transport
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Absorption optimale
                  </li>
                </ul>
                <p className="mt-4 text-green-800 font-medium">
                  A3 Spirulina Pills : concentration idéale de 2g dans 4
                  comprimés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Poudre</CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p className="font-semibold text-blue-800 mb-2">Avantages :</p>
                <ul className="space-y-1 mb-4">
                  <li>• Plus économique</li>
                  <li>• Mélange aux smoothies</li>
                </ul>
                <p className="font-semibold text-orange-800 mb-2">
                  Inconvénients :
                </p>
                <ul className="space-y-1">
                  <li>• Goût prononcé</li>
                  <li>• Dosage moins précis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Spiruline liquide</CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p className="font-semibold text-blue-800 mb-2">Avantages :</p>
                <ul className="space-y-1 mb-4">
                  <li>• Absorption rapide</li>
                  <li>• Concentration antioxydants</li>
                </ul>
                <p className="font-semibold text-orange-800 mb-2">
                  Inconvénients :
                </p>
                <ul className="space-y-1">
                  <li>• Plus chère</li>
                  <li>• Effets minceur moins documentés</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Produit recommandé */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi choisir A3 Spirulina Pills pour votre perte de poids ?
          </h2>

          <Card className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                Une spiruline d'exception pour des résultats supérieurs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-6">
              <p>
                <strong>A3 Spirulina Pills</strong> se distingue par sa méthode
                de culture unique en
                <strong> photobioréacteurs fermés</strong>, garantissant :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800">
                        Pureté maximale
                      </h4>
                      <p className="text-gray-700">0% de contaminants</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800">
                        Concentration record
                      </h4>
                      <p className="text-gray-700">
                        70% de protéines (vs 55% moyenne marché)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800">
                        Biodisponibilité optimale
                      </h4>
                      <p className="text-gray-700">Absorption 2x supérieure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800">
                        Double teneur en fer
                      </h4>
                      <p className="text-gray-700">
                        Boost métabolique renforcé
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 text-xl mb-4">
                  Pour votre programme minceur :
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Prix transparent :
                    </p>
                    <p className="text-green-700">
                      37€ les 80 comprimés (3 semaines de cure)
                    </p>
                    <p className="text-sm text-gray-600">
                      Soit 1,75€/jour pour une spiruline premium
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Pourquoi ce prix ?
                    </p>
                    <p className="text-gray-700">
                      Méthode de production unique, contrôles qualité stricts,
                      concentration exceptionnelle.
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-4"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    🛒 Commander A3 Spirulina Pills maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Précautions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Précautions et contre-indications importantes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-orange-700">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Effets secondaires possibles
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    En début de cure (7-10 premiers jours) :
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      • Troubles digestifs légers (si dosage trop élevé au
                      départ)
                    </li>
                    <li>• Fatigue passagère (phase de détox)</li>
                    <li>• Maux de tête légers</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-green-800">
                    <strong>Solution :</strong> Commencer par 1-2 comprimés puis
                    augmenter progressivement.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-red-700">
                  <Shield className="h-6 w-6 mr-2" />
                  Qui ne devrait pas prendre de spiruline ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>
                      <strong>Femmes enceintes et allaitantes</strong> (sauf
                      avis médical)
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>
                      <strong>Personnes sous anticoagulants</strong> (vitamine
                      K)
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>
                      <strong>Phénylcétonurie</strong> (présence de
                      phénylalanine)
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>
                      <strong>Allergies aux algues marines</strong>
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">❌</span>
                    <span>
                      <strong>Maladies auto-immunes</strong> en poussée
                    </span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-blue-800">
                    <strong>💡 Conseil :</strong> Consultez votre médecin si
                    vous avez un doute ou prenez des médicaments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline résultats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Spiruline et résultats : à quoi s'attendre ?
          </h2>

          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Timeline réaliste des effets
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🗓️</div>
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Semaine 1-2
                  </h4>
                  <p className="text-gray-700">
                    Réduction de l'appétit, moins de fringales
                  </p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🗓️</div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    Semaine 3-4
                  </h4>
                  <p className="text-gray-700">
                    Énergie stable, transit amélioré
                  </p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🗓️</div>
                  <h4 className="font-semibold text-purple-800 mb-2">Mois 2</h4>
                  <p className="text-gray-700">
                    Perte de poids mesurable (500g-1kg selon programme)
                  </p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🗓️</div>
                  <h4 className="font-semibold text-orange-800 mb-2">Mois 3</h4>
                  <p className="text-gray-700">
                    Effets consolidés, silhouette affinée
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 text-xl mb-4">
                  Résultats attendus (en complément d'un régime équilibré) :
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-green-600" />
                    <span>
                      <strong>Perte de poids :</strong> 2-4 kg sur 3 mois
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Réduction tour de taille :</strong> 3-6 cm
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Diminution fringales :</strong> 70% des
                      utilisateurs
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-orange-600" />
                    <span>
                      <strong>Énergie stable :</strong> Dès la 2ème semaine
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Notre conclusion honnête
          </h2>

          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-l-4 border-green-500">
            <CardContent className="pt-6 text-lg space-y-6">
              <p>
                La spiruline peut être un <strong>excellent allié</strong> dans
                votre démarche de perte de poids, mais elle n'est pas une
                solution miracle. Son effet coupe-faim naturel, son boost
                métabolique et sa richesse nutritionnelle en font un complément
                précieux pour :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-800 text-xl">
                    ✅ Idéal pour :
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Personnes qui grignotent beaucoup</strong> :
                        L'effet satiété est réel
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Régimes restrictifs</strong> : Évite les
                        carences
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Sportifs en sèche</strong> : Maintient la masse
                        musculaire
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Métabolisme lent</strong> : Optimise la dépense
                        énergétique
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-800 text-xl">
                    ❌ Attention :
                  </h4>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="text-orange-800">
                      <strong>La spiruline seule ne fera pas de miracle</strong>{" "}
                      sans changement d'habitudes alimentaires et d'activité
                      physique.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-6 rounded-lg text-center">
                <p className="text-green-800 text-xl font-semibold mb-4">
                  <strong>Notre recommandation :</strong> Utilisez A3 Spirulina
                  Pills en complément d'une alimentation équilibrée et d'une
                  activité physique pour des résultats durables.
                </p>
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-lg py-4 px-8"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    🛒 Commencer votre cure dès maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            FAQ : Vos questions sur spiruline et perte de poids
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg border"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                1. La spiruline fait-elle perdre du poids rapidement ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Non, la spiruline n'est pas un brûleur de graisses rapide. Elle
                agit comme un coupe-faim naturel et optimise le métabolisme. Une
                perte de 2-4 kg sur 3 mois est réaliste en complément d'un
                régime adapté.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg border"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                2. Peut-on prendre de la spiruline pendant un régime strict ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Oui, c'est même recommandé ! Sa richesse nutritionnelle évite
                les carences fréquentes lors des régimes restrictifs, tout en
                apportant un effet de satiété.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg border"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                3. Combien de temps faut-il prendre de la spiruline pour voir
                des résultats ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Les premiers effets (réduction appétit) apparaissent dès 7-15
                jours. Pour une perte de poids visible, comptez 4-6 semaines
                minimum.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg border"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                4. La spiruline peut-elle remplacer un repas ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Non, la spiruline est un complément alimentaire, pas un
                substitut de repas. Elle doit s'intégrer dans une alimentation
                équilibrée et variée.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg border"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                5. Y a-t-il des effets secondaires pour la perte de poids ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Les effets secondaires sont rares et légers : troubles digestifs
                temporaires en début de cure si le dosage est trop élevé.
                Commencez progressivement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-lg border"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                6. Quelle est la différence entre spiruline et autres
                compléments minceur ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                La spiruline agit naturellement par son apport nutritionnel
                (protéines, vitamines, minéraux) contrairement aux brûleurs de
                graisses chimiques. C'est plus doux et sans effet stimulant.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Sources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sources scientifiques
          </h2>

          <Card className="bg-gray-50">
            <CardContent className="pt-6">
              <ol className="text-lg space-y-2">
                <li>
                  1. Nutrition Research (2019) - "Spirulina supplementation and
                  appetite regulation"
                </li>
                <li>
                  2. Journal of Nutritional Science (2021) - "Effects of
                  spirulina on metabolic parameters"
                </li>
                <li>
                  3. International Journal of Food Sciences (2020) - "Spirulina
                  and weight management"
                </li>
                <li>
                  4. Nutrients (2022) - "Phycocyanin anti-inflammatory
                  properties"
                </li>
              </ol>

              <p className="text-gray-600 italic mt-6">
                <em>
                  Cet article est basé sur des études scientifiques et ne
                  remplace pas un avis médical professionnel. Consultez votre
                  médecin avant de commencer toute supplémentation.
                </em>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Articles connexes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Articles connexes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/spiruline/spiruline-posologie"
                    className="hover:text-green-600"
                  >
                    Posologie et dosage de la spiruline
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comment bien doser la spiruline selon vos besoins et
                  objectifs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/blog/spiruline-sport"
                    className="hover:text-green-600"
                  >
                    Spiruline et sport
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimisez vos performances sportives avec la spiruline.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/blog/spiruline-et-gaz-intestinaux"
                    className="hover:text-green-600"
                  >
                    Spiruline et problèmes digestifs
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Évitez les troubles digestifs avec nos conseils d'experts.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
