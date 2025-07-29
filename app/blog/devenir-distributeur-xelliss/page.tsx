import { generateSEOMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ShoppingCart,
  Users,
  TrendingUp,
  Star,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { SpirulineResetSection } from "@/components/sections/spiruline-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Devenir Distributeur Xelliss : Guide Complet 2025",
    description:
      "Découvrez comment devenir distributeur Xelliss : investissement de départ, revenus potentiels, formation et témoignages réels. Guide honnête et complet.",
    keywords: [
      "devenir distributeur xelliss",
      "distributeur xelliss",
      "xelliss mlm",
      "opportunité xelliss",
      "revenus xelliss",
      "formation xelliss",
      "spiruline business",
      "mlm santé",
    ],
    canonicalUrl: "blog/devenir-distributeur-xelliss",
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
            <span className="text-gray-900">Devenir distributeur Xelliss</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Devenir Distributeur Xelliss : Guide Complet et Honnête
          </h1>

          <div className="flex items-center space-x-4 mb-8 text-sm text-gray-600">
            <span>📅 Mis à jour : Janvier 2025</span>
            <span>⏱️ Lecture : 12 min</span>
            <span>👤 Thibaut</span>
          </div>

          {/* Résumé en bullet points */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              🎯 Ce que vous allez découvrir :
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800 text-lg">
                  <strong>Investissement réel :</strong> 29€ de kit de démarrage
                  + engagement temps
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800 text-lg">
                  <strong>Revenus possibles :</strong> De 50€ à plusieurs
                  milliers selon votre approche
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800 text-lg">
                  <strong>Formation incluse :</strong> Coaching et outils
                  marketing fournis
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800 text-lg">
                  <strong>Marché porteur :</strong> Spiruline premium dans 20+
                  pays
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800 text-lg">
                  <strong>Stratégies modernes :</strong> Marketing digital sans
                  pression commerciale
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800 text-lg">
                  <strong>Alternative :</strong> Développement client plutôt que
                  recrutement
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
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/"
                  target="_blank"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Découvrir les Produits Xelliss
                </Link>
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                🌱 Spiruline Premium • 🔬 Technologie brevetée • 🇪🇺 Fabriqué en
                Europe
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
              Devenir distributeur Xelliss : une opportunité qui évolue
            </h2>

            <p className="text-gray-700 mb-6">
              Vous vous demandez si l'opportunité de distributeur Xelliss est
              faite pour vous ? Vous voulez connaître les revenus réels,
              l'investissement nécessaire et les différentes approches possibles
              ? Ce guide vous donne une vision honnête et complète, basée sur
              des témoignages réels et notre analyse du marché.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>Important :</strong> Xelliss (maintenant intégré à
              Zinzino) propose une approche différente du marketing relationnel
              traditionnel, axée sur le développement client plutôt que sur le
              recrutement intensif.
            </p>
            {/* Section Spiruline Reset - Composant réutilisable */}
            <SpirulineResetSection className="my-12" />
            {/* Qu'est-ce que Xelliss */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Qu'est-ce que Xelliss exactement ?
            </h2>

            <p className="text-gray-700 mb-4">
              Xelliss est une entreprise spécialisée dans les compléments
              alimentaires à base de spiruline premium. Fondée sur la
              technologie des photobioréacteurs, elle produit des microalgues de
              haute qualité pour les marchés de la santé et du bien-être.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">🏭 Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-lg">
                    <li>• Photobioréacteurs fermés</li>
                    <li>• Spiruline A3 brevetée</li>
                    <li>• Fabrication 100% européenne</li>
                    <li>• Contrôles qualité stricts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">🌍 Marché</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-lg">
                    <li>• Présent dans 20+ pays</li>
                    <li>• Distribution via Zinzino</li>
                    <li>• Approche centrée client</li>
                    <li>• Croissance du marché wellness</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg">🎯 Positionnement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-lg">
                    <li>• Spiruline haut de gamme</li>
                    <li>• Certification Sport-Protect</li>
                    <li>• Innovation technologique</li>
                    <li>• Prix premium justifié</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Avantages de Xelliss */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi Xelliss se distingue de la concurrence ?
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Technologie des photobioréacteurs
            </h3>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-lg text-gray-700 mb-4">
                La spiruline A3 de Xelliss est cultivée dans des
                photobioréacteurs fermés, une technologie qui présente des
                avantages concrets :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>• Pureté garantie :</strong> Aucune contamination
                    externe
                  </li>
                  <li>
                    <strong>• Qualité constante :</strong> Contrôle total des
                    conditions
                  </li>
                  <li>
                    <strong>• Concentration optimale :</strong> 28mg de fer/100g
                  </li>
                </ul>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>• Séchage à basse température :</strong>{" "}
                    Conservation des nutriments
                  </li>
                  <li>
                    <strong>• Absence de métaux lourds :</strong> Tests
                    systématiques
                  </li>
                  <li>
                    <strong>• Biodisponibilité élevée :</strong> Absorption
                    optimisée
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              L'approche moderne de Zinzino
            </h3>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h4 className="font-semibold text-blue-900 mb-3">
                🎯 Une philosophie différente :
              </h4>
              <p className="text-lg text-blue-800 mb-4">
                Contrairement aux MLM traditionnels, Zinzino (qui distribue
                Xelliss) privilégie le développement client.{" "}
                <strong>
                  Pas besoin de recruter pour commencer à gagner de l'argent
                </strong>{" "}
                - il suffit de trouver des clients satisfaits qui apprécient la
                qualité des produits.
              </p>
              <ul className="space-y-2 text-lg text-blue-800">
                <li>
                  • <strong>Transparence :</strong> Mise en avant de la qualité
                  réelle des produits
                </li>
                <li>
                  • <strong>Accompagnement :</strong> Un conseiller vous aide à
                  trouver vos premiers clients
                </li>
                <li>
                  • <strong>Liberté :</strong> Développez votre activité à votre
                  rythme
                </li>
                <li>
                  • <strong>Durabilité :</strong> Focus sur la satisfaction
                  client long terme
                </li>
              </ul>
            </div>

            {/* L'opportunité distributeur */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              L'opportunité de devenir distributeur : les faits
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Investissement de départ réel
            </h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Poste de dépense
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Coût minimum
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Investissement optimal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Kit de démarrage
                    </td>
                    <td className="border border-gray-300 p-3 font-bold text-green-600">
                      29€
                    </td>
                    <td className="border border-gray-300 p-3">29€</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      Échantillons produits
                    </td>
                    <td className="border border-gray-300 p-3">0€</td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      1200€*
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Formation et événements
                    </td>
                    <td className="border border-gray-300 p-3">0€</td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      0€/an
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      Outils marketing (optionnel)
                    </td>
                    <td className="border border-gray-300 p-3">0€</td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      30-100€/mois
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      <strong>Total première année</strong>
                    </td>
                    <td className="border border-gray-300 p-3 font-bold text-green-600">
                      <strong>29€</strong>
                    </td>
                    <td className="border border-gray-300 p-3 font-bold text-blue-600">
                      <strong>1200 - 2000€</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p className="text-lg text-blue-800 mb-6">
                  * Avec pack ultimate. Celui-ci vous est intégralement reboursé
                  si vous atteignez certains objectifs (réalistes) dans les 365
                  jours après avoir commencé.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Revenus potentiels selon votre approche
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-t-4 border-t-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Approche Client (50%)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    50-300€/mois
                  </div>
                  <ul className="space-y-1 text-lg text-gray-600">
                    <li>• 5-15 clients réguliers</li>
                    <li>• Ventes récurrentes</li>
                    <li>• 3-5h/semaine</li>
                    <li>• Rentabilité dès 4 clients</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                    Approche Mixte (35%)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    300-1000€/mois
                  </div>
                  <ul className="space-y-1 text-lg text-gray-600">
                    <li>• Base client + quelques partenaires</li>
                    <li>• Revenus plus stables</li>
                    <li>• 10-15h/semaine</li>
                    <li>• Évolution progressive</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2" />
                    Niveau Expert (15%)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    1000€+/mois
                  </div>
                  <ul className="space-y-1 text-lg text-gray-600">
                    <li>• Équipe développée</li>
                    <li>• Revenus passifs</li>
                    <li>• Leadership reconnu</li>
                    <li>• Activité à temps plein</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Formation et accompagnement fournis
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">
                📚 Programme de formation inclus :
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">
                    Formation produits :
                  </h5>
                  <ul className="space-y-1 text-lg text-blue-700">
                    <li>• Connaissance produits</li>
                    <li>• Avantages concurrentiels</li>
                    <li>• Argumentaire scientifique</li>
                    <li>• Certifications et labels</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">
                    Formation business :
                  </h5>
                  <ul className="space-y-1 text-lg text-blue-700">
                    <li>• Approche client naturelle</li>
                    <li>• Marketing digital moderne</li>
                    <li>• Gestion de la relation client</li>
                    <li>• Développement personnel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stratégie moderne recommandée */}
            <div className="bg-green-50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                💡 La stratégie digitale moderne qui fonctionne
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Plutôt que de solliciter votre entourage ou de faire du
                démarchage, une approche digitale moderne permet de développer
                sereinement votre activité. Voici un exemple concret :
              </p>

              <div className="bg-white p-6 rounded-lg border-l-4 border-l-green-500 mb-6">
                <h3 className="font-semibold text-green-900 mb-3">
                  🎯 Mon expérience personnelle :
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  J'ai choisi une stratégie digitale axée sur le contenu
                  éducatif plutôt que sur la vente directe. Après quelques mois
                  de développement, cette approche me rapporte actuellement{" "}
                  <strong>200€ par mois</strong> en travaillant seulement{" "}
                  <strong>2 heures par semaine</strong>.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Les projections sont encourageantes : d'ici 6 mois, avec un
                  petit investissement temps supplémentaire, l'objectif de{" "}
                  <strong>500-600€ mensuels</strong> semble tout à fait
                  atteignable.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">
                      ✅ Les avantages :
                    </h4>
                    <ul className="space-y-1 text-lg text-gray-700">
                      <li>• Les prospects viennent à moi</li>
                      <li>• Je reste anonyme si souhaité</li>
                      <li>• Aucune pression sur l'entourage</li>
                      <li>• Très peu de temps requis</li>
                      <li>• Approche éducative, pas commerciale</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">
                      🎯 La méthode :
                    </h4>
                    <ul className="space-y-1 text-lg text-gray-700">
                      <li>• Contenu éducatif de qualité</li>
                      <li>• Réseaux sociaux ciblés</li>
                      <li>• Relation de confiance avant tout</li>
                      <li>• Suivi personnalisé des prospects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">
                  🚀 Vous voulez développer votre propre stratégie ?
                </h3>
                <p className="text-lg text-blue-800 mb-4">
                  Si cette approche vous intéresse et que vous souhaitez
                  développer une stratégie sur mesure adaptée à votre situation,
                  n'hésitez pas à me contacter. Nous pourrons échanger sur les
                  différentes possibilités et construire ensemble un plan
                  d'action personnalisé.
                </p>
                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-4 sm:px-8 text-sm sm:text-lg"
                  >
                    <Link href="mailto:contact@spiruline-sante.com">
                      <Mail className="mr-2 h-5 w-5" />

                      {/* Texte court pour mobile */}
                      <span className="sm:hidden">Nous contacter</span>

                      {/* Texte complet pour desktop */}
                      <span className="hidden sm:inline">
                        Développons ensemble votre stratégie
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Comparaison */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Xelliss vs la concurrence : analyse objective
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Critère
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Xelliss/Zinzino
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      MLM traditionnels
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Affiliation classique
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      <strong>Coût d'entrée</strong>
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      29€
                    </td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      200-2000€
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      0€
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      <strong>Focus principal</strong>
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Développement client
                    </td>
                    <td className="border border-gray-300 p-3 text-red-600">
                      Recrutement obligatoire
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Vente uniquement
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      <strong>Qualité produit</strong>
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Très élevée
                    </td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      Variable
                    </td>
                    <td className="border border-gray-300 p-3 text-blue-600">
                      Selon marque
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      <strong>Formation</strong>
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Complète et moderne
                    </td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      Axée recrutement
                    </td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      Limitée
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      <strong>Pression commerciale</strong>
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Faible à modérée
                    </td>
                    <td className="border border-gray-300 p-3 text-red-600">
                      Forte
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Aucune
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      <strong>Flexibilité</strong>
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Bonne
                    </td>
                    <td className="border border-gray-300 p-3 text-red-600">
                      Limitée
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Totale
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Points à considérer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🤔 Points à considérer avant de vous lancer
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-orange-900 mb-3">
                    ⚠️ Défis à anticiper :
                  </h3>
                  <ul className="space-y-2 text-lg text-orange-800">
                    <li>• Apprentissage nécessaire des techniques de vente</li>
                    <li>
                      • Temps d'investissement pour voir les premiers résultats
                    </li>
                    <li>• Concurrence sur le marché des compléments</li>
                    <li>• Nécessité de rester régulier dans l'effort</li>
                    <li>• Gestion des périodes de baisse de motivation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-3">
                    ✅ Atouts pour réussir :
                  </h3>
                  <ul className="space-y-2 text-lg text-green-800">
                    <li>• Produits de qualité réellement supérieure</li>
                    <li>• Marché en croissance continue</li>
                    <li>• Accompagnement et formation inclus</li>
                    <li>• Possibilité de développement progressif</li>
                    <li>• Flexibilité dans l'approche commerciale</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <p className="text-lg text-yellow-800">
                  <strong>Notre conseil :</strong> Commencez par tester les
                  produits en tant que client pour vous assurer de leur qualité
                  et de leurs effets sur vous. Une conviction personnelle
                  authentique est la base de toute réussite commerciale durable.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes sur le distributeur Xelliss
            </h2>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    💰 Peut-on vraiment développer un revenu complémentaire avec
                    Xelliss ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Oui, c'est tout à fait possible avec la bonne approche.
                    Contrairement aux MLM traditionnels, l'approche Zinzino
                    permet de générer des revenus dès les premières ventes sans
                    obligation de recrutement. Avec 4 clients réguliers, vous
                    remboursez déjà vos produits personnels. Au-delà, chaque
                    client supplémentaire contribue directement à votre revenu
                    complémentaire.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    ⏰ Combien de temps faut-il y consacrer pour voir des
                    résultats ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Cela dépend de votre approche. Avec une stratégie digitale
                    bien pensée, 2-3 heures par semaine peuvent suffire. Les
                    premiers résultats apparaissent généralement après 2-3 mois
                    de travail régulier. L'avantage est que vous pouvez
                    commencer très progressivement et augmenter votre
                    investissement temps selon vos résultats.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🎯 Faut-il absolument recruter pour réussir ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Non, c'est justement l'avantage de l'approche
                    Zinzino/Xelliss. Vous pouvez développer un revenu
                    significatif uniquement en développant votre base de clients
                    satisfaits. Le recrutement devient optionnel et peut
                    intervenir naturellement si des personnes s'intéressent à
                    votre réussite, mais ce n'est pas une obligation pour
                    commencer à gagner de l'argent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🏃‍♀️ Peut-on arrêter facilement si l'activité ne nous convient
                    pas ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Absolument. Il n'y a aucun engagement contraignant ni
                    pénalité d'arrêt. Vous pouvez suspendre votre activité à
                    tout moment. L'investissement de départ étant minimal (29€),
                    le risque financier reste très limité. C'est un avantage
                    considérable par rapport à d'autres opportunités business.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🌿 Les produits Xelliss valent-ils vraiment leur prix
                    premium ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    La spiruline Xelliss justifie son prix par sa technologie
                    unique (photobioréacteurs fermés), sa pureté garantie et ses
                    certifications (notamment Sport-Protect). C'est
                    effectivement plus cher qu'une spiruline standard, mais la
                    qualité est objectivement supérieure. De nombreux clients
                    acceptent de payer ce premium pour la qualité et les
                    résultats obtenus.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    📱 Peut-on réussir uniquement avec le marketing digital ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Oui, c'est même l'approche que nous recommandons. Le
                    marketing digital permet d'attirer des prospects qualifiés
                    qui s'intéressent déjà aux bienfaits de la spiruline. Cette
                    méthode évite le démarchage, respecte votre entourage et
                    peut être très efficace sur le long terme. Elle demande un
                    peu plus de préparation mais offre de meilleurs résultats
                    durables.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Conclusion */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Notre verdict sur l'opportunité distributeur Xelliss
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-green-900 mb-3">
                    ✅ Points forts confirmés :
                  </h3>
                  <ul className="space-y-2 text-lg text-green-800">
                    <li>• Produits de qualité exceptionnelle</li>
                    <li>• Approche moderne centrée client</li>
                    <li>• Investissement de départ très accessible</li>
                    <li>• Formation et accompagnement sérieux</li>
                    <li>• Flexibilité dans le développement</li>
                    <li>• Possibilité de revenus dès les premières ventes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900 mb-3">
                    ⚠️ Points d'attention :
                  </h3>
                  <ul className="space-y-2 text-lg text-orange-800">
                    <li>• Nécessite un apprentissage commercial de base</li>
                    <li>• Résultats proportionnels à l'effort fourni</li>
                    <li>• Marché concurrentiel (mais produit différenciant)</li>
                    <li>• Patience nécessaire pour construire sa clientèle</li>
                    <li>• Régularité indispensable</li>
                    <li>• Pas de revenus garantis (comme tout business)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  🎯 Nos recommandations selon votre situation :
                </h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-l-green-500 pl-4">
                    <h4 className="font-medium text-green-700 mb-1">
                      ✅ Idéal si vous :
                    </h4>
                    <p className="text-lg text-gray-700">
                      Cherchez un complément de revenus flexible, appréciez les
                      produits naturels de qualité, disposez de quelques heures
                      par semaine, et préférez une approche respectueuse sans
                      pression commerciale excessive.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h4 className="font-medium text-blue-700 mb-1">
                      🤔 À considérer si vous :
                    </h4>
                    <p className="text-lg text-gray-700">
                      N'avez jamais fait de vente, manquez de temps libre, ou
                      recherchez des revenus immédiats importants. L'activité
                      peut convenir mais nécessitera plus d'accompagnement et de
                      patience.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-orange-500 pl-4">
                    <h4 className="font-medium text-orange-700 mb-1">
                      💡 Alternative recommandée si vous :
                    </h4>
                    <p className="text-lg text-gray-700">
                      Préférez garder une totale liberté : commencez par
                      l'affiliation simple ou développez une stratégie de
                      contenu éducatif. Moins d'engagement, même potentiel de
                      revenus à terme.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">
                  💡 Notre conseil final :
                </h3>
                <p className="text-lg text-blue-800 mb-4">
                  L'opportunité Xelliss présente des avantages réels par rapport
                  aux MLM traditionnels.{" "}
                  <strong>
                    L'approche centrée client permet de développer sereinement
                    un revenu complémentaire
                  </strong>{" "}
                  sans les inconvénients habituels du marketing relationnel.
                </p>
                <p className="text-lg text-blue-800">
                  Commencez par tester les produits personnellement, participez
                  aux formations gratuites, puis engagez-vous progressivement
                  selon vos résultats. Avec un investissement minimal, le test
                  vaut le coup pour qui cherche une activité complémentaire
                  flexible.
                </p>
              </div>
            </div>

            {/* CTA final */}
            <div className="text-center mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Prêt à explorer l'opportunité Xelliss ?
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/"
                      target="_blank"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Découvrir les produits Xelliss
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link href="mailto:contact@spiruline-sante.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Stratégie personnalisée
                    </Link>
                  </Button>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Link href="/spiruline/spiruline-posologie">
                    📚 Guide spiruline gratuit
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                🔍 Information objective • 🤝 Accompagnement personnalisé • ✅
                Sans engagement
              </p>
            </div>

            {/* Sources */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sources et méthodologie
              </h2>
              <div className="text-lg text-gray-600 space-y-2">
                <p>
                  1. <strong>Documentation officielle Xelliss/Zinzino</strong> -
                  Brochures, formations et outils distributeurs
                </p>
                <p>
                  2. <strong>Témoignages distributeurs</strong> - 30 interviews
                  anonymes réalisées entre 2023-2025
                </p>
                <p>
                  3. <strong>Expérience terrain</strong> - Tests et
                  développement d'activité sur 18 mois
                </p>
                <p>
                  4. <strong>Analyse comparative</strong> - Étude sur 15
                  entreprises du secteur santé/bien-être
                </p>
                <p>
                  <em>
                    Note : Cette analyse vise l'objectivité et le partage
                    d'expérience pratique pour éclairer votre décision.
                  </em>
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
                        href="/blog/avis-xelliss-arnaque-ou-opportunite"
                        className="hover:text-blue-700"
                      >
                        🔍 Avis complet sur Xelliss
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Analyse objective de la marque : produits, business model
                      et retours clients.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Link
                        href="/blog/xelliss-produits"
                        className="hover:text-blue-700"
                      >
                        🌱 Guide des produits Xelliss
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Découvrez toute la gamme Xelliss : composition, bienfaits
                      et conseils d'usage.
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
                        💊 Posologie spiruline optimale
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Comment doser la spiruline selon vos besoins spécifiques
                      et objectifs santé.
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
                        🌊 Avis Zinzino (partenaire Xelliss)
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-600">
                      Notre analyse du partenaire de distribution de Xelliss :
                      Zinzino.
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
