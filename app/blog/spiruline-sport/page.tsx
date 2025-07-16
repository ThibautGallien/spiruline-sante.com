import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import {
  CheckCircle,
  AlertTriangle,
  Star,
  Timer,
  Zap,
  Shield,
  Award,
  Target,
  TrendingUp,
  Heart,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Spiruline et Sport : Performances Optimisées | Guide Complet 2024",
    description:
      "Découvrez comment la spiruline améliore vos performances sportives : endurance +12%, récupération accélérée, dosages optimaux. Guide expert avec A3 Spirulina.",
    keywords: [
      "spiruline sport",
      "spiruline musculation",
      "spiruline endurance",
      "complément sportif naturel",
      "A3 spirulina",
      "performance sportive",
      "récupération musculaire",
      "spiruline dosage sport",
    ],
    canonicalUrl: "blog/spiruline-sport",
  });
}

export default function SpirulineSportPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Spiruline et Sport" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Spiruline et Sport : Performances Optimisées",
    description:
      "Guide complet sur l'utilisation de la spiruline pour améliorer les performances sportives",
    datePublished: "2024-01-16",
    dateModified: "2024-01-16",
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
      "@id": "https://spiruline-sante.com/blog/spiruline-sport",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Est-il bon de prendre de la spiruline tous les jours pour le sport ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, la prise quotidienne est recommandée pour maintenir des niveaux optimaux de nutriments. La spiruline agit par accumulation et ses bienfaits se renforcent avec la régularité.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps avant de voir des résultats ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les premiers effets sur l'énergie peuvent apparaître dès la première semaine. Pour les performances d'endurance et la récupération, comptez 2-4 semaines d'utilisation régulière.",
        },
      },
      {
        "@type": "Question",
        name: "La spiruline peut-elle remplacer une alimentation équilibrée ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, la spiruline est un complément alimentaire qui ne remplace pas une nutrition sportive adaptée. Elle optimise un régime déjà équilibré.",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spiruline et Sport : Performances Optimisées
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez comment cette micro-algue exceptionnelle peut transformer
            vos entraînements, accélérer votre récupération et optimiser vos
            résultats sportifs naturellement.
          </p>
        </header>

        {/* Résumé en bullet points */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center">
              <Star className="h-6 w-6 mr-2" />
              Ce que vous allez découvrir :
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Bienfaits réels pour les sportifs</strong> :
                  Endurance, récupération et force musculaire
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Comment ça fonctionne concrètement</strong> :
                  Mécanismes d'action scientifiquement prouvés
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Pour quel type de sportif</strong> : Endurance,
                  musculation, sports intensifs
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Comment l'utiliser</strong> : Dosage optimal, timing
                  et forme recommandée
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Résultats attendus</strong> : Amélioration des
                  performances en 2-4 semaines
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">
                  <strong>Risques et contre-indications</strong> : Précautions
                  et populations à risque
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-green-300">
              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-lg"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  🛒 Découvrir A3 Spirulina Xelliss (37€ - 80 comprimés)
                </Link>
              </Button>
              <div className="flex items-center justify-center space-x-4 mt-3 text-sm text-green-700">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Spiruline pure Spirulina maxima
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Livraison 48h
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Qualité garantie
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Vous cherchez un complément naturel pour améliorer vos performances
            sportives ? La spiruline pourrait être la réponse que vous attendez.
            Cette micro-algue exceptionnelle est devenue l'alliée incontournable
            des sportifs de haut niveau comme des amateurs passionnés.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Dans ce guide complet, vous découvrirez comment la spiruline peut
            transformer vos entraînements, accélérer votre récupération et
            optimiser vos résultats. Nous vous expliquerons tout : des
            mécanismes scientifiques aux dosages précis, en passant par les
            meilleures pratiques d'utilisation.
          </p>
        </section>

        {/* Comment ça marche */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment la spiruline fonctionne pour les sportifs
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Mécanismes d'action scientifiques
          </h3>

          <p className="text-lg text-gray-700 mb-4">
            La spiruline agit sur plusieurs leviers physiologiques cruciaux pour
            la performance sportive :
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Optimisation de l'oxygénation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Grâce à sa richesse en fer biodisponible (2,4 mg pour 4
                  comprimés), la spiruline améliore le transport de l'oxygène
                  vers les muscles actifs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Protection antioxydante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Les antioxydants naturels comme la phycocyanine neutralisent
                  les radicaux libres produits lors d'efforts intenses,
                  préservant l'intégrité cellulaire.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Composition idéale pour les sportifs
          </h3>

          <Card className="mb-6 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-xl">
                Spiruline A3 : Profil nutritionnel optimisé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Protéines complètes :</span>
                    <span>1,3g (4 comprimés)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Fer biodisponible :</span>
                    <span>2,4mg (17% VNR)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Vitamine A :</span>
                    <span>457µg (57% VNR)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Vitamine K :</span>
                    <span>21µg (28% VNR)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phycocyanine :</span>
                    <span>0,34mg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Acides aminés :</span>
                    <span>Profil complet</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bienfaits par activité */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bienfaits par type d'activité sportive
          </h2>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-green-800 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Sports d'endurance (course, cyclisme, natation)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-green-700 mb-2">
                    Ce que la spiruline peut faire :
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>
                      • Améliorer l'endurance cardiovasculaire de 8-12% en
                      moyenne
                    </li>
                    <li>• Retarder l'apparition de la fatigue musculaire</li>
                    <li>
                      • Optimiser l'utilisation de l'oxygène pendant l'effort
                    </li>
                    <li>
                      • Maintenir des niveaux d'énergie stables sur la durée
                    </li>
                  </ul>
                </div>
                <p className="text-green-600 font-medium">
                  <Timer className="h-4 w-4 inline mr-1" />
                  Résultats attendus : Amélioration perceptible après 2-3
                  semaines d'utilisation régulière.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Musculation et sports de force
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Ce que la spiruline peut faire :
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Accélérer la synthèse des protéines musculaires</li>
                      <li>• Réduire les courbatures post-entraînement</li>
                      <li>• Optimiser la récupération entre les séries</li>
                      <li>• Soutenir la prise de masse musculaire maigre</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">
                      Ce que la spiruline ne peut pas faire :
                    </h4>
                    <p className="text-gray-700">
                      Remplacer un apport protéique suffisant ou compenser un
                      entraînement inadéquat.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Sports intensifs et par intervalles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    • Améliorer la capacité de récupération entre les efforts
                  </li>
                  <li>• Réduire l'accumulation d'acide lactique</li>
                  <li>• Maintenir les performances lors d'efforts répétés</li>
                  <li>
                    • Soutenir le système immunitaire sollicité par l'intensité
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="my-12 py-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              📧 Recevez nos guides sport gratuits !
            </h3>
            <p className="text-blue-100">
              Conseils nutrition, programmes d'entraînement et offres exclusives
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="dark" size="lg" />
          </div>
        </section>

        {/* Comment utiliser */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment utiliser la spiruline A3 pour le sport
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Dosage précis selon votre activité
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">
                  Sportif occasionnel
                </CardTitle>
                <CardDescription>2-3 séances/semaine</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-green-600 mb-2">
                  2 comprimés par jour
                </p>
                <p className="text-gray-700">
                  Prise 30 minutes avant l'entraînement
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">
                  Sportif régulier
                </CardTitle>
                <CardDescription>4-5 séances/semaine</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-blue-600 mb-2">
                  4 comprimés par jour
                </p>
                <p className="text-gray-700">2 avant + 2 après l'effort</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">
                  Athlète intensif
                </CardTitle>
                <CardDescription>6+ séances/semaine</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-purple-600 mb-2">
                  4+ comprimés par jour
                </p>
                <p className="text-gray-700">
                  Matin à jeun + post-entraînement
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Timing optimal pour la prise
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">
                  Avant l'entraînement (30-60 min)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700">
                  • Optimise la disponibilité énergétique
                </p>
                <p className="text-gray-700">
                  • Améliore l'oxygénation musculaire
                </p>
                <p className="text-gray-700">
                  • Prépare l'organisme à l'effort
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">
                  Après l'entraînement (dans les 2h)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700">
                  • Accélère la récupération musculaire
                </p>
                <p className="text-gray-700">
                  • Réduit l'inflammation post-effort
                </p>
                <p className="text-gray-700">
                  • Optimise la synthèse protéique
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Précautions */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Précautions et contre-indications importantes
          </h2>

          <Card className="border-red-200 bg-red-50 mb-6">
            <CardHeader>
              <CardTitle className="text-xl text-red-800 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Qui ne doit pas utiliser la spiruline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">
                    Contre-indications absolues :
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Phénylcétonurie (présence de phénylalanine)</li>
                    <li>• Hémochromatose (surcharge en fer)</li>
                    <li>• Maladies auto-immunes actives</li>
                    <li>• Allergie connue aux algues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Populations à surveiller :
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Femmes enceintes et allaitantes</li>
                    <li>• Personnes sous anticoagulants</li>
                    <li>• Enfants de moins de 12 ans</li>
                    <li>• Personnes avec troubles thyroïdiens</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-lg text-yellow-800">
                Effets secondaires possibles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">
                <strong>En cas de surdosage :</strong> Troubles digestifs
                légers, maux de tête temporaires, nausées passagères.
              </p>
              <p className="text-yellow-700 font-medium">
                <strong>Recommandation :</strong> Commencer par 1 comprimé/jour
                et augmenter progressivement.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Produit recommandé */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Produit recommandé : A3 Spirulina Xelliss
          </h2>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Pourquoi choisir A3 Spirulina spécifiquement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">
                    Qualité supérieure :
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>
                      • Spirulina maxima (plus riche que Spirulina platensis)
                    </li>
                    <li>• Culture en photobioréacteurs fermés</li>
                    <li>• Absence de contaminants et métaux lourds</li>
                    <li>• Concentration optimale en phycocyanine</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">
                    Avantages pour les sportifs :
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Dosage précis avec les comprimés</li>
                    <li>• Facilité de transport et de prise</li>
                    <li>• Absorption optimisée</li>
                    <li>• Rapport qualité-prix excellent</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">
                Prix et conditionnement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-2xl font-bold text-blue-600">
                    37€ pour 80 comprimés
                  </p>
                  <p className="text-gray-700">
                    Cure de 20 jours à dosage optimal (4 comprimés/jour)
                  </p>
                  <p className="text-gray-700">
                    Soit 1,85€ par jour pour des performances améliorées
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-lg"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  🛒 Commander A3 Spirulina Xelliss maintenant
                </Link>
              </Button>

              <div className="flex items-center justify-center space-x-4 mt-3 text-sm text-blue-700">
                <span>✓ Livraison rapide 48h</span>
                <span>✓ Garantie satisfaction</span>
                <span>✓ Paiement sécurisé</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Anti-dopage */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spiruline et anti-dopage : informations importantes
          </h2>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Conformité réglementaire
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-lg">
                  La spiruline n'est PAS un produit dopant
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-lg">
                  Aucune substance interdite par l'AMA
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-lg">
                  Complément alimentaire naturel autorisé
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-lg">
                  Utilisée par de nombreux athlètes professionnels
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            FAQ : Spiruline et sport
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Est-il bon de prendre de la spiruline tous les jours pour le
                  sport ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Oui, la prise quotidienne est recommandée pour maintenir des
                  niveaux optimaux de nutriments. La spiruline agit par
                  accumulation et ses bienfaits se renforcent avec la
                  régularité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Combien de temps avant de voir des résultats ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Les premiers effets sur l'énergie peuvent apparaître dès la
                  première semaine. Pour les performances d'endurance et la
                  récupération, comptez 2-4 semaines d'utilisation régulière.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  La spiruline peut-elle remplacer une alimentation équilibrée ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Non, la spiruline est un complément alimentaire qui ne
                  remplace pas une nutrition sportive adaptée. Elle optimise un
                  régime déjà équilibré.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Quelle différence entre spiruline en poudre et en comprimés ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Les comprimés offrent un dosage précis, une meilleure
                  conservation et une praticité d'usage. La biodisponibilité est
                  équivalente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Y a-t-il des risques à long terme ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  La spiruline est consommée depuis des millénaires sans effets
                  indésirables connus. Respecter les dosages recommandés est
                  essentiel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Peut-on associer spiruline et autres compléments ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Oui, la spiruline se marie bien avec les oméga-3, la créatine
                  ou les vitamines. Demandez conseil à un nutritionniste
                  sportif.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusion honnête
          </h2>

          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La spiruline représente un atout majeur pour optimiser vos
                performances sportives naturellement. Ses bienfaits
                scientifiquement prouvés sur l'endurance, la récupération et la
                force musculaire en font un complément de choix pour tous les
                sportifs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Pour qui c'est fait :
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-gray-700">
                      • Sportifs d'endurance cherchant à améliorer leurs
                      performances
                    </p>
                    <p className="text-gray-700">
                      • Pratiquants de musculation souhaitant optimiser leur
                      récupération
                    </p>
                    <p className="text-gray-700">
                      • Athlètes soucieux d'une approche naturelle et saine
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-800 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Pour qui ce n'est pas prioritaire :
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-gray-700">
                      • Sportifs très occasionnels (moins de 2 séances/semaine)
                    </p>
                    <p className="text-gray-700">
                      • Personnes avec contre-indications médicales
                    </p>
                    <p className="text-gray-700">
                      • Ceux cherchant des résultats instantanés sans régularité
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 font-medium mb-2">
                  <Heart className="h-4 w-4 inline mr-1" />
                  Notre recommandation finale :
                </p>
                <p className="text-gray-700">
                  La spiruline A3 Xelliss offre le meilleur rapport
                  qualité-prix-efficacité pour les sportifs exigeants. Commencez
                  par une cure de 20 jours pour évaluer les bénéfices sur vos
                  performances.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Final */}
        <section className="mb-8">
          <Card className="border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚀 Prêt à optimiser vos performances ?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Rejoignez des milliers de sportifs qui ont déjà transformé leurs
                résultats avec la spiruline A3
              </p>

              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  🛒 Optimiser mes performances avec A3 Spirulina (37€)
                </Link>
              </Button>

              <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-600">
                <span>✓ Livraison rapide 48h</span>
                <span>✓ Garantie satisfaction</span>
                <span>✓ Qualité certifiée</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Articles connexes */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Articles connexes
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/blog/spiruline-cheveux"
                    className="hover:text-green-600"
                  >
                    Spiruline et cheveux
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Découvrez comment la spiruline peut améliorer la santé de vos
                  cheveux.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/blog/spiruline-perte-de-poids"
                    className="hover:text-green-600"
                  >
                    Spiruline et perte de poids
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  La spiruline peut-elle aider à perdre du poids ? Conseils et
                  méthodes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/spiruline/spiruline-posologie"
                    className="hover:text-green-600"
                  >
                    Posologie spiruline
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Guide complet du dosage optimal selon vos besoins.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-8">
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">
                Sources scientifiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 italic">
                Études cliniques sur la spiruline et performance sportive,
                Journal of Sports Medicine, Nutritional Science Reviews. Cet
                article ne remplace pas un avis médical professionnel.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
