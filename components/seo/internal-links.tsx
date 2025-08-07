// components/seo/internal-links.tsx
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Sparkles, Heart } from "lucide-react";
import {
  getSuggestedLinks,
  getContextualNavigation,
  LinkSuggestion,
} from "@/lib/internal-linking";
import { trackButtonClick } from "@/lib/analytics-advanced";

interface InternalLinksProps {
  content?: string;
  currentPath: string;
  category?: string;
  maxLinks?: number;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "spiruline":
      return <Sparkles className="h-5 w-5 text-green-600" />;
    case "phycocyanine":
      return <Heart className="h-5 w-5 text-blue-600" />;
    case "omega3":
      return <BookOpen className="h-5 w-5 text-purple-600" />;
    case "produits":
      return <ArrowRight className="h-5 w-5 text-orange-600" />;
    default:
      return <BookOpen className="h-5 w-5 text-gray-600" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "spiruline":
      return "border-green-200 hover:border-green-300";
    case "phycocyanine":
      return "border-blue-200 hover:border-blue-300";
    case "omega3":
      return "border-purple-200 hover:border-purple-300";
    case "produits":
      return "border-orange-200 hover:border-orange-300";
    default:
      return "border-gray-200 hover:border-gray-300";
  }
};

export function InternalLinks({
  content = "",
  currentPath,
  category,
  maxLinks = 3,
}: InternalLinksProps) {
  // Obtenir les liens suggérés basés sur le contenu
  const suggestedLinks = getSuggestedLinks(content, currentPath, maxLinks);

  // Obtenir les liens contextuels par catégorie
  const contextualLinks = category ? getContextualNavigation(category) : [];

  // Combiner et dédupliquer les liens
  const allLinks = [...suggestedLinks, ...contextualLinks]
    .filter(
      (link, index, array) =>
        array.findIndex((l) => l.href === link.href) === index
    )
    .slice(0, maxLinks);

  if (allLinks.length === 0) return null;

  const handleLinkClick = (link: LinkSuggestion) => {
    trackButtonClick(link.title, `internal_link_${link.category}`);
  };

  return (
    <div className="my-8">
      <Card className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-gray-50 to-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span>Articles connexes recommandés</span>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Continuez votre lecture avec ces articles complémentaires
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {allLinks.map((link, index) => (
            <div
              key={link.href}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getCategoryColor(
                link.category
              )}`}
            >
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className="block group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getCategoryIcon(link.category)}
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {link.description}
                    </p>
                    {link.context && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          🔗 {link.context}
                        </span>
                      </div>
                    )}
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </div>
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

// Composant pour la navigation en bas d'article
export function ArticleNavigation({
  previousPost,
  nextPost,
  relatedPosts = [],
}: {
  previousPost?: { title: string; href: string };
  nextPost?: { title: string; href: string };
  relatedPosts?: Array<{ title: string; href: string; category: string }>;
}) {
  return (
    <div className="mt-12 space-y-8">
      {/* Navigation précédent/suivant */}
      {(previousPost || nextPost) && (
        <div className="flex justify-between items-center py-6 border-t border-b border-gray-200">
          <div className="flex-1">
            {previousPost && (
              <Link
                href={previousPost.href}
                onClick={() =>
                  trackButtonClick(
                    previousPost.title,
                    "article_navigation_previous"
                  )
                }
                className="group flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                <span>Article précédent : {previousPost.title}</span>
              </Link>
            )}
          </div>
          <div className="flex-1 text-right">
            {nextPost && (
              <Link
                href={nextPost.href}
                onClick={() =>
                  trackButtonClick(nextPost.title, "article_navigation_next")
                }
                className="group flex items-center justify-end space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span>Article suivant : {nextPost.title}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Articles similaires */}
      {relatedPosts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Articles similaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((post, index) => (
                <Link
                  key={post.href}
                  href={post.href}
                  onClick={() =>
                    trackButtonClick(post.title, "related_article")
                  }
                  className="group p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    {getCategoryIcon(post.category)}
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm leading-tight">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
