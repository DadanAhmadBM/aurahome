import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ShoppingBag, CheckCircle2, ArrowDown } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Pilih Koleksi Terbaik",
    desc: "Jelajahi katalog online kami yang dikurasi khusus untuk hunian modern. Temukan berbagai pilihan material dari kayu jati hingga fabric premium.",
    color: "#a45d07",
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

function StepContent({ item, index, progress }) {
  const start = index / steps.length;
  const end = (index + 1) / steps.length;
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [40, 0, 0, -40],
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
          color: `${item.color}50`,
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
            fontWeight: 500,
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

export default function HowItWorks() {
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
          {/* Sisi Kiri: Judul Statis */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{ width: "32px", height: "1px", background: "#C8965A" }}
              />
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
                fontWeight: 500,
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

          {/* Sisi Kanan: Konten Step */}
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
    </section>
  );
}
