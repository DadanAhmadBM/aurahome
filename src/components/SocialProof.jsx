import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

function useInView(threshold = 0.1) {
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

const testimonials = [
  {
    quote: 'Meja makannya kokoh banget, finishing-nya halus. Pengiriman ke luar kota juga aman karena packing-nya rapi!',
    name: 'Siska Rahmawati',
    location: 'Bandung',
    rating: 5,
    product: 'Meja Makan Jati 6 Kursi',
    initials: 'SR',
    color: '#C8965A',
  },
  {
    quote: 'Sofa linennya beneran nyaman banget. Sudah 2 tahun dan kondisinya masih bagus, warna tidak pudar sama sekali.',
    name: 'Budi Santoso',
    location: 'Jakarta',
    rating: 5,
    product: 'Sofa Linen 3-Seater',
    initials: 'BS',
    color: '#8A9E8C',
  },
  {
    quote: 'Layanan customnya memuaskan. Saya minta ukuran yang tidak standar dan hasilnya persis sesuai ekspektasi!',
    name: 'Dewi Anggara',
    location: 'Surabaya',
    rating: 5,
    product: 'Lemari Custom 4 Pintu',
    initials: 'DA',
    color: '#7A756C',
  },
  {
    quote: 'Pengiriman cepat dan tim perakitannya profesional. Kamar tidur saya jadi jauh lebih estetik sekarang.',
    name: 'Rizky Pratama',
    location: 'Yogyakarta',
    rating: 5,
    product: 'Bed Frame King Size',
    initials: 'RP',
    color: '#C8965A',
  },
];

const brands = ['Kompas', 'Detik', 'IDN Times', 'Tempo', 'Republika'];

export default function SocialProof() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimoni" style={{
      background: 'var(--warm-white)',
      padding: '8rem 2rem',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={ref}>

        {/* Trust badges */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: '3rem', marginBottom: '5rem', flexWrap: 'wrap',
          opacity: inView ? 1 : 0,
          transition: 'all 0.7s ease',
        }}>
          {brands.map(brand => (
            <span key={brand} style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem', fontWeight: 500,
              color: 'var(--stone-light)',
              letterSpacing: '0.04em',
              transition: 'color 0.2s',
              cursor: 'default',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--stone)'}
              onMouseLeave={e => e.target.style.color = 'var(--stone-light)'}
            >{brand}</span>
          ))}
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '8px', marginBottom: '1.25rem',
            opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.1s',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--amber)' }} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)' }}>
              Social Proof
            </span>
            <div style={{ width: '32px', height: '1px', background: 'var(--amber)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.2s',
          }}>
            Dipercaya oleh <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>5.000+</em><br />Keluarga di Indonesia
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: active === i ? 'var(--charcoal)' : 'var(--cream)',
              borderRadius: '20px', padding: '2rem',
              border: `1px solid ${active === i ? 'transparent' : 'var(--cream-dark)'}`,
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: `${i * 0.1 + 0.3}s`,
              transitionProperty: 'background, border, opacity, transform, box-shadow',
              boxShadow: active === i ? 'var(--shadow-lg)' : 'none',
            }}
              onClick={() => setActive(i)}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} fill={active === i ? '#C8965A' : '#C8965A'} color={active === i ? '#C8965A' : '#C8965A'} />
                ))}
              </div>

              {/* Quote */}
              <Quote size={20} color={active === i ? 'rgba(200,150,90,0.4)' : 'rgba(200,150,90,0.3)'} style={{ marginBottom: '12px' }} />
              <p style={{
                fontSize: '0.92rem', lineHeight: 1.7,
                color: active === i ? 'rgba(255,255,255,0.85)' : 'var(--charcoal-light)',
                fontStyle: 'italic', marginBottom: '1.5rem',
                fontFamily: 'var(--font-display)',
                transition: 'color 0.5s',
              }}>"{t.quote}"</p>

              {/* Person */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: active === i ? `${t.color}33` : `${t.color}22`,
                  border: `2px solid ${t.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '0.9rem',
                  color: active === i ? t.color : t.color,
                  fontWeight: 500,
                  transition: 'all 0.5s',
                }}>{t.initials}</div>
                <div>
                  <div style={{
                    fontSize: '0.88rem', fontWeight: 500,
                    color: active === i ? 'white' : 'var(--charcoal)',
                    transition: 'color 0.5s',
                  }}>{t.name}</div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: active === i ? 'rgba(255,255,255,0.4)' : 'var(--stone)',
                    transition: 'color 0.5s',
                  }}>{t.location} · {t.product}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2rem' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: active === i ? '24px' : '8px',
              height: '8px', borderRadius: '100px',
              background: active === i ? 'var(--amber)' : 'var(--stone-light)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
