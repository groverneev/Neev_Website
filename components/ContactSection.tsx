// ContactSection.tsx – drop this inside app/components or app/ directory
// Uses Formspree (free) to email submissions. Replace YOUR_FORMSPREE_ENDPOINT below
// If you prefer another service (EmailJS, Netlify Forms, etc.) swap the <form> action
// -----------------------------------------------------------------------------

'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  return (
    <section
      id="contact"
      style={{
        background: '#0d0f15',
        color: '#f5f6fa',
        padding: '5rem 2rem 6rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontWeight: 700,
          fontSize: 36,
          marginBottom: 8,
          letterSpacing: '-0.03em',
        }}
      >
        Contact Me
      </h2>
      <p
        style={{
          color: '#9ca3af',
          fontSize: 18,
          marginBottom: 32,
          textAlign: 'center',
        }}
      >
        Drop a message or just say hello – I usually reply within a day.
      </p>

      <form
        action="https://formspree.io/f/xnnvbrzq" // ← replace
        method="POST"
        onSubmit={() => setStatus('sending')}
        style={{
          background: '#131722',
          borderRadius: 16,
          boxShadow: '0 6px 28px rgba(0,0,0,0.3)',
          padding: 32,
          width: '100%',
          maxWidth: 520,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <label style={{ fontWeight: 500 }}>Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          style={inputStyle}
        />

        <label style={{ fontWeight: 500 }}>Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          style={inputStyle}
        />

        <label style={{ fontWeight: 500 }}>Message</label>
        <textarea
          name="message"
          required
          placeholder="Write your message here..."
          rows={5}
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '12px 0',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'sent' && (
          <p style={{ color: '#22c55e', marginTop: 8 }}>Thanks! I’ll be in touch soon.</p>
        )}
        {status === 'error' && (
          <p style={{ color: '#ef4444', marginTop: 8 }}>
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
}

// ---- shared input style ----
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 12,
  border: '1px solid #334155',
  background: '#1e2533',
  color: '#f3f4f6',
  fontSize: 16,
  outline: 'none',
};
