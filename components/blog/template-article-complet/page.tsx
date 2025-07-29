// app/blog/template-article-complet/page.tsx
import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumb } from "@/components/ui/breadcrumb";

// Import de tous les composants blog
import {
  BlogHeader,
  KeyPoints,
  ProductCard,
  BenefitsGrid,
  Testimonials,
  NutritionalTable,
  UsageGuide,
  AlertBox,
  BeforeAfter,
  FinalCTA,
  ContentSection,
  BlogIcons,
} from "@/components/blog/blog-components";

// Import des composants reset sections
import { SpirulineResetSection } from "@/components/sections/spiruline-reset-section";
import { PhycocyanineResetSection } from "@/components/sections/phycocyanine-reset-section";
import { Omega3ResetSection } from "@/components/sections/omega3-reset-section";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: "Template Article - Guide Complet des Composants Blog",
    description:
      "Article template montrant tous les composants disponibles pour créer facilement du contenu de blog optimisé SEO.",
    keywords: ["template", "composants", "blog", "spiruline", "guide"],
    canonicalUrl: "blog/template-article-complet",
  });
}

export default function TemplateArticleComplet() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Template Article Complet" },
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Template Article Complet",
          description:
            "Guide complet montrant tous les composants blog disponibles",
          datePublished: new Date().toISOString(),
          author: { "@type": "Person", name: "Thibaut" },
        }}
      />

      <article className="container px-4 md:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* 1. HEADER D'ARTICLE */}
        <BlogHeader
          title="Template Article Complet : Tous les Composants"
          excerpt="Cet article montre tous les composants disponibles pour créer facilement du contenu de blog optimisé. Copiez ce template et modifiez selon vos besoins !"
          badges={[
            { text: "Template", variant: "default" },
            { text: "Composants", variant: "secondary" },
            { text: "Guide", variant: "outline" },
          ]}
          author="Thibaut"
          date="30 janvier 2025"
          readingTime="10 min de lecture"
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 2. POINTS CLÉS */}
          <KeyPoints
            title="🎯 Ce template contient :"
            points={[
              "Tous les composants blog réutilisables",
              "Exemples d'utilisation concrets",
              "Structure SEO optimisée",
              "Code prêt à copier-coller",
              "Documentation inline",
              "Responsive design intégré",
            ]}
            variant="info"
          />

          {/* 3. SECTIONS RESET (composants existants) */}
          <section id="sections-reset">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Sections Reset Existantes
            </h2>

            <div className="space-y-8">
              <SpirulineResetSection />
              <PhycocyanineResetSection />
              <Omega3ResetSection />
            </div>
          </section>

          {/* 4. CARTE PRODUIT */}
          <section id="produit">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Carte Produit
            </h2>

            <ProductCard
              name="Exemple Spiruline Premium - 80 comprimés"
              description="2g de spiruline pure par dose quotidienne"
              price="37€"
              dosage="4 comprimés par jour"
              ctaText="Commander maintenant"
              ctaLink="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
              highlight={true}
            />
          </section>

          {/* 5. GRID DE BIENFAITS */}
          <BenefitsGrid
            title="Bienfaits Principaux"
            benefits={[
              {
                icon: BlogIcons.Energy,
                title: "Énergie naturelle",
                description:
                  "Soutient le métabolisme énergétique et réduit la fatigue chronique",
              },
              {
                icon: BlogIcons.Shield,
                title: "Immunité renforcée",
                description:
                  "Favorise le fonctionnement optimal du système immunitaire",
              },
              {
                icon: BlogIcons.Brain,
                title: "Fonctions cognitives",
                description:
                  "Améliore la concentration et les capacités mentales",
              },
              {
                icon: BlogIcons.Heart,
                title: "Santé cardiovasculaire",
                description: "Contribue à une fonction cardiaque normale",
              },
              {
                icon: BlogIcons.Eye,
                title: "Vision saine",
                description:
                  "Favorise une vision normale grâce aux antioxydants",
              },
              {
                icon: BlogIcons.Muscle,
                title: "Santé musculaire",
                description: "Maintient la masse musculaire et la récupération",
              },
            ]}
            columns={2}
          />

          {/* 6. SECTION CONTENU AVEC IMAGE */}
          <ContentSection
            title="Qu'est-ce que cette approche révolutionnaire ?"
            imageSrc="/LP_spiruline.png"
            imageAlt="Spiruline - Microalgue révolutionnaire"
            imagePosition="right"
            content={
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cette microalgue exceptionnelle concentre tous les nutriments
                  essentiels dans une forme hautement biodisponible. Utilisée
                  depuis des millénaires, elle est aujourd'hui reconnue par la
                  science moderne.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sa composition unique en fait un superaliment incontournable
                  pour tous ceux qui cherchent à optimiser leur santé
                  naturellement.
                </p>
              </div>
            }
            ctaButton={{
              text: "En savoir plus",
              link: "/spiruline",
              variant: "outline",
            }}
          />

          {/* 7. TABLEAU NUTRITIONNEL */}
          <NutritionalTable
            title="Composition Détaillée"
            subtitle="Pour 4 comprimés (dose quotidienne)"
            values={[
              { nutrient: "Poudre de spiruline", amount: "2 g", daily: "" },
              { nutrient: "Protéines", amount: "1,3 g", daily: "" },
              { nutrient: "Phycocyanine", amount: "0,34 mg", daily: "" },
              { nutrient: "Fer", amount: "2,4 mg", daily: "(17% VNR*)" },
              { nutrient: "Vitamine A", amount: "457 µg", daily: "(57% VNR*)" },
              { nutrient: "Vitamine K", amount: "21 µg", daily: "(28% VNR*)" },
            ]}
            footer="*VNR : Valeurs Nutritionnelles de Référence"
          />

          {/* 8. GUIDE D'UTILISATION */}
          <UsageGuide
            title="Mode d'emploi optimisé"
            steps={[
              {
                title: "Dosage standard",
                description: "4 comprimés par jour avec un verre d'eau",
              },
              {
                title: "Moment optimal",
                description: "Le matin à jeun ou entre les repas",
              },
              {
                title: "Durée de cure",
                description: "Minimum 3 mois pour des résultats optimaux",
              },
            ]}
            tips={[
              "Commencez par 2 comprimés les premiers jours",
              "Prenez avec de la vitamine C pour optimiser l'absorption",
              "Évitez de prendre avec du thé ou du café",
              "Intégrez dans une alimentation équilibrée",
            ]}
          />

          {/* 9. TÉMOIGNAGES */}
          <Testimonials
            title="Ce que disent nos clients"
            testimonials={[
              {
                name: "Marie",
                rating: 5,
                text: "Depuis que je prends cette spiruline, je me sens plus énergique et mon système immunitaire semble renforcé. Je recommande vivement !",
                verified: true,
                location: "Paris",
              },
              {
                name: "Thomas",
                rating: 5,
                text: "Excellent produit ! La qualité est au rendez-vous et les effets se font sentir rapidement. Parfait pour les sportifs.",
                verified: true,
                location: "Lyon",
              },
              {
                name: "Sophie",
                rating: 4,
                text: "Très satisfaite de mon achat. Les comprimés sont faciles à prendre et j'ai noté une amélioration de ma vitalité générale.",
                verified: true,
                location: "Marseille",
              },
            ]}
            averageRating={4.8}
            totalReviews={2847}
          />

          {/* 10. AVANT/APRÈS */}
          <BeforeAfter
            title="Résultats mesurables après 3 mois"
            before={{
              title: "Avant",
              items: [
                "Fatigue chronique constante",
                "Immunité affaiblie",
                "Difficultés de concentration",
                "Récupération lente après l'effort",
              ],
            }}
            after={{
              title: "Après 3 mois",
              items: [
                "Énergie stable toute la journée",
                "Résistance aux infections accrue",
                "Concentration améliorée",
                "Récupération optimisée",
              ],
            }}
          />

          {/* 11. ALERTES ET MISES EN GARDE */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Précautions importantes
            </h2>

            <AlertBox type="warning" title="⚠️ Précautions d'usage">
              <ul className="space-y-2">
                <li>
                  • <strong>Femmes enceintes/allaitantes :</strong> Consultez
                  votre médecin
                </li>
                <li>
                  • <strong>Allergies :</strong> Vérifiez la composition si
                  allergie aux algues
                </li>
                <li>
                  • <strong>Médicaments :</strong> Possible interaction avec
                  anticoagulants
                </li>
              </ul>
            </AlertBox>

            <AlertBox type="info" title="💡 Conseil d'expert">
              <p>
                Pour optimiser les bienfaits, associez la prise à une
                alimentation variée et équilibrée. Les effets se manifestent
                généralement après 2-3 semaines d'utilisation régulière.
              </p>
            </AlertBox>

            <AlertBox type="success" title="✅ Qualité garantie">
              <p>
                Nos produits sont testés en laboratoire et certifiés sans
                contaminants. Chaque lot fait l'objet de contrôles qualité
                stricts pour votre sécurité.
              </p>
            </AlertBox>
          </section>

          {/* 12. SECTION SCIENTIFIQUE */}
          <ContentSection
            title="Ce que dit la science"
            content={
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Plus de 1000 études scientifiques ont été publiées sur la
                  spiruline, confirmant ses propriétés nutritionnelles
                  exceptionnelles et ses bienfaits pour la santé.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    🔬 Études récentes :
                  </h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Réduction de 15% du cholestérol (étude 2023)</li>
                    <li>• Amélioration de 23% de l'endurance sportive</li>
                    <li>• Renforcement immunitaire démontré cliniquement</li>
                  </ul>
                </div>
              </div>
            }
          />

          {/* 13. FAQ INTÉGRÉE */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Questions fréquentes
            </h2>

            <div className="space-y-4">
              <AlertBox
                type="info"
                title="Combien de temps pour voir les effets ?"
              >
                <p>
                  Les premiers effets (énergie, vitalité) peuvent se faire
                  sentir dès 1-2 semaines. Pour les bienfaits complets, comptez
                  2-3 mois d'utilisation régulière.
                </p>
              </AlertBox>

              <AlertBox
                type="info"
                title="Peut-on prendre avec d'autres compléments ?"
              >
                <p>
                  Oui, la spiruline se marie bien avec la plupart des autres
                  compléments. En cas de doute, consultez un professionnel de
                  santé.
                </p>
              </AlertBox>

              <AlertBox type="info" title="Y a-t-il des effets secondaires ?">
                <p>
                  La spiruline est généralement très bien tolérée. Quelques
                  personnes peuvent ressentir de légers troubles digestifs les
                  premiers jours (commencez par une demi-dose si nécessaire).
                </p>
              </AlertBox>
            </div>
          </section>

          {/* 14. CTA FINAL IMPRESSIONNANT */}
          <FinalCTA
            title="🌟 Prêt à transformer votre santé naturellement ?"
            subtitle="Rejoignez les milliers de personnes qui ont découvert les bienfaits exceptionnels de la spiruline premium"
            ctaText="🛒 Commander votre cure maintenant"
            ctaLink="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
            backgroundColor="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600"
            responsive={true}
          />
        </div>
      </article>
    </>
  );
}
