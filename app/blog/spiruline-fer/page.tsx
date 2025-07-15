import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Spiruline et fer : la solution contre la carence',
    description: 'Pourquoi la spiruline est une excellente source de fer et comment lutter contre l'anémie.',
    canonicalUrl: 'blog/spiruline-fer',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Spiruline et fer : la solution contre la carence
      </h1>
      <p className="text-xl text-gray-600">
        Pourquoi la spiruline est une excellente source de fer et comment lutter contre l'anémie.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
