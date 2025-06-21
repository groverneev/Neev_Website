// Install RSS parser first: npm install rss-parser

import Parser from 'rss-parser';
import Image from 'next/image';

// Define TypeScript types
type Post = {
  title: string;
  link: string;
  content: string;
  pubDate: string;
  image: string | null;
};

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://techunpacked.substack.com/feed');

  const posts: Post[] = feed.items.map(item => {
    let image = null;
    // Try to extract image from enclosure or content if available
    if (item.enclosure?.url) {
      image = item.enclosure.url;
    } else {
      const match = item.content?.match(/<img[^>]+src="([^"]+)"/);
      if (match && match[1]) {
        image = match[1];
      }
    }

    return {
      title: item.title || '',
      link: item.link || '',
      content: item.contentSnippet || '',
      pubDate: item.pubDate || '',
      image
    };
  });

  return {
    props: { posts },
    revalidate: 60 * 60
  };
}

export default function Page({ posts }: Props) {
  return (
    <main style={{ maxWidth: 700, margin: '2rem auto', padding: 24 }}>
      <h1>Blog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        {posts.map(post => (
          <a key={post.link} href={post.link} target="_blank" rel="noopener noreferrer" style={{ 
            border: '1px solid #ccc', 
            borderRadius: '12px', 
            textDecoration: 'none', 
            color: '#000', 
            overflow: 'hidden',
            background: '#f8f8f8' 
          }}>
            {post.image ? (
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Image src={post.image} alt={post.title} width={400} height={200} objectFit="cover" />
              </div>
            ) : (
              <div style={{ height: '200px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                No Image Available
              </div>
            )}
            <div style={{ padding: '1rem' }}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <small>{new Date(post.pubDate).toLocaleDateString()}</small>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
