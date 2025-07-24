import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Dumbbell,
} from "lucide-react";
import { StructuredData } from "@/components/seo/structured-data";
import {
  generateSEOMetadata,
  generateProductSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";

// Métadonnées SEO optimisées
export const metadata: Metadata = generateSEOMetadata({
  title: "A3 Spirulina Pills Xelliss : Avis Complet et Test Détaillé 2024",
  description:
    "Test complet des A3 Spirulina Pills de Xelliss : composition, bienfaits, posologie, témoignages clients et où acheter au meilleur prix. Avis d'expert.",
  keywords: [
    "A3 Spirulina Pills",
    "Xelliss spiruline",
    "avis spiruline A3",
    "test spiruline Xelliss",
    "comprimés spiruline",
    "spiruline maxima",
    "complément alimentaire spiruline",
    "spiruline premium",
    "Zinzino spiruline",
    "spiruline bio France",
    "fatigue chronique spiruline",
    "immunité spiruline",
    "spiruline végétarien",
    "prix spiruline Xelliss",
  ],
  canonicalUrl: "blog/a3-spirulina-pills-de-xelliss-avis",
  ogImage: "/images/a3-spirulina-pills-og.jpg",
});

const A3SpirulinaPillsArticle = () => {
  const benefits = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Énergie naturelle",
      description: "Soutient le métabolisme énergétique et réduit la fatigue",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Immunité renforcée",
      description: "Favorise le fonctionnement du système immunitaire",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Fonctions cognitives",
      description: "Soutient les capacités mentales et la concentration",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Santé sanguine",
      description: "Contribue à une fonction sanguine normale grâce au fer",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Vision saine",
      description: "Favorise une vision normale grâce à la vitamine A",
    },
    {
      icon: <Dumbbell className="h-5 w-5" />,
      title: "Santé musculaire",
      description: "Maintient la santé musculaire et osseuse",
    },
  ];

  const testimonials = [
    {
      name: "Isabelle",
      rating: 5,
      text: "Grâce au jeûne intermittent, aux plantes et aux produits Xelliss, j'ai retrouvé le sommeil, perdu 29 kg et vu mes douleurs disparaître. Après 18 ans de polyarthrite, je revis : je marche, fais du sport et n'ai plus besoin de traitement.",
      verified: true,
    },
    {
      name: "Pascale",
      rating: 5,
      text: "Après un AVC, j'ai retrouvé toute ma mobilité, ma parole et ma forme grâce à une prise régulière de spiruline et une hygiène de vie renforcée. Mon neurologue n'en revenait pas de ma récupération complète, confirmée par les examens médicaux.",
      verified: true,
    },
    {
      name: "David",
      rating: 5,
      text: "Opéré d'une hernie discale début octobre, j'ai cicatrisé rapidement et repris le vélo bien plus tôt que prévu. Je suis convaincu que la spiruline et les produits naturels Xelliss ont grandement aidé ma récupération.",
      verified: true,
    },
  ];

  const nutritionalValues = [
    { nutrient: "Poudre de spiruline", amount: "2 g", daily: "" },
    { nutrient: "Protéines", amount: "1,3 g", daily: "" },
    { nutrient: "Phycocyanine", amount: "0,34 mg", daily: "" },
    { nutrient: "Fer", amount: "2,4 mg", daily: "(17% VNR*)" },
    { nutrient: "Vitamine A", amount: "457 µg", daily: "(57% VNR*)" },
    { nutrient: "Vitamine K", amount: "21 µg", daily: "(28% VNR*)" },
  ];

  // Données structurées pour le SEO
  const productSchema = generateProductSchema({
    name: "A3 Spirulina Pills Xelliss",
    description:
      "Comprimés de spiruline premium (Spirulina maxima) développés par Xelliss. 80 comprimés de 2g de spiruline pure par dose quotidienne, riche en protéines, fer et vitamines.",
    benefits: [
      "Augmente l'énergie naturelle",
      "Renforce le système immunitaire",
      "Améliore les fonctions cognitives",
      "Soutient la santé sanguine",
      "Favorise une vision saine",
      "Maintient la santé musculaire",
    ],
  });

  const articleSchema = generateArticleSchema({
    title: "A3 Spirulina Pills Xelliss : Avis Complet et Test Détaillé",
    excerpt:
      "Test complet des A3 Spirulina Pills de Xelliss : composition, bienfaits, posologie, témoignages clients et où acheter au meilleur prix.",
    datePublished: new Date().toISOString(),
    author: "Spirulina Health",
    category: "Tests Produits",
    url: "blog/a3-spirulina-pills-de-xelliss-avis",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Blog", href: "/blog" },
    { label: "Tests Produits", href: "/blog/tests-produits" },
    { label: "A3 Spirulina Pills Xelliss Avis" },
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Quelle est la posologie recommandée pour A3 Spirulina Pills ?",
      answer:
        "La posologie recommandée est de 4 comprimés par jour avec un verre d'eau, de préférence le matin à jeun ou entre les repas.",
    },
    {
      question: "Où peut-on acheter A3 Spirulina Pills en toute sécurité ?",
      answer:
        "A3 Spirulina Pills est disponible uniquement sur le site officiel Zinzino au prix de 37€ TTC pour 80 comprimés. Méfiez-vous des contrefaçons sur d'autres plateformes.",
    },
    {
      question: "Quels sont les principaux bienfaits d'A3 Spirulina Pills ?",
      answer:
        "Les principaux bienfaits incluent : augmentation de l'énergie naturelle, renforcement du système immunitaire, amélioration des fonctions cognitives, soutien de la santé sanguine grâce au fer, et maintien de la santé musculaire.",
    },
    {
      question: "Y a-t-il des contre-indications à A3 Spirulina Pills ?",
      answer:
        "Oui, ce produit est déconseillé aux fumeurs, personnes souffrant d'excès de fer, celles sous anticoagulants, femmes enceintes/allaitantes sans avis médical, et personnes allergiques aux algues.",
    },
    {
      question:
        "Combien de temps faut-il pour voir les effets d'A3 Spirulina Pills ?",
      answer:
        "Une cure minimum de 3 mois est recommandée pour des résultats optimaux. Les premiers effets peuvent se faire sentir après quelques semaines d'utilisation régulière.",
    },
  ]);

  return (
    <>
      <StructuredData data={productSchema} />
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header avec résumé */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="mb-4">
            ⭐ Produit Premium Xelliss
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900">
            A3 Spirulina Pills Xelliss : Avis et Test Complet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre analyse détaillée des comprimés de spiruline A3 de
            Xelliss : composition, bienfaits réels, témoignages clients et guide
            d'utilisation complet.
          </p>
        </div>

        {/* Points clés */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌟 Ce que vous allez découvrir :
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Composition détaillée et origine</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Bienfaits scientifiquement prouvés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Mode d'emploi et posologie optimale</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Témoignages clients vérifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Prix et où acheter en toute sécurité</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Précautions et contre-indications</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-green-800">
                    💊 A3 Spirulina Pills - 80 comprimés
                  </p>
                  <p className="text-green-700">
                    2g de spiruline pure par dose quotidienne
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-800">37€</p>
                  <a href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/">
                    <Button className="mt-2 bg-green-600 hover:bg-green-700">
                      Voir sur Zinzino
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Vous cherchez un complément alimentaire naturel pour booster votre
            énergie et renforcer votre immunité ? Les{" "}
            <strong>A3 Spirulina Pills de Xelliss</strong> pourraient bien être
            la solution que vous attendez. Cette spiruline premium, conditionnée
            en comprimés pratiques, concentre tous les bienfaits de cette
            microalgue exceptionnelle.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Dans ce guide complet, nous passons au crible ce produit phare de
            Xelliss : composition, efficacité réelle, mode d'emploi et retours
            d'expérience de nos lecteurs. Vous découvrirez tout ce qu'il faut
            savoir avant de faire votre choix.
          </p>
        </div>

        {/* Qu'est-ce que A3 Spirulina Pills */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Qu'est-ce que A3 Spirulina Pills ?
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Le produit phare pour votre vitalité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Les A3 Spirulina Pills sont des comprimés de spiruline pure
                (Spirulina maxima) développés par Xelliss. Chaque boîte contient
                80 comprimés, soit un mois de cure complète à raison de 4
                comprimés par jour.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2g</div>
                  <div className="text-sm text-blue-800">
                    de spiruline pure par dose
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">70%</div>
                  <div className="text-sm text-green-800">
                    de protéines complètes
                  </div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">17%</div>
                  <div className="text-sm text-orange-800">
                    des besoins en fer
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Composition détaillée */}
          <Card>
            <CardHeader>
              <CardTitle>Composition et valeurs nutritionnelles</CardTitle>
              <CardDescription>
                Pour 4 comprimés (dose quotidienne recommandée)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Nutriment</th>
                      <th className="text-left p-2 font-semibold">Quantité</th>
                      <th className="text-left p-2 font-semibold">% VNR*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutritionalValues.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-2">{item.nutrient}</td>
                        <td className="p-2 font-medium">{item.amount}</td>
                        <td className="p-2 text-green-600">{item.daily}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">
                  *VNR : Valeurs Nutritionnelles de Référence
                </p>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-sm">
                  <strong>Ingrédients :</strong> Poudre de spiruline (Spirulina
                  maxima), agent de charge (cellulose).
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bienfaits */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Bienfaits scientifiquement prouvés
          </h2>

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
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">
                🔬 Pourquoi ça fonctionne ?
              </h3>
              <p className="text-gray-700">
                La spiruline Spirulina maxima utilisée dans A3 Spirulina Pills
                contient jusqu'à 27% de protéines en plus que d'autres variétés.
                Sa richesse en fer biodisponible (2x plus que la spiruline
                traditionnelle) et en phycocyanine en fait un complément
                particulièrement efficace pour lutter contre la fatigue et
                renforcer l'immunité.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mode d'emploi */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Comment utiliser A3 Spirulina Pills ?
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Posologie et conseils d'utilisation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Dosage standard</p>
                      <p className="text-gray-600">
                        4 comprimés par jour avec un verre d'eau
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Moment optimal</p>
                      <p className="text-gray-600">
                        Le matin à jeun ou entre les repas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Durée de cure</p>
                      <p className="text-gray-600">
                        Minimum 3 mois pour des résultats optimaux
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    💡 Conseils d'expert
                  </h4>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li>• Commencez par 2 comprimés les premiers jours</li>
                    <li>
                      • Prenez avec de la vitamine C pour optimiser l'absorption
                      du fer
                    </li>
                    <li>• Évitez de prendre avec du thé ou du café</li>
                    <li>• Intégrez dans une alimentation équilibrée</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Témoignages */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Témoignages clients vérifiés
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

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {testimonial.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50">
            <CardContent className="p-6 text-center">
              <p className="text-blue-800 font-medium">
                ⭐ Note moyenne : 4.1/5 basée sur plus de 14 291 avis clients
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Précautions */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Précautions et contre-indications
          </h2>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <div className="space-y-3">
                  <h3 className="font-semibold text-red-800">
                    ⚠️ Qui ne doit pas utiliser A3 Spirulina Pills ?
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • <strong>Fumeurs :</strong> La spiruline est déconseillée
                      aux fumeurs (risque de bêta-carotène)
                    </li>
                    <li>
                      • <strong>Excès de fer :</strong> Personnes souffrant
                      d'hémochromatose ou de surcharge en fer
                    </li>
                    <li>
                      • <strong>Traitements anticoagulants :</strong> Consultez
                      votre médecin (vitamine K)
                    </li>
                    <li>
                      • <strong>Femmes enceintes/allaitantes :</strong> Avis
                      médical recommandé
                    </li>
                    <li>
                      • <strong>Allergies :</strong> Prudence en cas d'allergie
                      aux algues
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-yellow-800 mb-3">
                💊 Effets secondaires possibles
              </h3>
              <p className="text-yellow-700">
                Les premiers jours, vous pourriez ressentir de légers troubles
                digestifs ou des nausées. Ces effets disparaissent généralement
                en quelques jours. Commencez par une demi-dose si nécessaire.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Où acheter */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Où acheter A3 Spirulina Pills en toute sécurité ?
          </h2>

          <Card className="border-2 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-800">
                    🛒 Site officiel Zinzino
                  </h3>
                  <p className="text-green-700">
                    Seul distributeur officiel de Xelliss en France
                  </p>
                </div>
                <Badge className="bg-green-600">Recommandé</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Prix officiel : 37,00 € TTC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Livraison rapide (48-72h)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Garantie produit authentique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Service client français</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold">Contenu de la boîte :</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 80 comprimés (1 mois de cure)</li>
                    <li>• Guide d'utilisation détaillé</li>
                    <li>• Certificat de qualité</li>
                  </ul>
                  <a href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/">
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      Acheter sur Zinzino
                    </Button>
                  </a>
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
                Les A3 Spirulina Pills ne sont pas disponibles en pharmacie, sur
                Amazon ou autres plateformes. Méfiez-vous des contrefaçons
                vendues ailleurs que sur le site officiel Zinzino.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Notre verdict final
          </h2>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-800 mb-3">
                    ✅ Pour qui c'est fait
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Personnes fatiguées chroniquement</li>
                    <li>• Sportifs en quête de récupération</li>
                    <li>• Végétariens/végans (apport en B12 et fer)</li>
                    <li>• Système immunitaire affaibli</li>
                    <li>• Recherche d'un complément naturel</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-red-800 mb-3">
                    ❌ Pour qui ce n'est pas fait
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Fumeurs (contre-indiqué)</li>
                    <li>• Personnes avec excès de fer</li>
                    <li>• Budget serré (37€/mois)</li>
                    <li>• Recherche de résultats immédiats</li>
                    <li>• Allergies aux algues</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-blue-800 mb-4">
                🎯 Notre recommandation
              </h3>
              <p className="text-blue-700 mb-4">
                Les A3 Spirulina Pills de Xelliss sont un excellent choix pour
                qui cherche un complément de spiruline de qualité premium. La
                concentration élevée en nutriments et la facilité d'utilisation
                en font un produit particulièrement adapté aux personnes
                actives.
              </p>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">4.6/5</div>
                  <div className="text-sm text-blue-600">Notre note</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">37€</div>
                  <div className="text-sm text-blue-600">Prix mensuel</div>
                </div>
              </div>
              <a href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302780/">
                <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Commencer ma cure aujourd'hui{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default A3SpirulinaPillsArticle;
