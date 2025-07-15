import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Zinzino Oméga-3 : analyse complète',
    description: 'Analyse des compléments oméga-3 Zinzino : composition, bienfaits et avis.',
    canonicalUrl: 'blog/Zinzino-Omega-3',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Zinzino Oméga-3 : analyse complète
      </h1>
      <p className="text-xl text-gray-600">
        Analyse des compléments oméga-3 Zinzino : composition, bienfaits et avis.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
