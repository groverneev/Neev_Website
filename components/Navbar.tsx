'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';


const navLinks = [
  { href: '/about_me', label: 'About Me' },
  { href: '/mission_statement', label: 'Mission Statement' },
  { href: '/resources', label: 'Resources' },
  { href: '/outreach', label: 'Outreach' },
  { href: '/#contact', label: 'Contact' }, 
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%',
    }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
          position: 'relative'
        }}
      >
        {/* Hamburger left (visible only on mobile) */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: 28,
            cursor: 'pointer',
            marginRight: 16,
            display: 'none',
          }}
          className="navbar-hamburger"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Logo/title */}
<a href="/" className="navbar-logo" style={{ fontWeight: 800, fontSize: 28, color: '#111', textDecoration: 'none' }}>
  DuneBroom
</a>

        {/* Main nav links - hidden on mobile */}
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: 32,
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}
          className="navbar-links"
        >
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: '#111',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 18,
                  transition: 'color 0.2s'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar drawer on mobile */}
      {open && (
        <div className="navbar-drawer" onClick={() => setOpen(false)}>
          <div className="navbar-drawer-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 28,
                cursor: 'pointer',
                marginBottom: 24,
                alignSelf: 'flex-end'
              }}
              aria-label="Close menu"
            >
              ×
            </button>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
              padding: 0,
              margin: 0,
              alignItems: 'flex-start'
            }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: '#111',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: 22
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* CSS for responsive behavior */}
      <style>{`
        @media (max-width: 900px) {
         .navbar-logo {
      position: absolute;
      left: 0;
      right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: fit-content;
  }
  .navbar-hamburger {
    position: relative;
    z-index: 2;
  }
}

        @media (max-width: 900px) {
          .navbar-links {
            display: none !important;
          }
          .navbar-hamburger {
            display: block !important;
          }
        }
        .navbar-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.33);
          z-index: 1000;
          display: flex;
          align-items: flex-start;
        }
        .navbar-drawer-content {
          background: #fff;
          width: 85vw;
          max-width: 320px;
          min-height: 100vh;
          box-shadow: 2px 0 16px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          padding: 2.2rem 2rem 1.2rem 1.3rem;
        }
      `}</style>
    </nav>
  );
}