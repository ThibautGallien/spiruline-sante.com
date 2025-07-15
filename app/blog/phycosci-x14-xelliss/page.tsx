import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'PhycoSci X14 Xelliss : présentation',
    description: 'Tout savoir sur PhycoSci X14 de Xelliss : caractéristiques et informations produit.',
    canonicalUrl: 'blog/phycosci-x14-xelliss',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        PhycoSci X14 Xelliss : présentation
      </h1>
      <p className="text-xl text-gray-600">
        Tout savoir sur PhycoSci X14 de Xelliss : caractéristiques et informations produit.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
