import { getCollection } from 'astro:content';

export async function getAllPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => 
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

export async function getLatestPosts(count: number = 6) {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

export function getRelatedPosts(
  allPosts: any[],
  currentId: string,
  currentTags: string[],
  count: number = 3
) {
  return allPosts
    .filter((post) => post.id !== currentId)
    .map((post) => ({
      post,
      score: post.data.tags.filter((tag: string) => currentTags.includes(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((item) => item.post);
}

export function getPrevNextPosts(allPosts: any[], currentId: string) {
  const index = allPosts.findIndex((post) => post.id === currentId);
  return {
    prev: index < allPosts.length - 1 ? allPosts[index + 1] : null,
    next: index > 0 ? allPosts[index - 1] : null,
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
