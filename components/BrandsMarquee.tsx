"use client";

import Image from "next/image";
import { brandLogos, T } from "@/lib/data";

export default function BrandsMarquee({ embedded = false }: { embedded?: boolean }) {
  const doubled = [...brandLogos, ...brandLogos];

  const inner = (
    <div className="marquee-mask" style={{ overflow: "hidden", width: "100%" }}>
      <div className="marquee-track">
        {doubled.map((b, i) => (
          <div
            key={i}
            title={b.name}
            style={{ flexShrink: 0, height: 78, minWidth: 170, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 28px", opacity: 0.55, filter: "grayscale(100%)", transition: "opacity 220ms ease, filter 220ms ease, transform 220ms ease", cursor: "default" }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.opacity = "1"; el.style.filter = "grayscale(0%)"; el.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.opacity = "0.55"; el.style.filter = "grayscale(100%)"; el.style.transform = "scale(1)"; }}
          >
            <Image
              src={b.src}
              alt={b.name}
              width={170}
              height={b.h}
              style={{ height: b.h, maxWidth: 170, width: "auto", objectFit: "contain", filter: b.invert ? "invert(1)" : "none" }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) return inner;

  return (
    <section style={{ background: "#fff", padding: "96px 0 100px", borderTop: "1px solid rgba(15,20,25,0.06)", borderBottom: "1px solid rgba(15,20,25,0.06)" }}>
      <div style={{ textAlign: "center", marginBottom: 56, padding: "0 28px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 12 }}>Trusted Worldwide</div>
        <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", lineHeight: 1.10 }}>
          Brands That <span className="brand-gradient-text">Trust Us.</span>
        </h2>
        <p style={{ fontSize: 16, color: T.ink56, marginTop: 14, letterSpacing: "-0.2px" }}>80+ brands across fashion, food, jewellery, sport, beauty, antiques, lifestyle — and pretty much everything else.</p>
      </div>
      {inner}
    </section>
  );
}
