import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Oméga-3 et fluidification du sang',
    description: 'Comment les oméga-3 contribuent à la fluidification du sang et à la santé cardiovasculaire.',
    canonicalUrl: 'non-classe-fr/omega-3-fluidifie-sang',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Oméga-3 et fluidification du sang
      </h1>
      <p className="text-xl text-gray-600">
        Comment les oméga-3 contribuent à la fluidification du sang et à la santé cardiovasculaire.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
