import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentDirectory = join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
  locale: string;
}

export interface ProductContent {
  title: string;
  description: string;
  benefits: string[];
  usage: string;
  dosage: string;
  scientificStudies: string[];
  content: string;
}

export function getBlogPosts(locale: string): BlogPost[] {
  try {
    const blogDirectory = join(contentDirectory, 'blog', locale);
    const filenames = readdirSync(blogDirectory);
    
    return filenames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const slug = name.replace(/\.md$/, '');
        const fullPath = join(blogDirectory, name);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          slug,
          title: data.title,
          excerpt: data.excerpt,
          content,
          date: data.date,
          category: data.category,
          tags: data.tags || [],
          readingTime: Math.ceil(content.split(' ').length / 200),
          locale
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export function getBlogPost(slug: string, locale: string): BlogPost | null {
  try {
    const fullPath = join(contentDirectory, 'blog', locale, `${slug}.md`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      date: data.date,
      category: data.category,
      tags: data.tags || [],
      readingTime: Math.ceil(content.split(' ').length / 200),
      locale
    };
  } catch {
    return null;
  }
}

export function getProductContent(product: string, locale: string): ProductContent | null {
  try {
    const fullPath = join(contentDirectory, 'products', locale, `${product}.md`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      title: data.title,
      description: data.description,
      benefits: data.benefits || [],
      usage: data.usage || '',
      dosage: data.dosage || '',
      scientificStudies: data.scientificStudies || [],
      content
    };
  } catch {
    return null;
  }
}