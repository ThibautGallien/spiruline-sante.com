import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Posologie et dosage de la spiruline',
    description: 'Comment bien doser la spiruline selon vos besoins : conseils d'experts et recommandations.',
    canonicalUrl: 'spiruline/spiruline-posologie',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Posologie et dosage de la spiruline
      </h1>
      <p className="text-xl text-gray-600">
        Comment bien doser la spiruline selon vos besoins : conseils d'experts et recommandations.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
