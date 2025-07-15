import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const contentDirectory = join(process.cwd(), "content");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  author?: string;
  readingTime: number;
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

export function getBlogPosts(): BlogPost[] {
  try {
    const blogDirectory = join(contentDirectory, "blog", "fr");

    if (!existsSync(blogDirectory)) {
      console.warn("Blog directory not found:", blogDirectory);
      return [];
    }

    const filenames = readdirSync(blogDirectory);

    return filenames
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const slug = name.replace(/\.md$/, "");
        const fullPath = join(blogDirectory, name);
        const fileContents = readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || "Sans titre",
          excerpt: data.excerpt || "",
          content,
          date: data.date || new Date().toISOString(),
          category: data.category || "Non classé",
          tags: data.tags || [],
          author: data.author || "Spirulina Health",
          readingTime: Math.ceil(content.split(" ").length / 200),
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = join(contentDirectory, "blog", "fr", `${slug}.md`);

    if (!existsSync(fullPath)) {
      console.warn("Blog post not found:", fullPath);
      return null;
    }

    const fileContents = readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Sans titre",
      excerpt: data.excerpt || "",
      content,
      date: data.date || new Date().toISOString(),
      category: data.category || "Non classé",
      tags: data.tags || [],
      author: data.author || "Spirulina Health",
      readingTime: Math.ceil(content.split(" ").length / 200),
    };
  } catch (error) {
    console.error("Error loading blog post:", error);
    return null;
  }
}

export function getProductContent(product: string): ProductContent | null {
  try {
    const fullPath = join(contentDirectory, "products", "fr", `${product}.md`);

    if (!existsSync(fullPath)) {
      console.warn("Product content not found:", fullPath);
      return null;
    }

    const fileContents = readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "Produit",
      description: data.description || "",
      benefits: data.benefits || [],
      usage: data.usage || "",
      dosage: data.dosage || "",
      scientificStudies: data.scientificStudies || [],
      content,
    };
  } catch (error) {
    console.error("Error loading product content:", error);
    return null;
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];

  const allPosts = getBlogPosts();

  // Filter out current post
  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);

  // Score posts based on category and tags similarity
  const scoredPosts = otherPosts.map((post) => {
    let score = 0;

    // Same category gets high score
    if (post.category === currentPost.category) {
      score += 10;
    }

    // Shared tags get points
    const sharedTags = post.tags.filter((tag) =>
      currentPost.tags.includes(tag)
    );
    score += sharedTags.length * 3;

    return { post, score };
  });

  // Sort by score and return top results
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}
