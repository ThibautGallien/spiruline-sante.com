import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Conditions générales de vente - Spiruline Santé",
    description:
      "Conditions générales de vente et d'utilisation du site spiruline-sante.com. Modalités de commande et livraison.",
    canonicalUrl: "conditions-generales-vente",
  });
}

export default function ConditionsGeneralesVentePage() {
  return (
    <div className="container px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Conditions générales de vente
        </h1>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
          <p className="text-blue-800">
            <strong>Information importante :</strong> Ce site présente des
            produits commercialisés par nos partenaires Zinzino et Xelliss. Les
            commandes sont traitées directement par ces partenaires selon leurs
            propres conditions générales de vente.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Article 1 - Objet */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 1 - Objet et champ d'application
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les présentes conditions générales de vente (CGV) régissent les
              relations entre :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="mb-2">
                <strong>Le vendeur :</strong> Thibaut - Spiruline Santé
              </p>
              <p className="mb-2">
                <strong>Statut :</strong> Micro-entreprise
              </p>
              <p className="mb-2">
                <strong>SIRET :</strong> 884 664 434 00013
              </p>
              <p className="mb-2">
                <strong>Email :</strong> contact@spiruline-sante.com
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Et toute personne physique ou morale souhaitant procéder à un
              achat via le site spiruline-sante.com.
            </p>
          </section>

          {/* Article 2 - Produits et services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 2 - Produits et services
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.1 Nature des produits
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Spiruline Santé propose :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                Contenus informatifs et éducatifs sur la spiruline et la santé
                naturelle
              </li>
              <li>Guides et conseils d'experts en nutrition</li>
              <li>
                Redirection vers des produits de qualité de nos partenaires
              </li>
              <li>Service de conseil personnalisé</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.2 Produits partenaires
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <p className="text-yellow-800 mb-2">
                <strong>⚠️ Important :</strong>
              </p>
              <p className="text-yellow-700">
                Les produits Zinzino et Xelliss présentés sur notre site sont
                commercialisés directement par ces entreprises. Nous agissons en
                tant qu'affilié et les commandes sont traitées selon leurs
                propres conditions de vente.
              </p>
            </div>
          </section>

          {/* Article 3 - Commandes */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 3 - Commandes et processus d'achat
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3.1 Processus de commande
            </h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-6">
              <li>Sélection du produit ou service sur spiruline-sante.com</li>
              <li>
                Redirection vers le site du partenaire (Zinzino ou Xelliss)
              </li>
              <li>Finalisation de la commande sur le site partenaire</li>
              <li>Confirmation de commande envoyée par le partenaire</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3.2 Validation de commande
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La commande n'est définitive qu'après :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Validation du paiement par le partenaire</li>
              <li>Confirmation écrite envoyée par email</li>
              <li>Vérification de la disponibilité des produits</li>
            </ul>
          </section>

          {/* Article 4 - Prix */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 4 - Prix et modalités de paiement
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4.1 Prix
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les prix sont indiqués en euros, toutes taxes comprises (TTC),
              hors frais de livraison. Les prix peuvent varier selon les
              promotions en cours chez nos partenaires.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4.2 Modalités de paiement
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le paiement s'effectue directement sur les sites partenaires qui
              acceptent généralement :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Carte bancaire (Visa, Mastercard, American Express)</li>
              <li>PayPal</li>
              <li>Virement bancaire</li>
              <li>Prélèvement automatique (abonnements)</li>
            </ul>
          </section>

          {/* Article 5 - Livraison */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 5 - Livraison et expédition
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                📦 Conditions de livraison
              </h3>
              <p className="text-green-700">
                Les livraisons sont assurées par nos partenaires selon leurs
                propres modalités :
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🚚 Zinzino</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Livraison en France et 17 pays du monde</li>
                  <li>• Frais de port : Variables selon commande</li>
                  <li>• Transporteur : DHL, Colissimo</li>
                  <li>• Suivi de commande inclus</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">📦 Xelliss</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Livraison en France et 17 pays</li>
                  <li>• Des frais de port s'appliquent</li>
                  <li>
                    • Transporteur : En fonction des transporteurs disponibles
                    dans votre zone géographique
                  </li>
                  <li>• Notification par email</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article 6 - Droit de rétractation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 6 - Droit de rétractation
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                ↩️ Délai de rétractation
              </h3>
              <p className="text-blue-700">
                Conformément au Code de la consommation, vous disposez d'un
                délai de rétractation. Toutefois, il faut contacter directement
                Zinzino (qui a fusionné avec Xelliss) pour appliquer celui-ci,
                je ne suis qu'un affilié, je n'ai pas accès aux commandes et au
                support direct .
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.1 Modalités de rétractation
            </h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-6">
              <li>
                Contactez directement le service client du partenaire concerné
              </li>
              <li>Retournez les produits dans leur emballage d'origine</li>
              <li>Les frais de retour sont à votre charge (sauf défaut)</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.2 Exceptions au droit de rétractation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le droit de rétractation ne s'applique pas aux :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Produits périssables ou déjà entamés</li>
              <li>Produits personnalisés ou sur-mesure</li>
              <li>Services entièrement exécutés avec accord préalable</li>
            </ul>
          </section>

          {/* Article 7 - Garanties */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 7 - Garanties et conformité
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              7.1 Garantie de conformité
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos partenaires garantissent que leurs produits sont conformes aux
              descriptions et aux normes en vigueur. En cas de non-conformité,
              vous bénéficiez :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Du droit à la réparation ou au remplacement</li>
              <li>De la garantie légale de conformité (2 ans)</li>
              <li>De la garantie contre les vices cachés</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              7.2 Limitation de responsabilité
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <p className="text-yellow-800">
                Spiruline Santé agit en tant qu'intermédiaire et ne peut être
                tenu responsable des produits vendus par ses partenaires. Notre
                responsabilité se limite aux informations et conseils fournis
                sur notre site.
              </p>
            </div>
          </section>

          {/* Article 8 - Service client */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 8 - Service client et médiation
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              8.1 Contact client
            </h3>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-green-700 mb-4">
                Pour toute question ou réclamation :
              </p>
              <ul className="text-green-700 space-y-2">
                <li>
                  <strong>Email :</strong> contact@spiruline-sante.com
                </li>

                <li>
                  <strong>Délai de réponse :</strong> 48h maximum
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              8.2 Médiation de la consommation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              En cas de litige non résolu, vous pouvez faire appel gratuitement
              à un médiateur de la consommation :
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-700">
                <strong>Site web :</strong>{" "}
                <a href="#" className="underline">
                  www.mediation-consommation.fr
                </a>
              </p>
            </div>
          </section>

          {/* Article 9 - Données personnelles */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 9 - Protection des données personnelles
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Le traitement de vos données personnelles est régi par notre
              <a
                href="/politique-confidentialite"
                className="text-green-600 hover:text-green-700 underline"
              >
                {" "}
                politique de confidentialité
              </a>
              , conforme au RGPD.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                🔒 Vos droits
              </h3>
              <p className="text-gray-700 text-sm">
                Vous disposez d'un droit d'accès, de rectification, d'effacement
                et de portabilité de vos données personnelles. Contactez-nous
                pour exercer ces droits.
              </p>
            </div>
          </section>

          {/* Article 10 - Force majeure */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 10 - Force majeure
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Spiruline Santé ne pourra être tenu responsable de tout retard ou
              défaillance dans l'exécution de ses obligations en cas de force
              majeure, notamment :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Catastrophes naturelles</li>
              <li>Conflits sociaux</li>
              <li>Défaillance des réseaux de télécommunication</li>
              <li>Pandémie ou mesures gouvernementales</li>
              <li>Cyber-attaques</li>
            </ul>
          </section>

          {/* Article 11 - Droit applicable */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 11 - Droit applicable et juridiction
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les présentes CGV sont soumises au droit français. En cas de
              litige, les tribunaux français seront seuls compétents.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-700">
                <strong>Juridiction compétente :</strong> Cherbourg
              </p>
            </div>
          </section>

          {/* Article 12 - Modifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Article 12 - Modifications des CGV
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Spiruline Santé se réserve le droit de modifier les présentes
              conditions générales de vente à tout moment. Les nouvelles
              conditions s'appliquent aux commandes passées après leur mise en
              ligne.
            </p>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500">
              <strong>Dernière mise à jour :</strong>{" "}
              {new Date().toLocaleDateString("fr-FR")}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Version :</strong> 1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
