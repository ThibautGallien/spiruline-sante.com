// components/sections/spiruline-reset-section.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { useLandingAnalytics } from "@/hooks/use-landing-analytics";
import {
  trackButtonClick,
  trackNewsletterFormView,
} from "@/lib/analytics-advanced";

interface SpirulineResetSectionProps {
  className?: string;
  showNewsletter?: boolean;
  onCtaClick?: () => void;
}

const benefits = [
  "Booster votre énergie naturellement",
  "Renforcer votre système immunitaire",
  "Améliorer votre récupération sportive",
  "Optimiser votre concentration",
  "Retrouver votre vitalité au quotidien",
  "Détoxifier votre organisme en douceur",
  "Améliorer la qualité de votre sommeil",
];

export function SpirulineResetSection({
  className = "",
  showNewsletter = false,
  onCtaClick,
}: SpirulineResetSectionProps) {
  const [showNewsletterForm, setShowNewsletterForm] = useState(showNewsletter);

  // Analytics pour landing page
  useLandingAnalytics();

  const handleCtaClick = () => {
    // Track button click
    trackButtonClick(
      "Recevoir mon plan de 7 jours",
      "spiruline_reset_main_cta"
    );

    if (onCtaClick) {
      onCtaClick();
    } else {
      setShowNewsletterForm(true);
    }
  };

  // Track form view when it becomes visible
  useEffect(() => {
    if (showNewsletterForm) {
      trackNewsletterFormView("spiruline-reset-section");
    }
  }, [showNewsletterForm]);

  return (
    <section
      className={`py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 ${className}`}
    >
      <div className="container px-4 md:px-6 lg:px-8">
        {/* Titre sur toute la largeur */}
        <div className="text-center mb-12 w-full">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🌱</span>
            <span>Programme Exclusif</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight w-full">
            <span className="text-green-600">Spiruline Reset</span> :<br />
            7 Jours Pour Booster
            <br />
            <span className="text-emerald-600">Votre Énergie</span>
            <br />
            <span className="text-blue-600">Naturellement</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image à gauche - CACHÉE SUR MOBILE */}
          <div className="relative hidden lg:block">
            <div className="relative h-[680px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Image de spiruline */}
              <img
                src="/LP_spiruline.png"
                alt="Spiruline Reset - Programme 7 jours"
                className="w-full h-full object-cover"
              />

              {/* Overlay léger pour améliorer la lisibilité du badge */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

          {/* Contenu à droite - PLEINE LARGEUR SUR MOBILE */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-green-200 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Fatiguée, lessivée, au bout du rouleau ?</strong>
                <br />
                Offrez-vous un reset simple et naturel grâce à la spiruline :
                <span className="text-green-600 font-semibold">
                  {" "}
                  la microalgue la plus puissante de la planète.
                </span>
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mb-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Recevez 7 mails ultra-pratiques pour :
                  </h3>
                </div>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {showNewsletterForm ? (
                <div className="space-y-4">
                  <NewsletterForm
                    size="lg"
                    className="max-w-full"
                    source="spiruline-reset-section"
                    interests={[
                      "spiruline",
                      "spiruline-reset",
                      "energie-naturelle",
                      "detox",
                    ]}
                  />
                  <p className="text-xs text-gray-500 text-center">
                    Recevez votre premier mail dans les 5 minutes ⚡
                  </p>
                </div>
              ) : (
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleCtaClick}
                >
                  Recevoir mon plan de 7 jours
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              )}
            </div>

            {/* Éléments de preuve sociale */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="font-medium">+2,847 personnes</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="font-medium">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
