import { generateSEOMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ShoppingCart,
  Star,
  ArrowRight,
  Trophy,
  Heart,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SpirulineResetSection } from "@/components/sections/spiruline-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Natura4Ever vs Xelliss : Comparaison Complète 2025",
    description:
      "Découvrez pourquoi Natura4Ever est devenu Xelliss. Comparatif détaillé des produits, prix, qualité et avis clients. Guide d'achat complet.",
    keywords: [
      "natura4ever",
      "xelliss",
      "spiruline",
      "phycocyanine",
      "comparaison",
      "avis",
      "prix",
      "qualité",
      "phycosci x14",
      "x gold",
      "a3 spirulina",
    ],
    canonicalUrl: "blog/natura4ever-xelliss",
  });
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-green-600">
              Accueil
            </Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-green-600">
              Blog
            </Link>
            <span>→</span>
            <span className="text-gray-900">Natura4Ever vs Xelliss</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Natura4Ever vs Xelliss : L'Excellence Française en Compléments
            Naturels
          </h1>

          <div className="flex items-center space-x-4 mb-8 text-sm text-gray-600">
            <span>📅 Mise à jour : Janvier 2025</span>
            <span>⏱️ Lecture : 6 min</span>
            <span>👤 Thibaut</span>
          </div>

          {/* Résumé en bullet points */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              🔍 Ce que vous allez découvrir :
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Évolution de marque :</strong> Natura4Ever → Xelliss,
                  même excellence
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Produits d'exception :</strong> PhycoSci X14, X Gold,
                  A3 Spirulina
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Qualité premium :</strong> Innovation et recherche
                  française
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Service personnalisé :</strong> Accompagnement expert
                  unique
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Témoignages clients :</strong> Résultats exceptionnels
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Innovation continue :</strong> Leader français des
                  superaliments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none [&_p]:text-lg [&_p]:text-gray-700 [&_ul]:text-lg [&_li]:text-gray-700 [&_li]:mb-1">
            {/* Introduction */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                ✨ Une Excellence qui Perdure
              </h2>
              <p className="text-lg text-green-800 mb-4">
                <strong>Natura4Ever</strong> a évolué pour devenir{" "}
                <strong>Xelliss</strong> en 2023, marquant une nouvelle étape
                dans l'innovation des compléments alimentaires naturels. Cette
                transformation témoigne de l'engagement continu de la marque
                vers l'excellence.
              </p>
              <p className="text-lg text-green-800">
                Les produits que vous aimiez chez Natura4Ever sont désormais
                disponibles chez Xelliss, avec les mêmes formulations
                d'exception et un service client encore amélioré.
              </p>
            </div>
            {/* Section Spiruline Reset - Composant réutilisable */}
            <SpirulineResetSection className="my-12" />
            {/* Changement de marque */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              De Natura4Ever à Xelliss : Une Évolution Stratégique Réussie
            </h2>

            <p className="text-gray-700 mb-6">
              Natura4Ever était déjà une référence française dans les
              compléments alimentaires naturels, reconnue pour son expertise en
              spiruline et phycocyanine. Le passage à <strong>Xelliss </strong>
              en 2023 représente une évolution naturelle, permettant à la marque
              de renforcer sa position de leader et d'élargir sa gamme de
              produits innovants.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">
                    🏆 Natura4Ever (Héritage)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-lg text-gray-600 space-y-2">
                    <li>• Pionnier français des superaliments</li>
                    <li>• Expertise reconnue en spiruline</li>
                    <li>• Innovation constante depuis 2010</li>
                    <li>• Base solide de clients fidèles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">
                    🚀 Xelliss (Innovation)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-lg text-gray-600 space-y-2">
                    <li>• Nouvelle identité moderne</li>
                    <li>• Gamme élargie et optimisée</li>
                    <li>• Service client renforcé</li>
                    <li>• Vision d'avenir ambitieuse</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Produits phares */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Les Produits d'Exception Xelliss : Innovation et Qualité Premium
            </h2>

            {/* PhycoSci X14 */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🔵 PhycoSci X14 : La Révolution de la Phycocyanine
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Image
                  src="/PhycoSciX14.webp"
                  alt="PhycoSci X14 Xelliss - Le concentré de phycocyanine le plus puissant"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    ✨ Les avantages exceptionnels :
                  </h4>
                  <ul className="text-lg text-blue-800 space-y-1">
                    <li>• Concentration record en phycocyanine pure</li>
                    <li>• Forme liquide pour une absorption optimale</li>
                    <li>
                      • Propriétés antioxydantes scientifiquement prouvées
                    </li>
                    <li>• Soutien immunitaire et énergétique remarquable</li>
                    <li>• Processus d'extraction breveté exclusif</li>
                    <li>• Résultats visibles dès les premières semaines</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    💎 Investissement dans votre santé :
                  </h4>
                  <p className="text-lg text-green-800">
                    44€/mois, PhycoSci X14 représente un investissement dans
                    votre bien-être avec une qualité inégalée sur le marché
                    français.
                  </p>
                </div>
              </div>
            </div>

            {/* X Gold */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🟡 X Gold : L'Alliance Parfaite Curcuma-Pipérine
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Image
                  src="/X-Gold-Xelliss.webp"
                  alt="X Gold Xelliss - La synergie curcuma-pipérine optimisée"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    🧬 Formulation scientifique avancée :
                  </h4>
                  <ul className="text-lg text-yellow-800 space-y-1">
                    <li>
                      • <strong>Curcuma premium :</strong> Anti-inflammatoire
                      naturel puissant
                    </li>
                    <li>
                      • <strong>Pipérine optimisée :</strong> Biodisponibilité
                      maximale
                    </li>
                    <li>
                      • <strong>Synergie unique :</strong> Efficacité multipliée
                      par 20
                    </li>
                    <li>
                      • <strong>Dosage optimal :</strong> Recherche française
                      exclusive
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">
                    💰 Excellent rapport qualité-prix :
                  </h4>
                  <p className="text-lg text-orange-800">
                    À <strong>52€/mois</strong>, X Gold offre une formulation
                    premium accessible pour un bien-être digestif et articulaire
                    optimal.
                  </p>
                </div>
              </div>
            </div>

            {/* A3 Spirulina */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🟢 A3 Spirulina : La Spiruline Française d'Excellence
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Image
                  src="/A3-Spirulina-Pills.webp"
                  alt="A3 Spirulina Xelliss - La spiruline française premium"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">
                    🌿 Pureté et qualité exceptionnelles :
                  </h4>
                  <ul className="text-lg text-green-800 space-y-1">
                    <li>• Spiruline 100% pure, cultivée en France</li>
                    <li>• Taux de protéines record (65%)</li>
                    <li>• 18 acides aminés essentiels</li>
                    <li>• Vitamines B12, fer, bêta-carotène naturels</li>
                    <li>• Contrôles qualité rigoureux</li>
                    <li>• Format comprimés ultra-pratique</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    👥 Bénéfique pour tous :
                  </h4>
                  <ul className="text-lg text-blue-800 space-y-1">
                    <li>• Sportifs : performance et récupération</li>
                    <li>• Familles : nutrition complète naturelle</li>
                    <li>• Seniors : vitalité et immunité</li>
                    <li>• Végétariens : apport protéique optimal</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparaison prix avec valeur ajoutée */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💰 Investissement Santé : La Qualité Xelliss à sa Juste Valeur
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                🎯 Pourquoi choisir Xelliss ? La différence se voit dans les
                détails
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <Trophy className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <strong>Recherche française</strong>
                    <p className="text-gray-600">10+ années d'innovation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <strong>Accompagnement expert</strong>
                    <p className="text-gray-600">Suivi personnalisé inclus</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <strong>Efficacité prouvée</strong>
                    <p className="text-gray-600">Milliers de témoignages</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-blue-50">
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      Produit Xelliss
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-semibold">
                      Investissement/mois
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-semibold">
                      Valeur exceptionnelle
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-semibold">
                      Satisfaction clients
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      <strong>PhycoSci X14</strong>
                      <br />
                      <small className="text-green-600">
                        Phycocyanine liquide premium
                      </small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-lg font-semibold">
                      44€
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="text-green-600 font-semibold">
                        Exceptionnelle
                      </span>
                      <br />
                      <small>Concentration unique</small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <small className="text-green-600">96% satisfaits</small>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">
                      <strong>X Gold</strong>
                      <br />
                      <small className="text-yellow-600">
                        Curcuma-Pipérine synergique
                      </small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-lg font-semibold">
                      52€
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="text-green-600 font-semibold">
                        Remarquable
                      </span>
                      <br />
                      <small>Formulation brevetée</small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <small className="text-green-600">92% satisfaits</small>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      <strong>A3 Spirulina</strong>
                      <br />
                      <small className="text-blue-600">Spiruline pure</small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-lg font-semibold">
                      26€
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="text-green-600 font-semibold">
                        Excellente
                      </span>
                      <br />
                      <small>Qualité premium accessible</small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <small className="text-green-600">94% satisfaits</small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Comment acheter - Version positive */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🛒 Accéder aux Produits Xelliss : Un Service Personnalisé Unique
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                <h3 className="text-xl font-semibold text-blue-900">
                  🌟 L'Avantage de la Distribution Exclusive
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">
                    ✨ Pourquoi cette approche unique ?
                  </h4>
                  <ul className="text-lg text-blue-800 space-y-2">
                    <li>• Conseil personnalisé par des experts</li>
                    <li>• Suivi individualisé de vos besoins</li>
                    <li>• Garantie de fraîcheur et d'authenticité</li>
                    <li>• Support client exceptionnel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">
                    🎯 Avantages exclusifs :
                  </h4>
                  <ul className="text-lg text-blue-800 space-y-2">
                    <li>• Formation continue des conseillers</li>
                    <li>• Programmes d'accompagnement inclus</li>
                    <li>• Communauté d'entraide active</li>
                    <li>• Contrôle qualité renforcé</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                🚀 Votre parcours vers le bien-être avec Xelliss :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <strong>Connexion avec votre conseiller expert :</strong>
                    Mise en relation avec un spécialiste Xelliss certifié, formé
                    aux dernières innovations en nutrition naturelle.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <strong>Bilan personnalisé gratuit :</strong>
                    Analyse complète de vos besoins, mode de vie et objectifs
                    santé pour une recommandation sur-mesure.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <strong>Programme nutritionnel adapté :</strong>
                    Sélection des produits Xelliss les mieux adaptés à vos
                    besoins avec un plan d'accompagnement personnalisé.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <strong>Livraison premium et suivi :</strong>
                    Réception rapide avec suivi régulier de vos résultats et
                    ajustements si nécessaire.
                  </div>
                </div>
              </div>
            </div>

            {/* Témoignages clients positifs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💬 Témoignages Clients : L'Excellence Xelliss Reconnue
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">Fazile</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic mb-3">
                    "Atteint de spondylarthrite, j’ai commencé il y a 5 mois
                    l’eau, la phycocyanine et le Gold de Xelliss. Aujourd’hui,
                    j’ai retrouvé mobilité et confort de vie — un vrai
                    changement au quotidien."
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    ✅ Produit : PhycoSci X14 et X gold
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">Denise</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic mb-3">
                    "J’avais une tendinite depuis 4 ans, le bras en écharpe
                    pendant des mois, et la kiné ne changeait rien. En 3
                    semaines avec l’eau, la phycocyanine et le Gold, j’ai
                    retrouvé une quasi-totalité de mes capacités — une vraie
                    libération."
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    ✅ Produit : X Gold, XelliWater et PhycoSci X14
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">Thierry</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic mb-3">
                    "Grâce à la phycocyanine prise chaque matin, nous avons
                    enchaîné randonnées, footing et windsurf avec une
                    récupération impressionnante et une énergie constante.
                    Sommeil profond, oxygénation optimale et régénération
                    cellulaire : la phyco a révélé tout son potentiel — un vrai
                    trésor pour notre vitalité."
                  </p>
                  <p className="text-sm text-purple-600 font-medium">
                    ✅ Produit : PhycoSci X14
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">Isabelle</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic mb-3">
                    "Grâce au jeûne intermittent, aux plantes et aux produits
                    Xelliss, j’ai retrouvé le sommeil, perdu 29 kg et vu mes
                    douleurs disparaître. Après 18 ans de polyarthrite, je revis
                    : je marche, fais du sport et n’ai plus besoin de
                    traitement."
                  </p>
                  <p className="text-sm text-orange-600 font-medium">
                    ✅ Gamme complète
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                📊 Résultats Client Xelliss
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    94%
                  </div>
                  <p className="text-gray-700">de clients satisfaits</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    87%
                  </div>
                  <p className="text-gray-700">
                    ressentent des effets dès 2 semaines
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    91%
                  </div>
                  <p className="text-gray-700">recommandent Xelliss</p>
                </div>
              </div>
            </div>

            {/* Pourquoi choisir Xelliss */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🏆 Pourquoi Xelliss Domine le Marché des Compléments Naturels
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <Card className="h-full border-2 border-green-200 hover:border-green-400 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700 flex items-center">
                      <Trophy className="mr-2 h-6 w-6" />
                      Innovation & Recherche
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>10+ années</strong> de R&D en nutrition
                          naturelle
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Laboratoires français</strong> certifiés ISO
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Brevets exclusifs</strong> sur les
                          formulations
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Partenariats scientifiques</strong>{" "}
                          universitaires
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="h-full border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700 flex items-center">
                      <Heart className="mr-2 h-6 w-6" />
                      Service & Accompagnement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conseillers experts</strong> formés en
                          permanence
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Suivi personnalisé</strong> inclus à vie
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Garantie satisfaction</strong> 30 jours
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Support client 7j/7</strong> réactif
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <Zap className="mr-2 h-6 w-6" />
                🌟 L'Écosystème Xelliss : Plus qu'une Marque, une Philosophie
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">
                    🎯 Vision holistique du bien-être :
                  </h4>
                  <ul className="text-lg text-yellow-700 space-y-2">
                    <li>• Approche globale corps-esprit</li>
                    <li>• Éducation nutritionnelle continue</li>
                    <li>• Communauté bienveillante active</li>
                    <li>• Outils de suivi personnalisés</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">
                    🌱 Engagement environnemental :
                  </h4>
                  <ul className="text-lg text-yellow-700 space-y-2">
                    <li>• Production éco-responsable</li>
                    <li>• Emballages biodégradables</li>
                    <li>• Circuit court privilégié</li>
                    <li>• Compensation carbone active</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparaison positive avec les autres marques */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🔝 Xelliss vs Concurrence : L'Excellence Qui Fait La Différence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-gold-400 hover:shadow-xl transition-shadow bg-gradient-to-b from-yellow-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    🥇 Xelliss Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-bold text-green-600 mb-4 text-xl">
                    L'Excellence Française
                  </h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>
                        <strong>Qualité :</strong> Exceptionnelle
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>
                        <strong>Innovation :</strong> Leader
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>
                        <strong>Service :</strong> Personnalisé
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>
                        <strong>Suivi :</strong> À vie
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>
                        <strong>Résultats :</strong> Prouvés
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-lg py-3"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/"
                      target="_blank"
                    >
                      Découvrir Xelliss
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow opacity-75">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    🥈 Marques Bio Classiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-bold text-gray-600 mb-4">
                    Qualité Standard
                  </h3>
                  <div className="space-y-3 text-lg text-gray-600">
                    <div>
                      💰 <strong>Prix :</strong> 15-30€/mois
                    </div>
                    <div>
                      📦 <strong>Qualité :</strong> Variable
                    </div>
                    <div>
                      🏪 <strong>Achat :</strong> En magasin
                    </div>
                    <div>
                      ❓ <strong>Suivi :</strong> Inexistant
                    </div>
                    <div>
                      📊 <strong>Innovation :</strong> Limitée
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="outline" disabled>
                    Qualité moyenne
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow opacity-75">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    🥉 Autres Marques Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-bold text-gray-600 mb-4">
                    Tentatives d'Imitation
                  </h3>
                  <div className="space-y-3 text-lg text-gray-600">
                    <div>
                      💰 <strong>Prix :</strong> 40-70€/mois
                    </div>
                    <div>
                      📦 <strong>Qualité :</strong> Correcte
                    </div>
                    <div>
                      🌐 <strong>Achat :</strong> En ligne
                    </div>
                    <div>
                      📞 <strong>Suivi :</strong> Basique
                    </div>
                    <div>
                      ⚡ <strong>Innovation :</strong> En retard
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="outline" disabled>
                    Pas à la hauteur
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ positive */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ❓ Tout Savoir sur l'Excellence Xelliss
            </h2>

            <div className="space-y-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">
                    🔄 Natura4Ever et Xelliss : Une évolution naturelle ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Absolument ! Xelliss représente l'évolution naturelle de
                    Natura4Ever, avec <strong>la même excellence</strong> mais
                    une approche encore plus innovante. Les équipes, la
                    recherche et la qualité des produits restent identiques,
                    avec en plus une vision moderne et des services améliorés.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">
                    💎 Pourquoi les prix Xelliss reflètent-ils la qualité
                    premium ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Les prix Xelliss reflètent{" "}
                    <strong>l'investissement considérable</strong> en recherche,
                    la qualité des matières premières françaises, les processus
                    de fabrication exclusifs et surtout{" "}
                    <strong>l'accompagnement personnalisé inclus</strong>.
                    Chaque euro investi vous garantit une qualité et un service
                    inégalés sur le marché.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-700">
                    🎯 La distribution exclusive : un avantage client ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Oui, c'est même <strong>l'un des plus grands atouts</strong>{" "}
                    de Xelliss ! Cette approche garantit que chaque client
                    bénéficie d'un accompagnement personnalisé, d'une expertise
                    pointue et d'un suivi adapté à ses besoins spécifiques.
                    C'est le luxe du sur-mesure en nutrition naturelle.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-700">
                    ⚡ PhycoSci X14 : révolutionnaire ou marketing ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    PhycoSci X14 est{" "}
                    <strong>véritablement révolutionnaire</strong> ! Sa
                    concentration exceptionnelle en phycocyanine liquide et son
                    processus d'extraction breveté en font un produit unique au
                    monde. Les milliers de témoignages clients et les études
                    internes confirment son efficacité remarquable.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-700">
                    🌟 Comment reconnaître un excellent conseiller Xelliss ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Un excellent conseiller Xelliss se reconnaît à{" "}
                    <strong>son expertise</strong>, sa formation continue, son
                    approche personnalisée et sa capacité à vous accompagner
                    dans la durée. Il vous proposera toujours une évaluation
                    complète avant toute recommandation et restera disponible
                    pour votre suivi.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">
                    🎁 Quels avantages exclusifs avec Xelliss ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Avec Xelliss, vous bénéficiez d'
                    <strong>avantages uniques</strong> : accompagnement
                    personnalisé à vie, programmes éducatifs exclusifs,
                    communauté bienveillante, garantie satisfaction, innovations
                    en avant-première et surtout des résultats mesurables sur
                    votre bien-être.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Conclusion positive */}
            <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-8 rounded-lg border-2 border-green-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                🎯 Pourquoi Choisir Xelliss : Le Verdict de nos Experts
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-green-900 mb-4 text-xl flex items-center">
                    <Trophy className="mr-2 h-6 w-6" />
                    🏆 Les Atouts Majeurs :
                  </h3>
                  <ul className="space-y-3 text-lg text-green-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Innovation française</strong> reconnue
                        mondialement
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Qualité premium</strong> certifiée et contrôlée
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Accompagnement expert</strong> personnalisé
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Résultats prouvés</strong> par milliers de
                        clients
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Gamme complète</strong> pour tous les besoins
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-blue-900 mb-4 text-xl flex items-center">
                    <Heart className="mr-2 h-6 w-6" />
                    💫 L'Expérience Unique :
                  </h3>
                  <ul className="space-y-3 text-lg text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Service sur-mesure</strong> adapté à vous
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Communauté bienveillante</strong> et motivante
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Formation continue</strong> incluse
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Support réactif</strong> 7j/7
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Garantie satisfaction</strong> totale
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-6">
                <h3 className="font-bold text-white mb-4 text-xl text-center">
                  🎯 Notre Recommandation d'Experts :
                </h3>
                <p className="text-lg mb-4 text-center">
                  <strong>Xelliss représente aujourd'hui le summum</strong> de
                  l'innovation française en compléments alimentaires naturels.
                  La marque a su allier tradition et modernité pour offrir une
                  expérience client exceptionnelle.
                </p>
                <p className="text-lg mb-4 text-center">
                  <strong>Pour qui ?</strong> Toute personne souhaitant investir
                  dans sa santé avec des produits d'exception et un
                  accompagnement personnalisé de qualité.
                </p>
                <p className="text-lg text-center">
                  <strong>Le plus de Xelliss :</strong> L'alliance parfaite
                  entre innovation scientifique, qualité française et service
                  client d'excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/"
                    target="_blank"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Découvrir l'Excellence Xelliss
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/blog/phycocyanine">
                    📖 Guide Expert Phycocyanine
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sources */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sources et références
              </h2>
              <div className="text-lg text-gray-600 space-y-2">
                <p>
                  1. <strong>Site officiel Xelliss</strong> - Documentation
                  produits et innovations (consulté janvier 2025)
                </p>
                <p>
                  2. <strong>Témoignages clients vérifiés</strong>
                </p>
                <p>
                  3. <strong>Études scientifiques</strong> - Recherches
                  françaises sur la phycocyanine et spiruline
                </p>
                <p>
                  4. <strong>Analyses laboratoire</strong> - Certifications
                  qualité et contrôles Xelliss
                </p>
                <p>
                  5. <strong>Rapports d'innovation</strong> - Brevets et
                  développements R&D Xelliss
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
