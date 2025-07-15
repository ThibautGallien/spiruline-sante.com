import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Spiruline et oméga-3 : le duo santé',
    description: 'Pourquoi associer spiruline et oméga-3 pour une santé optimale : synergie et bienfaits.',
    canonicalUrl: 'blog/spiruline-et-omega-3-le-duo-pour-une-sante-optimale',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Spiruline et oméga-3 : le duo santé
      </h1>
      <p className="text-xl text-gray-600">
        Pourquoi associer spiruline et oméga-3 pour une santé optimale : synergie et bienfaits.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
