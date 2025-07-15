import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Posologie phycocyanine : usage optimal',
    description: 'Comment utiliser la phycocyanine efficacement : dosages et conseils d'utilisation.',
    canonicalUrl: 'phycocyanine/guide-posologie-phycocyanine-usage-optimal',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Posologie phycocyanine : usage optimal
      </h1>
      <p className="text-xl text-gray-600">
        Comment utiliser la phycocyanine efficacement : dosages et conseils d'utilisation.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
