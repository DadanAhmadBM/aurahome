import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sofa,
  Bed,
  Utensils,
  ShieldCheck,
  Calendar,
  Users,
} from "lucide-react";

// --- KOMPONEN COUNTER (ANIMASI ANGKA) ---
function Counter({ end, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40, // Sedikit lebih lambat dan halus
    stiffness: 60,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(parseInt(end.replace(/[,+]/g, "")));
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Math.floor(latest).toLocaleString("id-ID") + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// --- DATA ROOMS ---
const rooms = [
  {
    label: "Living Room",
    bg: "linear-gradient(160deg, #D4B896 0%, #A8876A 100%)",
    icon: <Sofa size={24} strokeWidth={1.5} />,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400",
  },
  {
    label: "Bedroom",
    bg: "linear-gradient(160deg, #B8C4B0 0%, #8A9E8C 100%)",
    icon: <Bed size={24} strokeWidth={1.5} />,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400",
  },
  {
    label: "Dining Room",
    bg: "linear-gradient(160deg, #C4BFBA 0%, #968E87 100%)",
    icon: <Utensils size={24} strokeWidth={1.5} />,
    img: "https://images.unsplash.com/photo-1617806118233-f8e187c42b94?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9F7F2",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "4rem",
          alignItems: "center",
          width: "100%",
          zIndex: 1,
        }}
        className="hero-container"
      >
        {/* --- KONTEN KIRI --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} // Custom cubic-bezier untuk gerakan lebih premium
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(200,150,90,0.1)",
              border: "1px solid rgba(200,150,90,0.2)",
              borderRadius: "100px",
              padding: "8px 18px",
              marginBottom: "2rem",
            }}
          >
            <ShieldCheck size={16} color="#C8965A" strokeWidth={2} />
            <span
              style={{
                fontSize: "0.75rem",
                color: "#8B6544",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Premium Furniture Indonesia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            style={{
              fontFamily: "serif",
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 500, // Diubah dari 700 ke 600 (Sedikit lebih tipis)
              color: "#1C1A17",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Hadirkan Kenyamanan
            <br />
            <span
              style={{ color: "#C8965A", fontStyle: "italic", fontWeight: 400 }}
            >
              Sejati
            </span>{" "}
            di Setiap
            <br />
            Sudut Rumah.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            style={{
              fontSize: "1.1rem",
              color: "#666",
              lineHeight: 1.8,
              maxWidth: "500px",
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            AuraHome menyediakan furniture premium dengan desain{" "}
            <em>timeless</em> yang menggabungkan estetika modern dan material
            kayu solid berkualitas tinggi.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#C8965A" }}
              whileTap={{ scale: 0.95 }}
              href="#shop"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#1C1A17",
                color: "white",
                padding: "16px 32px",
                borderRadius: "100px",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.4s",
              }}
            >
              Belanja Koleksi Sekarang <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ borderColor: "#C8965A", color: "#C8965A" }}
              href="#consult"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                color: "#1C1A17",
                padding: "16px 32px",
                borderRadius: "100px",
                fontSize: "0.95rem",
                fontWeight: 500,
                border: "1.5px solid #DDD",
                textDecoration: "none",
                transition: "color 0.4s, border-color 0.4s",
              }}
            >
              <MessageCircle size={18} /> Konsultasi Gratis
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1.5 }}
            style={{ display: "flex", gap: "3rem", marginTop: "4rem" }}
          >
            {[
              {
                end: "5000",
                label: "Keluarga Bahagia",
                suffix: "+",
                icon: <Users size={18} />,
              },
              {
                end: "2015",
                label: "Berdiri Sejak",
                suffix: "",
                icon: <Calendar size={18} />,
              },
              {
                end: "2",
                label: "Garansi Produk",
                suffix: " Tahun",
                icon: <ShieldCheck size={18} />,
              },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "#C8965A", // Font stat juga dibuat 600
                    fontFamily: "serif",
                    marginBottom: "4px",
                  }}
                >
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#888",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.icon} {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- VISUAL KANAN --- */}
        <div style={{ position: "relative" }} className="hero-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
            style={{
              height: "500px",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
              alt="Luxury Interior"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
              }}
            />
          </motion.div>

          {/* Grid Room Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {rooms.map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.15, duration: 1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                style={{
                  height: "140px",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: room.bg,
                }}
              >
                <img
                  src={room.img}
                  alt={room.label}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.4,
                    mixBlendMode: "multiply",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    color: "white",
                  }}
                >
                  {room.icon}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {room.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 968px) {
          .hero-container { grid-template-columns: 1fr !important; text-align: center; }
          .hero-container div { align-items: center; justify-content: center; margin: 0 auto; }
          .hero-visual { display: none !important; }
        }
      `,
        }}
      />
    </section>
  );
}
