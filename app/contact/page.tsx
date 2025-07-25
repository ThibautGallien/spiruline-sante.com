import { generateSEOMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send } from "lucide-react";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Contact - Spiruline Santé",
    description:
      "Contactez nos experts en spiruline et santé naturelle. Conseils personnalisés et réponses à vos questions.",
    canonicalUrl: "contact",
  });
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez nos experts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question sur la spiruline, la phycocyanine ou nos produits ?
            Notre équipe d'experts est là pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <span>Envoyez-nous un message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <Input
                        type="text"
                        placeholder="Votre prénom"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <Input
                        type="text"
                        placeholder="Votre nom"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="votre.email@exemple.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Choisissez un sujet</option>
                      <option value="conseil-spiruline">
                        Conseil spiruline
                      </option>
                      <option value="conseil-phycocyanine">
                        Conseil phycocyanine
                      </option>
                      <option value="produits-zinzino">Produits Zinzino</option>
                      <option value="produits-xelliss">Produits Xelliss</option>
                      <option value="posologie">Questions de posologie</option>
                      <option value="commande">Aide à la commande</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <Textarea
                      placeholder="Décrivez votre demande ou votre question..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">
                        J'accepte la{" "}
                        <a
                          href="/politique-confidentialite"
                          className="text-green-600 hover:text-green-700 underline"
                        >
                          politique de confidentialité
                        </a>{" "}
                        et que mes données soient utilisées pour répondre à ma
                        demande. *
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Champs obligatoires
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* FAQ rapide */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Questions fréquentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      🌿 Quelle spiruline choisir ?
                    </h3>
                    <p className="text-green-700 text-sm">
                      Nous recommandons les produits Xelliss pour leur qualité
                      premium et leur concentration élevée en phycocyanine.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      💊 Quelle posologie adopter ?
                    </h3>
                    <p className="text-blue-700 text-sm">
                      Généralement 3-5g par jour pour la spiruline, mais nous
                      personnalisons selon vos besoins.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">
                      🚚 Délais de livraison ?
                    </h3>
                    <p className="text-purple-700 text-sm">
                      2-5 jours ouvrés selon nos partenaires Zinzino et Xelliss.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <a href="/blog">Voir tous nos guides</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Engagement qualité */}
            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  🎯 Notre engagement
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Conseils personnalisés et gratuits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Réponse sous 24h maximum</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Produits de qualité certifiée</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Expertise en nutrition naturelle</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section partenaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nos partenaires de confiance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🌊 Zinzino
                </h3>
                <p className="text-gray-600">
                  Leader européen des oméga-3 et de l'équilibre nutritionnel
                </p>
              </div>
              <Button variant="outline" asChild>
                <a
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/shop"
                  target="_blank"
                >
                  Découvrir Zinzino
                </a>
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🔬 Xelliss
                </h3>
                <p className="text-gray-600">
                  Spécialiste français de la spiruline et phycocyanine premium
                </p>
              </div>
              <Button variant="outline" asChild>
                <a
                  href="https://www.zinzino.com/shop/2016309984/FR/fr-FR/products/brand-shop/xelliss-products/"
                  target="_blank"
                >
                  Découvrir Xelliss
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
