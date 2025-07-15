import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Xelliss produit : guide complet',
    description: 'Guide complet des produits Xelliss : présentation, caractéristiques et conseils.',
    canonicalUrl: 'blog/xelliss-produit',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Xelliss produit : guide complet
      </h1>
      <p className="text-xl text-gray-600">
        Guide complet des produits Xelliss : présentation, caractéristiques et conseils.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
