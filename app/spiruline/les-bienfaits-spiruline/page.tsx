import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Les bienfaits de la spiruline',
    description: 'Tous les bienfaits scientifiquement prouvés de la spiruline pour votre santé et votre bien-être.',
    canonicalUrl: 'spiruline/les-bienfaits-spiruline',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Les bienfaits de la spiruline
      </h1>
      <p className="text-xl text-gray-600">
        Tous les bienfaits scientifiquement prouvés de la spiruline pour votre santé et votre bien-être.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
