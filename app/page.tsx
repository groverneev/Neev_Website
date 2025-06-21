import Image from 'next/image';
import ContactSection from '@/components/ContactSection';   // ← make sure the path matches your project

export default function Home() {
  return (
    <main style={{ background: '#f5f6fa', fontFamily: 'Inter, sans-serif' }}>
      {/* ───────── HERO SECTION ───────── */}
      <section
        id="hero"
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#0E1321',
          color: '#fff',
          textAlign: 'center',
          padding: '0 2rem',
        }}
      >
        {/* --- Profile Image --- */}
        <div style={{ flex: 'none' }}>
          <Image
            src="/profile.png"
            alt="Neev Grover, founder of DuneBroom"
            width={140}
            height={140}
            style={{
              borderRadius: '50%',
              border: '4px solid #111',
              boxShadow: '0 4px 18px rgba(0,0,0,0.09)',
              background: '#eee',
              display: 'block',
              margin: 0,
            }}
          />
        </div>

        <h1 style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>
          Neev Grover
        </h1>
        <h2 style={{ fontSize: 28, fontWeight: 400, margin: '1.2rem 0' }}>
          Sophomore at the Harker School
        </h2>
        <p style={{ fontSize: 22, maxWidth: 600, margin: '0 auto 2rem auto' }}>
          Neev is passionate about Computer Science, Chess, and Music. He enjoys building projects,
          playing competitive chess, and writing about technology on his blog.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
          <a
            href="https://github.com/groverneev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#2563eb',
              color: '#fff',
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>

          <a
            href="https://techunpacked.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#14b8a6',
              color: '#fff',
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Blog
          </a>

          <a
            href="https://chess.com/member/lightningpro535/stats/rapid?days=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#F39C12',
              color: '#fff',
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Chess
          </a>

          <a
            href="https://x.com/lightningpro535"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#9B59B6',
              color: '#fff',
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            X
          </a>
        </div>
      </section>

      {/* ───────── CONTACT SECTION (new) ───────── */}
      <ContactSection />
    </main>
  );
}
