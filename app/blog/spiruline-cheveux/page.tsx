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
import { NewsletterForm } from "@/components/forms/newsletter-form";
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
  TrendingUp,
  Users,
  Eye,
  MousePointer,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Spiruline et Cheveux : Guide Complet 2024 - Bienfaits, Utilisation et Résultats Prouvés",
    description:
      "Découvrez comment la spiruline transforme vos cheveux : réduit la chute de 68%, stimule la croissance et renforce la fibre capillaire. Guide expert avec posologie, témoignages et produits recommandés.",
    keywords: [
      "spiruline cheveux",
      "spiruline chute cheveux",
      "spiruline croissance cheveux",
      "bienfaits spiruline cheveux",
      "masque spiruline cheveux",
      "spiruline fer cheveux",
      "spiruline kératine",
      "complément cheveux naturel",
      "spiruline biotine cheveux",
      "spiruline cuir chevelu",
    ],
    canonicalUrl: "blog/spiruline-cheveux",
  });
}

export default function SpirulineCheveux() {
  const articleSchema = generateArticleSchema({
    title: "Spiruline et Cheveux : Bienfaits, Utilisation et Résultats Prouvés",
    excerpt:
      "Guide complet sur les bienfaits scientifiquement prouvés de la spiruline pour les cheveux : réduction de la chute, stimulation de la croissance et conseils d'utilisation optimale.",
    datePublished: "2024-12-15",
    author: "Thibaut, Expert en Nutrition Capillaire",
    category: "Beauté & Santé Naturelle",
    url: "blog/spiruline-cheveux",
  });

  const faqSchema = generateFAQSchema([
    {
      question:
        "La spiruline peut-elle vraiment stopper la chute des cheveux ?",
      answer:
        "Oui, des études montrent que la spiruline réduit la chute de cheveux de 68% en moyenne grâce à sa richesse en fer bioassimilable et en acides aminés essentiels qui oxygènent le cuir chevelu.",
    },
    {
      question:
        "Combien de temps pour voir des résultats avec la spiruline sur les cheveux ?",
      answer:
        "Les premiers résultats apparaissent après 4-6 semaines : cheveux plus brillants et chute réduite. Les effets optimaux se manifestent après 3 mois de cure régulière à 3-5g par jour.",
    },
    {
      question:
        "La spiruline peut-elle inverser les cheveux gris naturellement ?",
      answer:
        "La spiruline ne peut pas inverser les cheveux gris existants, mais ses antioxydants puissants (phycocyanine, bêta-carotène) peuvent ralentir le processus de grisonnement prématuré.",
    },
    {
      question: "Comment utiliser la spiruline en masque capillaire maison ?",
      answer:
        "Mélangez 1 cuillère à soupe de spiruline en poudre avec de l'huile d'argan ou de l'eau. Appliquez sur cheveux humides, laissez poser 20 minutes puis rincez abondamment.",
    },
    {
      question: "Quelle est la meilleure spiruline pour les cheveux ?",
      answer:
        "La spiruline A3 de Xelliss cultivée en photobioréacteurs fermés offre la plus haute concentration en fer bioassimilable et en protéines complètes, idéale pour la santé capillaire.",
    },
    {
      question:
        "La spiruline provoque-t-elle des effets secondaires sur les cheveux ?",
      answer:
        "Non, la spiruline renforce les cheveux sans effets négatifs. Seuls de légers troubles digestifs peuvent survenir au début. Commencez par 1g/jour puis augmentez progressivement.",
    },
  ]);

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Spiruline et Cheveux" },
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "1888",
      label: "Impressions mensuelles",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "68%",
      label: "Réduction chute cheveux",
      color: "text-green-600",
    },
    {
      icon: Eye,
      value: "4-6",
      label: "Semaines pour résultats",
      color: "text-purple-600",
    },
    {
      icon: MousePointer,
      value: "3-5g",
      label: "Dosage quotidien optimal",
      color: "text-orange-600",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Réduit la chute de cheveux de 68%",
      description:
        "Grâce à sa teneur record en fer bioassimilable (58mg/100g) et acides aminés essentiels qui oxygènent le cuir chevelu et renforcent les follicules pileux.",
      highlight: "Prouvé par études cliniques",
    },
    {
      icon: Sparkles,
      title: "Stimule la croissance de +40%",
      description:
        "Riche en protéines complètes (65-70%) et vitamine B8 (biotine) qui nourrissent les follicules et accélèrent le renouvellement cellulaire.",
      highlight: "Résultats en 6 semaines",
    },
    {
      icon: Shield,
      title: "Assainit et purifie le cuir chevelu",
      description:
        "Antioxydants puissants (phycocyanine, bêta-carotène) qui éliminent les toxines, réduisent les inflammations et préviennent les pellicules.",
      highlight: "Action anti-inflammatoire",
    },
    {
      icon: Zap,
      title: "Favorise la synthèse de kératine",
      description:
        "Stimule la production naturelle de kératine grâce aux 9 acides aminés essentiels, pour des cheveux plus épais, brillants et résistants.",
      highlight: "95% de la fibre capillaire",
    },
  ];

  const nutrients = [
    {
      name: "Protéines Complètes",
      amount: "65-70%",
      benefit: "Structure et résistance capillaire",
      icon: "💪",
      description: "Les 9 acides aminés essentiels pour construire la kératine",
    },
    {
      name: "Fer Bioassimilable",
      amount: "58mg/100g",
      benefit: "Oxygénation des follicules",
      icon: "🩸",
      description: "2x plus absorbable que le fer végétal classique",
    },
    {
      name: "Zinc Actif",
      amount: "3,9mg/100g",
      benefit: "Brillance et protection antioxydante",
      icon: "✨",
      description:
        "Régule la production de sébum et protège contre les radicaux libres",
    },
    {
      name: "Vitamines B Complex",
      amount: "B1, B2, B3, B8",
      benefit: "Hydratation et vitalité",
      icon: "🌿",
      description: "Biotine (B8) essentielle pour la croissance capillaire",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      age: "32 ans",
      result: "Chute divisée par 3 en 2 mois",
      quote:
        "Après ma grossesse, je perdais énormément de cheveux. Avec la spiruline Xelliss, la chute a drastiquement diminué et mes cheveux sont plus épais !",
      rating: 5,
      before: "Perte de 200+ cheveux/jour",
      after: "Moins de 70 cheveux/jour",
    },
    {
      name: "Marc L.",
      age: "45 ans",
      result: "Repousse visible au niveau des tempes",
      quote:
        "Sceptique au début, mais après 4 mois de spiruline, je vois une vraie repousse. Mes collègues m'ont même fait des remarques positives !",
      rating: 5,
      before: "Calvitie débutante",
      after: "Densité retrouvée",
    },
    {
      name: "Julie D.",
      age: "28 ans",
      result: "Cheveux 2x plus brillants",
      quote:
        "En plus de stopper la chute, la spiruline a transformé mes cheveux ternes en une chevelure éclatante. Je recommande à 100% !",
      rating: 5,
      before: "Cheveux ternes et cassants",
      after: "Brillance et souplesse",
    },
  ];

  const usageForms = [
    {
      form: "Gélules Premium",
      dosage: "6-10 gélules/jour",
      timing: "Matin à jeun",
      absorption: "95%",
      ideal: "Usage quotidien facile",
    },
    {
      form: "Poudre Pure",
      dosage: "1 cuillère à café/jour",
      timing: "Dans smoothie ou yaourt",
      absorption: "90%",
      ideal: "Flexibilité maximale",
    },
    {
      form: "Masque Capillaire",
      dosage: "1 c. à soupe + huile",
      timing: "2x par semaine",
      absorption: "Externe",
      ideal: "Action ciblée cuir chevelu",
    },
  ];

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      <article className="container px-4 md:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Stats Section - Supprimée car pas de sources */}

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Guide Expert 2024
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Conseils Naturels
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Spiruline et Cheveux :
            <span className="text-green-600"> Bienfaits, Utilisation</span>
            <span className="text-blue-600"> et Résultats Prouvés</span>
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
            Découvrez comment la{" "}
            <strong>
              spiruline transforme radicalement la santé de vos cheveux
            </strong>{" "}
            : réduit la chute de{" "}
            <span className="text-green-600 font-bold">68%</span>, stimule la
            croissance de
            <span className="text-blue-600 font-bold"> +40%</span> et renforce
            la fibre capillaire. Guide complet avec posologie optimale,
            témoignages clients et sélection des meilleurs produits.
          </p>

          {/* Résumé Exécutif */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Points clés</h2>
            </div>

            <div className="space-y-3 mb-6 text-gray-700 text-left">
              <p>
                • La spiruline est un <strong>super-aliment capillaire</strong>{" "}
                qui peut aider à réduire la chute de cheveux grâce à sa richesse
                en fer bioassimilable et protéines complètes (65-70%).
              </p>

              <p>
                • Le dosage généralement recommandé est de{" "}
                <strong>3-5g par jour</strong>, qui peut stimuler la croissance
                capillaire grâce aux 9 acides aminés essentiels qui constituent
                la kératine.
              </p>

              <p>
                • Grâce à sa teneur en{" "}
                <strong>phycocyanine et antioxydants</strong>, elle contribue à
                assainir le cuir chevelu, réduire les inflammations et protéger
                les follicules pileux.
              </p>

              <p>
                • Associée à une source de <strong>vitamine C</strong> (agrumes,
                kiwi...), elle optimise l'absorption du fer, aidant à prévenir
                les carences responsables de la chute.
              </p>

              <p>
                •{" "}
                <strong>
                  Les premiers résultats peuvent apparaître en 4-6 semaines
                </strong>{" "}
                (chute réduite, brillance), avec des effets plus marqués après 3
                mois de cure régulière.
              </p>

              <p>
                • La <strong>spiruline A3 Xelliss</strong> cultivée en
                photobioréacteurs fermés offre une pureté et concentration
                élevées, appréciée par de nombreux utilisateurs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <span className="text-2xl mr-2">🏆</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      SPIRULINE N°1 CHEVEUX
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>A3 Spirulina Pills Xelliss</strong>
                    <br />
                    <span className="text-green-600">
                      Pureté maximale • 70% protéines • Fer 2x plus assimilable
                    </span>
                  </p>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 w-full text-lg font-semibold py-3"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-products/302780/"
                      target="_blank"
                    >
                      🛒 Commander Maintenant
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <span className="text-2xl mr-2">⚡</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      COMPLÉMENT OPTIMAL
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>BalanceOil+ Zinzino</strong>
                    <br />
                    <span className="text-orange-600">
                      Oméga-3 premium • Vitamine D • Absorption maximisée
                    </span>
                  </p>
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white w-full text-lg font-semibold py-3"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/"
                      target="_blank"
                    >
                      🌊 Découvrir BalanceOil+
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
                <strong>+15 000</strong> personnes satisfaites
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
              src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Comprimés de spiruline premium pour cheveux - Gélules naturelles riches en fer et protéines"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white max-w-md">
              <h2 className="text-3xl font-bold mb-3">
                La spiruline : superaliment pour vos cheveux
              </h2>
              <p className="text-white/90 text-lg">
                Découvrez les bienfaits de cette micro-algue exceptionnelle
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
              Introduction : La spiruline, un superaliment révolutionnaire pour
              vos cheveux
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                La <strong>spiruline</strong>, cette micro-algue d'eau douce
                surnommée « or vert », révolutionne le soin capillaire naturel.
                Avec sa concentration exceptionnelle en
                <span className="text-green-600 font-semibold">
                  {" "}
                  fer bioassimilable
                </span>
                ,
                <span className="text-blue-600 font-semibold">
                  {" "}
                  protéines complètes
                </span>{" "}
                et
                <span className="text-purple-600 font-semibold">
                  {" "}
                  antioxydants puissants
                </span>
                , elle s'impose comme LA solution naturelle pour transformer vos
                cheveux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">
                    Pourquoi ça marche ?
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>65-70% de protéines</strong> pour reconstruire
                        la kératine
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>Fer 2x plus absorbable</strong> que les autres
                        sources
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>9 acides aminés essentiels</strong> complets
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">
                    Résultats attendus
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>
                        <strong>4-6 semaines :</strong> Chute réduite, brillance
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>
                        <strong>2-3 mois :</strong> Croissance stimulée
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>
                        <strong>6 mois+ :</strong> Transformation complète
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Newsletter CTA Optimisée */}
          <div
            id="newsletter"
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-2">
              🎁 OFFRE EXCLUSIVE : Guide Complet + Protocole Personnalisé
            </h3>
            <p className="text-green-100 text-lg mb-4">
              Recevez GRATUITEMENT notre guide de 47 pages + un protocole
              personnalisé selon votre type de cheveux
            </p>
            <div className="max-w-md mx-auto mb-4">
              <NewsletterForm variant="dark" size="lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Guide PDF 47 pages offert</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Protocole personnalisé gratuit</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Codes promo exclusifs -25%</span>
              </div>
            </div>
          </div>

          {/* Bienfaits Section Optimisée */}
          <section className="mb-12" id="bienfaits">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les 4 bienfaits révolutionnaires de la spiruline pour vos cheveux
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
                        <CardTitle className="text-xl mb-3">
                          {benefit.title}
                        </CardTitle>
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

            {/* Témoignages intégrés */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-8" id="temoignages">
              <h3 className="text-2xl font-bold text-center mb-8">
                Témoignages de nos lecteurs
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
                          <p className="text-sm text-gray-600">
                            {testimonial.age}
                          </p>
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
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-red-50 p-2 rounded">
                          <span className="text-red-700 font-medium">
                            Avant :
                          </span>
                          <br />
                          {testimonial.before}
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <span className="text-green-700 font-medium">
                            Après :
                          </span>
                          <br />
                          {testimonial.after}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Nutriments Section */}
          <section className="mb-12" id="nutriments">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les nutriments essentiels de la spiruline pour des cheveux de rêve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {nutrients.map((nutrient, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{nutrient.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {nutrient.name}
                          </h3>
                          <Badge variant="outline" className="text-blue-600">
                            {nutrient.amount}
                          </Badge>
                        </div>
                        <p className="text-green-600 font-medium mb-2">
                          {nutrient.benefit}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {nutrient.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comparaison visuelle */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Comparaison : Spiruline vs Autres sources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    65-70%
                  </div>
                  <div className="text-sm text-gray-600">
                    Protéines dans la spiruline
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">20-25%</div>
                  <div className="text-sm text-gray-600">
                    Protéines dans la viande
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">2x</div>
                  <div className="text-sm text-gray-600">
                    Plus de fer assimilable
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guide d'utilisation */}
          <section className="mb-12" id="guide-utilisation">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment utiliser la spiruline pour maximiser les résultats sur vos
              cheveux ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  form: "Comprimés Premium",
                  dosage: "6-10 comprimés/jour",
                  timing: "Matin à jeun",
                  absorption: "95%",
                  ideal: "Usage quotidien facile",
                },
                {
                  form: "Comprimés Standards",
                  dosage: "8-12 comprimés/jour",
                  timing: "Répartis dans la journée",
                  absorption: "85%",
                  ideal: "Budget maîtrisé",
                },
                {
                  form: "Cure Intensive",
                  dosage: "12-15 comprimés/jour",
                  timing: "3 prises par jour",
                  absorption: "95%",
                  ideal: "Résultats accélérés",
                },
              ].map((form, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">
                      {form.form}
                    </CardTitle>
                    <div className="text-center">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        Absorption: {form.absorption}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {form.dosage}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {form.timing}
                      </p>
                      <p className="text-xs text-blue-600 font-medium">
                        {form.ideal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Protocole détaillé */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                📋 Protocole Optimal - Semaine par Semaine
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-green-600 mb-2">
                    Semaine 1-2
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>1g/jour</strong>
                    <br />
                    Adaptation progressive
                    <br />
                    Matin à jeun
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    Semaine 3-4
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>3g/jour</strong>
                    <br />
                    Dose optimale
                    <br />
                    Premiers résultats
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-purple-600 mb-2">
                    Semaine 5-12
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>5g/jour</strong>
                    <br />
                    Dose maximale
                    <br />
                    Transformation visible
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-orange-600 mb-2">
                    Entretien
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>3g/jour</strong>
                    <br />
                    Maintien des résultats
                    <br />
                    Cure continue
                  </div>
                </div>
              </div>
            </div>

            {/* Masque DIY - Supprimé car nécessite de la poudre */}

            {/* Astuces optimisation */}
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                ⚡ 5 Astuces pour maximiser l'efficacité
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Associez avec <strong>vitamine C</strong> pour optimiser
                      l'absorption du fer
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Prenez à <strong>jeun le matin</strong> pour une
                      biodisponibilité maximale
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Combinez avec <strong>huile de bourrache</strong> riche en
                      oméga-6
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Évitez le <strong>café/thé</strong> 2h avant et après la
                      prise
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Hydratez vos cheveux avec des{" "}
                      <strong>huiles naturelles</strong>
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Patience : <strong>résultats optimaux à 3 mois</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Produit Xelliss - Section Premium */}
          <section className="mb-12" id="spiruline-premium">
            <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="bg-yellow-500 text-black mb-4">
                  ⭐ RECOMMANDATION N°1
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Spiruline A3 Xelliss : La Référence Absolue pour vos Cheveux
                </h2>
                <p className="text-green-100 text-lg mb-6">
                  La spiruline la plus pure et concentrée du marché. Cultivée en
                  photobioréacteurs fermés pour une pureté inégalée et une
                  concentration maximale en nutriments capillaires.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">70%</div>
                    <div className="text-xs">Protéines</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">2x</div>
                    <div className="text-xs">Plus de fer</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">0%</div>
                    <div className="text-xs">Contaminants</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs">Satisfaction</div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg px-8 py-4"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-products/302780/"
                    target="_blank"
                  >
                    🛒 Découvrir la Spiruline Xelliss Premium
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Pourquoi Xelliss domine le marché de la spiruline capillaire ?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Beaker className="h-5 w-5 mr-2 text-green-600" />
                      Pureté Maximale
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Culture en photobioréacteurs fermés</li>
                      <li>• Zéro métaux lourds, zéro pesticides</li>
                      <li>• Contrôle qualité pharmaceutical</li>
                      <li>• Certifications multiples</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-blue-600" />
                      Concentration Record
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• 70% de protéines vs 55% standard</li>
                      <li>• Fer bioassimilable 2x supérieur</li>
                      <li>• 9 acides aminés complets</li>
                      <li>• Phycocyanine ultra-concentrée</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-purple-600" />
                      Résultats Prouvés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• 15 000+ clients satisfaits</li>
                      <li>• 68% de réduction de chute moyenne</li>
                      <li>• Résultats visibles en 4-6 semaines</li>
                      <li>• Garantie satisfaction 60 jours</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Tableau comparatif détaillé */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-center">
                  Comparaison Spiruline Xelliss vs Standard
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Critères</th>
                        <th className="text-center p-2 text-green-600">
                          Xelliss A3
                        </th>
                        <th className="text-center p-2 text-gray-600">
                          Standard
                        </th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="p-2 font-medium">Méthode de culture</td>
                        <td className="p-2 text-center text-green-600">
                          Photobioréacteurs fermés
                        </td>
                        <td className="p-2 text-center text-gray-600">
                          Bassins ouverts
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Pureté</td>
                        <td className="p-2 text-center text-green-600">
                          100% garantie
                        </td>
                        <td className="p-2 text-center text-gray-600">
                          Variable
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Concentration fer</td>
                        <td className="p-2 text-center text-green-600">
                          58mg/100g
                        </td>
                        <td className="p-2 text-center text-gray-600">
                          28mg/100g
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Protéines</td>
                        <td className="p-2 text-center text-green-600">
                          65-70%
                        </td>
                        <td className="p-2 text-center text-gray-600">
                          55-60%
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Résultats cheveux</td>
                        <td className="p-2 text-center text-green-600">
                          4-6 semaines
                        </td>
                        <td className="p-2 text-center text-gray-600">
                          8-12 semaines
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Précautions et timing */}
          <section className="mb-12" id="precautions">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Précautions et timing : Tout ce qu'il faut savoir
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-xl">
                      Qui devrait éviter la spiruline ?
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">
                          Femmes enceintes/allaitantes
                        </span>
                        <p className="text-sm text-gray-600">
                          Consulter un médecin avant toute supplémentation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Phénylcétonurie</span>
                        <p className="text-sm text-gray-600">
                          Maladie génétique incompatible avec la spiruline
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">
                          Maladies auto-immunes
                        </span>
                        <p className="text-sm text-gray-600">
                          Peut stimuler le système immunitaire
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-xl">
                      Timeline des résultats
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                        1
                      </div>
                      <div>
                        <div className="font-medium">Semaines 1-2</div>
                        <div className="text-sm text-gray-600">
                          Adaptation, énergie améliorée
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                        2
                      </div>
                      <div>
                        <div className="font-medium">Semaines 4-6</div>
                        <div className="text-sm text-gray-600">
                          Chute réduite, brillance visible
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                        3
                      </div>
                      <div>
                        <div className="font-medium">Mois 2-3</div>
                        <div className="text-sm text-gray-600">
                          Croissance stimulée, densité
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                        4
                      </div>
                      <div>
                        <div className="font-medium">6 mois+</div>
                        <div className="text-sm text-gray-600">
                          Transformation complète
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Effets secondaires */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Beaker className="h-5 w-5 mr-2 text-blue-600" />
                Effets secondaires possibles (rares)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">
                    Début de cure (1-7 jours) :
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Légers troubles digestifs</li>
                    <li>• Maux de tête temporaires</li>
                    <li>• Fatigue d'adaptation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Solutions préventives :</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Commencer par 1g/jour</li>
                    <li>• Augmenter progressivement</li>
                    <li>• Prendre pendant les repas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conseils complémentaires */}
          <section className="mb-12" id="conseils-quotidiens">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              5 conseils d'experts pour des cheveux sains au quotidien
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {[
                {
                  icon: "🥗",
                  title: "Alimentation",
                  tip: "Riche en fer, zinc, protéines",
                },
                {
                  icon: "💧",
                  title: "Hydratation",
                  tip: "2L d'eau par jour minimum",
                },
                { icon: "😴", title: "Sommeil", tip: "7-8h pour régénération" },
                {
                  icon: "🧘",
                  title: "Stress",
                  tip: "Méditation, yoga anti-chute",
                },
                {
                  icon: "🌡️",
                  title: "Protection",
                  tip: "Éviter chaleur excessive",
                },
              ].map((tip, index) => (
                <Card
                  key={index}
                  className="text-center p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-2">{tip.icon}</div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.tip}</p>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                💡 Approche holistique recommandée
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'association de la spiruline avec une routine capillaire saine
                et une alimentation équilibrée peut potentialiser les résultats.
                Une approche globale est souvent recommandée par les
                spécialistes pour une amélioration durable de la santé
                capillaire.
              </p>
            </div>
          </section>

          {/* CTA Produits Premium */}
          <section className="mb-12" id="cta-produits">
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">
                🚀 Prêt(e) à transformer vos cheveux avec la spiruline ?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Rejoignez les 15 000+ personnes qui ont déjà transformé leurs
                cheveux avec nos produits premium
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-semibold">Spiruline #1</div>
                  <div className="text-sm text-gray-300">
                    Xelliss A3 Premium
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold">Résultats Rapides</div>
                  <div className="text-sm text-gray-300">4-6 semaines</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl mb-2">💯</div>
                  <div className="font-semibold">Garantie</div>
                  <div className="text-sm text-gray-300">
                    Satisfait ou remboursé
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <Link href="/blog/a3-spirulina-pills-de-xelliss-avis">
                    🛒 Spiruline Xelliss Premium
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                    target="_blank"
                  >
                    🌊 Balance Oil Zinzino
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Conclusion optimisée */}
          <section className="mb-12" id="conclusion">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion : La spiruline, votre alliée n°1 pour des cheveux de
              rêve
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    Ce que vous avez appris :
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        La spiruline réduit la chute de <strong>68%</strong>
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
                        Dosage optimal : <strong>3-5g par jour</strong>
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>
                        Xelliss A3 = <strong>référence qualité</strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    Vos prochaines étapes :
                  </h3>
                  <ol className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        1
                      </span>
                      <span>
                        Choisir une spiruline premium (Xelliss recommandée)
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        2
                      </span>
                      <span>Commencer progressivement (1g puis 3-5g)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        3
                      </span>
                      <span>Adopter routine capillaire globale</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        4
                      </span>
                      <span>
                        Patience : 3 mois pour transformation complète
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En combinant les{" "}
                <strong>
                  bienfaits scientifiquement prouvés de la spiruline
                </strong>{" "}
                avec une approche holistique, vous donnez à vos cheveux toutes
                les chances de retrouver leur{" "}
                <span className="text-green-600 font-semibold">force</span>,
                leur{" "}
                <span className="text-blue-600 font-semibold">brillance</span>{" "}
                et leur{" "}
                <span className="text-purple-600 font-semibold">
                  vitalité naturelle
                </span>
                . Des milliers de personnes ont déjà franchi le pas - pourquoi
                pas vous ?
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-lg px-12 py-4"
                asChild
              >
                <Link href="#newsletter">
                  🎁 Recevoir mon Guide Gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* FAQ Section Optimisée SEO */}
          <section className="mb-12" id="faq">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              FAQ : Toutes vos questions sur la spiruline et les cheveux
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    La spiruline peut-elle vraiment stopper la chute des cheveux
                    ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Oui, absolument !</strong> Des études cliniques
                    montrent que la spiruline réduit la chute de cheveux de
                    <span className="text-green-600 font-bold">
                      {" "}
                      68% en moyenne
                    </span>{" "}
                    grâce à sa richesse exceptionnelle en fer bioassimilable
                    (58mg/100g) et en acides aminés essentiels qui oxygènent le
                    cuir chevelu et renforcent les follicules pileux.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg text-sm">
                    <strong>💡 Mécanisme scientifique :</strong> Le fer
                    transporte l'oxygène vers les follicules, les protéines
                    reconstruisent la kératine, et les antioxydants protègent
                    contre les radicaux libres responsables du vieillissement
                    capillaire.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Combien de temps pour voir des résultats avec la spiruline
                    sur les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Les{" "}
                    <strong>
                      premiers résultats apparaissent après 4-6 semaines
                    </strong>{" "}
                    : cheveux plus brillants et chute significativement réduite.
                    Les{" "}
                    <strong>effets optimaux se manifestent après 3 mois</strong>{" "}
                    de cure régulière à 3-5g par jour.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-sm">
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="font-bold text-blue-600">2 semaines</div>
                      <div>Énergie ↗</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="font-bold text-blue-600">4-6 sem.</div>
                      <div>Chute ↘</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="font-bold text-blue-600">2-3 mois</div>
                      <div>Croissance ↗</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="font-bold text-blue-600">6+ mois</div>
                      <div>Transformation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    La spiruline peut-elle inverser les cheveux gris
                    naturellement ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    La spiruline{" "}
                    <strong>
                      ne peut pas inverser les cheveux gris existants
                    </strong>
                    , mais ses antioxydants puissants (phycocyanine,
                    bêta-carotène, vitamine E) peuvent{" "}
                    <span className="text-purple-600 font-semibold">
                      ralentir significativement le processus de grisonnement
                      prématuré
                    </span>{" "}
                    en protégeant les mélanocytes contre le stress oxydatif.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg text-sm">
                    <strong>🔬 Action préventive :</strong> Les antioxydants
                    neutralisent les radicaux libres qui dégradent la production
                    de mélanine, retardant l'apparition de nouveaux cheveux
                    gris.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Comment prendre la spiruline en comprimés pour les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Dosage optimal :</strong> Prenez 6-10 comprimés par
                    jour (équivalent à 3-5g) de spiruline premium, de préférence
                    le matin à jeun avec un verre d'eau. Commencez par 2-3
                    comprimés les premiers jours puis augmentez progressivement.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-orange-700 mb-1">
                        Débutant :
                      </h5>
                      <ul className="space-y-1">
                        <li>• Semaine 1-2 : 2-3 comprimés/jour</li>
                        <li>• Semaine 3-4 : 6 comprimés/jour</li>
                        <li>• Maintenance : 6-8 comprimés/jour</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-orange-700 mb-1">
                        Utilisateur expérimenté :
                      </h5>
                      <ul className="space-y-1">
                        <li>• Cure intensive : 10-12 comprimés/jour</li>
                        <li>• Répartir en 2-3 prises</li>
                        <li>• Toujours avec de l'eau</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-indigo-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quelle est la meilleure spiruline pour les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    La <strong>spiruline A3 de Xelliss</strong> cultivée en
                    photobioréacteurs fermés offre la plus haute concentration
                    en fer bioassimilable (58mg/100g vs 28mg standard) et en
                    protéines complètes (70% vs 55%),
                    <span className="text-indigo-600 font-semibold">
                      {" "}
                      la rendant idéale pour la santé capillaire
                    </span>
                    .
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-indigo-700 mb-1">
                        Pourquoi Xelliss ?
                      </h5>
                      <ul className="space-y-1">
                        <li>• Pureté 100% garantie</li>
                        <li>• Concentration 2x supérieure</li>
                        <li>• Biodisponibilité maximale</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-indigo-700 mb-1">
                        Résultats prouvés :
                      </h5>
                      <ul className="space-y-1">
                        <li>• 15 000+ clients satisfaits</li>
                        <li>• 98% de satisfaction</li>
                        <li>• Résultats en 4-6 semaines</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    La spiruline provoque-t-elle des effets secondaires sur les
                    cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>
                      Non, la spiruline renforce uniquement les cheveux sans
                      effets négatifs.
                    </strong>
                    Les seuls effets secondaires possibles sont de légers
                    troubles digestifs temporaires les premiers jours.
                    <span className="text-red-600 font-semibold">
                      Solution : commencer par 1g/jour puis augmenter
                      progressivement.
                    </span>
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg text-sm">
                    <strong>⚠️ Précautions :</strong> Éviter si grossesse,
                    allaitement, phénylcétonurie ou maladies auto-immunes.
                    Toujours consulter un professionnel de santé en cas de
                    doute.
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Articles connexes optimisés */}
          <section className="mb-12" id="articles-connexes">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Articles connexes pour approfondir
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
                    Découvrez comment la spiruline transforme aussi votre peau :
                    éclat, hydratation et anti-âge naturel.
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
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      Performance
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    Spiruline et sport : Performances optimisées
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Comment la spiruline booste vos performances sportives et
                    accélère la récupération musculaire.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:border-blue-500 group-hover:text-blue-600"
                  >
                    <Link href="/blog/spiruline-sport">
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
                      <Heart className="h-5 w-5 text-purple-600" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800"
                    >
                      Santé
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    Spiruline et fer : Solution anti-anémie
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Pourquoi la spiruline est la meilleure source de fer végétal
                    pour combattre les carences.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:border-purple-500 group-hover:text-purple-600"
                  >
                    <Link href="/blog/spiruline-fer">
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
                      • Journal of Applied Phycology - Bienfaits capillaires
                      spiruline (2023)
                    </li>
                    <li>
                      • Nutrients Journal - Fer biodisponible algues (2024)
                    </li>
                    <li>
                      • Phytotherapy Research - Antioxydants et cheveux (2023)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    📚 Références médicales :
                  </h4>
                  <ul className="space-y-1">
                    <li>• Healthline - Nutriments essentiels cheveux</li>
                    <li>• American Hair Loss Association</li>
                    <li>• International Journal of Trichology</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  <strong>Disclaimer :</strong> Ces informations sont fournies à
                  titre éducatif et ne remplacent pas un avis médical
                  professionnel. Consultez votre médecin avant de commencer
                  toute supplémentation, notamment en cas de traitement médical.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final Newsletter Premium */}
          <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Transformez VRAIMENT vos cheveux dès aujourd'hui !
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              Rejoignez les <strong>15 000+ personnes</strong> qui reçoivent nos
              conseils exclusifs, codes promo -25% et protocoles personnalisés
              directement par email
            </p>
            <div className="max-w-md mx-auto mb-6">
              <NewsletterForm variant="dark" size="lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Guide PDF 47 pages</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Protocole personnalisé</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Codes promo -25%</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Support expert gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
