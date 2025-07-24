import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Star,
  ArrowRight,
  AlertTriangle,
  Heart,
  Leaf,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";

// Métadonnées SEO
export const metadata: Metadata = generateSEOMetadata({
  title:
    "Composition de la spiruline : Analyse complète des nutriments | Spiruline Santé",
  description:
    "Découvrez la composition nutritionnelle détaillée de la spiruline : 70% de protéines, fer biodisponible, vitamines B12, phycocyanine. Guide complet 2025.",
  keywords: [
    "composition spiruline",
    "nutriments spiruline",
    "protéines spiruline",
    "fer spiruline",
    "vitamines spiruline",
    "phycocyanine",
    "acides aminés spiruline",
    "antioxydants spiruline",
    "valeurs nutritionnelles spiruline",
    "analyse spiruline",
    "A3 Spirulina Pills",
    "spiruline maxima",
  ],
  canonicalUrl: "spiruline/composition-spiruline",
  ogImage: "/images/composition-spiruline-og.jpg",
});

const SpirulineCompositionArticle = () => {
  // Données structurées pour l'article
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Composition de la spiruline : Analyse complète des nutriments",
    description:
      "Guide complet sur la composition nutritionnelle de la spiruline : protéines, fer, vitamines, antioxydants et phycocyanine.",
    datePublished: "2025-01-24T00:00:00.000Z",
    dateModified: "2025-01-24T00:00:00.000Z",
    author: {
      "@type": "Person",
      name: "Dr. Spiruline Expert",
    },
    publisher: {
      "@type": "Organization",
      name: "Spiruline Santé",
      logo: {
        "@type": "ImageObject",
        url: "https://spiruline-sante.com/images/logo.png",
        width: 250,
        height: 60,
      },
    },
    articleSection: "Nutrition",
    inLanguage: "fr",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://spiruline-sante.com/spiruline/composition-spiruline",
    },
    wordCount: 3500,
    keywords: [
      "spiruline",
      "composition",
      "nutriments",
      "protéines",
      "fer",
      "vitamines",
    ],
  };

  // Fil d'Ariane
  const breadcrumbStructuredData = {
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
        name: "Spiruline",
        item: "https://spiruline-sante.com/spiruline",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Composition de la spiruline",
      },
    ],
  };

  // FAQ données structurées
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien de protéines contient 10g de spiruline ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "10g de spiruline contiennent environ 6,5 à 7g de protéines complètes, soit l'équivalent de 100g de viande rouge en termes de qualité protéique.",
        },
      },
      {
        "@type": "Question",
        name: "La spiruline contient-elle tous les acides aminés essentiels ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, la spiruline est une protéine complète qui contient les 9 acides aminés essentiels dans des proportions optimales pour l'organisme humain.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi le fer de la spiruline est-il mieux absorbé ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le fer de la spiruline est biodisponible car il est associé à la phycocyanine et à la vitamine C naturellement présentes, facilitant son absorption intestinale.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est la différence entre la spiruline en poudre et en comprimés ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La composition reste identique. Les comprimés A3 Spirulina offrent un dosage précis et une meilleure conservation, sans additifs artificiels.",
        },
      },
      {
        "@type": "Question",
        name: "Y a-t-il des contre-indications à la spiruline ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La spiruline est déconseillée aux personnes allergiques aux algues, souffrant de phénylcétonurie ou prenant des anticoagulants. Consultez votre médecin en cas de doute.",
        },
      },
      {
        "@type": "Question",
        name: "Comment la spiruline se compare-t-elle aux autres super-aliments ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La spiruline surpasse la plupart des super-aliments par sa densité nutritionnelle : 70% de protéines contre 25% pour le quinoa, et 10x plus de bêta-carotène que les carottes.",
        },
      },
    ],
  };

  const nutritionalData = [
    {
      nutriment: "Protéines",
      quantite: "65-70%",
      benefice: "Construction musculaire et réparation cellulaire",
    },
    {
      nutriment: "Fer biodisponible",
      quantite: "28-34 mg/100g",
      benefice: "Transport de l'oxygène et énergie",
    },
    {
      nutriment: "Bêta-carotène (Vitamine A)",
      quantite: "171 mg/100g",
      benefice: "Vision et santé de la peau",
    },
    {
      nutriment: "Vitamine B12",
      quantite: "0.3-0.4 mg/100g",
      benefice: "Système nerveux et formation des globules",
    },
    {
      nutriment: "Vitamine K",
      quantite: "25-30 µg/100g",
      benefice: "Coagulation sanguine et santé osseuse",
    },
    {
      nutriment: "Phycocyanine",
      quantite: "15-20%",
      benefice: "Antioxydant puissant et anti-inflammatoire",
    },
    {
      nutriment: "Acide gamma-linolénique (GLA)",
      quantite: "1.3 g/100g",
      benefice: "Santé cardiovasculaire et inflammation",
    },
    {
      nutriment: "Calcium",
      quantite: "120-130 mg/100g",
      benefice: "Santé osseuse et dentaire",
    },
    {
      nutriment: "Magnésium",
      quantite: "190-200 mg/100g",
      benefice: "Fonction musculaire et énergétique",
    },
    {
      nutriment: "SOD (Superoxyde dismutase)",
      quantite: "3500 U/g",
      benefice: "Protection antioxydante cellulaire",
    },
  ];

  const aminoacides = [
    "Leucine",
    "Isoleucine",
    "Valine",
    "Lysine",
    "Méthionine",
    "Phénylalanine",
    "Thréonine",
    "Tryptophane",
    "Histidine",
  ];

  const vitamines = [
    {
      nom: "Vitamine A (Bêta-carotène)",
      quantite: "171 mg/100g",
      benefice: "10x plus que les carottes",
    },
    {
      nom: "Vitamine B1 (Thiamine)",
      quantite: "3.5 mg/100g",
      benefice: "Métabolisme énergétique",
    },
    {
      nom: "Vitamine B2 (Riboflavine)",
      quantite: "4 mg/100g",
      benefice: "Santé cellulaire",
    },
    {
      nom: "Vitamine B3 (Niacine)",
      quantite: "13 mg/100g",
      benefice: "Système nerveux",
    },
    {
      nom: "Vitamine B6 (Pyridoxine)",
      quantite: "0.8 mg/100g",
      benefice: "Métabolisme des protéines",
    },
    {
      nom: "Vitamine B12 (Cobalamine)",
      quantite: "0.3 mg/100g",
      benefice: "Formation des globules rouges",
    },
    {
      nom: "Vitamine E (Alpha-tocophérol)",
      quantite: "10 mg/100g",
      benefice: "Protection antioxydante",
    },
    {
      nom: "Vitamine K",
      quantite: "25 µg/100g",
      benefice: "Coagulation sanguine",
    },
  ];

  const faqData = [
    {
      question: "Combien de protéines contient 10g de spiruline ?",
      answer:
        "10g de spiruline contiennent environ 6,5 à 7g de protéines complètes, soit l'équivalent de 100g de viande rouge en termes de qualité protéique.",
    },
    {
      question:
        "La spiruline contient-elle tous les acides aminés essentiels ?",
      answer:
        "Oui, la spiruline est une protéine complète qui contient les 9 acides aminés essentiels dans des proportions optimales pour l'organisme humain.",
    },
    {
      question: "Pourquoi le fer de la spiruline est-il mieux absorbé ?",
      answer:
        "Le fer de la spiruline est biodisponible car il est associé à la phycocyanine et à la vitamine C naturellement présentes, facilitant son absorption intestinale.",
    },
    {
      question:
        "Quelle est la différence entre la spiruline en poudre et en comprimés ?",
      answer:
        "La composition reste identique. Les comprimés A3 Spirulina offrent un dosage précis et une meilleure conservation, sans additifs artificiels.",
    },
    {
      question: "Y a-t-il des contre-indications à la spiruline ?",
      answer:
        "La spiruline est déconseillée aux personnes allergiques aux algues, souffrant de phénylcétonurie ou prenant des anticoagulants. Consultez votre médecin en cas de doute.",
    },
    {
      question:
        "Comment la spiruline se compare-t-elle aux autres super-aliments ?",
      answer:
        "La spiruline surpasse la plupart des super-aliments par sa densité nutritionnelle : 70% de protéines contre 25% pour le quinoa, et 10x plus de bêta-carotène que les carottes.",
    },
  ];

  return (
    <>
      {/* Données structurées JSON-LD */}
      <StructuredData data={articleStructuredData} />
      <StructuredData data={breadcrumbStructuredData} />
      <StructuredData data={faqStructuredData} />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* En-tête avec résumé en bullet points */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Composition de la spiruline : Analyse complète des nutriments
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Ce que vous allez découvrir :
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Composition nutritionnelle détaillée</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Profil complet des protéines et acides aminés</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Vitamines et minéraux biodisponibles</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Antioxydants et phycocyanine unique</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Comparaison avec d'autres super-aliments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Conseils pour choisir sa spiruline</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                className="bg-green-600 hover:bg-green-700 text-lg py-3 px-6"
                asChild
              >
                <a
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                  target="_blank"
                >
                  🛒 Découvrir A3 Spirulina Pills (37€)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Vous cherchez à comprendre exactement ce qui rend la spiruline si
            exceptionnelle ? Cette micro-algue bleu-vert concentre dans ses
            cellules microscopiques une richesse nutritionnelle inégalée qui en
            fait l'un des super-aliments les plus complets de la planète.
          </p>
          <p className="text-lg text-gray-700">
            Dans ce guide complet, vous découvrirez la composition détaillée de
            la spiruline, comprendre pourquoi elle surpasse la plupart des
            autres sources nutritionnelles, et comment choisir une spiruline de
            qualité pour maximiser ses bienfaits.
          </p>
        </div>

        {/* Tableau nutritionnel principal */}
        <Card className="border-2 border-green-200">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-2xl flex items-center">
              <Leaf className="h-6 w-6 text-green-600 mr-2" />
              Composition nutritionnelle complète de la spiruline
            </CardTitle>
            <CardDescription className="text-lg">
              Valeurs pour 100g de spiruline séchée (Spirulina maxima - qualité
              premium)
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Nutriment
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Quantité
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Bénéfice principal
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {nutritionalData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 text-lg">
                      <td className="px-6 py-4 font-medium text-green-800">
                        {item.nutriment}
                      </td>
                      <td className="px-6 py-4 font-semibold">
                        {item.quantite}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {item.benefice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Section protéines et acides aminés */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Profil protéique exceptionnel : une source complète
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-800">
                  Richesse en protéines
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-4">
                <p>
                  <strong>65-70% de protéines</strong> en poids sec, soit{" "}
                  <strong>2x plus que la viande</strong> (25%) et{" "}
                  <strong>3x plus que le quinoa</strong> (20%).
                </p>
                <p>
                  Pour <strong>10g de spiruline</strong> (dose quotidienne
                  recommandée), vous obtenez :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <strong>6,5-7g de protéines complètes</strong>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Équivalent protéique de 100g de viande
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Biodisponibilité de 95%
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-xl text-purple-800">
                  Les 9 acides aminés essentiels
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p className="mb-4">
                  La spiruline contient{" "}
                  <strong>tous les acides aminés essentiels</strong> que votre
                  corps ne peut pas fabriquer :
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {aminoacides.map((aa, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm justify-center"
                    >
                      {aa}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-purple-700 font-medium">
                  Cela en fait une protéine complète rare dans le règne végétal
                  !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section fer biodisponible */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">
              Fer biodisponible : 2x plus que la spiruline traditionnelle
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4">
            <p>
              Grâce à la technologie de photobioréacteurs de{" "}
              <strong>Xelliss</strong>, notre spiruline A3 contient
              <strong> 2x plus de fer</strong> que la spiruline cultivée en
              bassins ouverts traditionnels.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-red-700">Spiruline A3</h4>
                <p className="text-2xl font-bold">28-34 mg</p>
                <p className="text-sm">pour 100g</p>
              </div>
              <div className="bg-white p-4 rounded-lg border opacity-60">
                <h4 className="font-semibold">Spiruline classique</h4>
                <p className="text-2xl font-bold">15-20 mg</p>
                <p className="text-sm">pour 100g</p>
              </div>
              <div className="bg-white p-4 rounded-lg border opacity-60">
                <h4 className="font-semibold">Épinards</h4>
                <p className="text-2xl font-bold">3.6 mg</p>
                <p className="text-sm">pour 100g</p>
              </div>
            </div>
            <p className="text-red-700 font-medium">
              💡 <strong>Astuce :</strong> Associez votre spiruline à des
              aliments riches en vitamine C (agrumes, kiwi) pour optimiser
              l'absorption du fer !
            </p>
          </CardContent>
        </Card>

        {/* Section vitamines */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Cocktail de vitamines : un laboratoire naturel
          </h2>

          <p className="text-lg text-gray-700">
            La spiruline contient un spectre vitaminique exceptionnel,
            particulièrement riche en vitamines du groupe B et en antioxydants
            liposolubles.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {vitamines.map((vitamin, index) => (
              <Card key={index} className="border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-yellow-800">
                        {vitamin.nom}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {vitamin.benefice}
                      </p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 ml-2">
                      {vitamin.quantite}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">
              🥕 Le saviez-vous ?
            </h4>
            <p className="text-lg">
              La spiruline contient <strong>10x plus de bêta-carotène</strong>{" "}
              (provitamine A) que les carottes ! Une seule cuillère à café
              couvre 100% de vos besoins quotidiens en vitamine A.
            </p>
          </div>
        </div>

        {/* Section antioxydants */}
        <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-800">
              Phycocyanine : l'antioxydant exclusif de la spiruline
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4">
            <p>
              La <strong>phycocyanine</strong> est le pigment bleu unique qui
              donne sa couleur à la spiruline. Cette protéine représente 15-20%
              du poids sec et possède des propriétés antioxydantes
              exceptionnelles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-indigo-700">
                  Propriétés de la phycocyanine :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                    <span>
                      Activité antioxydante 7x supérieure à la vitamine C
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                    <span>Propriétés anti-inflammatoires puissantes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                    <span>Protection cellulaire et neuroprotection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" />
                    <span>Stimulation du système immunitaire</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">
                  Autres antioxydants présents :
                </h4>
                <ul className="space-y-1 text-base">
                  <li>
                    • <strong>SOD</strong> (Superoxyde dismutase) : 3500 U/g
                  </li>
                  <li>
                    • <strong>Bêta-carotène</strong> : 171 mg/100g
                  </li>
                  <li>
                    • <strong>Vitamine E</strong> : 10 mg/100g
                  </li>
                  <li>
                    • <strong>Zéaxanthine</strong> : protection oculaire
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section acides gras */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Acides gras essentiels : l'oméga-6 rare (GLA)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-xl text-orange-800">
                  Acide gamma-linolénique (GLA)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-3">
                <p>
                  La spiruline est l'une des rares sources alimentaires d'
                  <strong>acide gamma-linolénique (GLA)</strong>, un oméga-6
                  essentiel présent naturellement dans le lait maternel.
                </p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <p>
                    <strong>1,3g de GLA pour 100g</strong> de spiruline
                  </p>
                  <p className="text-sm mt-2">
                    Comparable aux huiles d'onagre et de bourrache
                  </p>
                </div>
                <h4 className="font-semibold">Bienfaits du GLA :</h4>
                <ul className="space-y-1">
                  <li>• Synthèse de métabolites anti-inflammatoires</li>
                  <li>• Santé de la peau et des cheveux</li>
                  <li>• Équilibre hormonal féminin</li>
                  <li>• Santé cardiovasculaire</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardHeader className="bg-teal-50">
                <CardTitle className="text-xl text-teal-800">
                  Minéraux et oligo-éléments
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>
                      <strong>Calcium</strong>
                    </span>
                    <span>120-130 mg/100g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      <strong>Magnésium</strong>
                    </span>
                    <span>190-200 mg/100g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      <strong>Potassium</strong>
                    </span>
                    <span>1360 mg/100g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      <strong>Phosphore</strong>
                    </span>
                    <span>828 mg/100g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      <strong>Zinc</strong>
                    </span>
                    <span>2-3 mg/100g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      <strong>Sélénium</strong>
                    </span>
                    <span>7-10 µg/100g</span>
                  </div>
                </div>
                <p className="mt-4 text-teal-700 font-medium">
                  Une biodisponibilité optimale grâce à la structure cellulaire
                  de la spiruline
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section technologie Xelliss */}
        <Card className="border-2 border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">
              🔬 Technologie exclusive : Photobioréacteur Xelliss
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4">
            <p>
              La spiruline A3 de <strong>Xelliss</strong> est cultivée dans des{" "}
              <strong>photobioréacteurs fermés</strong>
              de dernière génération, garantissant une composition optimale et
              une pureté inégalée.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">
                  Avantages de cette technologie :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>
                      <strong>2x plus de fer</strong> que la spiruline
                      traditionnelle
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>
                      Contrôle précis de la lumière, des nutriments et du pH
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Élimination des risques de contamination</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Profil nutritionnel complet préservé</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-3">A3 Spirulina Pills (37€)</h4>
                <ul className="space-y-1 text-base">
                  <li>
                    • <strong>80 comprimés</strong> (20 jours)
                  </li>
                  <li>
                    • <strong>2g de spiruline pure</strong> par dose
                  </li>
                  <li>
                    • <strong>Spirulina maxima</strong> (27% de protéines en
                    plus)
                  </li>
                  <li>• Sans additifs artificiels</li>
                  <li>• Dosage précis et pratique</li>
                </ul>

                <Button
                  className="w-full mt-4 bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <a
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                    target="_blank"
                  >
                    Découvrir A3 Spirulina Pills
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section précautions */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Précautions et contre-indications
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-3">
                  Contre-indications :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Allergie aux algues ou aux fruits de mer</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Phénylcétonurie (teneur en phénylalanine)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Hémochromatose (excès de fer)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Traitement anticoagulant (interactions possibles)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 mb-3">
                  Effets secondaires possibles :
                </h4>
                <ul className="space-y-2">
                  <li>• Troubles digestifs légers (début)</li>
                  <li>• Coloration verdâtre des selles (normale)</li>
                  <li>• Nausées si prise à jeun</li>
                  <li>• Réactions allergiques rares</li>
                </ul>

                <div className="bg-white p-4 rounded-lg border border-red-200 mt-4">
                  <p className="font-medium text-red-700">
                    ⚠️ <strong>Important :</strong> Consultez votre médecin
                    avant utilisation si vous êtes enceinte, allaitante ou sous
                    traitement médical.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section comparaison */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Spiruline vs autres super-aliments : la comparaison
          </h2>

          <p className="text-lg text-gray-700">
            Pour mieux comprendre l'exceptionnelle richesse de la spiruline,
            voici comment elle se compare aux autres sources nutritionnelles
            populaires :
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">
                    Super-aliment
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Protéines
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Fer (mg/100g)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Vitamine A
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Avantage unique
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y text-lg">
                <tr className="bg-green-50 font-semibold">
                  <td className="px-4 py-3 text-green-800">🌀 Spiruline A3</td>
                  <td className="px-4 py-3">70%</td>
                  <td className="px-4 py-3">28-34</td>
                  <td className="px-4 py-3">171 mg</td>
                  <td className="px-4 py-3">Phycocyanine unique</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">🥩 Viande rouge</td>
                  <td className="px-4 py-3">25%</td>
                  <td className="px-4 py-3">2-3</td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">Vitamine B12</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">🌾 Quinoa</td>
                  <td className="px-4 py-3">14%</td>
                  <td className="px-4 py-3">4.6</td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">Fibres</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">🥬 Épinards</td>
                  <td className="px-4 py-3">3%</td>
                  <td className="px-4 py-3">3.6</td>
                  <td className="px-4 py-3">0.5 mg</td>
                  <td className="px-4 py-3">Folates</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">🥕 Carottes</td>
                  <td className="px-4 py-3">1%</td>
                  <td className="px-4 py-3">0.3</td>
                  <td className="px-4 py-3">17 mg</td>
                  <td className="px-4 py-3">Fibres solubles</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">
              💡 Conclusion de la comparaison :
            </h4>
            <p className="text-lg">
              La spiruline surpasse tous les autres super-aliments par sa{" "}
              <strong>densité nutritionnelle</strong>. Une seule cuillère à café
              (3g) de spiruline apporte autant de protéines que 30g de viande,
              10x plus de bêta-carotène que les carottes, et des antioxydants
              uniques introuvables ailleurs.
            </p>
          </div>
        </div>

        {/* Section conseils pour choisir */}
        <Card className="border-2 border-purple-300 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">
              🎯 Comment choisir sa spiruline : les critères qualité
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4">
            <p>
              Toutes les spirulines ne se valent pas. Voici les critères
              essentiels pour choisir une spiruline qui vous apportera tous ces
              nutriments dans leur forme la plus biodisponible :
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">
                  ✅ Critères de qualité :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                    <span>
                      <strong>Espèce :</strong> Spirulina maxima (27% de
                      protéines en plus)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                    <span>
                      <strong>Culture :</strong> Photobioréacteurs fermés vs
                      bassins ouverts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                    <span>
                      <strong>Séchage :</strong> Basse température pour
                      préserver les nutriments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                    <span>
                      <strong>Pureté :</strong> Sans additifs, colorants ou
                      conservateurs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                    <span>
                      <strong>Analyse :</strong> Contrôles microbiologiques
                      réguliers
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-purple-700 mb-3">
                  🚫 À éviter :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1" />
                    <span>Spiruline de Chine (risques de contamination)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1" />
                    <span>Prix anormalement bas (qualité douteuse)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1" />
                    <span>Pas d'analyses disponibles</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1" />
                    <span>Additifs et excipients nombreux</span>
                  </li>
                </ul>

                <div className="bg-white p-4 rounded-lg border border-purple-200 mt-4">
                  <h5 className="font-semibold text-purple-700">
                    Pourquoi choisir A3 Spirulina Pills ?
                  </h5>
                  <ul className="text-base mt-2 space-y-1">
                    <li>✓ Spirulina maxima pure</li>
                    <li>✓ Photobioréacteurs Xelliss</li>
                    <li>✓ 2x plus de fer biodisponible</li>
                    <li>✓ Comprimés sans additifs</li>
                    <li>✓ Analyses garanties</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Questions fréquentes sur la composition de la spiruline
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-green-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Section newsletter */}
        <Card className="border-2 border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800 flex items-center justify-center">
              🎁 Recevez notre guide complet de la spiruline
            </CardTitle>
            <CardDescription className="text-lg">
              + Conseils d'experts et offres exclusives réservées aux abonnés
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-white p-4 rounded-lg border inline-block">
              <p className="text-lg font-medium mb-2">Ce que vous recevrez :</p>
              <ul className="text-left space-y-1">
                <li>✓ Guide PDF spiruline complet (40 pages)</li>
                <li>✓ Tableaux de composition détaillés</li>
                <li>✓ Conseils de dosage personnalisés</li>
                <li>✓ Offres exclusives -20%</li>
              </ul>
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-lg py-3 px-8">
              📧 Recevoir le guide gratuit
            </Button>

            <p className="text-sm text-gray-600">
              Inscription gratuite • Désabonnement en un clic
            </p>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Conclusion : Une composition nutritionnelle unique au monde
          </h2>

          <div className="prose prose-lg max-w-none text-lg space-y-4">
            <p>
              La spiruline mérite pleinement son titre de "super-aliment" grâce
              à sa composition nutritionnelle exceptionnelle. Avec ses{" "}
              <strong>70% de protéines complètes</strong>, son{" "}
              <strong>fer biodisponible</strong>, sa{" "}
              <strong>phycocyanine unique</strong> et son spectre complet de
              vitamines et minéraux, elle surpasse tous les autres aliments
              naturels.
            </p>

            <p>
              La technologie de photobioréacteurs de <strong>Xelliss</strong>{" "}
              permet d'obtenir une spiruline A3 encore plus riche, notamment{" "}
              <strong>2x plus de fer</strong> que la spiruline traditionnelle,
              tout en garantissant une pureté et une biodisponibilité optimales.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                🎯 À retenir :
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Heart className="h-5 w-5 text-green-600 mr-2" />
                  <span>
                    <strong>Pour qui :</strong> Idéale pour végétariens,
                    sportifs, seniors et toute personne souhaitant optimiser son
                    apport nutritionnel
                  </span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-5 w-5 text-green-600 mr-2" />
                  <span>
                    <strong>Dosage :</strong> 3-5g par jour (4 comprimés A3
                    Spirulina Pills)
                  </span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-5 w-5 text-green-600 mr-2" />
                  <span>
                    <strong>Résultats :</strong> Énergie durable, immunité
                    renforcée, récupération améliorée
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Choisir une spiruline de qualité comme A3 Spirulina Pills, c'est
              faire le choix d'un complément alimentaire qui vous apporte
              réellement tous ces nutriments dans leur forme la plus assimilable
              et la plus pure.
            </p>
          </div>

          {/* CTA final */}
          <div className="text-center space-y-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-xl py-4 px-8"
              asChild
            >
              <a
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                target="_blank"
              >
                🛒 Découvrir A3 Spirulina Pills (37€)
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>

            <div className="flex justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span>Livraison rapide</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span>Qualité garantie</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span>80 comprimés (20 jours)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sources scientifiques */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📚 Sources scientifiques
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              1. Karkos, P.D., et al. (2011). "Spirulina in clinical practice:
              evidence-based human applications." Evidence-Based Complementary
              and Alternative Medicine.
            </p>
            <p>
              2. Wu, Q., et al. (2016). "The antioxidant, immunomodulatory, and
              anti-inflammatory activities of Spirulina." Annals of Nutrition
              and Metabolism.
            </p>
            <p>
              3. Finamore, A., et al. (2017). "Antioxidant, immunomodulating,
              and microbial-modulating activities of the sustainable and
              ecofriendly spirulina." Oxidative Medicine and Cellular Longevity.
            </p>
            <p>
              4. Kalafati, M., et al. (2010). "Ergogenic and antioxidant effects
              of spirulina supplementation in humans." Medicine & Science in
              Sports & Exercise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpirulineCompositionArticle;
