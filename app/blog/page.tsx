// NEXT‑13/14 **app router** compatible blog integration
// ----------------------------------------------------
// 1. Install dependency once:
//    npm install rss-parser
// 2. Drop this file at:  app/blog/page.tsx  (App Router)
// 3. Vercel (or `next build`) will statically render it and
//    re‑validate every hour, so new Substack posts appear automatically.

import Parser from 'rss-parser';
import Image from 'next/image';

// Revalidate every 3600 s (1 h) → Incremental Static Regeneration
export const revalidate = 3600;

// ---------------- types ----------------
type Post = {
  title: string;
  link: string;
  content: string;
  pubDate: string;
  image: string | null;
};

// ------------- data loader -------------
async function fetchPosts(): Promise<Post[]> {
  const parser = new Parser();
  const feed = await parser.parseURL('https://techunpacked.substack.com/feed');

  return feed.items.map(item => {
    // Attempt to get cover image from <enclosure> or first <img>
    let image: string | null = null;
    if (item.enclosure?.url) {
      image = item.enclosure.url;
    } else {
      const match = item.content?.match(/<img[^>]+src="([^"]+)"/);
      if (match?.[1]) image = match[1];
    }

    return {
      title: item.title ?? '',
      link: item.link ?? '#',
      content: item.contentSnippet ?? '',
      pubDate: item.pubDate ?? '',
      image,
    };
  });
}

// ------------- page component -------------
// This is an **async server component** (default in App Router)
export default async function Page() {
  const posts = await fetchPosts();

  return (
    <main style={{ maxWidth: 700, margin: '2rem auto', padding: 24 }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Blog</h1>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {posts.map(post => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: '1px solid #ccc',
              borderRadius: 12,
              textDecoration: 'none',
              color: '#000',
              overflow: 'hidden',
              background: '#f8f8f8',
              transition: 'transform 0.15s ease',
            }}
          >
            {post.image ? (
              <div style={{ height: 200, overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ) : (
              <div
                style={{
                  height: 200,
                  background: '#e2e2e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontStyle: 'italic',
                }}
              >
                No image available
              </div>
            )}

            <div style={{ padding: '1rem' }}>
              <h2 style={{ marginTop: 0 }}>{post.title}</h2>
              <p style={{ marginTop: 8, marginBottom: 8 }}>{post.content}</p>
              <small style={{ color: '#666' }}>
                {new Date(post.pubDate).toLocaleDateString()}
              </small>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
