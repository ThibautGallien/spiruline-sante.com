import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Spiruline pour enfants : bienfaits et précautions',
    description: 'La spiruline convient-elle aux enfants ? Bienfaits, dosages et recommandations.',
    canonicalUrl: 'blog/spiruline-enfants-bienfaits',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Spiruline pour enfants : bienfaits et précautions
      </h1>
      <p className="text-xl text-gray-600">
        La spiruline convient-elle aux enfants ? Bienfaits, dosages et recommandations.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
