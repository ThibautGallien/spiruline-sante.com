import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Phycocyanine : propriétés, bienfaits et applications',
    description: 'Propriétés thérapeutiques de la phycocyanine et ses applications pour la santé.',
    canonicalUrl: 'phycocyanine/phycocyanine-proprietes-bienfaits-applications',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Phycocyanine : propriétés, bienfaits et applications
      </h1>
      <p className="text-xl text-gray-600">
        Propriétés thérapeutiques de la phycocyanine et ses applications pour la santé.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
