import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  AlertTriangle,
  Gift,
  Star,
  Clock,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Posologie Spiruline : Dosage, Timing et Conseils d'Experts 2025",
    description:
      "Guide complet de la posologie spiruline : dosages précis par profil, meilleur moment de prise, conseils débutants et calculateur personnalisé.",
    keywords: [
      "posologie spiruline",
      "dosage spiruline",
      "combien spiruline par jour",
      "quand prendre spiruline",
      "spiruline enfant",
      "spiruline adulte",
      "A3 spirulina pills",
      "cure spiruline",
    ],
    canonicalUrl: "spiruline/spiruline-posologie",
  });
}

export default function SpirulnePosologiePage() {
  const breadcrumbItems = [
    { label: "Spiruline", href: "/spiruline" },
    { label: "Posologie et dosage" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Posologie de la Spiruline : Guide Complet 2025",
    description:
      "Guide complet de la posologie spiruline : dosages précis par profil, meilleur moment de prise, conseils débutants et calculateur personnalisé.",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    author: {
      "@type": "Person",
      name: "Thibaut",
    },
    publisher: {
      "@type": "Organization",
      name: "Spiruline-sante",
      logo: {
        "@type": "ImageObject",
        url: "https://spiruline-sante.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://spiruline-sante.com/spiruline/spiruline-posologie",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien de temps avant de voir les premiers effets ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les premiers effets (énergie, transit) apparaissent généralement après 1-2 semaines. Pour l'immunité et les analyses sanguines, comptez 6-8 semaines.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on prendre plus de 4 comprimés A3 par jour ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les sportifs peuvent aller jusqu'à 8 comprimés/jour (4g). Au-delà, l'avis médical est recommandé. Ne jamais dépasser 10 comprimés/jour.",
        },
      },
      {
        "@type": "Question",
        name: "La spiruline fait-elle maigrir ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La spiruline peut aider à contrôler l'appétit grâce à sa richesse en protéines, mais elle n'est pas un brûleur de graisse. Elle soutient un régime équilibré.",
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Marie, 34 ans",
      text: "Fini la fatigue de 15h ! Avec A3 Spirulina, j'ai retrouvé mon énergie en 3 semaines.",
      rating: 5,
    },
    {
      name: "Thomas, sportif",
      text: "Récupération beaucoup plus rapide après mes entraînements. Je recommande !",
      rating: 5,
    },
    {
      name: "Sophie, maman",
      text: "Parfait pour toute la famille. Mes enfants n'ont plus été malades cet hiver.",
      rating: 4,
    },
  ];

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header avec résumé en bullet points */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Posologie de la Spiruline : Guide Complet 2025
          </h1>

          <Card className="bg-green-50 border-green-200 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center">
                <Gift className="h-6 w-6 mr-2" />
                Ce que vous allez découvrir :
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Dosages précis</strong> pour adultes, enfants et
                    sportifs
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Calculateur personnalisé</strong> selon votre poids
                    et vos besoins
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Meilleur moment</strong> pour prendre la spiruline
                    (timing optimal)
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Conseils pratiques</strong> pour bien débuter sans
                    effets secondaires
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Durée de cure</strong> et résultats attendus (délais
                    réalistes)
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Contre-indications</strong> et précautions
                    importantes
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA immédiat */}
          <Card className="bg-[#15803D] text-white mb-8">
            <CardContent className="py-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Image à gauche */}
                <div className="flex-shrink-0">
                  <img
                    src="/A3-Spirulina-Pills.webp"
                    alt="A3 Spirulina Pills"
                    className="w-38 h-38 md:w-40 md:h-40 object-cover rounded-lg"
                  />
                </div>

                {/* Contenu à droite */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                    🛒 A3 Spirulina Pills - Spiruline Premium
                  </h3>
                  <p className="text-lg mb-4">
                    37€ - 80 comprimés (20 jours de cure)
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Spiruline pure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>🚚 Livraison rapide</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>💰 Qualité garantie</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                      target="_blank"
                    >
                      Découvrir A3 Spirulina Pills
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              Vous cherchez le bon dosage de spiruline pour optimiser ses
              bienfaits ? Cette micro-algue exceptionnelle nécessite un dosage
              précis pour être efficace. Dans ce guide complet, vous découvrirez
              exactement quelle quantité prendre selon votre profil, quand la
              consommer et comment éviter les erreurs courantes.
            </p>
            <p>
              La spiruline n'est pas un médicament mais un{" "}
              <strong>superaliment concentré</strong> qui demande des
              recommandations spécifiques pour révéler tout son potentiel.
            </p>
          </div>
        </section>

        {/* Qu'est-ce que la spiruline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Qu'est-ce que la spiruline ?
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed mb-6">
            <p>
              La spiruline (Spirulina maxima) est une{" "}
              <strong>microalgue d'eau douce</strong> de la famille des
              cyanobactéries, reconnue comme l'un des aliments les plus
              nutritifs de la planète.
            </p>
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">
                Composition exceptionnelle
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-2">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>65-70% de protéines complètes</strong> (tous les
                  acides aminés essentiels)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>Fer hautement biodisponible</strong> (2,4mg pour 4
                  comprimés A3)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>Vitamines</strong> : A, K, B12, E
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>Antioxydants puissants</strong> : phycocyanine
                  (0,34mg/dose)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>Minéraux essentiels</strong> : calcium, magnésium,
                  phosphore
                </span>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg text-gray-700 mt-4">
            Cette composition unique explique pourquoi la posologie doit être
            adaptée à chaque personne.
          </p>
        </section>

        {/* Comment utiliser la spiruline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment utiliser la spiruline ? Guide pratique
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Quelle quantité de spiruline prendre par jour ?
          </h3>

          {/* Calculateur de dosage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Users className="h-6 w-6 mr-2 text-green-600" />
                📊 Calculateur de dosage personnalisé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-lg border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-3 font-semibold">Profil</th>
                      <th className="text-left p-3 font-semibold">Poids</th>
                      <th className="text-left p-3 font-semibold">
                        Dosage quotidien
                      </th>
                      <th className="text-left p-3 font-semibold">
                        Équivalent A3 Pills
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="p-3">
                        <strong>Débutant</strong>
                      </td>
                      <td className="p-3">Tous poids</td>
                      <td className="p-3">1g/jour (1ère semaine)</td>
                      <td className="p-3">2 comprimés</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">
                        <strong>Adulte maintenance</strong>
                      </td>
                      <td className="p-3">50-70kg</td>
                      <td className="p-3">2-3g/jour</td>
                      <td className="p-3">4-6 comprimés</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">
                        <strong>Adulte maintenance</strong>
                      </td>
                      <td className="p-3">70-90kg</td>
                      <td className="p-3">3-4g/jour</td>
                      <td className="p-3">6-8 comprimés</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">
                        <strong>Sportif intensif</strong>
                      </td>
                      <td className="p-3">Tous poids</td>
                      <td className="p-3">5-8g/jour</td>
                      <td className="p-3">10-16 comprimés</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">
                        <strong>Femme enceinte</strong>
                      </td>
                      <td className="p-3">Consultation médicale</td>
                      <td className="p-3">Sur avis médical</td>
                      <td className="p-3">Sur avis médical</td>
                    </tr>
                    <tr>
                      <td className="p-3">
                        <strong>Personne âgée</strong>
                      </td>
                      <td className="p-3">Tous poids</td>
                      <td className="p-3">2-3g/jour</td>
                      <td className="p-3">4-6 comprimés</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-green-50 border-green-200 mt-6">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2">
                    Recommandation A3 Spirulina Pills
                  </h4>
                  <div className="text-lg space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        <strong>Dose standard</strong> : 4 comprimés/jour = 2g
                        de spiruline pure
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        <strong>Une boîte dure</strong> : 20 jours (80
                        comprimés)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        <strong>Prix par jour</strong> : environ 1,85€
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Posologie enfants */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Quelle posologie de spiruline pour les enfants ?
          </h3>

          <Card className="bg-yellow-50 border-yellow-200 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-yellow-800">
                    Important
                  </p>
                  <p className="text-lg text-yellow-700">
                    Consultez toujours un pédiatre avant de donner de la
                    spiruline à un enfant.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Dosages pédiatriques recommandés :</CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-3">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>3-6 ans</strong> : 0,5-1g/jour (1-2 comprimés)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>7-12 ans</strong> : 1-2g/jour (2-4 comprimés)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>13-17 ans</strong> : 2-3g/jour (4-6 comprimés)
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200 mb-8">
            <CardHeader>
              <CardTitle>Conseils pratiques pour les enfants :</CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Commencer par ½ comprimé pendant 3 jours</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Écraser dans un yaourt ou compote si nécessaire</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Surveiller la tolérance digestive</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Privilégier la prise au petit-déjeuner</span>
              </div>
            </CardContent>
          </Card>

          {/* Timing optimal */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            À quel moment de la journée consommer la spiruline ?
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  🕐 Timing optimal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-3">
                <div>
                  <p className="font-semibold text-green-800 mb-2">
                    ✅ MEILLEURS MOMENTS :
                  </p>
                  <div className="space-y-2 text-green-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>
                        <strong>Matin</strong> (6h-10h) : Boost d'énergie
                        naturel
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>
                        <strong>Avant l'effort</strong> : 30-60min avant le
                        sport
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>
                        <strong>Pendant le repas</strong> : Améliore
                        l'absorption du fer
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">
                  ❌ À ÉVITER :
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-2 text-red-700">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>
                    <strong>Le soir</strong> : Risque d'insomnie (effet
                    stimulant)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>
                    <strong>À jeun total</strong> : Possible irritation
                    gastrique chez certains
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-green-50 border-green-200 mb-8">
            <CardHeader>
              <CardTitle>Mode d'emploi A3 Spirulina :</CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-2">
              <div className="flex items-start space-x-2">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                  1
                </span>
                <span>Prendre 4 comprimés avec un grand verre d'eau</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                  2
                </span>
                <span>
                  De préférence pendant ou juste après le petit-déjeuner
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                  3
                </span>
                <span>
                  Associer avec de la vitamine C (orange, citron) pour optimiser
                  l'absorption du fer
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Newsletter Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="py-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Gift className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">
                  🎁 Recevez notre guide gratuit !
                </h3>
              </div>
              <p className="text-lg mb-6">
                + Conseils exclusifs et offres réservées aux abonnés
              </p>

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
            </CardContent>
          </Card>
        </section>

        {/* Avis clients */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Avis sur la spiruline A3 Xelliss
          </h2>

          <Card className="bg-blue-50 border-blue-200 mb-6">
            <CardHeader>
              <CardTitle>Retours clients authentiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border-b last:border-b-0 pb-4 last:pb-0"
                >
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-1 mr-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-lg">
                      {testimonial.name}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            FAQ - Questions fréquentes
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Combien de temps avant de voir les premiers effets ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700">
                Les premiers effets (énergie, transit) apparaissent généralement
                après 1-2 semaines. Pour l'immunité et les analyses sanguines,
                comptez 6-8 semaines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Peut-on prendre plus de 4 comprimés A3 par jour ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700">
                Les sportifs peuvent aller jusqu'à 8 comprimés/jour (4g).
                Au-delà, l'avis médical est recommandé. Ne jamais dépasser 10
                comprimés/jour.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                La spiruline fait-elle maigrir ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700">
                La spiruline peut aider à contrôler l'appétit grâce à sa
                richesse en protéines, mais elle n'est pas un brûleur de
                graisse. Elle soutient un régime équilibré.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Quand éviter la spiruline ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700">
                Évitez en cas d'hémochromatose, de phénylcétonurie, de maladie
                auto-immune active, ou si vous prenez des anticoagulants sans
                avis médical.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Peut-on donner de la spiruline à un bébé ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700">
                Non, la spiruline n'est pas recommandée avant 3 ans. Pour les
                enfants de 3-12 ans, consultez un pédiatre avant utilisation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contre-indications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Est-ce que la spiruline est dangereuse ?
          </h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed mb-6">
            <p>
              La spiruline de qualité comme A3 Spirulina est{" "}
              <strong>généralement très sûre</strong>
              lorsqu'elle est consommée aux doses recommandées.
            </p>
          </div>

          <Card className="bg-red-50 border-red-200 mb-6">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center">
                🚫 Contre-indications absolues :
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-2 text-red-700">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Hémochromatose (excès de fer)</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Phénylcétonurie (présence de phénylalanine)</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Maladies auto-immunes en poussée active</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Allergie aux algues ou aux fruits de mer</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Traitement anticoagulant (interaction possible)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle>Conseils pour bien débuter</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-800 mb-3">
                  🟢 Protocole débutant (première cure) :
                </p>
                <div className="space-y-2 text-green-700">
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <span>
                      <strong>Semaine 1</strong> : 1 comprimé A3/jour
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <span>
                      <strong>Semaine 2</strong> : 2 comprimés A3/jour
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <span>
                      <strong>Semaine 3+</strong> : 4 comprimés A3/jour (dose
                      cible)
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quelle spiruline choisir */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quelle spiruline choisir ?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Les différentes formes de spiruline
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-lg border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-3 font-semibold">Forme</th>
                  <th className="text-left p-3 font-semibold">Avantages</th>
                  <th className="text-left p-3 font-semibold">Inconvénients</th>
                  <th className="text-left p-3 font-semibold">Prix moyen</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="p-3">
                    <strong>Comprimés</strong>
                  </td>
                  <td className="p-3">Dosage précis, pratique</td>
                  <td className="p-3">Plus cher</td>
                  <td className="p-3">35-45€/mois</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3">
                    <strong>Poudre</strong>
                  </td>
                  <td className="p-3">Prix attractif, polyvalent</td>
                  <td className="p-3">Goût marqué, dosage approximatif</td>
                  <td className="p-3">20-30€/mois</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3">
                    <strong>Paillettes</strong>
                  </td>
                  <td className="p-3">Plus naturel</td>
                  <td className="p-3">Dosage difficile</td>
                  <td className="p-3">25-35€/mois</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <strong>Liquide</strong>
                  </td>
                  <td className="p-3">Absorption rapide</td>
                  <td className="p-3">Conservation délicate</td>
                  <td className="p-3">40-60€/mois</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Comparatif : spiruline A3 Xelliss vs autres marques
          </h3>

          <Card className="bg-gray-50 border-gray-200 mb-8">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-lg border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left p-3 font-semibold">Critère</th>
                      <th className="text-left p-3 font-semibold">
                        A3 Spirulina Xelliss
                      </th>
                      <th className="text-left p-3 font-semibold">
                        Marques classiques
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="p-3">
                        <strong>Origine</strong>
                      </td>
                      <td className="p-3">Spirulina maxima contrôlée</td>
                      <td className="p-3">Variable</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3">
                        <strong>Concentration protéines</strong>
                      </td>
                      <td className="p-3">65% minimum</td>
                      <td className="p-3">55-60%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3">
                        <strong>Fer biodisponible</strong>
                      </td>
                      <td className="p-3">2,4mg/dose (17% AJR)</td>
                      <td className="p-3">1,5-2mg/dose</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3">
                        <strong>Phycocyanine</strong>
                      </td>
                      <td className="p-3">0,34mg garantie/dose</td>
                      <td className="p-3">Non mentionnée</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3">
                        <strong>Prix</strong>
                      </td>
                      <td className="p-3">37€ (20 jours) = 1,85€/jour</td>
                      <td className="p-3">25-45€/mois</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3">
                        <strong>Facilité d'usage</strong>
                      </td>
                      <td className="p-3">4 comprimés = dose parfaite</td>
                      <td className="p-3">Dosage à calculer</td>
                    </tr>
                    <tr>
                      <td className="p-3">
                        <strong>Qualité</strong>
                      </td>
                      <td className="p-3">Spirulina maxima premium</td>
                      <td className="p-3">Spirulina platensis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">
                🏆 Pourquoi choisir A3 Spirulina :
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  <strong>Spirulina maxima</strong> : 27% de protéines en plus
                  que la platensis
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  <strong>Traçabilité complète</strong> : De la culture au
                  comprimé
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  <strong>Dosage optimal</strong> : 4 comprimés = apports
                  nutritionnels idéaux
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  <strong>Photobioréacteur</strong> : Culture en milieu fermé et
                  contrôlé
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>

          <div className="text-lg text-gray-700 space-y-4 leading-relaxed mb-8">
            <p>
              La spiruline est un superaliment puissant qui nécessite une
              posologie adaptée pour révéler tous ses bienfaits.{" "}
              <strong>Pour débuter :</strong> commencez par 2 comprimés A3
              Spirulina par jour, puis augmentez progressivement jusqu'à 4
              comprimés.
            </p>
          </div>

          <Card className="bg-blue-50 border-blue-200 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-800">À retenir :</CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>Dose adulte optimale</strong> : 2-4g/jour (4-8
                  comprimés A3)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>Meilleur moment</strong> : Matin avec un verre d'eau
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>Durée minimum</strong> : 3 mois pour des résultats
                  durables
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>
                  <strong>Qualité essentielle</strong> : Choisir une spiruline
                  certifiée comme A3
                </span>
              </div>
            </CardContent>
          </Card>

          {/* CTA Final */}
          {/* CTA immédiat */}
          <Card className="bg-[#15803D] text-white mb-8">
            <CardContent className="py-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Image à gauche */}
                <div className="flex-shrink-0">
                  <img
                    src="/A3-Spirulina-Pills.webp"
                    alt="A3 Spirulina Pills"
                    className="w-38 h-38 md:w-40 md:h-40 object-cover rounded-lg"
                  />
                </div>

                {/* Contenu à droite */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                    🛒 A3 Spirulina Pills - Spiruline Premium
                  </h3>
                  <p className="text-lg mb-4">
                    37€ - 80 comprimés (20 jours de cure)
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Spiruline pure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>🚚 Livraison rapide</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>💰 Qualité garantie</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                      target="_blank"
                    >
                      Découvrir A3 Spirulina Pills
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sources */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Sources scientifiques :
          </h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              1. Wu, Q., et al. (2016). "Biological and nutritional properties
              of spirulina." Journal of Applied Phycology, 28(2), 1231-1243.
            </p>
            <p>
              2. Deng, R., & Chow, T. J. (2010). "Hypolipidemic, antioxidant and
              antiinflammatory activities of microalgae Spirulina."
              Cardiovascular Therapeutics, 28(4), e33-e45.
            </p>
            <p>
              3. Mazokopakis, E. E., et al. (2014). "The hepatoprotective and
              hypolipidemic effects of Spirulina." Annals of Gastroenterology,
              27(4), 387-394.
            </p>
            <p>
              4. Selmi, C., et al. (2011). "The effects of Spirulina on anemia
              and immune function in senior citizens." Cellular & Molecular
              Immunology, 8(3), 248-254.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
