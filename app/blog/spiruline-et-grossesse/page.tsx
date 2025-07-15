import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Spiruline et grossesse : ce qu'il faut savoir',
    description: 'La spiruline pendant la grossesse : bienfaits, risques et recommandations médicales.',
    canonicalUrl: 'blog/spiruline-et-grossesse',
  });
}

export default function Page() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Spiruline et grossesse : ce qu'il faut savoir
      </h1>
      <p className="text-xl text-gray-600">
        La spiruline pendant la grossesse : bienfaits, risques et recommandations médicales.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          📝 Contenu en cours de rédaction...
        </p>
      </div>
    </div>
  );
}
