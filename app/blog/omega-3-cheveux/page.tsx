import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Oméga-3 et cheveux : guide complet',
    description: 'Les bienfaits des oméga-3 pour la santé capillaire et la beauté des cheveux.',
    canonicalUrl: 'blog/omega-3-cheveux',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Oméga-3 et cheveux : guide complet
      </h1>
      <p className="text-xl text-gray-600">
        Les bienfaits des oméga-3 pour la santé capillaire et la beauté des cheveux.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
