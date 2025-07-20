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
  FlaskConical,
  Zap,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return generateSEOMetadata({
    title:
      "Composition de la phycocyanine : Guide complet - Structure moléculaire et propriétés",
    description:
      "Découvrez la composition complète de la phycocyanine : structure moléculaire, propriétés chimiques et biochimiques de ce pigment bleu exceptionnel.",
    keywords: [
      "composition phycocyanine",
      "phycocyanine",
      "structure moléculaire phycocyanine",
      "phycobiliprotéine",
      "spiruline phycocyanine",
      "antioxydant naturel",
      "PhycoSci X14",
      "Xelliss phycocyanine",
      "chromophores phycocyanobiline",
      "propriétés physicochimiques phycocyanine",
      "biodisponibilité phycocyanine",
      "Spirulina maxima",
      "procédé EPNA",
      "concentration phycocyanine",
      "mécanismes action phycocyanine",
    ],
    ogImage: "/images/phycocyanine-composition-og.jpg",
    canonicalUrl: "phycocyanine/composition-phycocyanine-guide-complet",
  });
}

export default function CompositionPhycocyaninePage() {
  const breadcrumbItems = [
    { label: "Phycocyanine", href: "/phycocyanine" },
    { label: "Composition phycocyanine" },
  ];

  const compositionData = [
    {
      component: "Protéines (α et β)",
      percentage: "85-90%",
      function: "Structure et stabilité",
    },
    {
      component: "Phycocyanobiline",
      percentage: "8-12%",
      function: "Pigmentation et photosynthèse",
    },
    {
      component: "Acides aminés essentiels",
      percentage: "Variables",
      function: "Activité biologique",
    },
    {
      component: "Minéraux traces",
      percentage: "1-2%",
      function: "Cofacteurs enzymatiques",
    },
  ];

  const pigmentComparison = [
    {
      pigment: "Phycocyanine",
      structure: "Phycobiliprotéine",
      orac: "70 000 μmol TE/g",
      solubility: "Hydrosoluble",
    },
    {
      pigment: "Chlorophylle",
      structure: "Porphyrine",
      orac: "15 000 μmol TE/g",
      solubility: "Liposoluble",
    },
    {
      pigment: "β-carotène",
      structure: "Caroténoïde",
      orac: "9 000 μmol TE/g",
      solubility: "Liposoluble",
    },
    {
      pigment: "Anthocyanes",
      structure: "Flavonoïde",
      orac: "25 000 μmol TE/g",
      solubility: "Hydrosoluble",
    },
  ];

  const faqData = [
    {
      question: "Quelle est la différence entre phycocyanine et spiruline ?",
      answer:
        "La phycocyanine est un composé spécifique extrait de la spiruline, représentant 15-20% de son poids sec. Elle est concentrée et purifiée pour maximiser ses propriétés antioxydantes, contrairement à la spiruline entière qui contient de nombreux autres nutriments.",
    },
    {
      question: "Pourquoi PhycoSci X14 est-il plus concentré ?",
      answer:
        "PhycoSci X14 utilise le procédé EPNA et la souche Spirulina maxima, naturellement 20-30% plus riche en phycocyanine. L'extraction immédiate après récolte préserve l'intégrité moléculaire, permettant d'atteindre 14 g/L de concentration.",
    },
    {
      question: "La phycocyanine perd-elle ses propriétés avec le temps ?",
      answer:
        "La phycocyanine est photosensible et thermosensible. PhycoSci X14 conserve ses propriétés pendant 2 ans non ouvert et 45 jours au réfrigérateur une fois ouvert, grâce à sa formulation stabilisée dans une base de glycérol végétal.",
    },
    {
      question: "Peut-on surdoser la phycocyanine ?",
      answer:
        "La phycocyanine est très bien tolérée. Aucune toxicité n'a été observée même à des doses élevées. Cependant, il est recommandé de respecter la posologie de 8 ml par jour pour PhycoSci X14 pour une efficacité optimale.",
    },
    {
      question: "Comment reconnaître une phycocyanine de qualité ?",
      answer:
        "Une phycocyanine de qualité présente une couleur bleu intense, une concentration élevée (minimum 10 g/L), un procédé d'extraction naturel sans solvant, et provient de spiruline cultivée en conditions contrôlées comme Spirulina maxima.",
    },
    {
      question: "La phycocyanine convient-elle aux végétariens ?",
      answer:
        "Absolument ! La phycocyanine est 100% végétale, extraite de la microalgue spiruline. PhycoSci X14 ne contient aucun ingrédient d'origine animale et convient parfaitement aux régimes végétariens et végétaliens.",
    },
  ];

  // Structured Data pour SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Composition de la phycocyanine : Guide complet",
    description:
      "Découvrez la composition complète de la phycocyanine : structure moléculaire, propriétés chimiques et biochimiques de ce pigment bleu exceptionnel.",
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
    image: "https://spiruline-sante.com/images/phycocyanine-composition-og.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://spiruline-sante.com/phycocyanine/composition-phycocyanine-guide-complet",
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
        name: "Composition phycocyanine",
        item: "https://spiruline-sante.com/phycocyanine/composition-phycocyanine-guide-complet",
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
            Composition de la phycocyanine : Guide complet
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez la structure moléculaire fascinante de la phycocyanine, ce
            pigment bleu exceptionnel aux propriétés uniques. Plongez dans les
            secrets de sa composition chimique et comprenez pourquoi elle
            révolutionne le domaine de la santé naturelle.
          </p>
        </div>

        {/* Summary Box */}
        <Card className="mb-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-green-800">
              <Star className="h-6 w-6 mr-2" />
              Ce que vous allez découvrir :
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Structure moléculaire complète de la phycocyanine",
                "Propriétés chimiques et biochimiques uniques",
                "Mécanismes d'action et absorption cellulaire",
                "Concentration optimale pour une efficacité maximale",
                "Comparaison avec d'autres pigments naturels",
                "PhycoSci X14 : la phycocyanine la plus concentrée",
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
                className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
              >
                <Link
                  href="https://www.xelliss.com/phycosci-x14"
                  target="_blank"
                >
                  🛒 Découvrir PhycoSci X14
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Qu'est-ce que la phycocyanine ? Structure fondamentale
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            La phycocyanine est une{" "}
            <strong className="text-green-700">phycobiliprotéine</strong>{" "}
            complexe, composée de deux sous-unités protéiques distinctes reliées
            par des chromophores. Cette architecture moléculaire unique lui
            confère sa couleur bleu-cyan caractéristique et ses propriétés
            biologiques exceptionnelles.
          </p>

          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Microscope className="h-6 w-6 mr-2" />
                Le saviez-vous ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-blue-700">
                La phycocyanine représente environ 15-20% du poids sec de la
                spiruline et peut atteindre une concentration remarquable de 14
                g/L dans des extraits spécialisés comme PhycoSci X14.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Structure moléculaire détaillée
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            La phycocyanine se compose de :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-300">
              <CardHeader>
                <CardTitle className="text-green-700">
                  Protéines (85-90%)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg">
                  <p>
                    <strong>Sous-unité α :</strong> 17,5 kDa
                  </p>
                  <p>
                    <strong>Sous-unité β :</strong> 19,5 kDa
                  </p>
                  <p>
                    <strong>Structure :</strong> Assemblage hexagonal en
                    trimères
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-300">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  Chromophores (10-15%)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg">
                  <p>
                    <strong>Phycocyanobiline :</strong> Pigment tétrapyrrolique
                  </p>
                  <p>
                    <strong>Liaison :</strong> Thioéther avec cystéine
                  </p>
                  <p>
                    <strong>Absorption :</strong> 620-630 nm
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Composition chimique précise de la phycocyanine
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            L'analyse biochimique révèle une composition remarquablement
            complexe qui explique les propriétés uniques de cette molécule.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Composant
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Pourcentage
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Fonction principale
                  </th>
                </tr>
              </thead>
              <tbody>
                {compositionData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-lg">
                      {row.component}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-lg font-semibold text-green-600">
                      {row.percentage}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-lg">
                      {row.function}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Acides aminés constituants
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            La phycocyanine contient tous les{" "}
            <strong className="text-green-700">acides aminés essentiels</strong>{" "}
            dans des proportions optimales :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                name: "Leucine et isoleucine",
                function: "Métabolisme énergétique",
              },
              { name: "Lysine et arginine", function: "Synthèse protéique" },
              { name: "Tryptophane", function: "Précurseur de la sérotonine" },
              { name: "Cystéine", function: "Liaison avec les chromophores" },
              { name: "Histidine", function: "Propriétés antioxydantes" },
            ].map((amino, index) => (
              <div key={index} className="flex items-start text-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800">{amino.name} :</strong>
                  <span className="text-gray-600 ml-1">{amino.function}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Propriétés physicochimiques uniques
          </h2>

          <Card className="mb-8 bg-blue-50 border-blue-300">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <FlaskConical className="h-6 w-6 mr-2" />
                Caractéristiques mesurables
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-blue-700">
                La phycocyanine présente des propriétés physicochimiques
                remarquables qui la distinguent des autres pigments naturels et
                expliquent son efficacité biologique exceptionnelle.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Propriétés optiques
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-700">
                  Absorption lumineuse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li>
                    <strong>Pic principal :</strong> 620 nm
                  </li>
                  <li>
                    <strong>Pic secondaire :</strong> 650 nm
                  </li>
                  <li>
                    <strong>Coefficient d'extinction :</strong> 70 000 M⁻¹cm⁻¹
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-indigo-700">Fluorescence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li>
                    <strong>Émission :</strong> 640-645 nm
                  </li>
                  <li>
                    <strong>Rendement quantique :</strong> 0,68
                  </li>
                  <li>
                    <strong>Durée de vie :</strong> 1,2 ns
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Stabilité et conservation
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            La phycocyanine présente une stabilité variable selon les conditions
            :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                condition: "pH optimal",
                value: "5,5 - 6,5 pour une stabilité maximale",
              },
              {
                condition: "Température",
                value: "Dégradation au-dessus de 45°C",
              },
              {
                condition: "Lumière",
                value: "Photosensible, nécessite une protection",
              },
              {
                condition: "Oxydation",
                value: "Sensible, conservation sous azote recommandée",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start text-lg">
                <Zap className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800">{item.condition} :</strong>
                  <span className="text-gray-600 ml-1">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Mécanismes d'action au niveau cellulaire
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            La composition unique de la phycocyanine lui permet d'exercer ses
            effets bénéfiques par plusieurs mécanismes complémentaires.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Activité antioxydante
          </h3>

          <Card className="mb-8 bg-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Shield className="h-6 w-6 mr-2" />
                Protection cellulaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-green-700">
                La phycocyanine neutralise les radicaux libres grâce à sa
                structure riche en électrons π délocalisés, offrant une
                protection 16 fois supérieure à la vitamine C selon certaines
                études.
              </p>
            </CardContent>
          </Card>

          <p className="text-lg text-gray-700 mb-4">
            Les mécanismes antioxydants incluent :
          </p>

          <div className="space-y-4 mb-8">
            {[
              "Piégeage direct des radicaux libres (OH•, O₂•⁻)",
              "Chélation des métaux pro-oxydants (Fe²⁺, Cu²⁺)",
              "Régénération d'autres antioxydants (vitamine E, glutathion)",
              "Inhibition de la peroxydation lipidique",
            ].map((mechanism, index) => (
              <div key={index} className="flex items-start text-lg">
                <Badge
                  variant="outline"
                  className="mr-3 mt-1 bg-green-100 text-green-800 border-green-300"
                >
                  {index + 1}
                </Badge>
                <span className="text-gray-700">{mechanism}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Interaction avec les membranes cellulaires
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Grâce à sa structure amphiphile, la phycocyanine peut :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Traverser les membranes cellulaires",
              "Se lier aux phospholipides membranaires",
              "Protéger l'intégrité des membranes",
              "Moduler la fluidité membranaire",
            ].map((action, index) => (
              <div key={index} className="flex items-center text-lg">
                <Droplets className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{action}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Biodisponibilité et absorption
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            La composition de la phycocyanine influence directement sa
            biodisponibilité dans l'organisme.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Facteurs d'absorption
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-700">
                  Voie digestive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li>
                    <strong>Absorption intestinale :</strong> 15-25%
                  </li>
                  <li>
                    <strong>Temps de passage :</strong> 2-4 heures
                  </li>
                  <li>
                    <strong>Pic plasmatique :</strong> 30-60 minutes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200">
              <CardHeader>
                <CardTitle className="text-teal-700">Optimisation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg">
                  <li>
                    <strong>Forme liquide</strong> recommandée
                  </li>
                  <li>
                    <strong>Prise à jeun</strong> préférable
                  </li>
                  <li>
                    <strong>Association</strong> avec des lipides
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Métabolisme et élimination
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Une fois absorbée, la phycocyanine :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                aspect: "Distribution",
                detail: "Foie, rate, reins principalement",
              },
              { aspect: "Demi-vie", detail: "4-6 heures dans le plasma" },
              { aspect: "Élimination", detail: "Principalement rénale (70%)" },
              { aspect: "Accumulation", detail: "Aucune toxicité observée" },
            ].map((item, index) => (
              <div key={index} className="flex items-start text-lg">
                <Badge variant="secondary" className="mr-3 mt-1">
                  {item.aspect}
                </Badge>
                <span className="text-gray-700">{item.detail}</span>
              </div>
            ))}
          </div>

          {/* PhycoSci X14 Product Section */}
          <Card className="mb-8 bg-gradient-to-br from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                  <Droplets className="h-8 w-8 mr-3" />
                  PhycoSci X14 : La Concentration Ultime
                </h2>
                <p className="text-xl text-green-100">
                  Découvrez la phycocyanine la plus concentrée au monde avec
                  PhycoSci X14 de Xelliss
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  {
                    title: "14 g/L de phycocyanine",
                    desc: "Concentration exceptionnelle grâce au procédé EPNA",
                  },
                  {
                    title: "112 mg par dose",
                    desc: "8 ml quotidiens pour un apport optimal",
                  },
                  {
                    title: "Extraction naturelle",
                    desc: "Procédé aqueux sans solvant",
                  },
                  {
                    title: "Spirulina maxima",
                    desc: "20-30% plus riche en phycocyanine",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <h4 className="font-semibold text-green-200 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/90">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg mb-4">
                  <strong>Prix :</strong> 44€ la bouteille de 250ml (31 jours de
                  cure)
                </p>
                <Button
                  asChild
                  className="bg-white text-green-600 hover:bg-gray-100 text-lg py-3 px-8"
                >
                  <Link
                    href="https://www.xelliss.com/phycosci-x14"
                    target="_blank"
                  >
                    Découvrir PhycoSci X14
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Comparaison avec d'autres pigments naturels
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            La composition unique de la phycocyanine la distingue nettement des
            autres pigments naturels.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Pigment
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Structure
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Activité antioxydante (ORAC)
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                    Solubilité
                  </th>
                </tr>
              </thead>
              <tbody>
                {pigmentComparison.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-lg">
                      <strong
                        className={
                          index === 0 ? "text-green-600" : "text-gray-800"
                        }
                      >
                        {row.pigment}
                      </strong>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-lg">
                      {row.structure}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-lg font-semibold text-blue-600">
                      {row.orac}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-lg">
                      {row.solubility}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Avantages spécifiques de la phycocyanine
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                advantage: "Solubilité aqueuse",
                benefit: "Meilleure biodisponibilité",
              },
              {
                advantage: "Structure protéique",
                benefit: "Stabilité et fonctionnalité accrues",
              },
              {
                advantage: "Spécificité d'action",
                benefit: "Mécanismes multiples",
              },
              {
                advantage: "Absence de toxicité",
                benefit: "Sécurité d'emploi optimale",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start text-lg">
                <Star className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800">{item.advantage} :</strong>
                  <span className="text-gray-600 ml-1">{item.benefit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Box */}
          <Card className="mb-8 bg-red-50 border-red-300">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Précautions et contre-indications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-red-700 mb-4">
                Bien que la phycocyanine soit généralement bien tolérée,
                certaines précautions sont recommandées :
              </p>
              <ul className="space-y-2 text-lg">
                {[
                  "Femmes enceintes ou allaitantes : consulter un médecin",
                  "Allergies aux algues : test préalable recommandé",
                  "Traitement anticoagulant : surveillance médicale",
                  "Conservation au réfrigérateur après ouverture",
                ].map((precaution, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-red-700">{precaution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Comment utiliser la phycocyanine efficacement
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Pour tirer le meilleur parti de la composition de la phycocyanine,
            suivez ces recommandations d'usage :
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Posologie optimale
          </h3>

          <Card className="mb-8 bg-blue-50 border-blue-300">
            <CardContent className="p-6">
              <p className="text-lg text-blue-700 font-semibold">
                <strong>Dose recommandée :</strong> 8 ml de PhycoSci X14 par
                jour, soit 112 mg de phycocyanine pure, à diluer dans un verre
                d'eau.
              </p>
            </CardContent>
          </Card>

          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Timing de prise
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { timing: "Moment optimal", desc: "Le matin à jeun" },
              {
                timing: "Absorption maximale",
                desc: "30 minutes avant le petit-déjeuner",
              },
              {
                timing: "Éviter",
                desc: "Prise avec des boissons chaudes ou acides",
              },
            ].map((item, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-800">
                    {item.timing}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Durée de cure
          </h4>
          <div className="space-y-3 mb-8">
            {[
              { duration: "Cure standard", period: "21-30 jours minimum" },
              {
                duration: "Cure intensive",
                period: "3 mois pour des effets durables",
              },
              { duration: "Maintenance", period: "Prise continue possible" },
            ].map((item, index) => (
              <div key={index} className="flex items-center text-lg">
                <Badge
                  variant="outline"
                  className="mr-3 bg-purple-100 text-purple-800 border-purple-300"
                >
                  {item.duration}
                </Badge>
                <span className="text-gray-700">{item.period}</span>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Questions fréquentes sur la composition de la phycocyanine
          </h2>

          <Accordion type="single" collapsible className="mb-8">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-lg mb-4"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-800 hover:text-green-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
            Conclusion : Une composition exceptionnelle
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            La composition de la phycocyanine révèle une molécule d'une
            complexité remarquable, alliant{" "}
            <strong className="text-green-700">
              structure protéique sophistiquée
            </strong>{" "}
            et{" "}
            <strong className="text-green-700">
              propriétés biologiques uniques
            </strong>
            . Cette phycobiliprotéine, avec ses 85-90% de protéines et ses
            chromophores phycocyanobiline, représente l'aboutissement de
            millions d'années d'évolution dans l'optimisation de la capture et
            du transfert d'énergie lumineuse.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Les{" "}
            <strong className="text-blue-600">
              112 mg de phycocyanine pure
            </strong>{" "}
            contenus dans chaque dose de PhycoSci X14 offrent une concentration
            inégalée de cette molécule exceptionnelle. Grâce au procédé EPNA et
            à l'utilisation de Spirulina maxima, Xelliss propose aujourd'hui la
            forme la plus concentrée et la plus biodisponible de phycocyanine au
            monde.
          </p>

          <Card className="mb-8 bg-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                🎯 Points clés à retenir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "La phycocyanine est une phycobiliprotéine complexe unique dans la nature",
                  "Sa composition riche en acides aminés essentiels explique son efficacité",
                  "La concentration de 14 g/L de PhycoSci X14 est exceptionnelle",
                  "Le procédé d'extraction EPNA préserve l'intégrité moléculaire",
                  "Une supplémentation quotidienne de 112 mg optimise les bénéfices santé",
                ].map((point, index) => (
                  <div key={index} className="flex items-start text-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-green-700">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Que ce soit pour ses{" "}
            <strong className="text-green-600">propriétés antioxydantes</strong>
            , son <strong className="text-blue-600">soutien immunitaire</strong>{" "}
            ou sa{" "}
            <strong className="text-purple-600">
              biodisponibilité optimale
            </strong>
            , la composition unique de la phycocyanine en fait un complément
            alimentaire d'exception. PhycoSci X14 représente aujourd'hui
            l'aboutissement de cette recherche d'excellence, offrant la
            phycocyanine la plus pure et la plus concentrée disponible sur le
            marché.
          </p>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                🚀 Commencez votre cure dès aujourd'hui
              </h2>
              <p className="text-xl mb-6 text-orange-100">
                Découvrez par vous-même les bienfaits de la phycocyanine la plus
                concentrée au monde avec PhycoSci X14
              </p>
              <Button
                asChild
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg py-4 px-8 mb-4"
              >
                <Link
                  href="https://www.xelliss.com/phycosci-x14"
                  target="_blank"
                >
                  Découvrir PhycoSci X14 - 44€
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-orange-100">
                ✅ Livraison 48h • 💰 Satisfaction garantie • 🔬 Analysé en
                laboratoire
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
