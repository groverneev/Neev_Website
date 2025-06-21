export default function HeroBanner() {
  return (
    <section style={{
      padding: '3rem 1rem',
      background: 'linear-gradient(90deg, #bbf7d0 0%, #bae6fd 100%)',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: 48, fontWeight: 800, color: '#166534' }}>DuneBroom.com</h1>
      <p style={{ fontSize: 22, marginTop: 10, color: '#334155' }}>Sweep Clean, Think Smart</p>
      <div style={{
        background: '#fff',
        borderRadius: 14,
        padding: '12px 32px',
        margin: '1.5rem auto 0 auto',
        display: 'inline-block',
        fontSize: 20,
        color: '#475569',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
      }}>
        Mission: Clean beaches with robotics & youth-powered innovation
      </div>
    </section>
  )
}
