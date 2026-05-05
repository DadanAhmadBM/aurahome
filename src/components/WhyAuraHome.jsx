import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Users, MapPin } from "lucide-react";

const propsData = [
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
          marginBottom: "2rem",
        }}
      >
        <Icon size={20} color={item.accent} strokeWidth={1.5} />
      </div>
      {/* <div
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
      </div> */}
      <h3
        style={{
          fontFamily: "serif",
          fontSize: "1.25rem",
          fontWeight: 500,
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
          fontWeight: 400,
        }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function WhyAuraHome() {
  return (
    <section
      id="tentang"
      style={{ background: "#FDFCFB", padding: "8rem 2rem" }}
    >
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
            {/* <div
              style={{ width: "32px", height: "1px", background: "#C8965A" }}
            /> */}
          </motion.div>

          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 500,
              color: "#1C1A17",
              lineHeight: 1.2,
            }}
          >
            Furniture Bukan Sekadar Perabot, <br />
            <em
              style={{ color: "#C8965A", fontStyle: "italic", fontWeight: 400 }}
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
          }}
        >
          {propsData.map((item) => (
            <PropCard key={item.tag} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
