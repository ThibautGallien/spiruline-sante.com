import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Bienfaits de la spiruline pour la peau',
    description: 'Guide complet des bienfaits de la spiruline pour une peau éclatante et en bonne santé.',
    canonicalUrl: 'blog/bienfaits-spiruline-peau-guide-complet',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Bienfaits de la spiruline pour la peau
      </h1>
      <p className="text-xl text-gray-600">
        Guide complet des bienfaits de la spiruline pour une peau éclatante et en bonne santé.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
