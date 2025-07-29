"use client";

import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Calculator,
  Heart,
  Shield,
  Zap,
  Users,
  Leaf,
  BookOpen,
  AlertTriangle,
  Gift,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { PhycocyanineResetSection } from "@/components/sections/phycocyanine-reset-section";

interface DosageResult {
  phycocyanine: number;
  phycoSciMl: number;
  frequency: string;
  error?: string;
}

export default function Page() {
  const [dosageParams, setDosageParams] = useState({
    age: "",
    weight: "",
    profile: "",
    goal: "",
  });
  const [calculatedDosage, setCalculatedDosage] = useState<DosageResult | null>(
    null
  );

  // Fonction de calcul de dosage
  const calculateDosage = () => {
    const age = parseInt(dosageParams.age);
    const weight = parseInt(dosageParams.weight);
    let baseDosage = 100; // mg de phycocyanine

    if (age < 3) {
      setCalculatedDosage({
        error: "Non recommandé pour les enfants de moins de 3 ans",
        phycocyanine: 0,
        phycoSciMl: 0,
        frequency: "",
      });
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
      case "sportif":
        baseDosage += 50;
        break;
      case "vegetarien":
        baseDosage += 25;
        break;
      case "senior":
        baseDosage += 15;
        break;
    }

    // Ajustements selon l'objectif
    switch (dosageParams.goal) {
      case "immunite":
        baseDosage += 20;
        break;
      case "sport":
        baseDosage += 30;
        break;
      case "antioxydant":
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
      frequency: age < 12 ? "1 fois par jour" : "1-2 fois par jour",
    });
  };

  const breadcrumbItems = [
    { label: "Phycocyanine", href: "/phycocyanine" },
    { label: "Guide Posologie" },
  ];

  // Données structurées pour le SEO - Article Schema
  const articleSchema = generateArticleSchema({
    title:
      "Guide Posologie Phycocyanine : Usage Optimal et Dosage Personnalisé",
    excerpt:
      "Guide complet sur le dosage optimal de phycocyanine selon votre profil, âge et objectifs santé. Simulateur personnalisé et conseils d'experts inclus.",
    datePublished: "2024-01-20",
    author: "Équipe Spirulina Health",
    category: "Phycocyanine",
    url: "phycocyanine/guide-posologie-phycocyanine-usage-optimal",
  });

  // FAQ Schema
  const faqSchema = generateFAQSchema([
    {
      question: "Quelle est la dose optimale de phycocyanine par jour ?",
      answer:
        "Pour un adulte en bonne santé, la dose optimale se situe entre 75-150mg de phycocyanine par jour. Avec PhycoSci X14, cela correspond à 5-11ml par jour.",
    },
    {
      question: "Puis-je donner de la phycocyanine à mon enfant ?",
      answer:
        "Pour les enfants de plus de 3 ans, une dose de 25-50mg par jour (2-4ml de PhycoSci X14) est généralement sûre. Consultez toujours un pédiatre.",
    },
    {
      question: "Quand prendre la phycocyanine pour une efficacité maximale ?",
      answer:
        "L'absorption est optimale le matin à jeun, 30 minutes avant le petit-déjeuner.",
    },
    {
      question: "Combien de temps pour voir les premiers effets ?",
      answer:
        "Les premiers effets se ressentent généralement après 2-3 semaines d'utilisation régulière. L'énergie et la vitalité s'améliorent d'abord, suivies des effets immunostimulants après 4-6 semaines.",
    },
    {
      question: "Puis-je prendre la phycocyanine avec d'autres suppléments ?",
      answer:
        "Oui, la phycocyanine se marie bien avec la vitamine C, le zinc, les oméga-3 et les probiotiques. Évitez la prise simultanée avec des anticoagulants sans avis médical.",
    },
  ]);

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

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
              Découvrez le dosage optimal de phycocyanine selon votre profil,
              âge et objectifs santé. Conseils d'experts et simulateur
              personnalisé inclus.
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
                  <span>Ce que vous allez découvrir :</span>
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
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                      target="_blank"
                    >
                      Découvrir PhycoSci X14
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
                Vous cherchez le <strong>dosage optimal de phycocyanine</strong>{" "}
                pour maximiser ses bienfaits ? Ce guide complet vous révèle tout
                ce que vous devez savoir sur la posologie de ce pigment bleu
                exceptionnel. Que vous soyez parent, sportif, végétarien ou
                simplement soucieux de votre santé, découvrez comment adapter
                votre consommation selon vos besoins spécifiques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La phycocyanine, surnommée "l'or bleu de la spiruline",
                nécessite un dosage précis pour révéler tout son potentiel
                antioxydant et immunostimulant. Dans ce guide, nous vous
                proposons un
                <strong> simulateur de dosage personnalisé</strong> et des
                recommandations d'experts pour une utilisation optimale.
              </p>
            </div>
          </div>
        </section>

        {/* Simulateur de dosage */}
        <section id="simulateur" className="container py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              🧮 Simulateur de Dosage Personnalisé
            </h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">
                  Calculez votre dosage optimal
                </CardTitle>
                <CardDescription>
                  Renseignez vos informations pour obtenir une recommandation
                  personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="age">Âge (années)</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="ex: 35"
                      value={dosageParams.age}
                      onChange={(e) =>
                        setDosageParams({
                          ...dosageParams,
                          age: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Poids (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="ex: 70"
                      value={dosageParams.weight}
                      onChange={(e) =>
                        setDosageParams({
                          ...dosageParams,
                          weight: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Profil</Label>
                    <Select
                      onValueChange={(value) =>
                        setDosageParams({ ...dosageParams, profile: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre profil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">
                          Adulte standard
                        </SelectItem>
                        <SelectItem value="sportif">
                          Sportif régulier
                        </SelectItem>
                        <SelectItem value="vegetarien">
                          Végétarien/Végan
                        </SelectItem>
                        <SelectItem value="senior">Senior (65+ ans)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Objectif principal</Label>
                    <Select
                      onValueChange={(value) =>
                        setDosageParams({ ...dosageParams, goal: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre objectif" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immunite">
                          Renforcer l'immunité
                        </SelectItem>
                        <SelectItem value="sport">
                          Performance sportive
                        </SelectItem>
                        <SelectItem value="antioxydant">
                          Protection antioxydante
                        </SelectItem>
                        <SelectItem value="energie">
                          Augmenter l'énergie
                        </SelectItem>
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
                              <p className="text-2xl font-bold text-blue-600">
                                {calculatedDosage.phycocyanine}mg
                              </p>
                              <p className="text-sm text-gray-600">
                                Phycocyanine/jour
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="text-2xl font-bold text-green-600">
                                {calculatedDosage.phycoSciMl}ml
                              </p>
                              <p className="text-sm text-gray-600">
                                PhycoSci X14/jour
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <p className="text-lg font-semibold text-purple-600">
                                {calculatedDosage.frequency}
                              </p>
                              <p className="text-sm text-gray-600">Fréquence</p>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <p className="font-semibold mb-2">
                              💡 Conseils personnalisés :
                            </p>
                            <ul className="space-y-1 text-lg">
                              <li>
                                • Prenez votre dose de préférence à jeun le
                                matin
                              </li>
                              <li>
                                • Diluez dans un grand verre d'eau fraîche
                              </li>
                              <li>
                                • Commencez par la moitié de la dose pendant 3-5
                                jours
                              </li>
                              <li>
                                • Observez votre réaction et ajustez si
                                nécessaire
                              </li>
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
        {/* Section Phycocyanine Reset - Composant réutilisable */}
        <PhycocyanineResetSection className="my-12" />
        {/* Pertinence historique */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              Pertinence historique : Anciennes utilisations de la phycocyanine
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Les Aztèques et le "Tecuitlatl"
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Les civilisations aztèques récoltaient déjà la spiruline dans
                  les lacs de Mexico, la consommant sous forme de galettes
                  appelées "tecuitlatl". Sans le savoir, ils bénéficiaient des
                  propriétés exceptionnelles de la phycocyanine avec des dosages
                  naturels de 5-10g de spiruline par jour.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Utilisation traditionnelle africaine
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Au Tchad, les populations du Kanem récoltent depuis des
                  siècles la spiruline du lac Tchad, la transformant en "dihé".
                  Cette tradition millénaire témoigne de l'intuition ancestrale
                  des bienfaits de la phycocyanine, avec des apports quotidiens
                  équivalents à 200-400mg de phycocyanine pure.
                </p>
              </div>
            </div>
            <Alert className="mt-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Évolution des dosages :</strong> Alors que les anciens
                consommaient 5-10g de spiruline par jour, nous savons
                aujourd'hui qu'un dosage précis de 100-150mg de phycocyanine
                pure est plus efficace et économique grâce aux techniques
                d'extraction modernes.
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
                  <p className="text-lg">
                    La phycocyanine neutralise les radicaux libres avec une
                    efficacité 40x supérieure à la vitamine E. Un dosage de
                    100mg équivaut à 4000mg de vitamine E.
                  </p>
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
                  <p className="text-lg">
                    À partir de 75mg/jour, elle stimule les cellules NK et
                    augmente la production d'interféron gamma de 12 à 20%.
                  </p>
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
                  <p className="text-lg">
                    Inhibe la COX-2 et réduit les cytokines pro-inflammatoires
                    de manière dose-dépendante. Effet optimal à 125mg/jour.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Biodisponibilité et absorption
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                La biodisponibilité de la phycocyanine dépend crucialement de sa
                forme et de son dosage. Les études montrent qu'une dose de{" "}
                <strong>100-150mg par jour</strong> en forme liquide atteint des
                pics plasmatiques optimaux après 2-3 heures.
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
                    <CardTitle className="text-green-700">
                      Renforcement immunitaire
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">
                          Dosage recommandé
                        </h4>
                        <p className="text-lg">
                          <strong>100-125mg/jour</strong> de phycocyanine
                        </p>
                        <p className="text-sm text-gray-600">
                          Équivalent à 7-9ml de PhycoSci X14
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          Résultats attendus
                        </h4>
                        <p className="text-lg">
                          Amélioration de 15-25% de l'activité des cellules NK
                          en 4-6 semaines
                        </p>
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
                    <CardTitle className="text-purple-700">
                      Protection antioxydante
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">
                          Dosage recommandé
                        </h4>
                        <p className="text-lg">
                          <strong>75-125mg/jour</strong> de phycocyanine
                        </p>
                        <p className="text-sm text-gray-600">
                          Équivalent à 5-9ml de PhycoSci X14
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Durée d'action</h4>
                        <p className="text-lg">
                          Protection continue pendant 8-12 heures
                        </p>
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
                    <CardTitle className="text-blue-700">
                      Santé cognitive
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">
                          Dosage recommandé
                        </h4>
                        <p className="text-lg">
                          <strong>100-150mg/jour</strong> de phycocyanine
                        </p>
                        <p className="text-sm text-gray-600">
                          Équivalent à 7-11ml de PhycoSci X14
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          Bénéfices observés
                        </h4>
                        <p className="text-lg">
                          Amélioration de la mémoire et concentration en 6-8
                          semaines
                        </p>
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
                  <CardTitle className="text-green-700">
                    👶 Enfants (3-12 ans)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-2">
                    25-50mg
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    2-4ml PhycoSci X14
                  </p>
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
                  <CardTitle className="text-blue-700">
                    🧑 Adultes (18-65 ans)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">
                    75-150mg
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    5-11ml PhycoSci X14
                  </p>
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
                  <p className="text-2xl font-bold text-purple-600 mb-2">
                    150-200mg
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    11-14ml PhycoSci X14
                  </p>
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
                  <CardTitle className="text-orange-700">
                    🌱 Végétariens/Végans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-orange-600 mb-2">
                    100-125mg/jour
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    7-9ml PhycoSci X14
                  </p>
                  <p className="text-lg">
                    Dosage légèrement supérieur pour compenser les carences
                    potentielles en fer et vitamine B12 souvent associées aux
                    régimes végétaux.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-500">
                <CardHeader>
                  <CardTitle className="text-gray-700">
                    👴 Seniors (65+ ans)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-gray-600 mb-2">
                    75-125mg/jour
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    5-9ml PhycoSci X14
                  </p>
                  <p className="text-lg">
                    Commencer par une dose plus faible et augmenter
                    progressivement. Surveillance médicale recommandée si prise
                    de médicaments.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <Calculator className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Règle d'or :</strong> Commencez toujours par la dose
                minimale et augmentez progressivement sur 1-2 semaines. Observez
                votre réaction et ajustez en conséquence.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Effets secondaires et précautions */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
              Effets secondaires potentiels et précautions
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-orange-700">
                    ⚠️ Effets secondaires possibles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-lg">
                      Légers (1-5% des utilisateurs) :
                    </p>
                    <ul className="text-lg space-y-1 ml-4">
                      <li>• Maux de tête temporaires</li>
                      <li>• Légères nausées si prise à jeun</li>
                      <li>• Coloration temporaire des urines</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      Rares (&lt;1% des utilisateurs) :
                    </p>
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
                  <CardTitle className="text-red-700">
                    🚫 Contre-indications
                  </CardTitle>
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
                <strong>Important :</strong> Consultez toujours un professionnel
                de santé avant de commencer une supplémentation, surtout si vous
                prenez des médicaments ou avez des conditions médicales
                particulières.
              </AlertDescription>
            </Alert>
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
                    <th className="p-4 text-left font-semibold text-lg">
                      Superaliment
                    </th>
                    <th className="p-4 text-center font-semibold text-lg">
                      Activité Antioxydante (ORAC)
                    </th>
                    <th className="p-4 text-center font-semibold text-lg">
                      Dosage/jour
                    </th>
                    <th className="p-4 text-center font-semibold text-lg">
                      Prix/mois
                    </th>
                    <th className="p-4 text-center font-semibold text-lg">
                      Biodisponibilité
                    </th>
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
                    <td className="p-4 text-center font-bold text-blue-600">
                      70,000
                    </td>
                    <td className="p-4 text-center">100-150mg</td>
                    <td className="p-4 text-center">35-45€</td>
                    <td className="p-4 text-center">
                      <Badge className="bg-green-100 text-green-800">
                        Excellente
                      </Badge>
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
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Bonne
                      </Badge>
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
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Modérée
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                🏆 Pourquoi choisir la phycocyanine ?
              </h3>
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

        {/* FAQ Section */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              Questions fréquemment posées
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    🤔 Quelle est la différence entre phycocyanine et spiruline
                    ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    La phycocyanine est le pigment bleu actif extrait de la
                    spiruline. 1g de spiruline contient environ 140mg de
                    phycocyanine. PhycoSci X14 est concentré 14 fois, vous
                    donnant plus de principes actifs avec moins de volume.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    ⏱️ Combien de temps pour voir les premiers effets ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Les premiers effets se ressentent généralement après 2-3
                    semaines d'utilisation régulière. L'énergie et la vitalité
                    s'améliorent d'abord, suivies des effets immunostimulants
                    après 4-6 semaines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    💊 Puis-je prendre la phycocyanine avec d'autres suppléments
                    ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Oui, la phycocyanine se marie bien avec la vitamine C, le
                    zinc, les oméga-3 et les probiotiques. Évitez la prise
                    simultanée avec des anticoagulants sans avis médical.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    🏃‍♂️ Dosage spécial pour les sportifs de haut niveau ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Les athlètes professionnels peuvent monter jusqu'à
                    250mg/jour en période d'entraînement intensif, répartis en
                    2-3 prises. Toujours avec suivi médical sportif.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    🌡️ Comment conserver la phycocyanine liquide ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Conservation au réfrigérateur entre 2-8°C, à l'abri de la
                    lumière. PhycoSci X14 se conserve 18 mois fermé, 2 mois
                    après ouverture. Agiter avant usage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              Ce que disent nos utilisateurs
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">Marie, 42 ans</CardTitle>
                  <CardDescription>
                    Mère de famille, végétarienne
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    "Avec 8ml de PhycoSci X14 chaque matin, je n'ai plus eu de
                    rhume cet hiver. Mes enfants aussi en prennent 3ml chacun.
                    Résultats impressionnants !"
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">Thomas, 35 ans</CardTitle>
                  <CardDescription>Triathlète amateur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    "12ml avant mes entraînements, 6ml après. Ma récupération a
                    été divisée par deux. Je recommande à tous les sportifs !"
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">Jean, 68 ans</CardTitle>
                  <CardDescription>Retraité actif</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    "À 68 ans, je prends 7ml chaque matin. Ma mémoire s'est
                    améliorée et j'ai plus d'énergie pour mes randonnées.
                    Formidable !"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Conclusion et récap */}
        <section className="container py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              En résumé : Votre guide posologie phycocyanine
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  🎯 Points clés à retenir
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Dose optimale adulte : <strong>100-150mg/jour</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      PhycoSci X14 équivalent : <strong>7-11ml/jour</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Prise optimale : <strong>matin à jeun</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Cure recommandée : <strong>8-12 semaines</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Premiers effets : <strong>2-4 semaines</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  ⚡ Conseils d'expert
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Commencez par 50% de la dose cible</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Augmentez progressivement sur 1 semaine</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Diluez dans 250ml d'eau fraîche</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Évitez les boissons chaudes</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Consultez un professionnel si besoin</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Prêt à commencer votre parcours phycocyanine ?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Utilisez notre simulateur pour calculer votre dosage
                personnalisé et découvrez PhycoSci X14, la forme la plus pure et
                biodisponible du marché.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="#simulateur">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculer mon dosage
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Link
                    href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                    target="_blank"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Découvrir PhycoSci X14
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact et support */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Phone className="h-8 w-8 text-blue-600 mr-3" />
              Besoin d'aide personnalisée ?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Support téléphonique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">Nos experts vous conseillent</p>
                  <p className="font-semibold">📞 +33 1 23 45 67 89</p>
                  <p className="text-sm text-gray-600">Lun-Ven 9h-18h</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Support email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">Réponse sous 24h</p>
                  <p className="font-semibold">📧 expert@spiruline-sante.com</p>
                  <p className="text-sm text-gray-600">
                    Conseils personnalisés
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">Rendez-vous personnalisé</p>
                  <p className="font-semibold">📍 Paris, Lyon, Marseille</p>
                  <p className="text-sm text-gray-600">Sur rendez-vous</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer CTA final */}
        <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              🌟 Commencez votre transformation aujourd'hui
            </h2>
            <p className="text-xl mb-8">
              Rejoignez les milliers de personnes qui ont déjà amélioré leur
              santé avec un dosage optimal de phycocyanine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brands-shop/xelliss-product/302771/"
                  target="_blank"
                >
                  <Gift className="mr-2 h-5 w-5" />
                  Commander PhycoSci X14 (62€)
                </Link>
              </Button>
            </div>
            <div className="mt-8 text-sm text-blue-100">
              <p>
                ✅ Livraison gratuite • ✅ Satisfait ou remboursé 30 jours • ✅
                Support expert inclus
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
