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

      {/* ───────── ABOUT PREVIEW ───────── */}
      <section
        id="about"
        style={{
          background: '#eafcf6',
          color: '#111',
          padding: '5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>About DuneBroom</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          DuneBroom is a student-led robotics project tackling beach pollution with autonomous robots
          and edge AI.
        </p>
        <a
          href="/about_me"
          style={{
            marginTop: 24,
            display: 'inline-block',
            background: '#13c285',
            color: '#fff',
            fontWeight: 700,
            borderRadius: 8,
            padding: '12px 32px',
            fontSize: 17,
            textDecoration: 'none',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          Learn More &rarr;
        </a>
      </section>

      {/* ───────── OUTREACH PREVIEW ───────── */}
      <section
        id="outreach"
        style={{
          background: '#f3f7fd',
          color: '#111',
          padding: '5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>Resources</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          Access lesson plans, advocacy toolkits, and opportunities for teachers and students to
          join DuneBroom’s movement.
        </p>
        <a
          href="/resources"
          style={{
            marginTop: 24,
            display: 'inline-block',
            background: '#1e40af',
            color: '#fff',
            fontWeight: 700,
            borderRadius: 8,
            padding: '12px 32px',
            fontSize: 17,
            textDecoration: 'none',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          See all resources &rarr;
        </a>
      </section>

      {/* ───────── CONTACT SECTION (new) ───────── */}
      <ContactSection />
    </main>
  );
}
