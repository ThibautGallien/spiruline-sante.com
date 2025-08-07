// components/seo/dynamic-internal-links.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Eye, MousePointer } from "lucide-react";
import {
  getDynamicLinks,
  LinkingRule,
  THEMES_CONFIG,
  LinkingRuleEvaluator,
} from "@/lib/dynamic-linking-system";
import { trackButtonClick } from "@/lib/analytics-advanced";

interface DynamicInternalLinksProps {
  content: string;
  currentPath: string;
  maxLinks?: number;
  showPerformanceMetrics?: boolean;
  className?: string;
}

export function DynamicInternalLinks({
  content,
  currentPath,
  maxLinks = 3,
  showPerformanceMetrics = false,
  className = "",
}: DynamicInternalLinksProps) {
  const [suggestedLinks, setSuggestedLinks] = useState<LinkingRule[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un petit délai pour éviter le layout shift
    const timer = setTimeout(() => {
      const links = getDynamicLinks(content, currentPath, { maxLinks });
      setSuggestedLinks(links);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [content, currentPath, maxLinks]);

  const handleLinkClick = (rule: LinkingRule) => {
    // Analytics tracking
    trackButtonClick(rule.anchor, `internal_link_${rule.theme}`);

    // Track rule effectiveness (pour futures optimisations)
    if (typeof window !== "undefined") {
      const clicks = parseInt(
        localStorage.getItem(`rule_clicks_${rule.id}`) || "0"
      );
      localStorage.setItem(`rule_clicks_${rule.id}`, (clicks + 1).toString());
    }
  };

  if (isLoading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-48 bg-gray-200 rounded-xl"></div>
      </div>
    );
  }

  if (suggestedLinks.length === 0) {
    return null;
  }

  const getThemeStyle = (theme: string) => {
    const config = THEMES_CONFIG[theme as keyof typeof THEMES_CONFIG];
    if (!config)
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        text: "text-gray-600",
      };

    const styles = {
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-700",
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-700",
      },
    };

    return styles[config.color as keyof typeof styles] || styles.blue;
  };

  return (
    <Card className={`my-8 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <span>Lectures recommandées</span>
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            Personnalisé pour vous
          </Badge>
        </div>
        <p className="text-sm text-gray-600">
          Basé sur vos intérêts et notre analyse de performance
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {suggestedLinks.map((rule, index) => {
          const themeStyle = getThemeStyle(rule.theme);
          const themeConfig =
            THEMES_CONFIG[rule.theme as keyof typeof THEMES_CONFIG];
          const score = LinkingRuleEvaluator.calculateRuleScore(rule);

          return (
            <div
              key={rule.id}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md group ${themeStyle.bg} ${themeStyle.border}`}
            >
              <Link
                href={rule.targetPage}
                onClick={() => handleLinkClick(rule)}
                className="block"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    {/* Header avec thème et priorité */}
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="secondary"
                        className={`text-xs ${themeStyle.text} bg-white/50`}
                      >
                        {themeConfig?.icon} {themeConfig?.description}
                      </Badge>
                      {rule.priority >= 90 && (
                        <Badge variant="destructive" className="text-xs">
                          🔥 Priorité Max
                        </Badge>
                      )}
                    </div>

                    {/* Titre principal (ancre) */}
                    <h3
                      className={`font-semibold group-hover:${themeStyle.text} transition-colors text-gray-900`}
                    >
                      {rule.anchor}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {rule.description}
                    </p>

                    {/* Métriques de performance (optionnel) */}
                    {showPerformanceMetrics && (
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        {rule.performance.impressions > 0 && (
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>
                              {rule.performance.impressions.toLocaleString()}{" "}
                              vues
                            </span>
                          </div>
                        )}
                        {rule.performance.currentClicks > 0 && (
                          <div className="flex items-center space-x-1">
                            <MousePointer className="h-3 w-3" />
                            <span>{rule.performance.currentClicks} clics</span>
                          </div>
                        )}
                        {rule.performance.currentPosition > 0 && (
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>
                              Position{" "}
                              {rule.performance.currentPosition.toFixed(1)}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Indicateur de potentiel */}
                    {rule.performance.impressions > 1000 &&
                      rule.performance.currentClicks < 50 && (
                        <div className="inline-flex items-center space-x-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                          <span>⚡</span>
                          <span>Fort potentiel</span>
                        </div>
                      )}
                  </div>

                  {/* Flèche et score */}
                  <div className="flex flex-col items-center ml-4 space-y-2">
                    <ArrowRight
                      className={`h-5 w-5 text-gray-400 group-hover:${themeStyle.text} group-hover:translate-x-1 transition-all flex-shrink-0`}
                    />
                    {showPerformanceMetrics && (
                      <div className="text-xs text-center">
                        <div className="font-medium text-gray-700">
                          {score.toFixed(0)}
                        </div>
                        <div className="text-gray-500">score</div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        {/* Footer avec info système */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>
              🤖 Suggestions basées sur {suggestedLinks.length} règle
              {suggestedLinks.length > 1 ? "s" : ""} active
              {suggestedLinks.length > 1 ? "s" : ""}
            </span>
            <button
              onClick={() => setShowPerformanceMetrics(!showPerformanceMetrics)}
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              {showPerformanceMetrics ? "Masquer métriques" : "Voir métriques"}
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Version simplifiée pour les cas où tu veux moins de UI
export function SimpleDynamicLinks({
  content,
  currentPath,
  maxLinks = 2,
  inline = false,
}: {
  content: string;
  currentPath: string;
  maxLinks?: number;
  inline?: boolean;
}) {
  const links = getDynamicLinks(content, currentPath, { maxLinks });

  if (links.length === 0) return null;

  if (inline) {
    return (
      <div className="inline-flex items-center space-x-1 text-sm">
        <span className="text-gray-600">Voir aussi :</span>
        {links.map((rule, index) => (
          <span key={rule.id}>
            <Link
              href={rule.targetPage}
              className="text-blue-600 hover:text-blue-700 underline"
              onClick={() =>
                trackButtonClick(rule.anchor, `inline_link_${rule.theme}`)
              }
            >
              {rule.anchor}
            </Link>
            {index < links.length - 1 && (
              <span className="text-gray-400">, </span>
            )}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="my-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h4 className="font-semibold text-blue-900 mb-3">
        📚 Lectures complémentaires
      </h4>
      <ul className="space-y-2">
        {links.map((rule) => (
          <li key={rule.id}>
            <Link
              href={rule.targetPage}
              className="text-blue-700 hover:text-blue-800 font-medium underline"
              onClick={() =>
                trackButtonClick(rule.anchor, `simple_link_${rule.theme}`)
              }
            >
              {rule.anchor}
            </Link>
            <p className="text-sm text-blue-600 mt-1">{rule.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
