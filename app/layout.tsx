import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'DuneBroom | Sweep Clean, Think Smart',
  description: 'Robotics, youth innovation, and clean oceans.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, minHeight: '100vh', boxSizing: 'border-box' }}>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
