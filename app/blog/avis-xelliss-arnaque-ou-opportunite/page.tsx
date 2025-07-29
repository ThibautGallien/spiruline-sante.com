import { generateSEOMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertTriangle,
  Info,
  Heart,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Target,
  Award,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SpirulineResetSection } from "@/components/sections/spiruline-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Avis Xelliss (ex Natura4Ever) arnaque ou bon produit ?",
    description:
      "Xelliss, simple arnaque ou vraie société ? Dans cet article je vous dévoile toute la vérité et mon avis sur la société Xelliss et ses produits",
    keywords: [
      "xelliss avis",
      "natura4ever",
      "xelliss arnaque",
      "phycosci x14",
      "spiruline xelliss",
      "mlm xelliss",
    ],
    canonicalUrl: "blog/avis-xelliss-arnaque-ou-opportunite",
  });
}

export default function XellissReviewPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Avis Xelliss : arnaque ou opportunité ?" },
  ];

  const spirulineBenefits = [
    "Renforce le système immunitaire",
    "Favorise la perte de poids",
    "Améliore la santé cardiaque",
    "Réduit le stress et l'anxiété",
    "Améliore les performances athlétiques",
  ];

  const xellissProducts = [
    {
      name: "PhycoSci X14",
      description:
        "Très certainement le produit phare de Xelliss, ce complément est produit avec la spiruline A3 de très haute qualité qui est naturellement riche en phycocyanine.",
      benefits: [
        "Lutte contre la fatigue",
        "Soutient la condition physique et les capacités de récupération",
        "Soutient le système immunitaire",
        "Lutte contre le stress oxydatif",
      ],
      image: "/PhycoSciX14-Xelliss.webp",
    },
    {
      name: "XelliWater",
      description:
        "XelliWater, c'est une carafe. Mais pas une carafe comme les autres. Son filtre unique élimine 90% du chlore, réduit les traces de métaux lourds présents dans l'eau du robinet.",
      benefits: [
        "Élimine 90% du chlore",
        "Réduit les traces de métaux lourds",
        "Conserve le magnésium",
        "Augmente le pH pour rendre l'eau alcaline",
      ],
      image: "/XelliWater-Xelliss.webp",
    },
    {
      name: "A3 Spirulina Pills",
      description:
        "A3 Spirulina Pills est une véritable bombe de bienfaits pour votre corps ! Avec pas moins de 12 vitamines et 10 minéraux sans oublier les acides aminés essentiels.",
      benefits: [
        "12 vitamines et 10 minéraux",
        "Acides aminés essentiels",
        "Booster d'état général",
        "Vitalité, tonus et bien-être au quotidien",
      ],
      image: "/A3-Spirulina-Pills-Xelliss.webp",
    },
  ];

  const weakPoints = [
    "Licence pas chère qui peut rendre beaucoup de distributeurs peu sérieux",
    "Frais d'expédition qui peuvent parfois surprendre la première fois",
    "Secteur du bien-être et de la santé est extrêmement concurrentiel",
  ];

  const strongPoints = [
    "Des produits naturels de qualité",
    "Une équipe attribuée, vous ne commencez pas seul",
    "Des formations gratuites",
    "Fondateurs faciles à contacter",
    "Plan de rémunération ultra avantageux",
    "Aucune concurrence directe sur la spiruline",
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Avis Xelliss (ex Natura4Ever) : Arnaque ou Bon Produit ?
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Si vous avez déjà entendu parler de Xelliss, vous avez peut-être déjà
          entendu des avis négatifs sur Xelliss ou bien même que Xelliss est de
          l'arnaque. Peut-être que vous hésitez à vous engager et que vous
          cherchez des avis sur Xelliss pour vous rassurer et prendre une
          décision. Vous êtes au bon endroit, je vais vous donner mon avis sur
          la société Xelliss.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Xelliss
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Natura4Ever
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            MLM
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            Spiruline
          </Badge>
        </div>
      </header>

      {/* Section 1: Présentation de la société */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Présentation de la société (Ex Natura4Ever)
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Xelliss (Natura4Ever) est une société franco-luxembourgeoise fondée
            en 2014 et a changé de nom en septembre 2020 pour devenir Xelliss.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ils proposent des produits très différents de ce qui est sur le
            marché du bien-être et de la santé. Est-ce que vous connaissez
            beaucoup de sociétés spécialisées dans les microalgues ? Moi non.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            À la tête de la société, deux personnes : Eric Masson et Jean-Michel
            Larré.
          </p>
        </div>
        {/* Section Spiruline Reset - Composant réutilisable */}
        <SpirulineResetSection className="my-12" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Historique de Xelliss (ex Natura4Ever)
        </h3>
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <p className="text-lg text-blue-800 mb-4">
              Comme nous l'avons vu, Natura4Ever a changé de nom en septembre
              2020 pour devenir Xelliss avec pour but de s'internationaliser.
              Beaucoup de sociétés ont Forever dans leur nom. Avec ce nouveau
              nom, ils souhaitent se différencier.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  🌍 Expansion internationale
                </h4>
                <p className="text-blue-700">
                  Xelliss est maintenant présent dans plus de 50 pays dont les
                  États-Unis
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  📈 Croissance financière
                </h4>
                <p className="text-blue-700">
                  Chiffre d'affaires passé de 15 millions € en 2018 à 19
                  millions € en 2022 (évolution de 26.67%)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Xelliss, une arnaque ?
        </h3>
        <Card className="border-green-200 bg-green-50 mb-6">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Verdict : Non, Xelliss n'est pas une arnaque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-green-800">
                    Société référencée officiellement
                  </p>
                  <p className="text-green-700">
                    Xelliss est référencée par la SELDIA (European Direct
                    Selling Association) qui recense toutes les sociétés de
                    vente directe en Europe.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-green-800">
                    Société stable depuis 2014
                  </p>
                  <p className="text-green-700">
                    Un MLM qui arnaque ses clients ne tient généralement pas
                    plus de deux ans avant d'être percé à jour.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <Info className="h-5 w-5" />
              D'où viennent les avis négatifs ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">
                  1990 - Affaire Eric Masson
                </h4>
                <p className="text-orange-700">
                  Eric Masson est accusé de vente pyramidale et de pratique
                  sectaire. Ce n'est qu'en juillet 2020 que le jugement est
                  tombé et a indiqué que ces accusations n'étaient pas fondées.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">
                  2016 - Affaire John Godzich
                </h4>
                <p className="text-orange-700">
                  John Godzich rejoint Xelliss en 2014 mais est incarcéré en
                  2016 pour une condamnation en 2006 pour malversation à titre
                  personnel dans le cadre d'un autre MLM. Cela a donné une image
                  négative à Xelliss et a mis fin à son contrat.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section bienfaits spiruline */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Quels sont les bienfaits de la spiruline sur la santé ?
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Lister la liste de ses bienfaits serait trop long et prendrait
          beaucoup trop de temps. Mais en voici quelques-uns :
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {spirulineBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-green-50 rounded-lg"
            >
              <Heart className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="pt-6">
            <p className="text-lg text-purple-800 font-semibold mb-2">
              🏆 Reconnaissance mondiale
            </p>
            <p className="text-purple-700">
              Elle est si puissante qu'elle est maintenant considérée comme un
              "super aliment" et est reconnue par l'OMS et l'UNESCO comme étant
              le meilleur aliment du 21e siècle pour l'humanité.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section spiruline Xelliss */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Présentation de la spiruline et de celle de Xelliss
        </h2>
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Dans le commerce traditionnel, la spiruline n'est pas pure. Elle est
            transformée à plusieurs reprises par les entreprises
            pharmaceutiques. Cela a pour effet de diminuer la qualité de la
            spiruline présente dans ces compléments alimentaires.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            De plus, elle est produite à l'air libre. Normalement vous vous
            dites "justement c'est mieux". Théoriquement vous avez raison mais
            pour la spiruline (cyanobactérie), c'est totalement différent.
          </p>
        </div>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Innovation Xelliss : Les photobioréacteurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-blue-700 mb-4">
              Là où Xelliss se différencie, c'est par sa méthode de production
              unique au monde. Xelliss a breveté sa méthode de production et
              d'extraction, les photobioréacteurs.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  🏭 Production en vase clos
                </h4>
                <p className="text-blue-700">
                  La spiruline n'est pas en contact avec l'extérieur, évitant
                  les contaminations chimiques et bactériennes
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  ⚗️ Qualité exceptionnelle
                </h4>
                <p className="text-blue-700">
                  Produit le plus pur avec très peu de transformations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section produits Xelliss */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Présentation des produits Xelliss
        </h2>
        <div className="space-y-8">
          {xellissProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-64 md:h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain max-h-48"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    {product.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Section plan de rémunération */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Plan de rémunération
        </h2>
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Vous l'aurez compris, les produits proposés par Xelliss sont
            d'excellente qualité. Mais qu'en est-il de la rémunération ? Il faut
            tout de même se rappeler que Xelliss ne fait pas de communication et
            n'a pas de budget marketing. Tout se fait au travers de ce qu'ils
            appellent des distributeurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Commission directe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  30%
                </div>
                <p className="text-green-700">
                  de commission sur chaque vente directe
                </p>
                <p className="text-sm text-green-600 mt-2">
                  Exemple : 100€ de vente = 30€ de commission
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Clients privilèges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10%</div>
                <p className="text-blue-700">
                  de commission sur les abonnements mensuels
                </p>
                <p className="text-sm text-blue-600 mt-2">
                  = revenus passifs récurrents
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">
              🎁 Programme de fidélité unique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-purple-700 mb-4">
              Les clients Xelliss cumulent des points à chaque commande en
              fonction du volume. Un peu comme une carte de fidélité, sauf qu'il
              n'y a pas besoin de la chercher pendant de longues minutes dans un
              portefeuille plein à craquer.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">
                Avantages du système de points :
              </h4>
              <ul className="space-y-1 text-purple-700">
                <li>• Points échangeables contre des produits gratuits</li>
                <li>• Les points ne disparaissent jamais</li>
                <li>• Pas de pression temporelle</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section équipe */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          C'est toujours plus simple avec une équipe
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Ce n'est que maintenant que les choses se compliquent mais deviennent
          intéressantes. Je vais juste vous énumérer rapidement ce qui est
          intéressant car ce serait vraiment trop long.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team bonus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 mb-2">
                Vous touchez 12% des points de commission que votre équipe
                accumule.
              </p>
              <p className="text-sm text-green-600">
                De quoi ajouter de quelques dizaines à quelques centaines
                d'euros par mois.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Ranking bonus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-2">
                À chaque fois que vous passez un rang, vous touchez une prime
                (200€ dès le premier rang).
              </p>
              <p className="text-sm text-blue-600">
                Vous retouchez une partie de cette prime à chaque fois que vous
                repassez ce rang (50€ dès le premier rang).
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Car bonus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 mb-2">
                Dès que vous avez atteint trois fois le rang ruby, vous avez
                600€ tous les mois pour louer une voiture.
              </p>
              <p className="text-sm text-purple-600">
                Ou bien juste pour vous. De quoi largement donner le sourire 😊
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Leadership trip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">
                Xelliss récompense ses distributeurs avec des voyages gratuits
                en fonction du nombre de points cumulés.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">
              🎯 Récapitulatif des revenus possibles
            </h3>
            <p className="text-lg text-yellow-700">
              Avec Xelliss vous avez :{" "}
              <strong>
                30% ou 10% de commission + 12% de votre équipe + une prime par
                rang + 600€ + un voyage
              </strong>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section devenir distributeur */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Devenir distributeur
        </h2>
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Mais alors, comment devenir distributeur et surtout combien ça coûte
            ? Pour devenir distributeur, vous devez simplement vous inscrire en
            tant que distributeur sur le site de Xelliss.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vous aurez accès directement au backoffice, aux formations ainsi
            qu'à votre propre réplique du site Xelliss (pour vendre vos
            produits). Bien-sûr, vous ne serez pas seul et votre parrain sera à
            disposition pour avoir des informations ou pour répondre à vos
            questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">💰 Prix d'entrée</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-green-600 mb-2">
                  29€
                </div>
                <p className="text-green-700">Licence distributeur minimum</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">
                  ⚠️ Recommandation
                </h4>
                <p className="text-green-700">
                  Il est préférable de prendre un pack à partir de{" "}
                  <strong>220€</strong>. Comment pouvez-vous être crédible pour
                  vendre des produits que vous ne consommez pas et que vous ne
                  connaissez pas ?
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">
                🎁 Ce que vous obtenez
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700">Accès au backoffice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700">Formations gratuites</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700">Site web personnel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700">
                    Accompagnement par un parrain
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-purple-200 bg-purple-50">
          <CardContent className="pt-6">
            <p className="text-lg text-purple-800 font-semibold mb-2">
              💡 Conseil d'expert
            </p>
            <p className="text-purple-700">
              Un consommateur qui aime les produits sera toujours 100 fois plus
              convaincant qu'un simple opportuniste. Contactez-nous pour en
              savoir plus !
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section points faibles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Points faibles
        </h2>
        <div className="space-y-4">
          {weakPoints.map((point, index) => (
            <Card key={index} className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-red-800">{point}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section points forts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Points forts</h2>
        <div className="space-y-4">
          {strongPoints.map((point, index) => (
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
      </section>

      {/* Section avis final */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Mon avis final sur Xelliss
        </h2>
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-blue-800 leading-relaxed mb-4">
                Pour moi, Xelliss est une excellente société. Aussi bien d'un
                point de vue de la qualité des produits que des équipes
                derrières ainsi que l'accompagnement qui va avec.
              </p>
              <p className="text-lg text-blue-800 leading-relaxed mb-4">
                À mon avis, Xelliss a de beaux jours à venir avec des produits
                encore plus qualitatifs dans un contexte où les problèmes de
                santé ne cessent d'augmenter.
              </p>
              <p className="text-lg text-blue-800 leading-relaxed">
                Cependant, le domaine de la santé et du bien-être est très
                concurrentiel et de nombreuses sociétés de MLM sont déjà sur le
                coup. Mais à mon avis, Xelliss a un net avantage avec sa
                convivialité ainsi que sa licence à très faible coût.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA final */}
      <Card className="border-green-300 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Intéressé par les produits Xelliss ?
          </h2>
          <p className="text-green-100 text-lg mb-6">
            Découvrez notre sélection de produits premium ou explorez nos
            alternatives recommandées.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg px-8 py-4"
            >
              <Link href="/blog/phycosci-x14-xelliss">
                📖 En savoir plus sur PhycoSci X14
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                target="_blank"
              >
                🛒 Voir nos produits recommandés
              </Link>
            </Button>
          </div>

          <p className="text-green-100 text-sm mt-4">
            ✅ Produits testés • ✅ Qualité garantie • ✅ Conseils d'experts
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
                  href="/blog/avis-phycosci-x14-xelliss"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Avis PhycoSci X14 Xelliss
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Notre analyse complète du produit phare de Xelliss :
                composition, efficacité et retours clients.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/blog/carafe-filtrante-xelliss-xelliwater"
                  className="text-green-600 hover:text-green-800"
                >
                  Test XelliWater Xelliss
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Test complet de la carafe filtrante Xelliss : efficacité,
                qualité et rapport qualité-prix.
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
