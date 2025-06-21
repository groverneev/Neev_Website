export default function ActionVideo() {
  return (
    <section style={{
      maxWidth: 760, margin: '2rem auto', textAlign: 'center'
    }}>
      <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, color: "black" }}>See DuneBroom in Action</h2>
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: '#e5e7eb',
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Embed a 1-second “Coming Soon” video from samplelib */}
        <video width="100%" height="100%" controls poster="https://dummyimage.com/1280x720/bae6fd/166534&text=Coming+Soon">
          <source src="https://samplelib.com/mp4/sample-1s.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
