import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Oméga-3 et peau : guide complet',
    description: 'Guide complet des bienfaits des oméga-3 pour une peau souple, hydratée et éclatante.',
    canonicalUrl: 'non-classe-fr/omega-3-et-peau-le-guide-complet-pour-une-peau-souple-hydratee-et-eclatante',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Oméga-3 et peau : guide complet
      </h1>
      <p className="text-xl text-gray-600">
        Guide complet des bienfaits des oméga-3 pour une peau souple, hydratée et éclatante.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
