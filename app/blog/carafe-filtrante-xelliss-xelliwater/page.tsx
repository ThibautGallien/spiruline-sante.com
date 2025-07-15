import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Carafe filtrante Xelliss XelliWater : test et avis',
    description: 'Test complet de la carafe filtrante Xelliss : efficacité, qualité et rapport qualité-prix.',
    canonicalUrl: 'blog/carafe-filtrante-xelliss-xelliwater',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Carafe filtrante Xelliss XelliWater : test et avis
      </h1>
      <p className="text-xl text-gray-600">
        Test complet de la carafe filtrante Xelliss : efficacité, qualité et rapport qualité-prix.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
