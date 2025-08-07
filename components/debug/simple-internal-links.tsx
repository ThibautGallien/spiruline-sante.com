// components/debug/simple-internal-links.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Eye } from "lucide-react";

interface SimpleLinkRule {
  id: string;
  priority: number;
  active: boolean;
  keywords: string[];
  targetPage: string;
  anchor: string;
  description: string;
  theme: string;
}

// Règles simplifiées pour debug
const DEBUG_RULES: SimpleLinkRule[] = [
  {
    id: "zinzino_to_balance_oil",
    priority: 100,
    active: true,
    keywords: ["zinzino", "balance oil", "oméga-3"],
    targetPage: "/blog/balance-oil-zinzino-avis",
    anchor: "notre test complet de Balance Oil Zinzino",
    description:
      "Test approfondi de Balance Oil Zinzino : composition, bienfaits et avis utilisateurs.",
    theme: "zinzino-omega3",
  },
  {
    id: "omega3_general",
    priority: 75,
    active: true,
    keywords: ["oméga-3", "acides gras"],
    targetPage: "/blog/omega-3-bienfaits-pour-la-peau",
    anchor: "les bienfaits des oméga-3 pour la peau",
    description:
      "Comment les oméga-3 contribuent à une peau saine, hydratée et éclatante.",
    theme: "omega3",
  },
  {
    id: "phycocyanine_link",
    priority: 70,
    active: true,
    keywords: ["phycocyanine"],
    targetPage: "/phycocyanine",
    anchor: "notre guide complet sur la phycocyanine",
    description:
      "Le guide ultime de la phycocyanine, le pigment bleu aux propriétés exceptionnelles.",
    theme: "phycocyanine",
  },
  {
    id: "spiruline_link",
    priority: 65,
    active: true,
    keywords: ["spiruline"],
    targetPage: "/spiruline",
    anchor: "notre guide complet sur la spiruline",
    description:
      "Tout savoir sur la spiruline : bienfaits, composition, posologie.",
    theme: "spiruline",
  },
  {
    id: "xelliss_alternative",
    priority: 60,
    active: true,
    keywords: ["alternative", "français", "xelliss"],
    targetPage: "/blog/xelliss-produits",
    anchor: "découvrez les produits Xelliss",
    description:
      "Alternative française avec la gamme complète des produits Xelliss.",
    theme: "xelliss",
  },
];

const getThemeStyle = (theme: string) => {
  const styles = {
    "zinzino-omega3": {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-700",
    },
    omega3: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    phycocyanine: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-700",
    },
    spiruline: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
    },
    xelliss: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
    },
  };
  return styles[theme as keyof typeof styles] || styles.omega3;
};

interface SimpleInternalLinksProps {
  content: string;
  currentPath: string;
  maxLinks?: number;
  showDebug?: boolean;
}

export function SimpleInternalLinks({
  content,
  currentPath,
  maxLinks = 4,
  showDebug = true,
}: SimpleInternalLinksProps) {
  const [suggestedLinks, setSuggestedLinks] = useState<SimpleLinkRule[]>([]);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const contentLower = content.toLowerCase();
    const applicable: SimpleLinkRule[] = [];
    const debug: string[] = [];

    debug.push(`🔍 Analyse du contenu (${content.length} caractères)`);
    debug.push(`📄 Page actuelle: ${currentPath}`);
    debug.push("");

    DEBUG_RULES.forEach((rule) => {
      debug.push(`📍 Règle: ${rule.id}`);
      debug.push(`   Priorité: ${rule.priority}`);
      debug.push(`   Active: ${rule.active ? "✅" : "❌"}`);
      debug.push(`   Mots-clés: ${rule.keywords.join(", ")}`);
      debug.push(`   → ${rule.targetPage}`);

      // Vérifier si c'est la même page
      if (rule.targetPage === currentPath) {
        debug.push(`   ❌ EXCLU: Même page`);
        debug.push("");
        return;
      }

      // Vérifier si actif
      if (!rule.active) {
        debug.push(`   ❌ EXCLU: Règle inactive`);
        debug.push("");
        return;
      }

      // Vérifier les mots-clés
      const hasKeywords = rule.keywords.some((keyword) => {
        const found = contentLower.includes(keyword.toLowerCase());
        debug.push(`   - "${keyword}": ${found ? "✅" : "❌"}`);
        return found;
      });

      if (hasKeywords) {
        debug.push(`   ✅ RÈGLE APPLICABLE`);
        applicable.push(rule);
      } else {
        debug.push(`   ❌ EXCLU: Aucun mot-clé trouvé`);
      }
      debug.push("");
    });

    // Trier par priorité
    const sorted = applicable
      .sort((a, b) => b.priority - a.priority)
      .slice(0, maxLinks);

    debug.push(
      `🎯 RÉSULTAT: ${sorted.length}/${applicable.length} liens sélectionnés`
    );
    sorted.forEach((rule, index) => {
      debug.push(`${index + 1}. [${rule.priority}] ${rule.anchor}`);
    });

    setSuggestedLinks(sorted);
    setDebugInfo(debug);
    setIsLoading(false);
  }, [content, currentPath, maxLinks]);

  if (isLoading) {
    return (
      <div className="my-8">
        <Card>
          <CardContent className="p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="space-y-3">
                <div className="h-16 bg-gray-200 rounded"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="my-8">
      {/* Debug Info */}
      {showDebug && (
        <Card className="mb-4 border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              🐛 Debug Maillage Interne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs text-yellow-800 overflow-x-auto whitespace-pre-wrap">
              {debugInfo.join("\n")}
            </pre>
          </CardContent>
        </Card>
      )}

      {/* Liens suggérés */}
      {suggestedLinks.length > 0 ? (
        <Card className="border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <Eye className="h-5 w-5 text-blue-600" />
              <span>Articles recommandés pour vous</span>
            </CardTitle>
            <p className="text-sm text-gray-600">
              Basé sur le contenu de cet article et nos données de performance
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {suggestedLinks.map((rule, index) => {
              const themeStyle = getThemeStyle(rule.theme);

              return (
                <div
                  key={rule.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md group ${themeStyle.bg} ${themeStyle.border}`}
                >
                  <Link href={rule.targetPage} className="block">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-white/50 rounded-full">
                            #{index + 1}
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-white/50 rounded-full">
                            Priorité {rule.priority}
                          </span>
                        </div>

                        <h3
                          className={`font-semibold group-hover:${themeStyle.text} transition-colors text-gray-900`}
                        >
                          {rule.anchor}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {rule.description}
                        </p>

                        <div className="text-xs text-gray-500">
                          📍 {rule.targetPage}
                        </div>
                      </div>

                      <ArrowRight
                        className={`h-5 w-5 text-gray-400 group-hover:${themeStyle.text} group-hover:translate-x-1 transition-all flex-shrink-0 ml-4`}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </CardContent>
        </Card>
      ) : (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6 text-center">
            <p className="text-red-800 font-medium">
              ❌ Aucun lien interne trouvé
            </p>
            <p className="text-red-600 text-sm mt-2">
              Vérifiez que les mots-clés sont présents dans le contenu
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
