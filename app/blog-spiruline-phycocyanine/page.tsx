import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Blog spiruline et phycocyanine',
    description: 'Articles spécialisés sur la spiruline et la phycocyanine : conseils, études et actualités.',
    canonicalUrl: 'blog-spiruline-phycocyanine',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Blog spiruline et phycocyanine
      </h1>
      <p className="text-xl text-gray-600">
        Articles spécialisés sur la spiruline et la phycocyanine : conseils, études et actualités.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
