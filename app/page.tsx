export default function Home() {
  return (
    <main style={{
      background: '#f5f6fa',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* HERO SECTION */}
      <section id="hero" style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0e0e0e',
        color: '#fff',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        <h1 style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>DuneBroom</h1>
        <h2 style={{ fontSize: 28, fontWeight: 400, margin: '1.2rem 0' }}>Sweep Clean, Think Smart</h2>
        <p style={{ fontSize: 22, maxWidth: 600, margin: '0 auto 2rem auto' }}>
          Robotics, Innovation, and Clean Oceans.
        </p>
        <a href="/mission_statement" style={{
          background: '#fff',
          color: '#0e0e0e',
          fontWeight: 700,
          fontSize: 20,
          borderRadius: 8,
          padding: '12px 32px',
          textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
        }}>
          Mission Statement
        </a>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" style={{
        background: '#eafcf6',
        color: '#111',
        padding: '5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>About DuneBroom</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          DuneBroom is a student-led robotics project tackling beach pollution with autonomous robots and edge AI.
        </p>
<a href="/about_me" style={{
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
  transition: 'background 0.2s, color 0.2s'
}}>
  Learn More &rarr;
</a>
      </section>

      {/* OUTREACH PREVIEW */}
      <section id="outreach" style={{
        background: '#f3f7fd',
        color: '#111',
        padding: '5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16 }}>Resources</h2>
        <p style={{ fontSize: 20, maxWidth: 650, textAlign: 'center' }}>
          Access lesson plans, advocacy toolkits, and opportunities for teachers and students to join DuneBroom’s movement.
        </p>
<a href="/resources" style={{
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
  transition: 'background 0.2s, color 0.2s'
}}>
  See all resources &rarr;
</a>
      </section>

      {/* CONTACT PREVIEW */}

<section id="contact" style={{
  background: '#fff',
  color: '#111',
  padding: '5rem 2rem 6rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}}>
  <h2 style={{
    fontWeight: 700,
    fontSize: 36,
    marginBottom: 8,
    color: '#18181b',
    letterSpacing: '-0.03em'
  }}>Contact Us</h2>
  <p style={{
    color: '#52525b',
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center'
  }}>
    Drop us a line, ask a question, or just say hello!
  </p>
  <div style={{
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    marginBottom: 32
  }}>

    <a
      href="https://github.com/groverneev"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: '#1e40af',
        color: '#fff',
        borderRadius: 8,
        padding: '10px 24px',
        fontWeight: 600,
        textDecoration: 'none'
      }}
    >
      GitHub
    </a>
    <a
      href="https://x.com/lightningpro535"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: '#18181b',
        color: '#fff',
        borderRadius: 8,
        padding: '10px 24px',
        fontWeight: 600,
        textDecoration: 'none'
      }}
    >
      X
    </a>

    <a
      href="techunpacked.substack.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: '#14b8a6',
        color: '#fff',
        borderRadius: 8,
        padding: '10px 24px',
        fontWeight: 600,
        textDecoration: 'none'
      }}
    >
      Substack
    </a>


  </div>
  {/* Embedded Google Form */}
  <div style={{
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    padding: 24,
    minHeight: 420,
    margin: '0 auto',
    width: '100%',
    maxWidth: 520
  }}>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSc2Mu-JSmoX_qaa0uosqCasG70Cu_TV9zOaYJND9c8svt6qgQ/viewform?embedded=true"
      width="100%"
      height="420"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      style={{ border: 'none' }}
      title="Contact Form"
    />
  </div>
</section>
    </main>
  );
}
