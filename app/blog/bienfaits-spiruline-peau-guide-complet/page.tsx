import { generateSEOMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { SpirulineResetSection } from "@/components/sections/spiruline-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Bienfaits Incomparables de la Spiruline pour la Peau : Guide Complet",
    description:
      "Découvrez comment la spiruline transforme votre peau : anti-acné, anti-âge, hydratation. Guide complet avec conseils d'experts et produits recommandés.",
    keywords: [
      "spiruline peau",
      "bienfaits spiruline peau",
      "spiruline acné",
      "spiruline anti-âge",
      "spiruline hydratation",
      "masque spiruline",
      "complément spiruline peau",
      "xelliss spiruline",
      "a3 spirulina",
    ],
    canonicalUrl: "blog/bienfaits-spiruline-peau-guide-complet",
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
            <span className="text-gray-900">Bienfaits Spiruline Peau</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bienfaits Incomparables de la Spiruline pour la Peau : Guide Complet
          </h1>

          <div className="flex items-center space-x-4 mb-8 text-sm text-gray-600">
            <span>📅 Mise à jour : Janvier 2025</span>
            <span>⏱️ Lecture : 8 min</span>
            <span>👤 Thibaut</span>
          </div>

          {/* Résumé en bullet points */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-green-900 mb-4">
              🌟 Ce que vous allez découvrir :
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">
                  <strong>Bienfaits réels :</strong> Acné, anti-âge,
                  hydratation, éclat
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">
                  <strong>Comment ça marche :</strong> Mécanismes d'action sur
                  la peau
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">
                  <strong>Pour quel type de peau :</strong> Grasse, sèche,
                  sensible, mixte
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">
                  <strong>Comment l'utiliser :</strong> Dosage, fréquence,
                  précautions
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">
                  <strong>Résultats attendus :</strong> Délais et effets
                  visibles
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">
                  <strong>Risques et contre-indications :</strong> Ce qu'il faut
                  savoir
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Découvrir A3 Spirulina Xelliss
                </Link>
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                ✅ Spiruline pure • 🚚 Livraison rapide • 💰 Qualité garantie
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none [&_p]:text-lg [&_p]:text-gray-700 [&_ul]:text-lg [&_li]:text-gray-700 [&_li]:mb-1">
            {/* Introduction */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction : Pourquoi la spiruline est-elle si prisée pour la
              peau ?
            </h2>

            <p className="text-gray-700 mb-6">
              Vous cherchez une solution naturelle pour améliorer votre peau ?
              La spiruline pourrait être la réponse que vous attendez. Cette
              micro-algue, reconnue pour ses propriétés nutritionnelles
              exceptionnelles, offre des bienfaits concrets pour tous les types
              de peau.
            </p>

            <p className="text-gray-700 mb-6">
              Que vous souffriez d'acné, de signes de vieillissement, de
              sécheresse cutanée ou que vous souhaitiez simplement retrouver un
              teint éclatant, la spiruline agit de l'intérieur pour nourrir et
              régénérer votre peau naturellement.
            </p>
            {/* Section Spiruline Reset - Composant réutilisable */}
            <SpirulineResetSection className="my-12" />
            {/* Qu'est-ce que la spiruline et comment ça marche */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comment la spiruline agit-elle sur votre peau ?
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Les composés actifs qui transforment votre peau
            </h3>

            <p className="text-gray-700 mb-4">
              La spiruline contient des nutriments spécifiques qui agissent
              directement sur la santé de votre peau :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">💙 Phycocyanine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Ce pigment bleu réduit l'inflammation et calme les rougeurs.
                    Idéal pour l'acné et les peaux sensibles.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg">🧡 Bêta-carotène</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Précurseur de la vitamine A, il favorise le renouvellement
                    cellulaire et donne bonne mine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">
                    💚 Protéines complètes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Fournissent les acides aminés nécessaires à la production de
                    collagène et à la réparation cutanée.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg">💜 Antioxydants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Protègent contre les radicaux libres responsables du
                    vieillissement prématuré.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Le mécanisme d'action sur votre peau
            </h3>

            <p className="text-gray-700 mb-4">
              Voici comment la spiruline agit concrètement sur votre peau :
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <strong>Réduction de l'inflammation :</strong> La
                    phycocyanine calme les inflammations cutanées et réduit les
                    rougeurs
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <strong>Stimulation du renouvellement cellulaire :</strong>{" "}
                    Les vitamines accélèrent la régénération des cellules
                    cutanées
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <strong>Protection antioxydante :</strong> Neutralise les
                    radicaux libres qui abîment la peau
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <strong>Hydratation naturelle :</strong> Améliore la
                    rétention d'eau dans les cellules cutanées
                  </div>
                </div>
              </div>
            </div>

            {/* Bienfaits selon les problèmes de peau */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quels bienfaits pour votre type de peau ?
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🔴 Pour les peaux acnéiques
            </h3>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">
                    ✅ Ce que la spiruline peut faire :
                  </h4>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>• Réduire l'inflammation des boutons</li>
                    <li>• Accélérer la cicatrisation</li>
                    <li>• Diminuer les rougeurs</li>
                    <li>• Équilibrer la production de sébum</li>
                    <li>• Prévenir l'apparition de nouveaux boutons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">
                    ⏱️ Résultats attendus :
                  </h4>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>
                      • <strong>1-2 semaines :</strong> Réduction de
                      l'inflammation
                    </li>
                    <li>
                      • <strong>3-4 semaines :</strong> Moins de nouveaux
                      boutons
                    </li>
                    <li>
                      • <strong>6-8 semaines :</strong> Amélioration visible du
                      teint
                    </li>
                    <li>
                      • <strong>3 mois :</strong> Peau plus nette et équilibrée
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🟡 Pour les peaux matures (anti-âge)
            </h3>

            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-3">
                    ✅ Ce que la spiruline peut faire :
                  </h4>
                  <ul className="space-y-2 text-lg text-yellow-800">
                    <li>• Stimuler la production de collagène</li>
                    <li>• Améliorer l'élasticité cutanée</li>
                    <li>• Réduire l'apparence des rides fines</li>
                    <li>• Donner plus d'éclat au teint</li>
                    <li>• Protéger contre les dommages futurs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-3">
                    ⏱️ Résultats attendus :
                  </h4>
                  <ul className="space-y-2 text-lg text-yellow-800">
                    <li>
                      • <strong>2-3 semaines :</strong> Teint plus lumineux
                    </li>
                    <li>
                      • <strong>4-6 semaines :</strong> Peau plus ferme au
                      toucher
                    </li>
                    <li>
                      • <strong>8-12 semaines :</strong> Réduction des rides
                      fines
                    </li>
                    <li>
                      • <strong>6 mois :</strong> Amélioration globale texture
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🔵 Pour les peaux sèches
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">
                    ✅ Ce que la spiruline peut faire :
                  </h4>
                  <ul className="space-y-2 text-lg text-blue-800">
                    <li>• Améliorer l'hydratation naturelle</li>
                    <li>• Renforcer la barrière cutanée</li>
                    <li>• Réduire les tiraillements</li>
                    <li>• Apaiser les irritations</li>
                    <li>• Rendre la peau plus douce</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">
                    ⏱️ Résultats attendus :
                  </h4>
                  <ul className="space-y-2 text-lg text-blue-800">
                    <li>
                      • <strong>1 semaine :</strong> Moins de tiraillements
                    </li>
                    <li>
                      • <strong>2-3 semaines :</strong> Peau plus souple
                    </li>
                    <li>
                      • <strong>4-6 semaines :</strong> Hydratation améliorée
                    </li>
                    <li>
                      • <strong>8 semaines :</strong> Confort cutané optimal
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🟢 Pour les peaux sensibles
            </h3>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">
                    ✅ Ce que la spiruline peut faire :
                  </h4>
                  <ul className="space-y-2 text-lg text-green-800">
                    <li>• Calmer les réactions cutanées</li>
                    <li>• Réduire les rougeurs</li>
                    <li>• Apaiser les démangeaisons</li>
                    <li>• Renforcer la résistance cutanée</li>
                    <li>• Améliorer la tolérance aux cosmétiques</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">
                    ⏱️ Résultats attendus :
                  </h4>
                  <ul className="space-y-2 text-lg text-green-800">
                    <li>
                      • <strong>3-5 jours :</strong> Apaisement des irritations
                    </li>
                    <li>
                      • <strong>1-2 semaines :</strong> Moins de rougeurs
                    </li>
                    <li>
                      • <strong>3-4 semaines :</strong> Peau plus résistante
                    </li>
                    <li>
                      • <strong>2 mois :</strong> Sensibilité réduite
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comment utiliser */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comment utiliser la spiruline pour votre peau ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow border-2 border-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">
                    🥤 Complément alimentaire (RECOMMANDÉ)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-medium">
                      Dosage A3 Spirulina Xelliss :
                    </p>
                    <ul className="text-lg text-gray-600 space-y-1">
                      <li>
                        • <strong>Cure d'attaque :</strong> 4 comprimés/jour
                        (2g)
                      </li>
                      <li>
                        • <strong>Entretien :</strong> 2 comprimés/jour (1g)
                      </li>
                      <li>
                        • <strong>Quand :</strong> Le matin à jeun
                      </li>
                      <li>
                        • <strong>Avec :</strong> Un grand verre d'eau
                      </li>
                    </ul>
                    <p className="text-lg text-green-600 font-medium">
                      👍 Action de l'intérieur, résultats durables
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    🧴 Masque facial (COMPLÉMENT)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-medium">
                      Recette simple :
                    </p>
                    <ul className="text-lg text-gray-600 space-y-1">
                      <li>• 1 cuillère à café spiruline en poudre</li>
                      <li>• 1 cuillère à soupe eau ou hydrolat</li>
                      <li>
                        • <strong>Application :</strong> 15-20 minutes
                      </li>
                      <li>
                        • <strong>Fréquence :</strong> 1-2 fois/semaine
                      </li>
                    </ul>
                    <p className="text-lg text-orange-600 font-medium">
                      ⚠️ Peut temporairement colorer la peau
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Précautions et risques */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Précautions et contre-indications
            </h2>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-600 mt-1" />
                <h3 className="text-xl font-semibold text-orange-900">
                  Risques et effets secondaires possibles
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-3">
                    ❌ Contre-indications :
                  </h4>
                  <ul className="space-y-2 text-lg text-orange-800">
                    <li>• Allergie aux algues</li>
                    <li>• Maladies auto-immunes</li>
                    <li>• Grossesse et allaitement (avis médical)</li>
                    <li>• Traitement anticoagulant</li>
                    <li>• Phénylcétonurie</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-3">
                    ⚠️ Effets secondaires rares :
                  </h4>
                  <ul className="space-y-2 text-lg text-orange-800">
                    <li>• Troubles digestifs légers (début)</li>
                    <li>• Poussée d'acné temporaire</li>
                    <li>• Coloration temporaire des urines</li>
                    <li>• Réactions allergiques (rare)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Produit recommandé */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quelle spiruline choisir pour votre peau ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      🥇 Notre Recommandation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-bold text-green-600 mb-2">
                      A3 Spirulina Xelliss
                    </h3>
                    <div className="space-y-2 text-lg">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Pureté garantie 100%</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Concentration optimale</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Sans contaminants</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      📊 Composition
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2 text-lg">
                      <div>
                        🫐 <strong>Phycocyanine :</strong> 18%
                      </div>
                      <div>
                        🥩 <strong>Protéines :</strong> 65%
                      </div>
                      <div>
                        🧡 <strong>Bêta-carotène :</strong> 3%
                      </div>
                      <div>
                        🩸 <strong>Fer :</strong> 150mg/100g
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      💰 Prix
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      37€
                    </div>
                    <div className="text-lg text-gray-600">
                      <div>80 comprimés</div>
                      <div>20 jours de cure</div>
                      <div>Soit 1,85€/jour</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white mb-4"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Commander A3 Spirulina Xelliss
                  </Link>
                </Button>
                <p className="text-sm text-gray-600">
                  ✅ Livraison rapide • 💳 Paiement sécurisé • 📞 Support client
                </p>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ❓ La spiruline fonctionne-t-elle vraiment pour la peau ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Oui, plusieurs études montrent que la spiruline peut
                    améliorer l'hydratation cutanée et réduire l'inflammation.
                    Cependant, les résultats varient selon les personnes et
                    nécessitent une utilisation régulière sur plusieurs
                    semaines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ⏰ Combien de temps pour voir les premiers résultats ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Les premiers changements peuvent être visibles après 2-3
                    semaines d'utilisation régulière. Pour des résultats
                    significatifs, comptez 6-8 semaines minimum. La patience est
                    essentielle !
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🤰 Puis-je utiliser la spiruline pendant la grossesse ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Il est recommandé de consulter votre médecin avant de
                    prendre de la spiruline pendant la grossesse ou
                    l'allaitement. Bien que généralement considérée comme sûre,
                    chaque situation est unique.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    💊 Dois-je arrêter mes autres compléments ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    La spiruline peut généralement être prise avec d'autres
                    compléments. Cependant, si vous prenez des médicaments
                    anticoagulants ou avez des conditions médicales spécifiques,
                    consultez un professionnel de santé.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🌡️ Puis-je utiliser la spiruline toute l'année ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Oui, la spiruline peut être consommée en continu. Beaucoup
                    font des cures de 3 mois avec une pause d'1 mois, mais une
                    utilisation continue est également possible si bien tolérée.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    💰 Pourquoi la spiruline de qualité coûte-t-elle plus cher ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Une spiruline de qualité nécessite des méthodes de culture
                    contrôlées, des tests de pureté rigoureux et une
                    concentration optimale en principes actifs. C'est un
                    investissement pour votre santé et l'efficacité du produit.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Conclusion */}
            <div className="bg-green-50 p-8 rounded-lg border border-green-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conclusion : La spiruline pour votre peau, est-ce fait pour vous
                ?
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                La spiruline peut être un excellent complément pour améliorer la
                santé de votre peau,{" "}
                <strong>mais ce n'est pas une solution miracle</strong>. Elle
                fonctionne mieux en complément d'une routine de soins adaptée et
                d'une hygiène de vie saine.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-green-900 mb-3">
                    ✅ La spiruline peut vous aider si :
                  </h3>
                  <ul className="space-y-2 text-lg text-green-800">
                    <li>• Vous avez des problèmes d'acné légers à modérés</li>
                    <li>• Vous cherchez à prévenir le vieillissement cutané</li>
                    <li>• Votre peau manque d'éclat naturel</li>
                    <li>• Vous avez la peau sèche ou déshydratée</li>
                    <li>• Vous voulez une approche naturelle</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-900 mb-3">
                    ❌ La spiruline ne convient pas si :
                  </h3>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>• Vous avez des allergies aux algues</li>
                    <li>• Vous souffrez de maladies auto-immunes</li>
                    <li>• Vous cherchez des résultats immédiats</li>
                    <li>• Vous n'êtes pas prêt à une prise régulière</li>
                    <li>• Vous avez un budget très serré</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  🎯 Notre recommandation :
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Si vous décidez d'essayer la spiruline pour votre peau,
                  commencez par une cure de 3 mois avec un produit de qualité
                  comme A3 Spirulina de Xelliss. Prenez des photos avant/après
                  pour suivre vos progrès.
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Soyez patient :</strong> Les bienfaits sur la peau
                  prennent du temps à se manifester. Ne vous découragez pas si
                  vous ne voyez pas de changements après 2-3 semaines.
                </p>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Essayer A3 Spirulina
                  </Link>
                </Button>
                <p className="text-sm text-gray-600 mt-2">
                  💡 Commencez par une boîte pour tester votre tolérance
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sources scientifiques
              </h2>
              <div className="text-lg text-gray-600 space-y-2">
                <p>
                  1. <strong>Karkos, P.D., et al.</strong> (2011). "Spirulina in
                  clinical practice: evidence-based human applications."{" "}
                  <em>Evidence-Based Complementary and Alternative Medicine</em>
                  .
                </p>
                <p>
                  2. <strong>Wu, Q., et al.</strong> (2016). "Antioxidant,
                  antimicrobial and anti-inflammatory activities of spirulina."{" "}
                  <em>Food Chemistry</em>, 209, 119-130.
                </p>
                <p>
                  3. <strong>Kalafati, M., et al.</strong> (2010). "Ergogenic
                  and antioxidant effects of spirulina supplementation in
                  humans." <em>Medicine & Science in Sports & Exercise</em>.
                </p>
                <p>
                  4. <strong>Miczke, A., et al.</strong> (2016). "Effect of
                  spirulina supplementation on systolic and diastolic blood
                  pressure."{" "}
                  <em>
                    European Review for Medical and Pharmacological Sciences
                  </em>
                  .
                </p>
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
                        href="/blog/spiruline-cheveux"
                        className="hover:text-blue-700"
                      >
                        🦱 Spiruline pour les cheveux : Guide complet
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Découvrez comment la spiruline peut améliorer la santé et
                      la beauté de vos cheveux.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/spiruline-fer"
                        className="hover:text-blue-700"
                      >
                        🩸 Spiruline et fer : Solution anti-fatigue
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Comment la spiruline peut aider à lutter contre les
                      carences en fer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/avis-xelliss-arnaque-ou-opportunite"
                        className="hover:text-blue-700"
                      >
                        🔍 Avis Xelliss : Arnaque ou opportunité ?
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Notre analyse objective de la marque Xelliss et de ses
                      produits.
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
                        💊 Posologie spiruline : Guide dosage
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Tout savoir sur les dosages et la posologie optimale de la
                      spiruline.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
