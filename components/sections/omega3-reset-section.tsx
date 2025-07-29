"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ArrowRight, CheckCircle, Mail, Brain, Heart } from "lucide-react";

interface Omega3ResetSectionProps {
  className?: string;
  showNewsletter?: boolean;
  onCtaClick?: () => void;
}

const benefits = [
  "Ce qu'ils font réellement (cerveau, peau, articulations, humeur)",
  "Les erreurs de dosage les plus courantes",
  "Végétal vs animal : que choisir ?",
  "Comment les intégrer facilement dans votre quotidien",
  "Les signes d'une carence en oméga-3",
  "Quels aliments privilégier (et lesquels éviter)",
  "Les meilleures heures pour les prendre",
];

export function Omega3ResetSection({
  className = "",
  showNewsletter = false,
  onCtaClick,
}: Omega3ResetSectionProps) {
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
      className={`py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 ${className}`}
    >
      <div className="container px-4 md:px-6 lg:px-8">
        {/* Titre sur toute la largeur */}
        <div className="text-center mb-12 w-full">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🐟</span>
            <span>Duo Oublié Essentiel</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight w-full">
            <span className="text-purple-600">OMÉGA-3</span> :<br />
            Le Duo Oublié de
            <br />
            <span className="text-indigo-600">Votre Santé</span>
            <br />
            <span className="text-blue-600">😴</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image à gauche */}
          <div className="relative">
            <div className="relative h-[680px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Image oméga-3 - remplacez par votre image appropriée */}
              <img
                src="/LP_omega-3.png"
                alt="Oméga-3 Reset - Programme 7 jours"
                className="w-full h-full object-cover"
              />

              {/* Overlay avec effet bleu pour rappeler l'océan/poisson */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>

              {/* Badge "Duo Oublié" */}
              <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                <span className="font-semibold text-sm">🟣 Duo Essentiel</span>
              </div>
            </div>
          </div>

          {/* Contenu à droite */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-200 shadow-lg">
              <div className="flex items-start space-x-3 mb-6">
                <div className="flex space-x-2">
                  <Brain className="h-8 w-8 text-purple-600" />
                  <Heart className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>
                      Fatigue chronique ? Moral à plat ? Cheveux ternes ?
                    </strong>
                  </p>
                  <p className="text-gray-600 mt-2">
                    Les oméga-3 sont souvent sous-dosés… alors que ce sont des
                    piliers fondamentaux de votre santé.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6 border border-purple-100">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    💌 7 Jours pour tout comprendre et agir enfin efficacement
                  </h3>
                </div>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-100/50 rounded-lg">
                  <div className="flex items-center justify-between text-sm text-purple-800">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span className="font-medium">7 jours, 7 mails</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">100% vulgarisée</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">0 pression</span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm text-purple-700 font-medium">
                      🔒 Pas de promesse miracle. Juste des infos utiles,
                      simples, vraies.
                    </p>
                  </div>
                </div>
              </div>

              {showNewsletterForm ? (
                <div className="space-y-4">
                  <NewsletterForm
                    size="lg"
                    className="max-w-full"
                    source="omega3-reset-section"
                    interests={[
                      "omega3",
                      "omega-3-reset",
                      "fatigue",
                      "cerveau",
                      "cardiovasculaire",
                      "humeur",
                    ]}
                  />
                  <p className="text-xs text-gray-500 text-center">
                    🟣 Recevez votre premier mail dans les 5 minutes ⚡
                  </p>
                </div>
              ) : (
                <Button
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleCtaClick}
                >
                  🟣 Je veux comprendre (et utiliser) les oméga-3
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
                      className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="font-medium">+1,892 personnes</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="font-medium">4.7/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
