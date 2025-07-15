import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Vitamine D et santé des yeux',
    description: 'Impact de la vitamine D sur la santé oculaire et la prévention des troubles visuels.',
    canonicalUrl: 'blog/vitamine-d-yeux',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Vitamine D et santé des yeux
      </h1>
      <p className="text-xl text-gray-600">
        Impact de la vitamine D sur la santé oculaire et la prévention des troubles visuels.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
