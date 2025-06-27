import Image from 'next/image';
import ContactSection from '@/components/ContactSection';   // ← make sure the path matches your project
import Head from 'next/head';


export default function Home() {
  return (
    <>
          {/* ───── HEAD goes here ───── */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>

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
          Rising Sophomore at the Harker School
        </h2>
        <p style={{ fontSize: 22, maxWidth: 600, margin: '0 auto 2rem auto' }}>
          Neev is passionate about Computer Science, Chess, and Music. He enjoys building projects,
          playing competitive chess, and writing about technology on his blog.
        </p>

<div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 32 }}>
  {/* GitHub */}
  <a
    href="https://github.com/groverneev"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#fff' }}
  >
    <i className="fa-brands fa-github fa-2x" />
  </a>

  {/* Substack blog – FA doesn’t have a Substack logo, so use a pencil icon */}
  <a
    href="https://techunpacked.substack.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#fff' }}
  >
    <i className="fa-solid fa-pen fa-2x" />
  </a>

  {/* Chess.com profile */}
  <a
    href="https://chess.com/member/lightningpro535/stats/rapid?days=0"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#fff' }}
  >
    <i className="fa-solid fa-chess-pawn fa-2x" />
  </a>



  {/* X/Twitter */}
  <a
    href="https://x.com/lightningpro535"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#fff' }}
  >
    <i className="fa-brands fa-x-twitter fa-2x" />
  </a>

  {/* Substack */}
  <a
    href="https://www.linkedin.com/in/neev-grover-3bb873332/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#fff' }}
  >
    <i className="fa-brands fa-linkedin fa-2x" />
  </a>
 


</div>

      </section>

      {/* ───────── CONTACT SECTION (new) ───────── */}
      <ContactSection />
    </main>
  </>
  );
}
