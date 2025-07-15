import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Boutique Natura4Ever, Xelliss et Zinzino',
    description: 'Comparatif des boutiques en ligne Natura4Ever, Xelliss et Zinzino : produits et services.',
    canonicalUrl: 'blog/boutique-natura4ever-xelliss-zinzino',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Boutique Natura4Ever, Xelliss et Zinzino
      </h1>
      <p className="text-xl text-gray-600">
        Comparatif des boutiques en ligne Natura4Ever, Xelliss et Zinzino : produits et services.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
