import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Politique de confidentialité - Spiruline Santé",
    description:
      "Politique de protection des données personnelles du site spiruline-sante.com, conforme au RGPD.",
    canonicalUrl: "politique-confidentialite",
  });
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Politique de confidentialité
        </h1>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
          <p className="text-blue-800">
            Cette politique de confidentialité explique comment nous collectons,
            utilisons et protégeons vos données personnelles sur
            spiruline-sante.com, en conformité avec le Règlement Général sur la
            Protection des Données (RGPD).
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Responsable du traitement */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Responsable du traitement
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Responsable :</strong> Spiruline Santé
              </p>
              <p className="mb-2">
                <strong>Email :</strong> contact@spiruline-sante.com
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Données personnelles collectées
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.1 Newsletter
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lors de votre inscription à notre newsletter, nous collectons :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Votre adresse email (obligatoire)</li>
              <li>Votre prénom (optionnel)</li>
              <li>La date d'inscription</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.2 Formulaires de contact
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorsque vous nous contactez, nous collectons :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Votre nom et prénom</li>
              <li>Votre adresse email</li>
              <li>Le contenu de votre message</li>
              <li>La date et l'heure de l'envoi</li>
            </ul>
          </section>

          {/* Finalités du traitement */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Finalités du traitement
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Newsletter et communication
                </h3>
                <p className="text-green-700">
                  Envoi de conseils santé, actualités sur la spiruline et offres
                  commerciales pertinentes.
                </p>
                <p className="text-sm text-green-600 mt-2">
                  <strong>Base légale :</strong> Consentement (Art. 6.1.a RGPD)
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Réponse aux demandes
                </h3>
                <p className="text-blue-700">
                  Traitement et réponse à vos questions via les formulaires de
                  contact.
                </p>
                <p className="text-sm text-blue-600 mt-2">
                  <strong>Base légale :</strong> Intérêt légitime (Art. 6.1.f
                  RGPD)
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  Amélioration du site
                </h3>
                <p className="text-purple-700">
                  Analyse des statistiques de navigation pour améliorer
                  l'expérience utilisateur.
                </p>
                <p className="text-sm text-purple-600 mt-2">
                  <strong>Base légale :</strong> Intérêt légitime (Art. 6.1.f
                  RGPD)
                </p>
              </div>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Durée de conservation
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type de données
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Durée de conservation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Newsletter
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Jusqu'à désinscription + 1 mois
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Messages de contact
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      3 ans maximum
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Données de navigation
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      13 mois maximum
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Logs serveur
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      1 an maximum
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Vos droits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Vos droits RGPD
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Conformément au RGPD, vous disposez des droits suivants sur vos
              données personnelles :
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  ✅ Droit d'accès
                </h3>
                <p className="text-green-700 text-sm">
                  Connaître les données que nous détenons sur vous
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  ✏️ Droit de rectification
                </h3>
                <p className="text-blue-700 text-sm">
                  Corriger des données inexactes ou incomplètes
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  🗑️ Droit à l'effacement
                </h3>
                <p className="text-red-700 text-sm">
                  Demander la suppression de vos données
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  ⏸️ Droit à la limitation
                </h3>
                <p className="text-yellow-700 text-sm">
                  Limiter le traitement de vos données
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  📤 Droit à la portabilité
                </h3>
                <p className="text-purple-700 text-sm">
                  Récupérer vos données dans un format exploitable
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  🚫 Droit d'opposition
                </h3>
                <p className="text-orange-700 text-sm">
                  Vous opposer au traitement de vos données
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                💬 Comment exercer vos droits ?
              </h3>
              <p className="text-blue-700 mb-2">
                Pour exercer ces droits, contactez-nous :
              </p>
              <ul className="text-blue-700 space-y-1">
                <li>
                  <strong>Email :</strong> contact@spiruline-sante.com
                </li>
                <li>
                  <strong>Objet :</strong> "Exercice de mes droits RGPD"
                </li>
                <li>
                  <strong>Délai de réponse :</strong> 1 mois maximum
                </li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Cookies et traceurs
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Notre site utilise des cookies pour améliorer votre expérience de
              navigation :
            </p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  🍪 Cookies essentiels
                </h3>
                <p className="text-green-700 text-sm">
                  Nécessaires au fonctionnement du site (sessions, sécurité)
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Pas de consentement requis
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  📊 Cookies analytiques
                </h3>
                <p className="text-blue-700 text-sm">
                  Mesure d'audience et amélioration du site
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Consentement requis
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Vous pouvez configurer votre navigateur pour refuser les cookies
              ou gérer vos préférences via notre bandeau de cookies.
            </p>
          </section>

          {/* Sécurité */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Sécurité des données
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Nous mettons en place des mesures techniques et organisationnelles
              appropriées pour protéger vos données :
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Chiffrement SSL/TLS pour les communications</li>
              <li>Accès limité aux données personnelles</li>
              <li>Sauvegardes sécurisées régulières</li>
              <li>Mise à jour des systèmes de sécurité</li>
              <li>Formation du personnel sur la protection des données</li>
            </ul>
          </section>

          {/* Transferts de données */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Partage et transfert des données
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Nous ne vendons jamais vos données personnelles. Nous pouvons les
              partager uniquement dans les cas suivants :
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  📧 Prestataires techniques
                </h3>
                <p className="text-gray-700 text-sm">
                  Service d'envoi de newsletters (Brevo) - Données hébergées en
                  Union Européenne
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  ⚖️ Obligations légales
                </h3>
                <p className="text-gray-700 text-sm">
                  En cas de demande des autorités compétentes
                </p>
              </div>
            </div>
          </section>

          {/* Contact DPO */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Contact et réclamations
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-green-800 mb-2">
                📧 Nous contacter
              </h3>
              <p className="text-green-700 mb-2">
                Pour toute question relative à cette politique de
                confidentialité :
              </p>
              <p className="text-green-700">
                <strong>Email :</strong> contact@spiruline-sante.com
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                🛡️ Réclamation auprès de la CNIL
              </h3>
              <p className="text-blue-700 mb-2">
                Si vous estimez que vos droits ne sont pas respectés, vous
                pouvez déposer une réclamation auprès de la CNIL :
              </p>
              <p className="text-blue-700">
                <strong>Site web :</strong>{" "}
                <a
                  href="https://www.cnil.fr"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>

          {/* Mises à jour */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Modifications de cette politique
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Cette politique de confidentialité peut être mise à jour. Nous
              vous informerons de tout changement significatif par email ou via
              un avis sur notre site web.
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
