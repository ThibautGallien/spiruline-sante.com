#!/bin/bash

# Script pour créer toutes les routes du site spiruline-sante.com
# Basé sur l'analyse des URLs les plus populaires

echo "🚀 Création de toutes les routes pour préserver le SEO..."

# Fonction pour créer une page basique
create_page() {
    local path="$1"
    local title="$2"
    local description="$3"
    
    # Créer le dossier si nécessaire
    mkdir -p "$(dirname "$path")"
    
    # Créer le fichier page.tsx
    cat > "$path" << EOF
import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: '$title',
    description: '$description',
    canonicalUrl: '$(echo $path | sed 's|app||' | sed 's|/page\.tsx||' | sed 's|^/||')',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        $title
      </h1>
      <p className="text-xl text-gray-600">
        $description
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
EOF
    
    echo "✅ Créé: $path"
}

# 1. Pages principales de sections
create_page "app/spiruline/page.tsx" "Spiruline : Guide Complet" "Tout savoir sur la spiruline : bienfaits, composition, posologie et conseils d'experts."

create_page "app/phycocyanine/page.tsx" "Phycocyanine : Propriétés et Bienfaits" "Découvrez la phycocyanine, le pigment bleu de la spiruline aux vertus antioxydantes exceptionnelles."

create_page "app/blog/page.tsx" "Blog Spiruline et Santé Naturelle" "Articles, conseils et actualités sur la spiruline, phycocyanine et compléments naturels."

# 2. Pages spiruline
create_page "app/spiruline/la-spiruline-cest-quoi/page.tsx" "Qu'est-ce que la spiruline ?" "Découvrez cette micro-algue exceptionnelle, son origine et pourquoi elle révolutionne la nutrition."

create_page "app/spiruline/composition-spiruline/page.tsx" "Composition de la spiruline" "Analyse complète des nutriments : protéines, vitamines, minéraux et antioxydants de la spiruline."

create_page "app/spiruline/les-bienfaits-spiruline/page.tsx" "Les bienfaits de la spiruline" "Tous les bienfaits scientifiquement prouvés de la spiruline pour votre santé et votre bien-être."

create_page "app/spiruline/spiruline-posologie/page.tsx" "Posologie et dosage de la spiruline" "Comment bien doser la spiruline selon vos besoins : conseils d'experts et recommandations."

# 3. Pages phycocyanine
create_page "app/phycocyanine/guide-complet-phycocyanine/page.tsx" "Guide complet de la phycocyanine" "Le guide ultime pour comprendre la phycocyanine, ses propriétés et ses applications."

create_page "app/phycocyanine/phycocyanine-proprietes-bienfaits-applications/page.tsx" "Phycocyanine : propriétés, bienfaits et applications" "Propriétés thérapeutiques de la phycocyanine et ses applications pour la santé."

create_page "app/phycocyanine/composition-phycocyanine-guide-complet/page.tsx" "Composition de la phycocyanine" "Structure moléculaire et composition de cette protéine bleue exceptionnelle."

create_page "app/phycocyanine/guide-posologie-phycocyanine-usage-optimal/page.tsx" "Posologie phycocyanine : usage optimal" "Comment utiliser la phycocyanine efficacement : dosages et conseils d'utilisation."

# 4. Articles blog populaires (Zinzino/Xelliss)
create_page "app/blog/avis-zinzino-arnaque-ou-produits-de-qualite/page.tsx" "Avis Zinzino : arnaque ou produits de qualité ?" "Notre analyse complète et objective des produits Zinzino : qualité, prix et avis clients."

create_page "app/blog/carafe-filtrante-xelliss-xelliwater/page.tsx" "Carafe filtrante Xelliss XelliWater : test et avis" "Test complet de la carafe filtrante Xelliss : efficacité, qualité et rapport qualité-prix."

create_page "app/blog/x-gold-xelliss-avis/page.tsx" "X-Gold Xelliss : avis et analyse" "Avis détaillé sur X-Gold de Xelliss : composition, bienfaits et retours d'expérience."

create_page "app/blog/phycosci-x14-xelliss/page.tsx" "PhycoSci X14 Xelliss : présentation" "Tout savoir sur PhycoSci X14 de Xelliss : caractéristiques et informations produit."

create_page "app/blog/avis-phycosci-x14-xelliss/page.tsx" "Avis PhycoSci X14 Xelliss" "Notre avis complet sur PhycoSci X14 : efficacité, composition et retours clients."

create_page "app/blog/balance-oil-zinzino-avis/page.tsx" "Balance Oil Zinzino : avis et test" "Test approfondi de Balance Oil Zinzino : composition, bienfaits et avis utilisateurs."

create_page "app/blog/xelliss-produits/page.tsx" "Produits Xelliss : gamme complète" "Découvrez tous les produits de la gamme Xelliss : caractéristiques et analyses."

create_page "app/blog/avis-xelliss-arnaque-ou-opportunite/page.tsx" "Avis Xelliss : arnaque ou opportunité ?" "Analyse objective de la marque Xelliss : produits, business model et avis clients."

create_page "app/blog/xelliss-produit/page.tsx" "Xelliss produit : guide complet" "Guide complet des produits Xelliss : présentation, caractéristiques et conseils."

# 5. Articles blog populaires (spiruline/santé)
create_page "app/blog/spiruline-cheveux/page.tsx" "Spiruline et cheveux : bienfaits et utilisation" "Comment la spiruline peut améliorer la santé de vos cheveux : conseils et témoignages."

create_page "app/blog/bienfaits-spiruline-peau-guide-complet/page.tsx" "Bienfaits de la spiruline pour la peau" "Guide complet des bienfaits de la spiruline pour une peau éclatante et en bonne santé."

create_page "app/blog/spiruline-fer/page.tsx" "Spiruline et fer : la solution contre la carence" "Pourquoi la spiruline est une excellente source de fer et comment lutter contre l'anémie."

create_page "app/blog/omega-3-cheveux/page.tsx" "Oméga-3 et cheveux : guide complet" "Les bienfaits des oméga-3 pour la santé capillaire et la beauté des cheveux."

create_page "app/blog/spiruline-sport/page.tsx" "Spiruline et sport : performances optimisées" "Comment la spiruline peut améliorer vos performances sportives et votre récupération."

create_page "app/blog/les-bienfaits-des-omega-3-contre-la-chute-de-cheveux/page.tsx" "Oméga-3 contre la chute de cheveux" "Comment les oméga-3 peuvent aider à prévenir et traiter la chute de cheveux."

create_page "app/blog/spiruline-perte-de-poids/page.tsx" "Spiruline et perte de poids" "La spiruline peut-elle aider à perdre du poids ? Conseils et méthodes efficaces."

create_page "app/blog/omega-3-bienfaits-pour-la-peau/page.tsx" "Oméga-3 : bienfaits pour la peau" "Comment les oméga-3 contribuent à une peau saine, hydratée et éclatante."

create_page "app/blog/spiruline-danger-fumeur/page.tsx" "Spiruline et tabac : dangers pour les fumeurs ?" "La spiruline est-elle dangereuse pour les fumeurs ? Analyse et recommandations."

create_page "app/blog/spiruline-danger-coeur/page.tsx" "Spiruline et cœur : effets cardiovasculaires" "Impact de la spiruline sur la santé cardiovasculaire : bienfaits et précautions."

# 6. Articles spécialisés
create_page "app/blog/boutique-natura4ever-xelliss-zinzino/page.tsx" "Boutique Natura4Ever, Xelliss et Zinzino" "Comparatif des boutiques en ligne Natura4Ever, Xelliss et Zinzino : produits et services."

create_page "app/blog/natura4ever-xelliss/page.tsx" "Natura4Ever vs Xelliss : comparaison" "Comparaison détaillée entre Natura4Ever et Xelliss : produits, prix et qualité."

create_page "app/blog/devenir-distributeur-xelliss/page.tsx" "Devenir distributeur Xelliss" "Comment devenir distributeur Xelliss : conditions, avantages et démarches à suivre."

create_page "app/blog/a3-spirulina-pills-de-xelliss-avis/page.tsx" "A3 Spirulina Pills Xelliss : avis" "Test et avis sur les gélules A3 Spirulina Pills de Xelliss : efficacité et qualité."

create_page "app/blog/Zinzino-Omega-3/page.tsx" "Zinzino Oméga-3 : analyse complète" "Analyse des compléments oméga-3 Zinzino : composition, bienfaits et avis."

# 7. Pages de catégories
create_page "app/avis-client-spiruline/page.tsx" "Avis clients spiruline" "Témoignages et avis de nos clients sur les produits à base de spiruline."

create_page "app/blog-spiruline-phycocyanine/page.tsx" "Blog spiruline et phycocyanine" "Articles spécialisés sur la spiruline et la phycocyanine : conseils, études et actualités."

# 8. Articles complémentaires
create_page "app/blog/phycocyanine-remede-naturel-contre-stress/page.tsx" "Phycocyanine contre le stress" "La phycocyanine comme remède naturel pour gérer le stress et l'anxiété."

create_page "app/blog/vitamine-d-faut-il-la-prendre-a-jeun/page.tsx" "Vitamine D à jeun : conseils" "Faut-il prendre la vitamine D à jeun ? Conseils pour une absorption optimale."

create_page "app/blog/spiruline-et-omega-3-le-duo-pour-une-sante-optimale/page.tsx" "Spiruline et oméga-3 : le duo santé" "Pourquoi associer spiruline et oméga-3 pour une santé optimale : synergie et bienfaits."

create_page "app/blog/vitamine-d-yeux/page.tsx" "Vitamine D et santé des yeux" "Impact de la vitamine D sur la santé oculaire et la prévention des troubles visuels."

create_page "app/blog/phycocyanine-liquide/page.tsx" "Phycocyanine liquide : avantages" "Pourquoi choisir la phycocyanine liquide : absorption, efficacité et conseils d'usage."

create_page "app/blog/spiruline-enfants-bienfaits/page.tsx" "Spiruline pour enfants : bienfaits et précautions" "La spiruline convient-elle aux enfants ? Bienfaits, dosages et recommandations."

create_page "app/blog/spiruline-et-gaz-intestinaux/page.tsx" "Spiruline et problèmes digestifs" "La spiruline peut-elle causer des gaz ? Conseils pour éviter les troubles digestifs."

create_page "app/blog/spiruline-et-grossesse/page.tsx" "Spiruline et grossesse : ce qu'il faut savoir" "La spiruline pendant la grossesse : bienfaits, risques et recommandations médicales."

# 9. Pages non classées importantes
mkdir -p "app/non-classe-fr"
create_page "app/non-classe-fr/naturablue-natura4ever-phycocyanine/page.tsx" "NaturaBlue Natura4Ever : phycocyanine" "Présentation de NaturaBlue de Natura4Ever : phycocyanine liquide et bienfaits."

create_page "app/non-classe-fr/omega-3-et-peau-le-guide-complet-pour-une-peau-souple-hydratee-et-eclatante/page.tsx" "Oméga-3 et peau : guide complet" "Guide complet des bienfaits des oméga-3 pour une peau souple, hydratée et éclatante."

create_page "app/non-classe-fr/omega-3-fluidifie-sang/page.tsx" "Oméga-3 et fluidification du sang" "Comment les oméga-3 contribuent à la fluidification du sang et à la santé cardiovasculaire."

create_page "app/non-classe-fr/huile-de-poisson-omega-3-bienfaits/page.tsx" "Huile de poisson oméga-3 : bienfaits" "Les bienfaits de l'huile de poisson riche en oméga-3 pour la santé globale."

# 10. Pages de catégories
mkdir -p "app/category"
create_page "app/category/blog/page.tsx" "Catégorie Blog" "Tous les articles de notre blog sur la spiruline, phycocyanine et santé naturelle."

create_page "app/category/non-classe-fr/page.tsx" "Articles non classés" "Articles divers sur la santé naturelle et les compléments alimentaires."

echo ""
echo "🎉 Toutes les routes ont été créées avec succès !"
echo ""
echo "📊 Résumé :"
echo "- Pages principales : 3"
echo "- Pages spiruline : 4" 
echo "- Pages phycocyanine : 4"
echo "- Articles blog populaires : 15+"
echo "- Articles spécialisés : 10+"
echo "- Pages diverses : 5+"
echo ""
echo "✅ Toutes les URLs SEO importantes sont maintenant préservées !"
echo "📝 Vous pouvez maintenant ajouter le contenu page par page selon vos priorités."