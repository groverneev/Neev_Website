// ContactSection.tsx – keeps user on page & recenters form with better side spacing
'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xnnvbrzq', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (response.ok) {
        form.reset();
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: '#0E1321',
        color: '#f5f6fa',
        padding: '5rem 6rem 6rem', // increased side padding
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
        Don't want to use the form? Email me at groverneev at gmail.com.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          background: '#0E1321',
          borderRadius: 16,
          //boxShadow: '0 6px 28px rgba(0,0,0,0.3)',
          padding: 32,
          width: '100%',
          maxWidth: 520,
          margin: '0 auto', // centers & adds space on both sides
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          boxSizing: 'border-box',
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
            background: '#2563eb', //send message
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
          {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Send Message'}
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
  background: '#1e2533', //text box background
  color: '#f3f4f6',
  fontSize: 16,
  outline: 'none',
};
