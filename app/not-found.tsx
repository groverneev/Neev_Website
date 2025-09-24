export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-6xl font-bold">404</h1>
          <div className="w-px h-16 bg-white"></div>
          <p className="text-xl">This page could not be found.</p>
        </div>
      </div>
    </main>
  );
}
