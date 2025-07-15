import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Phycocyanine liquide : avantages',
    description: 'Pourquoi choisir la phycocyanine liquide : absorption, efficacité et conseils d'usage.',
    canonicalUrl: 'blog/phycocyanine-liquide',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Phycocyanine liquide : avantages
      </h1>
      <p className="text-xl text-gray-600">
        Pourquoi choisir la phycocyanine liquide : absorption, efficacité et conseils d'usage.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
