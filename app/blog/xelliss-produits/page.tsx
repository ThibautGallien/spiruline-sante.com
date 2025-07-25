import { generateSEOMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Star as StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Xelliss produits : bienfaits, usages et où les acheter",
    description:
      "Xelliss produits : prix, avis. Phycocyanine Xelliss, spiruline, carafe… Découvrez où acheter et tout savoir sur les produits Xelliss",
    canonicalUrl: "blog/xelliss-produits",
    keywords: [
      "xelliss produits",
      "phycocyanine xelliss",
      "spiruline xelliss",
      "carafe xelliss",
      "a3 spirulina pills",
      "x gold xelliss",
      "phycosci x14",
      "xelliwater",
      "où acheter xelliss",
      "avis xelliss",
    ],
  });
}

export default function XellissProduits() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Xelliss produits : bienfaits, usages et où les acheter" },
  ];

  return (
    <article className="container px-4 md:px-6 lg:px-8 py-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Guide Complet
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Produits Xelliss
          </Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Xelliss produits : bienfaits, usages et où les acheter
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Par Thibaut / 26 novembre 2024
        </p>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Les produits Xelliss incarnent l'innovation et la qualité dans le
            domaine de la nutrition et du bien-être. Grâce à une technologie
            avancée et une expertise en microalgues, cette gamme de produits
            offre des solutions uniques pour renforcer votre santé et votre
            vitalité. Découvrez dans ce guide tout ce qu'il faut savoir sur les
            produits Xelliss, ainsi que la carafe filtrante Xelliss, leurs
            bienfaits, leur utilisation et comment les acheter au meilleur prix.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        {/* Pourquoi choisir les produits Xelliss */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi choisir les produits Xelliss ?
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Les produits Xelliss se distinguent par leur approche scientifique
            et leur engagement envers la qualité et la durabilité.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Un leader en innovation microalgale
              </h3>
              <p className="text-lg text-gray-700">
                Xelliss utilise des microalgues, comme la spiruline, pour
                développer des solutions de santé et de bien-être riches en
                nutriments essentiels. Ces ingrédients sont cultivés dans des
                conditions optimales, offrant des produits concentrés et
                puissants qui répondent aux besoins modernes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Une qualité garantie grâce aux photobioréacteurs
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                La spiruline utilisée par Xelliss est cultivée dans des
                photobioréacteurs fermés. Cette méthode innovante garantit :
              </p>
              <ul className="space-y-2 text-lg text-gray-700 ml-6">
                <li>• Une pureté optimale, sans contamination.</li>
                <li>
                  • Une production durable et respectueuse de l'environnement.
                </li>
                <li>
                  • Une richesse nutritionnelle supérieure grâce au contrôle
                  précis des conditions de culture.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Des bienfaits soutenus par la science
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Les produits Xelliss sont formulés pour répondre à des besoins
                spécifiques grâce à leurs propriétés :
              </p>
              <ul className="space-y-2 text-lg text-gray-700 ml-6">
                <li>
                  • <strong>Antioxydantes</strong> : pour protéger les cellules
                  du stress oxydatif.
                </li>
                <li>
                  • <strong>Énergétiques</strong> : pour réduire la fatigue et
                  booster la vitalité.
                </li>
                <li>
                  • <strong>Immunitaires</strong> : pour renforcer les défenses
                  naturelles.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Présentation de la gamme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Présentation de la gamme des produits Xelliss
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Découvrez la gamme complète des produits Xelliss, leurs bienfaits,
            et comment les intégrer dans votre routine.
          </p>

          <div className="space-y-12">
            {/* A3 Spirulina Pills */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    A3 Spirulina Pills
                  </h3>

                  <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/A3-Spirulina-Pills-Xelliss.webp"
                      alt="A3 Spirulina Pills Xelliss - Comprimés de spiruline premium"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Description complète
                    </h4>
                    <p className="text-lg text-gray-700">
                      Ces comprimés concentrent les bienfaits de la spiruline
                      sous une forme pratique et bioactive. Chaque dose apporte
                      des protéines complètes, du fer biodisponible, des
                      vitamines (A, K) et des antioxydants puissants.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Pourquoi ce produit est unique
                    </h4>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>
                        • Contient des acides gras rares comme le GLA, bénéfique
                        pour l'inflammation.
                      </li>
                      <li>
                        • Cultivé dans des photobioréacteurs, garantissant
                        pureté et qualité.
                      </li>
                      <li>
                        • Riche en fer facilement assimilable, idéal pour
                        prévenir la fatigue.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Conseils d'utilisation
                    </h4>
                    <p className="text-lg text-gray-700">
                      Prenez 4 comprimés par jour avec un verre d'eau. Idéal
                      pour les adultes actifs, les végétariens ou les personnes
                      cherchant un apport nutritionnel complet.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-green-800 mb-3">
                      Avis d'utilisateurs
                    </h4>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-green-700 italic">
                      « Grâce à la spiruline, mon père a retrouvé de l'énergie,
                      perdu du poids et s'épanouit à nouveau. » – Denise
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* X Gold */}
            <div className="bg-white border-2 border-yellow-200 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    X Gold
                  </h3>

                  <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/X-Gold-Xelliss.webp"
                      alt="X Gold Xelliss - Complément liquide au curcuma et pipérine"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Gold
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Description complète
                    </h4>
                    <p className="text-lg text-gray-700">
                      Un complément liquide à base d'extrait aqueux de curcuma
                      et de pipérine, conçu pour maximiser l'absorption et
                      offrir des bienfaits antioxydants et anti-inflammatoires.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Pourquoi ce produit est unique
                    </h4>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>
                        • Contient le Totum-EX®, un procédé exclusif qui
                        conserve toutes les molécules actives du curcuma.
                      </li>
                      <li>
                        • Synergie avec la pipérine pour une absorption
                        amplifiée de la curcumine.
                      </li>
                      <li>
                        • Idéal pour soutenir le système immunitaire et réduire
                        l'inflammation.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Conseils d'utilisation
                    </h4>
                    <p className="text-lg text-gray-700">
                      Prenez 8 ml par jour dans un verre d'eau, en utilisant le
                      doseur inclus. Convient aux personnes cherchant à soutenir
                      leur immunité et à prévenir les douleurs articulaires.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-yellow-800 mb-3">
                      Avis d'utilisateurs
                    </h4>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-yellow-700 italic">
                      « Après 3 mois de X Gold, je suis plus apaisée, sans
                      nausées ni maux de tête, et j'ai retrouvé de la joie. » –
                      Catherine
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PhycoSci X14 */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    PhycoSci X14
                  </h3>

                  <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/PhycoSciX14-Xelliss.webp"
                      alt="PhycoSci X14 Xelliss - Concentré liquide de spiruline riche en phycocyanine"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      X14
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Description complète
                    </h4>
                    <p className="text-lg text-gray-700">
                      Ce concentré liquide de spiruline est exceptionnellement
                      riche en phycocyanine, un puissant antioxydant et
                      stimulant immunitaire.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Pourquoi ce produit est unique
                    </h4>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>
                        • Contient 14 g/L de phycocyanine, une concentration
                        parmi les plus élevées du marché.
                      </li>
                      <li>
                        • Production durable et écologique grâce aux
                        photobioréacteurs.
                      </li>
                      <li>
                        • Parfait pour renforcer les défenses naturelles et
                        améliorer la résistance physique.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Conseils d'utilisation
                    </h4>
                    <p className="text-lg text-gray-700">
                      Mélangez 8 ml dans un verre d'eau chaque jour. Ce produit
                      convient particulièrement aux sportifs, aux personnes
                      immunodéprimées ou aux seniors.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">
                      Avis d'utilisateurs
                    </h4>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-blue-700 italic">
                      « Grâce à la phycocyanine, j'ai retrouvé le sommeil,
                      repris le sport et la marche après 18 ans, et je revis. »
                      – Isa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carafe filtrante XelliWater */}
            <div className="bg-white border-2 border-cyan-200 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Carafe filtrante XelliWater
                  </h3>

                  <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/XelliWater-Xelliss.webp"
                      alt="Carafe filtrante XelliWater Xelliss - Purification et alcalinisation de l'eau"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Filtration
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Description complète
                    </h4>
                    <p className="text-lg text-gray-700">
                      La XelliWater est une carafe filtrante innovante qui
                      purifie et alcalinise l'eau grâce au filtre exclusif
                      XelliAlka. Elle offre une eau plus saine et équilibrée,
                      idéale pour une hydratation optimale.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Pourquoi ce produit est unique
                    </h4>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>
                        • Purifie l'eau en éliminant impuretés, métaux lourds et
                        odeurs.
                      </li>
                      <li>
                        • Alcalinise l'eau pour améliorer l'équilibre
                        acido-basique du corps.
                      </li>
                      <li>
                        • Design élégant et pratique avec une capacité adaptée
                        aux besoins quotidiens.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Conseils d'utilisation
                    </h4>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>• Remplissez la carafe avec de l'eau du robinet.</li>
                      <li>
                        • Le filtre XelliAlka doit être remplacé toutes les 4 à
                        6 semaines, en fonction de l'usage.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      À qui s'adresse ce produit ?
                    </h4>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>
                        • Idéal pour les personnes souhaitant améliorer la
                        qualité de leur eau.
                      </li>
                      <li>
                        • Recommandé pour les sportifs, familles et toute
                        personne attentive à son hydratation.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">
                      Prix
                    </h4>
                    <ul className="space-y-1 text-cyan-700">
                      <li>• XelliWater : 72 € (deux filtres inclus)</li>
                      <li>• Filtre XelliAlka : 18 €</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">
                      Avis d'utilisateurs
                    </h4>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-cyan-700 italic">
                      « Grâce à la carafe Xelliss, mon fils Asperger a amélioré
                      sa concentration et sa capacité à retenir des
                      informations. » – Témoignage annonyme
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tableau récapitulatif */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Tableau récapitulatif des produits
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-semibold">
                    Produit
                  </th>
                  <th className="border border-gray-300 p-4 text-left font-semibold">
                    Bienfaits principaux
                  </th>
                  <th className="border border-gray-300 p-4 text-left font-semibold">
                    Pour qui ?
                  </th>
                  <th className="border border-gray-300 p-4 text-left font-semibold">
                    Prix
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">
                    A3 Spirulina Pills
                  </td>
                  <td className="border border-gray-300 p-4">
                    Énergie, immunité, réduction de la fatigue
                  </td>
                  <td className="border border-gray-300 p-4">
                    Adultes actifs, végétariens, seniors
                  </td>
                  <td className="border border-gray-300 p-4 font-semibold text-green-600">
                    26€
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">
                    X Gold
                  </td>
                  <td className="border border-gray-300 p-4">
                    Antioxydant, anti-inflammatoire, immunité
                  </td>
                  <td className="border border-gray-300 p-4">
                    Personnes avec douleurs articulaires ou inflammation
                  </td>
                  <td className="border border-gray-300 p-4 font-semibold text-yellow-600">
                    52€
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">
                    PhycoSci X14
                  </td>
                  <td className="border border-gray-300 p-4">
                    Immunité, performance, antioxydant
                  </td>
                  <td className="border border-gray-300 p-4">
                    Sportifs, seniors, personnes immunodéprimées
                  </td>
                  <td className="border border-gray-300 p-4 font-semibold text-blue-600">
                    44€
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">
                    XelliWater
                  </td>
                  <td className="border border-gray-300 p-4">
                    Eau purifiée, équilibre acido-basique, hydratation
                  </td>
                  <td className="border border-gray-300 p-4">
                    Sportifs, familles, personnes soucieuses de leur santé
                  </td>
                  <td className="border border-gray-300 p-4 font-semibold text-cyan-600">
                    72 € (2 filtres inclus)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">
                    Filtre XelliAlka
                  </td>
                  <td className="border border-gray-300 p-4">
                    Remplacement pour purification et alcalinisation
                  </td>
                  <td className="border border-gray-300 p-4">
                    Utilisateurs de la carafe XelliWater
                  </td>
                  <td className="border border-gray-300 p-4 font-semibold text-cyan-600">
                    18 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Où acheter */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Où acheter les produits Xelliss ?
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Achat via distributeurs officiels
            </h3>

            <div className="space-y-4 text-lg text-gray-700 mb-6">
              <p>
                Les produits Xelliss sont disponibles via des distributeurs
                agréés. Cela garantit la qualité et l'authenticité des produits.
              </p>

              <p>
                Il existe aussi des sites qui revendent des produits de Xelliss
                et de Zinzino pour moins cher. Mais en passant par ces sites,
                vous n'avez pas de suivi de votre commande, pas de support
                client ni même la certitude de recevoir un jour le produit.
              </p>

              <p>
                En passant par un distributeur agréé, vous accèdez directement
                aux informations concernant votre commande, un espace personnel
                et le support client de Xelliss.
              </p>

              <p>
                Pourquoi je parle de Xelliss et de Zinzino ? En 2024, Xelliss a
                fusionné avec Zinzino. Ce qui fait que les produits de la marque
                Xelliss sont maintenant en vente sur le site de Zinzino.
              </p>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-4"
                asChild
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-products/"
                  target="_blank"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Acheter vos produits Xelliss maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur les produits Xelliss
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Les produits Xelliss sont-ils adaptés à tous ?
              </h3>
              <p className="text-lg text-gray-700">
                Ils conviennent à la plupart des adultes, mais il est conseillé
                aux femmes enceintes et aux personnes sous traitement médical de
                consulter un professionnel de santé avant utilisation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quelle est la durée de conservation des produits Xelliss ?
              </h3>
              <p className="text-lg text-gray-700">
                Une fois ouverts, les produits liquides doivent être consommés
                dans les 45 jours et conservés au réfrigérateur.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quels sont les avis des experts sur Xelliss ?
              </h3>
              <p className="text-lg text-gray-700">
                De nombreux experts saluent la pureté et l'innovation des
                produits Xelliss, notamment leur engagement envers une
                production durable et leurs procédés d'extraction avancés.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Les produits Xelliss représentent une véritable avancée dans le
              domaine des compléments alimentaires. Grâce à leur qualité
              irréprochable et leurs bienfaits soutenus par la science, ils
              offrent une solution adaptée pour booster votre santé.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Prêt à améliorer votre bien-être ? Découvrez la gamme Xelliss dès
              maintenant !
            </p>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-lg px-8 py-4"
                asChild
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-products/"
                  target="_blank"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Commandez vos produits Xelliss
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
