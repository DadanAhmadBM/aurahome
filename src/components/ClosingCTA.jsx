import React, { useRef, useEffect, useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function ClosingCTA() {
  const [ref, inView] = useInView();

  return (
    <section id="cta" style={{
      background: 'var(--cream)',
      padding: '8rem 2rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={ref}>
        <div style={{
          background: 'linear-gradient(135deg, var(--charcoal) 0%, #2C2820 100%)',
          borderRadius: '32px',
          padding: 'clamp(3rem, 6vw, 6rem)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '320px', height: '320px',
            border: '1px solid rgba(200,150,90,0.1)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '240px', height: '240px',
            border: '1px solid rgba(200,150,90,0.08)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', left: '-60px',
            width: '260px', height: '260px',
            border: '1px solid rgba(138,158,140,0.1)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,150,90,0.05) 0%, transparent 70%)',
          }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(200,150,90,0.12)',
              border: '1px solid rgba(200,150,90,0.2)',
              borderRadius: '100px', padding: '6px 16px',
              marginBottom: '2rem',
              opacity: inView ? 1 : 0,
              transition: 'all 0.6s ease',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--amber)' }} />
              <span style={{ fontSize: '0.78rem', color: 'var(--amber)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Mulai Transformasi
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              fontWeight: 300, color: 'white',
              lineHeight: 1.2, marginBottom: '1.5rem',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s ease 0.15s',
            }}>
              Ingin Rumah Impian Tapi<br />
              <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>Bingung Mulai Dari Mana?</em>
            </h2>

            <p style={{
              fontSize: '1rem', color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 3rem',
              fontWeight: 300,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.25s',
            }}>
              Jangan biarkan ruangan Anda kosong tanpa karakter. Mulai transformasikan hunian Anda hari ini bersama tim desainer profesional kami.
            </p>

            <div style={{
              display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.35s',
            }}>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: '#25D366', color: 'white',
                  padding: '16px 32px', borderRadius: '100px',
                  fontSize: '0.95rem', fontWeight: 500,
                  boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,211,102,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.3)'; }}
              >
                <MessageCircle size={18} /> Hubungi WhatsApp Kami
              </a>
              <a href="#koleksi" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.8)',
                padding: '16px 32px', borderRadius: '100px',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
              >
                Jelajahi Koleksi <ArrowRight size={16} />
              </a>
            </div>

            {/* Guarantees */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap',
              marginTop: '3rem', paddingTop: '3rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              opacity: inView ? 1 : 0,
              transition: 'all 0.7s ease 0.45s',
            }}>
              {[
                ['🚚', 'Pengiriman Seluruh Indonesia'],
                ['🔧', 'Perakitan Gratis'],
                ['🛡️', 'Garansi 2 Tahun'],
                ['💳', 'Cicilan 0%'],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1rem' }}>{icon}</span>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
