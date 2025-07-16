'use client';

import { generateSEOMetadata } from '@/lib/seo';
import { StructuredData } from '@/components/seo/structured-data';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  ArrowRight, 
  Calculator, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Leaf, 
  BookOpen,
  AlertTriangle,
  Gift,
  Star
} from 'lucide-react';
import { NewsletterForm } from '@/components/forms/newsletter-form';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function Page() {
  const [dosageParams, setDosageParams] = useState({
    age: '',
    weight: '',
    profile: '',
    goal: ''
  });
  const [calculatedDosage, setCalculatedDosage] = useState(null);

  // Fonction de calcul de dosage
  const calculateDosage = () => {
    const age = parseInt(dosageParams.age);
    const weight = parseInt(dosageParams.weight);
    let baseDosage = 100; // mg de phycocyanine

    if (age < 3) {
      setCalculatedDosage({ error: "Non recommandé pour les enfants de moins de 3 ans" });
      return;
    }

    // Ajustements selon l'âge
    if (age < 12) baseDosage *= 0.5;
    else if (age < 18) baseDosage *= 0.75;

    // Ajustements selon le poids
    if (weight > 80) baseDosage += 25;
    if (weight < 50) baseDosage -= 15;

    // Ajustements selon le profil
    switch (dosageParams.profile) {
      case 'sportif':
        baseDosage += 50;
        break;
      case 'vegetarien':
        baseDosage += 25;
        break;
      case 'senior':
        baseDosage += 15;
        break;
    }

    // Ajustements selon l'objectif
    switch (dosageParams.goal) {
      case 'immunite':
        baseDosage += 20;
        break;
      case 'sport':
        baseDosage += 30;
        break;
      case 'antioxydant':
        baseDosage += 15;
        break;
    }

    // Limites de sécurité
    baseDosage = Math.max(25, Math.min(200, baseDosage));

    // Conversion en PhycoSci X14
    const phycoSciMl = Math.round((baseDosage / 14) * 10) / 10;

    setCalculatedDosage({
      phycocyanine: Math.round(baseDosage),
      phycoSciMl: phycoSciMl,
      frequency: age < 12 ? "1 fois par jour" : "1-2 fois par jour"
    });
  };

  const breadcrumbItems = [
    { label: 'Phycocyanine', href: '/phycocyanine' },
    { label: 'Guide Posologie' }
  ];

  // Données structurées pour le SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Guide Posologie Phycocyanine : Usage Optimal et Dosage Personnalisé",
    "description": "Guide complet sur le dosage optimal de phycocyanine selon votre profil, âge et objectifs santé. Includes simulateur personnalisé.",
    "datePublished": "2024-01-20",
    "dateModified": "2024-01-20",
    "author": {
      "@type": "Person",
      "name": "Équipe Spirulina Health"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Spirulina Health",
      "logo": {
        "@type": "ImageObject",
        "url": "https://spiruline-sante.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://spiruline-sante.com/phycocyanine/guide-posologie-phycocyanine-usage-optimal"
    },
    "articleSection": "Phycocyanine",
    "keywords": "posologie phycocyanine, dosage phycocyanine, phycocyanine enfant, simulateur dosage",
    "inLanguage": "fr-FR"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quelle est la dose optimale de phycocyanine par jour ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour un adulte en bonne santé, la dose optimale se situe entre 75-150mg de phycocyanine par jour. Avec PhycoSci X14, cela correspond à 5-11ml par jour."
        }
      },
      {
        "@type": "Question",
        "name": "Puis-je donner de la phycocyanine à mon enfant ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour les enfants de plus de 3 ans, une dose de 25-50mg par jour (2-4ml de PhycoSci X14) est généralement sûre. Consultez toujours un pédiatre."
        }
      },
      {
        "@type": "Question",
        "name": "Quand prendre la phycocyanine pour une efficacité maximale ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'absorption est optimale le matin à jeun, 30 minutes avant le petit-déjeuner."
        }
      }
    ]
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="container py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header */}
        <header className="container py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Guide Posologie Phycocyanine : Usage Optimal
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez le dosage optimal de phycocyanine selon votre profil, âge et objectifs santé. 
              Conseils d'experts et simulateur personnalisé inclus.
            </p>
          </div>
        </header>

        {/* Résumé bullet points */}
        <section className="container py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span>🌟 Ce que vous allez découvrir :</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid md:grid-cols-2 gap-4 text-lg">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Dosages optimaux selon votre profil</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Simulateur de dosage personnalisé</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Conseils pour enfants, adultes et sportifs</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Précautions et effets secondaires</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Conseils d'intégration alimentaire</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Recommandations produit expert</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
                    <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/" target="_blank">
                      🛒 Découvrir PhycoSci X14 (62€)
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Introduction */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vous cherchez le <strong>dosage optimal de phycocyanine</strong> pour maximiser ses bienfaits ? 
                Ce guide complet vous révèle tout ce que vous devez savoir sur la posologie de ce pigment bleu exceptionnel. 
                Que vous soyez parent, sportif, végétarien ou simplement soucieux de votre santé, découvrez comment adapter 
                votre consommation selon vos besoins spécifiques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La phycocyanine, surnommée "l'or bleu de la spiruline", nécessite un dosage précis pour révéler 
                tout son potentiel antioxydant et immunostimulant. Dans ce guide, nous vous proposons un 
                <strong> simulateur de dosage personnalisé</strong> et des recommandations d'experts pour une utilisation optimale.
              </p>
            </div>
          </div>
        </section>

        {/* Pertinence historique */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              Pertinence historique : Anciennes utilisations de la phycocyanine
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Les Aztèques et le "Tecuitlatl"</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Les civilisations aztèques récoltaient déjà la spiruline dans les lacs de Mexico, 
                  la consommant sous forme de galettes appelées "tecuitlatl". Sans le savoir, ils 
                  bénéficiaient des propriétés exceptionnelles de la phycocyanine.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Utilisation traditionnelle africaine</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Au Tchad, les populations du Kanem récoltent depuis des siècles la spiruline 
                  du lac Tchad, la transformant en "dihé". Cette tradition millénaire témoigne 
                  de l'intuition ancestrale des bienfaits de la phycocyanine.
                </p>
              </div>
            </div>
            <Alert className="mt-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Évolution des dosages :</strong> Alors que les anciens consommaient 5-10g de spiruline par jour, 
                nous savons aujourd'hui qu'un dosage précis de 50-200mg de phycocyanine pure est plus efficace.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* La chimie derrière la magie */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Zap className="h-8 w-8 text-blue-600 mr-3" />
              La chimie derrière la magie : Comment fonctionne la phycocyanine
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Activité Antioxydante</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">La phycocyanine neutralise les radicaux libres avec une efficacité 40x supérieure à la vitamine E.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Immunomodulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Stimule les cellules NK et augmente la production d'interféron gamma de 12 à 20%.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Action Anti-inflammatoire</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Inhibe la COX-2 et réduit les cytokines pro-inflammatoires de manière dose-dépendante.</p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Biodisponibilité et absorption</h3>
              <p className="text-lg text-gray-700 mb-4">
                La biodisponibilité de la phycocyanine dépend crucialement de sa forme et de son dosage. 
                Les études montrent qu'une dose de <strong>100-150mg par jour</strong> en forme liquide 
                atteint des pics plasmatiques optimaux après 2-3 heures.
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Absorption maximale à jeun (85-90%)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Forme liquide 3x plus biodisponible que la poudre
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Demi-vie plasmatique de 4-6 heures
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Principaux avantages */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-8 w-8 text-blue-600 mr-3" />
              Principaux avantages de la phycocyanine pour la santé globale
            </h2>
            
            <Tabs defaultValue="immunite" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="immunite">Immunité</TabsTrigger>
                <TabsTrigger value="sport">Sport</TabsTrigger>
                <TabsTrigger value="antioxydant">Antioxydant</TabsTrigger>
                <TabsTrigger value="cerveau">Cerveau</TabsTrigger>
              </TabsList>
              
              <TabsContent value="immunite" className="mt-6">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-green-700">Renforcement immunitaire</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Dosage recommandé</h4>
                        <p className="text-lg"><strong>100-125mg/jour</strong> de phycocyanine</p>
                        <p className="text-sm text-gray-600">Équivalent à 7-9ml de PhycoSci X14</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Résultats attendus</h4>
                        <p className="text-lg">Amélioration de 15-25% de l'activité des cellules NK en 4-6 semaines</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Réduction de 30% des infections respiratoires hivernales
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Augmentation de la production d'anticorps IgA
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Modulation équilibrée de la réponse inflammatoire
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sport" className="mt-6">
                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-orange-700">Performance sportive</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Dosage recommandé</h4>
                        <p className="text-lg"><strong>150-200mg/jour</strong> de phycocyanine</p>
                        <p className="text-sm text-gray-600">Équivalent à 11-14ml de PhycoSci X14</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Timing optimal</h4>
                        <p className="text-lg">30min avant l'effort + dose post-entraînement</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                        Amélioration de 12% de l'endurance aérobie
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                        Réduction de 25% des marqueurs de stress oxydatif
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                        Récupération accélérée de 20-30%
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="antioxydant" className="mt-6">
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="text-purple-700">Protection antioxydante</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Dosage recommandé</h4>
                        <p className="text-lg"><strong>75-125mg/jour</strong> de phycocyanine</p>
                        <p className="text-sm text-gray-600">Équivalent à 5-9ml de PhycoSci X14</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Durée d'action</h4>
                        <p className="text-lg">Protection continue pendant 8-12 heures</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                        Activité ORAC de 70 000 unités/gramme
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                        Protection ADN contre les dommages oxydatifs
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                        Ralentissement du vieillissement cellulaire
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="cerveau" className="mt-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-blue-700">Santé cognitive</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Dosage recommandé</h4>
                        <p className="text-lg"><strong>100-150mg/jour</strong> de phycocyanine</p>
                        <p className="text-sm text-gray-600">Équivalent à 7-11ml de PhycoSci X14</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Bénéfices observés</h4>
                        <p className="text-lg">Amélioration de la mémoire et concentration en 6-8 semaines</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        Neuroprotection contre l'inflammation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        Amélioration de la circulation cérébrale
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        Support de la neurogénèse
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Recommandations de dosage */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" />
              Recommandations de dosage : Bien faire les choses
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-green-700">👶 Enfants (3-12 ans)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-2">25-50mg</p>
                  <p className="text-sm text-gray-600 mb-4">2-4ml PhycoSci X14</p>
                  <ul className="space-y-1 text-lg">
                    <li>• Commencer par 25mg</li>
                    <li>• Augmenter progressivement</li>
                    <li>• Supervision parentale</li>
                    <li>• Prise avec repas</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-700">🧑 Adultes (18-65 ans)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">75-150mg</p>
                  <p className="text-sm text-gray-600 mb-4">5-11ml PhycoSci X14</p>
                  <ul className="space-y-1 text-lg">
                    <li>• Dose standard : 100mg</li>
                    <li>• Ajuster selon poids</li>
                    <li>• 1-2 prises par jour</li>
                    <li>• Cure de 8-12 semaines</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-purple-700">💪 Sportifs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-600 mb-2">150-200mg</p>
                  <p className="text-sm text-gray-600 mb-4">11-14ml PhycoSci X14</p>
                  <ul className="space-y-1 text-lg">
                    <li>• Dose pré-effort : 100mg</li>
                    <li>• Dose post-effort : 50mg</li>
                    <li>• Cycles de 4-6 semaines</li>
                    <li>• Hydratation renforcée</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-orange-700">🌱 Végétariens/Végans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-orange-600 mb-2">100-125mg/jour</p>
                  <p className="text-sm text-gray-600 mb-4">7-9ml PhycoSci X14</p>
                  <p className="text-lg">
                    Dosage légèrement supérieur pour compenser les carences potentielles 
                    en fer et vitamine B12 souvent associées aux régimes végétaux.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-gray-500">
                <CardHeader>
                  <CardTitle className="text-gray-700">👴 Seniors (65+ ans)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-gray-600 mb-2">75-125mg/jour</p>
                  <p className="text-sm text-gray-600 mb-4">5-9ml PhycoSci X14</p>
                  <p className="text-lg">
                    Commencer par une dose plus faible et augmenter progressivement. 
                    Surveillance médicale recommandée si prise de médicaments.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <Calculator className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Règle d'or :</strong> Commencez toujours par la dose minimale et augmentez 
                progressivement sur 1-2 semaines. Observez votre réaction et ajustez en conséquence.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Simulateur de dosage */}
        <section className="container py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" />
              🧮 Simulateur de Dosage Personnalisé
            </h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Calculez votre dosage optimal</CardTitle>
                <CardDescription>
                  Renseignez vos informations pour obtenir une recommandation personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">Consommation d'eau</span>
                      <Badge className="bg-green-600">-85%</Badge>
                    </div>
                    <p className="text-lg text-gray-600 mt-1">vs production protéines animales équivalentes</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">Surface agricole</span>
                      <Badge className="bg-blue-600">-95%</Badge>
                    </div>
                    <p className="text-lg text-gray-600 mt-1">vs culture soja pour même apport protéique</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">Émissions CO2</span>
                      <Badge className="bg-purple-600">-92%</Badge>
                    </div>
                    <p className="text-lg text-gray-600 mt-1">vs élevage bovin pour protéines équivalentes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">🌍 Choisir la phycocyanine, c'est choisir l'avenir</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Pour la planète :</h4>
                  <ul className="space-y-1 text-lg">
                    <li>• Réduction drastique de l'empreinte hydrique</li>
                    <li>• Préservation des terres arables</li>
                    <li>• Production sans pesticides ni engrais</li>
                    <li>• Recyclage des nutriments dans le système</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Pour votre santé :</h4>
                  <ul className="space-y-1 text-lg">
                    <li>• Source concentrée d'antioxydants naturels</li>
                    <li>• Alternative végétale aux suppléments synthétiques</li>
                    <li>• Biodisponibilité optimale des nutriments</li>
                    <li>• Soutien à l'agriculture du futur</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Innovations et recherche */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              L'avenir de la phycocyanine : Innovations et recherche
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Médecine personnalisée</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Développement de dosages adaptatifs basés sur la génétique individuelle et les biomarqueurs.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Nanotechnologie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Encapsulation en nanoparticules pour une biodisponibilité de 95% et une libération ciblée.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Applications thérapeutiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Recherches prometteuses dans les domaines oncologique, neurologique et cardiovasculaire.</p>
                </CardContent>
              </Card>
            </div>
            
            <Alert className="bg-blue-50 border-blue-200">
              <BookOpen className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Tendance 2025 :</strong> La phycocyanine devient le complément de référence des médecins 
                fonctionnels, avec des protocoles personnalisés basés sur l'analyse génétique et métabolomique.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Produit recommandé */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏆 Notre Recommandation Expert
            </h2>
            
            <Card className="overflow-hidden border-2 border-blue-200 shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">PhycoSci X14® par Xelliss</h3>
                    <p className="text-blue-100 text-lg">L'extrait de phycocyanine le plus concentré du marché</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">62€</div>
                    <div className="text-blue-100">250ml - 1 mois</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">✨ Pourquoi PhycoSci X14 ?</h4>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Concentration maximale :</strong> 14g/L de phycocyanine (112mg par dose de 8ml)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Extraction EPNA :</strong> Procédé naturel sans solvant préservant l'intégrité</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Spirulina maxima :</strong> Souche premium avec 20-30% plus de phycocyanine</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Forme liquide :</strong> Biodisponibilité optimale (85-90%)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4">📊 Valeurs nutritionnelles</h4>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="font-semibold mb-2 text-lg">Pour 8ml (dose quotidienne) :</p>
                      <div className="space-y-1 text-lg">
                        <div className="flex justify-between">
                          <span>Extrait aqueux total de spiruline</span>
                          <span className="font-semibold">7,8g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>dont phycocyanine</span>
                          <span className="font-semibold text-blue-600">112mg</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-lg">🧪 Ingrédients :</h5>
                      <p className="text-lg">Extrait aqueux de spiruline (Spirulina maxima), stabilisateur (glycérine d'origine végétale)</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">🎯 Mode d'emploi optimal :</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-lg">
                    <div>
                      <p className="font-semibold">Dosage :</p>
                      <p>8ml par jour (112mg phycocyanine)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Timing :</p>
                      <p>De préférence le matin à jeun</p>
                    </div>
                    <div>
                      <p className="font-semibold">Dilution :</p>
                      <p>Dans un grand verre d'eau fraîche</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg py-6 px-12">
                    <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/" target="_blank">
                      🛒 Commander PhycoSci X14 (62€)
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-lg text-gray-600 mt-3">
                    ✅ Livraison 48h • 💰 Paiement sécurisé • 🔄 Satisfaction garantie
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ❓ Questions Fréquentes sur la Posologie
            </h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quelle est la dose optimale de phycocyanine par jour ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Pour un adulte en bonne santé, la dose optimale se situe entre <strong>75-150mg de phycocyanine par jour</strong>. 
                    Avec PhycoSci X14, cela correspond à 5-11ml par jour. Commencez par 100mg (7ml) et ajustez selon vos besoins et votre ressenti.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Puis-je donner de la phycocyanine à mon enfant ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Pour les enfants de plus de 3 ans, une dose de <strong>25-50mg par jour</strong> (2-4ml de PhycoSci X14) est généralement sûre. 
                    Cependant, consultez toujours un pédiatre avant de commencer une supplémentation chez l'enfant.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quand prendre la phycocyanine pour une efficacité maximale ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    L'absorption est optimale <strong>le matin à jeun</strong>, 30 minutes avant le petit-déjeuner. 
                    Si vous pratiquez le sport, une prise 30 minutes avant l'effort peut aussi être bénéfique.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Combien de temps faut-il pour ressentir les effets ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Les premiers effets (énergie, récupération) peuvent être ressentis dès <strong>48-72 heures</strong>. 
                    Pour les bénéfices immunitaires et antioxydants complets, comptez <strong>4-6 semaines</strong> de prise régulière.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Y a-t-il des interactions avec des médicaments ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    La phycocyanine a très peu d'interactions connues. Cependant, par précaution, consultez votre médecin si vous prenez des 
                    <strong>anticoagulants</strong> ou des <strong>immunosuppresseurs</strong>. Un espacement de 2 heures avec d'autres suppléments est recommandé.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Peut-on faire un surdosage de phycocyanine ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    La phycocyanine est très sûre. Des doses jusqu'à <strong>500mg par jour</strong> ont été testées sans effets indésirables majeurs. 
                    Cependant, respectez les dosages recommandés (100-200mg) pour un usage optimal et économique.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              🎯 Conclusion : Votre Route vers une Supplémentation Optimale
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La phycocyanine représente aujourd'hui l'une des avancées les plus prometteuses en matière de 
                complémentation naturelle. Avec un <strong>dosage approprié de 100-150mg par jour</strong>, 
                cette protéine bleue exceptionnelle peut transformer votre vitalité, renforcer votre immunité 
                et optimiser vos performances.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Pour qui est fait ce guide ?</strong> Que vous soyez parent soucieux de la santé de vos enfants, 
                sportif en quête de performance, végétarien cherchant à optimiser vos apports, ou simplement 
                une personne proactive pour sa santé, les protocoles détaillés dans cet article vous donnent 
                toutes les clés pour une utilisation réussie.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">Dosage Personnalisé</h3>
                  <p className="text-lg text-gray-600">Utilisez notre simulateur pour un protocole adapté à vos besoins</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">Sécurité Optimale</h3>
                  <p className="text-lg text-gray-600">Respectez les précautions et consultez si nécessaire</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">Qualité Premium</h3>
                  <p className="text-lg text-gray-600">Choisissez PhycoSci X14 pour une efficacité maximale</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-xl text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">🚀 Prêt à Commencer Votre Transformation ?</h3>
              <p className="text-xl text-blue-100 mb-6">
                Rejoignez des milliers de personnes qui ont déjà optimisé leur santé avec la phycocyanine
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold text-lg py-6 px-8">
                  <Link href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/" target="_blank">
                    🛒 Commander PhycoSci X14 (62€)
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg py-6 px-8">
                  <Link href="/phycocyanine">
                    📚 En Savoir Plus sur la Phycocyanine
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-lg text-gray-600">
              ⚕️ <strong>Avertissement :</strong> Ce guide est fourni à titre informatif et ne remplace pas un avis médical professionnel. 
              Consultez votre médecin avant de commencer toute supplémentation, surtout si vous avez des conditions médicales particulières.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}2">
                    <Label htmlFor="age">Âge (années)</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="ex: 35"
                      value={dosageParams.age}
                      onChange={(e) => setDosageParams({...dosageParams, age: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Poids (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="ex: 70"
                      value={dosageParams.weight}
                      onChange={(e) => setDosageParams({...dosageParams, weight: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Profil</Label>
                    <Select onValueChange={(value) => setDosageParams({...dosageParams, profile: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre profil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Adulte standard</SelectItem>
                        <SelectItem value="sportif">Sportif régulier</SelectItem>
                        <SelectItem value="vegetarien">Végétarien/Végan</SelectItem>
                        <SelectItem value="senior">Senior (65+ ans)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Objectif principal</Label>
                    <Select onValueChange={(value) => setDosageParams({...dosageParams, goal: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre objectif" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immunite">Renforcer l'immunité</SelectItem>
                        <SelectItem value="sport">Performance sportive</SelectItem>
                        <SelectItem value="antioxydant">Protection antioxydante</SelectItem>
                        <SelectItem value="energie">Augmenter l'énergie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button 
                  onClick={calculateDosage} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                  disabled={!dosageParams.age || !dosageParams.weight}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculer mon dosage optimal
                </Button>
                
                {calculatedDosage && (
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Votre dosage personnalisé
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {calculatedDosage.error ? (
                        <Alert className="bg-red-50 border-red-200">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription className="text-red-800">
                            {calculatedDosage.error}
                          </AlertDescription>
                        </Alert>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="bg-white p-4 rounded-lg">
                              <p className="text-2xl font-bold text-blue-600">{calculatedDosage.phycocyanine}mg</p>
                              <p className="text-sm text-gray-600">Phycocyanine/jour</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="text-2xl font-bold text-green-600">{calculatedDosage.phycoSciMl}ml</p>
                              <p className="text-sm text-gray-600">PhycoSci X14/jour</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="text-lg font-semibold text-purple-600">{calculatedDosage.frequency}</p>
                              <p className="text-sm text-gray-600">Fréquence</p>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="font-semibold mb-2">💡 Conseils personnalisés :</p>
                            <ul className="space-y-1 text-lg">
                              <li>• Prenez votre dose de préférence à jeun le matin</li>
                              <li>• Diluez dans un grand verre d'eau fraîche</li>
                              <li>• Commencez par la moitié de la dose pendant 3-5 jours</li>
                              <li>• Observez votre réaction et ajustez si nécessaire</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Effets secondaires et précautions */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
              Effets secondaires potentiels et précautions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-orange-700">⚠️ Effets secondaires possibles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-lg">Légers (1-5% des utilisateurs) :</p>
                    <ul className="text-lg space-y-1 ml-4">
                      <li>• Maux de tête temporaires</li>
                      <li>• Légères nausées si prise à jeun</li>
                      <li>• Coloration temporaire des urines</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Rares (&lt;1% des utilisateurs) :</p>
                    <ul className="text-lg space-y-1 ml-4">
                      <li>• Réactions allergiques cutanées</li>
                      <li>• Troubles digestifs légers</li>
                      <li>• Vertiges transitoires</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-700">🚫 Contre-indications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-lg">Éviter en cas de :</p>
                    <ul className="text-lg space-y-1 ml-4">
                      <li>• Allergie aux algues marines</li>
                      <li>• Maladies auto-immunes actives</li>
                      <li>• Phénylcétonurie</li>
                      <li>• Grossesse et allaitement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Prudence si :</p>
                    <ul className="text-lg space-y-1 ml-4">
                      <li>• Prise d'anticoagulants</li>
                      <li>• Troubles thyroïdiens</li>
                      <li>• Enfants &lt; 3 ans</li>
                      <li>• Calculs rénaux récurrents</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Important :</strong> Consultez toujours un professionnel de santé avant de commencer 
                une supplémentation, surtout si vous prenez des médicaments ou avez des conditions médicales particulières.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container py-16 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white mb-8">
              <Gift className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                🎁 Recevez votre Guide Gratuit de la Phycocyanine !
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                + Dosages personnalisés et protocoles exclusifs d'experts
              </p>
            </div>
            
            <div className="max-w-md mx-auto mb-6">
              <NewsletterForm variant="dark" size="lg" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-100">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Guide PDF phycocyanine offert</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Protocoles d'experts exclusifs</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>Offres privilégiées -20%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison avec autres superaliments */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              Comparer la phycocyanine avec d'autres superaliments
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="p-4 text-left font-semibold text-lg">Superaliment</th>
                    <th className="p-4 text-center font-semibold text-lg">Activité Antioxydante (ORAC)</th>
                    <th className="p-4 text-center font-semibold text-lg">Dosage/jour</th>
                    <th className="p-4 text-center font-semibold text-lg">Prix/mois</th>
                    <th className="p-4 text-center font-semibold text-lg">Biodisponibilité</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-semibold">Phycocyanine</span>
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-blue-600">70,000</td>
                    <td className="p-4 text-center">100-150mg</td>
                    <td className="p-4 text-center">35-45€</td>
                    <td className="p-4 text-center">
                      <Badge className="bg-green-100 text-green-800">Excellente</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Astaxanthine</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">55,000</td>
                    <td className="p-4 text-center">4-8mg</td>
                    <td className="p-4 text-center">40-60€</td>
                    <td className="p-4 text-center">
                      <Badge className="bg-yellow-100 text-yellow-800">Bonne</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>Curcumine</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">127,000</td>
                    <td className="p-4 text-center">500-1000mg</td>
                    <td className="p-4 text-center">20-35€</td>
                    <td className="p-4 text-center">
                      <Badge className="bg-red-100 text-red-800">Faible</Badge>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span>Resvératrol</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">31,000</td>
                    <td className="p-4 text-center">100-500mg</td>
                    <td className="p-4 text-center">25-40€</td>
                    <td className="p-4 text-center">
                      <Badge className="bg-yellow-100 text-yellow-800">Modérée</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🏆 Pourquoi choisir la phycocyanine ?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Biodisponibilité optimale en forme liquide</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Action rapide (effets en 2-4 semaines)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Dosage précis et modulable</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Pas d'interactions médicamenteuses majeures</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Profil de sécurité excellent</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Source durable et écologique</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Intégration dans l'alimentation */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-3" />
              Intégrer la phycocyanine dans votre alimentation quotidienne
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">🕐 Moments optimaux de prise</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Matin à jeun (optimal)</p>
                        <p className="text-sm text-gray-600">Absorption maximale - 85-90%</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">30min avant le sport</p>
                        <p className="text-sm text-gray-600">Pour sportifs - boost performances</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Entre les repas</p>
                        <p className="text-sm text-gray-600">Si prise à jeun difficile - 70-80%</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">🥤 Modes de consommation</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-blue-700 mb-2 text-lg">Eau fraîche (recommandé)</h4>
                    <p className="text-lg">Diluez 8ml dans 250ml d'eau. Goût neutre, absorption optimale.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-green-700 mb-2 text-lg">Jus de fruits</h4>
                    <p className="text-lg">Mélangez avec jus de pomme ou orange. Masque le goût, absorption légèrement réduite.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-purple-700 mb-2 text-lg">Smoothie matinal</h4>
                    <p className="text-lg">Ajoutez à votre smoothie. Synergie avec fruits rouges et légumes verts.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-orange-700 mb-2 text-lg">Yaourt ou compote</h4>
                    <p className="text-lg">Pour enfants. Mélangez délicatement, consommez rapidement.</p>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">💡 Conseils d'optimisation</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg">⚡ Absorption</h4>
                  <ul className="text-lg space-y-1">
                    <li>• Conservez au frais après ouverture</li>
                    <li>• Buvez immédiatement après dilution</li>
                    <li>• Évitez le mélange avec produits laitiers</li>
                    <li>• Hydratez-vous bien (2L d'eau/jour)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">🔄 Cycles de prise</h4>
                  <ul className="text-lg space-y-1">
                    <li>• Cure de 8-12 semaines</li>
                    <li>• Pause de 2-4 semaines</li>
                    <li>• Reprise selon besoins</li>
                    <li>• Adaptation saisonnière possible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">📊 Suivi</h4>
                  <ul className="text-lg space-y-1">
                    <li>• Notez vos sensations quotidiennes</li>
                    <li>• Surveillez énergie et immunité</li>
                    <li>• Ajustez selon réactions</li>
                    <li>• Consultation médicale si besoin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Durabilité environnementale */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-3" />
              Le rôle de la phycocyanine dans la durabilité environnementale
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">🌱 Production durable PhycoSci X14</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Photobioréacteurs fermés</p>
                      <p className="text-lg text-gray-600">Système contrôlé sans contamination extérieure, utilisation optimale de l'eau et de la lumière</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Extraction EPNA naturelle</p>
                      <p className="text-lg text-gray-600">Procédé à base d'eau pure de montagne, sans solvants chimiques</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Faible empreinte carbone</p>
                      <p className="text-lg text-gray-600">70% moins d'émissions CO2 que la spiruline traditionnelle en bassins ouverts</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">📊 Impact environnemental comparé</h3>
                <div className="space-y-