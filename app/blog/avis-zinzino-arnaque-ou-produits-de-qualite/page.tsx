import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Avis Zinzino : arnaque ou produits de qualité ?',
    description: 'Notre analyse complète et objective des produits Zinzino : qualité, prix et avis clients.',
    canonicalUrl: 'blog/avis-zinzino-arnaque-ou-produits-de-qualite',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Avis Zinzino : arnaque ou produits de qualité ?
      </h1>
      <p className="text-xl text-gray-600">
        Notre analyse complète et objective des produits Zinzino : qualité, prix et avis clients.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
