// lib/internal-linking.ts

export interface LinkSuggestion {
  href: string;
  title: string;
  description: string;
  category: "spiruline" | "phycocyanine" | "omega3" | "produits" | "blog";
  priority: "high" | "medium" | "low";
  anchor: string;
  context?: string;
}

// Mapping intelligent des liens internes basé sur les mots-clés
export const INTERNAL_LINKS_MAP: Record<string, LinkSuggestion[]> = {
  // Mots-clés Spiruline
  spiruline: [
    {
      href: "/spiruline",
      title: "Guide Complet Spiruline",
      description:
        "Tout savoir sur la spiruline : bienfaits, composition, posologie",
      category: "spiruline",
      priority: "high",
      anchor: "découvrez notre guide complet sur la spiruline",
    },
    {
      href: "/spiruline/les-bienfaits-spiruline",
      title: "Les Bienfaits de la Spiruline",
      description: "Bienfaits scientifiquement prouvés de la spiruline",
      category: "spiruline",
      priority: "high",
      anchor: "les bienfaits scientifiquement prouvés de la spiruline",
    },
  ],
  "bienfaits spiruline": [
    {
      href: "/spiruline/les-bienfaits-spiruline",
      title: "Les Bienfaits de la Spiruline",
      description: "Découvrez tous les bienfaits de cette micro-algue",
      category: "spiruline",
      priority: "high",
      anchor: "tous les bienfaits de la spiruline",
    },
  ],
  "posologie spiruline": [
    {
      href: "/spiruline/spiruline-posologie",
      title: "Posologie et Dosage Spiruline",
      description: "Comment bien doser la spiruline selon vos besoins",
      category: "spiruline",
      priority: "high",
      anchor: "comment bien doser la spiruline",
    },
  ],

  // Mots-clés Phycocyanine
  phycocyanine: [
    {
      href: "/phycocyanine",
      title: "Guide Complet Phycocyanine",
      description: "Le pigment bleu aux propriétés exceptionnelles",
      category: "phycocyanine",
      priority: "high",
      anchor: "découvrez la phycocyanine",
    },
    {
      href: "/phycocyanine/phycocyanine-proprietes-bienfaits-applications",
      title: "Propriétés de la Phycocyanine",
      description: "Propriétés thérapeutiques et applications",
      category: "phycocyanine",
      priority: "high",
      anchor: "les propriétés thérapeutiques de la phycocyanine",
    },
  ],
  "pigment bleu": [
    {
      href: "/phycocyanine",
      title: "Phycocyanine : Le Pigment Bleu",
      description: "Tout savoir sur ce pigment bleu exceptionnel",
      category: "phycocyanine",
      priority: "high",
      anchor: "le pigment bleu de la spiruline",
    },
  ],

  // Mots-clés Oméga-3
  "omega-3": [
    {
      href: "/blog/omega-3-bienfaits-pour-la-peau",
      title: "Oméga-3 et Peau",
      description: "Les bienfaits des oméga-3 pour une peau saine",
      category: "omega3",
      priority: "medium",
      anchor: "les bienfaits des oméga-3 pour la peau",
    },
    {
      href: "/blog/omega-3-cheveux",
      title: "Oméga-3 et Cheveux",
      description: "Comment les oméga-3 améliorent la santé capillaire",
      category: "omega3",
      priority: "medium",
      anchor: "oméga-3 pour des cheveux en bonne santé",
    },
  ],

  // Mots-clés Produits
  xelliss: [
    {
      href: "/blog/xelliss-produits",
      title: "Produits Xelliss",
      description: "Gamme complète des produits Xelliss",
      category: "produits",
      priority: "high",
      anchor: "découvrez les produits Xelliss",
    },
    {
      href: "/blog/phycosci-x14-xelliss",
      title: "PhycoSci X14 Xelliss",
      description: "Phycocyanine liquide concentrée",
      category: "produits",
      priority: "high",
      anchor: "PhycoSci X14 de Xelliss",
    },
  ],
  zinzino: [
    {
      href: "/blog/balance-oil-zinzino-avis",
      title: "Balance Oil Zinzino",
      description: "Test et avis sur Balance Oil",
      category: "produits",
      priority: "high",
      anchor: "notre test de Balance Oil Zinzino",
    },
    {
      href: "/blog/Zinzino-Omega-3",
      title: "Zinzino Oméga-3",
      description: "Analyse des compléments oméga-3 Zinzino",
      category: "produits",
      priority: "high",
      anchor: "les oméga-3 Zinzino",
    },
  ],

  // Mots-clés Santé
  cheveux: [
    {
      href: "/blog/spiruline-cheveux",
      title: "Spiruline et Cheveux",
      description: "Comment la spiruline améliore la santé capillaire",
      category: "blog",
      priority: "medium",
      anchor: "spiruline pour des cheveux en bonne santé",
    },
    {
      href: "/blog/omega-3-cheveux",
      title: "Oméga-3 et Cheveux",
      description: "Les oméga-3 pour la beauté des cheveux",
      category: "blog",
      priority: "medium",
      anchor: "oméga-3 pour des cheveux éclatants",
    },
  ],
  peau: [
    {
      href: "/blog/bienfaits-spiruline-peau-guide-complet",
      title: "Spiruline et Peau",
      description: "Bienfaits de la spiruline pour la peau",
      category: "blog",
      priority: "medium",
      anchor: "spiruline pour une peau éclatante",
    },
    {
      href: "/blog/omega-3-bienfaits-pour-la-peau",
      title: "Oméga-3 et Peau",
      description: "Oméga-3 pour une peau saine",
      category: "blog",
      priority: "medium",
      anchor: "oméga-3 pour une peau hydratée",
    },
  ],
  sport: [
    {
      href: "/blog/spiruline-sport",
      title: "Spiruline et Sport",
      description: "Optimisez vos performances sportives",
      category: "blog",
      priority: "medium",
      anchor: "spiruline pour optimiser vos performances",
    },
  ],
  énergie: [
    {
      href: "/spiruline/les-bienfaits-spiruline",
      title: "Spiruline pour l'Énergie",
      description: "Comment la spiruline booste votre énergie",
      category: "spiruline",
      priority: "high",
      anchor: "booster votre énergie avec la spiruline",
    },
  ],
};

// Fonction pour extraire les liens suggérés selon le contexte
export function getSuggestedLinks(
  content: string,
  currentPath: string,
  maxLinks: number = 3
): LinkSuggestion[] {
  const suggestions: LinkSuggestion[] = [];
  const contentLower = content.toLowerCase();

  // Parcourir les mots-clés et trouver les correspondances
  Object.entries(INTERNAL_LINKS_MAP).forEach(([keyword, links]) => {
    if (contentLower.includes(keyword.toLowerCase())) {
      links.forEach((link) => {
        // Éviter les liens vers la page actuelle
        if (
          link.href !== currentPath &&
          !suggestions.find((s) => s.href === link.href)
        ) {
          suggestions.push({
            ...link,
            context: keyword,
          });
        }
      });
    }
  });

  // Trier par priorité et retourner les meilleurs
  return suggestions
    .sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
    .slice(0, maxLinks);
}

// Liens contextuels par catégorie de page
export const CONTEXTUAL_LINKS = {
  spiruline: {
    relatedPages: [
      "/phycocyanine",
      "/blog/spiruline-cheveux",
      "/blog/spiruline-sport",
      "/blog/spiruline-perte-de-poids",
    ],
    products: [
      "/blog/xelliss-produits",
      "/blog/a3-spirulina-pills-de-xelliss-avis",
    ],
  },
  phycocyanine: {
    relatedPages: [
      "/spiruline",
      "/blog/phycosci-x14-xelliss",
      "/blog/avis-phycosci-x14-xelliss",
    ],
    products: ["/blog/phycosci-x14-xelliss"],
  },
  omega3: {
    relatedPages: [
      "/blog/omega-3-cheveux",
      "/blog/omega-3-bienfaits-pour-la-peau",
    ],
    products: ["/blog/balance-oil-zinzino-avis", "/blog/Zinzino-Omega-3"],
  },
};

// Fonction pour obtenir les liens de navigation contextuelle
export function getContextualNavigation(
  currentCategory: string
): LinkSuggestion[] {
  const links =
    CONTEXTUAL_LINKS[currentCategory as keyof typeof CONTEXTUAL_LINKS];
  if (!links) return [];

  const navigation: LinkSuggestion[] = [];

  // Ajouter les pages connexes
  links.relatedPages?.forEach((href) => {
    const suggestion = findLinkByHref(href);
    if (suggestion) navigation.push(suggestion);
  });

  // Ajouter les produits recommandés
  links.products?.forEach((href) => {
    const suggestion = findLinkByHref(href);
    if (suggestion) navigation.push(suggestion);
  });

  return navigation;
}

// Fonction helper pour trouver un lien par href
function findLinkByHref(href: string): LinkSuggestion | undefined {
  for (const links of Object.values(INTERNAL_LINKS_MAP)) {
    const found = links.find((link) => link.href === href);
    if (found) return found;
  }
  return undefined;
}
