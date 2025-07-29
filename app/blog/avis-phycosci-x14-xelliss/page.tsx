import { generateSEOMetadata, generateArticleSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhycocyanineResetSection } from "@/components/sections/phycocyanine-reset-section";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Phycosci X14 de Xelliss : La Révolution en Nutrition Cellulaire",
    description:
      "Phycosci X14 Xelliss : avis, prix, bienfaits. Découvrez pourquoi cette phycocyanine Xelliss révolutionne la nutrition cellulaire",
    keywords: [
      "Phycosci X14",
      "Phycosci X14 Xelliss",
      "phycocyanine Xelliss",
      "nutrition cellulaire",
      "complément alimentaire",
      "micro-algues",
      "Xelliss avis",
      "détoxification",
      "système immunitaire",
    ],
    canonicalUrl: "blog/avis-phycosci-x14-xelliss",
  });
}

export default function AvisPhycosciX14Xelliss() {
  const articleSchema = generateArticleSchema({
    title: "avis Phycosci X14 Xelliss : La Révolution en Nutrition Cellulaire",
    excerpt:
      "Phycosci X14 Xelliss : avis, prix, bienfaits. Découvrez pourquoi cette phycocyanine Xelliss révolutionne la nutrition cellulaire",
    datePublished: "2023-12-30",
    author: "Thibaut",
    category: "Nutrition Cellulaire",
    url: "blog/avis-phycosci-x14-xelliss",
  });

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Avis Phycosci X14 Xelliss" },
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
              Nutrition Cellulaire
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Phycocyanine Premium
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            avis Phycosci X14 Xelliss : La Révolution en Nutrition Cellulaire
          </h1>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
            <span>
              Par <strong>Thibaut</strong>
            </span>
            <span>•</span>
            <span>30 décembre 2023</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Qu'est-ce que Phycosci X14 Section */}
          <section className="mb-12" id="quest-ce-que-phycosci-x14">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Qu'est-ce que Phycosci X14 ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="/PhycoSciX14-Xelliss.webp"
                    alt="Phycosci X14 Xelliss - Complément nutrition cellulaire à base de micro-algues"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg">
                      <span className="font-semibold text-blue-700">
                        Phycosci X14
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Phycosci X14, produit phare de Xelliss, se positionne comme
                  une avancée notable dans le domaine de la nutrition
                  cellulaire. Conçu pour favoriser la vitalité et le bien-être
                  général, ce complément alimentaire tire parti des propriétés
                  bénéfiques des micro-algues.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Ses ingrédients clés, soigneusement sélectionnés, visent à
                  optimiser la santé cellulaire, contribuant à une meilleure
                  énergie et à une détoxification efficace du corps.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Le Phycosci X14 se distingue par sa composition unique et sa
                  formule innovante, conçue pour soutenir les fonctions
                  corporelles essentielles et améliorer la qualité de vie. Son
                  utilisation régulière est promue pour aider à maintenir un
                  équilibre nutritionnel optimal, essentiel pour une santé
                  globale robuste.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-3 px-8"
                asChild
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                  target="_blank"
                >
                  🛒 Commander Phycosci X14
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Section Phycocyanine Reset - Composant réutilisable */}
          <PhycocyanineResetSection className="my-12" />

          {/* Avantages et Bienfaits Section */}
          <section className="mb-12" id="avantages-bienfaits">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Avantages et Bienfaits de Phycosci X14
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Le Phycosci X14 de Xelliss se distingue par ses multiples
              avantages et bienfaits pour la santé. Grâce à sa composition riche
              en nutriments essentiels, ce complément alimentaire contribue à
              renforcer le système immunitaire, augmenter les niveaux d'énergie,
              et favoriser une détoxification naturelle.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Il est également reconnu pour son rôle dans l'amélioration de la
              digestion et le soutien à un métabolisme sain. Les utilisateurs
              rapportent souvent un sentiment général de bien-être, une
              amélioration de la clarté mentale et une réduction du stress.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ces effets positifs font de Phycosci X14 un choix privilégié pour
              ceux qui cherchent à améliorer leur qualité de vie par une
              approche naturelle et efficace.
            </p>
          </section>

          {/* Comment utiliser Section */}
          <section className="mb-12" id="comment-utiliser">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment utiliser Phycosci X14 ?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              L'utilisation optimale de Phycosci X14 est clé pour profiter
              pleinement de ses bienfaits. Il est généralement recommandé de
              consommer ce complément alimentaire selon les directives fournies
              par Xelliss.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La posologie standard peut varier en fonction des besoins
              individuels, mais un dosage quotidien régulier est souvent suggéré
              pour obtenir des résultats optimaux.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Il est important de l'intégrer dans une routine quotidienne de
              santé, en le combinant idéalement avec une alimentation équilibrée
              et un mode de vie sain.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Pour des instructions spécifiques et personnalisées, il est
              conseillé de consulter le guide d'utilisation fourni par Xelliss
              ou de demander l'avis d'un professionnel de santé.
            </p>
          </section>

          {/* Témoignages Section */}
          <section className="mb-12" id="temoignages">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Témoignages et Avis sur Phycosci X14
            </h2>

            <div className="space-y-8">
              {/* Témoignage Dominique */}
              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-green-700">
                      Dominique
                    </CardTitle>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">
                    « Nous avons bien connu ce problème de leucémie et de greffe
                    de moelle avec nos distributrices. Elles avaient eu
                    d'excellent résultats à moyen terme avec l'eau dynamisée et
                    la Phycosci, qui d'ailleurs aussi très bénéfique pour le
                    foie. »
                  </p>
                </CardContent>
              </Card>

              {/* Témoignage Aurélie */}
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-blue-700">
                      Aurélie
                    </CardTitle>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      « J'ai souffert d'acouphènes pendant des années. Mon ORL
                      et mon médecin me disait que ça ne se soignait pas. Ils me
                      disait que ça venait du stress. Ils ne m'ont donné aucun
                      conseil ni aucune solution pour m'aider.
                    </p>

                    <p className="text-gray-700">
                      J'en était au stade à ne plus rien supporter: aucun bruit,
                      aucun son, ni plus personne. S'il y avait trop de bruit je
                      mettait des bouchons d'oreilles, sauf que lorsque je les
                      avaient, j'entendais encore plus les sifflements… c'était
                      un cercle vicieux.
                    </p>

                    <p className="text-gray-700">
                      J'étais désespérée…. jusqu'au jour où j'ai commencé à
                      utiliser le concept Xelliss (eau, Phycosci AM, krill), pas
                      du tout en pensant aux acouphènes, mais pour m'accompagner
                      avec mes problèmes de thyroïde, au fur et à mesure, je
                      dormais mieux, j'étais en meilleure forme, et, j'étais
                      moins stressée…j'étais ravie d'aller mieux … Mais ce que,
                      bizarrement je n'avait pas remarqué de suite, c'est que
                      les acouphènes avaient disparus.
                    </p>

                    <p className="text-gray-700 font-medium">
                      Les produits Xelliss sont remarquables en tous points. »
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Où Acheter Section */}
          <section className="mb-12" id="ou-acheter">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Où Acheter Phycosci X14 ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Le Phycosci X14 n'est pas disponible en pharmacie ou en
                  commerce traditionnel.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Pour pouvoir en acheter il faut passer par un conseiller
                  Xelliss. Celui-ci vous aidera à trouver le produit qui sera le
                  plus pertinent selon vos besoins.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Bien évidemment, pensez à consulter un professionnel de santé
                  avant toute prise de complément alimentaire.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  La bouteille de Phycosci X14 est à 62€ (TTC) ou bien vous
                  pouvez en avoir une tous les mois pour 44€ (TTC).
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Chaque bouteille contient 30 doses et vous permettra d'avoir
                  accès aux bienfaits de la phycocyanine au quotidien.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  En tant que conseiller Xelliss, je peux vous rediriger vers ce
                  lien pour commander votre première bouteille de Phycosci X14
                </p>
              </div>

              <div>
                <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="/PhycoSciX14.webp"
                    alt="Achat Phycosci X14 Xelliss - Conseiller en ligne pour commander"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="bg-white/90 backdrop-blur p-3 rounded-lg text-center">
                      <span className="font-semibold text-blue-700">
                        Commande en ligne sécurisée
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-3 px-8"
                asChild
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                  target="_blank"
                >
                  🛒 Commander Phycosci X14
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
