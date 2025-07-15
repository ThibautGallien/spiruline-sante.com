import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Catégorie Blog',
    description: 'Tous les articles de notre blog sur la spiruline, phycocyanine et santé naturelle.',
    canonicalUrl: 'category/blog',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Catégorie Blog
      </h1>
      <p className="text-xl text-gray-600">
        Tous les articles de notre blog sur la spiruline, phycocyanine et santé naturelle.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
