import { generateSEOMetadata } from "@/lib/seo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertTriangle,
  ShoppingCart,
  Star,
  ArrowRight,
  ExternalLink,
  Zap,
  Shield,
  Heart,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Boutique Natura4Ever → Xelliss → Zinzino : Guide Complet 2025",
    description:
      "Découvrez l'évolution Natura4Ever → Xelliss → Zinzino. Où acheter les produits ? Prix, avis et guide d'achat des meilleures alternatives aux anciennes formules.",
    keywords: [
      "natura4ever boutique",
      "xelliss produits",
      "zinzino achat",
      "spiruline natura4ever",
      "phycocyanine xelliss",
      "boutique zinzino",
      "ancien natura4ever",
      "produits xelliss",
      "conseiller zinzino",
      "mlm natura4ever",
    ],
    canonicalUrl: "blog/boutique-natura4ever-xelliss-zinzino",
  });
}

export default function BoutiqueNatura4EverPage() {
  const evolutionTimeline = [
    {
      year: "2014-2020",
      brand: "Natura4Ever",
      status: "Fondation & Croissance",
      color: "bg-blue-500",
      description: "Marque pionnière de la spiruline premium en France",
      products: ["Spiruline Premium", "NaturaBlue", "Gamme Nutrition"],
    },
    {
      year: "2020-2023",
      brand: "Xelliss",
      status: "Rebranding & Innovation",
      color: "bg-purple-500",
      description: "Nouveau nom, mêmes produits, innovation continue",
      products: ["PhycoSci X14", "X-Gold", "A3 Spirulina"],
    },
    {
      year: "2023+",
      brand: "Zinzino",
      status: "Fusion & Expansion",
      color: "bg-green-500",
      description: "Intégration dans l'écosystème Zinzino international",
      products: ["BalanceOil+", "ZinoBiotic+", "Gamme Xelliss"],
    },
  ];

  const productComparison = [
    {
      oldProduct: "Natura4Ever Spiruline",
      newProduct: "A3 Spirulina Xelliss",
      status: "Amélioré",
      price: "26€/mois",
      benefits: [
        "70% protéines vs 65% avant",
        "Pureté accrue",
        "Même efficacité",
      ],
      available: true,
    },
    {
      oldProduct: "NaturaBlue (phycocyanine)",
      newProduct: "PhycoSci X14",
      status: "Reformulé",
      price: "44€/mois",
      benefits: [
        "Même Concentration",
        "Forme liquide",
        "Biodisponibilité optimisée",
      ],
      available: true,
    },
    {
      oldProduct: "Oméga-3",
      newProduct: "BalanceOil+ Zinzino",
      status: "Nouveau",
      price: "42€/mois",
      benefits: [
        "Test sanguin inclus",
        "Ratio oméga parfait",
        "Vitamine D ajoutée",
      ],
      available: true,
    },
  ];

  const faqData = [
    {
      question: "Natura4Ever existe-t-elle encore ?",
      answer:
        "Non, Natura4Ever a évolué : rebaptisée Xelliss en 2020, puis fusionnée avec Zinzino en 2023. Les produits sont identiques mais vendus sous la marque Zinzino avec l'héritage Xelliss.",
    },
    {
      question: "Où acheter les anciens produits Natura4Ever ?",
      answer:
        "Tous les anciens produits Natura4Ever sont maintenant disponibles via Zinzino, souvent améliorés. Contactez un conseiller Zinzino ou commandez directement en ligne.",
    },
    {
      question: "Les prix ont-ils changé avec Zinzino ?",
      answer:
        "Les prix sont globalement similaires. Certains produits sont même plus avantageux grâce aux offres groupées Zinzino et au programme de fidélité Premium.",
    },
    {
      question: "La qualité est-elle toujours la même ?",
      answer:
        "La qualité a été maintenue voire améliorée. Zinzino applique des standards de production encore plus stricts et propose des tests de suivi personnalisés.",
    },
    {
      question: "Comment passer commande maintenant ?",
      answer:
        "Via un conseiller Zinzino agréé ou directement sur la boutique Zinzino en ligne. Le processus est simplifié avec paiement sécurisé et livraison rapide.",
    },
  ];

  const alternatives = [
    {
      category: "Spiruline Premium",
      original: "Natura4Ever Spiruline",
      recommended: "A3 Spirulina Xelliss (Zinzino)",
      price: "26€",
      quality: "★★★★★",
      availability: "En stock",
      link: "https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/",
    },
    {
      category: "Phycocyanine Liquide",
      original: "NaturaBlue",
      recommended: "PhycoSci X14 (Zinzino)",
      price: "44€",
      quality: "★★★★★",
      availability: "Sur commande",
      link: "https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/",
    },
    {
      category: "Oméga-3 Premium",
      original: "Natura4Ever Omega",
      recommended: "BalanceOil+ (Zinzino)",
      price: "42€",
      quality: "★★★★★",
      availability: "En stock",
      link: "https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/",
    },
  ];

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
            <span className="text-gray-900">
              Boutique Natura4Ever Xelliss Zinzino
            </span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Boutique Natura4Ever → Xelliss → Zinzino :
            <span className="text-blue-600"> Où Acheter en 2025 ?</span>
          </h1>

          <div className="flex items-center space-x-4 mb-8 text-sm text-gray-600">
            <span>📅 Mis à jour : Janvier 2025</span>
            <span>⏱️ Lecture : 8 min</span>
            <span>👤 Par l'équipe Spirulina Health</span>
          </div>

          {/* Résumé en bullet points */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
              <h2 className="text-xl font-bold text-orange-900">
                ⚠️ Information Importante 2025
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-orange-800">
                  <strong>Natura4Ever n'existe plus</strong> → Devenu Xelliss
                  puis Zinzino
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-orange-800">
                  <strong>Mêmes produits,</strong> même qualité
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-orange-800">
                  <strong>Commande simplifiée</strong> via Zinzino en ligne
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-orange-800">
                  <strong>Nouveaux produits</strong> : BalanceOil+, tests
                  personnalisés
                </span>
              </div>
            </div>
          </div>

          {/* CTA immédiat */}
          <div className="text-center mb-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 mr-4"
              asChild
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                target="_blank"
              >
                🛒 Accéder à la Boutique Zinzino
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none [&_p]:text-lg [&_p]:text-gray-700 [&_ul]:text-lg [&_li]:text-gray-700 [&_li]:mb-1">
            {/* Timeline d'évolution */}
            <section className="mb-12" id="evolution">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                L'Évolution Natura4Ever → Xelliss → Zinzino
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                {evolutionTimeline.map((phase, index) => (
                  <div
                    key={index}
                    className="relative flex items-start mb-8 pl-12"
                  >
                    <div
                      className={`absolute left-0 w-8 h-8 ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {index + 1}
                    </div>
                    <Card className="flex-1">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">
                            {phase.brand}
                          </CardTitle>
                          <Badge variant="outline">{phase.year}</Badge>
                        </div>
                        <p className="text-gray-600">{phase.status}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">
                          {phase.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {phase.products.map((product, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs"
                            >
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparaison produits */}
            <section className="mb-12" id="produits">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Correspondance des Produits : Ancien vs Nouveau
              </h2>

              <div className="space-y-6">
                {productComparison.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 bg-red-50">
                          <h3 className="font-semibold text-red-900 mb-2">
                            ❌ Ancien : {item.oldProduct}
                          </h3>
                          <p className="text-red-700">Produit discontinué</p>
                        </div>
                        <div className="p-6 bg-green-50">
                          <h3 className="font-semibold text-green-900 mb-2">
                            ✅ Nouveau : {item.newProduct}
                          </h3>
                          <div className="space-y-2">
                            <p className="text-green-700 font-medium">
                              💰 {item.price} | Status: {item.status}
                            </p>
                            <ul className="text-sm text-green-700">
                              {item.benefits.map((benefit, i) => (
                                <li key={i}>• {benefit}</li>
                              ))}
                            </ul>
                            {item.available && (
                              <Badge className="bg-green-600">Disponible</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Pourquoi ce changement */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi Ces Changements ? Les 3 Raisons Principales
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">
                      Expansion Internationale
                    </h3>
                    <p className="text-gray-600">
                      Zinzino présent dans 17 pays permet une distribution
                      mondiale des produits Xelliss
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Qualité Renforcée</h3>
                    <p className="text-gray-600">
                      Standards de production plus stricts et contrôles qualité
                      multiniveaux
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Innovation Continue</h3>
                    <p className="text-gray-600">
                      Nouveaux produits, tests personnalisés et technologies de
                      pointe
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Comment acheter maintenant */}
            <section className="mb-12" id="achat">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🛒 Comment Acheter les Anciens Produits Natura4Ever Aujourd'hui
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  3 Façons de Commander en 2025 :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <ShoppingCart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Boutique en Ligne</h4>
                      <p className="text-sm text-gray-600">
                        Commande directe sur Zinzino.com
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Conseiller Agréé</h4>
                      <p className="text-sm text-gray-600">
                        Accompagnement personnalisé
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Programme Premium</h4>
                      <p className="text-sm text-gray-600">
                        Prix réduits et avantages exclusifs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  📋 Processus de Commande Étape par Étape :
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <strong>Accès à la boutique :</strong> Cliquez sur le lien
                      Zinzino ci-dessous
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <strong>Sélection produits :</strong> Choisissez dans la
                      gamme Xelliss ou Zinzino
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <strong>Paiement sécurisé :</strong> CB, PayPal, virement
                      acceptés
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <strong>Livraison rapide :</strong> 3-5 jours ouvrés en
                      France
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Alternatives recommandées */}
            <section className="mb-12" id="alternatives">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🏆 Alternatives Recommandées aux Anciens Produits
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-4 text-left font-semibold">
                        Catégorie
                      </th>
                      <th className="border border-gray-200 p-4 text-left font-semibold">
                        Ancien Produit
                      </th>
                      <th className="border border-gray-200 p-4 text-left font-semibold">
                        Nouveau Recommandé
                      </th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">
                        Prix/mois
                      </th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">
                        Qualité
                      </th>
                      <th className="border border-gray-200 p-4 text-center font-semibold">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {alternatives.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="border border-gray-200 p-4 font-medium">
                          {item.category}
                        </td>
                        <td className="border border-gray-200 p-4 text-red-600 line-through">
                          {item.original}
                        </td>
                        <td className="border border-gray-200 p-4">
                          <strong className="text-green-600">
                            {item.recommended}
                          </strong>
                          <br />
                          <Badge variant="secondary" className="text-xs mt-1">
                            {item.availability}
                          </Badge>
                        </td>
                        <td className="border border-gray-200 p-4 text-center font-bold text-green-600">
                          {item.price}
                        </td>
                        <td className="border border-gray-200 p-4 text-center">
                          {item.quality}
                        </td>
                        <td className="border border-gray-200 p-4 text-center">
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                            asChild
                          >
                            <Link href={item.link} target="_blank">
                              Acheter
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Newsletter */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                📧 Restez Informé des Nouveautés Zinzino-Xelliss
              </h2>
              <p className="text-green-100 text-lg mb-6">
                Recevez en exclusivité les dernières offres, tests gratuits et
                conseils personnalisés
              </p>
              <div className="max-w-md mx-auto mb-4">
                <NewsletterForm variant="dark" size="lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>Codes promo exclusifs -20%</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>Tests sanguins gratuits</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>Conseils nutrition personnalisés</span>
                </div>
              </div>
            </div>

            {/* Avantages Zinzino vs Anciens */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🔥 Pourquoi Zinzino Surpasse l'Ancienne Natura4Ever
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-red-500">
                  <CardHeader>
                    <CardTitle className="text-red-700">
                      ❌ Natura4Ever (2014-2020)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Distribution limitée France</li>
                      <li>• Gamme de base spiruline/phycocyanine</li>
                      <li>• Aucun test de suivi</li>
                      <li>• Support client basique</li>
                      <li>• Pas de programme fidélité</li>
                      <li>• Innovation lente</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500">
                  <CardHeader>
                    <CardTitle className="text-green-700">
                      ✅ Zinzino-Xelliss (2023+)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Présence internationale</strong> (17 pays)
                      </li>
                      <li>
                        • <strong>Gamme élargie</strong> : oméga-3,
                        probiotiques, polyphénols
                      </li>
                      <li>
                        • <strong>Tests sanguins</strong> avant/après gratuits
                      </li>
                      <li>
                        • <strong>Support 24/7</strong> multilingue
                      </li>
                      <li>
                        • <strong>Programme Premium</strong> -20% sur tout
                      </li>
                      <li>
                        • <strong>R&D permanente</strong> et nouvelles formules
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Les 5 Piliers - Version modernisée */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Les 5 Piliers de la Santé Cellulaire : Vision Zinzino 2025
              </h2>
              <p className="text-gray-700 mb-6">
                La philosophie originale de Natura4Ever, désormais enrichie par
                l'expertise scientifique de Zinzino :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {[
                  { name: "Nutrition", icon: "🥗", product: "A3 Spirulina" },
                  { name: "Hydratation", icon: "💧", product: "ZinoBiotic+" },
                  { name: "Oxygénation", icon: "🫁", product: "BalanceOil+" },
                  {
                    name: "Détoxification",
                    icon: "🧹",
                    product: "PhycoSci X14",
                  },
                  { name: "Régénération", icon: "🔄", product: "Xtend+" },
                ].map((pillar, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{pillar.icon}</div>
                      <h3 className="font-semibold mb-1">{pillar.name}</h3>
                      <p className="text-xs text-gray-600">{pillar.product}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  🔬 Approche Scientifique Zinzino :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Avant (Natura4Ever) :
                    </h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Approche empirique</li>
                      <li>• Conseils généralisés</li>
                      <li>• Pas de mesure objective</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">
                      Maintenant (Zinzino) :
                    </h4>
                    <ul className="text-green-800 space-y-1">
                      <li>
                        • <strong>Tests sanguins</strong> avant/après
                      </li>
                      <li>
                        • <strong>Protocoles personnalisés</strong>
                      </li>
                      <li>
                        • <strong>Suivi scientifique</strong> des résultats
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Témoignages de transition */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                💬 Témoignages : Anciens Clients Natura4Ever Devenus Clients
                Zinzino
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-green-500">
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
                      <span className="font-semibold">Thierry</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic mb-3">
                      "Grâce à la phycocyanine prise chaque matin, nous avons
                      enchaîné randonnées, footing et windsurf avec une
                      récupération impressionnante et une énergie constante.
                      Sommeil profond, oxygénation optimale et régénération
                      cellulaire : la phyco a révélé tout son potentiel — un
                      vrai trésor pour notre vitalité."
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      PhycoSciX14
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
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
                      <span className="font-semibold">Anne-Cécile</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic mb-3">
                      "Grâce à BalanceOil et à un rééquilibrage en oméga-3,
                      notre fils atteint de TDAH est devenu plus calme,
                      concentré et apaisé. En quelques mois, les effets ont été
                      si positifs que nous avons pu arrêter les médicaments,
                      avec l'accord des médecins."
                    </p>
                    <Badge className="bg-blue-100 text-blue-800">
                      BalanceOil+
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Optimisée */}
            <section className="mb-12" id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                ❓ FAQ : Tout Savoir sur la Transition Natura4Ever → Zinzino
              </h2>

              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Guide d'achat express */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ⚡ Guide d'Achat Express : Remplacer Vos Anciens Produits en 5
                Minutes
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold">Étape 1 (1 min)</h3>
                      <p className="text-sm">Identifiez votre ancien produit</p>
                    </div>
                    <ul className="text-sm text-left">
                      <li>• Spiruline Natura4Ever → A3 Spirulina</li>
                      <li>• NaturaBlue → PhycoSci X14</li>
                      <li>• Oméga-3 → BalanceOil+</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <ShoppingCart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold">Étape 2 (2 min)</h3>
                      <p className="text-sm">Commandez sur Zinzino.com</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      asChild
                    >
                      <Link
                        href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                        target="_blank"
                      >
                        Accéder à la Boutique
                      </Link>
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-semibold">Étape 3 (2 min)</h3>
                      <p className="text-sm">
                        Finalisez et recevez sous 5 jours
                      </p>
                    </div>
                    <div className="text-xs text-gray-600">
                      Des frais de livraison s'appliquent.
                      <br />
                      Paiement 100% sécurisé
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Final avec urgence */}
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white p-8 rounded-2xl text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                🎯 Ne Restez Plus Sans Vos Produits Favoris !
              </h2>
              <p className="text-lg mb-6 !text-green-700">
                Accédez dès maintenant aux nouveaux produits Zinzino-Xelliss,
                améliorés et disponibles immédiatement
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🚚</div>
                  <div className="font-semibold">Livraison Express</div>
                  <div className="text-sm text-gray-300">3-5 jours ouvrés</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold">Prix Garantis</div>
                  <div className="text-sm text-gray-300">
                    Identiques ou meilleurs
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🔬</div>
                  <div className="font-semibold">Tests Inclus</div>
                  <div className="text-sm text-gray-300">
                    Suivi scientifique
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-products/302780/"
                    target="_blank"
                  >
                    🛒 Commander A3 Spirulina (26€)
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/"
                    target="_blank"
                  >
                    🌊 Découvrir BalanceOil+ (42€)
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Conclusion optimisée */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🎯 Conclusion : L'Évolution Réussie de Natura4Ever vers Zinzino
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-900 mb-3">
                      ✅ Ce que vous gagnez :
                    </h3>
                    <ul className="space-y-2 text-green-800">
                      <li>
                        • <strong>Produits identiques ou améliorés</strong>
                      </li>
                      <li>
                        • <strong>Qualité garantie et contrôlée</strong>
                      </li>
                      <li>
                        • <strong>Tests scientifiques personnalisés</strong>
                      </li>
                      <li>
                        • <strong>Support client international 24/7</strong>
                      </li>
                      <li>
                        • <strong>Programme fidélité avantageux</strong>
                      </li>
                      <li>
                        • <strong>Nouvelles formules exclusives</strong>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">
                      📈 L'évolution en chiffres :
                    </h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>
                        • <strong>17 pays</strong> vs 1 seul avant
                      </li>
                      <li>
                        • <strong>50+ produits</strong> vs 10 anciennement
                      </li>
                      <li>
                        • <strong>98% satisfaction</strong> client maintenue
                      </li>
                      <li>
                        • <strong>Tests gratuits</strong> pour tous
                      </li>
                      <li>
                        • <strong>Livraison rapide</strong> partout en Europe
                      </li>
                      <li>
                        • <strong>R&D continue</strong> avec nouveautés
                        régulières
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🎯 Notre recommandation finale :
                  </h3>
                  <p className="text-gray-700">
                    Si vous étiez client Natura4Ever,{" "}
                    <strong>Zinzino est votre meilleur choix</strong> pour
                    continuer votre parcours santé. Non seulement vous retrouvez
                    vos produits favoris, mais vous bénéficiez d'une approche
                    scientifique moderne avec des tests personnalisés et un
                    suivi professionnel.
                  </p>
                </div>
              </div>
            </section>

            {/* Articles connexes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Articles connexes qui pourraient vous intéresser
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/natura4ever-xelliss"
                        className="hover:text-blue-700"
                      >
                        🔄 Natura4Ever vs Xelliss : Comparaison Détaillée
                      </Link>
                    </h3>
                    <p className="text-gray-600">
                      Analyse approfondie des changements entre Natura4Ever et
                      Xelliss : produits, prix et qualité.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/avis-zinzino-arnaque-ou-produits-de-qualite"
                        className="hover:text-blue-700"
                      >
                        🔍 Avis Zinzino : Arnaque ou Produits de Qualité ?
                      </Link>
                    </h3>
                    <p className="text-gray-600">
                      Notre analyse objective des produits Zinzino : qualité,
                      prix, avis clients et recommandations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/balance-oil-zinzino-avis"
                        className="hover:text-blue-700"
                      >
                        🌊 BalanceOil Zinzino : Test et Avis Complet
                      </Link>
                    </h3>
                    <p className="text-gray-600">
                      Test approfondi du produit phare de Zinzino : composition,
                      bienfaits et retours d'expérience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/avis-phycosci-x14-xelliss"
                        className="hover:text-blue-700"
                      >
                        💙 PhycoSci X14 : Alternative au NaturaBlue
                      </Link>
                    </h3>
                    <p className="text-gray-600">
                      Découvrez le remplaçant du célèbre NaturaBlue : PhycoSci
                      X14, ses avantages et son utilisation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Sources */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sources et références
              </h3>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      📄 Documentation officielle :
                    </h4>
                    <ul className="space-y-1">
                      <li>
                        • Site officiel Zinzino.com - Informations produits 2025
                      </li>
                      <li>
                        • Archives Natura4Ever et Xelliss - Évolution historique
                      </li>
                      <li>
                        • Communiqués de presse fusion Zinzino-Xelliss 2023
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      👥 Témoignages clients :
                    </h4>
                    <ul className="space-y-1">
                      <li>
                        • Enquête auprès de 200+ anciens clients Natura4Ever
                      </li>
                      <li>• Retours d'expérience distributeurs Zinzino</li>
                      <li>• Comparatifs qualité laboratoires indépendants</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    <strong>Mise à jour :</strong> Janvier 2025. Les
                    informations produits et prix sont régulièrement actualisées
                    selon les données officielles Zinzino.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
