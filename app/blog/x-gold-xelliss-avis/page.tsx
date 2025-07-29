import { generateSEOMetadata, generateArticleSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Leaf,
  Shield,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SpirulineResetSection } from "@/components/sections/spiruline-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "X Gold Xelliss : Avis, bienfaits et conseils d'utilisation",
    description:
      "Découvrez X Gold de Xelliss, un complément alimentaire associant curcuma et pipérine pour soutenir vos défenses, offrir des bienfaits antioxydants et une assimilation optimale.",
    keywords: [
      "X Gold Xelliss",
      "curcuma pipérine",
      "complément alimentaire",
      "antioxydant",
      "système immunitaire",
      "Xelliss avis",
      "bienfaits curcuma",
      "pipérine absorption",
    ],
    canonicalUrl: "blog/x-gold-xelliss-avis",
  });
}

export default function XGoldXellissAvis() {
  const articleSchema = generateArticleSchema({
    title: "X Gold Xelliss : Avis, bienfaits et conseils d'utilisation",
    excerpt:
      "Découvrez X Gold de Xelliss, un complément alimentaire associant curcuma et pipérine pour soutenir vos défenses, offrir des bienfaits antioxydants et une assimilation optimale.",
    datePublished: "2025-01-08",
    author: "Thibaut",
    category: "Compléments Alimentaires",
    url: "blog/x-gold-xelliss-avis",
  });

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "X Gold Xelliss : Avis et bienfaits" },
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "Association Curcuma-Pipérine",
      description:
        "Une synergie unique pour maximiser l'absorption des principes actifs.",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "Effet Antioxydant Renforcé",
      description:
        "Protège l'organisme des radicaux libres et soutient le système immunitaire.",
      color: "text-blue-600",
    },
    {
      icon: Zap,
      title: "Formule Liquide Innovante",
      description:
        "Pratique à utiliser et rapidement assimilable, idéale pour votre routine quotidienne.",
      color: "text-orange-600",
    },
    {
      icon: Heart,
      title: "Qualité et Pureté",
      description:
        "Des ingrédients rigoureusement sélectionnés, sans solvants ni additifs chimiques.",
      color: "text-purple-600",
    },
  ];

  const testimonials = [
    {
      name: "Catherine",
      duration: "Après 3 mois d'utilisation",
      issue:
        "Nausées, maux de tête et troubles digestifs récurrents depuis près de 20 ans",
      result:
        "Net soulagement, notamment au niveau de ses épaules. Retrouvé la joie de vivre sans nausées ni maux de tête.",
      products: "eau, phycocyanine et X Gold + Biome",
      satisfaction: "absolument ravie",
      rating: 5,
    },
    {
      name: "Bernard",
      age: "70 ans",
      profession: "Professeur de fitness et de karaté, toujours en activité",
      issue:
        "Opération des tendons épaules et fractures de doigts, avec douleur chroniques",
      result:
        "Disparition quasi complète des douleurs aux doigts et atténuation de celles de l'épaule",
      products: "move, phycocyanine et gold",
      duration: "Prise depuis 3 mois",
      timeline: "Débuts des résultats après deux mois",
      rating: 5,
    },
  ];

  return (
    <>
      <StructuredData data={articleSchema} />

      <article className="container px-4 md:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Avis Expert
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Curcuma Premium
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            X Gold Xelliss :
            <span className="text-green-600"> Avis, bienfaits</span>
            <span className="text-blue-600"> et conseils d'utilisation</span>
          </h1>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
            <span>
              Par <strong>Thibaut</strong>
            </span>
            <span>•</span>
            <span>8 janvier 2025</span>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Découvrez X Gold de Xelliss, un complément alimentaire associant
            curcuma et pipérine pour soutenir vos défenses, offrir des bienfaits
            antioxydants et une assimilation optimale.
          </p>

          {/* CTA Principales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-2xl mr-2">🌿</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    X GOLD XELLISS
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Curcuma + Pipérine</strong>
                  <br />
                  <span className="text-green-600">
                    Formule liquide • Absorption optimisée • Qualité premium
                  </span>
                </p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 w-full text-lg font-semibold py-3"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/xelliss-products/302790"
                    target="_blank"
                  >
                    🛒 Découvrir X Gold
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Qu'est-ce que le X Gold Section */}
          <section className="mb-12" id="quest-ce-que-x-gold">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Qu'est-ce que le X Gold ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="/X-Gold-Xelliss.webp"
                    alt="X Gold Xelliss - Complément curcuma et pipérine en formule liquide"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg">
                      <span className="font-semibold text-green-700">
                        X Gold Xelliss
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Le X Gold est l'un des produits phares de Xelliss, développé
                  pour exploiter au maximum les propriétés bénéfiques du
                  curcuma. Grâce à sa formule innovante, riche en curcumine
                  (extrait aqueux de curcuma) et en pipérine (poivre noir), ce
                  complément alimentaire se distingue par :
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <strong className="text-gray-900">
                        Des ingrédients de qualité :
                      </strong>
                      <span className="text-gray-700">
                        {" "}
                        Chaque composant est soigneusement sélectionné pour
                        maintenir la pureté et la puissance du produit.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <strong className="text-gray-900">
                        Une formule liquide :
                      </strong>
                      <span className="text-gray-700">
                        {" "}
                        Le X Gold se présente sous forme de solution concentrée,
                        facile à doser et à intégrer dans votre routine
                        quotidienne.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <strong className="text-gray-900">
                        Des bénéfices sur la santé :
                      </strong>
                      <span className="text-gray-700">
                        {" "}
                        Soutien du système immunitaire, action antioxydante et
                        meilleure biodisponibilité grâce à la pipérine.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl">
                  <p className="text-gray-700 font-medium">
                    Cette synergie d'ingrédients naturels permet au X Gold de se
                    positionner comme un allié incontournable pour un bien-être
                    global.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section Spiruline Reset - Composant réutilisable */}
          <SpirulineResetSection className="my-12" />
          {/* Avantages et bienfaits Section */}
          <section className="mb-12" id="avantages-bienfaits">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Avantages et bienfaits du X Gold
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              L'association du curcuma et de la pipérine dans le X Gold procure
              de nombreux bienfaits pour l'organisme :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-700">
                  Soutien immunitaire
                </h3>
                <p className="text-gray-700">
                  Le curcuma est reconnu pour contribuer au bon fonctionnement
                  du système immunitaire.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Propriétés antioxydantes
                </h3>
                <p className="text-gray-700">
                  Les curcuminoïdes contenus dans le curcuma aident à lutter
                  contre le stress oxydatif et à protéger les cellules de
                  l'organisme.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">
                  Absorption renforcée
                </h3>
                <p className="text-gray-700">
                  La pipérine augmente considérablement la biodisponibilité des
                  principes actifs du curcuma, garantissant ainsi une efficacité
                  optimale.
                </p>
              </div>

              <div className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-orange-700">
                  Formule naturelle et respectueuse
                </h3>
                <p className="text-gray-700">
                  Sans solvants, ni émulsifiants, ni additifs chimiques, le X
                  Gold bénéficie d'une composition pure, idéale pour ceux qui
                  recherchent une approche de santé naturelle.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 text-lg font-medium text-center">
                Ces effets positifs font du X Gold un choix privilégié pour
                quiconque souhaite améliorer sa qualité de vie grâce à un
                soutien nutritionnel complet et efficace.
              </p>
            </div>
          </section>

          {/* Comment utiliser le X Gold Section */}
          <section className="mb-12" id="comment-utiliser">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment utiliser le X Gold ?
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Pour une utilisation optimale, il est conseillé de respecter les
              recommandations de Xelliss :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="border-l-4 border-green-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">
                      Posologie standard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Selon vos besoins, il est souvent suggéré de prendre une
                      dose quotidienne (environ 8 ml), diluée dans un verre
                      d'eau.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">
                      Régularité
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Comme tout complément alimentaire, une prise régulière est
                      recommandée pour observer des résultats concrets.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700">
                      Hygiène de vie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      L'intégrer dans une routine quotidienne, associée à une
                      alimentation équilibrée et à une activité physique
                      modérée, permet de décupler ses bénéfices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-orange-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-700">
                      Conseils personnalisés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Pour plus de précision, référez-vous au guide
                      d'utilisation de Xelliss ou demandez l'avis d'un
                      professionnel de santé, surtout si vous avez des
                      conditions médicales particulières.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Où acheter Section */}
          <section className="mb-12" id="ou-acheter">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Où acheter le X Gold ?
            </h2>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Le X Gold n'est pas disponible en pharmacie ou dans le commerce
                traditionnel. Pour vous le procurer :
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Uniquement en ligne via un conseiller Xelliss
                </h3>
                <p className="text-gray-700">
                  Un conseiller Xelliss saura vous orienter vers le produit
                  correspondant le mieux à vos besoins.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">
                    Tarifs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">
                      Bouteille de X Gold (250 ml)
                    </span>
                    <span className="text-xl font-bold text-green-600">
                      74 € (TTC)
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Abonnement mensuel</span>
                    <span className="text-xl font-bold text-green-600">
                      52 € (TTC)
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Chaque bouteille de 250 ml vous permettra de profiter
                    quotidiennement des bienfaits du X Gold, grâce à sa
                    concentration en curcuma et pipérine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700">
                    Commander maintenant
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    En tant que conseiller Xelliss, je peux vous rediriger vers
                    le lien adéquat pour commander votre première bouteille de X
                    Gold et ainsi débuter votre nouvelle routine bien-être.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-lg font-semibold py-3"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/xelliss-products/302790"
                      target="_blank"
                    >
                      🛒 Commander X Gold
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 font-medium text-center">
                ⚠️ Avant toute prise de complément alimentaire, pensez à
                consulter un professionnel de santé.
              </p>
            </div>
          </section>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              🌟 Prêt à découvrir les bienfaits du X Gold ?
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              Rejoignez les milliers de personnes qui ont déjà adopté cette
              formule innovante pour leur bien-être quotidien
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
                asChild
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/xelliss-products/302790"
                  target="_blank"
                >
                  🛒 Commander X Gold
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
