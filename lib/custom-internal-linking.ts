// lib/custom-internal-linking.ts - Basé sur vos données GSC réelles

export interface CustomLinkSuggestion {
  href: string;
  title: string;
  description: string;
  priority: "champion" | "boost" | "support";
  traffic: number;
  anchor: string;
  theme: "zinzino" | "xelliss" | "phycocyanine" | "omega3" | "spiruline";
}

// STRATÉGIE BASÉE SUR VOS DONNÉES RÉELLES GSC
export const PERFORMANCE_BASED_LINKS: Record<string, CustomLinkSuggestion[]> = {
  // Mots-clés ZINZINO (1077+ clics - Votre leader!)
  zinzino: [
    {
      href: "/blog/avis-zinzino-arnaque-ou-produits-de-qualite",
      title: "Avis Zinzino : Arnaque ou Produits de Qualité ?",
      description: "Notre analyse complète et objective des produits Zinzino",
      priority: "champion", // 1087 clics!
      traffic: 1087,
      anchor: "notre avis complet sur Zinzino",
      theme: "zinzino",
    },
    {
      href: "/blog/balance-oil-zinzino-avis",
      title: "Balance Oil Zinzino : Test et Avis",
      description: "Test approfondi de Balance Oil Zinzino",
      priority: "boost", // 63 clics, 3962 impressions - GROS POTENTIEL
      traffic: 63,
      anchor: "notre test de Balance Oil Zinzino",
      theme: "omega3",
    },
  ],

  "zinzino avis": [
    {
      href: "/blog/avis-zinzino-arnaque-ou-produits-de-qualite",
      title: "Avis Zinzino Complet",
      description: "Tous nos avis sur les produits Zinzino",
      priority: "champion",
      traffic: 1087,
      anchor: "nos avis détaillés sur Zinzino",
      theme: "zinzino",
    },
  ],

  "balance oil": [
    {
      href: "/blog/balance-oil-zinzino-avis",
      title: "Balance Oil : Avis et Test Complet",
      description: "Notre test de Balance Oil Zinzino",
      priority: "boost", // Position 10.1 - À améliorer!
      traffic: 63,
      anchor: "notre test complet de Balance Oil",
      theme: "omega3",
    },
  ],

  // Mots-clés XELLISS (151+ clics - Bon potentiel)
  xelliss: [
    {
      href: "/blog/carafe-filtrante-xelliss-xelliwater",
      title: "Carafe Filtrante Xelliss XelliWater",
      description: "Test complet de la carafe filtrante Xelliss",
      priority: "champion", // 159 clics, excellent CTR 8.77%
      traffic: 159,
      anchor: "notre test de la carafe Xelliss",
      theme: "xelliss",
    },
    {
      href: "/blog/x-gold-xelliss-avis",
      title: "X-Gold Xelliss : Avis",
      description: "Avis détaillé sur X-Gold de Xelliss",
      priority: "champion", // 92 clics
      traffic: 92,
      anchor: "notre avis sur X-Gold Xelliss",
      theme: "xelliss",
    },
    {
      href: "/blog/xelliss-produits",
      title: "Produits Xelliss : Gamme Complète",
      description: "Découvrez tous les produits Xelliss",
      priority: "boost", // 79 clics, position 10.5 - à améliorer
      traffic: 79,
      anchor: "la gamme complète Xelliss",
      theme: "xelliss",
    },
  ],

  // Mots-clés PHYCOCYANINE (114+ clics - Niche forte)
  phycocyanine: [
    {
      href: "/blog/avis-phycosci-x14-xelliss",
      title: "PhycoSci X14 Xelliss : Avis",
      description: "Notre avis sur PhycoSci X14",
      priority: "champion", // 90 clics, CTR 9.23%
      traffic: 90,
      anchor: "notre avis sur PhycoSci X14",
      theme: "phycocyanine",
    },
    {
      href: "/blog/phycosci-x14-xelliss",
      title: "PhycoSci X14 Xelliss : Présentation",
      description: "Tout savoir sur PhycoSci X14",
      priority: "support", // 47 clics
      traffic: 47,
      anchor: "découvrez PhycoSci X14",
      theme: "phycocyanine",
    },
    {
      href: "/phycocyanine",
      title: "Guide Complet Phycocyanine",
      description: "Le guide ultime de la phycocyanine",
      priority: "boost", // 1 clic, 2186 impressions - ÉNORME POTENTIEL!
      traffic: 1,
      anchor: "notre guide complet sur la phycocyanine",
      theme: "phycocyanine",
    },
  ],

  phycosci: [
    {
      href: "/blog/avis-phycosci-x14-xelliss",
      title: "PhycoSci X14 : Avis Complet",
      description: "Avis détaillé sur PhycoSci X14",
      priority: "champion",
      traffic: 90,
      anchor: "notre avis sur PhycoSci X14",
      theme: "phycocyanine",
    },
  ],

  // Mots-clés SPIRULINE (10+ clics - À développer!)
  spiruline: [
    {
      href: "/spiruline",
      title: "Guide Complet Spiruline",
      description: "Tout savoir sur la spiruline",
      priority: "boost", // Faible trafic mais important pour SEO
      traffic: 0,
      anchor: "notre guide complet spiruline",
      theme: "spiruline",
    },
    {
      href: "/blog/spiruline-cheveux",
      title: "Spiruline et Cheveux",
      description: "Bienfaits spiruline pour cheveux",
      priority: "boost", // Position 80.1 - Gros potentiel
      traffic: 0,
      anchor: "spiruline pour des cheveux sains",
      theme: "spiruline",
    },
  ],

  // Omega-3 (36+ clics - À développer)
  "omega-3": [
    {
      href: "/blog/balance-oil-zinzino-avis",
      title: "Oméga-3 Balance Oil Zinzino",
      description: "Test des oméga-3 Zinzino",
      priority: "boost",
      traffic: 63,
      anchor: "les oméga-3 de Zinzino",
      theme: "omega3",
    },
  ],
};

// Pages CHAMPIONS - À utiliser comme hubs de liens sortants
export const CHAMPION_PAGES = [
  {
    page: "/blog/avis-zinzino-arnaque-ou-produits-de-qualite",
    traffic: 1087,
    purpose: "Hub principal - Peut envoyer vers toutes les autres pages",
    maxOutboundLinks: 15,
  },
  {
    page: "/blog/carafe-filtrante-xelliss-xelliwater",
    traffic: 159,
    purpose: "Hub Xelliss - Liens vers autres produits Xelliss",
    maxOutboundLinks: 8,
  },
  {
    page: "/blog/x-gold-xelliss-avis",
    traffic: 92,
    purpose: "Hub produits Xelliss",
    maxOutboundLinks: 6,
  },
  {
    page: "/blog/avis-phycosci-x14-xelliss",
    traffic: 90,
    purpose: "Hub phycocyanine",
    maxOutboundLinks: 6,
  },
];

// Pages À BOOSTER - Cibles prioritaires de maillage entrant
export const BOOST_TARGETS = [
  {
    page: "/blog/balance-oil-zinzino-avis",
    currentPosition: 10.1,
    impressions: 3962,
    potential: "ÉNORME - 3962 impressions, position améliorable",
    neededLinks: 5,
  },
  {
    page: "/phycocyanine",
    currentPosition: 69.3,
    impressions: 2186,
    potential: "CRITIQUE - Page pilier mal positionnée",
    neededLinks: 8,
  },
  {
    page: "/blog/xelliss-produits",
    currentPosition: 10.5,
    impressions: 1960,
    potential: "BON - Proche top 10",
    neededLinks: 3,
  },
  {
    page: "/blog/spiruline-cheveux",
    currentPosition: 80.1,
    impressions: 1843,
    potential: "FORT - Thématique porteuse",
    neededLinks: 6,
  },
];

// Fonction pour obtenir les liens basés sur vos vraies performances
export function getPerformanceBasedLinks(
  content: string,
  currentPath: string,
  maxLinks: number = 5
): CustomLinkSuggestion[] {
  const suggestions: CustomLinkSuggestion[] = [];
  const contentLower = content.toLowerCase();

  // Parcourir les mots-clés performants
  Object.entries(PERFORMANCE_BASED_LINKS).forEach(([keyword, links]) => {
    if (contentLower.includes(keyword.toLowerCase())) {
      links.forEach((link) => {
        if (
          link.href !== currentPath &&
          !suggestions.find((s) => s.href === link.href)
        ) {
          suggestions.push(link);
        }
      });
    }
  });

  // Trier par priorité de performance réelle
  return suggestions
    .sort((a, b) => {
      const priorityOrder = { champion: 3, boost: 2, support: 1 };
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      return b.traffic - a.traffic; // Puis par trafic réel
    })
    .slice(0, maxLinks);
}

// Stratégie de maillage pour pages champions
export function getChampionPageStrategy(
  currentPage: string
): CustomLinkSuggestion[] {
  const champion = CHAMPION_PAGES.find((p) => p.page === currentPage);
  if (!champion) return [];

  // Cette page peut envoyer du link juice vers les pages à booster
  return BOOST_TARGETS.map((target) => ({
    href: target.page,
    title: `Lien stratégique vers ${target.page}`,
    description: target.potential,
    priority: "boost" as const,
    traffic: 0,
    anchor: `découvrez ${target.page.split("/").pop()}`,
    theme: "boost" as any,
  })).slice(0, champion.maxOutboundLinks);
}
