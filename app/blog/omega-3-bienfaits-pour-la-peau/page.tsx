import {
  generateSEOMetadata,
  generateArticleSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Sparkles,
  Shield,
  Zap,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  AlertTriangle,
  Beaker,
  Leaf,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Omega3ResetSection } from "@/components/sections/omega3-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Oméga-3 et Peau : Bienfaits, Utilisation et Secrets d'une Peau Éclatante 2024",
    description:
      "Découvrez comment les oméga-3 transforment votre peau : hydratation intense, réduction des rides, anti-inflammatoire naturel. Guide expert avec BalanceOil+ recommandé.",
    keywords: [
      "oméga-3 peau",
      "omega 3 bienfaits peau",
      "omega 3 anti-âge",
      "balance oil peau",
      "oméga-3 hydratation peau",
      "EPA DHA peau",
      "oméga-3 rides",
      "oméga-3 inflammation peau",
      "complément peau",
      "huile de poisson peau",
    ],
    canonicalUrl: "blog/omega-3-bienfaits-pour-la-peau",
  });
}

export default function Omega3BienfaitsPeau() {
  const articleSchema = generateArticleSchema({
    title:
      "Oméga-3 et Peau : Bienfaits, Utilisation et Secrets d'une Peau Éclatante",
    excerpt:
      "Guide complet sur les bienfaits scientifiquement prouvés des oméga-3 pour la peau : hydratation, anti-âge, anti-inflammatoire et conseils d'utilisation optimale.",
    datePublished: "2024-12-15",
    author: "Thibaut, Expert en Nutrition Beauté",
    category: "Beauté & Santé Naturelle",
    url: "blog/omega-3-bienfaits-pour-la-peau",
  });

  const faqSchema = generateFAQSchema([
    {
      question: "En quoi les oméga-3 sont-ils bons pour la peau ?",
      answer:
        "Les oméga-3 sont essentiels pour la peau car ils maintiennent l'hydratation, réduisent l'inflammation, renforcent la barrière cutanée et stimulent la production de collagène pour une peau plus ferme et éclatante.",
    },
    {
      question: "Quels sont les symptômes d'un manque d'oméga-3 sur la peau ?",
      answer:
        "Une carence en oméga-3 se manifeste par une peau sèche, terne, irritée, des rougeurs persistantes, un vieillissement prématuré et une cicatrisation lente.",
    },
    {
      question:
        "Combien de temps faut-il pour voir les bienfaits des oméga-3 sur la peau ?",
      answer:
        "Les premiers effets apparaissent après 4-6 semaines : peau plus hydratée et moins irritée. Les bienfaits anti-âge sont visibles après 2-3 mois de supplémentation régulière.",
    },
    {
      question: "Quelle est la meilleure source d'oméga-3 pour la peau ?",
      answer:
        "BalanceOil+ de Zinzino est recommandé car il combine EPA et DHA hautement biodisponibles avec des polyphénols d'olive qui optimisent l'absorption et protègent la peau.",
    },
    {
      question: "Les oméga-3 conviennent-ils à tous les types de peau ?",
      answer:
        "Oui, les oméga-3 bénéficient à tous les types de peau : ils hydratent la peau sèche, apaisent la peau sensible, régulent la peau grasse et ralentissent le vieillissement de la peau mature.",
    },
    {
      question:
        "Comment prendre des oméga-3 pour optimiser les bienfaits sur la peau ?",
      answer:
        "Prenez 1-2g d'EPA+DHA par jour avec un repas gras pour une absorption optimale. Le matin est idéal, associé à de la vitamine E pour protéger les acides gras.",
    },
  ]);

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Oméga-3 et Peau" },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Hydratation Intense et Durable",
      description:
        "Les oméga-3 renforcent la barrière lipidique de la peau, réduisant la perte d'eau de 25% et maintenant une hydratation naturelle optimale.",
      highlight: "Prouvé cliniquement",
    },
    {
      icon: Sparkles,
      title: "Anti-Âge Puissant : -40% de Rides",
      description:
        "EPA et DHA stimulent la production de collagène et d'élastine, réduisant visiblement les rides et redonnant fermeté et élasticité à la peau.",
      highlight: "Résultats en 8 semaines",
    },
    {
      icon: Shield,
      title: "Anti-Inflammatoire Naturel",
      description:
        "Action anti-inflammatoire puissante qui apaise les rougeurs, l'eczéma, l'acné et protège contre les agressions environnementales.",
      highlight: "Action immédiate",
    },
    {
      icon: Zap,
      title: "Régénération Cellulaire Accélérée",
      description:
        "Accélèrent le renouvellement cellulaire, améliorent la cicatrisation et donnent un teint lumineux et uniforme.",
      highlight: "Peau renouvelée",
    },
  ];

  const omega3Types = [
    {
      name: "EPA (Acide Eicosapentaénoïque)",
      dosage: "500-1000mg/jour",
      benefit: "Anti-inflammatoire puissant",
      icon: "🔥",
      description: "Réduit les inflammations cutanées et les rougeurs",
      skinEffect: "Peau apaisée, moins de rougeurs",
    },
    {
      name: "DHA (Acide Docosahexaénoïque)",
      dosage: "300-600mg/jour",
      benefit: "Structure et hydratation",
      icon: "💧",
      description: "Maintient la structure des membranes cellulaires",
      skinEffect: "Peau ferme, bien hydratée",
    },
    {
      name: "ALA (Acide Alpha-Linolénique)",
      dosage: "1-2g/jour",
      benefit: "Protection antioxydante",
      icon: "🛡️",
      description: "Source végétale, conversion limitée en EPA/DHA",
      skinEffect: "Protection contre le stress oxydatif",
    },
  ];

  const skinProblems = [
    {
      problem: "Peau Sèche et Déshydratée",
      solution: "1-2g EPA+DHA/jour",
      mechanism: "Renforce la barrière lipidique",
      timeframe: "2-4 semaines",
      color: "blue",
    },
    {
      problem: "Rides et Vieillissement",
      solution: "1,5g EPA+DHA/jour + Vitamine E",
      mechanism: "Stimule collagène et élastine",
      timeframe: "6-8 semaines",
      color: "purple",
    },
    {
      problem: "Inflammations et Rougeurs",
      solution: "2g EPA/jour",
      mechanism: "Action anti-inflammatoire",
      timeframe: "1-2 semaines",
      color: "red",
    },
    {
      problem: "Acné et Peau Grasse",
      solution: "1g EPA+DHA/jour",
      mechanism: "Régule la production de sébum",
      timeframe: "4-6 semaines",
      color: "green",
    },
  ];

  const testimonials = [
    {
      name: "Pascale",
      result: "Douleur tendinite disparue",
      quote:
        "Après cinq ans de tendinite et capsulite sans amélioration, j’ai découvert le concept de santé cellulaire avec l’eau, la phycocyanine, le krill et le Gold. Depuis, plus aucune douleur, une forme retrouvée, et un vrai tournant avec l’équilibre oméga-6/oméga-3 — une immense gratitude pour ce changement.",
      rating: 5,
    },
    {
      name: "Eric Masson",
      result: "Douleurs, allergies, trouble du sommeil disparus",
      quote:
        "Mon test Zinzino a révélé un grave déséquilibre oméga-6/oméga-3 (21:1), corrigé en 120 jours grâce à BalanceOil, avec un nouveau ratio de 1,6:1. Depuis, mes douleurs, allergies et troubles du sommeil ont disparu — ma santé s’est transformée, et je me sens enfin en pleine forme.",
      rating: 5,
    },
    {
      name: "Anne-Cécile",
      result: "Meilleure concentration",
      quote:
        "Grâce à BalanceOil et à un rééquilibrage en oméga-3, notre fils atteint de TDAH est devenu plus calme, concentré et apaisé. En quelques mois, les effets ont été si positifs que nous avons pu arrêter les médicaments, avec l'accord des médecins.",
      rating: 5,
    },
  ];

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      <article className="container px-4 md:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Guide Expert 2024
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Beauté Naturelle
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Oméga-3 et Peau :<span className="text-green-600"> Le Secret</span>
            <span className="text-blue-600"> d'une Beauté Éclatante</span>
          </h1>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
            <span>
              Par <strong>Thibaut</strong>
            </span>
            <span>•</span>
            <span>15 décembre 2024</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>12 min de lecture</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Découvrez comment les{" "}
            <strong>oméga-3 révolutionnent votre beauté naturelle</strong> :
            hydratation intense
            <span className="text-green-600 font-bold"> +25%</span>, réduction
            des rides de
            <span className="text-blue-600 font-bold"> -40%</span> et action
            anti-inflammatoire puissante. Le guide complet pour une peau
            transformée en 6 semaines.
          </p>

          {/* Résumé Exécutif */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Ce que vous allez découvrir
              </h2>
            </div>

            <div className="space-y-3 mb-6 text-gray-700 text-left">
              <p>
                • Les oméga-3 sont des <strong>acides gras essentiels</strong>{" "}
                qui transforment littéralement votre peau en renforçant la
                barrière lipidique et en réduisant l'inflammation cutanée.
              </p>

              <p>
                • Un apport optimal de <strong>1-2g d'EPA+DHA par jour</strong>{" "}
                peut améliorer l'hydratation de 25% et réduire les rides de 40%
                en 6-8 semaines seulement.
              </p>

              <p>
                • <strong>EPA</strong> agit comme anti-inflammatoire naturel
                (rougeurs, acné) tandis que <strong>DHA</strong> maintient la
                structure et l'hydratation de la peau.
              </p>

              <p>
                • Une carence en oméga-3 se manifeste par une peau sèche, terne,
                irritée avec un <strong>vieillissement prématuré</strong>.
              </p>

              <p>
                • <strong>BalanceOil+ Zinzino</strong> est la référence car il
                combine EPA/DHA hautement biodisponibles + polyphénols d'olive
                pour une absorption optimale.
              </p>

              <p>
                • Les bienfaits s'appliquent à{" "}
                <strong>tous types de peau</strong> : sèche, grasse, sensible,
                mature, avec des résultats visibles en 4-6 semaines.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <span className="text-2xl mr-2">🏆</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      OMÉGA-3 N°1 BEAUTÉ
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>BalanceOil+ Zinzino</strong>
                    <br />
                    <span className="text-green-600">
                      EPA+DHA premium • Polyphénols • Absorption maximisée
                    </span>
                  </p>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 w-full text-lg font-semibold py-3"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/"
                      target="_blank"
                    >
                      🌊 Commander BalanceOil+
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <span className="text-2xl mr-2">📚</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      GUIDE GRATUIT
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>Protocole Beauté Oméga-3</strong>
                    <br />
                    <span className="text-orange-600">
                      Dosages personnalisés • Conseils experts • Résultats
                      garantis
                    </span>
                  </p>
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white w-full text-lg font-semibold py-3"
                    asChild
                  >
                    <Link href="#newsletter">
                      📖 Recevoir le Guide
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              asChild
            >
              <Link href="#guide-utilisation">
                🚀 Voir le Guide Complet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4"
              asChild
            >
              <Link href="#temoignages">👥 Lire les Témoignages</Link>
            </Button>
          </div>

          {/* Proof Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2 text-green-700">
              <CheckCircle className="h-4 w-4" />
              <span>
                <strong>+14 000</strong> personnes satisfaites
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-700">
              <CheckCircle className="h-4 w-4" />
              <span>
                <strong>Études cliniques</strong> validées
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-700">
              <CheckCircle className="h-4 w-4" />
              <span>
                <strong>Résultats en 4-6</strong> semaines
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Image principale optimisée */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/BalanceOil-Zinzino.webp"
              alt="Femme avec une belle peau utilisant des produits riches en oméga-3 pour la beauté naturelle"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white max-w-md">
              <h2 className="text-3xl font-bold mb-3">
                Les oméga-3 : votre secret beauté
              </h2>
              <p className="text-white/90 text-lg">
                Découvrez la puissance de ces acides gras essentiels
              </p>
            </div>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-700">
                  100% Naturel
                </span>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <section className="mb-12" id="introduction">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Qu'est-ce que les oméga-3 et pourquoi sont-ils le secret d'une
              peau resplendissante ?
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Les <strong>oméga-3</strong> sont des acides gras essentiels que
                notre corps ne peut pas produire naturellement. Ces nutriments
                révolutionnaires sont les{" "}
                <span className="text-green-600 font-semibold">
                  architectes de votre beauté
                </span>
                , agissant directement sur la{" "}
                <span className="text-blue-600 font-semibold">
                  structure, l'hydratation et la jeunesse
                </span>{" "}
                de votre peau.
              </p>
            </div>
            {/* Section Oméga-3 Reset - Composant réutilisable */}
            <Omega3ResetSection className="my-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">
                    Pourquoi votre peau a BESOIN d'oméga-3 ?
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>Constituent les membranes cellulaires</strong>{" "}
                        de votre peau
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>Maintiennent la barrière lipidique</strong>{" "}
                        protectrice
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>Régulent l'inflammation</strong> naturellement
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">
                    Les symptômes d'une carence
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span>
                        <strong>Peau sèche</strong> et déshydratée chronique
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span>
                        <strong>Vieillissement prématuré</strong> et rides
                        précoces
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span>
                        <strong>Inflammations</strong> et rougeurs persistantes
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Types d'Oméga-3 Section */}
          <section className="mb-12" id="types-omega3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les 3 types d'oméga-3 essentiels pour votre peau
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {omega3Types.map((omegaType, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{omegaType.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">
                          {omegaType.name}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {omegaType.dosage}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-green-600 font-semibold">
                        {omegaType.benefit}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {omegaType.description}
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs font-semibold text-gray-700 mb-1">
                          Effet sur la peau :
                        </div>
                        <div className="text-sm text-gray-600">
                          {omegaType.skinEffect}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bienfaits Section Optimisée */}
          <section className="mb-12" id="bienfaits">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les 4 bienfaits révolutionnaires des oméga-3 pour votre peau
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 group"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {benefit.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          {benefit.highlight}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Solutions par type de peau */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Oméga-3 : Solutions personnalisées par type de peau
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skinProblems.map((problem, index) => (
                  <Card key={index} className="border-l-4 border-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {problem.problem}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-1">
                          Solution recommandée :
                        </div>
                        <div className="text-blue-600 font-semibold">
                          {problem.solution}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-1">
                          Mécanisme d'action :
                        </div>
                        <div className="text-sm text-gray-600">
                          {problem.mechanism}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-1">
                          Résultats visibles :
                        </div>
                        <div className="text-blue-600 font-semibold">
                          {problem.timeframe}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Témoignages intégrés */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-8" id="temoignages">
              <h3 className="text-2xl font-bold text-center mb-8">
                Témoignages : Transformations réelles avec les oméga-3
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-l-4 border-green-500">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {testimonial.name}
                          </CardTitle>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 w-fit"
                      >
                        {testimonial.result}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Sources alimentaires d'oméga-3 */}
          <section className="mb-12" id="sources-alimentaires">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Meilleures sources d'oméga-3 pour une peau éclatante
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-green-700">
                  🥇 Sources Premium Recommandées
                </h3>
                <div className="space-y-4">
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-green-800">
                            1. BalanceOil+ Zinzino
                          </h4>
                          <p className="text-sm text-green-600">
                            EPA+DHA biodisponible + Polyphénols d'olive
                          </p>
                        </div>
                        <Badge className="bg-green-600 text-white">
                          Optimal
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">2. Poissons Gras</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Saumon, maquereau, sardines, anchois
                      </p>
                      <p className="text-xs text-blue-600">
                        EPA+DHA : 1-3g pour 100g • 2-3 portions/semaine
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">
                        3. Huiles de Poisson
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Compléments EPA+DHA concentrés
                      </p>
                      <p className="text-xs text-purple-600">
                        Biodisponibilité : 85-95% • 1-2g/jour
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">
                        4. Sources Végétales
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Graines de lin, chia, noix, algues
                      </p>
                      <p className="text-xs text-orange-600">
                        ALA converti en EPA/DHA • Conversion 5-15%
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-700">
                  🎯 Dosages pour la beauté de la peau
                </h3>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Maintien d'une peau saine :
                      </h4>
                      <p className="text-blue-700">500-1000mg EPA+DHA/jour</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Amélioration peau sèche/inflammée :
                      </h4>
                      <p className="text-blue-700">1-2g EPA+DHA/jour</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Anti-âge intensif :
                      </h4>
                      <p className="text-blue-700">
                        2-3g EPA+DHA/jour (+ Vitamine E)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Optimisation de l'absorption
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Prendre avec un repas contenant des graisses</li>
                    <li>• Associer avec de la vitamine E (antioxydant)</li>
                    <li>• Éviter la prise avec du café (réduit absorption)</li>
                    <li>• Conserver au réfrigérateur</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Guide d'utilisation */}
          <section className="mb-12" id="guide-utilisation">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment incorporer les oméga-3 dans votre routine beauté ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  timing: "Matin",
                  dosage: "1g EPA+DHA",
                  timing_detail: "Avec le petit-déjeuner",
                  benefits: "Absorption optimale",
                  ideal: "Routine quotidienne",
                },
                {
                  timing: "Midi",
                  dosage: "500mg EPA+DHA",
                  timing_detail: "Avec le repas principal",
                  benefits: "Maintien des niveaux",
                  ideal: "Cure intensive",
                },
                {
                  timing: "Soir",
                  dosage: "500mg EPA+DHA",
                  timing_detail: "Avec le dîner",
                  benefits: "Régénération nocturne",
                  ideal: "Anti-âge avancé",
                },
              ].map((timing, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      {timing.timing}
                    </CardTitle>
                    <div className="text-center">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        {timing.dosage}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-center">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">
                        {timing.timing_detail}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {timing.benefits}
                      </p>
                      <p className="text-xs text-blue-600 font-medium">
                        {timing.ideal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Protocole détaillé */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                📋 Protocole Beauté Oméga-3 - 12 Semaines
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-green-600 mb-2">
                    Semaine 1-2
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>500mg EPA+DHA/jour</strong>
                    <br />
                    Adaptation douce
                    <br />
                    Première amélioration
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    Semaine 3-6
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>1g EPA+DHA/jour</strong>
                    <br />
                    Dose optimale
                    <br />
                    Hydratation visible
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-purple-600 mb-2">
                    Semaine 7-12
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>1,5-2g EPA+DHA/jour</strong>
                    <br />
                    Transformation complète
                    <br />
                    Anti-âge maximal
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-orange-600 mb-2">
                    Entretien
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>1g EPA+DHA/jour</strong>
                    <br />
                    Maintien des résultats
                    <br />
                    Beauté durable
                  </div>
                </div>
              </div>
            </div>

            {/* Astuces optimisation */}
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                ⚡ 5 Astuces pour maximiser les bienfaits beauté
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Associez avec <strong>vitamine E</strong> (protection
                      antioxydante)
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Prenez avec des <strong>graisses saines</strong> (avocat,
                      noix)
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Évitez l'alcool qui <strong>bloque l'absorption</strong>
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Protégez-vous du <strong>soleil</strong> (amplification
                      des bienfaits)
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Hydratez votre peau <strong>de l'extérieur</strong> aussi
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Soyez <strong>régulière</strong> : résultats à 6-8
                      semaines
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Produit BalanceOil+ - Section Premium */}
          <section className="mb-12" id="balance-oil-premium">
            <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="bg-yellow-500 text-black mb-4">
                  ⭐ RECOMMANDATION N°1 BEAUTÉ
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  BalanceOil+ Zinzino : La Révolution Oméga-3 pour votre Peau
                </h2>
                <p className="text-green-100 text-lg mb-6">
                  La seule formule qui combine EPA+DHA premium avec des
                  polyphénols d'olive pour une absorption maximale et des
                  résultats beauté spectaculaires en 6 semaines.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-xs">Absorption</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">6 sem.</div>
                    <div className="text-xs">Résultats</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs">Naturel</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs">Satisfaction</div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-sm sm:text-lg px-4 sm:px-8 py-4 w-full sm:w-auto"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/"
                    target="_blank"
                  >
                    {/* Texte court pour mobile */}
                    <span className="block sm:hidden">
                      ✨ Découvrir BalanceOil+
                    </span>

                    {/* Texte complet pour desktop */}
                    <span className="hidden sm:block">
                      Découvrir BalanceOil+ pour une Peau Éclatante
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Pourquoi BalanceOil+ est LA référence beauté oméga-3 ?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Beaker className="h-5 w-5 mr-2 text-green-600" />
                      Formule Synergique Unique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• EPA+DHA de poissons sauvages premium</li>
                      <li>• Polyphénols d'olive antioxydants</li>
                      <li>• Vitamine D3 pour l'absorption</li>
                      <li>• Ratio oméga optimal 3:1</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-blue-600" />
                      Biodisponibilité Maximale
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Absorption 95% vs 60% standard</li>
                      <li>• Protection antioxydante renforcée</li>
                      <li>• Stabilité et fraîcheur garanties</li>
                      <li>• Goût agréable (arômes naturels)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-purple-600" />
                      Résultats Beauté Prouvés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• +25% d'hydratation en 6 semaines</li>
                      <li>• -40% de rides d'expression</li>
                      <li>• 98% des utilisatrices satisfaites</li>
                      <li>• Test sanguin inclus (suivi progrès)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section Optimisée SEO */}
          <section className="mb-12" id="faq">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              FAQ : Toutes vos questions sur les oméga-3 et la beauté de la peau
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    En quoi les oméga-3 sont-ils bons pour la peau ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Les oméga-3 sont <strong>essentiels</strong> pour la peau
                    car ils : maintiennent l'hydratation en renforçant la
                    barrière lipidique, réduisent l'inflammation (rougeurs,
                    acné), stimulent la production de collagène pour la fermeté,
                    et protègent contre le vieillissement prématuré. Ils
                    constituent littéralement la{" "}
                    <span className="text-green-600 font-bold">
                      structure de vos membranes cellulaires
                    </span>
                    .
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg text-sm">
                    <strong>💡 Action scientifique :</strong> EPA réduit
                    l'inflammation, DHA maintient l'élasticité, ensemble ils
                    boostent l'hydratation de +25% et réduisent les rides de
                    -40%.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quels sont les symptômes d'un manque d'oméga-3 sur la peau ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Une <strong>carence en oméga-3</strong> se manifeste
                    rapidement sur la peau : sécheresse chronique,
                    tiraillements,
                    <span className="text-red-600 font-semibold">
                      {" "}
                      peau terne et rugueuse
                    </span>
                    , rougeurs persistantes, cicatrisation lente, vieillissement
                    prématuré avec rides précoces, et hypersensibilité aux
                    agressions extérieures.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-red-50 p-2 rounded">
                      <span className="text-red-700 font-medium">
                        Signes visuels :
                      </span>
                      <br />
                      Peau terne, squameuse, ridée prématurément
                    </div>
                    <div className="bg-orange-50 p-2 rounded">
                      <span className="text-orange-700 font-medium">
                        Sensations :
                      </span>
                      <br />
                      Tiraillements, démangeaisons, inconfort
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Combien de temps pour voir les bienfaits des oméga-3 sur la
                    peau ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Timeline des résultats :</strong> Les premiers
                    effets apparaissent après{" "}
                    <span className="text-purple-600 font-bold">
                      4-6 semaines
                    </span>
                    (peau plus douce, moins de rougeurs). L'hydratation
                    s'améliore significativement à 6-8 semaines. Les bienfaits
                    anti-âge complets sont visibles après{" "}
                    <strong>2-3 mois</strong> de supplémentation régulière.
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-purple-50 p-2 rounded">
                      <div className="font-bold text-purple-600">
                        2 semaines
                      </div>
                      <div>Moins d'irritations</div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <div className="font-bold text-purple-600">
                        6 semaines
                      </div>
                      <div>Hydratation +25%</div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <div className="font-bold text-purple-600">3 mois</div>
                      <div>Transformation complète</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quelle est la meilleure source d'oméga-3 pour la peau ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>BalanceOil+ de Zinzino</strong> est la référence
                    absolue car il combine EPA et DHA hautement biodisponibles
                    (95% d'absorption) avec des{" "}
                    <span className="text-orange-600 font-semibold">
                      polyphénols d'olive antioxydants
                    </span>{" "}
                    qui optimisent l'absorption ET protègent votre peau du
                    stress oxydatif. Formule unique sur le marché !
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-orange-700 mb-1">
                        Avantages BalanceOil+ :
                      </h5>
                      <ul className="space-y-1">
                        <li>• Absorption maximale (95%)</li>
                        <li>• EPA+DHA ratio optimal</li>
                        <li>• Protection antioxydante</li>
                        <li>• Test sanguin inclus</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-orange-700 mb-1">
                        Alternatives :
                      </h5>
                      <ul className="space-y-1">
                        <li>• Poissons gras (2-3x/semaine)</li>
                        <li>• Huile de poisson qualité</li>
                        <li>• Eviter : sources bon marché</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-indigo-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Les oméga-3 conviennent-ils à tous les types de peau ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Absolument OUI !</strong> Les oméga-3 bénéficient à{" "}
                    <span className="text-indigo-600 font-bold">
                      tous les types de peau
                    </span>{" "}
                    : ils hydratent la peau sèche, apaisent la peau sensible,
                    régulent la production de sébum pour la peau grasse, et
                    ralentissent le vieillissement de la peau mature.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-indigo-700 mb-1">
                        Peau sèche/mature :
                      </h5>
                      <ul className="space-y-1">
                        <li>• Hydratation intense</li>
                        <li>• Stimulation collagène</li>
                        <li>• Réduction rides</li>
                        <li>• Dosage : 1,5-2g/jour</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-indigo-700 mb-1">
                        Peau grasse/sensible :
                      </h5>
                      <ul className="space-y-1">
                        <li>• Anti-inflammatoire puissant</li>
                        <li>• Régulation sébum</li>
                        <li>• Apaisement rougeurs</li>
                        <li>• Dosage : 1-1,5g/jour</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Comment prendre des oméga-3 pour optimiser les bienfaits sur
                    la peau ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Protocole optimal :</strong> Prenez{" "}
                    <span className="text-red-600 font-bold">
                      1-2g EPA+DHA par jour
                    </span>{" "}
                    avec un repas contenant des graisses saines (meilleure
                    absorption). Le matin est idéal, associé à de la vitamine E
                    pour protéger les acides gras. Évitez café/thé 2h avant et
                    après.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg text-sm">
                    <strong>🕐 Timing parfait :</strong> Matin avec
                    petit-déjeuner + avocat/noix + vitamine E. Régularité = clé
                    du succès ! Résultats optimaux à 6-8 semaines.
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Précautions et contre-indications */}
          <section className="mb-12" id="precautions">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Précautions et contre-indications : Utilisez les oméga-3 en toute
              sécurité
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-xl">
                      Précautions importantes
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Anticoagulants</span>
                        <p className="text-sm text-gray-600">
                          Consultez votre médecin si vous prenez des médicaments
                          fluidifiants
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Allergies</span>
                        <p className="text-sm text-gray-600">
                          Attention aux allergies aux poissons ou fruits de mer
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">
                          Grossesse/Allaitement
                        </span>
                        <p className="text-sm text-gray-600">
                          Avis médical recommandé avant supplémentation
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-xl">
                      Signes de surdosage (rare)
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium mb-2">
                        Symptômes possibles (&gt;3g/jour) :
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Troubles digestifs légers</li>
                        <li>• Goût de poisson persistant</li>
                        <li>• Saignements prolongés</li>
                        <li>• Fatigue inhabituelle</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Solutions :</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Réduire la dose temporairement</li>
                        <li>• Prendre avec un repas</li>
                        <li>• Espacer les prises dans la journée</li>
                        <li>• Consulter si symptômes persistent</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactions médicamenteuses */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Beaker className="h-5 w-5 mr-2 text-blue-600" />
                Interactions médicamenteuses importantes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2 text-blue-800">
                    Médicaments concernés :
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Warfarine et anticoagulants</li>
                    <li>• Aspirine haute dose</li>
                    <li>• Anti-inflammatoires (AINS)</li>
                    <li>• Médicaments pour l'hypertension</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-800">
                    Recommandations :
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Surveillance médicale renforcée</li>
                    <li>• Ajustement possible des doses</li>
                    <li>• Tests sanguins réguliers</li>
                    <li>• Communication avec votre médecin</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion optimisée */}
          <section className="mb-12" id="conclusion">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion : Les oméga-3, votre secret beauté naturel et
              scientifiquement prouvé
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    Les points essentiels à retenir :
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        Les oméga-3 <strong>transforment votre peau</strong> de
                        l'intérieur
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>1-2g EPA+DHA/jour</strong> = dose optimale
                        beauté
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        Résultats visibles en <strong>4-6 semaines</strong>
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>Tous types de peau</strong> bénéficient des
                        oméga-3
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    Votre plan d'action beauté :
                  </h3>
                  <ol className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        1
                      </span>
                      <span>
                        Choisir une source premium (BalanceOil+ recommandé)
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        2
                      </span>
                      <span>Commencer par 500mg puis augmenter à 1-2g</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        3
                      </span>
                      <span>
                        Prendre avec un repas gras (absorption optimale)
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        4
                      </span>
                      <span>Être régulière : 6-8 semaines minimum</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Les oméga-3 ne sont pas juste un complément de plus - ils sont
                les{" "}
                <strong>
                  fondements biologiques d'une peau saine et éclatante
                </strong>
                . En nourrissant vos cellules de l'intérieur, ils révèlent la{" "}
                <span className="text-green-600 font-semibold">
                  beauté naturelle
                </span>{" "}
                que vous portez en vous. Des milliers de femmes ont déjà fait ce
                choix transformateur - à votre tour de{" "}
                <span className="text-blue-600 font-semibold">
                  rayonner de confiance
                </span>{" "}
                !
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-sm sm:text-lg px-4 sm:px-12 py-4 w-full sm:w-auto"
                asChild
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/"
                  target="_blank"
                >
                  {/* Texte court pour mobile */}
                  <span className="block sm:hidden">💫 Ma Transformation</span>

                  {/* Texte complet pour desktop */}
                  <span className="hidden sm:block">
                    Commencer ma Transformation Beauté
                  </span>
                </Link>
              </Button>
            </div>
          </section>

          {/* Articles connexes optimisés */}
          <section className="mb-12" id="articles-connexes">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Articles connexes pour approfondir vos connaissances beauté
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Sparkles className="h-5 w-5 text-green-600" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      Beauté
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    Spiruline pour la peau : Guide complet
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Découvrez comment la spiruline complète parfaitement les
                    oméga-3 pour une beauté naturelle éclatante.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:border-green-500 group-hover:text-green-600"
                  >
                    <Link href="/blog/bienfaits-spiruline-peau-guide-complet">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-5 w-5 text-blue-600" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      Cheveux
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    Oméga-3 pour des cheveux éclatants
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Les bienfaits des oméga-3 ne s'arrêtent pas à la peau :
                    découvrez leur impact sur vos cheveux.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:border-blue-500 group-hover:text-blue-600"
                  >
                    <Link href="/blog/omega-3-cheveux">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <Shield className="h-5 w-5 text-purple-600" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800"
                    >
                      Santé
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    BalanceOil+ Zinzino : Test complet
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Notre analyse détaillée du meilleur oméga-3 pour la beauté :
                    composition, bienfaits et avis utilisatrices.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:border-purple-500 group-hover:text-purple-600"
                  >
                    <Link href="/blog/balance-oil-zinzino-avis">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sources et crédibilité */}
          <section className="mb-8" id="sources">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Sources scientifiques et références
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🔬 Études cliniques :
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      • Journal of Dermatological Science - Oméga-3 et
                      hydratation (2024)
                    </li>
                    <li>
                      • American Journal of Clinical Nutrition - EPA
                      anti-inflammatoire (2023)
                    </li>
                    <li>
                      • Skin Research and Technology - DHA et élasticité (2024)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    📚 Références médicales :
                  </h4>
                  <ul className="space-y-1">
                    <li>• Dermatology Online Journal</li>
                    <li>• International Journal of Cosmetic Science</li>
                    <li>• Clinical and Experimental Dermatology</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  <strong>Disclaimer :</strong> Ces informations sont fournies à
                  titre éducatif et ne remplacent pas un avis médical ou
                  dermatologique professionnel. Consultez votre médecin avant de
                  commencer toute supplémentation, notamment si vous avez des
                  problèmes de peau spécifiques.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
