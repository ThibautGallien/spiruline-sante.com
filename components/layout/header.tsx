"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const spirulineMenuItems = [
    {
      title: "Qu'est-ce que la spiruline ?",
      href: "/spiruline/la-spiruline-cest-quoi",
      description: "Découvrez cette micro-algue exceptionnelle",
    },
    {
      title: "Composition de la spiruline",
      href: "/spiruline/composition-spiruline",
      description: "Analyse complète des nutriments",
    },
    {
      title: "Les bienfaits de la spiruline",
      href: "/spiruline/les-bienfaits-spiruline",
      description: "Tous les bienfaits scientifiquement prouvés",
    },
    {
      title: "Posologie et dosage",
      href: "/spiruline/spiruline-posologie",
      description: "Comment bien doser la spiruline",
    },
  ];

  const phycocyanineMenuItems = [
    {
      title: "Guide complet phycocyanine",
      href: "/phycocyanine/guide-complet-phycocyanine",
      description: "Le guide ultime de la phycocyanine",
    },
    {
      title: "Propriétés et bienfaits",
      href: "/phycocyanine/phycocyanine-proprietes-bienfaits-applications",
      description: "Propriétés thérapeutiques",
    },
    {
      title: "Composition phycocyanine",
      href: "/phycocyanine/composition-phycocyanine-guide-complet",
      description: "Structure moléculaire détaillée",
    },
    {
      title: "Posologie optimale",
      href: "/phycocyanine/guide-posologie-phycocyanine-usage-optimal",
      description: "Dosages et conseils d'utilisation",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Image
              src="/Logo.png"
              alt="Spirulina Health Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
              >
                Accueil
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-green-600">
                Spiruline
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {spirulineMenuItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                  <div className="col-span-2 mt-4 pt-4 border-t">
                    <Link
                      href="/spiruline"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50 bg-green-50"
                    >
                      <div className="text-sm font-medium leading-none text-green-800">
                        📖 Guide Complet Spiruline
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-green-600">
                        Tout savoir sur la spiruline en une page
                      </p>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-green-600">
                Phycocyanine
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {phycocyanineMenuItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                  <div className="col-span-2 mt-4 pt-4 border-t">
                    <Link
                      href="/phycocyanine"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50 bg-blue-50"
                    >
                      <div className="text-sm font-medium leading-none text-blue-800">
                        💙 Guide Complet Phycocyanine
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-blue-600">
                        Découvrez le pigment bleu miracle
                      </p>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors px-4 py-2"
              >
                Blog
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                target="_blank"
                className="flex items-center space-x-1 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-md"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Boutique</span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          {/* Boutique button for small screens */}
          <Button
            size="sm"
            asChild
            className="hidden sm:flex md:hidden bg-green-600 hover:bg-green-700"
          >
            <Link
              href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
              target="_blank"
            >
              <ShoppingBag className="h-4 w-4" />
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <nav className="container py-4 space-y-4 px-4">
            <Link
              href="/"
              className="block text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>

            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">Spiruline</div>
              <Link
                href="/spiruline"
                className="block pl-4 text-sm text-green-600 hover:text-green-700 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                📖 Guide Complet
              </Link>
              {spirulineMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block pl-4 text-sm text-gray-600 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">
                Phycocyanine
              </div>
              <Link
                href="/phycocyanine"
                className="block pl-4 text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                💙 Guide Complet
              </Link>
              {phycocyanineMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block pl-4 text-sm text-gray-600 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="block text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            {/* Boutique button for mobile */}
            <div className="pt-4 border-t">
              <Link
                href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                target="_blank"
                className="flex items-center justify-center space-x-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="font-medium">Boutique Zinzino</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
