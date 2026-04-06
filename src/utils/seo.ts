export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime: string;
    tags: string[];
  };
}

const SITE_NAME = 'business decoding';
const SITE_URL = 'https://business-decoding.pages.dev';

export function getPageTitle(title: string): string {
  if (title === SITE_NAME) return title;
  return `${title} — ${SITE_NAME}`;
}

export function getCanonicalURL(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export function generateJSONLD(props: {
  type: 'BlogPosting' | 'WebPage';
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  tags?: string[];
}) {
  const base = {
    '@context': 'https://schema.org',
    '@type': props.type,
    headline: props.title,
    description: props.description,
    url: props.url,
    publisher: {
      '@type': 'Person',
      name: 'business decoding',
      url: SITE_URL,
    },
  };

  if (props.type === 'BlogPosting' && props.datePublished) {
    return {
      ...base,
      datePublished: props.datePublished,
      dateModified: props.datePublished,
      keywords: props.tags?.join(', ') || '',
      author: {
        '@type': 'Person',
        name: 'business decoding',
      },
    };
  }

  return base;
}

export function generateBreadcrumbJSONLD(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
