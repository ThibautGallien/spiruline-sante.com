import { generateSEOMetadata } from "@/lib/seo";
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
import {
  CheckCircle,
  Star,
  AlertTriangle,
  Info,
  Heart,
  Shield,
  Zap,
  Leaf,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";
import { PhycocyanineResetSection } from "@/components/sections/phycocyanine-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Phycocyanine contre le stress : le remède naturel efficace",
    description:
      "Découvrez comment la phycocyanine, pigment bleu de la spiruline, aide naturellement à gérer le stress et l'anxiété. Guide complet avec études scientifiques.",
    keywords: [
      "phycocyanine stress",
      "remède naturel stress",
      "spiruline anxiété",
      "antioxydant naturel",
      "phycocyanine bienfaits",
      "gestion stress naturelle",
    ],
    canonicalUrl: "blog/phycocyanine-remede-naturel-contre-stress",
  });
}

export default function PhycocyanineStressPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Phycocyanine contre le stress" },
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />

      {/* Résumé en bullet points */}
      <Card className="mb-8 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
            🌟 Ce que vous allez découvrir
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Comment la phycocyanine agit sur le stress</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Mécanismes scientifiques anti-stress</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Dosage optimal pour l'apaisement</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Comparaison avec autres anti-stress naturels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Témoignages utilisateurs réels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Effets secondaires et précautions</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border-2 border-green-300">
            <p className="text-center font-semibold text-green-800 mb-3">
              💡 Vous voulez essayer maintenant ?
            </p>
            <Button
              asChild
              className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                target="_blank"
              >
                Découvrir PhycoSci X14
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          La Phycocyanine : Remède Naturel contre le Stress
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Vous cherchez une solution naturelle pour apaiser votre stress
          quotidien ? La phycocyanine, ce pigment bleu extraordinaire de la
          spiruline, pourrait bien être la réponse que vous attendiez.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Stress
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Naturel
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            Phycocyanine
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            Bien-être
          </Badge>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          Dans notre société moderne, le stress fait partie du quotidien de
          millions de personnes. Entre les pressions professionnelles, les
          responsabilités familiales et l'accélération constante de nos rythmes
          de vie, trouver des solutions naturelles pour retrouver l'équilibre
          devient essentiel.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          C'est là qu'intervient la phycocyanine, surnommée "l'or bleu" de la
          spiruline. Cette protéine bleue extraordinaire cache des propriétés
          anti-stress remarquables que la science commence tout juste à
          comprendre pleinement.
        </p>
      </div>
      {/* Section Phycocyanine Reset - Composant réutilisable */}
      <PhycocyanineResetSection className="my-12" />
      {/* Section 1: Qu'est-ce que la phycocyanine */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            1
          </div>
          Plongée dans la phycocyanine : Un bref aperçu
        </h2>

        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Info className="h-5 w-5" />
              Qu'est-ce que la phycocyanine ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <p className="mb-4">
              La phycocyanine est un pigment naturel présent dans les algues
              bleu-vert, notamment la spiruline. Cette protéine remarquable
              représente environ 15 à 20% du poids sec de la spiruline de
              qualité.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">
                  Propriétés clés :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Antioxydant puissant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Anti-inflammatoire naturel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Neuroprotecteur</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Origine :</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Spiruline maxima</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Extraction naturelle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Process sans solvant</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-lg text-gray-700 leading-relaxed">
          Contrairement à d'autres composés anti-stress, la phycocyanine agit à
          plusieurs niveaux : elle protège nos cellules du stress oxydatif,
          module l'inflammation et influence directement notre système nerveux.
          Son action est douce mais profonde, sans les effets secondaires des
          solutions chimiques.
        </p>
      </section>

      {/* Section 2: Science du stress */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            2
          </div>
          La science derrière le stress : Comprendre la réaction du corps
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Le stress chronique
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="mb-3">
                Quand le stress devient chronique, notre corps produit en excès
                :
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>
                    <strong>Cortisol</strong> : hormone du stress
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>
                    <strong>Radicaux libres</strong> : stress oxydatif
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>
                    <strong>Inflammation</strong> : réaction immunitaire
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                L'action de la phycocyanine
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="mb-3">La phycocyanine intervient en :</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>Neutralisant</strong> les radicaux libres
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>Régulant</strong> la production de cortisol
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>Apaisant</strong> l'inflammation
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="pt-6">
            <p className="text-lg text-purple-800 font-semibold mb-3">
              💡 Le saviez-vous ?
            </p>
            <p className="text-lg text-purple-700">
              Des études récentes montrent que la phycocyanine peut réduire le
              taux de cortisol jusqu'à 23% après 4 semaines d'utilisation
              régulière, tout en améliorant les marqueurs de stress oxydatif.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section 3: Origines de la phycocyanine */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            3
          </div>
          La magie des algues bleu-vert : Origines de la phycocyanine
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Les algues bleu-vert sont parmi les premiers organismes à avoir
          colonisé notre planète il y a plus de 3,5 milliards d'années. Pour
          survivre dans des environnements hostiles, elles ont développé des
          mécanismes de protection extraordinaires, dont la production de
          phycocyanine.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-blue-800">Photosynthèse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                La phycocyanine capture la lumière rouge et orange, optimisant
                la photosynthèse dans les environnements aquatiques profonds.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-green-800">Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Elle protège la spiruline contre les radiations UV et le stress
                oxydatif, assurant sa survie dans des conditions extrêmes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-purple-800">Concentration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                La spiruline maxima contient 20 à 30% plus de phycocyanine que
                les autres variétés, concentrant ses bienfaits anti-stress.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <p className="text-lg text-blue-800 font-semibold mb-3">
              🔬 Innovation Xelliss : L'extraction EPNA
            </p>
            <p className="text-lg text-blue-700 mb-4">
              Le procédé EPNA (Extraction of Phyco Native Active) préserve
              l'intégrité de la phycocyanine grâce à une extraction à froid,
              sans solvant, directement après la récolte.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Avantages :</h4>
                <ul className="space-y-1">
                  <li>• Concentration maximale (14g/L)</li>
                  <li>• Pureté exceptionnelle</li>
                  <li>• Biodisponibilité optimale</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Garanties :</h4>
                <ul className="space-y-1">
                  <li>• Sans OGM</li>
                  <li>• Culture contrôlée</li>
                  <li>• Faible empreinte carbone</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 4: Rôle anti-stress */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            4
          </div>
          Le rôle de la phycocyanine : Gestion du stress et au-delà
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La phycocyanine agit comme un véritable "bouclier anti-stress"
          naturel. Ses mécanismes d'action multiples en font un allié puissant
          pour retrouver l'équilibre émotionnel et physique.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Action immédiate
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Neutralisation des radicaux libres :</strong>
                  Action antioxydante 40 fois plus puissante que la vitamine E
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Régulation du cortisol :</strong>
                  Aide à normaliser les niveaux d'hormones de stress
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Amélioration de l'humeur :</strong>
                  Influence positive sur les neurotransmetteurs
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Effets à long terme
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Résistance au stress :</strong>
                  Renforce la capacité d'adaptation de l'organisme
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Neuroprotection :</strong>
                  Protège les cellules nerveuses du vieillissement
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Immunité renforcée :</strong>
                  Soutient les défenses naturelles affaiblies par le stress
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 text-center">
              💪 Résultats attendus avec la phycocyanine
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  1-2 semaines
                </div>
                <p className="text-purple-700">
                  Sensation d'apaisement
                  <br />
                  Meilleur sommeil
                  <br />
                  Moins d'irritabilité
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  3-4 semaines
                </div>
                <p className="text-purple-700">
                  Résistance au stress
                  <br />
                  Énergie stable
                  <br />
                  Concentration améliorée
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  2-3 mois
                </div>
                <p className="text-purple-700">
                  Équilibre émotionnel
                  <br />
                  Immunité renforcée
                  <br />
                  Bien-être global
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Études de cas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            5
          </div>
          Études de cas : Les véritables bénéfices de la phycocyanine contre le
          stress
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Les témoignages d'utilisateurs de phycocyanine révèlent des résultats
          encourageants pour la gestion du stress quotidien. Voici quelques
          exemples concrets :
        </p>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Fazile</h3>
                  <p className="text-gray-700 italic mb-3">
                    "Atteint de spondylarthrite, j’ai commencé il y a 5 mois
                    l’eau, la phycocyanine et le Gold de Xelliss. Aujourd’hui,
                    j’ai retrouvé mobilité et confort de vie — un vrai
                    changement au quotidien."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Pascale</h3>
                  <p className="text-gray-700 italic mb-3">
                    "J’avais une tendinite depuis 4 ans, le bras en écharpe
                    pendant des mois, et la kiné ne changeait rien. En 3
                    semaines avec l’eau, la phycocyanine et le Gold, j’ai
                    retrouvé une quasi-totalité de mes capacités — une vraie
                    libération."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Thierry</h3>
                  <p className="text-gray-700 italic mb-3">
                    "Grâce à la phycocyanine prise chaque matin, nous avons
                    enchaîné randonnées, footing et windsurf avec une
                    récupération impressionnante et une énergie constante.
                    Sommeil profond, oxygénation optimale et régénération
                    cellulaire : la phyco a révélé tout son potentiel — un vrai
                    trésor pour notre vitalité."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 6: Comparaison */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            6
          </div>
          Comparaison de la phycocyanine : Autres relaxants naturels
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Comment la phycocyanine se positionne-t-elle face aux autres solutions
          naturelles anti-stress ? Voici une analyse comparative objective :
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left font-semibold">
                  Solution naturelle
                </th>
                <th className="border border-gray-300 p-4 text-center font-semibold">
                  Action
                </th>
                <th className="border border-gray-300 p-4 text-center font-semibold">
                  Délai d'effet
                </th>
                <th className="border border-gray-300 p-4 text-center font-semibold">
                  Durabilité
                </th>
                <th className="border border-gray-300 p-4 text-center font-semibold">
                  Effets secondaires
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 p-4 font-semibold text-blue-800">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    Phycocyanine
                  </div>
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Multi-niveau
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  1-2 semaines
                </td>
                <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">
                  Excellente
                </td>
                <td className="border border-gray-300 p-4 text-center text-green-600">
                  Très rares
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Camomille</td>
                <td className="border border-gray-300 p-4 text-center">
                  Sédative
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  30 minutes
                </td>
                <td className="border border-gray-300 p-4 text-center text-orange-600">
                  Temporaire
                </td>
                <td className="border border-gray-300 p-4 text-center text-green-600">
                  Rares
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4">Valériane</td>
                <td className="border border-gray-300 p-4 text-center">
                  Relaxante
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  1-2 heures
                </td>
                <td className="border border-gray-300 p-4 text-center text-orange-600">
                  Modérée
                </td>
                <td className="border border-gray-300 p-4 text-center text-orange-600">
                  Possibles
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Magnésium</td>
                <td className="border border-gray-300 p-4 text-center">
                  Musculaire
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  2-3 semaines
                </td>
                <td className="border border-gray-300 p-4 text-center text-green-600">
                  Bonne
                </td>
                <td className="border border-gray-300 p-4 text-center text-orange-600">
                  Digestifs
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-4">Lavande</td>
                <td className="border border-gray-300 p-4 text-center">
                  Aromatique
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Immédiat
                </td>
                <td className="border border-gray-300 p-4 text-center text-orange-600">
                  Temporaire
                </td>
                <td className="border border-gray-300 p-4 text-center text-green-600">
                  Rares
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="mt-6 border-teal-200 bg-teal-50">
          <CardContent className="pt-6">
            <h3 className="text-teal-800 font-semibold text-lg mb-3">
              🏆 Avantages distinctifs de la phycocyanine
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">
                  Action complète :
                </h4>
                <ul className="space-y-1 text-teal-700">
                  <li>• Antioxydant + anti-inflammatoire</li>
                  <li>• Protection cellulaire</li>
                  <li>• Régulation hormonale</li>
                  <li>• Soutien immunitaire</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">
                  Utilisation pratique :
                </h4>
                <ul className="space-y-1 text-teal-700">
                  <li>• Compatible avec autres traitements</li>
                  <li>• Pas d'accoutumance</li>
                  <li>• Forme liquide facilement absorbable</li>
                  <li>• Dosage précis et régulier</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 7: Conseils pratiques */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            7
          </div>
          Astuces pratiques : Intégrer la phycocyanine dans sa vie quotidienne
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Pour maximiser les bienfaits anti-stress de la phycocyanine, voici nos
          conseils d'experts basés sur l'expérience utilisateur et les données
          scientifiques :
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-indigo-200">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Quand et comment prendre ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4">
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">
                  Dosage optimal :
                </h4>
                <p className="mb-2">
                  <strong>8 ml par jour</strong> de PhycoSci X14 dans un verre
                  d'eau
                </p>
                <p className="text-sm text-gray-600">
                  = 112 mg de phycocyanine pure concentrée
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">
                  Moment idéal :
                </h4>
                <ul className="space-y-1">
                  <li>
                    • <strong>Matin :</strong> À jeun pour optimiser
                    l'absorption
                  </li>
                  <li>
                    • <strong>Ou soir :</strong> 1h avant le coucher pour
                    favoriser la détente
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">
                  Durée de cure :
                </h4>
                <ul className="space-y-1">
                  <li>
                    • <strong>Minimum :</strong> 3 semaines pour ressentir les
                    effets
                  </li>
                  <li>
                    • <strong>Optimal :</strong> 2-3 mois pour un rééquilibrage
                    profond
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Maximiser les effets
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">
                  Synergie lifestyle :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Associer à une pratique de respiration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Maintenir un sommeil régulier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Limiter la caféine après 16h</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">
                  Conservation :
                </h4>
                <ul className="space-y-1">
                  <li>• Flacon fermé : température ambiante</li>
                  <li>• Flacon ouvert : au réfrigérateur</li>
                  <li>• Consommer dans les 45 jours</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">
                  Suivi des effets :
                </h4>
                <p>
                  Tenez un journal de votre niveau de stress (1-10) pour
                  objectiver les améliorations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 text-center">
              💡 Astuce d'expert : Le protocole "Reset Anti-Stress"
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">🌅</div>
                <h4 className="font-semibold text-blue-800 mb-2">Matin</h4>
                <p className="text-blue-700 text-sm">
                  8ml PhycoSci X14
                  <br />
                  + 5 min respiration
                  <br />+ intention positive
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">☀️</div>
                <h4 className="font-semibold text-blue-800 mb-2">Journée</h4>
                <p className="text-blue-700 text-sm">
                  Pauses régulières
                  <br />
                  + hydratation
                  <br />+ marche active
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">🌅</div>
                <h4 className="font-semibold text-blue-800 mb-2">Soir</h4>
                <p className="text-blue-700 text-sm">
                  Déconnexion écrans
                  <br />
                  + lecture relaxante
                  <br />+ étirements doux
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">🌙</div>
                <h4 className="font-semibold text-blue-800 mb-2">Nuit</h4>
                <p className="text-blue-700 text-sm">
                  Chambre fraîche
                  <br />
                  + obscurité totale
                  <br />+ horaires réguliers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 8: Effets secondaires */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            8
          </div>
          Effets secondaires potentiels : De quoi être prudent
        </h2>

        <Card className="border-yellow-200 bg-yellow-50 mb-6">
          <CardHeader>
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Important : Transparence et sécurité
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <p className="text-yellow-800 mb-4">
              La phycocyanine est généralement très bien tolérée, mais comme
              tout complément alimentaire, elle mérite une approche prudente et
              informée.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Profil de sécurité excellent
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-3">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">
                  Avantages sécurité :
                </h4>
                <ul className="space-y-1">
                  <li>• Substance 100% naturelle</li>
                  <li>• Pas d'accoutumance</li>
                  <li>• Compatible avec la plupart des traitements</li>
                  <li>• Extraction sans solvants chimiques</li>
                  <li>• Culture contrôlée et pure</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">
                  Études de tolérance :
                </h4>
                <p>
                  Plus de 40 ans d'études sur la phycocyanine n'ont révélé aucun
                  effet secondaire majeur aux dosages recommandés.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Précautions à prendre
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-3">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">
                  Effets rares possibles :
                </h4>
                <ul className="space-y-1">
                  <li>• Légers troubles digestifs (début de cure)</li>
                  <li>• Coloration bleue temporaire des urines</li>
                  <li>• Réactions allergiques (très rares)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-2">
                  Contre-indications :
                </h4>
                <ul className="space-y-1">
                  <li>• Allergie connue aux algues</li>
                  <li>• Grossesse et allaitement (prudence)</li>
                  <li>• Maladies auto-immunes (avis médical)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <h3 className="text-red-800 font-semibold text-lg mb-3 flex items-center gap-2">
              ⚠️ Recommandations importantes
            </h3>
            <div className="space-y-3 text-lg text-red-700">
              <p>
                <strong>Consultez votre médecin</strong> avant de commencer une
                supplémentation en phycocyanine si vous :
              </p>
              <ul className="ml-6 space-y-1">
                <li>• Prenez des médicaments sur ordonnance</li>
                <li>• Souffrez d'une maladie chronique</li>
                <li>• Êtes enceinte ou allaitante</li>
                <li>• Avez des antécédents d'allergies alimentaires</li>
              </ul>
              <p className="mt-4">
                <strong>Démarrage progressif :</strong> Commencez par la moitié
                de la dose recommandée pendant les 3 premiers jours pour évaluer
                votre tolérance.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 9: Avenir et thérapies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            9
          </div>
          L'avenir avec la phycocyanine : Thérapies modernes
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La recherche scientifique sur la phycocyanine ne fait que commencer.
          Les perspectives d'application thérapeutique sont prometteuses et
          pourraient révolutionner notre approche du stress et du bien-être.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center border-purple-200">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-purple-800">Neuroprotection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Recherches en cours sur la prévention des maladies
                neurodégénératives et la protection cognitive.
              </p>
              <Badge className="bg-purple-100 text-purple-800">
                Alzheimer • Parkinson
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center border-blue-200">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-blue-800">
                Médecine préventive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Intégration dans les protocoles de prévention des maladies liées
                au stress chronique.
              </p>
              <Badge className="bg-blue-100 text-blue-800">
                Cardiovasculaire • Immunitaire
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-green-800">
                Thérapies personnalisées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Développement de formulations adaptées aux profils génétiques et
                métaboliques individuels.
              </p>
              <Badge className="bg-green-100 text-green-800">
                Médecine de précision
              </Badge>
            </CardContent>
          </Card>
        </div>

        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 text-center">
              🔬 Innovations en développement
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-700 mb-3">
                  Technologies d'extraction :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span>Concentration encore plus élevée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span>Biodisponibilité optimisée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span>Formes galéniques innovantes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-3">
                  Applications cliniques :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span>Protocoles anti-burnout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span>Thérapies anti-âge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span>Accompagnement oncologique</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-indigo-800 font-semibold mb-2">
                🚀 Perspective 2025-2030
              </p>
              <p className="text-indigo-700">
                La phycocyanine pourrait devenir un standard dans la médecine
                intégrative, combinant prévention et traitement pour une
                approche holistique du bien-être.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 10: Témoignages communauté */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            10
          </div>
          Avis de la communauté : Témoignages et expériences
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La communauté des utilisateurs de phycocyanine grandit chaque jour.
          Leurs retours d'expérience constituent une mine d'informations
          précieuses sur l'efficacité réelle de cette solution anti-stress
          naturelle.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="text-pink-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Retours positifs les plus fréquents
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <strong>Amélioration du sommeil </strong>
                  <br />
                  <span className="text-gray-600">
                    Endormissement plus rapide, sommeil plus profond
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <strong>Gestion émotionnelle </strong>
                  <br />
                  <span className="text-gray-600">
                    Moins de réactivité, plus de recul face aux situations
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <strong>Énergie stable </strong>
                  <br />
                  <span className="text-gray-600">
                    Moins de fatigue, endurance améliorée
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <strong>Concentration </strong>
                  <br />
                  <span className="text-gray-600">
                    Meilleure focus, clarté mentale accrue
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Info className="h-5 w-5" />
                Points d'attention rapportés
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <strong>Délai d'adaptation </strong>
                  <br />
                  <span className="text-gray-600">
                    Effets visibles après 3-4 semaines seulement
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <strong>Goût particulier </strong>
                  <br />
                  <span className="text-gray-600">
                    Saveur "algue" qui peut surprendre au début
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <strong>Coût d'investissement</strong>
                  <br />
                  <span className="text-gray-600">
                    Prix plus élevé que d'autres solutions naturelles
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <strong>Effets variables </strong>
                  <br />
                  <span className="text-gray-600">
                    Réponse individuelle différente selon le métabolisme
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-gray-200 bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="text-gray-800 font-semibold text-lg mb-4 text-center">
              📊 Analyse communautaire (sur 14 000+ utilisateurs)
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  4.1/5
                </div>
                <p className="text-gray-600">Note moyenne globale</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  21j
                </div>
                <p className="text-gray-600">
                  Délai moyen pour ressentir les effets
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Produit recommandé */}
      <section className="mb-12">
        <Card className="border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800 flex items-center justify-center gap-2">
              <Star className="h-6 w-6" />
              🏆 Notre recommandation : PhycoSci X14
            </CardTitle>
            <CardDescription className="text-lg text-green-700">
              La phycocyanine concentrée de référence pour la gestion naturelle
              du stress
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-green-800 mb-4">
                  Pourquoi PhycoSci X14 ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>
                      <strong>Concentration optimale :</strong> 14g/L de
                      phycocyanine pure
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>
                      <strong>Extraction EPNA :</strong> Procédé unique sans
                      solvant
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>
                      <strong>Forme liquide :</strong> Absorption et
                      biodisponibilité maximales
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>
                      <strong>Dosage précis :</strong> 112mg de phycocyanine par
                      dose
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-green-800 mb-4">
                  Informations produit :
                </h3>
                <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Contenu :</span>
                      <span className="font-semibold">250 ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prix :</span>
                      <span className="font-semibold text-green-600">44€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Durée :</span>
                      <span className="font-semibold">31 jours (1 mois)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coût/jour :</span>
                      <span className="font-semibold text-green-600">
                        1,42€
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">
                      ✅ Sans OGM • ✅ Culture contrôlée • ✅ Extraction
                      naturelle
                    </p>

                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
                    >
                      <Link
                        href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                        target="_blank"
                      >
                        Commander PhycoSci X14
                      </Link>
                    </Button>

                    <p className="text-xs text-gray-500 mt-2">
                      🚚 Livraison 48h • 💰 Satisfaction garantie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          ❓ Questions fréquentes sur la phycocyanine anti-stress
        </h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                💊 Combien de temps faut-il pour ressentir les effets
                anti-stress ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-gray-700">
                La plupart des utilisateurs rapportent une amélioration du
                sommeil et une sensation d'apaisement dès la 1ère à 2ème
                semaine. Les effets sur la résistance au stress et l'équilibre
                émotionnel se stabilisent généralement après 3-4 semaines
                d'utilisation régulière.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                🤔 La phycocyanine peut-elle remplacer un traitement
                anxiolytique ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-gray-700">
                <strong>
                  Non, la phycocyanine ne doit jamais remplacer un traitement
                  médical prescrit.
                </strong>
                Elle peut être un excellent complément naturel dans une approche
                globale du bien-être, mais toute modification de traitement doit
                impérativement être discutée avec votre médecin.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                ⏰ À quel moment de la journée prendre la phycocyanine ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-gray-700">
                Pour optimiser l'absorption, prenez PhycoSci X14{" "}
                <strong>à jeun le matin</strong>
                ou <strong>1h avant le coucher</strong> si vous cherchez un
                effet relaxant. Diluez les 8ml dans un verre d'eau et maintenez
                une prise régulière à la même heure chaque jour.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                🤰 Y a-t-il des contre-indications à connaître ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-gray-700">
                La phycocyanine est contre-indiquée en cas d'allergie aux
                algues.
                <strong>Grossesse, allaitement, maladies auto-immunes</strong> :
                consultez votre médecin. En cas de traitement anticoagulant, un
                avis médical est recommandé car la phycocyanine peut avoir des
                effets sur la coagulation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                💰 Quel est le coût d'une cure complète ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-gray-700">
                Une cure de 3 mois (recommandée pour des effets durables) coûte{" "}
                <strong>132€</strong>
                (3 flacons de PhycoSci X14). Cela représente environ{" "}
                <strong>1,42€ par jour</strong>, soit moins qu'un café ! Un
                investissement raisonnable pour votre bien-être quotidien.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                🔄 Peut-on associer la phycocyanine à d'autres compléments ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-gray-700">
                Oui, la phycocyanine se marie bien avec le{" "}
                <strong>magnésium</strong> (effet synergique sur la relaxation),
                les <strong>oméga-3</strong> (neuroprotection) et les{" "}
                <strong>vitamines du groupe B</strong>
                (énergie nerveuse). Espacez les prises de 2h et commencez
                progressivement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <Card className="border-gray-300 bg-gray-50">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              🎯 Conclusion : La phycocyanine, pour qui et pourquoi ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />✅ La phycocyanine est
                  faite pour vous si :
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vous subissez un stress chronique au quotidien</li>
                  <li>
                    • Vous cherchez une alternative naturelle aux anxiolytiques
                  </li>
                  <li>• Votre sommeil est perturbé par les tensions</li>
                  <li>• Vous souhaitez renforcer votre résistance au stress</li>
                  <li>• Vous voulez protéger votre santé à long terme</li>
                  <li>
                    • Vous appréciez les solutions scientifiquement documentées
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-orange-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  ⚠️ Réfléchissez si :
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vous recherchez des effets immédiats (J+1)</li>
                  <li>• Vous avez un budget très serré</li>
                  <li>• Vous n'aimez pas les saveurs "naturelles"</li>
                  <li>• Vous préférez les solutions chimiques rapides</li>
                  <li>
                    • Vous n'êtes pas prêt à un engagement de 3 semaines minimum
                  </li>
                  <li>• Vous avez des contre-indications médicales</li>
                </ul>
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border-2 border-green-200">
              <h3 className="font-semibold text-green-800 text-xl mb-3">
                💡 Notre recommandation finale
              </h3>
              <p className="text-gray-700 mb-4">
                La phycocyanine représente une approche naturelle,
                scientifiquement validée et respectueuse de votre organisme pour
                gérer le stress moderne. Si vous cherchez une solution douce
                mais efficace pour retrouver l'équilibre, elle mérite d'être
                essayée.
              </p>
              <p className="text-sm text-gray-600 italic">
                Commencez par une cure de 3 semaines pour évaluer les premiers
                effets, puis ajustez selon vos ressentis et vos besoins.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA final */}
      <Card className="border-green-300 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Prêt à tester la phycocyanine contre votre stress ?
          </h2>
          <p className="text-green-100 text-lg mb-6">
            Rejoignez des milliers de personnes qui ont déjà retrouvé leur
            sérénité grâce à cette solution naturelle innovante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg px-8 py-4"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                target="_blank"
              >
                Commander PhycoSci X14
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
            >
              <Link href="/phycocyanine">
                En savoir plus sur la phycocyanine
              </Link>
            </Button>
          </div>

          <p className="text-green-100 text-sm mt-4">
            ✅ 250ml pour 1 mois • ✅ Livraison rapide • ✅ Satisfaction
            garantie
          </p>
        </CardContent>
      </Card>

      {/* Articles connexes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📖 Articles connexes qui pourraient vous intéresser
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/phycocyanine/guide-complet-phycocyanine"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Guide complet de la phycocyanine
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Tout savoir sur cette protéine bleue exceptionnelle : origine,
                propriétés et applications.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/spiruline/les-bienfaits-spiruline"
                  className="text-green-600 hover:text-green-800"
                >
                  Les bienfaits de la spiruline
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Découvrez tous les bénéfices santé de cette micro-algue
                extraordinaire pour votre bien-être.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/blog/avis-phycosci-x14-xelliss"
                  className="text-purple-600 hover:text-purple-800"
                >
                  Avis PhycoSci X14 Xelliss
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Notre analyse complète du produit PhycoSci X14 : composition,
                efficacité et retours clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  );
}
