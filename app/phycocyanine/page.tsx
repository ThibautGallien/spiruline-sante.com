import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Droplets,
  Shield,
  Zap,
  Heart,
  Star,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { PhycocyanineResetSection } from "@/components/sections/phycocyanine-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Phycocyanine : Le Pigment Bleu aux Vertus Exceptionnelles | Guide Complet",
    description:
      "Découvrez la phycocyanine, le pigment bleu de la spiruline aux propriétés antioxydantes uniques. Bienfaits, posologie et conseils d'experts.",
    keywords: [
      "phycocyanine",
      "pigment bleu spiruline",
      "antioxydant naturel",
      "phycocyanine bienfaits",
      "phycocyanine liquide",
      "PhycoSci X14",
      "Xelliss phycocyanine",
      "spiruline phycocyanine",
      "complément antioxydant",
    ],
    canonicalUrl: "phycocyanine",
    ogImage: "/images/phycocyanine-og.jpg",
  });
}

export default function PhycocyaninePage() {
  const breadcrumbItems = [{ label: "Phycocyanine" }];

  // Données structurées pour le SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Phycocyanine : Le Pigment Bleu aux Vertus Exceptionnelles",
    description:
      "Guide complet sur la phycocyanine, ses bienfaits pour la santé et son utilisation optimale",
    datePublished: "2024-01-20",
    dateModified: "2024-12-20",
    author: {
      "@type": "Organization",
      name: "Spirulina Health",
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
      "@id": "https://spiruline-sante.com/phycocyanine",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que la phycocyanine ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La phycocyanine est un pigment bleu naturel présent dans la spiruline, reconnu pour ses puissantes propriétés antioxydantes et anti-inflammatoires.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les bienfaits de la phycocyanine ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La phycocyanine offre de nombreux bienfaits : boost d'énergie, propriétés antioxydantes puissantes, effet anti-inflammatoire, soutien du système immunitaire.",
        },
      },
      {
        "@type": "Question",
        name: "Comment prendre la phycocyanine ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La forme liquide est recommandée pour une meilleure absorption. Prenez 8ml par jour de PhycoSci X14, de préférence le matin à jeun.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header optimisé pour le CTR */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-800 border-blue-300"
            >
              🔬 Science & Santé
            </Badge>
            <Badge
              variant="outline"
              className="bg-green-100 text-green-800 border-green-300"
            >
              ✨ Antioxydant Puissant
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Phycocyanine : Le Pigment Bleu aux Vertus Exceptionnelles
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Découvrez les secrets de la phycocyanine, ce pigment bleu unique de
            la spiruline qui révolutionne la santé naturelle grâce à ses
            propriétés antioxydantes 16 fois supérieures à la vitamine C.
          </p>

          <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
            <span>⏱️ Lecture : 8 min</span>
            <span>⭐ Note : 4.8/5</span>
          </div>
        </div>

        {/* Summary Box avec CTA immédiat */}
        <Card className="mb-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-green-800">
              <Star className="h-6 w-6 mr-2" />
              Ce que vous allez découvrir :
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Qu'est-ce que la phycocyanine et pourquoi elle fascine la science",
                "Ses 5 bienfaits majeurs pour votre santé et vitalité",
                "Comment elle se distingue de la spiruline classique",
                "Le bon moment et dosage pour une efficacité maximale",
                "Effets secondaires et précautions à connaître absolument",
                "PhycoSci X14 : la phycocyanine la plus concentrée du marché",
              ].map((item, index) => (
                <div key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/80 p-4 rounded-lg border border-green-300">
              <p className="text-center text-gray-700 mb-4">
                <strong>⚡ Vous cherchez la phycocyanine la plus pure ?</strong>
                <br />
                PhycoSci X14 offre 14g/L de concentration - Record mondial !
              </p>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                    target="_blank"
                  >
                    Découvrir PhycoSci X14
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Section Phycocyanine Reset - Composant réutilisable */}
        <PhycocyanineResetSection className="my-12" />
        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Qu'est-ce que la phycocyanine ?
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            La phycocyanine est un{" "}
            <strong className="text-green-700">pigment bleu naturel</strong>{" "}
            présent dans la spiruline qui fascine le monde scientifique. Cette
            protéine unique représente environ 15-20% du poids sec de la
            spiruline et lui confère sa couleur bleu-vert caractéristique.
          </p>

          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Droplets className="h-6 w-6 mr-2" />
                Le saviez-vous ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-blue-700">
                La phycocyanine est le seul pigment bleu comestible au monde !
                Sa structure moléculaire unique lui permet d'absorber la lumière
                rouge et de la convertir en énergie, d'où ses propriétés
                exceptionnelles pour notre organisme.
              </p>
            </CardContent>
          </Card>

          <p className="text-lg text-gray-700 mb-6">
            Contrairement à la spiruline entière, la phycocyanine concentrée
            offre une
            <strong className="text-green-600">
              {" "}
              biodisponibilité optimale
            </strong>{" "}
            et des effets plus ciblés sur votre santé.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-600 pb-2">
            Les 5 bienfaits majeurs de la phycocyanine
          </h2>

          {/* Bienfaits avec cards colorées */}
          <div className="space-y-8 mb-12">
            <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-700 text-2xl">
                  <Zap className="h-7 w-7 mr-3" />
                  1. Boost d'énergie et réduction de la fatigue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  Vous ressentez une <strong>fatigue chronique</strong> ou des
                  baisses d'énergie ? La phycocyanine est votre alliée naturelle
                  grâce à sa richesse en fer biodisponible et en protéines
                  complètes.
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Améliore le transport de l'oxygène dans le sang
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Soutient les processus métaboliques énergétiques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Appréciée des sportifs pour l'endurance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700 text-2xl">
                  <Shield className="h-7 w-7 mr-3" />
                  2. Propriétés antioxydantes puissantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  Les radicaux libres accélérent le vieillissement et favorisent
                  les maladies. La phycocyanine les neutralise avec une
                  efficacité{" "}
                  <strong className="text-green-600">
                    16 fois supérieure à la vitamine C
                  </strong>{" "}
                  !
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                  <p className="text-green-800 font-semibold">
                    🔬 Études scientifiques : Activité ORAC de 70 000 unités par
                    gramme
                  </p>
                </div>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Protège les cellules des dommages oxydatifs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Réduit le risque de maladies chroniques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Ralentit le vieillissement prématuré
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700 text-2xl">
                  <Heart className="h-7 w-7 mr-3" />
                  3. Effet anti-inflammatoire naturel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  L'inflammation chronique est à l'origine de nombreux troubles.
                  La phycocyanine agit comme un{" "}
                  <strong>inhibiteur naturel</strong> des enzymes
                  pro-inflammatoires.
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Réduit les douleurs articulaires et musculaires
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Accélère la récupération après l'effort
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Prévient les inflammations chroniques
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700 text-2xl">
                  <Shield className="h-7 w-7 mr-3" />
                  4. Soutien au système immunitaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  Renforcez vos défenses naturelles ! La phycocyanine stimule la
                  production de <strong>globules blancs</strong> et améliore la
                  réponse immunitaire.
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Augmente l'activité des cellules immunitaires
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Protège contre les infections saisonnières
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Maintient la santé des muqueuses
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700 text-2xl">
                  <Star className="h-7 w-7 mr-3" />
                  5. Bienfaits spécifiques avancés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-700 mb-2">
                      Recherche anticancer prometteuse
                    </h4>
                    <p className="text-lg text-gray-700">
                      Des études explorent son rôle protecteur dans les
                      traitements anticancéreux, grâce à ses effets sur les
                      cellules saines.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-700 mb-2">
                      Aide à la perte de poids naturelle
                    </h4>
                    <p className="text-lg text-gray-700">
                      Elle régule l'appétit et stimule le métabolisme pour
                      brûler les graisses de manière naturelle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Phycocyanine vs Spiruline : Quelle différence ?
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Critère
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Spiruline
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Phycocyanine
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-lg font-medium">
                    Composition
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-lg">
                    Protéines, vitamines, minéraux
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-lg font-semibold text-green-600">
                    Antioxydants concentrés
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-lg font-medium">
                    Utilisation
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-lg">
                    Apport nutritionnel global
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-lg font-semibold text-green-600">
                    Besoins spécifiques ciblés
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-lg font-medium">
                    Biodisponibilité
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-lg">
                    Bonne (poudre/comprimés)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-lg font-semibold text-green-600">
                    Excellente (forme liquide)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-lg font-medium">
                    Résultats
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-lg">
                    Visibles en 4-6 semaines
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-lg font-semibold text-green-600">
                    Effets rapides (2-3 semaines)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="mb-8 bg-blue-50 border-blue-300">
            <CardContent className="p-6">
              <p className="text-lg text-blue-700 font-medium">
                <strong>💡 Notre conseil :</strong> La phycocyanine liquide est
                particulièrement intéressante car elle est absorbée rapidement
                par l'organisme, garantissant des effets visibles plus
                rapidement qu'avec la spiruline en poudre.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Quand et comment consommer la phycocyanine ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-yellow-700">
                  🌅 Moment idéal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-lg space-y-2">
                  <li>
                    <strong>Le matin :</strong> boost naturel
                  </li>
                  <li>
                    <strong>Avant sport :</strong> performance
                  </li>
                  <li>
                    <strong>Fin de journée :</strong> récupération
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  💧 Mode d'emploi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-lg space-y-2">
                  <li>
                    <strong>Dosage :</strong> 8ml par jour
                  </li>
                  <li>
                    <strong>Durée :</strong> cure 4-8 semaines
                  </li>
                  <li>
                    <strong>Dilution :</strong> dans un verre d'eau
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">
                  🚀 Forme liquide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-lg space-y-2">
                  <li>
                    <strong>Absorption :</strong> maximale
                  </li>
                  <li>
                    <strong>Efficacité :</strong> accrue
                  </li>
                  <li>
                    <strong>Résultats :</strong> quasi-immédiats
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Effets secondaires et contre-indications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Quels sont les dangers ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-orange-700 mb-4">
                  La phycocyanine est généralement très bien tolérée, mais
                  quelques précautions :
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Troubles digestifs mineurs chez certaines personnes
                      sensibles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Interaction possible avec les anticoagulants</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Qui ne peut pas en prendre ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Personnes souffrant d'hémochromatose (excès de fer)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Femmes enceintes ou allaitantes (sans avis médical)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Personnes sous traitement anticoagulant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Section produit PhycoSci X14 */}
          <Card className="mb-8 bg-gradient-to-br from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                  <Droplets className="h-8 w-8 mr-3" />
                  PhycoSci X14 : L'Excellence en Toute Pureté
                </h2>
                <p className="text-xl text-green-100">
                  La phycocyanine la plus concentrée au monde avec ses 14g/L !
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  {
                    title: "Concentration record",
                    desc: "14g/L de phycocyanine pure",
                  },
                  {
                    title: "Procédé EPNA",
                    desc: "Extraction naturelle sans solvant",
                  },
                  { title: "Spirulina maxima", desc: "Souche 30% plus riche" },
                  {
                    title: "Prix transparent",
                    desc: "44€ la bouteille de 250ml",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <h4 className="font-semibold text-green-200 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/90">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg mb-4">
                  <strong>✨ Pourquoi choisir PhycoSci X14 ?</strong>
                </p>
                <ul className="text-left max-w-2xl mx-auto mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>
                      Pureté absolue grâce à la culture en photobioréacteur
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>
                      Concentration 2x supérieure aux produits concurrents
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Absorption optimale grâce à la forme liquide</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Engagement durable et écoresponsable</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-white text-green-600 hover:bg-gray-100 text-lg py-3 px-8"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                    target="_blank"
                  >
                    Découvrir PhycoSci X14
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Pourquoi faire une cure de phycocyanine ?
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Une cure de phycocyanine est particulièrement recommandée pour
            optimiser votre bien-être de manière naturelle et ciblée.
            Contrairement aux suppléments synthétiques, elle agit en harmonie
            avec votre organisme.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">
                  🛡️ Renforcement immunitaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-3">
                  Idéal lors des changements de saison pour maintenir vos
                  défenses naturelles au top niveau.
                </p>
                <ul className="space-y-1 text-lg">
                  <li>• Protection contre les infections saisonnières</li>
                  <li>• Récupération accélérée en cas de fatigue</li>
                  <li>• Maintien de la vitalité quotidienne</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  💪 Performance et récupération
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-3">
                  Perfect pour les sportifs et les personnes actives cherchant à
                  optimiser leurs performances.
                </p>
                <ul className="space-y-1 text-lg">
                  <li>• Réduction des douleurs et inflammations</li>
                  <li>• Amélioration de l'endurance naturelle</li>
                  <li>• Récupération musculaire accélérée</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-700">
                  ⚡ Boost énergétique naturel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-3">
                  Alternative saine aux stimulants chimiques pour retrouver
                  votre énergie naturelle.
                </p>
                <ul className="space-y-1 text-lg">
                  <li>• Réduction de la fatigue chronique</li>
                  <li>• Amélioration de la concentration</li>
                  <li>• Vitalité durable sans effet rebond</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700">
                  🧠 Protection anti-âge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-3">
                  Investissement dans votre santé à long terme grâce à ses
                  propriétés antioxydantes puissantes.
                </p>
                <ul className="space-y-1 text-lg">
                  <li>• Ralentissement du vieillissement cellulaire</li>
                  <li>• Protection contre les maladies chroniques</li>
                  <li>• Préservation des fonctions cognitives</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Témoignages : Ce que disent nos utilisateurs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold text-gray-700">
                    Isabelle
                  </span>
                </div>
                <p className="text-lg text-gray-700 italic mb-2">
                  "Grâce au jeûne intermittent, aux plantes et aux produits
                  Xelliss, j'ai retrouvé le sommeil, perdu 29 kg et vu mes
                  douleurs disparaître. Après 18 ans de polyarthrite, je revis :
                  je marche, fais du sport et n'ai plus besoin de traitement."
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold text-gray-700">
                    Anne-Cecile
                  </span>
                </div>
                <p className="text-lg text-gray-700 italic mb-2">
                  "Atteinte d’un cancer du sein avec métastases, j’ai pu suivre
                  mes chimiothérapies chaque semaine sans interruption grâce à
                  la phyco, qui a stabilisé mes globules. En augmentant les
                  doses, mes métastases ont significativement diminué — je
                  continue aujourd’hui ce soutien naturel en parallèle de mon
                  traitement."
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Conclusion : Pourquoi intégrer la phycocyanine à votre quotidien ?
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            La phycocyanine représente une{" "}
            <strong className="text-green-600">
              révolution dans le domaine des compléments naturels
            </strong>
            . Son efficacité scientifiquement prouvée, sa pureté exceptionnelle
            et sa biodisponibilité optimale en font un allié incontournable pour
            votre santé.
          </p>

          <Card className="mb-8 bg-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                🎯 En résumé : Les points clés à retenir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-lg">
                      <strong>Antioxydant 16x plus puissant</strong> que la
                      vitamine C
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-lg">
                      <strong>Énergie naturelle</strong> sans effets secondaires
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-lg">
                      <strong>Anti-inflammatoire naturel</strong> pour vos
                      articulations
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-lg">
                      <strong>Soutien immunitaire</strong> pour toute la famille
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-lg">
                      <strong>Form liquide</strong> pour une absorption maximale
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-lg">
                      <strong>PhycoSci X14</strong> : la concentration record
                      mondiale
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Que vous cherchiez à{" "}
            <strong className="text-blue-600">booster votre énergie</strong>,
            <strong className="text-green-600">
              {" "}
              renforcer votre immunité
            </strong>
            , ou simplement
            <strong className="text-purple-600">
              {" "}
              prendre soin de votre santé de manière naturelle
            </strong>
            , la phycocyanine s'impose comme le complément de référence.
          </p>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              <strong>
                Prêt à découvrir les bienfaits de la phycocyanine ?
              </strong>
            </p>
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg py-4 px-8"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                  target="_blank"
                >
                  Commander PhycoSci X14
                </Link>
              </Button>

              <div className="text-sm text-gray-600">
                <p>
                  ✅ Livraison rapide • ✅ Produit premium • ✅ Support client
                  expert
                </p>
              </div>

              <div className="mt-6">
                <p className="text-gray-600 mb-3">
                  Vous avez des questions ? Découvrez nos autres guides :
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/phycocyanine/composition-phycocyanine-guide-complet">
                      📊 Composition détaillée
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/phycocyanine/guide-posologie-phycocyanine-usage-optimal">
                      💊 Guide posologie
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/spiruline">🌿 Découvrir la spiruline</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
