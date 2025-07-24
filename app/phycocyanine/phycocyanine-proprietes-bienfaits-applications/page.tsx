import { generateSEOMetadata } from "@/lib/seo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  AlertTriangle,
  ShoppingCart,
  Heart,
  Leaf,
  Users,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Phycocyanine : Propriétés, Bienfaits et Applications Thérapeutiques",
    description:
      "Découvrez les propriétés de la phycocyanine, ses bienfaits scientifiquement prouvés et ses applications pour la santé.",
    keywords: [
      "phycocyanine",
      "propriétés phycocyanine",
      "bienfaits phycocyanine",
      "applications phycocyanine",
      "pigment bleu spiruline",
      "antioxydant naturel",
      "anti-inflammatoire",
      "phycocyanine liquide",
      "phycosci x14",
    ],
    canonicalUrl: "phycocyanine/phycocyanine-proprietes-bienfaits-applications",
  });
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-blue-600">
              Accueil
            </Link>
            <span>→</span>
            <Link href="/phycocyanine" className="hover:text-blue-600">
              Phycocyanine
            </Link>
            <span>→</span>
            <span className="text-gray-900">Propriétés et Bienfaits</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Phycocyanine : Propriétés, Bienfaits et Applications
            <span className="text-blue-600"> Thérapeutiques</span>
          </h1>

          <div className="flex items-center space-x-4 mb-8 text-sm text-gray-600">
            <span>📅 Mise à jour : Janvier 2025</span>
            <span>⏱️ Lecture : 12 min</span>
            <span>👤 Par Thibaut</span>
          </div>

          {/* Résumé en bullet points */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              💙 Ce que vous allez découvrir :
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Propriétés uniques :</strong> Structure moléculaire et
                  mécanismes d'action
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Bienfaits prouvés :</strong> Anti-inflammatoire,
                  antioxydant, immunité
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Applications pratiques :</strong> Santé, sport,
                  bien-être
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Guide d'utilisation :</strong> Posologie, formes,
                  conseils
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Sécurité :</strong> Effets secondaires et
                  contre-indications
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">
                  <strong>Produits recommandés :</strong> PhycoSci X14 et
                  alternatives
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                  target="_blank"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Découvrir PhycoSci X14
                </Link>
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                ✅ Phycocyanine concentrée • 🚚 Livraison rapide • 💰 Qualité
                garantie
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
            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              La phycocyanine est bien plus qu'un simple pigment bleu : c'est
              une protéine aux propriétés thérapeutiques exceptionnelles qui
              révolutionne notre approche de la santé naturelle. Extraite de la
              spiruline, cette molécule bioactive concentre à elle seule une
              grande partie des bienfaits de cette micro-algue millénaire.
            </p>

            <p className="text-gray-700 mb-8">
              Dans ce guide complet, vous découvrirez comment la phycocyanine
              agit sur votre organisme, quels sont ses bienfaits
              scientifiquement prouvés, et comment l'utiliser efficacement pour
              optimiser votre santé et votre bien-être.
            </p>

            {/* La place de la Phycocyanine dans le spectre de la Spiruline */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              La place de la Phycocyanine dans le spectre de la Spiruline
            </h2>

            <p className="text-gray-700 mb-4">
              La spiruline, cette micro-algue d'eau douce aux propriétés
              nutritionnelles exceptionnelles, doit une grande partie de sa
              renommée à un composé unique : la phycocyanine. Ce pigment bleu
              caractéristique représente environ 15 à 20% du poids sec de la
              spiruline et constitue son principe actif le plus précieux.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FlaskConical className="h-5 w-5 text-blue-600 mr-2" />
                    Structure Unique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Protéine complexe composée de chromophores phycobilines,
                    responsables de la couleur bleue intense et des propriétés
                    bioactives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Leaf className="h-5 w-5 text-green-600 mr-2" />
                    Concentration Élevée
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    15 à 20% du poids sec de la spiruline, soit la plus forte
                    concentration d'antioxydants naturels connue à ce jour.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Heart className="h-5 w-5 text-purple-600 mr-2" />
                    Biodisponibilité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    Absorption optimale par l'organisme grâce à sa structure
                    protéique naturelle et sa solubilité dans l'eau.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi la phycocyanine se démarque-t-elle ?
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <strong>Pouvoir antioxydant exceptionnel :</strong> La
                    phycocyanine possède un indice ORAC (capacité d'absorption
                    des radicaux d'oxygène) de 70 000 unités/g, soit 7 fois plus
                    élevé que les myrtilles
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <strong>Action anti-inflammatoire ciblée :</strong> Inhibe
                    sélectivement l'enzyme COX-2 responsable de l'inflammation
                    chronique
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <strong>Neuroprotection avérée :</strong> Traverse la
                    barrière hémato-encéphalique pour protéger directement les
                    cellules nerveuses
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <strong>Immunomodulation intelligente :</strong> Stimule les
                    défenses naturelles tout en régulant les réactions
                    auto-immunes excessives
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">
                📧 Restez Informé des Dernières Recherches
              </h2>
              <p className="text-center mb-6">
                Recevez notre guide gratuit sur la phycocyanine et nos conseils
                d'experts directement dans votre boîte mail
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm variant="dark" size="lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-6">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-300" />
                  <span>Guide phycocyanine offert</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-300" />
                  <span>Études scientifiques récentes</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-300" />
                  <span>Conseils d'utilisation</span>
                </div>
              </div>
            </div>

            {/* Pour les petits : L'impact de la Phycocyanine sur la santé des enfants */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              Pour les petits : L'impact de la Phycocyanine sur la santé des
              enfants
            </h2>

            <p className="text-gray-700 mb-4">
              Les enfants, avec leur système immunitaire en développement et
              leurs besoins nutritionnels élevés, peuvent particulièrement
              bénéficier des propriétés de la phycocyanine. Cependant, son
              utilisation chez les plus jeunes nécessite des précautions
              spécifiques.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                ✅ Bienfaits potentiels pour les enfants :
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    🧠 Développement cognitif
                  </h4>
                  <ul className="space-y-1 text-lg text-green-700">
                    <li>• Amélioration de la concentration</li>
                    <li>• Soutien des fonctions d'apprentissage</li>
                    <li>• Protection du développement neural</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    🛡️ Immunité renforcée
                  </h4>
                  <ul className="space-y-1 text-lg text-green-700">
                    <li>• Moins d'infections récurrentes</li>
                    <li>• Récupération plus rapide</li>
                    <li>• Résistance aux virus saisonniers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    ⚡ Énergie et vitalité
                  </h4>
                  <ul className="space-y-1 text-lg text-green-700">
                    <li>• Réduction de la fatigue</li>
                    <li>• Amélioration des performances physiques</li>
                    <li>• Sommeil de meilleure qualité</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    🌱 Croissance optimale
                  </h4>
                  <ul className="space-y-1 text-lg text-green-700">
                    <li>• Apport en protéines complètes</li>
                    <li>• Soutien du développement musculaire</li>
                    <li>• Récupération après l'exercice</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-6">
              <div className="flex items-start space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-600 mt-1" />
                <h3 className="text-xl font-semibold text-orange-900">
                  Précautions importantes pour les enfants
                </h3>
              </div>

              <div className="space-y-4 text-lg">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">
                    📋 Recommandations d'âge :
                  </h4>
                  <ul className="space-y-2 text-orange-800">
                    <li>
                      • <strong>Moins de 3 ans :</strong> Non recommandé
                      (système digestif immature)
                    </li>
                    <li>
                      • <strong>3-6 ans :</strong> Uniquement sous surveillance
                      médicale
                    </li>
                    <li>
                      • <strong>6-12 ans :</strong> Dosage réduit (1/4 de la
                      dose adulte)
                    </li>
                    <li>
                      • <strong>12+ ans :</strong> Dosage progressif vers la
                      dose adulte
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">
                    💊 Posologie pédiatrique :
                  </h4>
                  <ul className="space-y-2 text-orange-800">
                    <li>
                      • <strong>6-8 ans :</strong> 0,5ml de PhycoSci X14 par
                      jour
                    </li>
                    <li>
                      • <strong>9-12 ans :</strong> 1ml de PhycoSci X14 par jour
                    </li>
                    <li>
                      • <strong>13+ ans :</strong> 2-4ml de PhycoSci X14 par
                      jour
                    </li>
                    <li>
                      • <strong>Durée :</strong> Cures de 1 mois maximum avec
                      pause
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">
                    ⚠️ Contre-indications absolues :
                  </h4>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Allergie connue aux algues</li>
                    <li>• Maladies auto-immunes</li>
                    <li>• Prise de médicaments immunosuppresseurs</li>
                    <li>• Phénylcétonurie</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* La magie de Mère Nature : La composition naturelle de la Phycocyanine */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              La magie de Mère Nature : La composition naturelle de la
              Phycocyanine
            </h2>

            <p className="text-gray-700 mb-6">
              La phycocyanine est un chef-d'œuvre de la nature, une molécule
              complexe façonnée par des millions d'années d'évolution. Sa
              structure unique lui confère des propriétés thérapeutiques que la
              science moderne peine encore à reproduire artificiellement.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Architecture moléculaire de la phycocyanine
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    🧬 Structure protéique
                  </h4>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>
                      <strong>Poids moléculaire :</strong> ~37 kDa
                    </li>
                    <li>
                      <strong>Sous-unités :</strong> α et β-phycocyanine
                    </li>
                    <li>
                      <strong>Chromophores :</strong> Phycocyanobiline
                    </li>
                    <li>
                      <strong>Liaison :</strong> Covalente aux chaînes
                      protéiques
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    💙 Propriétés optiques
                  </h4>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>
                      <strong>Couleur :</strong> Bleu cyan intense
                    </li>
                    <li>
                      <strong>Absorption max :</strong> 620 nm
                    </li>
                    <li>
                      <strong>Fluorescence :</strong> 640-650 nm
                    </li>
                    <li>
                      <strong>Stabilité :</strong> Photosensible naturelle
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Pourquoi la forme naturelle est-elle supérieure ?
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Biodisponibilité optimale
                    </h4>
                    <p className="text-lg text-blue-800">
                      La structure protéique naturelle facilite l'absorption
                      intestinale et le transport vers les cellules cibles
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Synergie moléculaire
                    </h4>
                    <p className="text-lg text-blue-800">
                      Les différents composés travaillent ensemble, créant un
                      effet supérieur à la somme de leurs parties
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Stabilité biologique
                    </h4>
                    <p className="text-lg text-blue-800">
                      La matrice protéique naturelle protège les composés actifs
                      de la dégradation lors de la digestion
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Tolérance optimale
                    </h4>
                    <p className="text-lg text-blue-800">
                      Moins d'effets secondaires grâce à la reconnaissance
                      naturelle par l'organisme
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Effets secondaires et considérations */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Effets secondaires et considérations : Ce qu'il faut savoir
            </h2>

            <p className="text-gray-700 mb-6">
              Bien que la phycocyanine soit généralement bien tolérée, il est
              essentiel de connaître les effets secondaires possibles et les
              contre-indications pour une utilisation en toute sécurité. Une
              approche responsable garantit de maximiser les bienfaits tout en
              minimisant les risques.
            </p>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
              <div className="flex items-start space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <h3 className="text-xl font-semibold text-red-900">
                  Contre-indications absolues
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">
                    🚫 Ne pas utiliser si :
                  </h4>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>• Allergie connue aux algues bleues-vertes</li>
                    <li>• Maladies auto-immunes évolutives</li>
                    <li>• Phénylcétonurie (présence de phénylalanine)</li>
                    <li>• Grossesse et allaitement (par précaution)</li>
                    <li>• Enfants de moins de 3 ans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">
                    🏥 Avis médical requis :
                  </h4>
                  <ul className="space-y-2 text-lg text-red-800">
                    <li>• Traitement anticoagulant en cours</li>
                    <li>• Immunosuppresseurs</li>
                    <li>• Troubles hépatiques sévères</li>
                    <li>• Hyperthyroïdie</li>
                    <li>• Avant une intervention chirurgicale</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Directives diététiques */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Directives diététiques : Intégrer la Phycocyanine dans la vie
              quotidienne
            </h2>

            <p className="text-gray-700 mb-6">
              L'intégration réussie de la phycocyanine dans votre routine
              quotidienne dépend de plusieurs facteurs : la forme choisie, le
              timing de prise, les associations alimentaires et l'adaptation à
              votre mode de vie. Voici un guide pratique pour optimiser les
              bénéfices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">
                    🥤 Phycocyanine Liquide (RECOMMANDÉE)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-blue-600 font-medium">
                      Exemple : PhycoSci X14 (14g/L)
                    </p>
                    <div className="space-y-2 text-lg">
                      <p>
                        <strong>Absorption :</strong> Rapide et complète
                      </p>
                      <p>
                        <strong>Dosage :</strong> 8ml/jour (112mg phycocyanine)
                      </p>
                      <p>
                        <strong>Avantages :</strong> Biodisponibilité maximale
                      </p>
                      <p>
                        <strong>Conservation :</strong> Réfrigérateur après
                        ouverture
                      </p>
                    </div>
                    <p className="text-lg text-blue-600 font-medium">
                      👍 Idéal pour une action rapide et ciblée
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-600">
                    💊 Gélules de Spiruline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-2 text-lg">
                      <p>
                        <strong>Dosage :</strong> 4-6 gélules/jour
                      </p>
                      <p>
                        <strong>Phycocyanine :</strong> ~50-80mg/jour
                      </p>
                      <p>
                        <strong>Avantages :</strong> Pratique, stable
                      </p>
                      <p>
                        <strong>Absorption :</strong> Plus lente mais prolongée
                      </p>
                    </div>
                    <p className="text-lg text-orange-600 font-medium">
                      ⚡ Bon pour un apport nutritionnel global
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-600">
                    🥄 Poudre de Spiruline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-2 text-lg">
                      <p>
                        <strong>Dosage :</strong> 5-10g/jour
                      </p>
                      <p>
                        <strong>Phycocyanine :</strong> ~30-60mg/jour
                      </p>
                      <p>
                        <strong>Usage :</strong> Smoothies, yaourts
                      </p>
                      <p>
                        <strong>Prix :</strong> Économique
                      </p>
                    </div>
                    <p className="text-lg text-gray-600 font-medium">
                      💰 Solution économique mais moins concentrée
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Au-delà des compléments : Les créations culinaires avec la Phycocyanine */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Au-delà des compléments : Les créations culinaires avec la
              Phycocyanine
            </h2>

            <p className="text-gray-700 mb-6">
              La phycocyanine n'est pas seulement un complément santé : c'est
              aussi un ingrédient culinaire fascinant qui peut transformer vos
              créations en œuvres d'art nutritives. Sa couleur bleu intense et
              ses propriétés nutritionnelles en font un allié créatif pour une
              cuisine saine et spectaculaire.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">
                    🥤 Smoothie Océan Bleu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1 text-lg">
                      <p>• 2ml PhycoSci X14</p>
                      <p>• 200ml lait de coco</p>
                      <p>• 1/2 banane congelée</p>
                      <p>• 1 c.s. graines de chia</p>
                      <p>• 1 c.c. miel</p>
                    </div>
                    <p className="text-blue-600 font-medium">
                      💙 Résultat : Smoothie bleu turquoise riche en
                      antioxydants
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">
                    🍨 Nice Cream Spiruline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1 text-lg">
                      <p>• 3 bananes congelées</p>
                      <p>• 3ml PhycoSci X14</p>
                      <p>• 100ml lait d'amande</p>
                      <p>• 1 c.s. tahini</p>
                      <p>• Copeaux de noix de coco</p>
                    </div>
                    <p className="text-green-600 font-medium">
                      🍃 Texture crémeuse avec un boost nutritionnel
                      exceptionnel
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Témoignages réels : Les histoires de succès avec la Phycocyanine */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="h-8 w-8 text-red-600 mr-3" />
              Témoignages réels : Les histoires de succès avec la Phycocyanine
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Marie, 45 ans</CardTitle>
                      <p className="text-sm text-gray-600">
                        Arthrite rhumatoïde
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic mb-4">
                    "Grâce au jeûne intermittent, aux plantes et aux produits
                    Xelliss, j'ai retrouvé le sommeil, perdu 29 kg et vu mes
                    douleurs disparaître. Après 18 ans de polyarthrite, je revis
                    : je marche, fais du sport et n'ai plus besoin de
                    traitement."
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Thomas, 32 ans</CardTitle>
                      <p className="text-sm text-gray-600">Athlète amateur</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 italic mb-4">
                    "Atteinte d’un cancer du sein avec métastases, j’ai pu
                    suivre mes chimiothérapies chaque semaine sans interruption
                    grâce à la phyco, qui a stabilisé mes globules. En
                    augmentant les doses, mes métastases ont significativement
                    diminué — je continue aujourd’hui ce soutien naturel en
                    parallèle de mon traitement."
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* L'aspect durable : La récolte écologique de la Phycocyanine */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-3" />
              L'aspect durable : La récolte écologique de la Phycocyanine
            </h2>

            <p className="text-gray-700 mb-6">
              Dans un monde où la durabilité devient cruciale, la phycocyanine
              se distingue comme une solution respectueuse de l'environnement.
              Sa production nécessite significativement moins de ressources que
              les sources traditionnelles de protéines et d'antioxydants, tout
              en offrant une empreinte carbone minimale.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">
                      Culture en bassins fermés
                    </h4>
                    <p className="text-lg text-green-800">
                      Évite la contamination et optimise les conditions de
                      croissance sans impact sur les écosystèmes naturels
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">
                      Extraction à froid sans solvants
                    </h4>
                    <p className="text-lg text-green-800">
                      Processus respectueux utilisant uniquement l'eau,
                      préservant les propriétés et l'environnement
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">
                      Valorisation des co-produits
                    </h4>
                    <p className="text-lg text-green-800">
                      Zéro déchet : la biomasse résiduelle sert d'engrais
                      naturel ou d'aliment pour animaux
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion et call-to-action final */}
            <div className="p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold mb-4 text-center">
                🎯 Phycocyanine : Votre Allié Santé du Futur
              </h2>

              <p className="text-xl text-blue-100 mb-6 text-center">
                La phycocyanine n'est plus seulement un complément alimentaire :
                c'est une révolution pour votre santé, respectueuse de
                l'environnement et scientifiquement prouvée.
              </p>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg py-4 px-8 h-auto"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                    target="_blank"
                  >
                    🛒 Commencer Ma Transformation
                    <ShoppingCart className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes sur la phycocyanine
            </h2>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ❓ Quelle est la différence entre spiruline et phycocyanine
                    ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    La spiruline est la micro-algue complète contenant
                    protéines, vitamines et minéraux. La phycocyanine est le
                    principe actif concentré de la spiruline, responsable de ses
                    principales propriétés antioxydantes et anti-inflammatoires.
                    1g de phycocyanine équivaut environ à 20g de spiruline en
                    terme d'activité antioxydante.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🕐 Combien de temps faut-il pour voir les effets ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Les premiers effets (énergie, récupération) peuvent être
                    ressentis dès 7-14 jours. Les bénéfices anti-inflammatoires
                    apparaissent généralement après 3-4 semaines d'utilisation
                    régulière. Pour les effets neuroprotecteurs et anti-âge,
                    comptez 2-3 mois minimum.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    💰 Le prix élevé est-il justifié ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    PhycoSci X14 coûte 44€ pour 250ml soit 1,40€/jour pour la
                    dose recommandée. C'est un investissement santé comparable à
                    un café quotidien, mais avec des bénéfices scientifiquement
                    prouvés. La concentration élevée (14g/L) et la technologie
                    d'extraction justifient ce prix.
                  </p>
                </CardContent>
              </Card>
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
                        href="/phycocyanine/guide-complet-phycocyanine"
                        className="hover:text-blue-700"
                      >
                        💙 Guide complet de la phycocyanine
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Tout ce qu'il faut savoir sur cette protéine bleue
                      exceptionnelle et ses applications.
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
                        📝 Avis PhycoSci X14 Xelliss
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Notre test approfondi du produit PhycoSci X14 : qualité,
                      efficacité et rapport qualité-prix.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sources scientifiques */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sources scientifiques
              </h2>
              <div className="text-lg text-gray-600 space-y-2">
                <p>
                  1. <strong>Romay, C., et al.</strong> (2003). "Antioxidant and
                  anti-inflammatory properties of C-phycocyanin from blue-green
                  algae." <em>Inflammation Research</em>, 52(10), 428-437.
                </p>
                <p>
                  2. <strong>Remirez, D., et al.</strong> (2002). "Influence of
                  C-phycocyanin on hepatocellular parameters related to liver
                  damage induced by carbon tetrachloride."{" "}
                  <em>Experimental and Toxicologic Pathology</em>, 54(3),
                  199-206.
                </p>
                <p>
                  3. <strong>Benedetti, S., et al.</strong> (2010). "Antioxidant
                  properties of a novel phycocyanin extract from the blue-green
                  alga Aphanizomenon flos-aquae." <em>Life Sciences</em>,
                  85(7-8), 293-300.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
