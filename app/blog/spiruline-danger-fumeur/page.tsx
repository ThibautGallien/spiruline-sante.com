import { generateSEOMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import {
  CheckCircle,
  AlertTriangle,
  Heart,
  Shield,
  ExternalLink,
  Clock,
  Target,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Spiruline et Fumeurs : Vérité sur les Dangers et Bienfaits Réels",
    description:
      "La spiruline est-elle dangereuse pour les fumeurs ? Découvrez la vérité scientifique, les vrais bienfaits et comment l'utiliser en toute sécurité.",
    keywords: [
      "spiruline fumeur",
      "spiruline danger",
      "spiruline tabac",
      "fumeur spiruline",
      "bêta-carotène fumeur",
    ],
    canonicalUrl: "blog/spiruline-danger-fumeur",
  });
}

export default function Page() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Spiruline et Fumeurs" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Spiruline et Fumeurs : Vérité sur les Dangers et Bienfaits Réels
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            La spiruline est-elle vraiment dangereuse pour les fumeurs ?
            Découvrez la vérité scientifique et comment l'utiliser en toute
            sécurité.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Par Spirulina Health</span>
            <span>•</span>
            <span>Lecture : 8 min</span>
            <span>•</span>
            <span>Mis à jour le 20 juillet 2025</span>
          </div>
        </header>

        {/* Points clés */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center">
              🌟 Ce que vous allez découvrir :
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  La spiruline est-elle vraiment dangereuse pour les fumeurs ?
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Comment la spiruline peut aider à compenser les dégâts du
                  tabac
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Les vraies contre-indications et précautions à connaître
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Dosage et utilisation optimale pour les fumeurs</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Résultats attendus après 2-3 semaines d'utilisation</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Différence entre bêta-carotène synthétique et naturel
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-100 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold text-lg">
                🚨 Important : Aucun complément ne remplace l'arrêt du tabac
                pour votre santé !
              </p>
            </div>

            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-lg py-6"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  🛒 Découvrir A3 Spirulina Xelliss (37€ - 80 comprimés)
                  <ExternalLink className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <div className="mt-2 text-sm text-gray-600">
                ✅ Spiruline premium • 🚚 Livraison rapide • 💰 2x plus de fer
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Réponse directe */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            La Spiruline est-elle Dangereuse pour les Fumeurs ? La Vérité
          </h2>

          <Card className="mb-6 border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <p className="text-xl font-semibold text-blue-900 mb-4">
                <strong>
                  Réponse directe : Non, la spiruline n'est PAS dangereuse pour
                  les fumeurs.
                </strong>
              </p>
              <p className="text-lg text-blue-800">
                Cette idée reçue vient d'une confusion entre le bêta-carotène
                synthétique (potentiellement problématique) et le bêta-carotène
                naturel présent dans la spiruline.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            L'Origine de la Confusion
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Dans les années 1990, une étude finlandaise (ATBC Study) a montré
            une légère augmentation du risque de cancer du poumon chez les
            fumeurs prenant des{" "}
            <strong>compléments de bêta-carotène synthétique</strong> à haute
            dose (20-30mg/jour).
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <strong>Mais attention :</strong> Cette étude concernait uniquement
            le bêta-carotène de synthèse, pas celui naturellement présent dans
            la spiruline.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Pourquoi la Spiruline est Différente
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Bêta-carotène naturel</h4>
                  <p className="text-sm text-gray-600">
                    Mieux assimilé et sans les risques du synthétique
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Heart className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    Complexe d'antioxydants
                  </h4>
                  <p className="text-sm text-gray-600">
                    40+ antioxydants qui se protègent mutuellement
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Dosage modéré</h4>
                  <p className="text-sm text-gray-600">
                    2-3mg par dose vs 20-30mg dans l'étude
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pourquoi les fumeurs ont besoin */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi les Fumeurs ont Besoin de Spiruline
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Les Ravages du Tabac sur l'Organisme
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Le tabagisme expose le corps à plus de{" "}
            <strong>7 000 substances toxiques</strong> qui créent :
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <strong>Stress oxydatif massif</strong>
                  <p className="text-gray-600">
                    Production excessive de radicaux libres
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <strong>Carences nutritionnelles</strong>
                  <p className="text-gray-600">
                    Épuisement des vitamines C, E, B et du zinc
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <strong>Inflammation chronique</strong>
                  <p className="text-gray-600">
                    Détérioration des tissus pulmonaires
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <strong>Déficit immunitaire</strong>
                  <p className="text-gray-600">Système de défense affaibli</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Comment la Spiruline Aide les Fumeurs
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  💚 Compensation Nutritionnelle
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>2x plus de fer</strong> que la spiruline classique
                  </li>
                  <li>
                    <strong>Vitamines B</strong> pour réparer le métabolisme
                  </li>
                  <li>
                    <strong>Protéines complètes</strong> pour régénérer les
                    tissus
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  🛡️ Protection Antioxydante
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>Phycocyanine</strong> : Anti-inflammatoire puissant
                  </li>
                  <li>
                    <strong>Bêta-carotène naturel</strong> : Protège les
                    membranes
                  </li>
                  <li>
                    <strong>SOD</strong> : Neutralise les radicaux libres
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center">
                  🫁 Soutien Respiratoire
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <ul className="space-y-2">
                  <li>Protection des cellules pulmonaires</li>
                  <li>Amélioration de l'oxygénation</li>
                  <li>Réduction de l'inflammation respiratoire</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comment utiliser */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comment Utiliser la Spiruline quand on Fume
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Dosage Optimal pour Fumeurs
              </h3>
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="space-y-3 text-lg">
                    <div>
                      <strong>A3 Spirulina Xelliss :</strong>
                    </div>
                    <div>
                      <strong>Dose quotidienne :</strong> 4 comprimés (2g de
                      spiruline)
                    </div>
                    <div>
                      <strong>Quand :</strong> Le matin à jeun avec un grand
                      verre d'eau
                    </div>
                    <div>
                      <strong>Durée minimum :</strong> 3 mois pour des résultats
                      visibles
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Progression Recommandée
              </h3>
              <div className="space-y-3 text-lg">
                <div className="flex items-center space-x-3">
                  <Badge>Semaine 1-2</Badge>
                  <span>
                    Commencez par 2 comprimés pour habituer votre organisme
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge>Semaine 3+</Badge>
                  <span>Passez à 4 comprimés par jour</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Potentialisation avec Vitamine C
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Pour maximiser l'absorption du fer et l'effet antioxydant :
              </p>
              <ul className="text-lg text-gray-700 space-y-2 mb-6">
                <li>
                  • Prenez votre spiruline avec un{" "}
                  <strong>jus d'orange frais</strong>
                </li>
                <li>• Ou 30 minutes avant un fruit riche en vitamine C</li>
              </ul>

              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <p className="text-orange-800 font-semibold mb-2">
                    💡 Conseil d'expert
                  </p>
                  <p className="text-lg text-orange-700">
                    L'association spiruline + vitamine C peut augmenter
                    l'absorption du fer de 300% !
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bienfaits attendus */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bienfaits Attendus pour les Fumeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-green-600" />À Court Terme
                  (2-4 semaines)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>Énergie retrouvée</strong> : Moins de fatigue
                    chronique
                  </li>
                  <li>
                    <strong>Meilleure récupération</strong> : Système
                    immunitaire renforcé
                  </li>
                  <li>
                    <strong>Teint amélioré</strong> : Antioxydants qui protègent
                    la peau
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 mr-2 text-blue-600" />À Moyen Terme
                  (2-3 mois)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>Analyses sanguines</strong> : Amélioration du profil
                    lipidique
                  </li>
                  <li>
                    <strong>Capacité respiratoire</strong> : Légère amélioration
                    du souffle
                  </li>
                  <li>
                    <strong>Résistance aux infections</strong> : Moins de rhumes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contre-indications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contre-indications et Précautions
          </h2>

          <Card className="border-orange-200 bg-orange-50 mb-6">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                ⚠️ Évitez la spiruline si vous avez :
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <ul className="space-y-2">
                <li>
                  <strong>Phénylcétonurie</strong> : Maladie rare du métabolisme
                </li>
                <li>
                  <strong>Maladies auto-immunes actives</strong> : Peut stimuler
                  le système immunitaire
                </li>
                <li>
                  <strong>Allergie aux algues</strong> : Risque de réaction
                  allergique
                </li>
                <li>
                  <strong>Traitement anticoagulant</strong> : Vitamine K peut
                  interférer
                </li>
              </ul>

              <div className="mt-6 p-4 bg-orange-100 border border-orange-200 rounded">
                <p className="font-semibold text-orange-800 mb-2">
                  💊 Si vous prenez des médicaments :
                </p>
                <p className="text-orange-700">
                  Consultez votre médecin, particulièrement pour :
                  Anticoagulants (Warfarine), Immunosuppresseurs, Médicaments
                  pour la thyroïde
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Produit recommandé */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir A3 Spirulina Xelliss ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Qualité Supérieure pour les Fumeurs
              </h3>
              <ul className="text-lg text-gray-700 space-y-2 mb-6">
                <li>
                  • <strong>Spirulina maxima</strong> : 27% de protéines en plus
                  que la platensis
                </li>
                <li>
                  • <strong>2x plus de fer</strong> : Crucial pour les fumeurs
                  souvent carencés
                </li>
                <li>
                  • <strong>Culture contrôlée</strong> : Photobioréacteurs
                  fermés = pureté garantie
                </li>
                <li>
                  • <strong>Sans contaminants</strong> : Aucun métaux lourds ni
                  toxines
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Pourquoi Pas une Spiruline Basique ?
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Les fumeurs ont des besoins accrus en :
              </p>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>
                  • <strong>Fer biodisponible</strong> : Pour compenser
                  l'absorption réduite
                </li>
                <li>
                  • <strong>Antioxydants concentrés</strong> : Pour lutter
                  contre le stress oxydatif
                </li>
                <li>
                  • <strong>Pureté absolue</strong> : Éviter toute contamination
                  supplémentaire
                </li>
              </ul>
            </div>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">
                  🛒 A3 Spirulina Xelliss
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-800 mb-2">
                    37€
                  </div>
                  <div className="text-lg text-green-700">
                    pour 80 comprimés
                  </div>
                  <div className="text-sm text-green-600">
                    (20 jours à dose optimale)
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 mb-4"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    Commander A3 Spirulina Xelliss
                    <ExternalLink className="h-5 w-5 ml-2" />
                  </Link>
                </Button>

                <div className="text-sm text-green-700 space-y-1">
                  <div>✅ Livraison rapide</div>
                  <div>✅ Paiement sécurisé</div>
                  <div>✅ Spiruline premium</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  📧 Recevez nos conseils santé gratuits
                </h3>
                <p className="text-lg text-blue-700">
                  Guides exclusifs, offres spéciales et actualités santé
                  directement dans votre boîte mail
                </p>
              </div>
              <NewsletterForm variant="default" size="lg" />
            </CardContent>
          </Card>
        </section>

        {/* Vérité sur l'arrêt */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            La Vérité sur l'Arrêt du Tabac
          </h2>

          <Card className="border-red-200 bg-red-50 mb-6">
            <CardContent className="pt-6">
              <p className="text-xl font-semibold text-red-900 mb-4">
                Soyons clairs : La spiruline est un excellent soutien, mais{" "}
                <strong>rien ne remplace l'arrêt du tabac</strong>.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                La Spiruline peut Vous Aider à :
              </h3>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>✅ Réduire les effets du manque (fatigue, stress)</li>
                <li>✅ Compenser les carences nutritionnelles</li>
                <li>
                  ✅ Soutenir votre système immunitaire pendant le sevrage
                </li>
                <li>✅ Améliorer votre énergie globale</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Mais Seul l'Arrêt du Tabac Permet :
              </h3>
              <ul className="text-lg text-gray-700 space-y-2">
                <li>🎯 Régénération complète des poumons</li>
                <li>🎯 Réduction drastique du risque de cancer</li>
                <li>🎯 Amélioration majeure de l'espérance de vie</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            FAQ : Spiruline et Tabagisme
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  La spiruline peut-elle m'aider à arrêter de fumer ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  Indirectement oui. En réduisant la fatigue et en soutenant
                  votre énergie, elle peut faciliter le processus de sevrage.
                  Mais elle ne remplace pas un accompagnement spécialisé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Combien de temps pour voir les premiers effets ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  Les premiers bénéfices (énergie, vitalité) apparaissent après
                  2-3 semaines de prise régulière. Les effets sur les analyses
                  sanguines sont visibles après 2-3 mois.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Y a-t-il un risque de surdosage ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  Avec les doses recommandées (4 comprimés/jour), aucun risque.
                  La spiruline est un aliment, pas un médicament.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  La spiruline aide-t-elle vraiment les poumons ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  Des études montrent un effet protecteur sur les cellules
                  pulmonaires grâce aux antioxydants. Mais l'amélioration reste
                  modeste comparée à l'arrêt du tabac.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Puis-je associer spiruline et autres antioxydants ?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>
                  Oui, l'association avec vitamine C, vitamine E ou sélénium est
                  bénéfique et sans danger.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conclusion : Un Allié, Pas un Miracle
          </h2>

          <p className="text-xl text-gray-700 mb-6">
            La spiruline représente un soutien précieux pour les fumeurs, mais{" "}
            <strong>l'arrêt du tabac reste la priorité absolue</strong> pour
            votre santé.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">
                  Ce que la Spiruline Peut Faire :
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Compenser certaines carences nutritionnelles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Réduire le stress oxydatif</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Soutenir votre système immunitaire</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Améliorer votre énergie globale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">
                  Ce qu'elle Ne Peut Pas Faire :
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                    <span>Annuler les effets du tabac</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                    <span>Empêcher le cancer du poumon</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                    <span>Remplacer un mode de vie sain</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-8">
            <CardContent className="pt-6">
              <p className="text-xl font-semibold text-blue-900 mb-4">
                <strong>Notre recommandation :</strong> Utilisez la spiruline
                comme soutien pendant votre démarche d'arrêt du tabac, pas comme
                excuse pour continuer à fumer.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                target="_blank"
              >
                🛒 Commencer avec A3 Spirulina (37€)
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Sources Scientifiques
          </h3>
          <div className="text-lg text-gray-600 space-y-2">
            <p>
              1. Alpha-Tocopherol, Beta Carotene Cancer Prevention Study Group
              (1994). <em>New England Journal of Medicine</em>
            </p>
            <p>
              2. Karkos, P.D., et al. (2011). "Spirulina in clinical practice."{" "}
              <em>Evidence-Based Complementary Medicine</em>
            </p>
            <p>
              3. Romay, C., et al. (2003). "Antioxidant and anti-inflammatory
              properties of C-phycocyanin." <em>Inflammation Research</em>
            </p>
            <p>
              4. Wu, Q., et al. (2016). "The antioxidant, immunomodulatory
              effects of Spirulina." <em>Annals of Nutrition and Metabolism</em>
            </p>
          </div>
        </section>

        {/* Articles connexes */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Articles Connexes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">
                  <Link
                    href="/blog/spiruline-sport"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Spiruline et Sport : Performances Optimisées
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm">
                  Comment la spiruline peut améliorer vos performances sportives
                  et votre récupération.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">
                  <Link
                    href="/blog/spiruline-fer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Spiruline et Fer : Solution contre la Carence
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm">
                  Pourquoi la spiruline est une excellente source de fer et
                  comment lutter contre l'anémie.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">
                  <Link
                    href="/phycocyanine/phycocyanine-proprietes-bienfaits-applications"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Phycocyanine : Propriétés et Bienfaits
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm">
                  Découvrez les propriétés thérapeutiques de la phycocyanine, le
                  pigment bleu de la spiruline.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA final */}
        <section className="mb-12">
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Prêt à Soutenir Votre Santé Naturellement ?
                </h3>
                <p className="text-xl text-gray-700 mb-6">
                  Rejoignez des milliers de personnes qui ont choisi A3
                  Spirulina pour compenser les effets du tabac
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                      target="_blank"
                    >
                      🛒 Commander Maintenant (37€)
                      <ExternalLink className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-lg py-6 px-8"
                  >
                    <Link href="/spiruline">
                      📚 En Savoir Plus sur la Spiruline
                    </Link>
                  </Button>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  ✅ Livraison rapide • 💰 Paiement sécurisé • 🎯 Spiruline
                  premium
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
