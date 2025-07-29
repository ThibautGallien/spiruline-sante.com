import { generateSEOMetadata } from "@/lib/seo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { StructuredData } from "@/components/seo/structured-data";
import {
  Heart,
  CheckCircle,
  AlertTriangle,
  Microscope,
  Shield,
  Droplets,
  Clock,
  User,
  Calendar,
  Book,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SpirulineResetSection } from "@/components/sections/spiruline-reset-section";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Spiruline et cœur : effets cardiovasculaires",
    description:
      "Impact de la spiruline sur la santé cardiovasculaire : bienfaits et précautions. Guide complet basé sur des études scientifiques.",
    keywords: [
      "spiruline coeur",
      "spiruline cardiovasculaire",
      "spiruline danger coeur",
      "cholestérol spiruline",
      "tension artérielle spiruline",
      "phycocyanine coeur",
      "antioxydants cardiovasculaire",
      "inflammation coeur",
    ],
    canonicalUrl: "blog/spiruline-danger-coeur",
  });
}

export default function SpirulineDangerCoeurPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Spiruline et cœur : effets cardiovasculaires" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Spiruline : un Danger pour le Cœur ? Tout ce qu'il faut savoir",
    description:
      "Impact de la spiruline sur la santé cardiovasculaire : bienfaits et précautions. Guide complet basé sur des études scientifiques.",
    datePublished: "2024-01-16",
    dateModified: "2024-01-16",
    author: {
      "@type": "Person",
      name: "Dr. Sophie Leclerc",
    },
    publisher: {
      "@type": "Organization",
      name: "Spirulina Health",
      logo: {
        "@type": "ImageObject",
        url: "https://spiruline-sante.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://spiruline-sante.com/blog/spiruline-danger-coeur",
    },
    articleSection: "Santé Cardiovasculaire",
    wordCount: "3500",
    inLanguage: "fr",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "La spiruline peut-elle provoquer des crises cardiaques ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, consommée dans des conditions normales et en quantité raisonnable, la spiruline ne provoque pas de crises cardiaques. Au contraire, certaines études suggèrent qu'elle pourrait contribuer à améliorer le profil lipidique et soutenir la santé du cœur.",
        },
      },
      {
        "@type": "Question",
        name: "La spiruline est-elle dangereuse pour les personnes souffrant d'hypertension ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les études indiquent que la spiruline peut au contraire aider à réguler la pression artérielle. Toutefois, si vous souffrez d'hypertension sévère ou si vous êtes sous traitement, consultez votre médecin avant de commencer une supplémentation.",
        },
      },
      {
        "@type": "Question",
        name: "La spiruline protège-t-elle contre les AVC ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bien que la spiruline puisse contribuer à améliorer la santé cardiovasculaire par ses effets sur le cholestérol et l'inflammation, elle ne peut pas à elle seule prévenir les AVC. Une approche globale incluant alimentation équilibrée, exercice et suivi médical reste essentielle.",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          {/* En-tête de l'article */}
          <article className="bg-white rounded-lg shadow-sm border">
            <div className="p-8">
              {/* Métadonnées de l'article */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>16 janvier 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Dr. Sophie Leclerc</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min de lecture</span>
                </div>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Santé Cardiovasculaire
                </Badge>
              </div>

              {/* Titre principal */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Spiruline : un Danger pour le Cœur ? Tout ce qu'il faut savoir
              </h1>

              {/* Résumé en bullet points */}
              <Card className="bg-green-50 border-green-200 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                    🌟 Ce que vous allez découvrir :
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Bienfaits réels de la spiruline pour le cœur</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        Impact sur le cholestérol et la pression artérielle
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Risques et contre-indications à connaître</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Comment l'intégrer en toute sécurité</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        Conseils pour choisir une spiruline de qualité
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Interactions médicamenteuses importantes</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      asChild
                      className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
                    >
                      <Link
                        href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                        target="_blank"
                      >
                        Découvrir la spiruline
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Introduction avec image */}
              <div className="mb-8">
                <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/A3-Spirulina-Pills-Xelliss.webp"
                    alt="Spiruline et santé cardiovasculaire"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-medium">
                      La spiruline : alliée ou ennemie du cœur ?
                    </p>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>
                    La spiruline est-elle dangereuse pour le cœur ?
                  </strong>{" "}
                  Cette question préoccupe de nombreuses personnes qui
                  s'intéressent à cette micro-algue aux propriétés
                  nutritionnelles exceptionnelles. Dans cet article, nous
                  examinerons les preuves scientifiques pour vous donner une
                  réponse claire et nuancée.
                </p>
              </div>
              {/* Section Spiruline Reset - Composant réutilisable */}
              <SpirulineResetSection className="my-12" />
              {/* Section : Spiruline et Santé Cardiaque */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  Spiruline et Santé Cardiaque : Pourquoi Cette Préoccupation ?
                </h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Un engouement récent, des questions légitimes
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Depuis quelques années, la spiruline est présentée comme un «
                  superaliment » aux vertus multiples : amélioration de
                  l'immunité, soutien de la vitalité, effets antioxydants, et
                  potentiels bienfaits sur les lipides sanguins. Cet
                  enthousiasme a conduit de nombreux consommateurs à
                  s'interroger sur ses effets spécifiques sur le système
                  cardiovasculaire.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Un besoin d'informations fiables et nuancées
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  En recherchant « spiruline danger cœur », vous cherchez à
                  comprendre si une consommation régulière pourrait exercer un
                  impact négatif, comme augmenter le risque de troubles
                  cardiaques, d'arythmies ou de crises cardiaques. Cet article
                  répondra à ce besoin en s'appuyant sur des sources
                  scientifiques fiables.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                      target="_blank"
                    >
                      Découvrir la spiruline
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Section : Qu'est-ce que la Spiruline */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Microscope className="h-8 w-8 text-blue-500" />
                  Qu'est-ce que la Spiruline ?
                </h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Une cyanobactérie ancestrale
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  La spiruline est une cyanobactérie, souvent considérée comme
                  une algue bleue-verte, consommée traditionnellement par
                  certaines populations d'Amérique centrale et d'Afrique. Cette
                  micro-algue spiralée tire son nom de sa forme caractéristique
                  et représente l'une des formes de vie les plus anciennes sur
                  Terre.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Un profil nutritionnel remarquable
                </h3>
                <Card className="bg-blue-50 border-blue-200 mb-6">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">
                          Composition exceptionnelle :
                        </h4>
                        <ul className="space-y-2 text-lg">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>
                              <strong>55-70%</strong> de protéines complètes
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>
                              <strong>Vitamines</strong> : B12, B1, B2, B3, B6,
                              B9, A, E, K
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>
                              <strong>Minéraux</strong> : fer, magnésium,
                              calcium, potassium
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">
                          Composés bioactifs :
                        </h4>
                        <ul className="space-y-2 text-lg">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>
                              <strong>Phycocyanine</strong> : antioxydant
                              puissant
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>
                              <strong>Bêta-carotène</strong> : protection
                              cellulaire
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>
                              <strong>Acides gras</strong> : oméga-3 et oméga-6
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section : Fondements Scientifiques */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Book className="h-8 w-8 text-green-500" />
                  Spiruline et Cœur : Les Fondements Scientifiques
                </h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Des études prometteuses sur les lipides sanguins
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  De nombreuses recherches se sont penchées sur l'effet de la
                  spiruline sur le profil lipidique, avec des résultats
                  encourageants :
                </p>

                <Card className="bg-green-50 border-green-200 mb-6">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                        <div>
                          <p className="text-lg">
                            <strong>Journal of Medicinal Food (2010)</strong> :
                            Une étude a démontré une réduction du
                            LDL-cholestérol (« mauvais » cholestérol) chez des
                            sujets ayant consommé de la spiruline. Un taux élevé
                            de LDL est associé à l'athérosclérose, une condition
                            qui durcit et rétrécit les artères.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                        <div>
                          <p className="text-lg">
                            <strong>
                              Nutrition Research and Practice (2013)
                            </strong>{" "}
                            : Une méta-analyse a mis en évidence la capacité de
                            la spiruline à améliorer le rapport LDL/HDL,
                            soutenant ainsi un profil lipidique plus sain.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Effet sur la pression artérielle
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  L'hypertension artérielle est un facteur de risque majeur des
                  maladies cardiovasculaires. Certaines études indiquent que la
                  spiruline pourrait aider à réguler la pression artérielle
                  grâce à ses propriétés anti-inflammatoires et antioxydantes.
                  La spiruline semble favoriser la production d'oxyde nitrique,
                  une molécule qui contribue à la dilatation des vaisseaux
                  sanguins.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Réduction de l'inflammation et du stress oxydatif
                </h3>
                <Card className="bg-orange-50 border-orange-200 mb-6">
                  <CardHeader>
                    <CardTitle className="text-orange-800 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Mécanismes de protection cardiovasculaire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 mb-4">
                      L'inflammation chronique et le stress oxydatif sont deux
                      éléments clés dans la genèse des maladies cardiaques. Les
                      antioxydants présents dans la spiruline, notamment la
                      phycocyanine, soutiennent la lutte contre les radicaux
                      libres et l'inflammation.
                    </p>
                    <p className="text-lg text-gray-700">
                      En diminuant ces processus délétères, la spiruline
                      pourrait indirectement protéger le système
                      cardiovasculaire en prévenant la formation de plaques
                      d'athérome sur les parois artérielles.
                    </p>
                  </CardContent>
                </Card>
                <div className="mt-6">
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                      target="_blank"
                    >
                      Découvrir la spiruline
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Section : Dangers réels */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                  Spiruline : Y a-t-il de Réels Dangers pour le Cœur ?
                </h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Risques liés à la qualité du produit
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  En soi, la spiruline de qualité, produite dans des conditions
                  contrôlées et vérifiée par des laboratoires indépendants, ne
                  présente pas de danger majeur pour le cœur. Les problèmes
                  surviennent lorsqu'on consomme une spiruline de mauvaise
                  qualité, potentiellement contaminée par des microcystines, des
                  métaux lourds ou d'autres toxines.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Surdosage et effets secondaires
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  La spiruline est généralement bien tolérée, mais un excès peut
                  engendrer des effets secondaires légers tels que maux de tête,
                  nausées, troubles digestifs. Bien que rares, il est important
                  de signaler que toute supplémentation excessive peut créer un
                  déséquilibre.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Personnes à risque ou cas particuliers
                </h3>
                <Card className="bg-red-50 border-red-200 mb-6">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Précautions importantes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                        <span>
                          Les individus souffrant déjà d'affections cardiaques,
                          d'hypertension sévère, ou prenant des médicaments pour
                          le cœur devraient consulter un médecin
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                        <span>
                          Les personnes sensibles aux anticoagulants ou traitées
                          par des bêta-bloquants doivent demander un avis
                          médical
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                        <span>
                          Les patients atteints d'hémochromatose (excès de fer)
                          devraient être prudents
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Newsletter Form */}
              <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">
                    🎁 OBTENEZ VOTRE COPIE GRATUITE
                  </CardTitle>
                  <CardDescription className="text-green-100 text-lg">
                    Téléchargez notre guide complet « Spiruline : l'or vert de
                    la santé »
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-md mx-auto">
                    <NewsletterForm variant="dark" size="lg" />
                  </div>
                  <p className="text-center text-green-100 text-sm mt-4">
                    Obtenez toutes les informations pour comprendre les
                    bienfaits de cette microalgue et l'intégrer efficacement
                    dans votre vie quotidienne.
                  </p>
                </CardContent>
              </Card>

              {/* Section : Phycocyanine */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Droplets className="h-8 w-8 text-blue-500" />
                  La Phycocyanine : Un Pigment Clé pour le Cœur
                </h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Comprendre le rôle de la phycocyanine
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  La phycocyanine est le pigment bleu caractéristique de la
                  spiruline. Elle possède des propriétés antioxydantes,
                  anti-inflammatoires et immunomodulatrices. Ce pigment aurait
                  la capacité de soutenir la santé cardiovasculaire en réduisant
                  le stress oxydatif qui endommage les cellules endothéliales
                  tapissant les vaisseaux sanguins.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Études sur la phycocyanine et santé cardiaque
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Des recherches suggèrent que la phycocyanine pourrait aider à
                  prévenir la peroxydation lipidique, un processus au cours
                  duquel les graisses s'oxydent et s'accumulent dans les
                  artères. En protégeant les lipides sanguins, ce pigment limite
                  la formation de plaques athéromateuses, contribuant ainsi à
                  maintenir des artères souples et dégagées.
                </p>
              </section>

              {/* Reste de l'article... */}
              {/* FAQ Section */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  FAQ (Foire Aux Questions)
                </h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        La spiruline peut-elle provoquer des crises cardiaques ?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-700">
                        Non, consommée dans des conditions normales et en
                        quantité raisonnable, la spiruline ne provoque pas de
                        crises cardiaques. Au contraire, certaines études
                        suggèrent qu'elle pourrait contribuer à améliorer le
                        profil lipidique et soutenir la santé du cœur.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Est-ce que la spiruline est dangereuse pour les
                        personnes souffrant d'hypertension ?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-700">
                        Les études indiquent que la spiruline peut au contraire
                        aider à réguler la pression artérielle. Toutefois, si
                        vous souffrez d'hypertension sévère ou si vous êtes sous
                        traitement, consultez votre médecin avant de commencer
                        une supplémentation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        La spiruline protège-t-elle contre les AVC ?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-700">
                        Bien que la spiruline puisse contribuer à améliorer la
                        santé cardiovasculaire par ses effets sur le cholestérol
                        et l'inflammation, elle ne peut pas à elle seule
                        prévenir les AVC. Une approche globale incluant
                        alimentation équilibrée, exercice et suivi médical reste
                        essentielle.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-lg py-6 px-8"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/"
                      target="_blank"
                    >
                      Découvrir la spiruline
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Sources scientifiques */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Sources scientifiques :
                </h3>
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <ol className="space-y-2 text-sm text-gray-600">
                      <li>
                        1. Karkos PD et al. « Spirulina in clinical practice:
                        evidence-based human applications », Evidence-Based
                        Complementary and Alternative Medicine, 2011.
                      </li>
                      <li>
                        2. Mazokopakis EE et al. « The hypolipidaemic effects of
                        Spirulina (Arthrospira platensis) supplementation in a
                        Cretan population: A prospective study », Journal of the
                        Science of Food and Agriculture, 2014.
                      </li>
                      <li>
                        3. Ku CS et al. « Effects of Spirulina on lipid profiles
                        and blood pressure: A systematic review and
                        meta-analysis », Nutrition Research and Practice, 2013.
                      </li>
                      <li>
                        4. Khan Z et al. « Nutritional and therapeutic potential
                        of Spirulina », Current Pharmaceutical Biotechnology,
                        2005.
                      </li>
                    </ol>
                  </CardContent>
                </Card>
                <p className="text-sm text-gray-500 italic mt-4">
                  *Cet article est basé sur des études scientifiques
                  peer-reviewed et ne remplace pas un avis médical
                  professionnel.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
