import { generateSEOMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Shield,
  Zap,
  Droplets,
  Users,
  ArrowRight,
  Target,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Carafe filtrante Xelliss (XelliWater) avis",
    description:
      "Découvrez la carafe filtrante Xelliss : une solution innovante pour purifier votre eau et bénéficier d'une eau pure pour votre santé. 🌱",
    keywords: [
      "carafe xelliss",
      "xelliwater",
      "carafe filtrante xelliss",
      "xelliss avis",
      "eau alcaline",
      "filtre eau",
    ],
    canonicalUrl: "blog/carafe-filtrante-xelliss-xelliwater",
  });
}

export default function XellissCarafePage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Carafe filtrante Xelliss XelliWater : test et avis" },
  ];

  const keyPoints = [
    "La carafe filtrante Xelliss purifie l'eau du robinet tout en augmentant son pH, offrant une eau alcaline bénéfique pour la santé",
    "Elle élimine jusqu'à 90 % du chlore, réduit les métaux lourds comme le plomb, et conserve des minéraux essentiels tels que le magnésium",
    "L'eau alcaline aide à rétablir l'équilibre acido-basique du corps, favorise une meilleure digestion, et contribue à une hydratation optimale",
    "Chaque cartouche XelliAlka permet de filtrer 150 litres d'eau ou de durer environ 30 jours",
    "Un choix écologique qui réduit l'utilisation de bouteilles en plastique, tout en proposant une eau au goût amélioré",
  ];

  const advantages = [
    {
      title: "Élimination du chlore",
      description:
        "Le filtre XelliAlka élimine jusqu'à 90 % du chlore présent dans l'eau, ce qui améliore le goût et la sécurité de l'eau",
      icon: <Shield className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Augmentation de l'alcalinité",
      description:
        "En alcalinisant l'eau, il aide à rétablir l'équilibre acido-basique de votre corps, contribuant à une meilleure santé digestive",
      icon: <Zap className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Réduction des métaux lourds",
      description:
        "Le système de filtration réduit les traces de métaux lourds, tels que le plomb, qui peuvent être présents dans l'eau du robinet",
      icon: <Shield className="h-5 w-5 text-purple-600" />,
    },
    {
      title: "Soutien à l'hydratation",
      description:
        "Une meilleure qualité de l'eau favorise une hydratation optimale des cellules, essentielle pour maintenir un bon niveau d'énergie",
      icon: <Droplets className="h-5 w-5 text-teal-600" />,
    },
  ];
  const usageSteps = [
    "Suivez les instructions du fabricant pour garantir une utilisation correcte et efficace",
    "Remplacez le filtre régulièrement : Le filtre XelliAlka peut traiter jusqu'à 150 litres d'eau ou durer environ 30 jours",
    "Intégrez la consommation de cette eau purifiée et alcaline dans votre routine quotidienne de santé",
    "Consultez un professionnel de santé si vous avez des besoins spécifiques ou des préoccupations",
  ];

  const testimonials = [
    {
      name: "Denise",
      text: "J’avais une tendinite depuis 4 ans, le bras en écharpe pendant des mois, et la kiné ne changeait rien. En 3 semaines avec l’eau, la phycocyanine et le Gold, j’ai retrouvé une quasi-totalité de mes capacités — une vraie libération.",
      highlight: "Amélioration tendinite",
    },
    {
      name: "Fazile",
      text: "Atteint de spondylarthrite, j’ai commencé il y a 5 mois l’eau, la phycocyanine et le Gold de Xelliss. Aujourd’hui, j’ai retrouvé mobilité et confort de vie — un vrai changement au quotidien.",
      highlight: "Mobilitée augmentée",
    },
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Carafe filtrante Xelliss (XelliWater) avis
        </h1>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            XelliWater
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Eau alcaline
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            Filtration
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            Xelliss
          </Badge>
        </div>
      </header>

      {/* Points clés */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Points Clés sur la carafe filtrante Xelliss
        </h3>

        <div className="space-y-4 mb-6">
          {keyPoints.map((point, index) => (
            <Card key={index} className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-green-800">{point}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-blue-300 bg-gradient-to-r from-blue-50 to-teal-50">
          <CardContent className="py-6 text-center">
            <p className="text-lg text-blue-800 font-semibold mb-4">
              👉 Transformez votre eau du quotidien en alliée santé avec la
              carafe filtrante Xelliss.
            </p>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-premier-kits/910685/"
                target="_blank"
              >
                Commandez votre carafe ici
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Qu'est-ce que la carafe */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Qu'est-ce que la carafe filtrante Xelliss ?
        </h3>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative h-64 md:h-full bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg flex items-center justify-center">
                <Image
                  src="/XelliWater-Xelliss.webp"
                  alt="Carafe filtrante Xelliss XelliWater"
                  width={300}
                  height={300}
                  className="object-contain max-h-48"
                />
              </div>
            </div>
            <div className="md:col-span-2 p-6">
              <p className="text-lg text-gray-700 mb-6">
                La carafe filtrante Xelliss est un système de filtration
                innovant conçu pour améliorer la qualité de l'eau potable. Grâce
                à son filtre XelliAlka, elle purifie l'eau tout en la rendant
                alcaline, offrant ainsi une solution saine et écologique pour
                votre hydratation quotidienne.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    🏆 Produit phare de Xelliss
                  </h4>
                  <p className="text-gray-700">
                    La carafe filtrante Xelliss est l'un des produits phares de
                    la marque, offrant une alternative naturelle aux filtres
                    d'eau traditionnels.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    🔬 Ingrédients du filtre XelliAlka
                  </h4>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">
                        <strong>Charbon actif :</strong> Élimine le chlore et
                        autres composés résiduels
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        <strong>Billes de céramiques :</strong> Alcalinisent
                        l'eau pour augmenter son pH
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">
                        <strong>Résine :</strong> Élimine les traces de métaux
                        lourds comme le plomb
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    ⚗️ Formule innovante + bénéfices pour la santé
                  </h4>
                  <p className="text-blue-700">
                    Cette combinaison de matériaux garantit une eau purifiée,
                    alcaline, et riche en minéraux essentiels comme le
                    magnésium, contribuant ainsi à une meilleure hydratation et
                    à un meilleur équilibre acido-basique de votre corps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Avantages et bienfaits */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Avantages et bienfaits de la carafe filtrante Xelliss
        </h3>

        <p className="text-lg text-gray-700 mb-6">
          Les bienfaits de la carafe filtrante Xelliss vont bien au-delà de
          l'amélioration de la qualité de l'eau. En offrant une eau purifiée et
          alcaline, cette carafe aide à lutter contre l'acidité et soutient
          divers aspects de votre santé.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  {advantage.icon}
                  <h4 className="font-semibold text-gray-900">
                    {advantage.title}
                  </h4>
                </div>
                <p className="text-gray-700 pl-8">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <p className="text-lg text-green-800">
              Ces effets positifs font de la carafe filtrante Xelliss un choix
              privilégié pour ceux qui cherchent à améliorer leur qualité de vie
              par une approche naturelle et efficace.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Comment utiliser */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Comment utiliser la carafe filtrante Xelliss ?
        </h3>

        <p className="text-lg text-gray-700 mb-6">
          Pour une utilisation optimale de la carafe filtrante Xelliss, voici
          les recommandations pratiques :
        </p>

        <div className="space-y-4">
          {usageSteps.map((step, index) => (
            <Card key={index} className="border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Témoignages</h3>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-green-500 bg-green-50"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg text-green-800">
                        {testimonial.name}
                      </h4>
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {testimonial.highlight}
                      </Badge>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Où acheter */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Où acheter la carafe filtrante Xelliss ?
        </h3>

        <p className="text-lg text-gray-700 mb-6">
          La carafe filtrante Xelliss n'est pas disponible en pharmacie ou dans
          les commerces traditionnels. Vous pouvez l'acheter directement en
          ligne sur le site de Xelliss ou via un conseiller de la marque, qui
          pourra vous aider à choisir le produit le plus adapté à vos besoins.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Prix et options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Pack complet
                  </h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    72€ TTC
                  </div>
                  <p className="text-blue-700 text-sm">
                    Carafe + 2 filtres XelliAlka inclus
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Abonnement mensuel
                  </h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    18€ TTC/mois
                  </div>
                  <p className="text-blue-700 text-sm">
                    Nouveau filtre chaque mois
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Contenu du pack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-green-700">Carafe de 2 litres</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-green-700">Un filtre XelliAlka</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-green-700">
                    Instructions d'utilisation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-green-700">
                    Solution écologique durable
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-purple-200 bg-purple-50">
          <CardContent className="py-6 text-center">
            <h4 className="text-xl font-semibold text-purple-800 mb-4">
              🛒 Achetez en ligne
            </h4>
            <p className="text-purple-700 mb-4">
              Pour commander votre carafe filtrante Xelliss, vous pouvez suivre
              ce lien pour passer votre première commande et profiter des
              bienfaits de l'eau filtrée et alcaline.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-premier-kits/910685/"
                target="_blank"
              >
                Commander maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="mt-6 border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <p className="text-lg text-green-800 text-center">
              En choisissant la carafe filtrante Xelliss, vous investissez dans
              une solution durable pour votre santé et pour l'environnement,
              tout en profitant d'une eau de meilleure qualité.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA final */}
      <Card className="border-green-300 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            💧 Transformez votre hydratation quotidienne
          </h2>
          <p className="text-green-100 text-lg mb-6">
            Découvrez la différence que peut faire une eau purifiée et alcaline
            sur votre bien-être général.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg px-8 py-4"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-premier-kits/910685/"
                target="_blank"
              >
                🛒 Commander la carafe Xelliss
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
            >
              <Link href="/blog/avis-xelliss-arnaque-ou-opportunite">
                📖 Lire notre avis complet Xelliss
              </Link>
            </Button>
          </div>

          <p className="text-green-100 text-sm mt-4">
            ✅ Eau alcaline purifiée • ✅ Écologique • ✅ Filtration efficace
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
                  href="/blog/avis-xelliss-arnaque-ou-opportunite"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Avis complet Xelliss
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Notre analyse complète de la société Xelliss : produits,
                business model et avis clients.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/blog/avis-phycosci-x14-xelliss"
                  className="text-green-600 hover:text-green-800"
                >
                  Test PhycoSci X14
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Notre test du produit phare de Xelliss : la phycocyanine liquide
                concentrée.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/spiruline/les-bienfaits-spiruline"
                  className="text-purple-600 hover:text-purple-800"
                >
                  Bienfaits de la spiruline
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Découvrez tous les bienfaits scientifiquement prouvés de cette
                micro-algue exceptionnelle.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  );
}
