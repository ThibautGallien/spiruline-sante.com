import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'NaturaBlue Natura4Ever : phycocyanine',
    description: 'Présentation de NaturaBlue de Natura4Ever : phycocyanine liquide et bienfaits.',
    canonicalUrl: 'non-classe-fr/naturablue-natura4ever-phycocyanine',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        NaturaBlue Natura4Ever : phycocyanine
      </h1>
      <p className="text-xl text-gray-600">
        Présentation de NaturaBlue de Natura4Ever : phycocyanine liquide et bienfaits.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
