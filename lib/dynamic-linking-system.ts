// lib/dynamic-linking-system.ts
// Système évolutif basé sur des configurations facilement modifiables

export interface LinkingRule {
  id: string;
  priority: number; // Plus haut = plus prioritaire
  active: boolean;
  keywords: string[];
  sourcePages?: string[]; // Si undefined, s'applique à toutes les pages
  targetPage: string;
  anchor: string;
  description: string;
  theme: string;
  performance: {
    currentClicks: number;
    currentPosition: number;
    impressions: number;
    lastUpdated: string;
  };
  conditions?: {
    minWordsInContent?: number;
    maxLinksPerPage?: number;
    excludeIfAlreadyLinked?: boolean;
  };
}

// Configuration centralisée - FACILE À MODIFIER
export const LINKING_RULES: LinkingRule[] = [
  // RÈGLES PRIORITÉ 1 - Basées sur tes données actuelles
  {
    id: "zinzino_to_balance_oil",
    priority: 100, // MAX PRIORITY
    active: true,
    keywords: ["zinzino", "zinzino avis", "produits zinzino"],
    sourcePages: ["/blog/avis-zinzino-arnaque-ou-produits-de-qualite"],
    targetPage: "/blog/balance-oil-zinzino-avis",
    anchor: "notre test complet de Balance Oil Zinzino",
    description: "Boost Balance Oil depuis page champion Zinzino",
    theme: "zinzino-omega3",
    performance: {
      currentClicks: 63,
      currentPosition: 10.1,
      impressions: 3962,
      lastUpdated: "2024-02-01",
    },
    conditions: {
      maxLinksPerPage: 1,
      excludeIfAlreadyLinked: true,
    },
  },

  {
    id: "phycosci_to_phycocyanine_guide",
    priority: 95,
    active: true,
    keywords: ["phycosci", "phycocyanine", "pigment bleu"],
    sourcePages: [
      "/blog/avis-phycosci-x14-xelliss",
      "/blog/phycosci-x14-xelliss",
    ],
    targetPage: "/phycocyanine",
    anchor: "notre guide complet sur la phycocyanine",
    description: "Sauver page pilier phycocyanine",
    theme: "phycocyanine",
    performance: {
      currentClicks: 1,
      currentPosition: 69.3,
      impressions: 2186,
      lastUpdated: "2024-02-01",
    },
    conditions: {
      maxLinksPerPage: 2,
    },
  },

  {
    id: "xelliss_carafe_to_products",
    priority: 90,
    active: true,
    keywords: ["xelliss", "carafe xelliss", "xelliwater"],
    sourcePages: ["/blog/carafe-filtrante-xelliss-xelliwater"],
    targetPage: "/blog/xelliss-produits",
    anchor: "découvrez la gamme complète Xelliss",
    description: "Cross-selling Xelliss",
    theme: "xelliss",
    performance: {
      currentClicks: 79,
      currentPosition: 10.5,
      impressions: 1960,
      lastUpdated: "2024-02-01",
    },
  },

  // RÈGLES PRIORITÉ 2 - Développement thématique
  {
    id: "spiruline_to_guide",
    priority: 80,
    active: true,
    keywords: ["spiruline"],
    targetPage: "/spiruline",
    anchor: "notre guide complet sur la spiruline",
    description: "Développer thématique spiruline",
    theme: "spiruline",
    performance: {
      currentClicks: 0,
      currentPosition: 0,
      impressions: 0,
      lastUpdated: "2024-02-01",
    },
    conditions: {
      minWordsInContent: 5, // Au moins 5 mentions de spiruline
      maxLinksPerPage: 1,
    },
  },

  {
    id: "omega3_to_balance_oil",
    priority: 75,
    active: true,
    keywords: ["omega 3", "oméga-3", "acides gras"],
    targetPage: "/blog/balance-oil-zinzino-avis",
    anchor: "Balance Oil Zinzino pour vos oméga-3",
    description: "Conversion oméga-3 vers produit",
    theme: "omega3",
    performance: {
      currentClicks: 63,
      currentPosition: 10.1,
      impressions: 3962,
      lastUpdated: "2024-02-01",
    },
  },

  // RÈGLES PRIORITÉ 3 - Opportunités futures
  {
    id: "spiruline_cheveux_boost",
    priority: 70,
    active: true,
    keywords: ["cheveux", "spiruline cheveux", "chute cheveux"],
    targetPage: "/blog/spiruline-cheveux",
    anchor: "spiruline pour des cheveux en bonne santé",
    description: "Booster page spiruline-cheveux",
    theme: "spiruline-beaute",
    performance: {
      currentClicks: 0,
      currentPosition: 80.1,
      impressions: 1843,
      lastUpdated: "2024-02-01",
    },
  },

  // RÈGLES CONTEXTUELLES - Ajustables facilement
  {
    id: "zinzino_cross_selling",
    priority: 60,
    active: true,
    keywords: ["avis zinzino"],
    sourcePages: ["/blog/avis-zinzino-arnaque-ou-produits-de-qualite"],
    targetPage: "/blog/xelliss-produits",
    anchor: "alternative française avec les produits Xelliss",
    description: "Cross-selling Zinzino → Xelliss",
    theme: "cross-selling",
    performance: {
      currentClicks: 79,
      currentPosition: 10.5,
      impressions: 1960,
      lastUpdated: "2024-02-01",
    },
  },
];

// Métriques pour évaluer l'efficacité (tu pourras les mettre à jour)
export interface LinkingMetrics {
  ruleId: string;
  period: string; // 'week', 'month', 'quarter'
  clicks: number;
  impressions: number;
  positionImprovement: number;
  ctr: number;
  conversionRate?: number;
}

// Système d'évaluation automatique des règles
export class LinkingRuleEvaluator {
  // Calculer le score d'une règle (plus haut = plus efficace)
  static calculateRuleScore(
    rule: LinkingRule,
    metrics?: LinkingMetrics
  ): number {
    let score = rule.priority;

    if (metrics) {
      // Bonus pour amélioration de position
      if (metrics.positionImprovement > 0) {
        score += metrics.positionImprovement * 10;
      }

      // Bonus pour CTR élevé
      if (metrics.ctr > 5) {
        score += 20;
      }

      // Bonus pour volume de clics
      score += Math.min(metrics.clicks / 10, 50);
    }

    return score;
  }

  // Suggérer des ajustements de règles
  static suggestRuleAdjustments(
    rule: LinkingRule,
    metrics: LinkingMetrics[]
  ): string[] {
    const suggestions: string[] = [];
    const latestMetrics = metrics[metrics.length - 1];

    if (!latestMetrics) return suggestions;

    // Si position s'améliore → augmenter priorité
    if (latestMetrics.positionImprovement > 5) {
      suggestions.push(
        `🔥 Règle efficace ! Considérez augmenter la priorité de ${rule.id}`
      );
    }

    // Si CTR faible → changer ancre
    if (latestMetrics.ctr < 2) {
      suggestions.push(
        `📝 CTR faible pour ${rule.id}. Testez une nouvelle ancre.`
      );
    }

    // Si beaucoup d'impressions mais peu de clics → optimiser page cible
    if (latestMetrics.impressions > 1000 && latestMetrics.clicks < 50) {
      suggestions.push(
        `🎯 ${rule.targetPage} a du potentiel. Optimisez le titre/méta.`
      );
    }

    return suggestions;
  }
}

// Configuration des thèmes (facile à étendre)
export const THEMES_CONFIG = {
  zinzino: {
    color: "orange",
    icon: "🟠",
    description: "Produits Zinzino et oméga-3",
  },
  xelliss: {
    color: "blue",
    icon: "🔵",
    description: "Gamme Xelliss et phycocyanine",
  },
  spiruline: {
    color: "green",
    icon: "🟢",
    description: "Spiruline et super-aliments",
  },
  phycocyanine: {
    color: "indigo",
    icon: "🔷",
    description: "Phycocyanine et antioxydants",
  },
  omega3: {
    color: "purple",
    icon: "🟣",
    description: "Oméga-3 et santé cardiovasculaire",
  },
};

// Fonction principale pour obtenir les liens (avec logique évolutive)
export function getDynamicLinks(
  content: string,
  currentPath: string,
  options: {
    maxLinks?: number;
    excludeThemes?: string[];
    priorityThreshold?: number;
  } = {}
): LinkingRule[] {
  const { maxLinks = 3, excludeThemes = [], priorityThreshold = 50 } = options;

  const contentLower = content.toLowerCase();
  const applicableRules: LinkingRule[] = [];

  LINKING_RULES.forEach((rule) => {
    // Vérifications de base
    if (!rule.active) return;
    if (rule.priority < priorityThreshold) return;
    if (excludeThemes.includes(rule.theme)) return;
    if (rule.targetPage === currentPath) return;

    // Vérifier si la page source correspond
    if (rule.sourcePages && !rule.sourcePages.includes(currentPath)) {
      return;
    }

    // Vérifier si les mots-clés sont présents
    const hasKeywords = rule.keywords.some((keyword) =>
      contentLower.includes(keyword.toLowerCase())
    );

    if (!hasKeywords) return;

    // Vérifier les conditions spéciales
    if (rule.conditions) {
      if (rule.conditions.minWordsInContent) {
        const keywordCount = rule.keywords.reduce((count, keyword) => {
          const regex = new RegExp(keyword.toLowerCase(), "gi");
          const matches = contentLower.match(regex);
          return count + (matches ? matches.length : 0);
        }, 0);

        if (keywordCount < rule.conditions.minWordsInContent) return;
      }
    }

    applicableRules.push(rule);
  });

  // Trier par priorité et retourner les meilleurs
  return applicableRules
    .sort((a, b) => b.priority - a.priority)
    .slice(0, maxLinks);
}

// Utilitaire pour mettre à jour facilement les performances
export function updateRulePerformance(
  ruleId: string,
  newPerformance: Partial<LinkingRule["performance"]>
): void {
  const ruleIndex = LINKING_RULES.findIndex((rule) => rule.id === ruleId);
  if (ruleIndex !== -1) {
    LINKING_RULES[ruleIndex].performance = {
      ...LINKING_RULES[ruleIndex].performance,
      ...newPerformance,
      lastUpdated: new Date().toISOString(),
    };
  }
}

// Fonction pour ajouter facilement de nouvelles règles
export function addLinkingRule(newRule: Omit<LinkingRule, "id">): string {
  const id = `custom_${Date.now()}`;
  LINKING_RULES.push({
    id,
    ...newRule,
  });
  return id;
}
