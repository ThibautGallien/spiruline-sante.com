import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Qu'est-ce que la spiruline ?',
    description: 'Découvrez cette micro-algue exceptionnelle, son origine et pourquoi elle révolutionne la nutrition.',
    canonicalUrl: 'spiruline/la-spiruline-cest-quoi',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Qu'est-ce que la spiruline ?
      </h1>
      <p className="text-xl text-gray-600">
        Découvrez cette micro-algue exceptionnelle, son origine et pourquoi elle révolutionne la nutrition.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
