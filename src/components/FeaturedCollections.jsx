import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

const collections = [
  {
    id: 'living',
    room: 'Ruang Tamu',
    tagline: '"Sofa yang mengerti lelahnya hari Anda."',
    items: ['Sofa Linen Premium', 'Coffee Table Jati', 'Rak TV Minimalis'],
    price: 'Mulai Rp 4.500.000',
    gradient: 'linear-gradient(145deg, #C4A882 0%, #8B6544 50%, #5C3D1E 100%)',
    accent: '#C8965A',
    size: 'large',
  },
  {
    id: 'bedroom',
    room: 'Ruang Kamar',
    tagline: '"Tidur lebih lelap dengan rangka tempat tidur kokoh."',
    items: ['Bed Frame Kayu Solid', 'Nakas Simpel', 'Lemari 3 Pintu'],
    price: 'Mulai Rp 3.200.000',
    gradient: 'linear-gradient(145deg, #B0C4B4 0%, #6E8F74 50%, #4A6B50 100%)',
    accent: '#8A9E8C',
    size: 'small',
  },
  {
    id: 'dining',
    room: 'Ruang Makan',
    tagline: '"Meja makan yang menyatukan seluruh anggota keluarga."',
    items: ['Meja Makan Jati', 'Kursi Dining Set', 'Buffet Cabinet'],
    price: 'Mulai Rp 5.800.000',
    gradient: 'linear-gradient(145deg, #C4BFBA 0%, #907F74 50%, #5C4A3E 100%)',
    accent: '#968E87',
    size: 'small',
  },
];

function CollectionCard({ col, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = col.size === 'large';

  return (
    <div
      style={{
        gridColumn: isLarge ? 'span 1' : 'span 1',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        minHeight: isLarge ? '520px' : '240px',
        cursor: 'pointer',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, box-shadow 0.3s ease`,
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: col.gradient,
        transition: 'transform 0.6s ease',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
      }} />

      {/* Grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.6,
      }} />

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(28,26,23,0.75) 0%, rgba(28,26,23,0.1) 50%, transparent 100%)',
      }} />

      {/* Top badge */}
      <div style={{
        position: 'absolute', top: '1.5rem', left: '1.5rem',
        background: 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '100px',
        padding: '6px 14px',
      }}>
        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {col.room}
        </span>
      </div>

      {/* Content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '1.75rem',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'transform 0.4s ease',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: isLarge ? '1.35rem' : '1.05rem',
          fontStyle: 'italic', fontWeight: 400,
          color: 'white', lineHeight: 1.4,
          marginBottom: '12px',
          textShadow: '0 1px 8px rgba(0,0,0,0.3)',
        }}>{col.tagline}</p>

        <div style={{
          display: 'flex', gap: '8px', flexWrap: 'wrap',
          marginBottom: '16px',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.3s ease',
        }}>
          {col.items.map(item => (
            <span key={item} style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '100px', padding: '4px 12px',
              fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)',
            }}>{item}</span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)',
            fontWeight: 300,
          }}>{col.price}</span>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white', borderRadius: '100px',
            padding: '8px 16px', fontSize: '0.8rem',
            cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,150,90,0.4)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            Lihat Koleksi <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCollections() {
  const [ref, inView] = useInView();

  return (
    <section id="koleksi" style={{
      background: 'var(--cream)',
      padding: '8rem 2rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '3.5rem',
          flexWrap: 'wrap', gap: '1rem',
        }} ref={ref}>
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem',
              opacity: inView ? 1 : 0, transition: 'all 0.6s ease',
            }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--amber)' }} />
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)' }}>
                Featured Collections
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.1s',
            }}>
              Koleksi untuk Setiap<br />
              <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>Ruangan Impian</em>
            </h2>
          </div>
          <a href="#koleksi" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '0.85rem', color: 'var(--stone)',
            borderBottom: '1px solid var(--stone-light)',
            paddingBottom: '2px',
            opacity: inView ? 1 : 0,
            transition: 'all 0.6s ease 0.3s',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--stone)'}
          >
            Lihat Semua Koleksi <ArrowRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '1.25rem',
        }} className="collection-grid">
          {/* Large card spans 2 rows on left */}
          <div style={{
            gridRow: 'span 2',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '500px',
            cursor: 'pointer',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease',
          }} className="large-card"
            onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-lg)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: collections[0].gradient,
              transition: 'transform 0.6s ease',
            }} className="large-card-bg" />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(28,26,23,0.75) 0%, transparent 60%)',
            }} />
            <div style={{
              position: 'absolute', top: '1.5rem', left: '1.5rem',
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '100px', padding: '6px 14px',
            }}>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {collections[0].room}
              </span>
            </div>
            <div style={{ position: 'absolute', bottom: '2rem', left: '1.75rem', right: '1.75rem' }}>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                fontStyle: 'italic', color: 'white', lineHeight: 1.35, marginBottom: '16px',
              }}>{collections[0].tagline}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {collections[0].items.map(item => (
                  <span key={item} style={{
                    background: 'rgba(255,255,255,0.15)', borderRadius: '100px',
                    padding: '4px 12px', fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)',
                  }}>{item}</span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{collections[0].price}</span>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  background: 'var(--amber)', color: 'white',
                  border: 'none', borderRadius: '100px',
                  padding: '10px 20px', fontSize: '0.82rem', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--amber-dark)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--amber)'}
                >Lihat Koleksi <ArrowRight size={14} /></button>
              </div>
            </div>
          </div>

          {/* Right cards */}
          {collections.slice(1).map((col, i) => (
            <CollectionCard key={col.id} col={col} index={i + 1} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .collection-grid { grid-template-columns: 1fr !important; }
          .large-card { min-height: 360px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .collection-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .large-card:hover .large-card-bg { transform: scale(1.03); }
      `}</style>
    </section>
  );
}
