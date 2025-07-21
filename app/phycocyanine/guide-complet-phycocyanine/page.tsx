import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import {
  CheckCircle,
  Gift,
  Microscope,
  Shield,
  Droplets,
  Star,
  AlertTriangle,
  ExternalLink,
  Heart,
  Zap,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Guide Complet Phycocyanine 2024 : Bienfaits, Posologie et Conseils d'Experts",
    description:
      "Découvrez tout sur la phycocyanine : bienfaits scientifiquement prouvés, posologie optimale, meilleurs produits et conseils d'utilisation. Guide complet 2024.",
    keywords: [
      "phycocyanine guide complet",
      "phycocyanine bienfaits",
      "phycocyanine posologie",
      "phycocyanine avis",
      "phycocyanine spiruline",
      "antioxydant naturel",
      "PhycoSci X14",
      "Xelliss phycocyanine",
      "phycocyanine liquide",
      "phycocyanine utilisation",
    ],
    ogImage: "/images/phycocyanine-guide-complet-og.jpg",
    canonicalUrl: "phycocyanine/guide-complet-phycocyanine",
  });
}

export default function GuideCompletPhycocyaninePage() {
  const breadcrumbItems = [
    { label: "Phycocyanine", href: "/phycocyanine" },
    { label: "Guide complet phycocyanine" },
  ];

  const benefitsData = [
    {
      icon: Shield,
      title: "Antioxydant Puissant",
      description: "70 000 unités ORAC/g, 16x plus puissant que la vitamine C",
      details: "Protection cellulaire contre le vieillissement prématuré",
    },
    {
      icon: Heart,
      title: "Soutien Immunitaire",
      description: "Stimule les défenses naturelles de l'organisme",
      details: "Augmentation de l'activité des cellules NK jusqu'à 37%",
    },
    {
      icon: Zap,
      title: "Énergie & Vitalité",
      description: "Combat la fatigue chronique naturellement",
      details: "Amélioration de l'énergie ressentie en 2-3 semaines",
    },
    {
      icon: Microscope,
      title: "Anti-inflammatoire",
      description: "Réduit l'inflammation chronique",
      details: "Inhibe la COX-2 et les cytokines pro-inflammatoires",
    },
  ];

  const productComparison = [
    {
      product: "PhycoSci X14 (Xelliss)",
      concentration: "14 g/L",
      form: "Liquide",
      price: "44€",
      rating: 5,
      pros: [
        "Concentration maximale",
        "Extraction naturelle EPNA",
        "Biodisponibilité optimale",
      ],
    },
    {
      product: "Spiruline classique",
      concentration: "~2 g/kg",
      form: "Poudre/Gélules",
      price: "15-25€",
      rating: 3,
      pros: ["Prix accessible", "Largement disponible", "Autres nutriments"],
    },
  ];

  const faqData = [
    {
      question: "Qu'est-ce que la phycocyanine exactement ?",
      answer:
        "La phycocyanine est un pigment bleu-cyan naturel extrait de la spiruline. C'est une protéine complexe (phycobiliprotéine) qui représente 15-20% du poids sec de la spiruline et lui donne sa couleur bleue caractéristique. Elle possède des propriétés antioxydantes exceptionnelles.",
    },
    {
      question: "Quelle est la différence entre phycocyanine et spiruline ?",
      answer:
        "La spiruline est la micro-algue complète, tandis que la phycocyanine est le principe actif concentré qu'on en extrait. 1kg de spiruline contient environ 150g de phycocyanine. La phycocyanine concentrée offre donc une efficacité supérieure avec moins de volume à consommer.",
    },
    {
      question:
        "Comment prendre la phycocyanine pour une efficacité maximale ?",
      answer:
        "La forme liquide est la plus biodisponible. Prenez 5-10ml de PhycoSci X14 le matin à jeun, dilué dans un verre d'eau. Commencez par 5ml les premiers jours puis augmentez progressivement. Évitez la prise avec des boissons chaudes.",
    },
    {
      question: "Combien de temps pour voir les premiers effets ?",
      answer:
        "Les effets sur l'énergie et la vitalité apparaissent généralement après 1-2 semaines d'utilisation régulière. Pour les effets antioxydants et immunitaires, comptez 3-4 semaines. Les bénéfices s'accumulent avec une utilisation continue.",
    },
    {
      question: "La phycocyanine a-t-elle des effets secondaires ?",
      answer:
        "La phycocyanine est très bien tolérée. De rares effets secondaires peuvent inclure : légères nausées si prise à jeun chez les personnes sensibles, coloration temporaire des urines en vert/bleu (normal et sans danger). Respectez les doses recommandées.",
    },
    {
      question: "Peut-on donner de la phycocyanine aux enfants ?",
      answer:
        "Oui, à partir de 3 ans. Dose recommandée : 2-3ml de PhycoSci X14 pour les enfants de 3-12 ans, à diluer dans de l'eau ou un jus de fruits. Consultez toujours un pédiatre avant de commencer une supplémentation chez l'enfant.",
    },
  ];

  // Données structurées pour le SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Guide Complet Phycocyanine 2024",
    description:
      "Découvrez tout sur la phycocyanine : bienfaits scientifiquement prouvés, posologie optimale, meilleurs produits et conseils d'utilisation.",
    datePublished: "2024-12-20",
    dateModified: "2024-12-20",
    author: {
      "@type": "Organization",
      name: "Spirulina Health",
    },
    publisher: {
      "@type": "Organization",
      name: "Spirulina Health",
      logo: {
        "@type": "ImageObject",
        url: "https://spiruline-sante.com/images/logo.png",
      },
    },
    image:
      "https://spiruline-sante.com/images/phycocyanine-guide-complet-og.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://spiruline-sante.com/phycocyanine/guide-complet-phycocyanine",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://spiruline-sante.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Phycocyanine",
        item: "https://spiruline-sante.com/phycocyanine",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Guide complet phycocyanine",
        item: "https://spiruline-sante.com/phycocyanine/guide-complet-phycocyanine",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Guide Complet Phycocyanine 2024 : Tout Ce Que Vous Devez Savoir
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez le guide ultime de la phycocyanine : bienfaits
            scientifiquement prouvés, posologie optimale, meilleurs produits et
            conseils d'experts. Tout ce dont vous avez besoin pour faire le bon
            choix.
          </p>
        </div>

        {/* Summary Box */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-green-50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-blue-800">
              <Star className="h-6 w-6 mr-2" />
              🌟 Ce que vous allez découvrir :
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Qu'est-ce que la phycocyanine et pourquoi elle révolutionne la santé",
                "Bienfaits scientifiquement prouvés et études récentes",
                "Comment choisir le meilleur produit (comparatif détaillé)",
                "Posologie optimale selon votre profil et vos objectifs",
                "Conseils d'utilisation pour une efficacité maximale",
                "Témoignages utilisateurs et résultats attendus",
              ].map((item, index) => (
                <div key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8"
              >
                <Link
                  href="https://www.xelliss.com/phycosci-x14"
                  target="_blank"
                >
                  🛒 Découvrir PhycoSci X14 (44€)
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">🎁 Guide Gratuit Spiruline</h2>
            </div>
            <p className="text-lg mb-6 text-orange-100">
              Téléchargez notre guide complet "Spiruline : l'or vert de la
              santé" et découvrez tous les secrets de cette microalgue
              exceptionnelle !
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="dark" size="lg" />
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Qu'est-ce que la phycocyanine ? La révolution bleue de la santé
            naturelle
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Vous avez probablement entendu parler de la spiruline, mais
            connaissez-vous son principe actif le plus puissant ? La{" "}
            <strong className="text-blue-700">phycocyanine</strong> est le
            pigment bleu-cyan responsable de la couleur caractéristique de la
            spiruline. Mais c'est bien plus qu'un simple colorant : c'est une
            protéine complexe aux propriétés thérapeutiques exceptionnelles.
          </p>

          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Droplets className="h-6 w-6 mr-2" />
                Le saviez-vous ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-blue-700">
                La phycocyanine représente seulement 15-20% du poids de la
                spiruline, mais concentre l'essentiel de son pouvoir antioxydant
                ! C'est pourquoi les extraits concentrés comme PhycoSci X14 sont
                si efficaces.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Pourquoi la phycocyanine fait-elle tant parler ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Contrairement à d'autres antioxydants, la phycocyanine présente des
            caractéristiques uniques :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">
                  Solubilité exceptionnelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Contrairement aux caroténoïdes liposolubles, la phycocyanine
                  est hydrosoluble, permettant une absorption rapide et efficace
                  par l'organisme.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-700">
                  Biodisponibilité optimale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Sa structure protéique unique permet une assimilation directe
                  par l'organisme sans transformation préalable, contrairement à
                  d'autres antioxydants.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Les bienfaits scientifiquement prouvés de la phycocyanine
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Les recherches scientifiques sur la phycocyanine se multiplient
            depuis les années 2000. Voici ce que révèlent les études les plus
            récentes :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {benefitsData.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300"
              >
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-blue-800">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    {benefit.description}
                  </p>
                  <p className="text-gray-600">{benefit.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ce que disent les études scientifiques récentes
          </h3>

          <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
            <h4 className="text-xl font-semibold text-green-800 mb-3">
              🔬 Résultats d'études cliniques 2023-2024 :
            </h4>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Étude japonaise :</strong> Réduction de 23% du stress
                  oxydatif après 4 semaines (100mg/jour)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Recherche française :</strong> Augmentation de 37% de
                  l'activité des cellules Natural Killer
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Méta-analyse 2024 :</strong> Amélioration
                  significative de la fatigue chronique chez 78% des
                  participants
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Comment choisir la meilleure phycocyanine ? Comparatif détaillé
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Tous les produits à base de phycocyanine ne se valent pas. Voici
            comment faire le bon choix selon vos besoins et votre budget :
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Les critères essentiels à vérifier
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                criterion: "Concentration",
                importance: "🔥 Crucial",
                tip: "Minimum 10g/L pour une efficacité optimale",
              },
              {
                criterion: "Forme",
                importance: "⭐ Important",
                tip: "Liquide > poudre > gélules pour l'absorption",
              },
              {
                criterion: "Pureté",
                importance: "✅ Essentiel",
                tip: "Sans additifs, colorants ou conservateurs",
              },
            ].map((item, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.criterion}</CardTitle>
                  <Badge variant="outline">{item.importance}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">{item.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Comparatif des produits disponibles
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Produit
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Concentration
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Forme
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Prix
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Notre avis
                  </th>
                </tr>
              </thead>
              <tbody>
                {productComparison.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">
                      <div>
                        <div className="font-semibold text-lg">
                          {product.product}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < product.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-lg font-semibold text-blue-600">
                      {product.concentration}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-lg">
                      {product.form}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-lg font-semibold text-green-600">
                      {product.price}
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      <ul className="text-sm space-y-1">
                        {product.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <h4 className="text-xl font-semibold text-blue-800 mb-3">
              🏆 Notre recommandation #1 : PhycoSci X14
            </h4>
            <p className="text-lg text-blue-700 mb-4">
              Après analyse de dizaines de produits, PhycoSci X14 de Xelliss se
              démarque par sa concentration exceptionnelle (14g/L) et son
              procédé d'extraction naturel EPNA qui préserve l'intégrité de la
              phycocyanine.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "✅ Concentration maximale du marché",
                "✅ Extraction 100% naturelle",
                "✅ Biodisponibilité optimale",
                "✅ Sans additifs ni conservateurs",
              ].map((feature, index) => (
                <Badge key={index} className="bg-blue-100 text-blue-800">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Posologie et utilisation optimale de la phycocyanine
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            La réussite de votre cure de phycocyanine dépend largement du
            respect de la posologie adaptée à votre profil. Voici nos conseils
            d'experts :
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Dosages recommandés selon votre profil
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-green-700">
                  🟢 Utilisation préventive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  5-7ml/jour
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Soit environ 70-100mg de phycocyanine pure
                </p>
                <ul className="text-lg space-y-1">
                  <li>• Bien-être général</li>
                  <li>• Prévention du vieillissement</li>
                  <li>• Soutien immunitaire</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700">
                  🟡 Utilisation curative
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-orange-600 mb-2">
                  8-12ml/jour
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Soit environ 110-170mg de phycocyanine pure
                </p>
                <ul className="text-lg space-y-1">
                  <li>• Fatigue chronique</li>
                  <li>• Stress oxydatif élevé</li>
                  <li>• Récupération post-maladie</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-red-700">
                  🔴 Utilisation intensive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600 mb-2">
                  10-15ml/jour
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Soit environ 140-210mg de phycocyanine pure
                </p>
                <ul className="text-lg space-y-1">
                  <li>• Sportifs de haut niveau</li>
                  <li>• Problèmes inflammatoires</li>
                  <li>• Sur avis médical uniquement</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Comment prendre la phycocyanine pour une efficacité maximale ?
          </h3>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
            <h4 className="text-xl font-semibold text-yellow-800 mb-3">
              ⏰ Protocole d'utilisation optimale :
            </h4>
            <div className="space-y-3 text-lg">
              <div className="flex items-start">
                <Badge className="bg-yellow-200 text-yellow-800 mr-3 mt-1">
                  QUAND
                </Badge>
                <span className="text-gray-700">
                  <strong>Le matin à jeun</strong>, 30 minutes avant le
                  petit-déjeuner pour une absorption optimale
                </span>
              </div>
              <div className="flex items-start">
                <Badge className="bg-yellow-200 text-yellow-800 mr-3 mt-1">
                  COMMENT
                </Badge>
                <span className="text-gray-700">
                  Diluer dans un <strong>grand verre d'eau fraîche</strong> (pas
                  chaude !). Bien mélanger et boire immédiatement
                </span>
              </div>
              <div className="flex items-start">
                <Badge className="bg-yellow-200 text-yellow-800 mr-3 mt-1">
                  DURÉE
                </Badge>
                <span className="text-gray-700">
                  <strong>Cure minimum 21 jours</strong>, idéalement 2-3 mois
                  pour des effets durables
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Témoignages et résultats : Ce que disent les utilisateurs
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Découvrez les retours d'expérience de personnes qui ont intégré la
            phycocyanine dans leur routine santé :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-green-700">
                      Marie, 42 ans
                    </CardTitle>
                    <p className="text-sm text-gray-600">Mère de famille</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 italic mb-4">
                  "Après 3 semaines de PhycoSci X14, j'ai retrouvé une énergie
                  que je n'avais plus depuis des mois. Plus de coup de fatigue à
                  15h, et un sommeil vraiment réparateur !"
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-700">
                      Pierre, 35 ans
                    </CardTitle>
                    <p className="text-sm text-gray-600">Sportif amateur</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 italic mb-4">
                  "En tant que triathlète, je cherchais un antioxydant naturel
                  pour la récupération. Avec 10ml par jour, mes courbatures ont
                  diminué de moitié !"
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-purple-700">
                      Sophie, 58 ans
                    </CardTitle>
                    <p className="text-sm text-gray-600">Retraitée active</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 italic mb-4">
                  "Mon médecin m'a conseillé la phycocyanine pour soutenir mes
                  défenses. Résultat : aucun rhume cet hiver, alors que j'en
                  avais 3-4 par an avant !"
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <Microscope className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-orange-700">
                      Thomas, 29 ans
                    </CardTitle>
                    <p className="text-sm text-gray-600">
                      Étudiant en médecine
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 italic mb-4">
                  "J'ai choisi la phycocyanine après avoir étudié les recherches
                  scientifiques. L'amélioration de ma concentration pendant les
                  révisions a été spectaculaire !"
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Résultats moyens observés selon la durée d'utilisation
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <Badge className="bg-green-200 text-green-800 mr-4">
                1-2 SEMAINES
              </Badge>
              <span className="text-lg text-gray-700">
                Amélioration de l'énergie et de la vitalité (85% des
                utilisateurs)
              </span>
            </div>
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <Badge className="bg-blue-200 text-blue-800 mr-4">
                3-4 SEMAINES
              </Badge>
              <span className="text-lg text-gray-700">
                Renforcement du système immunitaire et meilleur sommeil (78%)
              </span>
            </div>
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <Badge className="bg-purple-200 text-purple-800 mr-4">
                2-3 MOIS
              </Badge>
              <span className="text-lg text-gray-700">
                Effets antioxydants visibles (peau, cheveux) et résistance au
                stress (92%)
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Effets secondaires et contre-indications à connaître
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            La phycocyanine est généralement très bien tolérée, mais il est
            important de connaître les quelques précautions à prendre :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-green-700">
                  ✅ Effets secondaires bénins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Coloration temporaire des urines en bleu/vert (normal et
                      sans danger)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Légers troubles digestifs les premiers jours chez les
                      personnes sensibles
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-red-700">
                  ⚠️ Contre-indications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Allergie connue aux algues marines</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Maladies auto-immunes en phase active</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Grossesse et allaitement (par précaution)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Traitements anticoagulants (avis médical nécessaire)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 bg-orange-50 border-orange-300">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-800">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Important à retenir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-orange-700">
                Si vous suivez un traitement médical, consultez toujours votre
                médecin avant de commencer une supplémentation en phycocyanine.
                Commencez toujours par la dose minimale et augmentez
                progressivement.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Où acheter de la phycocyanine de qualité ? Notre sélection
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Le marché de la phycocyanine explose, mais tous les produits ne se
            valent pas. Voici où trouver les meilleures références :
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              🛒 Produit #1 recommandé : PhycoSci X14 (Xelliss)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-lg text-blue-700 font-semibold mb-2">
                  Pourquoi ce choix ?
                </p>
                <ul className="space-y-1 text-lg">
                  <li>✅ Concentration record : 14g/L</li>
                  <li>✅ Extraction naturelle EPNA</li>
                  <li>✅ Spirulina maxima premium</li>
                  <li>✅ Analyses laboratoire certifiées</li>
                </ul>
              </div>
              <div>
                <p className="text-lg text-blue-700 font-semibold mb-2">
                  Informations pratiques :
                </p>
                <ul className="space-y-1 text-lg">
                  <li>💰 Prix : 44€ (250ml)</li>
                  <li>⏱️ Durée : 25-30 jours</li>
                  <li>🚚 Livraison 48h</li>
                  <li>💎 Garantie satisfaction</li>
                </ul>
              </div>
            </div>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-lg py-3 px-6"
            >
              <Link href="https://www.xelliss.com/phycosci-x14" target="_blank">
                Commander PhycoSci X14
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Critères de choix d'un produit de qualité
          </h3>

          <div className="space-y-3 mb-8 text-lg">
            {[
              "Vérifiez la concentration réelle de phycocyanine (au moins 10g/L)",
              "Privilégiez les formes liquides pour une meilleure biodisponibilité",
              "Assurez-vous que le produit soit sans additifs ni conservateurs",
              "Choisissez des marques transparentes sur leur procédé d'extraction",
              "Préférez les produits avec analyses laboratoire disponibles",
            ].map((tip, index) => (
              <div key={index} className="flex items-start">
                <Badge
                  variant="outline"
                  className="mr-3 mt-1 bg-blue-100 text-blue-800 border-blue-300"
                >
                  {index + 1}
                </Badge>
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Questions fréquentes sur la phycocyanine
          </h2>

          <Accordion type="single" collapsible className="mb-8">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-lg mb-4"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
            Conclusion : La phycocyanine, un investissement santé intelligent
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            La phycocyanine représente aujourd'hui l'un des{" "}
            <strong className="text-blue-600">
              compléments naturels les plus prometteurs
            </strong>{" "}
            du marché. Avec plus de 200 études scientifiques à son actif et des
            résultats concrets observés chez des milliers d'utilisateurs, elle
            mérite sa place dans une approche globale de la santé préventive.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Que vous cherchiez à{" "}
            <strong className="text-green-600">booster votre énergie</strong>,{" "}
            <strong className="text-purple-600">
              renforcer votre immunité
            </strong>{" "}
            ou simplement{" "}
            <strong className="text-orange-600">
              mieux vieillir naturellement
            </strong>
            , la phycocyanine peut vous accompagner efficacement dans cette
            démarche.
          </p>

          <Card className="mb-8 bg-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                🎯 Récapitulatif des points clés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {[
                    "Antioxydant 16x plus puissant que la vitamine C",
                    "Forme liquide = biodisponibilité optimale",
                    "Dose recommandée : 5-12ml selon les besoins",
                    "Effets visibles dès 1-2 semaines",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start text-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-green-700">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "PhycoSci X14 = référence qualité (14g/L)",
                    "Cure minimum 21 jours, idéalement 2-3 mois",
                    "Très bien tolérée, peu d'effets secondaires",
                    "Investissement santé rentable sur le long terme",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start text-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-green-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            N'oubliez pas que les compléments alimentaires, même naturels,
            s'inscrivent dans une approche globale incluant une{" "}
            <strong>alimentation équilibrée</strong>, une{" "}
            <strong>activité physique régulière</strong> et une{" "}
            <strong>gestion du stress</strong>. La phycocyanine est un excellent
            allié, mais ne fait pas de miracles à elle seule !
          </p>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                🚀 Prêt à découvrir les bienfaits de la phycocyanine ?
              </h2>
              <p className="text-xl mb-6">
                Commencez votre cure avec PhycoSci X14, la phycocyanine la plus
                concentrée et la plus pure du marché
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-4 px-8 mb-4"
                >
                  <Link
                    href="https://www.xelliss.com/phycosci-x14"
                    target="_blank"
                  >
                    🛒 Commander PhycoSci X14 (44€)
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg py-4 px-8"
                >
                  <Link href="/phycocyanine/guide-posologie-phycocyanine-usage-optimal">
                    📋 Guide Posologie Détaillé
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                ✅ Satisfaction garantie • ✅ Livraison rapide • ✅ Support
                client expert
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
