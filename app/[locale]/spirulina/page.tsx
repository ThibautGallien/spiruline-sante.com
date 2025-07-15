import { useTranslations } from 'next-intl';
import { generateSEOMetadata, generateProductSchema } from '@/lib/seo';
import { StructuredData } from '@/components/seo/structured-data';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Heart, Shield, Zap, Brain, Dumbbell } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return generateSEOMetadata({
    title: 'Spiruline : Bienfaits, Propriétés et Utilisation - Guide Complet',
    description: 'Découvrez tous les bienfaits de la spiruline, ses propriétés nutritionnelles exceptionnelles, son utilisation et dosage optimal pour votre santé.',
    keywords: ['spiruline', 'algue', 'protéines', 'vitamines', 'antioxydants', 'superfood', 'nutrition'],
    locale: locale as any,
    canonicalUrl: `/${locale}/spirulina`,
  });
}

export default function SpirulinaPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('products.spirulina');
  const commonT = useTranslations('common');

  const productSchema = generateProductSchema({
    name: t('title'),
    description: t('description'),
    benefits: [
      'Riche en protéines complètes',
      'Source de vitamines B12 et fer',
      'Propriétés antioxydantes',
      'Renforce le système immunitaire',
      'Améliore les performances sportives'
    ],
    locale
  });

  const benefits = [
    {
      icon: Dumbbell,
      title: 'Protéines Complètes',
      description: 'Contient tous les acides aminés essentiels, idéal pour les sportifs et végétariens'
    },
    {
      icon: Heart,
      title: 'Santé Cardiovasculaire',
      description: 'Aide à maintenir un taux de cholestérol normal et soutient la santé cardiaque'
    },
    {
      icon: Shield,
      title: 'Système Immunitaire',
      description: 'Renforce les défenses naturelles grâce à ses antioxydants et nutriments'
    },
    {
      icon: Brain,
      title: 'Énergie et Vitalité',
      description: 'Combat la fatigue et améliore les performances physiques et mentales'
    },
    {
      icon: Leaf,
      title: 'Détoxification',
      description: 'Aide à éliminer les toxines et métaux lourds de l\'organisme'
    },
    {
      icon: Zap,
      title: 'Anti-inflammatoire',
      description: 'Propriétés anti-inflammatoires naturelles pour le bien-être général'
    }
  ];

  const nutritionalFacts = [
    { nutrient: 'Protéines', value: '65g', unit: 'pour 100g' },
    { nutrient: 'Fer', value: '28mg', unit: 'pour 100g' },
    { nutrient: 'Vitamine B12', value: '250µg', unit: 'pour 100g' },
    { nutrient: 'Bêta-carotène', value: '140mg', unit: 'pour 100g' },
    { nutrient: 'Acide gamma-linolénique', value: '1,4g', unit: 'pour 100g' },
    { nutrient: 'Phycocyanine', value: '15g', unit: 'pour 100g' }
  ];

  const breadcrumbItems = [
    { label: t('title') }
  ];

  return (
    <>
      <StructuredData data={productSchema} />
      
      <div className="container py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="secondary">100% Naturel</Badge>
              <Badge variant="secondary">Riche en Protéines</Badge>
              <Badge variant="secondary">Antioxydants</Badge>
              <Badge variant="secondary">Vitamines B12</Badge>
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Découvrir nos produits
            </Button>
          </div>
          <div className="relative h-96">
            <Image
              src="https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Spiruline en poudre"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('benefits')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </section>

        {/* Nutritional Facts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Composition Nutritionnelle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nutritionalFacts.map((fact, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{fact.nutrient}</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">{fact.value}</span>
                      <p className="text-sm text-gray-500">{fact.unit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Usage and Dosage */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t('usage')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">En poudre</h4>
                  <p className="text-gray-600">Mélangez 1 à 2 cuillères à café dans un smoothie, jus de fruits, yaourt ou eau.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">En comprimés</h4>
                  <p className="text-gray-600">Prenez 3 à 6 comprimés par jour avec un verre d'eau, de préférence avant les repas.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Meilleur moment</h4>
                  <p className="text-gray-600">Le matin à jeun ou 30 minutes avant les repas pour une meilleure absorption.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t('dosage')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Débutant</h4>
                  <p className="text-gray-600">Commencez par 1g par jour (1/2 cuillère à café) pendant une semaine.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dose standard</h4>
                  <p className="text-gray-600">2 à 3g par jour (1 cuillère à café) pour un adulte en bonne santé.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sportifs</h4>
                  <p className="text-gray-600">Jusqu'à 5g par jour pour les besoins accrus en protéines et énergie.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à découvrir les bienfaits de la spiruline ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explorez notre sélection de produits de spiruline de qualité premium et commencez votre journey vers une meilleure santé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Voir nos produits
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${locale}/blog`}>
                Lire nos articles
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}