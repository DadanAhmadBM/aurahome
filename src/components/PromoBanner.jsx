import React, { useState } from 'react';
import { X, Tag } from 'lucide-react';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div id="promo" style={{
      background: 'linear-gradient(90deg, var(--amber-dark), var(--amber), var(--amber-dark))',
      backgroundSize: '200% auto',
      animation: 'shimmer 3s linear infinite',
      padding: '10px 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: '12px', position: 'relative',
    }}>
      <Tag size={14} color="white" />
      <span style={{ fontSize: '0.82rem', color: 'white', fontWeight: 400, textAlign: 'center' }}>
        🎉 <strong>Promo Bulan Ini:</strong> Gratis ongkos kirim + diskon 15% untuk pembelian di atas Rp 5 juta! Berlaku hingga 31 Mei 2025.
      </span>
      <button onClick={() => setVisible(false)} style={{
        position: 'absolute', right: '1rem',
        background: 'none', color: 'rgba(255,255,255,0.7)',
        padding: '4px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.color = 'white'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
      >
        <X size={14} />
      </button>
    </div>
  );
}
