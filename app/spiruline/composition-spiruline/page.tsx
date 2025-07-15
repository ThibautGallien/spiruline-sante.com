import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Composition de la spiruline',
    description: 'Analyse complète des nutriments : protéines, vitamines, minéraux et antioxydants de la spiruline.',
    canonicalUrl: 'spiruline/composition-spiruline',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Composition de la spiruline
      </h1>
      <p className="text-xl text-gray-600">
        Analyse complète des nutriments : protéines, vitamines, minéraux et antioxydants de la spiruline.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
