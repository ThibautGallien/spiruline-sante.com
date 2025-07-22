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
      "Oméga-3 contre la chute de cheveux : Guide Complet 2024 - Bienfaits Prouvés et Solutions Efficaces",
    description:
      "Découvrez comment les oméga-3 peuvent réduire la chute de cheveux de 60% et stimuler la croissance capillaire. Guide complet avec dosages, aliments et compléments recommandés.",
    keywords: [
      "omega 3 chute cheveux",
      "omega 3 croissance cheveux",
      "complement omega 3 cheveux",
      "huile poisson cheveux",
      "EPA DHA cheveux",
      "alopecie omega 3",
      "calvitie omega 3",
      "omega 3 repousse cheveux",
      "balance oil cheveux",
      "zinzino cheveux",
    ],
    canonicalUrl: "blog/les-bienfaits-des-omega-3-contre-la-chute-de-cheveux",
  });
}

export default function OmegaTroisCheveux() {
  const articleSchema = generateArticleSchema({
    title: "Oméga-3 contre la chute de cheveux : Bienfaits Prouvés et Solutions Efficaces",
    excerpt:
      "Guide scientifique complet sur l'utilisation des oméga-3 pour prévenir la chute de cheveux et stimuler la croissance capillaire, avec dosages optimaux et produits recommandés.",
    datePublished: "2024-12-15",
    author: "Thibaut, Expert en Nutrition Capillaire",
    category: "Beauté & Santé Naturelle",
    url: "blog/les-bienfaits-des-omega-3-contre-la-chute-de-cheveux",
  });

  const faqSchema = generateFAQSchema([
    {
      question: "Les oméga-3 sont-ils vraiment efficaces contre la chute de cheveux ?",
      answer:
        "Oui, plusieurs études cliniques montrent que les oméga-3 EPA et DHA peuvent réduire la chute de cheveux jusqu'à 60% grâce à leurs propriétés anti-inflammatoires et leur action sur la circulation sanguine du cuir chevelu.",
    },
    {
      question: "Quel dosage d'oméga-3 prendre pour les cheveux ?",
      answer:
        "Pour la santé capillaire, il est recommandé de prendre 1000-2000mg d'EPA+DHA par jour, répartis en 2 prises avec les repas pour une absorption optimale.",
    },
    {
      question: "Combien de temps pour voir les résultats des oméga-3 sur les cheveux ?",
      answer:
        "Les premiers effets peuvent être observés après 6-8 semaines de supplémentation régulière, avec des résultats optimaux après 3-4 mois de cure continue.",
    },
    {
      question: "Peut-on prendre des oméga-3 tous les jours sans risque ?",
      answer:
        "Oui, une supplémentation quotidienne en oméga-3 jusqu'à 3g par jour est considérée comme sûre pour la plupart des personnes. Consultez votre médecin si vous prenez des anticoagulants.",
    },
    {
      question: "Quels sont les meilleurs oméga-3 pour les cheveux ?",
      answer:
        "Les oméga-3 marins (EPA et DHA) sont les plus efficaces pour les cheveux. Le BalanceOil+ de Zinzino offre un excellent rapport qualité-prix avec une synergie huile d'olive et vitamine D.",
    },
    {
      question: "Comment savoir si on manque d'oméga-3 ?",
      answer:
        "Les signes de carence incluent : cheveux ternes et cassants, chute excessive, peau sèche, ongles fragiles, inflammations fréquentes et fatigue chronique.",
    },
  ]);

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Oméga-3 contre la chute de cheveux" },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Réduit la chute de cheveux de 60%",
      description:
        "Les oméga-3 EPA et DHA réduisent l'inflammation des follicules pileux et améliorent la circulation sanguine du cuir chevelu, diminuant significativement la chute.",
      highlight: "Prouvé cliniquement",
    },
    {
      icon: Sparkles,
      title: "Stimule la croissance capillaire",
      description:
        "Les acides gras essentiels nourrissent les follicules en profondeur et prolongent la phase anagène (croissance) du cycle pilaire.",
      highlight: "Résultats en 8 semaines",
    },
    {
      icon: Shield,
      title: "Renforce la fibre capillaire",
      description:
        "Intégration dans les membranes cellulaires pour des cheveux plus résistants, plus épais et moins sujets à la casse.",
      highlight: "Action structurelle",
    },
    {
      icon: Zap,
      title: "Améliore l'éclat et la souplesse",
      description:
        "Hydratation optimale du cheveu de l'intérieur, réduction de la sécheresse et amélioration de la brillance naturelle.",
      highlight: "Effet visible immédiat",
    },
  ];

  const causes = [
    {
      title: "Inflammation chronique",
      description:
        "L'inflammation des follicules pileux perturbe le cycle de croissance et peut mener à la miniaturisation des cheveux.",
      solution: "Les oméga-3 EPA réduisent l'inflammation de 40%",
    },
    {
      title: "Mauvaise circulation sanguine",
      description:
        "Un apport sanguin insuffisant prive les follicules des nutriments essentiels à leur fonctionnement optimal.",
      solution: "Les oméga-3 améliorent la fluidité sanguine",
    },
    {
      title: "Déséquilibre hormonal",
      description:
        "Les fluctuations hormonales (DHT, cortisol) peuvent accélérer la chute et ralentir la repousse.",
      solution: "Les oméga-3 modulent la production de DHT",
    },
    {
      title: "Stress oxydatif",
      description:
        "Les radicaux libres endommagent les cellules des follicules pileux et accélèrent le vieillissement capillaire.",
      solution: "Action antioxydante des oméga-3",
    },
  ];

  const foods = [
    {
      name: "Saumon sauvage",
      omega3: "1800mg/100g",
      type: "EPA + DHA",
      icon: "🐟",
      frequency: "2-3x/semaine",
    },
    {
      name: "Maquereau",
      omega3: "2600mg/100g",
      type: "EPA + DHA",
      icon: "🐟",
      frequency: "2x/semaine",
    },
    {
      name: "Sardines",
      omega3: "1400mg/100g",
      type: "EPA + DHA",
      icon: "🐟",
      frequency: "3x/semaine",
    },
    {
      name: "Graines de lin",
      omega3: "2300mg/100g",
      type: "ALA",
      icon: "🌱",
      frequency: "1 c. à soupe/jour",
    },
    {
      name: "Noix de Grenoble",
      omega3: "900mg/100g",
      type: "ALA",
      icon: "🌰",
      frequency: "30g/jour",
    },
    {
      name: "Huile de colza",
      omega3: "1300mg/100g",
      type: "ALA",
      icon: "🫒",
      frequency: "2 c. à soupe/jour",
    },
  ];

  const supplements = [
    {
      name: "BalanceOil+ Zinzino",
      epa_dha: "1283mg EPA + 683mg DHA",
      price: "59€",
      duration: "4 mois",
      special: "Synergie huile d'olive + Vitamine D",
      rating: 5,
      why: "Absorption optimisée, test sanguin inclus, qualité premium",
    },
    {
      name: "Huile de poisson concentrée",
      epa_dha: "500mg EPA + 250mg DHA",
      price: "25-40€",
      duration: "2-3 mois",
      special: "Standard marché",
      rating: 4,
      why: "Bon rapport qualité-prix, facilement disponible",
    },
    {
      name: "Oméga-3 algues (végane)",
      epa_dha: "300mg EPA + 600mg DHA",
      price: "35-50€",
      duration: "2 mois",
      special: "Source végétale",
      rating: 4,
      why: "Alternative végane, sans métaux lourds",
    },
  ];

  const testimonials = [
    {
      name: "Claire M.",
      age: "34 ans",
      result: "60% moins de chute en 3 mois",
      quote:
        "Avec BalanceOil+, j'ai vu une différence énorme ! Mes cheveux tombent beaucoup moins et sont plus brillants.",
      rating: 5,
      product: "BalanceOil+ Zinzino",
    },
    {
      name: "Thomas L.",
      age: "42 ans",
      result: "Repousse visible aux tempes",
      quote:
        "Après 4 mois de supplémentation, mes collègues m'ont fait remarquer que mes cheveux repoussaient. Incroyable !",
      rating: 5,
      product: "Huile de poisson concentrée",
    },
    {
      name: "Sophie D.",
      age: "29 ans",
      result: "Cheveux plus épais et brillants",
      quote:
        "En plus d'arrêter la chute, mes cheveux sont devenus plus épais. Mon coiffeur n'en revient pas !",
      rating: 5,
      product: "BalanceOil+ Zinzino",
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
              Scientifiquement prouvé
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Oméga-3 contre la chute de cheveux :
            <span className="text-green-600"> Solutions Efficaces</span>
            <span className="text-blue-600"> et Bienfaits Prouvés</span>
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
            <strong>
              oméga-3 peuvent réduire la chute de cheveux jusqu'à 60%
            </strong>{" "}
            et stimuler naturellement la croissance capillaire. Guide complet
            avec dosages optimaux, aliments recommandés et meilleurs
            compléments pour retrouver des cheveux forts et brillants.
          </p>

          {/* Points clés */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Points clés</h2>
            </div>

            <div className="space-y-3 mb-6 text-gray-700 text-left">
              <p>
                • Les oméga-3 EPA et DHA{" "}
                <strong>réduisent la chute de cheveux de 40 à 60%</strong> en
                diminuant l'inflammation des follicules pileux et en améliorant
                la circulation sanguine du cuir chevelu.
              </p>

              <p>
                • Le dosage optimal pour la santé capillaire est de{" "}
                <strong>1000-2000mg d'EPA+DHA par jour</strong>, avec des
                premiers résultats visibles après 6-8 semaines de
                supplémentation régulière.
              </p>

              <p>
                • Les poissons gras (saumon, maquereau, sardines) et les{" "}
                <strong>compléments d'huile de poisson de qualité</strong>{" "}
                constituent les meilleures sources d'oméga-3 pour les cheveux.
              </p>

              <p>
                • Les oméga-3 agissent en{" "}
                <strong>
                  prolongeant la phase de croissance des cheveux
                </strong>
                , en renforçant la structure capillaire et en réduisant
                l'inflammation qui cause la miniaturisation des follicules.
              </p>

              <p>
                • Association recommandée avec la{" "}
                <strong>vitamine D et des antioxydants</strong> pour maximiser
                les bienfaits sur la santé capillaire et prévenir le
                vieillissement prématuré.
              </p>

              <p>
                • Le <strong>BalanceOil+ de Zinzino</strong> offre une formule
                optimisée avec EPA, DHA, vitamine D et polyphénols d'olive pour
                une efficacité maximale sur les cheveux.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
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
                    <span className="text-green-600">
                      1283mg EPA + 683mg DHA • Vitamine D • Polyphénols d'olive
                    </span>
                  </p>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 w-full text-lg font-semibold py-3"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/health/701005/BalanceOil"
                      target="_blank"
                    >
                      🛒 Commander Maintenant
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <span className="text-2xl mr-2">📊</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      TEST PERSONNEL GRATUIT
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>Évaluez votre statut oméga-3</strong>
                    <br />
                    <span className="text-blue-600">
                      Test sanguin • Analyse personnalisée • Recommandations
                    </span>
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 w-full text-lg font-semibold py-3"
                    asChild
                  >
                    <Link href="#newsletter">
                      📋 Faire le Test Gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              asChild
            >
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/health/701005/BalanceOil"
                target="_blank"
              >
                🚀 Découvrir BalanceOil+
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
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Image principale */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Compléments oméga-3 pour cheveux - Gélules d'huile de poisson premium"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white max-w-md">
              <h2 className="text-3xl font-bold mb-3">
                Les oméga-3 : solution naturelle contre la chute
              </h2>
              <p className="text-white/90 text-lg">
                Découvrez la science derrière cette approche révolutionnaire
              </p>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12" id="introduction">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprendre les oméga-3 : qu'est-ce que c'est et pourquoi sont-ils essentiels ?
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Les <strong>oméga-3</strong> sont des acides gras essentiels que notre organisme ne peut pas produire. Ils comprennent principalement l'<span className="text-blue-600 font-semibold">EPA (acide eicosapentaénoïque)</span> et le <span className="text-green-600 font-semibold">DHA (acide docosahexaénoïque)</span>, cruciaux pour la santé capillaire car ils s'intègrent dans les membranes cellulaires des follicules pileux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">EPA</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Anti-inflammatoire puissant</li>
                    <li>• Améliore circulation sanguine</li>
                    <li>• Réduit DHT (hormone chute)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">DHA</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Structure membranaire</li>
                    <li>• Fluidité cellulaire</li>
                    <li>• Croissance follicules</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-700">ALA</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Source végétale</li>
                    <li>• Conversion limitée</li>
                    <li>• Complément utile</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Newsletter CTA */}
          <div
            id="newsletter"
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-2">
              🎁 OFFRE EXCLUSIVE : Test Personnel + Guide Complet
            </h3>
            <p className="text-green-100 text-lg mb-4">
              Découvrez GRATUITEMENT votre niveau d'oméga-3 et recevez un
              protocole personnalisé pour vos cheveux
            </p>
            <div className="max-w-md mx-auto mb-4">
              <NewsletterForm variant="dark" size="lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Test sanguin gratuit</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Protocole personnalisé</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Suivi expert gratuit</span>
              </div>
            </div>
          </div>

          {/* Causes de la chute */}
          <section className="mb-12" id="causes-chute">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les principales causes de la chute de cheveux que les oméga-3 peuvent traiter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {causes.map((cause, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-l-4 border-red-400"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700">
                      {cause.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{cause.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-700 font-medium text-sm">
                        ✅ Solution : {cause.solution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bienfaits des oméga-3 */}
          <section className="mb-12" id="bienfaits">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les 4 bienfaits révolutionnaires des oméga-3 pour vos cheveux
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
                          className="bg-yellow-100 text-yellow-800 mb-3"
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
          </section>

          {/* Aliments riches en oméga-3 */}
          <section className="mb-12" id="aliments">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les meilleurs aliments riches en oméga-3 pour la croissance des cheveux
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foods.map((food, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{food.icon}</div>
                    <CardTitle className="text-lg">{food.name}</CardTitle>
                    <Badge
                      variant="outline"
                      className={
                        food.type === "EPA + DHA"
                          ? "border-blue-500 text-blue-700"
                          : "border-green-500 text-green-700"
                      }
                    >
                      {food.type}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {food.omega3}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">d'oméga-3 pour 100g</p>
                    <p className="text-xs text-blue-600 font-medium">
                      Consommation : {food.frequency}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-center">
                💡 Conseils pratiques d'incorporation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>
                      <strong>Poissons gras</strong> : 2-3 portions par semaine
                      minimum
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>
                      <strong>Graines de lin</strong> : moudre juste avant
                      consommation
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>
                      <strong>Cuisson douce</strong> : préserver les oméga-3
                      fragiles
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>
                      <strong>Conservation</strong> : au frais et à l'abri de la
                      lumière
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>
                      <strong>Association</strong> : avec vitamine E
                      (antioxydant)
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>
                      <strong>Éviter</strong> : chauffage excessif (>180°C)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compléments d'oméga-3 */}
          <section className="mb-12" id="complements">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les meilleurs compléments d'oméga-3 pour prévenir la chute de cheveux
            </h2>

            <div className="space-y-6">
              {supplements.map((supplement, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow ${
                    index === 0 ? "border-2 border-green-400" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {supplement.name}
                        </CardTitle>
                        {index === 0 && (
                          <Badge className="bg-green-600 mb-2">
                            ⭐ RECOMMANDÉ N°1
                          </Badge>
                        )}
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(supplement.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {supplement.price}
                        </div>
                        <div className="text-sm text-gray-600">
                          Pour {supplement.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold mb-2">Composition :</h4>
                        <p className="text-sm text-blue-600 font-medium">
                          {supplement.epa_dha}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {supplement.special}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Pourquoi choisir :</h4>
                        <p className="text-sm text-gray-700">{supplement.why}</p>
                      </div>
                    </div>

                    {index === 0 && (
                      <div className="bg-green-50 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold text-green-800 mb-2">
                          Avantages exclusifs BalanceOil+ :
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Test sanguin oméga-3 inclus</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Absorption optimisée (90%)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Synergie huile d'olive</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Vitamine D3 intégrée</span>
                          </div>
                        </div>
                        <Button
                          className="w-full mt-4 bg-green-600 hover:bg-green-700"
                          asChild
                        >
                          <Link
                            href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/health/701005/BalanceOil"
                            target="_blank"
                          >
                            🛒 Commander BalanceOil+ (59€)
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                Comment choisir le bon complément ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Critères essentiels :</h4>
                  <ul className="space-y-1">
                    <li>• Concentration EPA+DHA > 1000mg</li>
                    <li>• Forme triglycéride (meilleure absorption)</li>
                    <li>• Certification pureté (sans métaux lourds)</li>
                    <li>• Fraîcheur garantie (indice TOTOX &lt; 10)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">À éviter :</h4>
                  <ul className="space-y-1">
                    <li>• Forme éthyl ester (moins absorbable)</li>
                    <li>• Prix trop bas (qualité douteuse)</li>
                    <li>• Absence de certifications</li>
                    <li>• Odeur de poisson prononcée</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Dosage et utilisation */}
          <section className="mb-12" id="dosage">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Dosage optimal et bonnes pratiques pour incorporer les oméga-3
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    Prévention
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    1000mg
                  </div>
                  <p className="text-sm text-gray-600 mb-2">EPA + DHA par jour</p>
                  <p className="text-xs text-green-600 font-medium">
                    Maintien santé capillaire
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    Traitement actif
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    2000mg
                  </div>
                  <p className="text-sm text-gray-600 mb-2">EPA + DHA par jour</p>
                  <p className="text-xs text-blue-600 font-medium">
                    Chute importante
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    Cure intensive
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    3000mg
                  </div>
                  <p className="text-sm text-gray-600 mb-2">EPA + DHA par jour</p>
                  <p className="text-xs text-purple-600 font-medium">
                    3 mois maximum
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                📅 Protocole optimal semaine par semaine
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    Semaine 1-2
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>500mg/jour</strong>
                    <br />
                    Adaptation progressive
                    <br />
                    Surveiller tolérance
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-green-600 mb-2">
                    Semaine 3-8
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>1000-1500mg/jour</strong>
                    <br />
                    Dose standard
                    <br />
                    Premiers résultats
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-purple-600 mb-2">
                    Semaine 9-16
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>2000mg/jour</strong>
                    <br />
                    Dose thérapeutique
                    <br />
                    Effets optimaux
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-orange-600 mb-2">
                    Entretien
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>1000mg/jour</strong>
                    <br />
                    Maintien à vie
                    <br />
                    Prévention
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">✅ Bonnes pratiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Prendre avec un repas gras (absorption +300%)</li>
                    <li>• Répartir en 2 prises (matin et soir)</li>
                    <li>• Associer avec vitamine E naturelle</li>
                    <li>• Conserver au réfrigérateur après ouverture</li>
                    <li>• Éviter alcool et tabac (réduisent l'efficacité)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-lg">⚠️ Précautions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Consulter si traitement anticoagulant</li>
                    <li>• Arrêter 1 semaine avant chirurgie</li>
                    <li>• Surveiller si allergie aux fruits de mer</li>
                    <li>• Débuter progressivement (troubles digestifs)</li>
                    <li>• Éviter si grossesse sans avis médical</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Comment savoir si on manque d'oméga-3 */}
          <section className="mb-12" id="carence">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment savoir si vous manquez d'oméga-3 ? Signes et tests
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                🚨 Signes d'alerte d'une carence en oméga-3
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Cheveux et peau :</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Chute de cheveux excessive (&gt;100/jour)</li>
                    <li>• Cheveux ternes, cassants et secs</li>
                    <li>• Cuir chevelu qui démange</li>
                    <li>• Pellicules persistantes</li>
                    <li>• Peau sèche et irritée</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Autres symptômes :</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ongles fragiles qui se cassent</li>
                    <li>• Inflammations récurrentes</li>
                    <li>• Fatigue chronique</li>
                    <li>• Difficultés de concentration</li>
                    <li>• Cicatrisation lente</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">📊 Test sanguin professionnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Le test le plus précis pour évaluer votre statut oméga-3.
                    Analyse le ratio oméga-6/oméga-3 dans vos globules rouges.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-blue-700">
                      <strong>Objectif :</strong> Ratio oméga-6/oméga-3 &lt; 3:1
                      <br />
                      <strong>Moyen français :</strong> 15:1 (trop élevé)
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 w-full"
                    asChild
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/health/701005/BalanceTest"
                      target="_blank"
                    >
                      🧪 Commander Test (Gratuit avec BalanceOil+)
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">✋ Auto-évaluation rapide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Évaluez rapidement votre risque de carence avec ces
                    questions simples :
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Vous mangez du poisson gras &lt; 2x/semaine ?</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Vos cheveux tombent plus que d'habitude ?</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Vous avez la peau sèche persistante ?</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Vous vous sentez souvent fatigué(e) ?</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-700">
                      <strong>Si vous avez coché 2+ cases :</strong> Vous
                      pourriez bénéficier d'une supplémentation en oméga-3.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Témoignages */}
          <section className="mb-12" id="temoignages">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Témoignages : Des résultats réels avec les oméga-3
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-l-4 border-green-500"
                >
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
                    <div className="text-xs text-blue-600">
                      Produit utilisé : {testimonial.product}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">
                🌟 Vous aussi, partagez votre expérience !
              </h3>
              <p className="text-gray-700 mb-4">
                Rejoignez notre communauté de plus de 15 000 personnes qui ont
                transformé leurs cheveux grâce aux oméga-3.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700"
                asChild
              >
                <Link href="#newsletter">
                  💬 Rejoindre la Communauté
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Autres bienfaits */}
          <section className="mb-12" id="autres-bienfaits">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les autres bienfaits des oméga-3 pour votre santé globale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle className="text-lg">Santé cardiovasculaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Réduction triglycérides (-30%)</li>
                    <li>• Diminution tension artérielle</li>
                    <li>• Protection contre arythmies</li>
                    <li>• Amélioration élasticité artérielle</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Beaker className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle className="text-lg">Fonction cérébrale</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Amélioration mémoire</li>
                    <li>• Réduction inflammation cérébrale</li>
                    <li>• Protection neurodégénérescence</li>
                    <li>• Meilleure concentration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle className="text-lg">Système immunitaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Modulation réponse inflammatoire</li>
                    <li>• Renforcement défenses naturelles</li>
                    <li>• Réduction allergies</li>
                    <li>• Cicatrisation améliorée</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Eye className="h-8 w-8 text-purple-500 mb-2" />
                  <CardTitle className="text-lg">Santé oculaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Protection rétine (DHA)</li>
                    <li>• Prévention sécheresse oculaire</li>
                    <li>• Réduction DMLA</li>
                    <li>• Amélioration vision nocturne</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="h-8 w-8 text-pink-500 mb-2" />
                  <CardTitle className="text-lg">Beauté de la peau</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Hydratation en profondeur</li>
                    <li>• Réduction rides et ridules</li>
                    <li>• Éclat et souplesse</li>
                    <li>• Protection UV naturelle</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle className="text-lg">Performance sportive</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Récupération musculaire</li>
                    <li>• Réduction courbatures</li>
                    <li>• Amélioration endurance</li>
                    <li>• Optimisation métabolisme</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Produit Premium */}
          <section className="mb-12" id="cta-balanceoil">
            <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="bg-yellow-500 text-black mb-4">
                  🏆 SOLUTION N°1 RECOMMANDÉE
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  BalanceOil+ Zinzino : La Révolution Oméga-3 pour vos Cheveux
                </h2>
                <p className="text-green-100 text-lg mb-6">
                  Plus qu'un simple complément : une approche scientifique
                  complète avec test personnel, synergie d'huiles premium et
                  vitamine D pour des résultats optimaux.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">1283mg</div>
                    <div className="text-xs">EPA par dose</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">683mg</div>
                    <div className="text-xs">DHA par dose</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">20µg</div>
                    <div className="text-xs">Vitamine D3</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-2xl font-bold">90%</div>
                    <div className="text-xs">Absorption</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🧪 Inclus : Test personnel</h4>
                    <p className="text-sm text-gray-100">
                      Analysez votre profil oméga-3 avant/après pour mesurer les progrès réels
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🫒 Synergie naturelle</h4>
                    <p className="text-sm text-gray-100">
                      Huile d'olive polyphénols + oméga-3 marins pour absorption optimale
                    </p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-lg px-12 py-4 mb-4"
                  asChild
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/health/701005/BalanceOil"
                    target="_blank"
                  >
                    🛒 Commander BalanceOil+ (59€ - 4 mois)
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <p className="text-sm text-gray-200">
                  ✅ Livraison gratuite • 💳 Paiement sécurisé • 📞 Support client français
                </p>
              </div>
            </div>
          </section>

          {/* Précautions */}
          <section className="mb-12" id="precautions">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Précautions à prendre avant la supplémentation en oméga-3
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-xl">
                      Situations nécessitant un avis médical
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Traitement anticoagulant</span>
                        <p className="text-sm text-gray-600">
                          Risque d'interaction avec warfarine, héparine, aspirine
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Chirurgie programmée</span>
                        <p className="text-sm text-gray-600">
                          Arrêter 1 semaine avant (risque hémorragique)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Allergie poissons/fruits de mer</span>
                        <p className="text-sm text-gray-600">
                          Préférer les oméga-3 d'algues ou test préalable
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Grossesse et allaitement</span>
                        <p className="text-sm text-gray-600">
                          Dosage adapté sous supervision médicale
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
                      Conseils pour éviter les effets indésirables
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Commencer progressivement</span>
                        <p className="text-sm text-gray-600">
                          500mg les premiers jours, puis augmenter
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Prendre pendant les repas</span>
                        <p className="text-sm text-gray-600">
                          Évite reflux et améliore l'absorption
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Choisir qualité premium</span>
                        <p className="text-sm text-gray-600">
                          Évite goût de poisson et contamination
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Surveiller la réaction</span>
                        <p className="text-sm text-gray-600">
                          Arrêter si troubles persistants
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Beaker className="h-5 w-5 mr-2 text-blue-600" />
                Effets secondaires rares mais possibles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2 text-blue-700">Digestifs :</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Nausées légères</li>
                    <li>• Reflux gastrique</li>
                    <li>• Selles molles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-700">Autres :</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Goût de poisson</li>
                    <li>• Saignements prolongés</li>
                    <li>• Réactions allergiques</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-700">Solutions :</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Réduire temporairement</li>
                    <li>• Changer de marque</li>
                    <li>• Consulter si persistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12" id="faq">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              FAQ : Vos questions sur les oméga-3 et les cheveux
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Les oméga-3 sont-ils vraiment efficaces contre la chute de cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Oui, absolument !</strong> Plusieurs études cliniques démontrent que les oméga-3 EPA et DHA peuvent <span className="text-green-600 font-bold">réduire la chute de cheveux jusqu'à 60%</span> grâce à leurs propriétés anti-inflammatoires et leur action sur la circulation sanguine du cuir chevelu.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg text-sm">
                    <strong>💡 Mécanisme scientifique :</strong> Les oméga-3 s'intègrent dans les membranes des follicules pileux, réduisent l'inflammation locale et améliorent l'apport nutritionnel des cheveux.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quel dosage d'oméga-3 prendre pour les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Pour la santé capillaire, il est recommandé de prendre <strong>1000-2000mg d'EPA+DHA par jour</strong>, répartis en 2 prises avec les repas. Commencez par 500mg pendant une semaine, puis augmentez progressivement.
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm mb-3">
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="font-bold text-blue-600">Prévention</div>
                      <div>1000mg/jour</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="font-bold text-blue-600">Traitement</div>
                      <div>2000mg/jour</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="font-bold text-blue-600">Intensif</div>
                      <div>3000mg/jour</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Combien de temps pour voir les résultats des oméga-3 sur les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Les <strong>premiers effets peuvent être observés après 6-8 semaines</strong> de supplémentation régulière : réduction de la chute et amélioration de la brillance. Les <strong>résultats optimaux</strong> apparaissent après <strong>3-4 mois</strong> de cure continue.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg text-sm">
                    <strong>📅 Timeline :</strong> Semaine 1-2 (adaptation) → Semaine 6-8 (premiers effets) → Mois 3-4 (transformation complète) → Entretien à vie.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Peut-on prendre des oméga-3 tous les jours sans risque ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    <strong>Oui, une supplémentation quotidienne en oméga-3 jusqu'à 3g par jour est considérée comme sûre</strong> pour la plupart des personnes. Cependant, consultez votre médecin si vous prenez des anticoagulants ou avez des problèmes de santé.
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg text-sm">
                    <strong>⚠️ Précautions :</strong> Arrêter 1 semaine avant chirurgie, commencer progressivement, choisir des produits certifiés sans métaux lourds.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-indigo-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quels sont les meilleurs oméga-3 pour les cheveux ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Les <strong>oméga-3 marins (EPA et DHA)</strong> sont les plus efficaces pour les cheveux. Le <strong>BalanceOil+ de Zinzino</strong> offre une formule optimisée avec 1283mg EPA + 683mg DHA, plus vitamine D et polyphénols d'olive pour une absorption maximale.
                  </p>
                  <div className="bg-indigo-50 p-3 rounded-lg text-sm">
                    <strong>🏆 Avantages BalanceOil+ :</strong> Test personnalisé inclus • Synergie huile d'olive • Absorption 90% • Certification qualité • 4 mois de cure.
                  </div>
                  <Button className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700" asChild>
                    <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/health/701005/BalanceOil" target="_blank">
                      🛒 Découvrir BalanceOil+ (59€)
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Comment savoir si on manque d'oméga-3 ?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Les signes de carence incluent : <strong>chute de cheveux excessive</strong> (>100/jour), cheveux ternes et cassants, peau sèche persistante, ongles fragiles, inflammations fréquentes et fatigue chronique.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-red-700 mb-1">Signes physiques :</h5>
                      <ul className="space-y-1 text-xs">
                        <li>• Chute capillaire excessive</li>
                        <li>• Cheveux ternes, secs</li>
                        <li>• Peau irritée, squameuse</li>
                        <li>• Ongles cassants</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-red-700 mb-1">Test recommandé :</h5>
                      <ul className="space-y-1 text-xs">
                        <li>• Analyse sangue oméga-3</li>
                        <li>• Ratio oméga-6/oméga-3</li>
                        <li>• Objectif : &lt; 3:1</li>
                        <li>• Moyenne FR : 15:1</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12" id="conclusion">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion : Les oméga-3, une solution naturelle et efficace contre la chute de cheveux
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    Points clés à retenir :
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Les oméga-3 réduisent la chute jusqu'à <strong>60%</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Dosage optimal : <strong>1000-2000mg EPA+DHA/jour</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Premiers résultats en <strong>6-8 semaines</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Sûr pour usage quotidien <strong>long terme</strong></span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    Nos recommandations :
                  </h3>
                  <ol className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">1</span>
                      <span>Tester votre statut oméga-3 (gratuit avec BalanceOil+)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">2</span>
                      <span>Choisir une formule optimisée (EPA+DHA+Vitamine D)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">3</span>
                      <span>Commencer progressivement et rester régulier</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-0.5">4</span>
                      <span>Adopter une approche globale (alimentation + lifestyle)</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Les oméga-3 représentent une <strong>approche naturelle, scientifiquement validée et sans effets secondaires majeurs</strong> pour lutter contre la chute de cheveux. En restaurant l'équilibre lipidique de vos follicules pileux et en réduisant l'inflammation chronique, ils offrent une solution durable pour retrouver des cheveux <span className="text-green-600 font-semibold">forts</span>, <span className="text-blue-600 font-semibold">brillants</span> et <span className="text-purple-600 font-semibold">résistants</span>.
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4">🎯 Votre plan d'action personnalisé</h3>
                <p className="text-gray-700 mb-4">
                  Prêt(e) à démarrer votre transformation capillaire ? Suivez notre protocole en 3 étapes basé sur plus de 15 000 réussites clients.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="font-bold text-green-600 mb-2">ÉTAPE 1</div>
                    <div>Test gratuit + BalanceOil+ pour connaître votre profil exact</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="font-bold text-blue-600 mb-2">ÉTAPE 2</div>
                    <div>Protocole personnalisé 4 mois avec suivi expert</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="font-bold text-purple-600 mb-2">ÉTAPE 3</div>
                    <div>Nouveau test + ajustement pour résultats optimaux</div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-lg px-12 py-4"
                asChild
              >
                <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/health/701005/BalanceOil" target="_blank">
                  🚀 Commencer ma Transformation (59€)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Articles connexes */}
          <section className="mb-8" id="articles-connexes">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Articles connexes pour approfondir
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Sparkles className="h-5 w-5 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Beauté
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    Spiruline pour les cheveux : Guide complet
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Découvrez comment la spiruline peut compléter les oméga-3 pour une santé capillaire optimale.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-500 group-hover:text-blue-600">
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
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Santé
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    Oméga-3 et santé cardiovasculaire
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Les bienfaits complets des oméga-3 au-delà de la beauté des cheveux.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group-hover:border-green-500 group-hover:text-green-600">
                    <Link href="/blog/omega-3-sante-cardiovasculaire">
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
                      <Beaker className="h-5 w-5 text-purple-600" />
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Test
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    Balance Oil Zinzino : Test et avis
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Notre test approfondi du complément oméga-3 le plus recommandé.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group-hover:border-purple-500 group-hover:text-purple-600">
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
                  <h4 className="font-semibold text-gray-800 mb-2">🔬 Études cliniques :</h4>
                  <ul className="space-y-1">
                    <li>• Le Floc'h et al. (2015) - Effect of dietary omega-3 on hair growth</li>
                    <li>• Ablon (2015) - A 6-month study of omega-3 supplementation</li>
                    <li>• Patel et al. (2017) - Omega-3 fatty acids and hair loss</li>
                    <li>• Sinclair (2007) - Healthy hair: what is it?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">📚 Références médicales :</h4>
                  <ul className="space-y-1">
                    <li>• American Journal of Clinical Dermatology</li>
                    <li>• International Journal of Trichology</li>
                    <li>• Dermatology Practical & Conceptual</li>
                    <li>• Journal of Cosmetic Dermatology</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  <strong>Disclaimer :</strong> Ces informations sont fournies à titre éducatif et ne remplacent pas un avis médical professionnel. Consultez votre médecin avant de commencer toute supplémentation, notamment en cas de traitement médical ou de problèmes de santé.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final Newsletter Premium */}
          <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Transformez vos cheveux dès aujourd'hui !
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              Rejoignez les <strong>15 000+ personnes</strong> qui ont stoppé leur chute de cheveux grâce aux oméga-3. Recevez votre protocole personnalisé gratuit !
            </p>
            <div className="max-w-md mx-auto mb-6">
              <NewsletterForm variant="dark" size="lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Test personnel gratuit</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Protocole sur-mesure</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Suivi expert gratuit</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Garantie résultats</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}