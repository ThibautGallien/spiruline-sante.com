import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Produits Xelliss : gamme complète',
    description: 'Découvrez tous les produits de la gamme Xelliss : caractéristiques et analyses.',
    canonicalUrl: 'blog/xelliss-produits',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Produits Xelliss : gamme complète
      </h1>
      <p className="text-xl text-gray-600">
        Découvrez tous les produits de la gamme Xelliss : caractéristiques et analyses.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
