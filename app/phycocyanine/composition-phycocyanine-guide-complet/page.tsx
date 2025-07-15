import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Composition de la phycocyanine',
    description: 'Structure moléculaire et composition de cette protéine bleue exceptionnelle.',
    canonicalUrl: 'phycocyanine/composition-phycocyanine-guide-complet',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Composition de la phycocyanine
      </h1>
      <p className="text-xl text-gray-600">
        Structure moléculaire et composition de cette protéine bleue exceptionnelle.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
