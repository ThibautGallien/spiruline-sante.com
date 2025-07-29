"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ArrowRight, CheckCircle, Mail, Shield, Zap } from "lucide-react";

interface PhycocyanineResetSectionProps {
  className?: string;
  showNewsletter?: boolean;
  onCtaClick?: () => void;
}

const benefits = [
  "Ce que c'est (et pourquoi ce n'est pas \"juste de la spiruline\")",
  "Ses bienfaits sur l'immunité, l'inflammation, le stress",
  "Les études scientifiques qui en parlent",
  "Comment l'utiliser chez vous, en toute simplicité",
  "Les dosages recommandés par les experts",
  "Où trouver une phycocyanine de qualité",
  "Les erreurs à éviter lors de votre première cure",
];

export function PhycocyanineResetSection({
  className = "",
  showNewsletter = false,
  onCtaClick,
}: PhycocyanineResetSectionProps) {
  const [showNewsletterForm, setShowNewsletterForm] = useState(showNewsletter);

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      setShowNewsletterForm(true);
    }
  };

  return (
    <section
      className={`py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 ${className}`}
    >
      <div className="container px-4 md:px-6 lg:px-8">
        {/* Titre sur toute la largeur */}
        <div className="text-center mb-12 w-full">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🧬</span>
            <span>Secret Bleu Exclusif</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight w-full">
            <span className="text-blue-600">PHYCOCYANINE</span> :<br />
            Le Secret Bleu de
            <br />
            <span className="text-indigo-600">l'Immunité</span>
            <br />
            <span className="text-purple-600">🧬</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image à gauche */}
          <div className="relative">
            <div className="relative h-[680px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Image de phycocyanine - vous pouvez remplacer par votre image */}
              <img
                src="/LP_phycocyanine.png"
                alt="Phycocyanine Reset - Programme 7 jours"
                className="w-full h-full object-cover"
              />

              {/* Overlay avec effet bleu pour rappeler la couleur de la phycocyanine */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Contenu à droite */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-200 shadow-lg">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    💌 7 Jours pour découvrir la phycocyanine
                  </h3>
                </div>

                <p className="text-gray-700 mb-4 font-medium">
                  Une série email gratuite pour comprendre :
                </p>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-100/50 rounded-lg">
                  <div className="flex items-center space-x-4 text-sm text-blue-800">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span className="font-medium">1 email par jour</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span className="font-medium">Moins de 5 min/jour</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span className="font-medium">Pas de spam</span>
                    </div>
                  </div>
                </div>
              </div>

              {showNewsletterForm ? (
                <div className="space-y-4">
                  <NewsletterForm
                    size="lg"
                    className="max-w-full"
                    source="phycocyanine-reset-section"
                    interests={[
                      "phycocyanine",
                      "phycocyanine-reset",
                      "immunite",
                      "inflammation",
                      "spiruline-avancee",
                    ]}
                  />
                  <p className="text-xs text-gray-500 text-center">
                    🔷 Recevez votre premier mail dans les 5 minutes ⚡
                  </p>
                </div>
              ) : (
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleCtaClick}
                >
                  Découvrir la phycocyanine !
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
                      className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="font-medium">+1,247 personnes</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="font-medium">4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
