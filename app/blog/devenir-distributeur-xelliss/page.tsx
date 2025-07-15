import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Devenir distributeur Xelliss',
    description: 'Comment devenir distributeur Xelliss : conditions, avantages et démarches à suivre.',
    canonicalUrl: 'blog/devenir-distributeur-xelliss',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Devenir distributeur Xelliss
      </h1>
      <p className="text-xl text-gray-600">
        Comment devenir distributeur Xelliss : conditions, avantages et démarches à suivre.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
