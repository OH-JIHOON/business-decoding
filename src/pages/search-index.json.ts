import type { APIRoute } from 'astro';
import { getAllPosts } from '../utils/posts';

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();
  const index = posts.map((post) => ({
    id: post.id,
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags,
    date: post.data.date,
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
