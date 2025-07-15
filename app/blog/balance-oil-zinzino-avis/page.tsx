import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Balance Oil Zinzino : avis et test',
    description: 'Test approfondi de Balance Oil Zinzino : composition, bienfaits et avis utilisateurs.',
    canonicalUrl: 'blog/balance-oil-zinzino-avis',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Balance Oil Zinzino : avis et test
      </h1>
      <p className="text-xl text-gray-600">
        Test approfondi de Balance Oil Zinzino : composition, bienfaits et avis utilisateurs.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
