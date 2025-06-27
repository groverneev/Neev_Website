import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import type { Metadata } from 'next';



export const metadata = {
  title: 'Neev Grover',
  description: 'Personal site for Neev Grover',
};
//export default function RootLayout({ children }: { children: React.ReactNode }) {
  
//  return (
//    <html lang="en">
//      <body style={{ margin: 0, padding: 0, minHeight: '100vh', boxSizing: 'border-box' }}>
//        <Navbar />
 //       <main style={{ minHeight: '80vh' }}>
  ///        {children}
   //     </main>
 //       <Footer />
////      </body>
 //   </html>
 // );
//}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ——— Font Awesome CDN ——— */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
