// components/blog/blog-components.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Info,
  Lightbulb,
  Target,
  Award,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// =====================================================
// 1. COMPOSANT D'EN-TÊTE D'ARTICLE
// =====================================================

interface BlogHeaderProps {
  title: string;
  excerpt: string;
  badges?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  }[];
  author?: string;
  date?: string;
  readingTime?: string;
}

export function BlogHeader({
  title,
  excerpt,
  badges = [],
  author = "Thibaut",
  date,
  readingTime = "5 min de lecture",
}: BlogHeaderProps) {
  return (
    <header className="max-w-4xl mx-auto text-center mb-12">
      {badges.length > 0 && (
        <div className="flex items-center justify-center space-x-2 mb-4">
          {badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant || "secondary"}>
              {badge.text}
            </Badge>
          ))}
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h1>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">{excerpt}</p>

      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
        <span>
          Par <strong>{author}</strong>
        </span>
        {date && (
          <>
            <span>•</span>
            <span>{date}</span>
          </>
        )}
        <span>•</span>
        <span>{readingTime}</span>
      </div>
    </header>
  );
}

// =====================================================
// 2. POINTS CLÉS / RÉSUMÉ
// =====================================================

interface KeyPointsProps {
  title?: string;
  points: string[];
  variant?: "success" | "info" | "warning";
}

export function KeyPoints({
  title = "🌟 Ce que vous allez découvrir :",
  points,
  variant = "success",
}: KeyPointsProps) {
  const borderColor = {
    success: "border-l-green-500",
    info: "border-l-blue-500",
    warning: "border-l-orange-500",
  }[variant];

  return (
    <Card className={`border-l-4 ${borderColor}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// =====================================================
// 3. CARTE PRODUIT AVEC PRIX
// =====================================================

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  dosage: string;
  ctaText?: string;
  ctaLink: string;
  highlight?: boolean;
}

export function ProductCard({
  name,
  description,
  price,
  dosage,
  ctaText = "Commander maintenant",
  ctaLink,
  highlight = false,
}: ProductCardProps) {
  return (
    <div
      className={`p-4 rounded-lg ${highlight ? "bg-green-50" : "bg-gray-50"}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-green-800">💊 {name}</p>
          <p className="text-green-700">{description}</p>
          <p className="text-sm text-gray-600 mt-1">{dosage}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-800">{price}</p>
          <Link href={ctaLink} target="_blank">
            <Button className="mt-2 bg-green-600 hover:bg-green-700">
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// 4. GRID DE BIENFAITS AVEC ICÔNES
// =====================================================

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  title?: string;
  benefits: Benefit[];
  columns?: 1 | 2 | 3;
}

export function BenefitsGrid({
  title = "Bienfaits scientifiquement prouvés",
  benefits,
  columns = 2,
}: BenefitsGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

      <div className={`grid ${gridCols} gap-6`}>
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
    </section>
  );
}

// =====================================================
// 5. TÉMOIGNAGES
// =====================================================

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  verified?: boolean;
  location?: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
  averageRating?: number;
  totalReviews?: number;
}

export function Testimonials({
  title = "Témoignages clients vérifiés",
  testimonials,
  averageRating,
  totalReviews,
}: TestimonialsProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

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

              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">
                    {testimonial.name}
                  </span>
                  {testimonial.location && (
                    <p className="text-xs text-gray-500">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {averageRating && totalReviews && (
        <Card className="bg-blue-50">
          <CardContent className="p-6 text-center">
            <p className="text-blue-800 font-medium">
              ⭐ Note moyenne : {averageRating}/5 basée sur{" "}
              {totalReviews.toLocaleString()} avis clients
            </p>
          </CardContent>
        </Card>
      )}
    </section>
  );
}

// =====================================================
// 6. TABLEAU NUTRITIONNEL / COMPOSITION
// =====================================================

interface NutritionalValue {
  nutrient: string;
  amount: string;
  daily?: string;
}

interface NutritionalTableProps {
  title?: string;
  subtitle?: string;
  values: NutritionalValue[];
  footer?: string;
}

export function NutritionalTable({
  title = "Composition et valeurs nutritionnelles",
  subtitle = "Pour 4 comprimés (dose quotidienne recommandée)",
  values,
  footer = "*VNR : Valeurs Nutritionnelles de Référence",
}: NutritionalTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
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
              {values.map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-2">{item.nutrient}</td>
                  <td className="p-2 font-medium">{item.amount}</td>
                  <td className="p-2 text-green-600">{item.daily || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {footer && <p className="text-xs text-gray-500 mt-2">{footer}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

// =====================================================
// 7. GUIDE D'UTILISATION ÉTAPES
// =====================================================

interface UsageStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface UsageGuideProps {
  title?: string;
  steps: UsageStep[];
  tips?: string[];
}

export function UsageGuide({
  title = "Comment utiliser ce produit ?",
  steps,
  tips = [],
}: UsageGuideProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

      <Card>
        <CardHeader>
          <CardTitle>Posologie et conseils d'utilisation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                    {step.icon || index + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {tips.length > 0 && (
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">
                  💡 Conseils d'expert
                </h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  {tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

// =====================================================
// 8. ALERTE / MISE EN GARDE
// =====================================================

interface AlertBoxProps {
  type: "warning" | "danger" | "info" | "success";
  title: string;
  children: React.ReactNode;
}

export function AlertBox({ type, title, children }: AlertBoxProps) {
  const styles = {
    warning: {
      border: "border-l-yellow-500",
      bg: "bg-yellow-50",
      icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
      titleColor: "text-yellow-800",
    },
    danger: {
      border: "border-l-red-500",
      bg: "bg-red-50",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      titleColor: "text-red-800",
    },
    info: {
      border: "border-l-blue-500",
      bg: "bg-blue-50",
      icon: <Info className="h-6 w-6 text-blue-600" />,
      titleColor: "text-blue-800",
    },
    success: {
      border: "border-l-green-500",
      bg: "bg-green-50",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      titleColor: "text-green-800",
    },
  }[type];

  return (
    <Card className={`border-l-4 ${styles.border} ${styles.bg}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          {styles.icon}
          <div className="space-y-3">
            <h3 className={`font-semibold ${styles.titleColor}`}>{title}</h3>
            <div className="text-gray-700">{children}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// =====================================================
// 9. COMPARAISON AVANT/APRÈS
// =====================================================

interface BeforeAfterProps {
  title?: string;
  before: {
    title: string;
    items: string[];
    color?: string;
  };
  after: {
    title: string;
    items: string[];
    color?: string;
  };
}

export function BeforeAfter({
  title = "Résultats mesurables",
  before,
  after,
}: BeforeAfterProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className={`border-l-4 ${before.color || "border-l-red-500"}`}>
          <CardHeader>
            <CardTitle
              className={
                before.color?.includes("red") ? "text-red-700" : "text-red-700"
              }
            >
              {before.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {before.items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className={`border-l-4 ${after.color || "border-l-green-500"}`}>
          <CardHeader>
            <CardTitle
              className={
                after.color?.includes("green")
                  ? "text-green-700"
                  : "text-green-700"
              }
            >
              {after.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {after.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// =====================================================
// 10. CTA FINAL IMPRESSIONNANT
// =====================================================

interface FinalCTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
  responsive?: boolean;
}

export function FinalCTA({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundColor = "bg-gradient-to-br from-blue-600 via-orange-600 to-red-600",
  responsive = true,
}: FinalCTAProps) {
  return (
    <div
      className={`${backgroundColor} text-white p-8 rounded-2xl text-center`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-blue-100 mb-6 text-lg">{subtitle}</p>
      <Button
        size="lg"
        className={`bg-white text-orange-600 hover:bg-gray-100 font-semibold px-4 sm:px-8 py-4 ${
          responsive ? "w-full sm:w-auto text-sm sm:text-lg" : ""
        }`}
        asChild
      >
        <Link href={ctaLink} target="_blank">
          {ctaText}
        </Link>
      </Button>
    </div>
  );
}

// =====================================================
// 11. SECTION DE CONTENU AVEC IMAGE
// =====================================================

interface ContentSectionProps {
  title: string;
  content: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  ctaButton?: {
    text: string;
    link: string;
    variant?: "default" | "outline";
  };
}

export function ContentSection({
  title,
  content,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  ctaButton,
}: ContentSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {imageSrc && (
          <div
            className={`relative ${
              imagePosition === "left" ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <div className="relative h-80 w-full rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="prose max-w-none">{content}</div>

          {ctaButton && (
            <div className="text-center">
              <Button
                size="lg"
                variant={ctaButton.variant || "default"}
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <Link href={ctaButton.link} target="_blank">
                  {ctaButton.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// ICÔNES PRÉDÉFINIES POUR FACILITER L'USAGE
// =====================================================

export const BlogIcons = {
  Energy: <Zap className="h-5 w-5" />,
  Shield: <Shield className="h-5 w-5" />,
  Brain: <Brain className="h-5 w-5" />,
  Heart: <Heart className="h-5 w-5" />,
  Eye: <Eye className="h-5 w-5" />,
  Muscle: <Dumbbell className="h-5 w-5" />,
  Star: <Star className="h-5 w-5" />,
  Award: <Award className="h-5 w-5" />,
  Target: <Target className="h-5 w-5" />,
  Clock: <Clock className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Lightbulb: <Lightbulb className="h-5 w-5" />,
};
