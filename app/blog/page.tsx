import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Blog Spiruline et Santé Naturelle',
    description: 'Articles, conseils et actualités sur la spiruline, phycocyanine et compléments naturels.',
    canonicalUrl: 'blog',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Blog Spiruline et Santé Naturelle
      </h1>
      <p className="text-xl text-gray-600">
        Articles, conseils et actualités sur la spiruline, phycocyanine et compléments naturels.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
