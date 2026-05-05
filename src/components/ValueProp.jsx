import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Heart,
  Star,
  Users,
  MapPin,
  ShoppingBag,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const props = [
  {
    icon: Heart,
    tag: "Why Choose Us",
    title: "Kenapa Harus AuraHome?",
    desc: "Kami percaya rumah bukan sekadar bangunan, tapi tempat cerita dimulai. Furniture kami dirancang untuk tahan hingga puluhan tahun dengan desain yang tidak lekang oleh waktu.",
    accent: "#C8965A",
    bg: "rgba(200,150,90,0.06)",
  },
  {
    icon: Star,
    tag: "What We Offer",
    title: "Apa yang Kami Tawarkan?",
    desc: "Dari sofa berbahan linen premium hingga meja makan kayu jati solid. Kami menyediakan perlengkapan rumah lengkap yang fungsional namun tetap artistik.",
    accent: "#8A9E8C",
    bg: "rgba(138,158,140,0.06)",
  },
  {
    icon: Users,
    tag: "Who We Are",
    title: "Siapa Kami?",
    desc: "AuraHome adalah tim pengrajin lokal dan desainer interior berpengalaman yang berdedikasi menciptakan standar baru dalam industri mebel Indonesia sejak 2015.",
    accent: "#7A756C",
    bg: "rgba(122,117,108,0.06)",
  },
  {
    icon: MapPin,
    tag: "Where & When",
    title: "Di mana & Kapan?",
    desc: "Showroom kami berlokasi di Jakarta dan Surabaya, namun kami melayani pengiriman ke seluruh Indonesia. Pesanan diproses dalam 1–3 hari kerja untuk barang ready stock.",
    accent: "#C8965A",
    bg: "rgba(200,150,90,0.06)",
  },
];

const steps = [
  {
    step: "01",
    title: "Pilih Koleksi Terbaik",
    desc: "Jelajahi katalog online kami yang dikurasi khusus untuk hunian modern. Temukan berbagai pilihan material dari kayu jati hingga fabric premium.",
    color: "#C8965A",
  },
  {
    step: "02",
    title: "Konsultasi & Kustomisasi",
    desc: "Hubungi tim desainer kami untuk menyesuaikan dimensi atau warna. Kami memastikan setiap produk pas dengan ukuran ruang Anda.",
    color: "#8A9E8C",
  },
  {
    step: "03",
    title: "Pengiriman & Instalasi",
    desc: "Duduk manis sementara tim profesional kami mengantar dan merakit furniture Anda. Kami menjamin keamanan barang sampai terpasang sempurna.",
    color: "#1C1A17",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function PropCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={itemVariants}
      style={{
        background: item.bg,
        border: `1px solid ${item.accent}22`,
        borderRadius: "20px",
        padding: "2rem",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: `${item.accent}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
        }}
      >
        <Icon size={20} color={item.accent} strokeWidth={1.5} />
      </div>
      <div
        style={{
          fontSize: "0.7rem",
          fontWeight: 600,
          color: item.accent,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        {item.tag}
      </div>
      <h3
        style={{
          fontFamily: "serif",
          fontSize: "1.35rem",
          fontWeight: 700,
          color: "#1C1A17",
          lineHeight: 1.3,
          marginBottom: "12px",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#666",
          lineHeight: 1.7,
          fontWeight: 300,
        }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

function StepContent({ item, index, progress }) {
  const start = index / steps.length;
  const end = (index + 1) / steps.length;
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [40, 0, 0, -40]
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        opacity,
        y,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          fontSize: "5rem",
          fontFamily: "serif",
          fontWeight: 700,
          color: `${item.color}15`,
          lineHeight: 1,
        }}
      >
        {item.step}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <CheckCircle2 size={28} color={item.color} />
        <h4
          style={{
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#1C1A17",
            fontFamily: "serif",
          }}
        >
          {item.title}
        </h4>
      </div>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#444",
          lineHeight: 1.7,
          fontWeight: 400,
          maxWidth: "450px",
        }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function ValueProp() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div style={{ background: "#FDFCFB" }}>
      {/* --- SECTION: VALUE PROP GRID --- */}
      <section id="tentang" style={{ padding: "8rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            style={{ textAlign: "center", marginBottom: "5rem" }}
          >
            <motion.div
              variants={itemVariants}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{ width: "32px", height: "1px", background: "#C8965A" }}
              />
              <span
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C8965A",
                  fontWeight: 600,
                }}
              >
                Why AuraHome
              </span>
              <div
                style={{ width: "32px", height: "1px", background: "#C8965A" }}
              />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              style={{
                fontFamily: "serif",
                fontSize: "clamp(2rem, 4vw, 3rem)", // Ukuran dikunci agar tidak lebih besar dari Hero
                fontWeight: 600,
                color: "#1C1A17",
                lineHeight: 1.2,
              }}
            >
              Furniture Bukan Sekadar Perabot,
              <br />
              <em
                style={{
                  color: "#C8965A",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Melainkan Pengalaman
              </em>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            {props.map((item) => (
              <PropCard key={item.tag} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION: INTERACTIVE HOW IT WORKS (STICKY SCROLL) --- */}
      <section
        ref={scrollRef}
        style={{ position: "relative", height: "300vh", background: "#F9F7F2" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              width: "100%",
              padding: "0 2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="how-it-works-grid"
          >
            {/* Kiri: Judul Statis */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1.5rem",
                }}
              >
                <ShoppingBag size={24} color="#C8965A" />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#C8965A",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Process
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#1C1A17",
                  fontWeight: 600,
                  lineHeight: 1.1,
                }}
              >
                Langkah Mudah <br /> Mewujudkan <br />
                <span
                  style={{
                    color: "#C8965A",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Rumah Impian
                </span>
              </h2>

              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "150px",
                    height: "2px",
                    background: "#DDD",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#C8965A",
                      scaleX: smoothProgress,
                      transformOrigin: "left",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#888",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  Scroll <ArrowDown size={14} />
                </div>
              </div>
            </div>

            {/* Kanan: Step yang berganti saat scroll */}
            <div style={{ position: "relative", height: "350px" }}>
              {steps.map((item, index) => (
                <StepContent
                  key={index}
                  item={item}
                  index={index}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 968px) {
          .how-it-works-grid { grid-template-columns: 1fr !important; gap: 3rem; text-align: center; }
          .how-it-works-grid div { align-items: center; justify-content: center; margin: 0 auto; }
        }
      `,
        }}
      />
    </div>
  );
}
