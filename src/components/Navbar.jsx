import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Koleksi Terlaris', href: '#koleksi' },
  {
    label: 'Ruangan',
    href: '#ruangan',
    dropdown: ['Living Room', 'Bedroom', 'Dining Room'],
  },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan Custom', href: '#cara-pesan' },
  { label: 'Blog Inspirasi', href: '#blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(250, 248, 244, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,150,90,0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(28,26,23,0.06)' : 'none',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          padding: '0 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: scrolled ? '68px' : '80px',
          transition: 'height 0.4s ease',
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'linear-gradient(135deg, var(--amber), var(--amber-dark))',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 14 L10 4 L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 14 L14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--charcoal)',
              letterSpacing: '-0.01em',
            }}>
              Aura<span style={{ color: 'var(--amber)' }}>Home</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <div key={link.label} style={{ position: 'relative' }}
                onMouseEnter={() => link.dropdown && setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}>
                <a href={link.href} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: 'var(--charcoal-light)',
                  letterSpacing: '0.02em',
                  display: 'flex', alignItems: 'center', gap: '4px',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--amber)'}
                  onMouseLeave={e => e.target.style.color = 'var(--charcoal-light)'}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={13} />}
                </a>
                {link.dropdown && dropdown === link.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, paddingTop: '12px',
                    animation: 'fadeUp 0.25s ease both',
                  }}>
                    <div style={{
                      background: 'var(--warm-white)',
                      border: '1px solid var(--cream-dark)',
                      borderRadius: '12px',
                      padding: '8px',
                      boxShadow: 'var(--shadow-md)',
                      minWidth: '160px',
                    }}>
                      {link.dropdown.map(item => (
                        <a key={item} href="#ruangan" style={{
                          display: 'block', padding: '10px 16px',
                          fontSize: '0.875rem', color: 'var(--charcoal-light)',
                          borderRadius: '8px', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => { e.target.style.background = 'var(--cream)'; e.target.style.color = 'var(--amber)'; }}
                          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--charcoal-light)'; }}
                        >{item}</a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#promo" className="desktop-nav" style={{
            background: 'linear-gradient(135deg, var(--amber), var(--amber-dark))',
            color: 'white',
            padding: '10px 22px',
            borderRadius: '100px',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            boxShadow: '0 4px 16px rgba(200,150,90,0.3)',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            Cek Promo Bulan Ini
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none', color: 'var(--charcoal)',
              padding: '8px', borderRadius: '8px',
              display: 'none',
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            background: 'rgba(250, 248, 244, 0.98)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid var(--cream-dark)',
            padding: '1.5rem 2rem 2rem',
            animation: 'fadeUp 0.3s ease',
          }} className="mobile-menu">
            {navLinks.map((link, i) => (
              <a key={link.label} href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: 'var(--charcoal-light)',
                  borderBottom: '1px solid var(--cream-dark)',
                  animationDelay: `${i * 0.06}s`,
                }}>{link.label}</a>
            ))}
            <a href="#promo" onClick={() => setMobileOpen(false)} style={{
              display: 'block', marginTop: '1.5rem',
              background: 'linear-gradient(135deg, var(--amber), var(--amber-dark))',
              color: 'white', padding: '14px 24px', borderRadius: '100px',
              textAlign: 'center', fontWeight: 500, fontSize: '0.9rem',
            }}>Cek Promo Bulan Ini</a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
