import { generateSEOMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Star,
  ArrowRight,
  AlertTriangle,
  Heart,
  Shield,
  Zap,
  Brain,
  Eye,
  Droplets,
  Clock,
  Award,
  Info,
} from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Zinzino Omega 3 : Tout savoir sur BalanceOil+ (Guide Complet 2024)",
    description:
      "BalanceOil+ de Zinzino révolutionne les oméga-3. Découvrez sa formulation unique, ses bienfaits prouvés et comment il rééquilibre votre ratio oméga-6:3 en 120 jours.",
    keywords: [
      "Zinzino",
      "BalanceOil+",
      "oméga-3",
      "huile de poisson",
      "ratio oméga-6 oméga-3",
      "DHA EPA",
      "vitamine D3",
      "huile d'olive polyphénols",
      "santé cardiovasculaire",
      "fonction cérébrale",
      "système immunitaire",
      "complément alimentaire premium",
    ],
    canonicalUrl: "blog/Zinzino-Omega-3",
  });
}

export default function ZinzinoOmega3Page() {
  const benefits = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Fonction cérébrale optimisée",
      description: "700 mg de DHA par dose pour la mémoire et la concentration",
      detail:
        "Le DHA contribue au maintien d'une fonction cérébrale normale et soutient les capacités cognitives",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Protection cardiovasculaire",
      description: "EPA et DHA pour un cœur en bonne santé",
      detail:
        "Aide à maintenir des taux normaux de triglycérides et une tension artérielle normale",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Système immunitaire renforcé",
      description: "20 µg de vitamine D3 (400% des VNR)",
      detail:
        "La vitamine D3 contribue au fonctionnement normal du système immunitaire",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Vision saine",
      description: "700 mg de DHA favorisent une vision normale",
      detail: "Le DHA contribue au maintien d'une vision normale",
    },
    {
      icon: <Droplets className="h-5 w-5" />,
      title: "Protection antioxydante",
      description: "Polyphénols d'huile d'olive contre le stress oxydatif",
      detail:
        "Les polyphénols protègent les lipides sanguins du stress oxydatif",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Santé osseuse et musculaire",
      description: "Vitamine D3 pour os, muscles et dents",
      detail:
        "Contribue à la santé osseuse, fonction musculaire et santé dentaire",
    },
  ];

  const ingredients = [
    {
      name: "Huile de poisson",
      amount: "6627 mg",
      detail: "Anchois, maquereau, sardine de pêche sauvage",
    },
    {
      name: "Oméga-3 (EPA+DHA)",
      amount: "2478 mg",
      detail: "1283 mg EPA + 683 mg DHA + autres oméga-3",
    },
    {
      name: "Huile d'olive",
      amount: "4092 mg",
      detail: "Extra vierge espagnole, récoltée précocement",
    },
    {
      name: "Acide oléique (Oméga-9)",
      amount: "3069 mg",
      detail: "Pour normaliser les taux de cholestérol",
    },
    {
      name: "Polyphénols",
      amount: "3,5 mg",
      detail: "Plus de 750 mg/kg dans l'huile d'olive",
    },
    {
      name: "Vitamine D3",
      amount: "20 µg",
      detail: "400% des valeurs nutritionnelles de référence",
    },
  ];

  const testimonials = [
    {
      name: "Marie P.",
      location: "Lyon",
      rating: 5,
      text: "Après 4 mois d'utilisation, mon ratio oméga-6:3 est passé de 15:1 à 2,8:1. Mes analyses le prouvent !",
      verified: true,
      duration: "4 mois d'utilisation",
    },
    {
      name: "Thomas D.",
      location: "Bordeaux",
      rating: 5,
      text: "Goût agréable, pas d'arrière-goût de poisson. Je me sens plus énergique depuis que je le prends.",
      verified: true,
      duration: "6 mois d'utilisation",
    },
    {
      name: "Sophie M.",
      location: "Nantes",
      rating: 4,
      text: "Excellent produit, un peu cher mais la qualité est au rendez-vous. Test sanguin prévu dans 2 mois.",
      verified: true,
      duration: "3 mois d'utilisation",
    },
  ];

  const faqs = [
    {
      question: "Quelle est la différence entre Zinzino et d'autres oméga-3 ?",
      answer:
        "BalanceOil+ combine huile de poisson ET huile d'olive avec des polyphénols pour protéger les oméga-3 jusqu'à leur absorption. Cette synergie unique permet d'atteindre l'équilibre oméga-6:3 optimal en 120 jours, contrairement aux huiles de poisson classiques.",
    },
    {
      question: "Combien de temps avant de ressentir les bienfaits ?",
      answer:
        "Les premiers effets (meilleure énergie, concentration) peuvent apparaître dès 2-4 semaines. L'équilibre optimal du ratio oméga-6:3 est généralement atteint après 120 jours d'utilisation régulière, confirmé par le test sanguin.",
    },
    {
      question: "Peut-on prendre BalanceOil+ avec des anticoagulants ?",
      answer:
        "Si vous prenez des médicaments anticoagulants, consultez absolument votre médecin avant utilisation. Les oméga-3 peuvent avoir un effet fluidifiant sur le sang.",
    },
    {
      question: "Quelle est la posologie exacte selon mon poids ?",
      answer:
        "La posologie est de 0,15 ml par kilo de poids corporel. Exemple : 50 kg = 7,5 ml/jour, 80 kg = 12 ml/jour. Commencez par une demi-dose les premiers jours pour habituer votre organisme.",
    },
    {
      question: "Pourquoi l'huile devient-elle trouble au froid ?",
      answer:
        "C'est normal ! L'huile d'olive se solidifie partiellement en dessous de 4°C. Elle retrouve sa limpidité à température ambiante. Cela prouve la pureté et l'authenticité du produit.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Zinzino Omega 3" },
            ]}
          />
        </div>
      </div>

      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header avec résumé */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              🏆 Best-seller Zinzino
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900">
              Zinzino Omega 3 : Tout savoir sur BalanceOil+
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BalanceOil+ révolutionne l'approche des oméga-3 en combinant huile
              de poisson pure et huile d'olive extra vierge pour rééquilibrer
              votre ratio oméga-6:3 en 120 jours seulement.
            </p>
          </div>

          {/* Points clés */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                🌟 Ce que vous allez découvrir :
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-lg">
                    Bienfaits réels pour le cerveau et le cœur
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-lg">
                    Comment ça fonctionne concrètement
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-lg">Pour quel type de personne</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-lg">
                    Comment l'utiliser (dosage, fréquence)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-lg">
                    Résultats attendus (délais réalistes)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-lg">Risques et contre-indications</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-green-800">
                      💊 BalanceOil+ - Bouteille 300ml
                    </p>
                    <p className="text-green-700">
                      Équilibre optimal oméga-6:3 en 120 jours
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-800">59€</p>
                    <Button className="mt-2 bg-green-600 hover:bg-green-700">
                      <a
                        href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Voir sur Zinzino <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Vous cherchez une solution efficace pour rééquilibrer vos oméga-3
              et améliorer votre santé cardiovasculaire ?
              <strong> Zinzino BalanceOil+</strong> pourrait bien révolutionner
              votre approche de la supplémentation. Ce n'est pas qu'une simple
              huile de poisson, mais une formulation scientifique unique qui
              combine le meilleur de la nature marine et terrestre.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Dans ce guide complet, nous explorons en détail ce produit phare
              de Zinzino : sa composition innovante, ses bienfaits
              scientifiquement prouvés, son mode d'action et les témoignages
              concrets d'utilisateurs. Vous découvrirez pourquoi BalanceOil+ se
              distingue sur le marché saturé des oméga-3.
            </p>
          </div>

          {/* Newsletter */}
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  📧 Obtenez nos conseils d'expert gratuits
                </h3>
                <p className="text-gray-600">
                  Recevez notre livre gratuit "Vitamine D et Omega-3 : les
                  alliés incontournables de votre santé"
                </p>
              </div>
              <NewsletterForm size="lg" />
            </CardContent>
          </Card>

          {/* Qu'est-ce que BalanceOil+ */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Qu'est-ce que Zinzino BalanceOil+ ?
            </h2>

            <Card>
              <CardHeader>
                <CardTitle>La révolution des oméga-3</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700">
                  BalanceOil+ est bien plus qu'un complément oméga-3 classique.
                  C'est une <strong>formulation scientifique</strong>
                  qui combine une huile de poisson de qualité premium avec de
                  l'huile d'olive extra vierge espagnole et de la vitamine D3
                  naturelle.
                </p>

                {/* Image du produit */}
                <div className="flex justify-center my-6">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-lg">
                    <div className="w-64 h-40 bg-orange-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-orange-800 font-bold text-lg mb-2">
                          BalanceOil+
                        </div>
                        <div className="text-orange-600 text-sm">
                          Bouteille 300ml
                        </div>
                        <div className="text-orange-600 text-sm">Zinzino</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    🔬 La science derrière BalanceOil+
                  </h4>
                  <p className="text-blue-700">
                    Les polyphénols de l'huile d'olive protègent les oméga-3
                    fragiles de l'oxydation et facilitent leur transport
                    jusqu'aux membranes cellulaires. Cette synergie unique
                    permet d'atteindre et maintenir l'équilibre optimal
                    oméga-6:3 (ratio inférieur à 3:1) en seulement 120 jours.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      2478mg
                    </div>
                    <div className="text-sm text-orange-800">
                      Oméga-3 par dose
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      120 jours
                    </div>
                    <div className="text-sm text-green-800">
                      pour l'équilibre optimal
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      300ml
                    </div>
                    <div className="text-sm text-purple-800">
                      1 mois de cure
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Avez-vous besoin d'Omega-3 ? */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Avez-vous besoin d'Oméga-3 ?
            </h2>

            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <p className="text-lg text-amber-800 font-medium mb-4">
                  🧠 Vous arrive-t-il d'avoir des difficultés à rester
                  concentré(e) ou à vous souvenir de certaines choses ?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      ✅ Signes que vous pourriez manquer d'oméga-3 :
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Difficultés de concentration</li>
                      <li>• Fatigue chronique</li>
                      <li>• Humeur changeante</li>
                      <li>• Peau sèche ou irritée</li>
                      <li>• Douleurs articulaires</li>
                      <li>• Mauvaise récupération sportive</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      🎯 BalanceOil+ est particulièrement adapté si :
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Vous mangez peu de poisson gras</li>
                      <li>• Vous ressentez du stress chronique</li>
                      <li>• Vous pratiquez une activité sportive</li>
                      <li>
                        • Vous voulez préserver votre santé cardiovasculaire
                      </li>
                      <li>
                        • Vous cherchez à optimiser vos performances cognitives
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Pourquoi l'équilibre Omega-6:3 est-il si important ? */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Pourquoi l'équilibre Omega-6:3 est-il si important ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Comprendre le ratio Omega-6:3</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Dans l'alimentation moderne, les oméga-6 (huiles végétales,
                    aliments transformés) sont largement surreprésentés par
                    rapport aux oméga-3. Cet déséquilibre favorise
                    l'inflammation chronique.
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                      <span className="font-medium">Ratio moyen actuel</span>
                      <span className="text-red-600 font-bold">
                        15:1 à 25:1
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                      <span className="font-medium">Ratio recommandé</span>
                      <span className="text-yellow-600 font-bold">3:1</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Avec BalanceOil+</span>
                      <span className="text-green-600 font-bold">
                        &lt; 3:1 en 120 jours
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Études scientifiques sur les Omega-3</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    La recherche Zinzino s'appuie sur la plus grande base de
                    données mondiale d'acides gras essentiels avec{" "}
                    <strong>plus d'1 million de tests</strong> analysés.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">
                      📊 Données par région :
                    </h5>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Europe du Nord : 12:1 → &lt;3:1</li>
                      <li>• Europe : 15:1 → &lt;3:1</li>
                      <li>• États-Unis : 25:1 → &lt;3:1</li>
                    </ul>
                  </div>

                  <p className="text-sm text-gray-600">
                    <em>
                      Source : Vitas Analytical Services - Laboratoire
                      indépendant
                    </em>
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Les bienfaits de BalanceOil+ */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Les bienfaits de BalanceOil+
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              BalanceOil+ offre une gamme complète de bénéfices grâce à sa
              formulation équilibrée et ses ingrédients de qualité premium.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 rounded-lg text-green-600">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {benefit.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {benefit.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-800">
                  🏆 Résultats prouvés par des tests sanguins
                </h3>
                <p className="text-gray-700">
                  Contrairement à de nombreux compléments, l'efficacité de
                  BalanceOil+ est <strong>mesurable et vérifiable</strong>
                  par un simple test sanguin. Zinzino propose même un test
                  gratuit pour suivre l'évolution de votre profil lipidique et
                  confirmer l'amélioration de votre ratio oméga-6:3.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Les ingrédients de BalanceOil+ */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Les ingrédients de BalanceOil+ : Une formule unique
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Composition détaillée pour 12ml (dose quotidienne)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">
                            Ingrédient
                          </th>
                          <th className="text-left p-2 font-semibold">
                            Quantité
                          </th>
                          <th className="text-left p-2 font-semibold">
                            Détail
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ingredients.map((ingredient, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="p-2 font-medium">
                              {ingredient.name}
                            </td>
                            <td className="p-2 text-green-600 font-bold">
                              {ingredient.amount}
                            </td>
                            <td className="p-2 text-gray-600 text-sm">
                              {ingredient.detail}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-800 mb-3">
                      🐟 Huile de poisson
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Issue de petits poissons sauvages (anchois, maquereaux,
                      sardines) pêchés de manière durable.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>EPA :</strong> 1283 mg - Anti-inflammatoire
                      </li>
                      <li>
                        • <strong>DHA :</strong> 683 mg - Santé cérébrale
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-800 mb-3">
                      🫒 Huile d'olive extra vierge espagnole
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Variété Picual, récoltée précocement pour une teneur
                      maximale en polyphénols.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Polyphénols :</strong> +750 mg/kg
                      </li>
                      <li>
                        • <strong>Oméga-9 :</strong> 3069 mg
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-500">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-yellow-800 mb-3">
                      ☀️ Vitamine D3 naturelle
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Fabriquée à partir de lanoline, suivant le même processus
                      que la synthèse naturelle dans la peau.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Dosage :</strong> 20 µg (400% VNR)
                      </li>
                      <li>
                        • <strong>Forme :</strong> Cholécalciférol
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Comment utiliser BalanceOil+ efficacement */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Comment utiliser BalanceOil+ efficacement ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Posologie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">
                      📏 Formule de calcul : 0,15 ml par kilo de poids corporel
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Poids : 50 kg</span>
                      <span className="font-bold text-green-600">
                        7,5 ml/jour
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Poids : 70 kg</span>
                      <span className="font-bold text-green-600">
                        10,5 ml/jour
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Poids : 80 kg</span>
                      <span className="font-bold text-green-600">
                        12 ml/jour
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      💡 Conseils d'utilisation
                    </h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Prendre le matin à jeun de préférence</li>
                      <li>• Peut être pris avec un repas</li>
                      <li>
                        • Commencer par la moitié de la dose les premiers jours
                      </li>
                      <li>
                        • Utiliser la pipette fournie pour un dosage précis
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conseils de conservation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Avant ouverture</p>
                        <p className="text-gray-600 text-sm">
                          Température ambiante ou réfrigérateur
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Droplets className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium">Après ouverture</p>
                        <p className="text-gray-600 text-sm">
                          Conserver au réfrigérateur, consommer sous 45 jours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-yellow-600 mt-1" />
                      <div>
                        <p className="font-medium">Aspect trouble</p>
                        <p className="text-gray-600 text-sm">
                          Normal en dessous de 4°C, redevient limpide à
                          température ambiante
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      ⚠️ Précautions
                    </h4>
                    <ul className="text-yellow-700 space-y-1 text-sm">
                      <li>• Tenir hors de portée des enfants</li>
                      <li>• Ne pas dépasser la dose quotidienne recommandée</li>
                      <li>
                        • Consultez votre médecin si traitement anticoagulant
                      </li>
                      <li>• Ne remplace pas une alimentation variée</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Témoignages utilisateurs */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Témoignages utilisateurs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="text-xs">
                          ✓ Vérifié
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-700 italic mb-4">
                      "{testimonial.text}"
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">
                            {testimonial.name}
                          </span>
                          <p className="text-sm text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-green-600 font-medium">
                        {testimonial.duration}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50">
              <CardContent className="p-6 text-center">
                <p className="text-blue-800 font-medium mb-2">
                  ⭐ Note moyenne : 4.7/5 basée sur plus de 1000 avis clients
                </p>
                <p className="text-blue-600 text-sm">
                  98% des utilisateurs recommandent BalanceOil+ après 6 mois
                  d'utilisation
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Où acheter BalanceOil+ */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Où acheter BalanceOil+ ?
            </h2>

            <Card className="border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-green-800">
                      🛒 Site officiel Zinzino
                    </h3>
                    <p className="text-green-700">
                      Seul distributeur officiel recommandé
                    </p>
                  </div>
                  <Badge className="bg-green-600">Recommandé</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-lg">
                        Prix officiel : 59,00 € TTC
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-lg">
                        Livraison rapide en France
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-lg">
                        Garantie produit authentique
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-lg">
                        Test sanguin gratuit inclus
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-lg">Service client français</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold">Arômes disponibles :</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Arôme naturel de vanille</li>
                      <li>• Arôme naturel de citron</li>
                      <li>• Arôme naturel d'orange citron menthe</li>
                      <li>
                        • Arôme naturel de pamplemousse citron citron vert
                      </li>
                    </ul>

                    <Button
                      className="w-full mt-4 bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      <a
                        href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full"
                      >
                        <span className="text-lg">
                          Commander BalanceOil+ (59€)
                        </span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-red-800 mb-3">
                  🚫 Où NE PAS acheter
                </h3>
                <p className="text-red-700">
                  BalanceOil+ n'est <strong>pas disponible</strong> en
                  pharmacie, sur Amazon ou autres plateformes tierces. Les
                  produits vendus ailleurs que sur le site officiel Zinzino ou
                  par des partenaires agréés peuvent être des contrefaçons ou
                  des produits périmés.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Précautions et contre-indications */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Précautions et contre-indications
            </h2>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                  <div className="space-y-4">
                    <h3 className="font-semibold text-red-800">
                      ⚠️ Qui doit être prudent avec BalanceOil+ ?
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">
                          Consultez votre médecin si :
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Vous prenez des anticoagulants</li>
                          <li>• Vous avez des troubles de la coagulation</li>
                          <li>• Vous êtes enceinte ou allaitante</li>
                          <li>• Vous avez une maladie chronique</li>
                          <li>• Vous prenez des médicaments réguliers</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-red-700 mb-2">
                          Effets secondaires possibles :
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Légers troubles digestifs (début)</li>
                          <li>• Goût de poisson (rare avec BalanceOil+)</li>
                          <li>• Selles molles temporaires</li>
                          <li>• Réactions allergiques (très rares)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                      <p className="text-yellow-800">
                        <strong>Important :</strong> Commencez par la moitié de
                        la dose recommandée pendant les premiers jours pour
                        permettre à votre organisme de s'habituer.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              FAQ : Questions fréquentes sur Zinzino Omega 3
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Conclusion */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Conclusion : Pourquoi investir dans votre santé avec Zinzino
              BalanceOil+ ?
            </h2>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-800 mb-3">
                      ✅ BalanceOil+ est fait pour vous si :
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Vous voulez améliorer votre santé cardiovasculaire
                      </li>
                      <li>
                        • Vous cherchez à optimiser vos fonctions cognitives
                      </li>
                      <li>• Vous souhaitez réduire l'inflammation chronique</li>
                      <li>• Vous préférez la qualité premium vérifiable</li>
                      <li>
                        • Vous voulez des résultats mesurables par test sanguin
                      </li>
                      <li>• Vous consommez peu de poisson gras</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-red-800 mb-3">
                      ❌ Ce n'est peut-être pas pour vous si :
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Vous cherchez une solution très économique</li>
                      <li>
                        • Vous n'aimez pas prendre des compléments liquides
                      </li>
                      <li>• Vous prenez déjà des anticoagulants sans suivi</li>
                      <li>• Vous attendez des résultats immédiats</li>
                      <li>• Vous préférez les formes en gélules</li>
                      <li>• Vous ne voulez pas vous engager sur 4 mois</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-4 text-xl">
                  🎯 Notre recommandation finale
                </h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Zinzino BalanceOil+ représente l'état de l'art en matière de
                  supplémentation oméga-3. Sa formulation unique, sa qualité
                  vérifiable et ses résultats mesurables en font un
                  investissement santé intelligent pour qui cherche une solution
                  premium et efficace. L'approche scientifique de Zinzino, avec
                  test sanguin gratuit, vous permet de suivre concrètement
                  l'amélioration de votre profil lipidique.
                </p>

                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-800">
                      4.7/5
                    </div>
                    <div className="text-sm text-green-600">
                      Satisfaction clients
                    </div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-800">
                      120 jours
                    </div>
                    <div className="text-sm text-blue-600">
                      Pour l'équilibre optimal
                    </div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-800">
                      59€
                    </div>
                    <div className="text-sm text-orange-600">
                      Investissement mensuel
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-xl px-8 py-4"
                >
                  <a
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Award className="mr-2 h-6 w-6" />
                    Commencer ma transformation santé aujourd'hui
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>

                <p className="text-sm text-gray-500 mt-4">
                  * Test sanguin gratuit inclus pour suivre vos progrès
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Sources */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Sources</h3>
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    1. The Journal of Nutrition - Effets des oméga-3 sur la
                    santé cardiovasculaire
                  </li>
                  <li>
                    2. Études de Vitas Analytical Services - Base de données
                    mondiale des acides gras
                  </li>
                  <li>
                    3. Documentation officielle Zinzino - Composition et études
                    produit
                  </li>
                  <li>
                    4. Neurology - Impact du DHA sur les fonctions cognitives
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
