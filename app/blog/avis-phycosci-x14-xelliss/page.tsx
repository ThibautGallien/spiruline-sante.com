import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Avis PhycoSci X14 Xelliss',
    description: 'Notre avis complet sur PhycoSci X14 : efficacité, composition et retours clients.',
    canonicalUrl: 'blog/avis-phycosci-x14-xelliss',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Avis PhycoSci X14 Xelliss
      </h1>
      <p className="text-xl text-gray-600">
        Notre avis complet sur PhycoSci X14 : efficacité, composition et retours clients.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
