import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'X-Gold Xelliss : avis et analyse',
    description: 'Avis détaillé sur X-Gold de Xelliss : composition, bienfaits et retours d'expérience.',
    canonicalUrl: 'blog/x-gold-xelliss-avis',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        X-Gold Xelliss : avis et analyse
      </h1>
      <p className="text-xl text-gray-600">
        Avis détaillé sur X-Gold de Xelliss : composition, bienfaits et retours d'expérience.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
