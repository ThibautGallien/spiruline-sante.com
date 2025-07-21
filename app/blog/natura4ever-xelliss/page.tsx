import { generateSEOMetadata } from "@/lib/seo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  AlertTriangle,
  ShoppingCart,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            Natura4Ever vs Xelliss : Comparaison Complète et Honnête
          </h1>

          <div className="flex items-center space-x-4 mb-8 text-sm text-gray-600">
            <span>📅 Mise à jour : Janvier 2025</span>
            <span>⏱️ Lecture : 6 min</span>
            <span>👤 Par l'équipe Spirulina Health</span>
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
                  <strong>Changement de nom :</strong> Pourquoi Natura4Ever →
                  Xelliss
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Produits phares :</strong> PhycoSci X14, X Gold, A3
                  Spirulina
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Prix et qualité :</strong> Analyse objective des
                  tarifs
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Comment acheter :</strong> Où trouver les produits
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Avis clients :</strong> Témoignages et retours
                  d'expérience
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Alternatives :</strong> Comparaison avec la
                  concurrence
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
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                ⚠️ Information importante
              </h2>
              <p className="text-lg text-yellow-800 mb-4">
                <strong>Natura4Ever n'existe plus.</strong> La marque a été
                rebaptisée <strong>Xelliss</strong> en 2023. Tous les produits
                sont désormais vendus sous la marque Xelliss avec les mêmes
                formulations.
              </p>
              <p className="text-lg text-yellow-800">
                Si vous recherchez des produits Natura4Ever, vous les trouverez
                maintenant chez Xelliss.
              </p>
            </div>

            {/* Changement de marque */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              De Natura4Ever à Xelliss : Pourquoi ce changement ?
            </h2>

            <p className="text-gray-700 mb-6">
              Natura4Ever était une marque française spécialisée dans les
              compléments alimentaires naturels, particulièrement reconnue pour
              ses produits à base de spiruline et phycocyanine. En 2023,
              l'entreprise a opéré un rebranding complet pour devenir{" "}
              <strong>Xelliss</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">
                    ❌ Natura4Ever (Ancien)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-lg text-gray-600 space-y-2">
                    <li>• Marque créée en France</li>
                    <li>• Spécialisée spiruline/phycocyanine</li>
                    <li>• Distribution par conseillers</li>
                    <li>
                      • <strong>N'existe plus depuis 2023</strong>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">
                    ✅ Xelliss (Nouveau)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-lg text-gray-600 space-y-2">
                    <li>• Nouveau nom depuis 2023</li>
                    <li>• Mêmes produits et formules</li>
                    <li>• Même système de distribution</li>
                    <li>
                      • <strong>Marque officielle actuelle</strong>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Produits phares */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Les Produits Phares de Xelliss (ex-Natura4Ever)
            </h2>

            {/* PhycoSci X14 */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🔵 PhycoSci X14 : Le Concentré de Phycocyanine
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Image
                  src="/images/phycosci-x14.jpg"
                  alt="PhycoSci X14 Xelliss - Concentré de phycocyanine"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    ✅ Les plus :
                  </h4>
                  <ul className="text-lg text-blue-800 space-y-1">
                    <li>• Haute concentration en phycocyanine</li>
                    <li>• Forme liquide = absorption rapide</li>
                    <li>• Propriétés antioxydantes puissantes</li>
                    <li>• Soutient le système immunitaire</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">
                    ❌ Les moins :
                  </h4>
                  <ul className="text-lg text-red-800 space-y-1">
                    <li>• Prix élevé (environ 80€/mois)</li>
                    <li>• Goût parfois difficile</li>
                    <li>• Conservation au frais nécessaire</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* X Gold */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🟡 X Gold : Curcuma et Pipérine pour la Digestion
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Image
                  src="/images/x-gold-xelliss.jpg"
                  alt="X Gold Xelliss - Curcuma et pipérine"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Composition :
                  </h4>
                  <ul className="text-lg text-green-800 space-y-1">
                    <li>
                      • <strong>Curcuma :</strong> Anti-inflammatoire naturel
                    </li>
                    <li>
                      • <strong>Pipérine :</strong> Améliore l'absorption
                    </li>
                    <li>
                      • <strong>Synergie :</strong> Efficacité maximisée
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">
                    💰 Prix :
                  </h4>
                  <p className="text-lg text-orange-800">
                    Environ <strong>45€/mois</strong> - Plus abordable que
                    PhycoSci X14
                  </p>
                </div>
              </div>
            </div>

            {/* A3 Spirulina */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🟢 A3 Spirulina : La Spiruline de Qualité Premium
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Image
                  src="/images/a3-spirulina-xelliss.jpg"
                  alt="A3 Spirulina Xelliss - Comprimés de spiruline premium"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Caractéristiques :
                  </h4>
                  <ul className="text-lg text-green-800 space-y-1">
                    <li>• Spiruline pure à 100%</li>
                    <li>• Riche en protéines (65%)</li>
                    <li>• Vitamines et minéraux essentiels</li>
                    <li>• Forme comprimés pratique</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    👥 Pour qui ?
                  </h4>
                  <ul className="text-lg text-blue-800 space-y-1">
                    <li>• Sportifs et personnes actives</li>
                    <li>• Fatigue et manque d'énergie</li>
                    <li>• Alimentation déséquilibrée</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparaison prix */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💰 Comparaison des Prix Xelliss
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      Produit
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-semibold">
                      Prix/mois
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-semibold">
                      Rapport qualité/prix
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-semibold">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      <strong>PhycoSci X14</strong>
                      <br />
                      <small className="text-gray-600">
                        Phycocyanine liquide
                      </small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-lg font-semibold">
                      ~80€
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="text-orange-600">Moyen</span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(3)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gray-300" />
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">
                      <strong>X Gold</strong>
                      <br />
                      <small className="text-gray-600">
                        Curcuma + Pipérine
                      </small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-lg font-semibold">
                      ~45€
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="text-green-600">Correct</span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      <strong>A3 Spirulina</strong>
                      <br />
                      <small className="text-gray-600">Spiruline premium</small>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-lg font-semibold">
                      ~35€
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="text-green-600">Bon</span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Comment acheter */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🛒 Comment Acheter les Produits Xelliss ?
            </h2>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-600 mt-1" />
                <h3 className="text-xl font-semibold text-orange-900">
                  ⚠️ Attention : Distribution Exclusive
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-3">
                    ❌ Pas disponible :
                  </h4>
                  <ul className="text-lg text-orange-800 space-y-2">
                    <li>• Pharmacies</li>
                    <li>• Grandes surfaces</li>
                    <li>• Sites e-commerce classiques</li>
                    <li>• Magasins bio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-3">
                    ✅ Uniquement via :
                  </h4>
                  <ul className="text-lg text-orange-800 space-y-2">
                    <li>• Conseillers Xelliss agréés</li>
                    <li>• Boutique en ligne Xelliss</li>
                    <li>• Réseau de distribution MLM</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                🔍 Étapes pour acheter :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <strong>Trouver un conseiller Xelliss :</strong> Contact via
                    leur site officiel ou réseau
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <strong>Consultation gratuite :</strong> Le conseiller
                    évalue vos besoins
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <strong>Commande personnalisée :</strong> Choix des produits
                    adaptés
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <strong>Livraison :</strong> Réception sous 3-5 jours ouvrés
                  </div>
                </div>
              </div>
            </div>

            {/* Avis clients */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💬 Avis Clients sur Xelliss (ex-Natura4Ever)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold">Sophie, 42 ans</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 italic">
                    "PhycoSci X14 m'a vraiment aidée à retrouver de l'énergie
                    après une période difficile. Le prix est élevé mais
                    l'efficacité est au rendez-vous."
                  </p>
                  <p className="text-sm text-green-600 font-medium mt-2">
                    ✅ Produit : PhycoSci X14
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(2)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                    <span className="font-semibold">Marc, 35 ans</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 italic">
                    "Déçu par le rapport qualité/prix. Pour le même budget, on
                    trouve mieux ailleurs. Le système MLM me dérange aussi."
                  </p>
                  <p className="text-sm text-red-600 font-medium mt-2">
                    ❌ Produit : Ensemble de produits
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">
                📚 Guide Gratuit : Bien Choisir sa Spiruline
              </h2>
              <p className="text-center mb-6">
                Recevez notre comparatif complet des marques de spiruline et nos
                conseils d'experts
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm variant="dark" size="lg" />
              </div>
            </div>

            {/* Alternatives */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🔄 Alternatives à Xelliss : Notre Comparaison
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    🥇 Alternative Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-bold text-green-600 mb-2">
                    A3 Spirulina Zinzino
                  </h3>
                  <div className="space-y-2 text-lg">
                    <div>
                      💰 <strong>Prix :</strong> 39€/mois
                    </div>
                    <div>
                      📦 <strong>Contenu :</strong> 80 comprimés
                    </div>
                    <div>
                      🌟 <strong>Qualité :</strong> Excellente
                    </div>
                    <div>
                      🛒 <strong>Achat :</strong> En ligne facile
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                      target="_blank"
                    >
                      Découvrir
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    💡 Alternative Économique
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-bold text-blue-600 mb-2">
                    Spiruline Bio Classique
                  </h3>
                  <div className="space-y-2 text-lg">
                    <div>
                      💰 <strong>Prix :</strong> 15-25€/mois
                    </div>
                    <div>
                      📦 <strong>Contenu :</strong> Variables
                    </div>
                    <div>
                      🌟 <strong>Qualité :</strong> Correcte
                    </div>
                    <div>
                      🛒 <strong>Achat :</strong> Pharmacie/Bio
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Comparer les prix
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-400">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    ⭐ Notre Recommandation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-bold text-purple-600 mb-2">
                    PhycoSci X14 Alternatif
                  </h3>
                  <div className="space-y-2 text-lg">
                    <div>
                      💰 <strong>Prix :</strong> 45€/mois
                    </div>
                    <div>
                      📦 <strong>Contenu :</strong> Phycocyanine liquide
                    </div>
                    <div>
                      🌟 <strong>Qualité :</strong> Équivalente
                    </div>
                    <div>
                      🛒 <strong>Achat :</strong> Sans MLM
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
                    asChild
                  >
                    <Link href="/blog/phycocyanine">En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ❓ Questions fréquentes sur Natura4Ever/Xelliss
            </h2>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🔄 Natura4Ever et Xelliss, c'est la même chose ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Oui, exactement. Natura4Ever a été rebaptisé Xelliss en
                    2023. Les produits, les formules et l'équipe sont
                    identiques. Si vous cherchez des produits Natura4Ever, vous
                    les trouverez maintenant sous la marque Xelliss.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    💰 Les prix Xelliss sont-ils justifiés ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Les prix sont élevés comparés à la concurrence. PhycoSci X14
                    à 80€/mois reste cher pour de la phycocyanine. A3 Spirulina
                    à 35€/mois est plus raisonnable. Le système MLM explique en
                    partie ces tarifs élevés.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🏪 Pourquoi ne trouve-t-on pas Xelliss en pharmacie ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Xelliss a choisi un modèle de distribution exclusive via des
                    conseillers (système MLM). Cela leur permet de contrôler les
                    prix et la marge, mais limite l'accessibilité pour les
                    consommateurs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ⚡ PhycoSci X14 est-il vraiment efficace ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    La phycocyanine a des propriétés antioxydantes reconnues
                    scientifiquement. Cependant, PhycoSci X14 n'est pas le seul
                    produit sur le marché. D'autres marques proposent de la
                    phycocyanine de qualité similaire à prix plus abordable.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🔍 Comment vérifier la qualité d'un conseiller Xelliss ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Vérifiez qu'il soit officiellement agréé par Xelliss. Un bon
                    conseiller vous proposera une consultation personnalisée, ne
                    vous poussera pas à l'achat et respectera votre budget.
                    Méfiez-vous des promesses miraculeuses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ⭐ Existe-t-il des alternatives moins chères ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Oui, de nombreuses alternatives existent. Pour la spiruline
                    : marques bio en pharmacie. Pour la phycocyanine : autres
                    laboratoires français. La qualité peut être équivalente pour
                    30-50% moins cher.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Conclusion */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎯 Notre Verdict sur Xelliss (ex-Natura4Ever)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-green-900 mb-3">
                    ✅ Points positifs :
                  </h3>
                  <ul className="space-y-2 text-lg text-green-800">
                    <li>• Produits de qualité correcte</li>
                    <li>• Formulations bien étudiées</li>
                    <li>• Suivi personnalisé par conseiller</li>
                    <li>• Marque française établie</li>
                    <li>• Bonne réputation sur certains produits</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-900 mb-3">
                    ❌ Points négatifs :
                  </h3>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>• Prix très élevés</li>
                    <li>• Système MLM contraignant</li>
                    <li>• Pas d'achat direct en magasin</li>
                    <li>• Rapport qualité/prix discutable</li>
                    <li>• Alternatives moins chères existent</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  🎯 Notre recommandation :
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Xelliss convient si</strong> vous voulez un suivi
                  personnalisé et que le budget n'est pas un frein. Les produits
                  sont corrects mais pas exceptionnels au regard des prix
                  pratiqués.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Nous recommandons plutôt</strong> de comparer avec
                  d'autres marques avant de vous décider. Pour la spiruline, des
                  alternatives bio en pharmacie offrent un excellent rapport
                  qualité/prix.
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Pour la phycocyanine,</strong> d'autres laboratoires
                  français proposent des produits équivalents à 30-40% moins
                  cher, sans passer par un système MLM.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Voir les alternatives recommandées
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/blog/phycocyanine">
                    📖 Guide phycocyanine complet
                  </Link>
                </Button>
              </div>
            </div>

            {/* Articles connexes */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Articles connexes qui pourraient vous intéresser
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/avis-xelliss-arnaque-ou-opportunite"
                        className="hover:text-blue-700"
                      >
                        🔍 Avis Xelliss : Arnaque ou Opportunité ?
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Analyse objective de la marque Xelliss : produits,
                      business model et avis clients.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/phycosci-x14-xelliss"
                        className="hover:text-blue-700"
                      >
                        💙 PhycoSci X14 : Test et Avis Complet
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Notre test détaillé de PhycoSci X14 : composition,
                      efficacité et alternatives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/bienfaits-spiruline-peau-guide-complet"
                        className="hover:text-blue-700"
                      >
                        🌟 Spiruline pour la Peau : Guide Complet
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Comment la spiruline peut transformer votre peau :
                      conseils et produits recommandés.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/spiruline/spiruline-posologie"
                        className="hover:text-blue-700"
                      >
                        💊 Posologie Spiruline : Guide Expert
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Dosages optimaux et conseils d'utilisation pour maximiser
                      les bienfaits.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sources */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sources et références
              </h2>
              <div className="text-lg text-gray-600 space-y-2">
                <p>
                  1. <strong>Site officiel Xelliss</strong> - Informations
                  produits et tarifs (consulté janvier 2025)
                </p>
                <p>
                  2. <strong>Avis clients vérifiés</strong> - Compilation de
                  témoignages utilisateurs Natura4Ever/Xelliss
                </p>
                <p>
                  3. <strong>Études scientifiques</strong> - Recherches sur la
                  phycocyanine et ses propriétés antioxydantes
                </p>
                <p>
                  4. <strong>Comparatifs marché</strong> - Analyse des prix et
                  qualité des compléments alimentaires français
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
