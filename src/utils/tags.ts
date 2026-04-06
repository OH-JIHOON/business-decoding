export function getAllTags(posts: any[]): Map<string, number> {
  const tagMap = new Map<string, number>();
  posts.forEach((post) => {
    post.data.tags.forEach((tag: string) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });
  return new Map([...tagMap.entries()].sort((a, b) => b[1] - a[1]));
}

export function getPostsByTag(posts: any[], tag: string) {
  return posts.filter((post) => post.data.tags.includes(tag));
}
