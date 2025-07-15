import { generateSEOMetadata, generateArticleSchema, generateFAQSchema } from '@/lib/seo';
import { StructuredData } from '@/components/seo/structured-data';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
  Leaf
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Spiruline et Cheveux : Bienfaits, Utilisation et Résultats 2024',
    description: 'Découvrez comment la spiruline renforce vos cheveux, réduit la chute et stimule la croissance. Guide complet avec posologie, bienfaits et produits recommandés.',
    keywords: ['spiruline cheveux', 'spiruline chute cheveux', 'spiruline croissance cheveux', 'bienfaits spiruline cheveux', 'masque spiruline cheveux'],
    canonicalUrl: 'blog/spiruline-cheveux',
  });
}

export default function SpirulineCheveux() {
  const articleSchema = generateArticleSchema({
    title: 'Spiruline et Cheveux : Bienfaits, Utilisation et Résultats',
    excerpt: 'Guide complet sur les bienfaits de la spiruline pour les cheveux : réduction de la chute, stimulation de la croissance et conseils d\'utilisation.',
    datePublished: '2024-12-03',
    author: 'Thibaut',
    category: 'Beauté & Santé',
    url: 'blog/spiruline-cheveux'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'La spiruline peut-elle inverser les cheveux gris ?',
      answer: 'Non, mais grâce à ses antioxydants, elle peut prévenir l\'apparition prématurée de cheveux gris.'
    },
    {
      question: 'La spiruline provoque-t-elle la chute des cheveux ?',
      answer: 'Non, elle aide au contraire à prévenir la chute en renforçant les follicules pileux.'
    },
    {
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer: 'Les premiers effets apparaissent généralement après 4 à 6 semaines de cure régulière.'
    },
    {
      question: 'Qui ne peut pas prendre de spiruline ?',
      answer: 'Les femmes enceintes, les personnes souffrant de maladies auto-immunes ou de phénylcétonurie.'
    },
    {
      question: 'Quels sont les inconvénients de la spiruline ?',
      answer: 'Des effets secondaires légers comme des troubles digestifs peuvent survenir au début de la consommation.'
    }
  ]);

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Spiruline et Cheveux' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Ralentit la chute des cheveux',
      description: 'Grâce à sa teneur élevée en fer et acides aminés essentiels pour une bonne oxygénation du cuir chevelu.'
    },
    {
      icon: Sparkles,
      title: 'Stimule la croissance capillaire',
      description: 'Riche en protéines de haute qualité et vitamine B8 (biotine) pour renforcer les follicules pileux.'
    },
    {
      icon: Shield,
      title: 'Assainit le cuir chevelu',
      description: 'Antioxydants et propriétés anti-inflammatoires qui purifient et réduisent les irritations.'
    },
    {
      icon: Zap,
      title: 'Favorise la synthèse de kératine',
      description: 'Stimule la production naturelle de kératine pour des cheveux plus épais et résistants.'
    }
  ];

  const nutrients = [
    { name: 'Protéines', benefit: 'Cheveux forts et résistants', icon: '💪' },
    { name: 'Fer', benefit: 'Prévient la chute capillaire', icon: '🩸' },
    { name: 'Zinc', benefit: 'Cheveux éclatants et brillants', icon: '✨' },
    { name: 'Vitamines B', benefit: 'Revitalise et hydrate', icon: '🌿' }
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
              Guide Expert
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Beauté Naturelle
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spiruline et Cheveux : Bienfaits, Utilisation et Résultats
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
            <span>Par Thibaut</span>
            <span>•</span>
            <span>3 décembre 2024</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>8 min de lecture</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            La spiruline est une algue riche en nutriments qui joue un rôle clé dans la santé des cheveux. 
            En réduisant la chute, en stimulant la croissance, et en assainissant le cuir chevelu, elle s'impose 
            comme une solution naturelle pour renforcer et revitaliser la chevelure.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Image principale */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Spiruline en poudre pour cheveux - Super-aliment naturel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold mb-2">La spiruline, un superaliment pour vos cheveux</h2>
              <p className="text-white/90">Découvrez le pouvoir naturel de cette micro-algue exceptionnelle</p>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction : La spiruline, un superaliment pour vos cheveux
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La spiruline, souvent qualifiée de « superaliment », est une micro-algue d'eau douce riche en protéines, 
                fer, zinc, et vitamines. Ces nutriments en font un allié de choix pour la santé, mais aussi pour la beauté, 
                notamment celle des cheveux. Que vous cherchiez à réduire la chute, accélérer la croissance ou simplement 
                améliorer l'apparence de votre chevelure, la spiruline pourrait bien être la solution que vous recherchez.
              </p>
            </div>
          </section>

          {/* CTA Newsletter */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl mb-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              🎁 Recevez votre guide gratuit sur la spiruline !
            </h3>
            <p className="text-gray-600 mb-4">
              Conseils d'experts, recettes et offres exclusives directement dans votre boîte mail
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/#newsletter">
                Télécharger le guide gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Bienfaits section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les bienfaits de la spiruline pour vos cheveux
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Détails des bienfaits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ralentit la chute des cheveux</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La chute de cheveux est un problème fréquent, souvent causé par le stress, les carences nutritionnelles, 
                  ou des déséquilibres hormonaux. La spiruline agit comme un complément naturel pour réduire ce phénomène 
                  grâce à sa teneur élevée en fer et en acides aminés, essentiels pour une bonne oxygénation du cuir chevelu.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>💡 Le saviez-vous ?</strong> Selon une étude publiée dans le Journal of Applied Phycology, 
                    les nutriments contenus dans la spiruline favorisent la synthèse de la kératine, une protéine clé 
                    dans la structure des cheveux.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Stimule la croissance capillaire</h3>
                <p className="text-gray-700 leading-relaxed">
                  La spiruline est particulièrement riche en protéines de haute qualité, composées d'acides aminés essentiels. 
                  Ces derniers sont nécessaires pour construire les tissus capillaires et stimuler la croissance des cheveux. 
                  De plus, la spiruline contient de la vitamine B8 (biotine), connue pour son rôle dans la pousse capillaire.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assainit le cuir chevelu</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un cuir chevelu sain est la base de cheveux forts et éclatants. La spiruline contient des antioxydants 
                  et des propriétés anti-inflammatoires qui purifient le cuir chevelu, réduisent les irritations, 
                  et préviennent les pellicules. En assainissant cette zone clé, elle aide à créer un environnement 
                  optimal pour la pousse des cheveux.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Favorise la synthèse de la kératine</h3>
                <p className="text-gray-700 leading-relaxed">
                  La kératine est une protéine essentielle qui constitue environ 95 % de la fibre capillaire. 
                  La spiruline, grâce à ses acides aminés et sa richesse en fer, stimule la production naturelle 
                  de kératine, rendant ainsi les cheveux plus épais, brillants et résistants.
                </p>
              </div>
            </div>
          </section>

          {/* Nutriments essentiels */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi les nutriments de la spiruline sont essentiels pour les cheveux ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nutrients.map((nutrient, index) => (
                <Card key={index} className="border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{nutrient.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{nutrient.name}</h3>
                    </div>
                    <p className="text-gray-700">{nutrient.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Les protéines pour des cheveux forts</h3>
                <p className="text-gray-700 leading-relaxed">
                  Les cheveux sont constitués de protéines, principalement de kératine. Un apport suffisant en protéines, 
                  comme celles présentes dans la spiruline, est donc crucial pour prévenir la casse et améliorer 
                  la résistance des cheveux.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le fer pour prévenir la chute</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le fer est indispensable pour transporter l'oxygène vers les follicules pileux. Une carence en fer, 
                  fréquente chez les femmes, peut entraîner une chute de cheveux. La spiruline, riche en fer biodisponible, 
                  aide à prévenir ce problème en soutenant la croissance capillaire.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le zinc pour des cheveux éclatants</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le zinc joue un rôle clé dans la régulation du sébum et la protection des follicules pileux contre 
                  les radicaux libres. En consommant de la spiruline, vous offrez à vos cheveux une protection antioxydante 
                  naturelle, tout en maintenant leur éclat.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Les vitamines pour revitaliser les cheveux</h3>
                <p className="text-gray-700 leading-relaxed">
                  La spiruline est une source précieuse de vitamines, notamment les vitamines B1, B2, B3, et B8. 
                  Ces dernières sont essentielles pour la santé globale des cheveux, favorisant leur hydratation, 
                  leur croissance, et leur résistance aux agressions extérieures.
                </p>
              </div>
            </div>
          </section>

          {/* Utilisation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment utiliser la spiruline pour améliorer vos cheveux ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Sous quelle forme consommer la spiruline ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Comprimés</h4>
                      <p className="text-gray-600 text-sm">Idéaux pour une consommation quotidienne facile</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Poudre</h4>
                      <p className="text-gray-600 text-sm">Parfaite pour l'ajouter à des smoothies ou des recettes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Masques capillaires</h4>
                      <p className="text-gray-600 text-sm">Appliqués directement sur les cheveux pour un effet renforcé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Posologie recommandée</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">En interne</h4>
                    <p className="text-green-700 text-sm">Consommez entre 3 et 5 grammes par jour</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">En externe</h4>
                    <p className="text-blue-700 text-sm">
                      Mélangez une cuillère à soupe de spiruline en poudre avec de l'eau ou de l'huile d'argan 
                      pour créer un masque à appliquer pendant 20 minutes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Astuces pour maximiser les bienfaits de la spiruline
              </h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span>Associez la spiruline à d'autres compléments comme la biotine ou l'huile de bourrache</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span>Alternez les masques capillaires avec des bains d'huiles pour nourrir vos cheveux en profondeur</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Produit Xelliss - Section Premium */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-8 rounded-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  La Spiruline Xelliss : Une Spiruline d'Exception
                </h2>
                <p className="text-green-100 text-lg mb-6">
                  Découvrez la spiruline A3 de Xelliss, l'une des spirulines les plus pures et les plus riches 
                  en nutriments disponibles sur le marché.
                </p>
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
                  <Link href="/blog/a3-spirulina-pills-de-xelliss-avis">
                    Découvrir la Spiruline Xelliss Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Une spiruline pure et innovante grâce à Xelliss</h3>
              <p className="text-gray-700 leading-relaxed">
                La spiruline A3 de Xelliss est cultivée dans des photobioréacteurs fermés, garantissant une qualité 
                exceptionnelle en éliminant tout risque de contamination par des polluants comme les métaux lourds 
                ou les bactéries. Contrairement aux spirulines traditionnelles, elle bénéficie d'un contrôle précis 
                de la lumière, du pH, de la température et des nutriments.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900">Pourquoi choisir la spiruline Xelliss ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Richesse nutritionnelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Fer bioassimilable 2x supérieur</li>
                      <li>• 65-70% de protéines complètes</li>
                      <li>• Antioxydants puissants</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pureté inégalée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Culture en photobioréacteurs fermés</li>
                      <li>• Exempt de contaminants</li>
                      <li>• Contrôle qualité strict</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Complément polyvalent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Renforce cheveux et muscles</li>
                      <li>• Booste l'immunité</li>
                      <li>• Améliore l'énergie</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
{/* Précautions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Précautions et effets secondaires de la spiruline
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-xl">Qui devrait éviter la spiruline ?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span>Les femmes enceintes ou allaitantes sans avis médical</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span>Les personnes souffrant de phénylcétonurie</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span>Les personnes atteintes de maladies auto-immunes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Beaker className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-xl">Effets secondaires possibles</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Les effets secondaires de la spiruline sont rares mais peuvent inclure des troubles digestifs 
                    légers ou des maux de tête au début de la consommation.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>💡 Conseil :</strong> Commencez par une dose réduite et augmentez progressivement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Résultats */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Combien de temps avant d'avoir des résultats sur vos cheveux ?
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">4-6</div>
                  <div className="text-sm text-gray-600">semaines</div>
                  <div className="text-sm text-gray-700 mt-2">Premiers effets visibles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-sm text-gray-600">mois</div>
                  <div className="text-sm text-gray-700 mt-2">Cure recommandée</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
                  <div className="text-sm text-gray-600">mois</div>
                  <div className="text-sm text-gray-700 mt-2">Résultats durables</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-6">
              Les résultats varient selon les individus. Généralement, les premiers effets (cheveux plus brillants, 
              chute réduite) apparaissent après 4 à 6 semaines de consommation régulière. Une cure de trois mois 
              est recommandée pour des effets durables.
            </p>
          </section>

          {/* Conseils quotidiens */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conseils pour prendre soin de vos cheveux au quotidien
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center p-4">
                <div className="text-3xl mb-2">🥗</div>
                <h3 className="font-semibold mb-2">Alimentation équilibrée</h3>
                <p className="text-sm text-gray-600">Riche en nutriments essentiels</p>
              </Card>
              
              <Card className="text-center p-4">
                <div className="text-3xl mb-2">💧</div>
                <h3 className="font-semibold mb-2">Hydratation</h3>
                <p className="text-sm text-gray-600">Masques naturels réguliers</p>
              </Card>
              
              <Card className="text-center p-4">
                <div className="text-3xl mb-2">🌡️</div>
                <h3 className="font-semibold mb-2">Protection</h3>
                <p className="text-sm text-gray-600">Éviter la chaleur excessive</p>
              </Card>
              
              <Card className="text-center p-4">
                <div className="text-3xl mb-2">🌿</div>
                <h3 className="font-semibold mb-2">Produits naturels</h3>
                <p className="text-sm text-gray-600">Éviter les produits chimiques</p>
              </Card>
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-6">
              Associer la spiruline à une routine capillaire saine vous permettra de maximiser ses bienfaits 
              pour des cheveux plus forts, brillants et en pleine santé.
            </p>
          </section>

          {/* CTA Produits */}
          <section className="mb-12">
            <div className="bg-gray-900 text-white p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold mb-4">
                Prêt à transformer vos cheveux avec la spiruline ?
              </h2>
              <p className="text-gray-300 mb-6">
                Découvrez notre sélection de produits premium pour des cheveux éclatants de santé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400" asChild>
                  <Link href="/blog/a3-spirulina-pills-de-xelliss-avis">
                    Spiruline Xelliss Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                  <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop" target="_blank">
                    Boutique Zinzino
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion : La spiruline, l'alliée incontournable pour vos cheveux
            </h2>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                En réduisant la chute, stimulant la croissance, et améliorant la santé globale des cheveux, 
                la spiruline est un complément naturel et efficace. Que ce soit sous forme de cure interne 
                ou de soins externes, elle offre une solution complète pour des cheveux forts, brillants, 
                et en pleine santé.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              FAQ : Vos questions sur la spiruline et les cheveux
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  La spiruline peut-elle inverser les cheveux gris ?
                </h4>
                <p className="text-gray-700">
                  Non, mais grâce à ses antioxydants, elle peut prévenir l'apparition prématurée de cheveux gris.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  La spiruline provoque-t-elle la chute des cheveux ?
                </h4>
                <p className="text-gray-700">
                  Non, elle aide au contraire à prévenir la chute en renforçant les follicules pileux.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Combien de temps faut-il pour voir des résultats ?
                </h4>
                <p className="text-gray-700">
                  Les premiers effets apparaissent généralement après 4 à 6 semaines de cure régulière.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Qui ne peut pas prendre de spiruline ?
                </h4>
                <p className="text-gray-700">
                  Les femmes enceintes, les personnes souffrant de maladies auto-immunes ou de phénylcétonurie.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Quels sont les inconvénients de la spiruline ?
                </h4>
                <p className="text-gray-700">
                  Des effets secondaires légers comme des troubles digestifs peuvent survenir au début de la consommation.
                </p>
              </div>
            </div>
          </section>

          {/* Articles connexes */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Articles connexes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Bienfaits spiruline pour la peau</h4>
                  <p className="text-sm text-gray-600 mb-4">Découvrez comment la spiruline peut améliorer votre peau</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog/bienfaits-spiruline-peau-guide-complet">
                      Lire l'article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Spiruline et sport</h4>
                  <p className="text-sm text-gray-600 mb-4">Optimisez vos performances avec la spiruline</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog/spiruline-sport">
                      Lire l'article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Spiruline et fer</h4>
                  <p className="text-sm text-gray-600 mb-4">La solution naturelle contre les carences en fer</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog/spiruline-fer">
                      Lire l'article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sources */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sources</h3>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
              <ul className="space-y-1">
                <li>• Journal of Applied Phycology – Étude sur les bienfaits capillaires de la spiruline</li>
                <li>• Healthline – Les nutriments clés de la spiruline</li>
                <li>• Articles scientifiques sur les carences nutritionnelles et la santé capillaire</li>
              </ul>
            </div>
          </section>

          {/* CTA Final Newsletter */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ne manquez plus nos conseils beauté et santé !
            </h3>
            <p className="text-green-100 mb-6">
              Recevez nos derniers articles, guides exclusifs et offres spéciales directement dans votre boîte mail
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link href="/#newsletter">
                S'abonner à la newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}import { generateSEOMetadata, generateArticleSchema, generateFAQSchema } from '@/lib/seo';
import { StructuredData } from '@/components/seo/structured-data';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
  Leaf
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Spiruline et Cheveux : Bienfaits, Utilisation et Résultats 2024',
    description: 'Découvrez comment la spiruline renforce vos cheveux, réduit la chute et stimule la croissance. Guide complet avec posologie, bienfaits et produits recommandés.',
    keywords: ['spiruline cheveux', 'spiruline chute cheveux', 'spiruline croissance cheveux', 'bienfaits spiruline cheveux', 'masque spiruline cheveux'],
    canonicalUrl: 'blog/spiruline-cheveux',
  });
}

export default function SpirulineCheveux() {
  const articleSchema = generateArticleSchema({
    title: 'Spiruline et Cheveux : Bienfaits, Utilisation et Résultats',
    excerpt: 'Guide complet sur les bienfaits de la spiruline pour les cheveux : réduction de la chute, stimulation de la croissance et conseils d\'utilisation.',
    datePublished: '2024-12-03',
    author: 'Thibaut',
    category: 'Beauté & Santé',
    url: 'blog/spiruline-cheveux'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'La spiruline peut-elle inverser les cheveux gris ?',
      answer: 'Non, mais grâce à ses antioxydants, elle peut prévenir l\'apparition prématurée de cheveux gris.'
    },
    {
      question: 'La spiruline provoque-t-elle la chute des cheveux ?',
      answer: 'Non, elle aide au contraire à prévenir la chute en renforçant les follicules pileux.'
    },
    {
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer: 'Les premiers effets apparaissent généralement après 4 à 6 semaines de cure régulière.'
    },
    {
      question: 'Qui ne peut pas prendre de spiruline ?',
      answer: 'Les femmes enceintes, les personnes souffrant de maladies auto-immunes ou de phénylcétonurie.'
    },
    {
      question: 'Quels sont les inconvénients de la spiruline ?',
      answer: 'Des effets secondaires légers comme des troubles digestifs peuvent survenir au début de la consommation.'
    }
  ]);

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Spiruline et Cheveux' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Ralentit la chute des cheveux',
      description: 'Grâce à sa teneur élevée en fer et acides aminés essentiels pour une bonne oxygénation du cuir chevelu.'
    },
    {
      icon: Sparkles,
      title: 'Stimule la croissance capillaire',
      description: 'Riche en protéines de haute qualité et vitamine B8 (biotine) pour renforcer les follicules pileux.'
    },
    {
      icon: Shield,
      title: 'Assainit le cuir chevelu',
      description: 'Antioxydants et propriétés anti-inflammatoires qui purifient et réduisent les irritations.'
    },
    {
      icon: Zap,
      title: 'Favorise la synthèse de kératine',
      description: 'Stimule la production naturelle de kératine pour des cheveux plus épais et résistants.'
    }
  ];

  const nutrients = [
    { name: 'Protéines', benefit: 'Cheveux forts et résistants', icon: '💪' },
    { name: 'Fer', benefit: 'Prévient la chute capillaire', icon: '🩸' },
    { name: 'Zinc', benefit: 'Cheveux éclatants et brillants', icon: '✨' },
    { name: 'Vitamines B', benefit: 'Revitalise et hydrate', icon: '🌿' }
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
              Guide Expert
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Beauté Naturelle
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spiruline et Cheveux : Bienfaits, Utilisation et Résultats
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
            <span>Par Thibaut</span>
            <span>•</span>
            <span>3 décembre 2024</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>8 min de lecture</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            La spiruline est une algue riche en nutriments qui joue un rôle clé dans la santé des cheveux. 
            En réduisant la chute, en stimulant la croissance, et en assainissant le cuir chevelu, elle s'impose 
            comme une solution naturelle pour renforcer et revitaliser la chevelure.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Image principale */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Spiruline en poudre pour cheveux - Super-aliment naturel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold mb-2">La spiruline, un superaliment pour vos cheveux</h2>
              <p className="text-white/90">Découvrez le pouvoir naturel de cette micro-algue exceptionnelle</p>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction : La spiruline, un superaliment pour vos cheveux
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La spiruline, souvent qualifiée de « superaliment », est une micro-algue d'eau douce riche en protéines, 
                fer, zinc, et vitamines. Ces nutriments en font un allié de choix pour la santé, mais aussi pour la beauté, 
                notamment celle des cheveux. Que vous cherchiez à réduire la chute, accélérer la croissance ou simplement 
                améliorer l'apparence de votre chevelure, la spiruline pourrait bien être la solution que vous recherchez.
              </p>
            </div>
          </section>

          {/* CTA Newsletter */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl mb-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              🎁 Recevez votre guide gratuit sur la spiruline !
            </h3>
            <p className="text-gray-600 mb-4">
              Conseils d'experts, recettes et offres exclusives directement dans votre boîte mail
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/#newsletter">
                Télécharger le guide gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Bienfaits section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les bienfaits de la spiruline pour vos cheveux
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Détails des bienfaits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ralentit la chute des cheveux</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La chute de cheveux est un problème fréquent, souvent causé par le stress, les carences nutritionnelles, 
                  ou des déséquilibres hormonaux. La spiruline agit comme un complément naturel pour réduire ce phénomène 
                  grâce à sa teneur élevée en fer et en acides aminés, essentiels pour une bonne oxygénation du cuir chevelu.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>💡 Le saviez-vous ?</strong> Selon une étude publiée dans le Journal of Applied Phycology, 
                    les nutriments contenus dans la spiruline favorisent la synthèse de la kératine, une protéine clé 
                    dans la structure des cheveux.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Stimule la croissance capillaire</h3>
                <p className="text-gray-700 leading-relaxed">
                  La spiruline est particulièrement riche en protéines de haute qualité, composées d'acides aminés essentiels. 
                  Ces derniers sont nécessaires pour construire les tissus capillaires et stimuler la croissance des cheveux. 
                  De plus, la spiruline contient de la vitamine B8 (biotine), connue pour son rôle dans la pousse capillaire.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assainit le cuir chevelu</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un cuir chevelu sain est la base de cheveux forts et éclatants. La spiruline contient des antioxydants 
                  et des propriétés anti-inflammatoires qui purifient le cuir chevelu, réduisent les irritations, 
                  et préviennent les pellicules. En assainissant cette zone clé, elle aide à créer un environnement 
                  optimal pour la pousse des cheveux.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Favorise la synthèse de la kératine</h3>
                <p className="text-gray-700 leading-relaxed">
                  La kératine est une protéine essentielle qui constitue environ 95 % de la fibre capillaire. 
                  La spiruline, grâce à ses acides aminés et sa richesse en fer, stimule la production naturelle 
                  de kératine, rendant ainsi les cheveux plus épais, brillants et résistants.
                </p>
              </div>
            </div>
          </section>

          {/* Nutriments essentiels */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi les nutriments de la spiruline sont essentiels pour les cheveux ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nutrients.map((nutrient, index) => (
                <Card key={index} className="border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{nutrient.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{nutrient.name}</h3>
                    </div>
                    <p className="text-gray-700">{nutrient.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Les protéines pour des cheveux forts</h3>
                <p className="text-gray-700 leading-relaxed">
                  Les cheveux sont constitués de protéines, principalement de kératine. Un apport suffisant en protéines, 
                  comme celles présentes dans la spiruline, est donc crucial pour prévenir la casse et améliorer 
                  la résistance des cheveux.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le fer pour prévenir la chute</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le fer est indispensable pour transporter l'oxygène vers les follicules pileux. Une carence en fer, 
                  fréquente chez les femmes, peut entraîner une chute de cheveux. La spiruline, riche en fer biodisponible, 
                  aide à prévenir ce problème en soutenant la croissance capillaire.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le zinc pour des cheveux éclatants</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le zinc joue un rôle clé dans la régulation du sébum et la protection des follicules pileux contre 
                  les radicaux libres. En consommant de la spiruline, vous offrez à vos cheveux une protection antioxydante 
                  naturelle, tout en maintenant leur éclat.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Les vitamines pour revitaliser les cheveux</h3>
                <p className="text-gray-700 leading-relaxed">
                  La spiruline est une source précieuse de vitamines, notamment les vitamines B1, B2, B3, et B8. 
                  Ces dernières sont essentielles pour la santé globale des cheveux, favorisant leur hydratation, 
                  leur croissance, et leur résistance aux agressions extérieures.
                </p>
              </div>
            </div>
          </section>

          {/* Utilisation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment utiliser la spiruline pour améliorer vos cheveux ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Sous quelle forme consommer la spiruline ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Comprimés</h4>
                      <p className="text-gray-600 text-sm">Idéaux pour une consommation quotidienne facile</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Poudre</h4>
                      <p className="text-gray-600 text-sm">Parfaite pour l'ajouter à des smoothies ou des recettes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Masques capillaires</h4>
                      <p className="text-gray-600 text-sm">Appliqués directement sur les cheveux pour un effet renforcé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Posologie recommandée</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">En interne</h4>
                    <p className="text-green-700 text-sm">Consommez entre 3 et 5 grammes par jour</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">En externe</h4>
                    <p className="text-blue-700 text-sm">
                      Mélangez une cuillère à soupe de spiruline en poudre avec de l'eau ou de l'huile d'argan 
                      pour créer un masque à appliquer pendant 20 minutes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Astuces pour maximiser les bienfaits de la spiruline
              </h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span>Associez la spiruline à d'autres compléments comme la biotine ou l'huile de bourrache</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span>Alternez les masques capillaires avec des bains d'huiles pour nourrir vos cheveux en profondeur</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Produit Xelliss - Section Premium */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-8 rounded-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  La Spiruline Xelliss : Une Spiruline d'Exception
                </h2>
                <p className="text-green-100 text-lg mb-6">
                  Découvrez la spiruline A3 de Xelliss, l'une des spirulines les plus pures et les plus riches 
                  en nutriments disponibles sur le marché.
                </p>
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
                  <Link href="/blog/a3-spirulina-pills-de-xelliss-avis">
                    Découvrir la Spiruline Xelliss Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Une spiruline pure et innovante grâce à Xelliss</h3>
              <p className="text-gray-700 leading-relaxed">
                La spiruline A3 de Xelliss est cultivée dans des photobioréacteurs fermés, garantissant une qualité 
                exceptionnelle en éliminant tout risque de contamination par des polluants comme les métaux lourds 
                ou les bactéries. Contrairement aux spirulines traditionnelles, elle bénéficie d'un contrôle précis 
                de la lumière, du pH, de la température et des nutriments.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900">Pourquoi choisir la spiruline Xelliss ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Richesse nutritionnelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Fer bioassimilable 2x supérieur</li>
                      <li>• 65-70% de protéines complètes</li>
                      <li>• Antioxydants puissants</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pureté inégalée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Culture en photobioréacteurs fermés</li>
                      <li>• Exempt de contaminants</li>
                      <li>• Contrôle qualité strict</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Complément polyvalent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Renforce cheveux et muscles</li>
                      <li>• Booste l'immunité</li>
                      <li>• Améliore l'énergie</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>