import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import {
  CheckCircle,
  AlertTriangle,
  Heart,
  Zap,
  Shield,
  Leaf,
  ArrowRight,
  Star,
  Info,
} from "lucide-react";
import Link from "next/link";

export default function SpirulnePage() {
  const breadcrumbItems = [{ label: "Spiruline", href: "/spiruline" }];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Boost d'énergie naturel",
      description: "Réduit la fatigue grâce au fer biodisponible",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Renforcement immunitaire",
      description: "Stimule les défenses naturelles",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Santé cardiovasculaire",
      description: "Soutient la fonction sanguine normale",
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-500" />,
      title: "Protéines complètes",
      description: "65% de protéines avec tous les acides aminés",
    },
  ];

  const composition = [
    {
      nutrient: "Protéines",
      value: "65-70%",
      benefit: "Maintien masse musculaire",
    },
    {
      nutrient: "Fer",
      value: "2,4mg (17% VNR)",
      benefit: "Réduction de la fatigue",
    },
    {
      nutrient: "Vitamine A",
      value: "457µg (57% VNR)",
      benefit: "Vision normale",
    },
    {
      nutrient: "Vitamine K",
      value: "21µg (28% VNR)",
      benefit: "Santé osseuse",
    },
    {
      nutrient: "Phycocyanine",
      value: "0,34mg",
      benefit: "Antioxydant puissant",
    },
  ];

  const qualityCriteria = [
    "Culture en photobioréacteurs fermés",
    "Absence de contaminants et métaux lourds",
    "Richesse en phycocyanine",
    "Certification biologique",
    "Traçabilité complète",
  ];

  const contraindications = [
    "Phénylcétonurie",
    "Maladies auto-immunes",
    "Prise d'anticoagulants",
    "Grossesse (avis médical)",
    "Allergies aux algues",
  ];

  const faqItems = [
    {
      question:
        "Spiruline et fer : pourquoi est-elle si efficace contre l'anémie ?",
      answer:
        "La spiruline contient du fer biodisponible facilement absorbé par l'organisme. Avec 2,4mg pour 4 comprimés (17% des VNR), elle aide à prévenir et traiter l'anémie ferriprive, particulièrement chez les végétariens.",
    },
    {
      question:
        "Quels sont les avantages de la phycocyanine pour le système immunitaire ?",
      answer:
        "La phycocyanine est un puissant antioxydant aux propriétés anti-inflammatoires. Elle stimule la production de globules blancs et renforce les défenses naturelles de l'organisme.",
    },
    {
      question: "Peut-on consommer de la spiruline en cas d'allergie ?",
      answer:
        "La spiruline est généralement bien tolérée. Cependant, en cas d'allergie aux algues ou produits marins, consultez votre médecin avant consommation.",
    },
    {
      question: "Spiruline et végétariens : un complément idéal ?",
      answer:
        "Absolument ! La spiruline apporte des protéines complètes, du fer biodisponible et des nutriments souvent déficitaires dans les régimes végétariens.",
    },
    {
      question: "La spiruline aide-t-elle vraiment à perdre du poids ?",
      answer:
        "La spiruline agit comme coupe-faim naturel grâce à sa richesse en protéines. Elle évite les carences lors d'un régime mais doit être associée à une alimentation équilibrée.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spiruline : Guide Complet pour une Santé Optimale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tout ce qu'il faut savoir sur la spiruline : bienfaits
            scientifiquement prouvés, composition exceptionnelle et conseils
            d'experts pour choisir le meilleur produit.
          </p>
        </div>

        {/* Résumé en bullet points */}
        <Card className="mb-12 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center">
              <Star className="h-6 w-6 mr-2" />
              Ce que vous allez découvrir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-lg">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Bienfaits réels scientifiquement prouvés</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Composition nutritionnelle exceptionnelle</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Comment choisir une spiruline de qualité</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Dosage optimal et conseils d'utilisation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Contre-indications et précautions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Produit recommandé par nos experts</span>
                </div>
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
                  🛒 Voir le Produit Recommandé (37€)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Qu'est-ce que la spiruline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Qu'est-ce que la spiruline ?
          </h2>

          <div className="prose prose-lg text-gray-700 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Définition et origine de la spiruline
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              La spiruline (Spirulina maxima) est une{" "}
              <strong>microalgue d'eau douce</strong> de la famille des
              cyanobactéries, considérée comme l'un des premiers organismes
              vivants sur Terre. Cette algue bleu-vert doit son nom à sa forme
              spiralée caractéristique et pousse naturellement dans les eaux
              chaudes et alcalines.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Spiruline : une source exceptionnelle de nutriments
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Reconnue par l'OMS comme <strong>"l'aliment du futur"</strong>, la
              spiruline est un véritable concentré de nutriments essentiels.
              Elle contient jusqu'à 70% de protéines complètes, dépassant ainsi
              la plupart des sources alimentaires traditionnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Form */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📧 Recevez Notre Guide Gratuit !
            </h2>
            <p className="text-gray-600 mb-6">
              + Conseils exclusifs d'experts et actualités santé
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm size="lg" />
            </div>
          </CardContent>
        </Card>

        {/* Bienfaits de la spiruline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quels sont les bienfaits de la spiruline ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-800 flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  Spiruline et énergie : un booster naturel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  La spiruline combat efficacement la fatigue grâce à sa{" "}
                  <strong>teneur exceptionnelle en fer biodisponible</strong>
                  (2,4mg par dose). Ce fer facilement absorbé optimise le
                  transport d'oxygène et soutient le métabolisme énergétique
                  naturel.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Système immunitaire renforcé
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  La <strong>phycocyanine</strong>, pigment bleu unique de la
                  spiruline, stimule la production de globules blancs et
                  renforce les défenses naturelles. Ses propriétés
                  anti-inflammatoires soutiennent l'immunité globale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-800 flex items-center">
                  <Heart className="h-6 w-6 mr-2" />
                  Spiruline et peau : une alliée beauté
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  Riche en <strong>vitamine A et antioxydants</strong>, la
                  spiruline protège la peau du stress oxydatif et favorise la
                  régénération cellulaire pour un teint éclatant et une peau
                  saine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800 flex items-center">
                  <Leaf className="h-6 w-6 mr-2" />
                  Spiruline et perte de poids
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  La spiruline agit comme <strong>coupe-faim naturel</strong>{" "}
                  grâce à sa richesse en protéines complètes. Elle aide à
                  contrôler l'appétit tout en évitant les carences
                  nutritionnelles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Composition */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quelle est la composition de la spiruline ?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Un cocktail de nutriments essentiels
          </h3>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-lg">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Nutriment
                      </th>
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Quantité
                      </th>
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Bienfait
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {composition.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium text-gray-900">
                          {item.nutrient}
                        </td>
                        <td className="py-3 text-green-600 font-medium">
                          {item.value}
                        </td>
                        <td className="py-3 text-gray-700">{item.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Phycocyanine : le joyau de la spiruline
          </h3>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6 text-lg">
              <p>
                La <strong>phycocyanine</strong> est le pigment bleu qui donne
                sa couleur caractéristique à la spiruline. Ce composé unique
                possède des propriétés antioxydantes exceptionnelles et
                distingue les spirulines de haute qualité. C'est un indicateur
                clé de la fraîcheur et de la pureté du produit.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comment choisir */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment choisir une spiruline de qualité ?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Quels sont les critères d'une bonne spiruline ?
          </h3>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    Critères de qualité essentiels :
                  </h4>
                  <ul className="space-y-2 text-lg">
                    {qualityCriteria.map((criterion, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    À éviter absolument :
                  </h4>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Culture en bassins ouverts</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Origine douteuse ou inconnue</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Prix anormalement bas</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Absence de certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Quelle est la meilleure spiruline pour vos besoins ?
          </h3>
          <Card className="mb-8">
            <CardContent className="p-6 text-lg">
              <p className="mb-4">
                La spiruline se présente sous différentes formes, chacune ayant
                ses avantages :
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Badge className="bg-blue-100 text-blue-800 mb-2">
                    Comprimés
                  </Badge>
                  <p className="text-sm text-gray-600">
                    <strong>Notre recommandation</strong>
                    <br />
                    Pratique, dosage précis, conservation optimale
                  </p>
                </div>
                <div className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mb-2">
                    Poudre
                  </Badge>
                  <p className="text-sm text-gray-600">
                    Absorption rapide mais goût prononcé, conservation plus
                    délicate
                  </p>
                </div>
                <div className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mb-2">
                    Paillettes
                  </Badge>
                  <p className="text-sm text-gray-600">
                    À saupoudrer sur les plats, dosage moins précis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Produit recommandé */}
        <section className="mb-12">
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                🏆 Notre Recommandation : A3 Spirulina Pills
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Spiruline premium cultivée en photobioréacteurs fermés pour une
                pureté maximale
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Pourquoi choisir A3 Spirulina Pills ?
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Culture en photobioréacteurs fermés</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>
                        2x plus de fer que la spiruline traditionnelle
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>70% de protéines complètes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Riche en phycocyanine naturelle</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Informations produit :
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <strong>Format :</strong> 80 comprimés
                    </li>
                    <li>
                      <strong>Dosage :</strong> 4 comprimés/jour (2g)
                    </li>
                    <li>
                      <strong>Durée :</strong> 20 jours
                    </li>
                    <li>
                      <strong>Prix :</strong> 37€ (1,85€/jour)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-xl px-8 py-4"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    🛒 Commander A3 Spirulina Pills - 37€
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <p className="text-sm text-gray-600 mt-2">
                  ✅ Livraison rapide • 💰 Qualité garantie • 🔒 Paiement
                  sécurisé
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comment prendre */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment prendre de la spiruline ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Différentes formes et dosages
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p className="mb-4">
                  <strong>Dosage recommandé :</strong> 4 comprimés par jour (2g
                  de spiruline) à prendre avec un verre d'eau, de préférence le
                  matin.
                </p>
                <p className="mb-4">
                  <strong>Débutants :</strong> Commencez par 2 comprimés puis
                  augmentez progressivement pour habituer votre organisme.
                </p>
                <p>
                  <strong>Sportifs :</strong> Jusqu'à 6 comprimés selon
                  l'intensité de l'entraînement et les besoins.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Est-ce bon de prendre de la spiruline tous les jours ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p className="mb-4">
                  <strong>
                    Oui, la consommation quotidienne est recommandée
                  </strong>{" "}
                  pour bénéficier pleinement des effets de la spiruline.
                </p>
                <p className="mb-4">
                  Cependant, il est conseillé de faire des{" "}
                  <strong>pauses de 2-3 semaines</strong>
                  tous les 2-3 mois pour éviter l'accoutumance.
                </p>
                <p>
                  La régularité est la clé pour observer des résultats durables
                  sur l'énergie et l'immunité.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risques et contre-indications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quels sont les risques et effets secondaires de la spiruline ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Contre-indications
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p className="mb-4">
                  <strong>Attention :</strong> La spiruline est déconseillée
                  dans ces cas :
                </p>
                <ul className="space-y-2">
                  {contraindications.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800 flex items-center">
                  <Info className="h-6 w-6 mr-2" />
                  Comment limiter les effets secondaires
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Commencer par une dose réduite et augmenter
                      progressivement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Boire beaucoup d'eau pour favoriser l'élimination
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Choisir une spiruline de qualité certifiée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Consulter un professionnel en cas de doute</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions Fréquentes
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="mb-4">
                La spiruline est un{" "}
                <strong>
                  super-aliment aux bienfaits scientifiquement prouvés
                </strong>
                pour l'énergie, l'immunité et la santé globale. Cependant, la
                qualité du produit choisi est déterminante pour bénéficier de
                tous ses avantages.
              </p>
              <p className="mb-6">
                Privilégiez toujours une spiruline cultivée en{" "}
                <strong>photobioréacteurs fermés</strong>, riche en phycocyanine
                et certifiée. Les comprimés restent le format le plus pratique
                pour un dosage précis et une conservation optimale.
              </p>

              <div className="bg-white p-4 rounded-lg border border-green-200 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🎯 Notre recommandation :
                </h4>
                <p>
                  Pour débuter avec la spiruline, nous recommandons{" "}
                  <strong>A3 Spirulina Pills</strong>
                  de Xelliss : qualité premium, culture contrôlée et rapport
                  qualité-prix optimal.
                </p>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    ✅ Commencer ma cure de spiruline - 37€
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Articles connexes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Articles Connexes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link href="/phycocyanine" className="hover:text-green-600">
                    Guide Complet Phycocyanine
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Découvrez le pigment bleu miracle de la spiruline et ses
                  propriétés exceptionnelles.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link
                    href="/blog/spiruline-sport"
                    className="hover:text-green-600"
                  >
                    Spiruline et Sport
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Comment optimiser vos performances sportives avec la
                  spiruline.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link
                    href="/blog/spiruline-perte-de-poids"
                    className="hover:text-green-600"
                  >
                    Spiruline et Perte de Poids
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  La spiruline peut-elle vous aider à perdre du poids ? Notre
                  analyse complète.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Sources</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. OMS, « Rapport sur les super-aliments », 2020.</li>
              <li>
                2. Étude scientifique sur la phycocyanine, Journal of Medicinal
                Food, 2019.
              </li>
              <li>
                3. « La spiruline : bienfaits et usages », Université de Paris,
                2021.
              </li>
              <li>
                4. Étude clinique sur la spiruline et l'énergie, Nutrition
                Research, 2020.
              </li>
              <li>
                5. Recherche sur la spiruline et l'immunité, International
                Journal of Food Sciences, 2021.
              </li>
            </ol>
          </div>
        </section>

        {/* CTA final */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Prêt à découvrir les bienfaits de la spiruline ?
          </h3>
          <p className="text-lg mb-6">
            Commencez votre cure avec notre spiruline premium recommandée par
            les experts.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            <Link
              href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
              target="_blank"
            >
              🛒 Commander A3 Spirulina Pills
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
