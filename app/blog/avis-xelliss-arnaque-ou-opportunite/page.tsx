import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Avis Xelliss : arnaque ou opportunité ?',
    description: 'Analyse objective de la marque Xelliss : produits, business model et avis clients.',
    canonicalUrl: 'blog/avis-xelliss-arnaque-ou-opportunite',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Avis Xelliss : arnaque ou opportunité ?
      </h1>
      <p className="text-xl text-gray-600">
        Analyse objective de la marque Xelliss : produits, business model et avis clients.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
