"use client";

import Link from "next/link";
import { Leaf, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export function Footer() {
  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Spiruline", href: "/spiruline" },
    { name: "Phycocyanine", href: "/phycocyanine" },
    { name: "Blog", href: "/blog" },
    {
      name: "Boutique",
      href: "https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop",
    },
  ];

  const legalLinks = [
    { name: "Mentions légales", href: "/mentions-legales" },
    {
      name: "Politique de confidentialité",
      href: "/politique-confidentialite",
    },
    {
      name: "Conditions générales de vente",
      href: "/conditions-generales-vente",
    },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/people/Spiruline-sant%C3%A9/100088860296521/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/spiruline_sante/",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@Spiruline-sant%C3%A9",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Spirulina Health</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Votre source d'information fiable sur la spiruline, phycocyanine
              et oméga-3. Conseils d'experts et produits de qualité.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Avertissement santé */}
            <div className="mt-6 p-3 bg-yellow-900/30 border border-yellow-700/50 rounded-lg">
              <p className="text-yellow-200 text-xs">
                ⚠️ <strong>Avertissement :</strong> Les informations sur ce site
                ne remplacent pas un avis médical. Consultez un professionnel de
                santé.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recevez nos derniers conseils santé, actualités sur la spiruline
              et offres exclusives directement dans votre boîte mail.
            </p>
            <NewsletterForm variant="dark" size="sm" />

            {/* Contact rapide */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                Contact rapide
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>contact@spiruline-sante.com</span>
                </div>
                <p className="text-xs text-gray-500">Réponse sous 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Spiruline Santé. Tous droits
                réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Site d'information sur la spiruline et partenaire officiel
                Zinzino & Xelliss
              </p>
            </div>

            {/* Certifications / Badges */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-800 px-3 py-1 rounded-full">
                <span className="text-green-200 text-xs font-medium">
                  🌿 100% Naturel
                </span>
              </div>
              <div className="bg-blue-800 px-3 py-1 rounded-full">
                <span className="text-blue-200 text-xs font-medium">
                  🔬 Expertisé
                </span>
              </div>
              <div className="bg-purple-800 px-3 py-1 rounded-full">
                <span className="text-purple-200 text-xs font-medium">
                  🇫🇷 Français
                </span>
              </div>
            </div>
          </div>

          {/* Disclaimer légal */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Disclaimer :</strong> Spiruline Santé est un site
              d'information et de conseil. Nous sommes partenaires affiliés de
              Zinzino et Xelliss. Les produits présentés sont vendus directement
              par ces entreprises selon leurs propres conditions. Les
              compléments alimentaires ne remplacent pas une alimentation variée
              et équilibrée ni un mode de vie sain. Tenir hors de portée des
              enfants.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
