import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Natura4Ever vs Xelliss : comparaison',
    description: 'Comparaison détaillée entre Natura4Ever et Xelliss : produits, prix et qualité.',
    canonicalUrl: 'blog/natura4ever-xelliss',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Natura4Ever vs Xelliss : comparaison
      </h1>
      <p className="text-xl text-gray-600">
        Comparaison détaillée entre Natura4Ever et Xelliss : produits, prix et qualité.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
