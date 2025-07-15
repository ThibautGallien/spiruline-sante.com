import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Huile de poisson oméga-3 : bienfaits',
    description: 'Les bienfaits de l'huile de poisson riche en oméga-3 pour la santé globale.',
    canonicalUrl: 'non-classe-fr/huile-de-poisson-omega-3-bienfaits',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Huile de poisson oméga-3 : bienfaits
      </h1>
      <p className="text-xl text-gray-600">
        Les bienfaits de l'huile de poisson riche en oméga-3 pour la santé globale.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
