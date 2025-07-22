import { generateSEOMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertTriangle,
  Heart,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  Target,
  Brain,
  Activity,
  Droplets,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Avis Zinzino : Arnaque ou Produits de Qualité ?",
    description:
      "Zinzino avis : produits, opportunités, arnaque ou qualité ? Découvrez notre analyse complète pour faire le bon choix.",
    keywords: [
      "zinzino avis",
      "zinzino arnaque",
      "balance oil zinzino",
      "zinzino mlm",
      "zinzino produits",
      "omega 3 zinzino",
    ],
    canonicalUrl: "blog/avis-zinzino-arnaque-ou-produits-de-qualite",
  });
}

export default function ZinzinoReviewPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Avis Zinzino : Arnaque ou Produits de Qualité ?" },
  ];

  const healthBenefits = [
    "Équilibre des acides gras",
    "Renforcement du système immunitaire",
    "Amélioration de la santé intestinale",
    "Gestion du poids",
  ];

  const zinzinoProducts = [
    {
      name: "BalanceOil+",
      description:
        "L'alliance parfaite entre science et nature. Combine huile de poisson riche en oméga-3 avec huile d'olive extra vierge pour une absorption optimale.",
      price: "58€ pour 300ml ou 41€ en abonnement",
      benefits: [
        "Soutient une fonction cérébrale optimale (700 mg de DHA par dose)",
        "Protège votre système cardiovasculaire",
        "Renforce votre immunité avec 400% des apports journaliers en vitamine D3",
        "Protège vos cellules contre le stress oxydatif",
      ],
      image: "/images/balance-oil-plus-placeholder.jpg",
    },
    {
      name: "BalanceTest",
      description:
        "Test sanguin facile à réaliser chez soi. Mesure 11 acides gras essentiels pour une vision claire de votre équilibre corporel.",
      price: "183€",
      benefits: [
        "Mesure 11 acides gras avec précision",
        "Résultats en 10-20 jours",
        "Analyse par laboratoire certifié VITAS",
        "Suivi personnalisé de vos progrès",
      ],
      image: "/images/balance-test-placeholder.jpg",
    },
    {
      name: "Xtend+",
      description:
        "Le complément ultime pour votre immunité et votre énergie. 22 vitamines et minéraux essentiels, 100% naturel et végétalien.",
      price: "42€ les 60 gélules",
      benefits: [
        "Soutien immunitaire renforcé avec bêta-glucanes",
        "Des os et articulations en pleine santé",
        "Énergie durable avec vitamines B",
        "100% naturel et certifié végétalien",
      ],
      image: "/images/xtend-plus-placeholder.jpg",
    },
    {
      name: "ZinoBiotic+",
      description:
        "Votre allié pour une santé intestinale optimale. Mélange de 8 fibres alimentaires naturelles pour équilibrer votre microbiome.",
      price: "31€ les 180g",
      benefits: [
        "Microbiome équilibré pour immunité renforcée",
        "Réduction des pics de glycémie",
        "Cholestérol maintenu à un niveau normal",
        "Sensation de satiété et confort digestif",
      ],
      image: "/images/zinobiotic-plus-placeholder.jpg",
    },
    {
      name: "LeanShake",
      description:
        "Transformez vos repas en alliés minceur. Solution nutritionnelle complète pour perte de poids et développement musculaire.",
      price: "75€ les 16 portions",
      benefits: [
        "Perte de poids rapide et durable",
        "Soutien à la masse musculaire",
        "25 vitamines et minéraux essentiels",
        "Seulement 231 kcal par portion",
      ],
      image: "/images/leanshake-placeholder.jpg",
    },
  ];

  const weakPoints = [
    "Coût des produits : Les produits Zinzino peuvent être plus chers que d'autres suppléments sur le marché",
    "Modèle MLM critiqué : Certaines personnes sont sceptiques à l'égard du marketing de réseau",
    "Engagement requis : Réussir en tant que distributeur nécessite du temps, de l'effort et de la persévérance",
  ];

  const strongPoints = [
    "Produits de haute qualité : Formulés sur la base de recherches scientifiques",
    "Soutien aux distributeurs : Formation et ressources pour développer votre activité",
    "Opportunité d'affaires : Potentiel de revenus supplémentaires ou à temps plein",
    "Innovation : Zinzino investit dans la recherche et le développement",
  ];

  const faqItems = [
    {
      question: "Zinzino est-elle une entreprise légitime ?",
      answer:
        "Oui, Zinzino est une entreprise établie depuis 2005, opérant dans plusieurs pays et membre d'associations professionnelles de vente directe.",
    },
    {
      question: "Les produits Zinzino sont-ils efficaces ?",
      answer:
        "De nombreux clients rapportent des améliorations dans leur bien-être grâce aux produits Zinzino. Les formulations sont basées sur des recherches scientifiques, mais les résultats peuvent varier selon les individus.",
    },
    {
      question: "Comment puis-je acheter des produits Zinzino ?",
      answer:
        "Les produits sont disponibles via des distributeurs indépendants ou sur le site officiel de Zinzino.",
    },
    {
      question:
        "Est-il difficile de réussir en tant que distributeur Zinzino ?",
      answer:
        "Comme toute activité entrepreneuriale, le succès dépend de votre engagement, de vos efforts et de votre capacité à développer votre réseau.",
    },
    {
      question: "Les produits Zinzino conviennent-ils à tout le monde ?",
      answer:
        "La plupart des produits sont adaptés à un large public, mais il est recommandé de consulter un professionnel de santé avant de commencer tout nouveau complément alimentaire.",
    },
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Avis Zinzino : Arnaque ou Produits de Qualité ?
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Si vous avez déjà entendu parler de Zinzino, vous avez peut-être vu
          des avis mitigés ou vous vous demandez si Zinzino est une arnaque.
          Peut-être hésitez-vous à vous engager avec cette entreprise et
          cherchez des informations pour prendre une décision éclairée. Vous
          êtes au bon endroit. Dans cet article, nous allons examiner en détail
          Zinzino, ses produits, son modèle d'affaires et vous donner notre avis
          objectif.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Zinzino
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Oméga-3
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            MLM
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            Compléments
          </Badge>
        </div>
      </header>

      {/* Section 1: Présentation de la société */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Présentation de la société Zinzino
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Fondée en 2005 en Suède, Zinzino est une entreprise internationale
            spécialisée dans les compléments alimentaires axés sur la santé et
            le bien-être. Elle propose une gamme de produits innovants,
            notamment des suppléments d'oméga-3, des solutions pour l'immunité,
            la santé intestinale et la gestion du poids.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Historique de Zinzino
        </h3>
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <p className="text-lg text-blue-800 mb-4">
              Depuis sa création, Zinzino a connu une croissance significative,
              s'étendant à plus de 35 pays à travers le monde, dont les
              États-Unis, le Canada et plusieurs pays européens. L'entreprise
              s'appuie sur des recherches scientifiques pour développer des
              produits de haute qualité visant à améliorer le bien-être général
              de ses clients.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  🌍 Expansion mondiale
                </h4>
                <p className="text-blue-700">
                  Présent dans plus de 35 pays incluant USA, Canada et Europe
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  📈 Croissance financière
                </h4>
                <p className="text-blue-700">
                  Chiffre d'affaires de plus de 150 millions d'euros en 2022
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section Zinzino arnaque */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Zinzino est-elle une arnaque ?
        </h2>

        <Card className="border-green-200 bg-green-50 mb-6">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Verdict : Non, Zinzino n'est pas une arnaque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-green-800">
                    Membre d'associations professionnelles
                  </p>
                  <p className="text-green-700">
                    L'entreprise est membre de la SELDIA (European Direct
                    Selling Association) qui régulent et promeuvent les
                    pratiques éthiques dans la vente directe.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-green-800">
                    Plus de 15 ans d'activité
                  </p>
                  <p className="text-green-700">
                    Zinzino opère depuis plus de 15 ans, ce qui témoigne de sa
                    stabilité et de sa crédibilité dans l'industrie. Une
                    entreprise frauduleuse ne pourrait pas maintenir ses
                    activités sur une si longue période.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Mais d'où viennent les avis négatifs ?
        </h3>
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <p className="text-lg text-orange-800">
              Comme toute entreprise de vente directe, Zinzino fait face à des
              critiques, souvent liées à une mauvaise compréhension du modèle
              MLM ou à des expériences individuelles négatives avec des
              distributeurs. Il est essentiel de distinguer les pratiques de
              l'entreprise de celles de certains distributeurs indépendants qui
              peuvent ne pas représenter fidèlement les valeurs de Zinzino.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section bienfaits */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Quels sont les bienfaits des produits Zinzino sur la santé ?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Les produits de Zinzino sont conçus pour soutenir divers aspects de la
          santé. Voici quelques-uns de leurs principaux bienfaits :
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {healthBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-green-50 rounded-lg"
            >
              <Heart className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Composition des produits Zinzino
        </h3>
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="pt-6">
            <p className="text-lg text-purple-800">
              Les produits sont formulés à partir d'ingrédients naturels de
              haute qualité. Par exemple, le BalanceOil combine de l'huile de
              poisson riche en oméga-3 avec de l'huile d'olive extra vierge pour
              une absorption optimale.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section produits phares */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Présentation des produits phares de Zinzino
        </h2>

        <div className="space-y-12">
          {zinzinoProducts.map((product, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                {product.name === "BalanceOil+" && (
                  <Brain className="h-6 w-6 text-blue-600" />
                )}
                {product.name === "BalanceTest" && (
                  <Activity className="h-6 w-6 text-green-600" />
                )}
                {product.name === "Xtend+" && (
                  <Shield className="h-6 w-6 text-purple-600" />
                )}
                {product.name === "ZinoBiotic+" && (
                  <Droplets className="h-6 w-6 text-teal-600" />
                )}
                {product.name === "LeanShake" && (
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                )}
                {product.name} de Zinzino :
                {product.name === "BalanceOil+" &&
                  " L'alliance parfaite entre science et nature"}
                {product.name === "BalanceTest" &&
                  " Connaissez votre santé pour mieux l'améliorer"}
                {product.name === "Xtend+" &&
                  " Le complément ultime pour votre immunité et votre énergie"}
                {product.name === "ZinoBiotic+" &&
                  " Votre allié pour une santé intestinale optimale"}
                {product.name === "LeanShake" &&
                  " Transformez vos repas en alliés minceur"}
              </h3>

              <Card className="overflow-hidden">
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
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Pourquoi choisir {product.name} ?
                    </h4>
                    <p className="text-lg text-gray-700 mb-4">
                      {product.description}
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Les bienfaits clés de {product.name}
                    </h4>
                    <div className="grid gap-3 mb-4">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="font-semibold text-gray-900">
                        Prix : {product.price}
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link
                        href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                        target="_blank"
                      >
                        Commander {product.name} maintenant
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Sous-sections spécifiques pour BalanceOil+ */}
              {product.name === "BalanceOil+" && (
                <>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                    En quoi BalanceOil+ est-il meilleur que ses concurrents ?
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card className="text-center p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">
                        Un ratio Oméga-6/Oméga-3 parfaitement équilibré
                      </h5>
                      <p className="text-blue-700 text-sm">
                        Équilibre le ratio crucial à un niveau optimal de 3:1,
                        prouvé scientifiquement
                      </p>
                    </Card>
                    <Card className="text-center p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">
                        Une absorption supérieure
                      </h5>
                      <p className="text-blue-700 text-sm">
                        Les polyphénols permettent aux Oméga-3 d'être
                        transportés efficacement
                      </p>
                    </Card>
                    <Card className="text-center p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">
                        Des résultats rapides et mesurables
                      </h5>
                      <p className="text-blue-700 text-sm">
                        Suivez l'évolution avec le BalanceTest dès 120 jours
                      </p>
                    </Card>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Pourquoi attendre ?
                  </h4>
                  <Card className="border-green-200 bg-green-50 mb-6">
                    <CardContent className="pt-6">
                      <p className="text-lg text-green-800">
                        Avec BalanceOil+, vous ne consommez pas seulement un
                        supplément : vous investissez dans votre santé et votre
                        bien-être à long terme. Offrez à votre corps ce qu'il
                        mérite : un équilibre parfait et des résultats prouvés.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {/* Sous-sections pour les autres produits */}
              {product.name === "BalanceTest" && (
                <>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                    Qu'est-ce que le BalanceTest ?
                  </h4>
                  <p className="text-lg text-gray-700 mb-4">
                    Le BalanceTest est un test sanguin facile à réaliser chez
                    soi. En seulement quelques gouttes de sang, il mesure 11
                    acides gras essentiels dans votre organisme, y compris vos
                    niveaux d'Oméga-3 et Oméga-6. Les résultats, analysés par le
                    laboratoire indépendant VITAS, vous donnent une vision
                    claire de votre équilibre corporel.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Pourquoi le BalanceTest est meilleur que les autres ?
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <Card className="p-4">
                      <h5 className="font-semibold text-green-800 mb-2">
                        Précision et expertise
                      </h5>
                      <p className="text-green-700">
                        Mesure 11 acides gras pour une analyse complète
                      </p>
                    </Card>
                    <Card className="p-4">
                      <h5 className="font-semibold text-green-800 mb-2">
                        Rapidité et simplicité
                      </h5>
                      <p className="text-green-700">
                        Test à domicile, résultats sous 10-20 jours
                      </p>
                    </Card>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section plan de rémunération */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Plan de rémunération Zinzino
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Le plan de rémunération de Zinzino se résume en quelques étapes
          simples et des avantages progressifs qui récompensent vos efforts et
          la croissance de votre réseau.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Comment ça fonctionne ?
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Démarrage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Commencez gratuitement ou avec un Kit Partenaire. Pendant vos
                120 premiers jours (Fast Start), maximisez vos revenus.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Base de clients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700">
                Inscrivez des Clients Premier et atteignez 4 clients actifs pour
                obtenir votre abonnement Zinzino4Free.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Équipe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700">
                Parrainez de nouveaux partenaires et aidez-les à atteindre leurs
                objectifs pour augmenter vos gains.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Vos revenus :
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Ventes directes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-700">
                <li>
                  • Cash Bonus : Gagnez jusqu'à 30% sur la vente de kits ou
                  produits
                </li>
                <li>
                  • Recurring Bonus : Doublez vos crédits sur les commandes
                  récurrentes
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Commissions d'équipe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-blue-700">
                <li>• Recevez 10-15% des volumes de votre équipe</li>
                <li>• Bonus uniques jusqu'à 40 000 Pay Points</li>
                <li>• zRewards pour fidéliser vos clients</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Évolution des titres et avantages :
        </h3>
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="pt-6">
            <p className="text-lg text-purple-800 mb-4">
              Accédez à des revenus résiduels en développant votre réseau.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Titres :</h4>
                <p className="text-purple-700">
                  Q-Team, X-Team, Bronze, Silver, jusqu'à Global President
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">
                  Avantages :
                </h4>
                <p className="text-purple-700">
                  Bonus croissants et opportunités de voyage exclusifs (Director
                  Trip, Ambassador Trip)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section devenir distributeur */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Devenir distributeur Zinzino
        </h2>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Comment devenir distributeur
        </h3>
        <Card className="border-green-200 bg-green-50 mb-6">
          <CardContent className="pt-6">
            <p className="text-lg text-green-800 mb-4">
              Pour devenir distributeur et commencer à améliorer votre santé et
              celle de votre entourage, envoyez-moi un mail à
              contact@spiruline-sante.com.
            </p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href="mailto:contact@spiruline-sante.com">
                Nous contacter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Accompagnement et formation
        </h3>
        <Card className="border-blue-200">
          <CardContent className="pt-6">
            <p className="text-lg text-blue-800">
              Zinzino offre des formations en ligne, des webinaires et un
              support continu pour aider ses distributeurs à réussir.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section points faibles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Points faibles de Zinzino
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Points forts de Zinzino
        </h2>
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
          Mon avis final sur Zinzino
        </h2>
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-blue-800 leading-relaxed mb-4">
                Zinzino est une entreprise solide avec une gamme de produits
                axés sur des besoins réels en matière de santé et de bien-être.
                Si vous recherchez des compléments alimentaires de qualité et
                êtes intéressé par une opportunité d'affaires, Zinzino peut être
                une option intéressante.
              </p>
              <p className="text-lg text-blue-800 leading-relaxed">
                Cependant, comme pour toute entreprise de vente directe, il est
                important de faire vos propres recherches, de tester les
                produits par vous-même et de considérer si le modèle d'affaires
                correspond à vos objectifs personnels et professionnels.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 border-green-200 bg-green-50">
          <CardContent className="pt-6 text-center">
            <p className="text-lg text-green-800 mb-4">
              Vous souhaitez en savoir plus ou démarrer avec Zinzino ? N'hésitez
              pas à nous contacter pour obtenir des informations supplémentaires
              et des conseils personnalisés.
            </p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href="mailto:contact@spiruline-sante.com">
                Demander des informations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Section FAQ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          FAQ sur Zinzino
        </h2>
        <div className="space-y-6">
          {faqItems.map((faq, index) => (
            <Card key={index} className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  {index + 1}. {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <Card className="border-green-300 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <CardContent className="py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Intéressé par les produits Zinzino ?
          </h2>
          <p className="text-green-100 text-lg mb-6">
            Découvrez notre sélection de produits premium Zinzino et transformez
            votre santé dès aujourd'hui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg px-8 py-4"
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                target="_blank"
              >
                🛒 Découvrir les produits Zinzino
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
            >
              <Link href="/blog/balance-oil-zinzino-avis">
                📖 Lire notre test BalanceOil+
              </Link>
            </Button>
          </div>

          <p className="text-green-100 text-sm mt-4">
            ✅ Produits scientifiquement formulés • ✅ Qualité premium • ✅
            Support expert
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
                  href="/blog/balance-oil-zinzino-avis"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Test BalanceOil+ Zinzino
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Notre test approfondi du produit phare de Zinzino : composition,
                bienfaits et avis utilisateurs.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/blog/omega-3-bienfaits-pour-la-peau"
                  className="text-green-600 hover:text-green-800"
                >
                  Oméga-3 et santé de la peau
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Comment les oméga-3 contribuent à une peau saine, hydratée et
                éclatante.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/blog/Zinzino-Omega-3"
                  className="text-purple-600 hover:text-purple-800"
                >
                  Analyse Zinzino Oméga-3
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Analyse complète des compléments oméga-3 Zinzino : composition,
                bienfaits et avis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  );
}
