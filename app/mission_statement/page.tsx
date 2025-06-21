export default function Page() {
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
          }}>About <span style={{ color: '#2563eb' }}>DuneBroom</span></h1>
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
            <b>DuneBroom</b> is a student-led robotics project dedicated to making a real-world impact for our beaches and our planet.
            Founded by <b>Neev Grover</b>, DuneBroom builds and deploys autonomous robots powered by edge AI to clean beaches and collect environmental data.
          </p>
          <p style={{
            fontSize: 18,
            color: '#222'
          }}>
            Our team is made up of youth builders, engineers, and environmental advocates who believe in technology as a force for good. From hardware design to software innovation, we’re proving that young people can build solutions to big challenges!
            <br />
            <br />
            <span style={{
              background: '#0e0e0e',
              color: '#fff',
              padding: '0.1em 0.6em',
              borderRadius: 6,
              fontWeight: 700
            }}>
              Join us as we sweep clean and think smart!
            </span>
          </p>
        </div>
      </section>
    </main>
  )
}