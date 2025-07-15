import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Oméga-3 contre la chute de cheveux',
    description: 'Comment les oméga-3 peuvent aider à prévenir et traiter la chute de cheveux.',
    canonicalUrl: 'blog/les-bienfaits-des-omega-3-contre-la-chute-de-cheveux',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Oméga-3 contre la chute de cheveux
      </h1>
      <p className="text-xl text-gray-600">
        Comment les oméga-3 peuvent aider à prévenir et traiter la chute de cheveux.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
