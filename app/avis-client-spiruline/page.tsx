import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Avis clients spiruline',
    description: 'Témoignages et avis de nos clients sur les produits à base de spiruline.',
    canonicalUrl: 'avis-client-spiruline',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Avis clients spiruline
      </h1>
      <p className="text-xl text-gray-600">
        Témoignages et avis de nos clients sur les produits à base de spiruline.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
