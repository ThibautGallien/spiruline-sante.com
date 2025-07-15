import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Vitamine D à jeun : conseils',
    description: 'Faut-il prendre la vitamine D à jeun ? Conseils pour une absorption optimale.',
    canonicalUrl: 'blog/vitamine-d-faut-il-la-prendre-a-jeun',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Vitamine D à jeun : conseils
      </h1>
      <p className="text-xl text-gray-600">
        Faut-il prendre la vitamine D à jeun ? Conseils pour une absorption optimale.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
