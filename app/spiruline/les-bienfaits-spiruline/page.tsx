// Contenu à remplacer dans app/spiruline/les-bienfaits-spiruline/page.tsx

import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Leaf,
  AlertTriangle,
  Gift,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Les Bienfaits de la Spiruline : Guide Complet et Scientifique",
    description:
      "Découvrez tous les bienfaits scientifiquement prouvés de la spiruline : énergie, immunité, beauté, sport. Guide complet avec dosages et précautions.",
    keywords: [
      "spiruline bienfaits",
      "bienfaits spiruline",
      "spiruline santé",
      "micro-algue",
      "superaliment",
      "protéines végétales",
    ],
    canonicalUrl: "spiruline/les-bienfaits-spiruline",
  });
}

export default function SpirulineBienfaitsPage() {
  const breadcrumbItems = [
    { label: "Spiruline", href: "/spiruline" },
    { label: "Les bienfaits de la spiruline" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Les Bienfaits de la Spiruline : Guide Complet et Scientifique",
    description:
      "Découvrez tous les bienfaits scientifiquement prouvés de la spiruline pour votre santé et votre bien-être.",
    datePublished: "2024-01-15",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Dr. Marie Dubois",
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
      "@id": "https://spiruline-sante.com/spiruline/les-bienfaits-spiruline",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels sont les principaux bienfaits de la spiruline ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les principaux bienfaits de la spiruline incluent : augmentation de l'énergie, renforcement du système immunitaire, amélioration de la santé de la peau et des cheveux, soutien des performances sportives, et apport en protéines végétales complètes.",
        },
      },
      {
        "@type": "Question",
        name: "La spiruline a-t-elle des effets secondaires ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La spiruline est généralement bien tolérée. Cependant, certaines personnes peuvent ressentir des troubles digestifs légers, des maux de tête ou des réactions allergiques. Il est recommandé de commencer par de petites doses.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour ressentir les effets de la spiruline ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les effets énergétiques peuvent se ressentir après 1-2 semaines d'utilisation régulière. Pour les bienfaits sur la peau et l'immunité, comptez 4-6 semaines de prise continue.",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      <div className="container py-8 max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />

        {/* Résumé en bullet points */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
          <p className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            🌟 Ce que vous allez découvrir :
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-lg">
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Bienfaits réels pour votre énergie et vitalité</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Comment elle renforce votre système immunitaire</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Effets sur la peau et les cheveux</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Dosage optimal et utilisation pratique</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Résultats attendus (délais réalistes)</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Précautions et effets secondaires</span>
            </div>
          </div>
          <div className="mt-6">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                target="_blank"
              >
                🛒 Découvrir A3 Spirulina Pills (37€ - 3 semaines)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Les Bienfaits de la Spiruline : Guide Complet et Scientifique
          </h1>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            Vous cherchez une solution naturelle pour booster votre énergie,
            renforcer votre immunité et améliorer votre bien-être global ? La
            spiruline pourrait bien être la réponse que vous attendez.
          </p>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            Cette micro-algue exceptionnelle, reconnue par l'Organisation
            Mondiale de la Santé comme "le meilleur aliment pour le futur",
            regorge de bienfaits scientifiquement prouvés qui peuvent
            transformer votre quotidien.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Dans ce guide complet, vous découvrirez tous les bienfaits concrets
            de la spiruline, comment elle agit sur votre organisme, et surtout,
            comment l'utiliser efficacement pour des résultats optimaux.
          </p>
        </div>

        {/* Section 1: Découverte de la Spiruline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Leaf className="h-8 w-8 text-green-600 mr-3" />
            Découverte de la Spiruline: Qu'est-ce que c'est exactement?
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La spiruline (Arthrospira platensis) est une micro-algue d'eau
              douce de couleur vert-bleu, reconnue pour ses vertus
              nutritionnelles exceptionnelles. Son nom provient de sa forme
              spiralée caractéristique, visible au microscope.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cette cyanobactérie primitive existe depuis plus de 3 milliards
              d'années et constitue l'une des formes de vie les plus anciennes
              de notre planète. Elle se développe naturellement dans des lacs
              alcalins aux eaux chaudes et riches en minéraux.
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              🔬 Apparence et caractéristiques
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sous sa forme naturelle, la spiruline présente une couleur
              vert-bleu intense due à la présence de phycocyanine. En comprimés,
              elle conserve cette teinte caractéristique tout en offrant une
              praticité d'utilisation optimale.
            </p>
          </div>
        </section>

        {/* Section 2: Histoire */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            La riche histoire et les origines de la spiruline
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La spiruline n'est pas une découverte récente. Elle était déjà
            consommée par les Aztèques et les Mayas qui la récoltaient sur le
            lac Texcoco et la transformaient en galettes nutritives vendues sur
            les marchés de l'actuelle Mexico.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            En Afrique, les populations du lac Tchad consomment
            traditionnellement la spiruline sous forme de galettes séchées
            appelées "dihé". Cette pratique ancestrale témoigne de la valeur
            nutritionnelle reconnue de cette micro-algue depuis des siècles.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ce n'est qu'dans les années 1970 que la spiruline a été redécouverte
            par les scientifiques occidentaux, ouvrant la voie à sa culture
            moderne et à l'étude approfondie de ses bienfaits.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h3 className="text-xl font-bold text-orange-800 mb-3">
              ⚠️ Attention à l'origine
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aujourd'hui, la qualité de la spiruline varie considérablement
              selon son origine. Privilégiez toujours des produits certifiés et
              tracés, évitez les productions douteuses, et choisissez des
              marques reconnues comme Xelliss qui garantissent pureté et
              contrôles qualité rigoureux.
            </p>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-none">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Gift className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">
                🎁 OBTENEZ VOTRE COPIE GRATUITE
              </CardTitle>
              <CardDescription className="text-green-100 text-lg">
                Téléchargez notre guide complet "Spiruline : l'or vert de la
                santé"
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90 mb-6">
                Obtenez toutes les informations pour comprendre les bienfaits de
                cette microalgue et l'intégrer efficacement dans votre vie
                quotidienne.
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm variant="dark" size="lg" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Profil nutritionnel */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Profil nutritionnel: Pourquoi la spiruline est-elle considérée comme
            un superaliment?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La spiruline est un véritable concentré de nutriments essentiels. Sa
            composition exceptionnelle en fait l'un des aliments les plus
            nutritifs au monde, justifiant pleinement son statut de superaliment
            :
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">
                  🥩 Protéines (55-70%)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Contient les 8 acides aminés essentiels, supérieure au bœuf et
                  au soja en concentration protéique.
                </p>
                <Badge className="bg-green-100 text-green-800">
                  Protéines complètes
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">
                  💊 Vitamines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Riche en vitamines B12, B1, B2, B3, B6, B9, A, E, K -
                  particulièrement intéressante pour les végétariens.
                </p>
                <Badge className="bg-blue-100 text-blue-800">
                  Spécial végétariens
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">
                  ⚡ Minéraux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Fer hautement biodisponible, magnésium, calcium, potassium,
                  phosphore, zinc et sélénium.
                </p>
                <Badge className="bg-purple-100 text-purple-800">
                  Absorption optimale
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800">
                  🛡️ Antioxydants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Phycocyanine, bêta-carotène, zéaxanthine - protection
                  cellulaire optimale.
                </p>
                <Badge className="bg-orange-100 text-orange-800">
                  Anti-âge
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              🌟 Pourquoi c'est un aliment si intéressant ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              La spiruline combine une densité nutritionnelle exceptionnelle
              avec une biodisponibilité optimale. En seulement quelques grammes,
              elle apporte plus de nutriments essentiels que la plupart des
              aliments traditionnels, tout en étant parfaitement assimilée par
              l'organisme.
            </p>
          </div>
        </section>

        {/* Section 4: Qualités énergétiques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="h-8 w-8 text-yellow-600 mr-3" />
            Les qualités énergétiques remarquables de la spiruline
          </h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Vous vous sentez fatigué(e) en permanence ?</strong> La
              spiruline pourrait bien être votre solution naturelle.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Grâce à sa concentration exceptionnelle en protéines complètes,
              fer biodisponible et vitamines du groupe B, la spiruline agit
              comme un véritable booster d'énergie naturel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Énergie immédiate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  Ressentez un regain d'énergie dès les premières semaines de
                  prise régulière.
                </p>
                <Badge className="bg-yellow-100 text-yellow-800">
                  1-2 semaines
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Oxygénation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  Le fer améliore le transport d'oxygène, réduisant la fatigue
                  chronique.
                </p>
                <Badge className="bg-red-100 text-red-800">Anti-fatigue</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Endurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  Amélioration de l'endurance physique et mentale, idéal pour
                  les sportifs.
                </p>
                <Badge className="bg-green-100 text-green-800">
                  Performance
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              💡 Comment se manifestent les bienfaits énergétiques ?
            </h3>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>
                • <strong>Réveil plus facile</strong> le matin
              </li>
              <li>
                • <strong>Moins de coups de fatigue</strong> dans la journée
              </li>
              <li>
                • <strong>Meilleure récupération</strong> après l'effort
              </li>
              <li>
                • <strong>Concentration améliorer</strong> au travail
              </li>
              <li>
                • <strong>Sommeil plus réparateur</strong>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Bienfaits beauté */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bienfaits pour la peau et les cheveux: la beauté derrière la
            spiruline
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La beauté vient de l'intérieur, et la spiruline en est la preuve
            vivante. Ses antioxydants puissants et ses nutriments essentiels
            agissent en profondeur pour révéler votre éclat naturel.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-xl text-pink-800 flex items-center">
                  <Heart className="h-6 w-6 mr-2" />
                  Pour la peau
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Amélioration de l'élasticité et de la fermeté
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Réduction des signes de vieillissement
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Éclat naturel et teint uniforme
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Protection contre les UV et pollution
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800 flex items-center">
                  <Leaf className="h-6 w-6 mr-2" />
                  Pour les cheveux
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Renforcement et brillance accrue
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Réduction de la chute capillaire
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Stimulation de la croissance
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cuir chevelu plus sain</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-6">
            <h3 className="text-xl font-bold text-pink-800 mb-3">
              ✨ Résultats visibles
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Les bienfaits beauté de la spiruline se manifestent généralement
              après 4-6 semaines de prise régulière : teint plus lumineux,
              cheveux plus forts, ongles moins cassants. La patience est
              récompensée !
            </p>
          </div>
        </section>

        {/* Section 6: Utilisation pratique */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            La spiruline dans l'alimentation : Comment l'utiliser ?
          </h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>La forme comprimés : simplicité et efficacité</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Les comprimés de spiruline comme A3 Spirulina Pills offrent une
              solution pratique et dosée précisément. Ils préservent tous les
              nutriments tout en étant faciles à transporter et à consommer,
              sans le goût parfois désagréable de la poudre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800">
                  📏 Dosage recommandé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li>
                    • <strong>Débutant :</strong> 1-2 comprimés par jour
                  </li>
                  <li>
                    • <strong>Maintenance :</strong> 3-4 comprimés par jour
                  </li>
                  <li>
                    • <strong>Sportif :</strong> 4-6 comprimés par jour
                  </li>
                  <li>
                    • <strong>Moment optimal :</strong> Le matin à jeun
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">
                  💡 Conseils d'utilisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li>• Commencer progressivement</li>
                  <li>• Boire beaucoup d'eau</li>
                  <li>• Prendre avec un jus de citron</li>
                  <li>• Cure de 3 semaines minimum</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 7: Démystification */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Démystification: Idées reçues sur la spiruline
          </h2>
          <div className="space-y-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">
                  ❌ Idée reçue : "La spiruline est dangereuse"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  <strong>Réalité :</strong> La spiruline est reconnue comme
                  sûre par l'OMS et l'ANSES. Les études montrent une excellente
                  tolérance chez la majorité des personnes quand elle est de
                  qualité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">
                  ❌ Idée reçue : "Tous les produits se valent"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  <strong>Réalité :</strong> La qualité varie énormément selon
                  l'origine, les conditions de culture et de traitement.
                  Privilégiez des marques certifiées comme A3 Spirulina Pills
                  qui garantissent pureté et traçabilité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">
                  ❌ Idée reçue : "Les effets sont immédiats"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  <strong>Réalité :</strong> Bien que l'énergie puisse augmenter
                  rapidement, les bienfaits optimaux nécessitent une prise
                  régulière de 4-6 semaines. La patience est clé !
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">
                  ❌ Idée reçue : "C'est juste un effet placebo"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  <strong>Réalité :</strong> Des centaines d'études
                  scientifiques documentent les bienfaits de la spiruline. Son
                  profil nutritionnel exceptionnel explique rationnellement ses
                  effets.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 8: Comparaison algues */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spiruline vs autres algues: Qu'est-ce qui la distingue?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Critère
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Spiruline
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Chlorella
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Algues marines
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Protéines
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">
                    55-70%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">45-55%</td>
                  <td className="border border-gray-300 px-4 py-2">10-25%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Goût
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">
                    Neutre (comprimés)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Terreux</td>
                  <td className="border border-gray-300 px-4 py-2">Iodé</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            La spiruline se distingue par sa richesse exceptionnelle en
            protéines complètes et sa biodisponibilité optimale. Contrairement à
            la chlorella qui nécessite un traitement spécial pour briser sa
            paroi cellulaire, la spiruline est naturellement digestible et mieux
            assimilée par l'organisme.
          </p>
        </section>

        {/* Section 9: Effets secondaires */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
            Effets secondaires potentiels et précautions avec la spiruline
          </h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>
                Bien que généralement sûre, la spiruline peut provoquer des
                effets secondaires chez certaines personnes.
              </strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Il est essentiel de connaître ces réactions possibles et de
              respecter les précautions d'usage pour une utilisation optimale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800">
                  ⚠️ Effets secondaires possibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li>
                    • <strong>Troubles digestifs légers</strong> (nausées,
                    diarrhée)
                  </li>
                  <li>
                    • <strong>Maux de tête temporaires</strong> (les premiers
                    jours)
                  </li>
                  <li>
                    • <strong>Réactions allergiques</strong> (très rares)
                  </li>
                  <li>
                    • <strong>Fatigue initiale</strong> (effet détoxication)
                  </li>
                  <li>
                    • <strong>Coloration des selles</strong> (verdâtre, normal)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">
                  🚫 Contre-indications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li>
                    • <strong>Maladies auto-immunes</strong> (sclérose en
                    plaques, lupus)
                  </li>
                  <li>
                    • <strong>Hémochromatose</strong> (excès de fer)
                  </li>
                  <li>
                    • <strong>Phénylcétonurie</strong> (maladie génétique)
                  </li>
                  <li>
                    • <strong>Grossesse et allaitement</strong> (par précaution)
                  </li>
                  <li>
                    • <strong>Traitement anticoagulant</strong> (interaction
                    possible)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              💡 Conseil d'expert
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              <strong>Commencez toujours par une dose faible</strong> (1
              comprimé par jour) et augmentez progressivement. Choisissez une
              spiruline de qualité comme A3 Spirulina Pills, testée et
              certifiée, pour minimiser les risques de contamination.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>En cas de doute,</strong> consultez votre médecin,
              particulièrement si vous suivez un traitement médical.
            </p>
          </div>
        </section>

        {/* Section 10: Futur */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spiruline dans le futur: La recherche et les applications en
            évolution
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La spiruline continue de fasciner les chercheurs du monde entier.
            Les applications futures promettent des innovations révolutionnaires
            dans différents domaines de la santé et de la nutrition.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">
                  🚀 Nutrition spatiale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  La NASA étudie la spiruline comme source de nutrition complète
                  pour les missions spatiales longues, notamment vers Mars.
                </p>
                <Badge variant="secondary">Recherche active</Badge>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">
                  🌍 Lutte contre la malnutrition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  L'OMS promeut la spiruline comme solution contre la
                  malnutrition dans les pays en développement grâce à sa
                  richesse nutritionnelle.
                </p>
                <Badge variant="secondary">Déploiement global</Badge>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">
                  🧬 Médecine personnalisée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Développement de formulations de spiruline adaptées aux
                  besoins spécifiques de chaque individu selon son profil
                  génétique.
                </p>
                <Badge variant="secondary">Innovation</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Produit recommandé */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-green-800 mb-2">
                🌟 Produit recommandé par nos experts
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Pour une qualité optimale et des résultats garantis
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  A3 Spirulina Pills Xelliss
                </h3>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-green-600">37€</span>
                  <span className="text-gray-600">• 3 semaines de cure</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Spiruline pure certifiée</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Comprimés faciles à avaler</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Livraison rapide </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Garantie qualité</span>
                  </div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  🛒 Commander maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-gray-600 mt-3">
                ✅ Paiement sécurisé • 🚚 Livraison rapide • 💰 Garantie
                satisfait ou remboursé
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions fréquentes sur les bienfaits de la spiruline
          </h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Combien de temps faut-il pour ressentir les effets de la
                  spiruline ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Les effets énergétiques se ressentent généralement après 1-2
                  semaines de prise régulière. Pour les bienfaits sur la peau,
                  l'immunité et la vitalité globale, comptez 4-6 semaines de
                  cure continue. La régularité est la clé du succès !
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Peut-on prendre de la spiruline toute l'année ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Oui, la spiruline peut être consommée en continu. Il est
                  cependant recommandé de faire des pauses de 1 semaine tous les
                  3 mois pour maintenir l'efficacité et éviter une éventuelle
                  accoutumance de l'organisme.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  La spiruline convient-elle aux végétariens et végétaliens ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Absolument ! La spiruline est idéale pour les végétariens et
                  végétaliens car elle apporte des protéines complètes et de la
                  vitamine B12, nutriments souvent déficients dans ces régimes
                  alimentaires. C'est un complément quasi-indispensable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Quelle est la différence entre spiruline bio et
                  conventionnelle ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  La spiruline bio est cultivée sans pesticides ni engrais
                  chimiques, dans un environnement contrôlé. Elle offre une
                  pureté supérieure et une traçabilité garantie. C'est le cas
                  avec A3 Spirulina Pills qui respecte les standards les plus
                  stricts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Peut-on associer la spiruline à d'autres compléments ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Oui, la spiruline se marie parfaitement avec la vitamine C
                  (qui améliore l'absorption du fer), les oméga-3 et les
                  probiotiques. Évitez de la prendre avec du thé ou du café qui
                  peuvent réduire l'absorption du fer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Comment choisir une spiruline de qualité ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Vérifiez l'origine (évitez les productions douteuses),
                  privilégiez les certifications bio, choisissez des comprimés
                  plutôt que la poudre pour une meilleure conservation, et optez
                  pour des marques reconnues comme Xelliss qui garantissent la
                  pureté et la traçabilité complète.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusion : La spiruline, un investissement pour votre santé
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La spiruline représente bien plus qu'un simple complément
              alimentaire : c'est un véritable investissement pour votre santé à
              long terme. Ses bienfaits scientifiquement prouvés en font un
              allié précieux pour retrouver énergie, vitalité et bien-être au
              quotidien.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Pour qui est faite la spiruline ?</strong> Elle convient
              parfaitement aux personnes fatiguées, stressées, sportives,
              végétariennes, ou simplement soucieuses de leur santé. Les
              résultats sont généralement visibles dès les premières semaines de
              prise régulière.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Pour qui n'est-elle pas recommandée ?</strong> Les
              personnes souffrant de maladies auto-immunes, d'hémochromatose, ou
              prenant des anticoagulants doivent consulter leur médecin avant de
              commencer. La prudence est de mise pour les femmes enceintes.
            </p>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  🌟 Commencer ma cure de spiruline
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sources scientifiques
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>
                Karkos, P.D., et al. (2011). "Spirulina in clinical practice:
                evidence-based human applications." Evidence-Based Complementary
                and Alternative Medicine, 2011.
              </li>
              <li>
                Wu, Q., et al. (2016). "Antioxidant, hepatoprotective and
                antitumor properties of liquid nitrogen extract of Spirulina
                platensis." Journal of Cellular and Molecular Medicine, 20(4),
                698-708.
              </li>
              <li>
                Serban, M.C., et al. (2016). "A systematic review and
                meta-analysis of the impact of Spirulina supplementation on
                plasma lipid concentrations." Clinical Nutrition, 35(4),
                842-851.
              </li>
              <li>
                Mazokopakis, E.E., et al. (2014). "The hepatoprotective and
                hypolipidemic effects of Spirulina (Arthrospira platensis)
                supplementation in a Cretan population." Annals of
                Gastroenterology, 27(4), 387-394.
              </li>
              <li>
                Kalafati, M., et al. (2010). "Ergogenic and antioxidant effects
                of spirulina supplementation in humans." Medicine and Science in
                Sports and Exercise, 42(1), 142-151.
              </li>
            </ol>
          </div>
        </section>

        {/* Liens connexes */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Articles connexes
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  <Link
                    href="/spiruline/composition-spiruline"
                    className="hover:text-green-600"
                  >
                    Composition de la spiruline
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Découvrez en détail tous les nutriments contenus dans la
                  spiruline.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  <Link
                    href="/spiruline/spiruline-posologie"
                    className="hover:text-green-600"
                  >
                    Posologie de la spiruline
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Guide complet pour bien doser votre spiruline selon vos
                  besoins.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  <Link href="/phycocyanine" className="hover:text-green-600">
                    Phycocyanine
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Tout savoir sur le pigment bleu de la spiruline et ses
                  propriétés.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
