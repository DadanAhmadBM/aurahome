import React, { useState } from 'react';
import { Instagram, Youtube, MapPin, Mail, Phone, Send, ArrowRight } from 'lucide-react';

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer style={{
      background: 'var(--charcoal)',
      color: 'rgba(255,255,255,0.7)',
      padding: '5rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '3rem',
          marginBottom: '4rem',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
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
                fontSize: '1.5rem', fontWeight: 600, color: 'white',
              }}>Aura<span style={{ color: 'var(--amber)' }}>Home</span></span>
            </div>
            <p style={{
              fontSize: '0.88rem', lineHeight: 1.7,
              color: 'rgba(255,255,255,0.45)', maxWidth: '280px',
              marginBottom: '1.5rem',
            }}>
              Menyediakan solusi furniture estetik untuk hunian modern Indonesia sejak 2015.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: PinterestIcon, label: 'Pinterest', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,150,90,0.15)'; e.currentTarget.style.color = 'var(--amber)'; e.currentTarget.style.borderColor = 'rgba(200,150,90,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan Pelanggan */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem', fontWeight: 500, color: 'white',
              marginBottom: '1.25rem', letterSpacing: '0.02em',
            }}>Layanan Pelanggan</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['FAQ & Garansi (2 Tahun)', '#'],
                ['Kebijakan Pengembalian', '#'],
                ['Lacak Pesanan', '#'],
                ['Konsultasi Desain', '#'],
                ['Tentang Kami', '#tentang'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} style={{
                    fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)',
                    transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                    onMouseEnter={e => e.target.style.color = 'var(--amber-light)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    <ArrowRight size={12} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem', fontWeight: 500, color: 'white',
              marginBottom: '1.25rem',
            }}>Kontak</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={15} color="var(--amber)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                  Jl. Furniture Indah No. 12,<br />Jakarta Selatan
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={15} color="var(--amber)" style={{ flexShrink: 0 }} />
                <a href="mailto:hello@aurahome.com" style={{
                  fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--amber-light)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                >hello@aurahome.com</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={15} color="var(--amber)" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/6281234567890" style={{
                  fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--amber-light)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                >0812-3456-7890</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem', fontWeight: 500, color: 'white',
              marginBottom: '0.75rem',
            }}>Newsletter</h4>
            <p style={{
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.6, marginBottom: '1.25rem',
            }}>
              Dapatkan diskon <strong style={{ color: 'var(--amber)' }}>10%</strong> untuk pembelian pertama dengan mendaftarkan email Anda.
            </p>
            {subscribed ? (
              <div style={{
                background: 'rgba(138,158,140,0.15)',
                border: '1px solid rgba(138,158,140,0.3)',
                borderRadius: '12px', padding: '14px 16px',
                fontSize: '0.85rem', color: 'var(--sage)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                ✓ Terima kasih! Cek email Anda.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email@anda.com"
                  required
                  style={{
                    flex: 1, padding: '12px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: 'white', fontSize: '0.85rem',
                    outline: 'none', fontFamily: 'var(--font-body)',
                    transition: 'border-color 0.2s',
                    minWidth: 0,
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(200,150,90,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <button type="submit" style={{
                  background: 'var(--amber)', color: 'white',
                  border: 'none', borderRadius: '12px',
                  width: '44px', height: '44px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', flexShrink: 0,
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--amber-dark)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--amber)'}
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '2rem' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>
            © 2025 AuraHome. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Kebijakan Privasi', 'Syarat & Ketentuan', 'Peta Situs'].map(item => (
              <a key={item} href="#" style={{
                fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
