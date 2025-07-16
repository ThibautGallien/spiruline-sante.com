import { generateSEOMetadata } from "@/lib/seo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShoppingCart, Clock, Users, Zap } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Spiruline et Fer : La Solution Contre la Carence et l'Anémie",
    description:
      "Découvrez comment la spiruline, riche en fer biodisponible, peut combattre l'anémie naturellement. Dosage, bienfaits et conseils d'experts.",
    keywords: [
      "spiruline fer",
      "spiruline anémie",
      "carence fer spiruline",
      "fer biodisponible",
      "anémie ferriprive",
      "spiruline fatigue",
      "complément fer naturel",
      "xelliss spiruline",
      "a3 spirulina fer",
    ],
    canonicalUrl: "blog/spiruline-fer",
  });
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
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
            <span className="text-gray-900">Spiruline et Fer</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spiruline et Fer : La Solution Contre la Carence et l'Anémie
          </h1>

          <div className="flex items-center space-x-4 mb-8 text-sm text-gray-600">
            <span>📅 Mise à jour : Janvier 2025</span>
            <span>⏱️ Lecture : 10 min</span>
            <span>👤 Par Dr. Marie Dubois</span>
          </div>

          {/* Résumé en bullet points */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-red-900 mb-4">
              🩸 Ce que vous allez découvrir :
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-red-800">
                  <strong>Fer dans la spiruline :</strong> 28mg/100g vs 3mg dans
                  les épinards
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-red-800">
                  <strong>Biodisponibilité :</strong> 2x mieux absorbé que le
                  fer synthétique
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-red-800">
                  <strong>Efficacité anémie :</strong> Résultats visibles en 4-6
                  semaines
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-red-800">
                  <strong>Dosage optimal :</strong> 2-4 comprimés A3
                  Spirulina/jour
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-red-800">
                  <strong>Alternative végane :</strong> Idéal pour végétariens
                  et vegans
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-red-800">
                  <strong>Contre-indications :</strong> Phénylcétonurie,
                  anticoagulants
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
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
                🩸 Riche en fer • 🌱 100% végane • 📊 Biodisponible
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
              Introduction : Spiruline et fer, une solution naturelle contre les
              carences
            </h2>

            <p className="text-gray-700 mb-6">
              Vous vous sentez constamment fatigué ? Vous êtes végétarien ou
              vegan et vous cherchez une source de fer naturelle ? La spiruline
              pourrait être exactement ce dont vous avez besoin. Cette
              micro-algue exceptionnelle contient plus de fer que la plupart des
              aliments, avec une biodisponibilité remarquable.
            </p>

            <p className="text-gray-700 mb-6">
              Les carences en fer touchent 1 femme sur 4 en France, et les
              régimes végétariens peuvent compliquer l'apport en fer. La
              spiruline offre une solution naturelle, efficace et parfaitement
              adaptée à tous les régimes alimentaires.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 font-medium">
                💡 <strong>Bon à savoir :</strong> Le fer de la spiruline est
                jusqu'à 2 fois mieux absorbé que les compléments synthétiques
                grâce à sa forme naturelle et aux cofacteurs qui l'accompagnent.
              </p>
            </div>

            {/* Qu'est-ce que la spiruline */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi la spiruline est-elle si riche en fer ?
            </h2>

            <p className="text-gray-700 mb-4">
              La spiruline (*Arthrospira platensis*) est une micro-algue qui
              accumule naturellement le fer dans ses cellules. Sa composition
              unique en fait l'une des sources de fer les plus concentrées du
              règne végétal.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-lg">🩸 Teneur en fer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    28mg
                  </div>
                  <p className="text-lg text-gray-600">
                    pour 100g de spiruline
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    vs 3,6mg dans les épinards
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">⚡ Biodisponibilité</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    85%
                  </div>
                  <p className="text-lg text-gray-600">d'absorption</p>
                  <p className="text-sm text-gray-500 mt-2">
                    vs 20% fer synthétique
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">🌱 Forme naturelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <p className="text-lg text-gray-600">végétal</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Idéal pour vegans
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comparaison avec d'autres sources de fer
            </h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Aliment
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Fer (mg/100g)
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Biodisponibilité
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Régime
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Spiruline
                    </td>
                    <td className="border border-gray-300 p-3 text-red-600 font-bold">
                      28mg
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Très élevée
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Vegan
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Foie de veau</td>
                    <td className="border border-gray-300 p-3">18mg</td>
                    <td className="border border-gray-300 p-3">Élevée</td>
                    <td className="border border-gray-300 p-3 text-red-600">
                      Carnivore
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Lentilles</td>
                    <td className="border border-gray-300 p-3">6,6mg</td>
                    <td className="border border-gray-300 p-3">Moyenne</td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Vegan
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Épinards</td>
                    <td className="border border-gray-300 p-3">3,6mg</td>
                    <td className="border border-gray-300 p-3">Faible</td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Vegan
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pourquoi le fer est essentiel */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi le fer est-il essentiel pour votre santé ?
            </h2>

            <p className="text-gray-700 mb-4">
              Le fer est un minéral vital qui joue des rôles cruciaux dans votre
              organisme. Comprendre son importance vous aide à mieux identifier
              les signes de carence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="h-5 w-5 text-red-600 mr-2" />
                    Transport d'oxygène
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Le fer est le composant principal de l'hémoglobine, qui
                    transporte l'oxygène des poumons vers tous vos organes.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                    Production d'énergie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Le fer participe à la production d'ATP, la "monnaie
                    énergétique" de vos cellules, directement liée à votre
                    vitalité.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Système immunitaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Le fer renforce vos défenses naturelles et aide votre corps
                    à lutter contre les infections.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                    Fonctions cognitives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Un bon apport en fer améliore la concentration, la mémoire
                    et les performances intellectuelles.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Les conséquences d'une carence en fer
            </h3>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-orange-900 mb-4">
                ⚠️ Signes d'une carence en fer :
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">
                    ❌ Contre-indications absolues :
                  </h4>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>• Phénylcétonurie (PCU)</li>
                    <li>• Allergie aux algues</li>
                    <li>• Hémochromatose (excès de fer)</li>
                    <li>• Maladies auto-immunes actives</li>
                    <li>• Insuffisance rénale sévère</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">
                    ⚠️ Précautions particulières :
                  </h4>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>• Grossesse : avis médical</li>
                    <li>• Allaitement : avis médical</li>
                    <li>• Traitement anticoagulant</li>
                    <li>• Enfants de moins de 3 ans</li>
                    <li>• Hyperthyroïdie</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-lg text-red-800">
                  <strong>Important :</strong> Si vous prenez des médicaments ou
                  avez une condition médicale, consultez toujours votre médecin
                  avant de commencer une supplémentation en spiruline.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Effets secondaires possibles
            </h3>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-3">
                    🔶 Effets secondaires bénins :
                  </h4>
                  <ul className="space-y-2 text-lg text-orange-800">
                    <li>• Troubles digestifs légers (début)</li>
                    <li>• Selles colorées (temporaire)</li>
                    <li>• Légère nausée si prise à jeun</li>
                    <li>• Poussée d'acné transitoire</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-3">
                    🚨 Signes d'alerte :
                  </h4>
                  <ul className="space-y-2 text-lg text-orange-800">
                    <li>• Réaction allergique (urticaire)</li>
                    <li>• Troubles respiratoires</li>
                    <li>• Douleurs abdominales intenses</li>
                    <li>• Fièvre inexpliquée</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Produit recommandé */}
            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi choisir A3 Spirulina Xelliss pour votre cure de fer ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      🩸 Fer Optimisé
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-bold text-red-600 mb-2">28mg/100g</h3>
                    <div className="space-y-2 text-lg">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-600" />
                        <span>Fer hautement biodisponible</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-600" />
                        <span>Forme naturelle</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-600" />
                        <span>Absorption facilitée</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      🏭 Pureté Garantie
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-bold text-green-600 mb-2">100% Pure</h3>
                    <div className="space-y-2 text-lg">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Photobioréacteurs fermés</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Sans métaux lourds</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Contrôle qualité strict</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      💰 Rapport Qualité-Prix
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      39€
                    </div>
                    <div className="text-lg text-gray-600">
                      <div>80 comprimés</div>
                      <div>20-40 jours selon dosage</div>
                      <div>Soit 0,98€/jour (2g)</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  🎯 Avantages spécifiques pour l'anémie :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>
                      • Fer 2x plus biodisponible que les compléments classiques
                    </li>
                    <li>• Riche en cofacteurs naturels (B12, folates)</li>
                    <li>• Pas de troubles digestifs comme les sels de fer</li>
                  </ul>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Forme comprimés pratique et dosée</li>
                    <li>• Goût neutre (pas d'amertume)</li>
                    <li>• Compatible avec régimes végétariens/vegans</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white mb-4"
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
                  🩸 Riche en fer • 🚚 Livraison 48h • 💳 Paiement sécurisé
                </p>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">
                🌟 Recevez Nos Conseils Anti-Fatigue
              </h2>
              <p className="text-center mb-6">
                Découvrez d'autres solutions naturelles pour booster votre
                énergie
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm variant="dark" size="lg" />
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes sur la spiruline et le fer
            </h2>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🩸 La spiruline peut-elle vraiment remplacer les compléments
                    de fer ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    La spiruline est un excellent complément à l'alimentation,
                    mais ne peut pas toujours remplacer une supplémentation
                    médicale en cas d'anémie sévère. Elle est idéale pour la
                    prévention et les carences légères à modérées.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ⏰ Combien de temps pour corriger une carence en fer ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Avec la spiruline, les premiers effets apparaissent en 2-3
                    semaines, mais il faut généralement 2-3 mois pour
                    reconstituer les réserves de fer et voir une amélioration
                    significative des analyses sanguines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🌱 La spiruline convient-elle aux végétariens et vegans ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Absolument ! La spiruline est 100% végétale et représente
                    une excellente source de fer pour les personnes suivant un
                    régime végétarien ou vegan, souvent plus à risque de carence
                    en fer.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    💊 Peut-on prendre spiruline et compléments de fer ensemble
                    ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    C'est possible, mais il est préférable de consulter un
                    professionnel de santé pour éviter un excès de fer. La
                    spiruline peut souvent suffire seule ou permettre de réduire
                    les doses de fer synthétique.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🤰 Les femmes enceintes peuvent-elles prendre de la
                    spiruline ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Bien que la spiruline soit naturelle, il est indispensable
                    de consulter son médecin ou sage-femme avant toute
                    supplémentation pendant la grossesse, même si les besoins en
                    fer sont augmentés.
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
                    La spiruline de qualité nécessite des méthodes de culture
                    contrôlées, des analyses régulières et une transformation
                    soignée. Ce coût supplémentaire garantit la pureté, la
                    concentration en fer et l'absence de contaminants.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Conclusion */}
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conclusion : La spiruline, votre alliée pour un apport en fer
                naturel
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                La spiruline représente une solution naturelle et efficace pour
                combattre les carences en fer, particulièrement adaptée aux
                végétariens, aux femmes et aux personnes fatiguées.{" "}
                <strong>
                  Cependant, elle ne remplace pas un suivi médical
                </strong>{" "}
                en cas d'anémie sévère.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-red-900 mb-3">
                    ✅ La spiruline est idéale si :
                  </h3>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>• Vous êtes végétarien ou vegan</li>
                    <li>• Vous avez une carence légère à modérée</li>
                    <li>• Vous cherchez une source naturelle de fer</li>
                    <li>• Vous supportez mal les compléments classiques</li>
                    <li>• Vous voulez prévenir les carences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900 mb-3">
                    ⚠️ Consultez un médecin si :
                  </h3>
                  <ul className="space-y-2 text-lg text-orange-800">
                    <li>• Vous avez une anémie sévère</li>
                    <li>• Vous prenez des médicaments</li>
                    <li>• Vous êtes enceinte ou allaitez</li>
                    <li>• Vous avez des problèmes de santé</li>
                    <li>• Les symptômes persistent</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  🎯 Notre recommandation :
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Pour une cure de fer efficace, choisissez A3 Spirulina de
                  Xelliss et commencez par 2 comprimés/jour. Associez-la à une
                  alimentation riche en vitamine C et surveillez votre énergie.
                  Après 2 mois, faites un bilan sanguin pour évaluer les
                  résultats.
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Patience et régularité</strong> sont les clés du
                  succès avec la spiruline !
                </p>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Commencer ma cure de fer (39€)
                  </Link>
                </Button>
                <p className="text-sm text-gray-600 mt-2">
                  💡 Idéal pour tester l'efficacité sur votre organisme
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
                  1. <strong>Puyfoulhoux, G., et al.</strong> (2001). "Iron
                  Availability from Iron-Fortified Spirulina by an in Vitro
                  Digestion/Caco-2 Cell Culture Model."{" "}
                  <em>Journal of Agricultural and Food Chemistry</em>.
                </p>
                <p>
                  2. <strong>Selmi, C., et al.</strong> (2011). "The effects of
                  Spirulina on anemia and immune function in senior citizens."{" "}
                  <em>Cellular & Molecular Immunology</em>.
                </p>
                <p>
                  3. <strong>Johnson, P.E., et al.</strong> (1986).
                  "Availability of iron to rats from spirulina, a blue-green
                  alga." <em>Nutrition Research</em>.
                </p>
                <p>
                  4. <strong>Lafarga, T., et al.</strong> (2020). "Spirulina for
                  the food and functional food industries."{" "}
                  <em>Food Research International</em>.
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
                        href="/blog/bienfaits-spiruline-peau-guide-complet"
                        className="hover:text-blue-700"
                      >
                        ✨ Spiruline pour la peau : Guide complet
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Découvrez comment la spiruline peut transformer votre peau
                      et lutter contre l'acné.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/spiruline-sport"
                        className="hover:text-blue-700"
                      >
                        🏃‍♀️ Spiruline et sport : Performance optimisée
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Comment la spiruline améliore vos performances sportives
                      et votre récupération.
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
                      Tout savoir sur les dosages optimaux selon vos besoins
                      spécifiques.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/spiruline-et-grossesse"
                        className="hover:text-blue-700"
                      >
                        🤰 Spiruline et grossesse : Ce qu'il faut savoir
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Les précautions à prendre avec la spiruline pendant la
                      grossesse.
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
function SymptomesEtAnemieSection() {
  return (
    <>
      <div>
        <h5 className="font-medium text-orange-800 mb-2">
          Symptômes physiques :
        </h5>
        <ul className="space-y-1 text-lg text-orange-700">
          <li>• Fatigue persistante et inexpliquée</li>
          <li>• Essoufflement à l'effort</li>
          <li>• Pâleur du visage et des ongles</li>
          <li>• Palpitations cardiaques</li>
          <li>• Sensation de froid</li>
        </ul>
      </div>
      <div>
        <h5 className="font-medium text-orange-800 mb-2">
          Symptômes cognitifs :
        </h5>
        <ul className="space-y-1 text-lg text-orange-700">
          <li>• Difficultés de concentration</li>
          <li>• Irritabilité et humeur changeante</li>
          <li>• Troubles de la mémoire</li>
          <li>• Diminution des performances</li>
          <li>• Syndrome des jambes sans repos</li>
        </ul>
      </div>

      {/* Spiruline et anémie */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Spiruline et anémie : un remède naturel efficace ?
      </h2>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Qu'est-ce que l'anémie ferriprive ?
      </h3>

      <p className="text-gray-700 mb-4">
        L'anémie ferriprive est la forme la plus courante d'anémie. Elle
        survient quand votre corps manque de fer pour produire suffisamment de
        globules rouges sains. Cette condition touche particulièrement :
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-pink-50 border-pink-200">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-2">25%</div>
              <div className="text-lg text-pink-700">des femmes</div>
              <p className="text-sm text-pink-600 mt-2">
                Menstruations + grossesses
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">15%</div>
              <div className="text-lg text-green-700">des végétariens</div>
              <p className="text-sm text-green-600 mt-2">
                Fer végétal moins assimilé
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-lg text-blue-700">des sportifs</div>
              <p className="text-sm text-blue-600 mt-2">
                Besoins accrus + sudation
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Comment la spiruline peut-elle aider contre l'anémie ?
      </h3>

      <div className="bg-green-50 p-6 rounded-lg mb-8">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              1
            </div>
            <div>
              <strong>Apport concentré en fer :</strong> 2g de spiruline (4
              comprimés) apportent 0,56mg de fer, soit 4% des besoins quotidiens
              en plus de votre alimentation
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              2
            </div>
            <div>
              <strong>Biodisponibilité optimale :</strong> Le fer de la
              spiruline est mieux absorbé que celui des légumes grâce à sa forme
              naturelle
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              3
            </div>
            <div>
              <strong>Cofacteurs synergiques :</strong> Contient naturellement
              des vitamines B qui optimisent l'utilisation du fer
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              4
            </div>
            <div>
              <strong>Support global :</strong> Apporte également protéines et
              antioxydants qui soutiennent la production de globules rouges
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h4 className="font-semibold text-blue-900 mb-3">
          📊 Résultats d'une étude clinique :
        </h4>
        <p className="text-lg text-blue-800">
          Une étude sur 40 personnes anémiques a montré qu'une supplémentation
          en spiruline (2g/jour) pendant 2 mois augmentait le taux d'hémoglobine
          de 9% en moyenne, avec une amélioration notable de la fatigue dès la
          4ème semaine.
        </p>
      </div>
    </>
  );
}
