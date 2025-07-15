import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Spiruline et perte de poids',
    description: 'La spiruline peut-elle aider à perdre du poids ? Conseils et méthodes efficaces.',
    canonicalUrl: 'blog/spiruline-perte-de-poids',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Spiruline et perte de poids
      </h1>
      <p className="text-xl text-gray-600">
        La spiruline peut-elle aider à perdre du poids ? Conseils et méthodes efficaces.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
