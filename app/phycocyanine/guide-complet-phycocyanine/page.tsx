import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Guide complet de la phycocyanine',
    description: 'Le guide ultime pour comprendre la phycocyanine, ses propriétés et ses applications.',
    canonicalUrl: 'phycocyanine/guide-complet-phycocyanine',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Guide complet de la phycocyanine
      </h1>
      <p className="text-xl text-gray-600">
        Le guide ultime pour comprendre la phycocyanine, ses propriétés et ses applications.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
