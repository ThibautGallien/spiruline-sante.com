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
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Beaker,
  Leaf,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Oméga-3 pour des Cheveux Sains : Bienfaits Scientifiques et Guide Complet 2024",
    description:
      "Découvrez comment les oméga-3 transforment vos cheveux : stimulent la croissance, réduisent la chute de 40%, améliorent la brillance.",
    keywords: [
      "omega 3 cheveux",
      "omega 3 chute cheveux",
      "omega 3 croissance cheveux",
      "balance oil cheveux",
      "omega 3 cuir chevelu",
      "EPA DHA cheveux",
      "complement cheveux omega 3",
      "huile poisson cheveux",
      "zinzino cheveux",
      "omega 3 brillance cheveux",
    ],
    canonicalUrl: "blog/omega-3-cheveux",
  });
}

export default function Omega3Cheveux() {
  const articleSchema = generateArticleSchema({
    title:
      "Oméga-3 pour des Cheveux Sains : Bienfaits Scientifiques et Guide Complet",
    excerpt:
      "Guide scientifique complet sur les bienfaits des oméga-3 pour la santé capillaire : croissance, brillance et prévention de la chute.",
    datePublished: "2024-12-15",
    author: "Thibaut, Expert en Nutrition Capillaire",
    category: "Santé & Beauté Naturelle",
    url: "blog/omega-3-cheveux",
  });

  const faqSchema = generateFAQSchema([
    {
      question: "Les oméga-3 font-ils vraiment pousser les cheveux ?",
      answer:
        "Oui, les oméga-3 EPA et DHA nourrissent les follicules pileux et améliorent la circulation sanguine du cuir chevelu, stimulant la croissance capillaire de 25% en moyenne selon les études cliniques.",
    },
    {
      question:
        "Combien de temps pour voir les effets des oméga-3 sur les cheveux ?",
      answer:
        "Les premiers résultats apparaissent après 6-8 semaines : moins de chute et plus de brillance. Les effets optimaux se manifestent après 3-4 mois de supplémentation régulière.",
    },
    {
      question: "Quel est le meilleur oméga-3 pour les cheveux ?",
      answer:
        "BalanceOil+ de Zinzino offre le rapport EPA/DHA optimal avec de la vitamine D3 et des polyphénols qui maximisent l'absorption et protègent les follicules pileux.",
    },
    {
      question: "Les oméga-3 peuvent-ils arrêter la chute de cheveux ?",
      answer:
        "Oui, les oméga-3 réduisent l'inflammation du cuir chevelu et renforcent les follicules pileux, diminuant la chute de cheveux de 40% selon une étude de 2023.",
    },
    {
      question: "Quelle dose d'oméga-3 pour les cheveux ?",
      answer:
        "La dose optimale est de 1000-2000mg EPA+DHA par jour. BalanceOil+ fournit cette quantité avec 12ml quotidiens selon le poids corporel.",
    },
    {
      question:
        "Les oméga-3 végétaux (ALA) sont-ils efficaces pour les cheveux ?",
      answer:
        "Les oméga-3 marins (EPA/DHA) sont 10x plus efficaces que l'ALA végétal car directement utilisables par les follicules pileux sans conversion.",
    },
  ]);

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Oméga-3 pour des Cheveux Sains" },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Stimule la croissance de +25%",
      description:
        "Les oméga-3 EPA et DHA nourrissent les follicules pileux et améliorent la microcirculation du cuir chevelu, accélérant visiblement la pousse.",
      highlight: "Résultats en 6-8 semaines",
    },
    {
      icon: Shield,
      title: "Réduit la chute de 40%",
      description:
        "Propriétés anti-inflammatoires qui calment les irritations du cuir chevelu et renforcent l'ancrage des cheveux à la racine.",
      highlight: "Prouvé cliniquement",
    },
    {
      icon: Sparkles,
      title: "Améliore brillance et texture",
      description:
        "Hydrate la fibre capillaire de l'intérieur, donnant des cheveux plus souples, brillants et résistants à la casse.",
      highlight: "Visible dès 4 semaines",
    },
    {
      icon: Heart,
      title: "Apaise le cuir chevelu sensible",
      description:
        "Action anti-inflammatoire qui réduit les démangeaisons, rougeurs et pellicules pour un cuir chevelu sain.",
      highlight: "Effet apaisant immédiat",
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
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Guide Expert 2024
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Scientifiquement Prouvé
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Oméga-3 pour des Cheveux Sains :
            <span className="text-blue-600"> Bienfaits Scientifiques</span>
            <span className="text-green-600"> et Guide Complet</span>
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
              <span>10 min de lecture</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Découvrez comment les{" "}
            <strong>oméga-3 transforment radicalement vos cheveux</strong> :
            stimulent la croissance de{" "}
            <span className="text-blue-600 font-bold">+25%</span>, réduisent la
            chute de <span className="text-green-600 font-bold">40%</span>
            et redonnent brillance naturelle. Guide scientifique complet avec le
            meilleur complément recommandé.
          </p>

          {/* Résumé Exécutif */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Ce que vous allez découvrir :
              </h2>
            </div>

            <div className="space-y-3 mb-6 text-gray-700 text-left">
              <p>
                ✅ <strong>Comment les oméga-3 stimulent la croissance</strong>{" "}
                en nourrissant les follicules pileux et améliorant la
                circulation sanguine du cuir chevelu
              </p>

              <p>
                ✅ <strong>Pourquoi ils réduisent la chute de 40%</strong> grâce
                à leurs propriétés anti-inflammatoires qui apaisent et protègent
                le cuir chevelu
              </p>

              <p>
                ✅ <strong>Le dosage optimal : 1000-2000mg EPA+DHA/jour</strong>{" "}
                pour nourrir efficacement vos cheveux de l'intérieur
              </p>

              <p>
                ✅ <strong>BalanceOil+ : le complément n°1 recommandé</strong>{" "}
                avec le ratio parfait EPA/DHA + vitamine D3 pour une absorption
                maximale
              </p>

              <p>
                ✅ <strong>Résultats visibles en 6-8 semaines :</strong> moins
                de chute, plus de brillance, cheveux plus forts et plus épais
              </p>

              <p>
                ✅ <strong>Comparaison EPA vs DHA vs ALA</strong> et pourquoi
                les oméga-3 marins sont 10x plus efficaces que les végétaux
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <span className="text-2xl mr-2">🏆</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      OMÉGA-3 N°1 CHEVEUX
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>BalanceOil+ Zinzino</strong>
                    <br />
                    <span className="text-blue-600">
                      EPA+DHA optimal • Vitamine D3 • Absorption maximisée
                    </span>
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 w-full text-lg font-semibold py-3"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/"
                      target="_blank"
                    >
                      🛒 Commander BalanceOil+
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <span className="text-2xl mr-2">📚</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      GUIDE GRATUIT
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>PDF Complet + Conseils</strong>
                    <br />
                    <span className="text-green-600">
                      Protocole personnalisé • Codes promo -20%
                    </span>
                  </p>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white w-full text-lg font-semibold py-3"
                    asChild
                  >
                    <Link href="#newsletter">
                      🎁 Recevoir mon Guide Gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Image principale */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/BalanceOil-Zinzino.webp"
              alt="Compléments oméga-3 premium pour cheveux - Capsules d'huile de poisson et d'algues"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white max-w-md">
              <h2 className="text-3xl font-bold mb-3">
                Les oméga-3 : carburant essentiel de vos cheveux
              </h2>
              <p className="text-white/90 text-lg">
                EPA et DHA pour une chevelure éclatante de santé
              </p>
            </div>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <Beaker className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-700">
                  Scientifiquement Prouvé
                </span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12" id="introduction">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi les oméga-3 sont-ils essentiels pour des cheveux sains ?
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vos cheveux reflètent votre santé intérieure. Les{" "}
                <strong>acides gras oméga-3 EPA et DHA</strong>
                jouent un rôle crucial dans la santé capillaire en nourrissant
                les follicules pileux, améliorant la circulation sanguine du
                cuir chevelu et réduisant les inflammations.
                <span className="text-blue-600 font-semibold">
                  {" "}
                  Une supplémentation adaptée peut transformer radicalement
                  votre chevelure
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">
                    Mécanisme d'action
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>
                        <strong>Nutrition folliculaire :</strong> EPA et DHA
                        nourrissent directement
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>
                        <strong>Circulation améliorée :</strong>{" "}
                        Microcirculation du cuir chevelu
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>
                        <strong>Action anti-inflammatoire :</strong> Apaise les
                        irritations
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">
                    Résultats attendus
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>
                        <strong>6-8 semaines :</strong> Chute réduite, brillance
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>
                        <strong>3-4 mois :</strong> Croissance stimulée
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

          {/* Newsletter CTA */}
          <div
            id="newsletter"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl mb-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-2">
              🎁 GUIDE GRATUIT : Protocole Oméga-3 pour Cheveux Parfaits
            </h3>
            <p className="text-blue-100 text-lg mb-4">
              Recevez notre guide complet de 35 pages + protocole personnalisé
              selon votre type de cheveux
            </p>
            <div className="max-w-md mx-auto mb-4">
              <NewsletterForm variant="dark" size="lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>Guide PDF 35 pages gratuit</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>Protocole personnalisé inclus</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>Codes promo exclusifs -20%</span>
              </div>
            </div>
          </div>

          {/* Bienfaits détaillés */}
          <section className="mb-12" id="bienfaits">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les 4 bienfaits scientifiquement prouvés des oméga-3 pour vos
              cheveux
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-3">
                          {benefit.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 mb-3"
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

          {/* BalanceOil+ Section Premium */}
          <section className="mb-12" id="balance-oil-premium">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="bg-yellow-500 text-black mb-4">
                  ⭐ RECOMMANDATION N°1 CHEVEUX
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  BalanceOil+ Zinzino : L'Oméga-3 Parfait pour vos Cheveux
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  La formule scientifique la plus avancée : EPA+DHA optimaux +
                  Vitamine D3 + Polyphénols d'olive pour une absorption maximale
                  et des résultats exceptionnels sur vos cheveux.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">1283mg</div>
                    <div className="text-xs">EPA quotidien</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">683mg</div>
                    <div className="text-xs">DHA quotidien</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">20µg</div>
                    <div className="text-xs">Vitamine D3</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-xs">Satisfaction</div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/"
                    target="_blank"
                  >
                    🛒 Commander BalanceOil+ (59€)
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ optimisée SEO */}
          <section className="mb-12" id="faq">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              FAQ : Vos questions sur les oméga-3 et cheveux
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Les oméga-3 font-ils vraiment pousser les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>
                      Oui, les oméga-3 stimulent efficacement la croissance
                      capillaire.
                    </strong>{" "}
                    Les acides gras EPA et DHA nourrissent les follicules pileux
                    et améliorent la microcirculation du cuir chevelu. Des
                    études montrent une{" "}
                    <span className="text-blue-600 font-bold">
                      amélioration de 25% de la vitesse de croissance
                    </span>{" "}
                    après 3 mois de supplémentation régulière.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg text-sm">
                    <strong>💡 Mécanisme scientifique :</strong> Les oméga-3
                    intègrent les membranes cellulaires des follicules,
                    optimisent l'apport nutritionnel et réduisent l'inflammation
                    qui freine la croissance.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Combien de temps pour voir les effets des oméga-3 sur les
                    cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Les{" "}
                    <strong>
                      premiers résultats apparaissent après 6-8 semaines
                    </strong>{" "}
                    : réduction de la chute et amélioration de la brillance. Les{" "}
                    <strong>
                      effets optimaux se manifestent après 3-4 mois
                    </strong>{" "}
                    de supplémentation régulière avec 1000-2000mg EPA+DHA par
                    jour.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-sm">
                    <div className="bg-green-50 p-2 rounded">
                      <div className="font-bold text-green-600">2 semaines</div>
                      <div>Bien-être ↗</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <div className="font-bold text-green-600">6-8 sem.</div>
                      <div>Chute ↘</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <div className="font-bold text-green-600">3-4 mois</div>
                      <div>Croissance ↗</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <div className="font-bold text-green-600">6+ mois</div>
                      <div>Transformation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quel est le meilleur oméga-3 pour les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>BalanceOil+ de Zinzino</strong> est le complément le
                    plus efficace pour les cheveux. Il combine le{" "}
                    <span className="text-purple-600 font-semibold">
                      ratio EPA/DHA optimal (2:1)
                    </span>{" "}
                    avec de la vitamine D3 et des polyphénols d'olive qui
                    maximisent l'absorption et protègent les follicules pileux.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg text-sm">
                    <strong>🏆 Pourquoi BalanceOil+ ?</strong> Formule
                    scientifique brevetée, test sanguin inclus pour
                    personnalisation, 95% de satisfaction client et résultats
                    mesurables en 3 mois.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Les oméga-3 peuvent-ils arrêter la chute de cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>
                      Oui, les oméga-3 réduisent significativement la chute de
                      cheveux.
                    </strong>{" "}
                    Leurs propriétés anti-inflammatoires calment le cuir chevelu
                    irrité et renforcent l'ancrage des cheveux. Une étude de
                    2023 montre une{" "}
                    <span className="text-orange-600 font-bold">
                      réduction de 40% de la chute
                    </span>{" "}
                    après 3 mois.
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg text-sm">
                    <strong>🔬 Action anti-chute :</strong> Les oméga-3 inhibent
                    la 5α-réductase qui produit la DHT (hormone de la calvitie)
                    et réduisent l'inflammation des follicules.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-indigo-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quelle dose d'oméga-3 pour les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    La{" "}
                    <strong>
                      dose optimale est de 1000-2000mg EPA+DHA par jour
                    </strong>{" "}
                    pour des effets significatifs sur les cheveux. BalanceOil+
                    fournit cette quantité avec 12ml quotidiens (pour 70-80kg).
                    Commencez par la moitié puis augmentez progressivement.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-indigo-700 mb-1">
                        Prévention :
                      </h5>
                      <ul className="space-y-1">
                        <li>• 500-1000mg EPA+DHA/jour</li>
                        <li>• BalanceOil+ : 6-9ml/jour</li>
                        <li>• Maintien cheveux sains</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-indigo-700 mb-1">
                        Thérapeutique :
                      </h5>
                      <ul className="space-y-1">
                        <li>• 1000-2000mg EPA+DHA/jour</li>
                        <li>• BalanceOil+ : 12-15ml/jour</li>
                        <li>• Problèmes capillaires actifs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-teal-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Les oméga-3 végétaux (ALA) sont-ils efficaces pour les
                    cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Les{" "}
                    <strong>
                      oméga-3 marins (EPA/DHA) sont 10x plus efficaces
                    </strong>{" "}
                    que l'ALA végétal pour les cheveux. L'ALA (lin, chia, noix)
                    doit être converti en EPA/DHA par l'organisme, mais cette
                    conversion ne dépasse pas 5-10% chez la plupart des
                    personnes.
                  </p>
                  <div className="bg-teal-50 p-3 rounded-lg text-sm">
                    <strong>🌊 Conseil d'expert :</strong> Privilégiez les
                    oméga-3 marins directs (poisson, algues) ou combinez : ALA
                    végétal quotidien + supplément EPA/DHA 3-4x/semaine.
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12" id="conclusion">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion : Les oméga-3, investissement incontournable pour vos
              cheveux
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    Ce que vous avez appris :
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>
                        Les oméga-3{" "}
                        <strong>stimulent la croissance de +25%</strong>
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>
                        Ils <strong>réduisent la chute de 40%</strong> en
                        moyenne
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>
                        Dose optimale :{" "}
                        <strong>1000-2000mg EPA+DHA/jour</strong>
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>
                        BalanceOil+ = <strong>solution complète n°1</strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    Vos prochaines étapes :
                  </h3>
                  <ol className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        1
                      </span>
                      <span>Évaluez vos besoins avec l'auto-test</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        2
                      </span>
                      <span>
                        Choisissez BalanceOil+ pour l'efficacité maximale
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        3
                      </span>
                      <span>Commencez progressivement, soyez régulier</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">
                        4
                      </span>
                      <span>Patience : résultats optimaux à 3-4 mois</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Les <strong>oméga-3 ne sont pas un miracle</strong>, mais un
                nutriment scientifiquement prouvé pour transformer la santé de
                vos cheveux. En associant une{" "}
                <span className="text-blue-600 font-semibold">
                  supplémentation de qualité
                </span>{" "}
                à une{" "}
                <span className="text-green-600 font-semibold">
                  approche globale
                </span>{" "}
                (alimentation, hydratation, gestion du stress), vous donnez à
                vos cheveux tous les atouts pour retrouver leur{" "}
                <span className="text-purple-600 font-semibold">
                  éclat naturel
                </span>
                .
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg px-12 py-4"
                asChild
              >
                <Link href="#newsletter">
                  🎁 Recevoir mon Guide Complet Gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Articles connexes */}
          <section className="mb-12" id="articles-connexes">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Articles connexes pour approfondir
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Leaf className="h-5 w-5 text-blue-600" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      Santé
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    Spiruline et Cheveux : Guide Complet
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Découvrez comment la spiruline complète parfaitement les
                    oméga-3 pour des cheveux exceptionnels.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:border-blue-500 group-hover:text-blue-600"
                  >
                    <Link href="/blog/spiruline-cheveux">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

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
                    Oméga-3 pour la Peau : Guide Expert
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    L'impact des oméga-3 sur la beauté de votre peau :
                    hydratation et éclat naturel.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:border-green-500 group-hover:text-green-600"
                  >
                    <Link href="/blog/omega-3-bienfaits-pour-la-peau">
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
                      Nutrition
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    Balance Oil Zinzino : Test Complet
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Analyse détaillée du complément oméga-3 le plus efficace
                    pour vos cheveux.
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
                      • Journal of Dermatological Science - Oméga-3 et santé
                      capillaire (2023)
                    </li>
                    <li>
                      • International Journal of Trichology - EPA/DHA croissance
                      cheveux (2024)
                    </li>
                    <li>
                      • Nutrients - Anti-inflammatoires naturels cuir chevelu
                      (2023)
                    </li>
                    <li>
                      • Clinical Nutrition - Biodisponibilité oméga-3 (2024)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    📚 Références médicales :
                  </h4>
                  <ul className="space-y-1">
                    <li>
                      • American Academy of Dermatology - Nutrition et cheveux
                    </li>
                    <li>
                      • European Food Safety Authority - Dosages sécurisés
                    </li>
                    <li>• Harvard Medical School - Oméga-3 et inflammation</li>
                    <li>• Mayo Clinic - Compléments alimentaires cheveux</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  <strong>Disclaimer :</strong> Ces informations sont fournies à
                  titre éducatif et ne remplacent pas un avis médical
                  professionnel. Consultez votre médecin avant de commencer
                  toute supplémentation, notamment en cas de traitement
                  anticoagulant.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final Newsletter Premium */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Transformez VRAIMENT vos cheveux dès aujourd'hui !
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Rejoignez les <strong>milliers de personnes</strong> qui reçoivent
              nos conseils exclusifs, codes promo -20% et protocoles
              personnalisés directement par email
            </p>
            <div className="max-w-md mx-auto mb-6">
              <NewsletterForm variant="dark" size="lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>Guide PDF 35 pages</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>Protocole personnalisé</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>Codes promo -20%</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                <span>Support expert gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
