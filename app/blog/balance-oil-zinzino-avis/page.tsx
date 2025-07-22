import {
  generateSEOMetadata,
  generateArticleSchema,
} from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import {
  CheckCircle,
  ArrowRight,
  Heart,
  Brain,
  Shield,
  Zap,
  Droplets,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Avis Balance Oil+ Zinzino : Test Complet et Résultats Prouvés",
    description: "Boostez votre santé avec BalanceOil+ de Zinzino ! Un équilibre parfait en Oméga-3 et vitamine D3 pour une vitalité optimale !",
    keywords: [
      "Balance Oil Zinzino",
      "BalanceOil+ avis",
      "Omega-3 Zinzino",
      "vitamine D3",
      "complément alimentaire",
      "huile de poisson",
      "équilibre oméga",
      "Zinzino test",
      "santé cardiovasculaire",
    ],
    canonicalUrl: "blog/balance-oil-zinzino-avis",
  });
}

export default function BalanceOilZinzinoAvis() {
  const articleSchema = generateArticleSchema({
    title: "Avis Balance Oil+ Zinzino",
    excerpt: "Boostez votre santé avec BalanceOil+ de Zinzino ! Un équilibre parfait en Oméga-3 et vitamine D3 pour une vitalité optimale !",
    datePublished: "2025-01-30",
    author: "Thibaut",
    category: "Compléments Alimentaires",
    url: "blog/balance-oil-zinzino-avis",
  });

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Avis Balance Oil+ Zinzino" },
  ];

  const keyPoints = [
    {
      icon: CheckCircle,
      title: "Des résultats prouvés",
      description: "Après 120 jours, l'équilibre Oméga-6/Oméga-3 passe sous la barre des 3:1, réduisant l'inflammation et améliorant la santé cellulaire.",
    },
    {
      icon: Heart,
      title: "Un soutien global",
      description: "Améliore la fonction cérébrale, renforce l'immunité et protège la santé cardiovasculaire.",
    },
    {
      icon: Droplets,
      title: "Des ingrédients naturels et puissants",
      description: "Huiles de poisson sauvages, huile d'olive extra vierge et vitamine D3 pure pour une absorption optimale.",
    },
    {
      icon: Shield,
      title: "Une formulation scientifiquement validée",
      description: "Testée sur plus d'un million d'échantillons avec des résultats mesurables.",
    },
    {
      icon: Zap,
      title: "Des avis positifs",
      description: "De nombreux utilisateurs témoignent d'une amélioration de leur énergie, de leur concentration et de leur bien-être général.",
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Fonction cérébrale",
      description: "Contient 700 mg de DHA, favorisant la mémoire, la concentration et la réduction du brouillard mental.",
    },
    {
      icon: Shield,
      title: "Système immunitaire",
      description: "Fournit 20 µg de vitamine D3 par dose quotidienne, contribuant à un système immunitaire optimal.",
    },
    {
      icon: CheckCircle,
      title: "Équilibre en acides gras",
      description: "Maintient un ratio Oméga-6/Oméga-3 en dessous de 3:1, contre 15:1 en moyenne en Europe.",
    },
    {
      icon: Heart,
      title: "Santé cardiovasculaire",
      description: "Aide à réguler les taux de triglycérides et la pression artérielle.",
    },
    {
      icon: Zap,
      title: "Santé des os et des muscles",
      description: "La vitamine D3 présente dans BalanceOil+ soutient la solidité osseuse et la régénération musculaire.",
    },
    {
      icon: Droplets,
      title: "Protection cellulaire",
      description: "Les polyphénols de l'huile d'olive extra vierge agissent comme de puissants antioxydants contre le stress oxydatif.",
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
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Test Complet
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Omega-3 Premium
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Avis Balance Oil+ Zinzino
          </h1>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
            <span>Par <strong>Thibaut</strong></span>
            <span>•</span>
            <span>30 janvier 2025</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Points clés Section */}
          <section className="mb-12" id="points-cles">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Points clés
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {keyPoints.map((point, index) => (
                <Card key={index} className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                        <p className="text-gray-700 text-sm">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-lg font-semibold py-3 px-8"
                asChild
              >
                <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/" target="_blank">
                  ➡️ Commandez votre bouteille dès maintenant et ressentez la différence !
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white p-8 rounded-2xl mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-3">📘</span>
              <h3 className="text-2xl font-bold">
                OBTENEZ VOTRE COPIE GRATUITE
              </h3>
            </div>
            <p className="text-lg mb-2">
              Téléchargez notre livre GRATUIT « Vitamine D et omega-3 : les alliés incontournables de votre santé ».
            </p>
            <p className="text-blue-100 mb-6">
              Obtenez toutes les informations pour comprendre les bienfaits de la vitamine D et des omega-3 pour l'intégrer facilement dans votre vie quotidienne.
            </p>
            <p className="text-blue-100 mb-6">
              Que vous souhaitiez booster votre énergie, renforcer votre système immunitaire ou améliorer votre bien-être global, ce livre vous vous donne les clés exploiter tout le potentiel de la vitamine D et des omega-3.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="dark" size="lg" />
            </div>
          </div>

          {/* Qu'est-ce que BalanceOil+ Section */}
          <section className="mb-12" id="quest-ce-que-balanceoil">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Qu'est-ce que BalanceOil+ ?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              BalanceOil+ de Zinzino est un complément alimentaire innovant formulé pour rétablir un équilibre optimal entre les Oméga-6 et Oméga-3 dans l'organisme. Conçu à partir d'un mélange d'huiles de poisson sauvages et d'huile d'olive extra vierge de qualité supérieure, ce produit phare offre une biodisponibilité maximale des nutriments essentiels.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sa formulation scientifique repose sur l'association d'Oméga-3 (EPA et DHA), de polyphénols naturels issus d'huile d'olive et de vitamine D3, pour un impact optimal sur la santé cérébrale, cardiovasculaire et immunitaire.
            </p>
          </section>

          {/* Pourquoi choisir BalanceOil+ Section */}
          <section className="mb-12" id="pourquoi-choisir">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi choisir BalanceOil+ de Zinzino ?
            </h2>

            {/* Des bienfaits scientifiquement prouvés */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Des bienfaits scientifiquement prouvés
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Grâce à sa composition unique, BalanceOil+ agit en profondeur sur plusieurs aspects essentiels de la santé :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-700 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Une formulation naturelle et efficace Section */}
          <section className="mb-12" id="formulation-naturelle">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Une formulation naturelle et efficace
            </h2>

            {/* Des huiles de poisson de qualité */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Des huiles de poisson de qualité
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                BalanceOil+ est formulé à partir de petits poissons (anchois, maquereaux, sardines) issus de la pêche durable. Ces huiles marines sont riches en EPA et DHA, garantissant un apport optimal en Oméga-3.
              </p>
            </div>

            {/* Huile d'olive extra vierge premium */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Huile d'olive extra vierge premium
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                L'huile d'olive extra vierge espagnole Picual utilisée dans BalanceOil+ provient d'olives de récolte précoce, soigneusement sélectionnées pour leur richesse en polyphénols (>750 mg/kg). Ces composés naturels améliorent la stabilité des Oméga-3 dans l'organisme et renforcent la protection cellulaire.
              </p>
            </div>

            {/* Vitamine D3 pure */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vitamine D3 pure
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                BalanceOil+ contient une vitamine D3 d'origine naturelle, extraite de lanoline (cire de laine de mouton), pour une absorption optimale par l'organisme.
              </p>
            </div>
          </section>

          {/* Comment utiliser BalanceOil+ Section */}
          <section className="mb-12" id="comment-utiliser">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment utiliser BalanceOil+ ?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              L'apport journalier recommandé est de 0,15 ml par kilo de poids corporel. Voici quelques exemples de dosage :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">50 kg</div>
                    <div className="text-lg font-semibold">7,5 ml par jour</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">80 kg</div>
                    <div className="text-lg font-semibold">12 ml par jour</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pour une absorption optimale, BalanceOil+ doit être pris quotidiennement avec un repas.
            </p>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800 font-medium">
                🛑 Précaution : Si vous prenez des anticoagulants, consultez votre médecin avant utilisation.
              </p>
            </div>
          </section>

          {/* Des résultats mesurables Section */}
          <section className="mb-12" id="resultats-mesurables">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              BalanceOil+ : Des résultats mesurables
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Des tests sur plus de 1 000 000 échantillons analysés par le laboratoire Vitas Analytical Services démontrent une amélioration significative du ratio Oméga-6/Oméga-3 après 120 jours de prise régulière de BalanceOil+.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">Avant</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="text-gray-700">12:1 en Europe du Nord</li>
                    <li className="text-gray-700">15:1 en Europe</li>
                    <li className="text-gray-700">25:1 aux USA</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Après 120 jours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">&lt;3:1</div>
                    <div className="text-lg">Ratio moyen</div>
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mt-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Où acheter Section */}
          <section className="mb-12" id="ou-acheter">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Où acheter BalanceOil+ ?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              BalanceOil+ est disponible exclusivement via un conseiller Zinzino. Vous pouvez commander votre bouteille de 300 ml pour 58,00 € et bénéficier de ses bienfaits au quotidien.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chaque bouteille contient 30 doses, vous garantissant un apport optimal en Oméga-3, vitamine D3 et polyphénols.
            </p>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-lg font-semibold py-3 px-8"
                asChild
              >
                <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/" target="_blank">
                  ➡️ Cliquez ici pour passer votre commande et équilibrer votre santé dès aujourd'hui !
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-blue-600 via-orange-600 to-red-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              🌟 Prêt à équilibrer votre santé avec BalanceOil+ ?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Rejoignez les milliers de personnes qui ont découvert les bienfaits mesurables de BalanceOil+ pour leur équilibre oméga et leur vitalité
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
              asChild
            >
              <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop/omega-supplements/300000/" target="_blank">
                🛒 Commander BalanceOil+ maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}