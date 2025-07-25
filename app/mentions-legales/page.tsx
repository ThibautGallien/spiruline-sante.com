import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Mentions légales - Spiruline Santé",
    description:
      "Mentions légales, informations sur l'éditeur du site spiruline-sante.com et conditions d'utilisation.",
    canonicalUrl: "mentions-legales",
  });
}

export default function MentionsLegalesPage() {
  return (
    <div className="container px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Mentions légales
        </h1>

        <div className="prose prose-lg max-w-none">
          {/* Éditeur du site */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Éditeur du site
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Nom :</strong> Thibaut - Spiruline Santé
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
              <p className="mb-2">
                <strong>Directeur de publication :</strong> Thibaut
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Hébergement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le site spiruline-sante.com est hébergé par :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="mb-2">
                <strong>Hébergeur :</strong> Vercel
              </p>
              <p className="mb-2">
                <strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA
                91789
              </p>
              <p className="mb-2">
                <strong>Téléphone :</strong> (559) 288-7060
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'ensemble de ce site relève de la législation française et
              internationale sur le droit d'auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés, y
              compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              La reproduction de tout ou partie de ce site sur un support
              électronique quel qu'il soit est formellement interdite sauf
              autorisation expresse du directeur de la publication.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les marques et logos présents sur le site sont déposés par les
              sociétés qui en sont propriétaires.
            </p>
          </section>

          {/* Responsabilité */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Responsabilité
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les informations contenues sur ce site sont aussi précises que
              possible et le site est périodiquement remis à jour, mais peut
              toutefois contenir des inexactitudes, des omissions ou des
              lacunes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si vous constatez une lacune, erreur ou ce qui parait être un
              dysfonctionnement, merci de bien vouloir le signaler par email à
              l'adresse contact@spiruline-sante.com, en décrivant le problème de
              la manière la plus précise possible.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-yellow-800 font-medium">
                ⚠️ Avertissement santé
              </p>
              <p className="text-yellow-700 mt-2">
                Les informations présentes sur ce site ne se substituent pas à
                un avis médical. Consultez toujours un professionnel de santé
                avant de commencer une supplémentation.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Liens hypertextes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les liens hypertextes mis en place dans le cadre du présent site
              web en direction d'autres ressources présentes sur le réseau
              Internet ne sauraient engager la responsabilité de Spiruline
              Santé.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tout site public ou privé est autorisé à établir, sans
              autorisation préalable, un lien vers les informations diffusées
              par Spiruline Santé, à condition que le lien ne soit pas présenté
              de façon trompeuse.
            </p>
          </section>

          {/* Collecte de données */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Collecte de données
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ce site collecte des données personnelles dans le cadre de :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>L'inscription à la newsletter</li>
              <li>Les formulaires de contact</li>
              <li>Les cookies de navigation</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Pour plus d'informations sur le traitement de vos données
              personnelles, consultez notre
              <a
                href="/politique-confidentialite"
                className="text-green-600 hover:text-green-700 underline"
              >
                {" "}
                politique de confidentialité
              </a>
              .
            </p>
          </section>

          {/* Droit applicable */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Droit applicable et juridiction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tout litige en relation avec l'utilisation du site
              spiruline-sante.com est soumis au droit français. Il est fait
              attribution exclusive de juridiction aux tribunaux compétents de
              Cherbourg.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour toute question concernant ces mentions légales, vous pouvez
              nous contacter :
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Email :</strong> contact@spiruline-sante.com
              </p>
              <p className="mb-2">
                <strong>Formulaire de contact :</strong>
                <a
                  href="/contact"
                  className="text-green-600 hover:text-green-700 underline ml-1"
                >
                  Page contact
                </a>
              </p>
            </div>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
