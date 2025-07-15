import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Phycocyanine contre le stress',
    description: 'La phycocyanine comme remède naturel pour gérer le stress et l'anxiété.',
    canonicalUrl: 'blog/phycocyanine-remede-naturel-contre-stress',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Phycocyanine contre le stress
      </h1>
      <p className="text-xl text-gray-600">
        La phycocyanine comme remède naturel pour gérer le stress et l'anxiété.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
