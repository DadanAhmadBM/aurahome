# AuraHome — Website Furniture Premium

Website modern minimalis untuk AuraHome, brand furniture premium Indonesia.

## Tech Stack
- **React 18** + **Vite**
- **Lucide React** (icons)
- **Google Fonts**: Cormorant Garamond + DM Sans
- Pure CSS animations — tanpa library tambahan

## Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```
Buka browser di `http://localhost:5173`

### 3. Build untuk production
```bash
npm run build
npm run preview
```

## Struktur Folder
```
aurahome/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # Design tokens & global styles
    └── components/
        ├── Navbar.jsx         # Navigasi + mobile menu
        ├── PromoBanner.jsx    # Banner promo dismissible
        ├── Hero.jsx           # Hero section
        ├── ValueProp.jsx      # 5W+1H value proposition
        ├── FeaturedCollections.jsx  # Grid koleksi
        ├── SocialProof.jsx    # Testimoni interaktif
        ├── ClosingCTA.jsx     # CTA penutup
        └── Footer.jsx         # Footer + newsletter
```

## Fitur
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navbar dengan scroll effect
- ✅ Smooth scroll animations (IntersectionObserver)
- ✅ Mobile hamburger menu
- ✅ Dropdown navigasi (desktop)
- ✅ Auto-rotating testimonials
- ✅ Newsletter subscribe form
- ✅ WhatsApp floating button + pulse animation
- ✅ Promo banner dismissible
- ✅ Hover micro-interactions
