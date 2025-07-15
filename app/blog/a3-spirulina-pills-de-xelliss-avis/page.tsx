import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'A3 Spirulina Pills Xelliss : avis',
    description: 'Test et avis sur les gélules A3 Spirulina Pills de Xelliss : efficacité et qualité.',
    canonicalUrl: 'blog/a3-spirulina-pills-de-xelliss-avis',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        A3 Spirulina Pills Xelliss : avis
      </h1>
      <p className="text-xl text-gray-600">
        Test et avis sur les gélules A3 Spirulina Pills de Xelliss : efficacité et qualité.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
