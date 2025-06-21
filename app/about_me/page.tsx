import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{
      minHeight: '80vh',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Inter, Arial, Helvetica, sans-serif',
      padding: '0',
      margin: '0'
    }}>
      {/* Responsive style tag */}
      <style>{`
        @media (max-width: 700px) {
          .about-section {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.2rem !important;
            text-align: center !important;
            padding: 2rem 5vw !important;
          }
          .about-text {
            max-width: 98vw !important;
            width: 100% !important;
            margin: 0 auto !important;
            text-align: center !important;
            font-size: 17px !important;
          }
          .about-section img {
            margin: 0 auto !important;
          }
        }
      `}</style>

      <section
        className="about-section"
        style={{
          width: '100%',
          maxWidth: 820,
          margin: '4rem auto 0 auto',
          background: '#f7f7f7',
          borderRadius: 28,
          padding: '3rem 2rem',
          boxShadow: '0 6px 32px rgba(20,20,25,0.06)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2.5rem'
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
              margin: 0
            }}
          />
        </div>
        {/* --- Main About Text --- */}
        <div
          className="about-text"
          style={{
            maxWidth: 420,
            width: '100%',
            margin: '0 auto'
          }}
        >
          <h1 style={{
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: '-0.01em',
            marginBottom: 8,
            color: '#0e0e0e'
          }}>About <span style={{ color: '#2563eb' }}>Me</span></h1>
          <h2 style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#13c285',
            margin: 0,
            marginBottom: 20
          }}>Neev Grover • Founder & Student Engineer</h2>
          <p style={{
            fontSize: 18,
            color: '#222',
            marginBottom: 8
          }}>
              <b>Neev</b> is a sophomore at The Harker School passionate about Computer Science, Chess, and Music. He enjoys building projects, playing competitive chess, and writing about technology on his blog at <a href="https://techunpacked.substack.com" target="_blank" rel="noopener noreferrer">techunpacked.substack.com</a>.
          </p>
          <p style={{
            fontSize: 18,
            color: '#222'
          }}>
            Neev founded DuneBroom in September 2024 after combining his interests in machine learning, robotics, and environmental impact. What started as a simple project quickly evolved into an autonomous beach-cleaning robot, blending 3D printing, computer vision, and hardware design. Through DuneBroom, Neev aims to apply technology to solve real-world sustainability challenges.
            <br />
            <br />
          </p>

        </div>
      </section>
    </main>
  );
}
