import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Phycocyanine : Propriétés et Bienfaits',
    description: 'Découvrez la phycocyanine, le pigment bleu de la spiruline aux vertus antioxydantes exceptionnelles.',
    canonicalUrl: 'phycocyanine',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Phycocyanine : Propriétés et Bienfaits
      </h1>
      <p className="text-xl text-gray-600">
        Découvrez la phycocyanine, le pigment bleu de la spiruline aux vertus antioxydantes exceptionnelles.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
