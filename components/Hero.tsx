"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import TypewriterCycle from "./TypewriterCycle";
import EmailMockup from "./EmailMockup";
import { T } from "@/lib/data";

const pressProps = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.opacity = "0.86"; },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "scale(1)"; },
  onMouseDown: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(0.95)"; },
  onMouseUp: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; },
};

const pillPrimary: React.CSSProperties = {
  border: "none", cursor: "pointer", fontFamily: "inherit",
  transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  background: T.brandGradient, color: T.paper, fontSize: 16, fontWeight: 500,
  borderRadius: 980, padding: "12px 26px",
  boxShadow: "0 6px 20px rgba(10,132,255,0.28), 0 2px 6px rgba(52,199,89,0.20)",
};

const pillGhost: React.CSSProperties = {
  border: "1px solid rgba(94,182,255,0.5)", cursor: "pointer", fontFamily: "inherit",
  transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  background: "transparent", color: T.skyBlue,
  fontSize: 16, fontWeight: 400,
  borderRadius: 980, padding: "11px 24px",
};

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headRef  = useRef<HTMLHeadingElement>(null);
  const subRef   = useRef<HTMLParagraphElement>(null);
  const btnsRef  = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.3 });
      tl.from(badgeRef.current,  { opacity: 0, y: 16, duration: 0.6 })
        .from(headRef.current,   { opacity: 0, y: 30, duration: 0.8 }, "-=0.2")
        .from(subRef.current,    { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(btnsRef.current?.children ?? [], { opacity: 0, y: 14, stagger: 0.1, duration: 0.5 }, "-=0.3")
        .from(mockupRef.current, { opacity: 0, y: 60, duration: 1.0, ease: "power4.out" }, "-=0.4");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section style={{
      position: "relative", background: "#06121A",
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "flex-end",
      paddingTop: 120, overflow: "hidden",
    }}>
      {/* Atmospheric glows */}
      <div style={{ position: "absolute", top: "10%", left: "30%", width: 520, height: 520, background: "radial-gradient(circle, rgba(10,132,255,0.32) 0%, transparent 65%)", filter: "blur(20px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", right: "20%", width: 560, height: 560, background: "radial-gradient(circle, rgba(52,199,89,0.22) 0%, transparent 65%)", filter: "blur(20px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse at center, rgba(31,191,169,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Text block */}
      <div style={{ position: "relative", zIndex: 5, textAlign: "center", width: "100%", padding: "0 28px", maxWidth: 920, margin: "0 auto", marginBottom: 48 }}>
        <div ref={badgeRef} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 980, padding: "6px 14px", marginBottom: 28, backdropFilter: "blur(12px)" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#34C759" }} />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", letterSpacing: "-0.1px" }}>Your full-service email marketing partner</span>
        </div>

        <h1 ref={headRef} style={{ fontSize: "clamp(42px, 6vw, 80px)", fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.035em", marginBottom: 20 }}>
          We are Avanti.<br />
          We are: <TypewriterCycle words={["your team", "email pros", "your new partner", "your edge", "klaviyo nerds"]} />
        </h1>

        <p ref={subRef} style={{ fontSize: "clamp(18px, 2vw, 21px)", color: "rgba(255,255,255,0.60)", lineHeight: 1.50, letterSpacing: "0.1px", maxWidth: 560, margin: "24px auto 36px" }}>
          We turn email into your highest-ROI channel. Then we stay long enough to compound it.
        </p>

        <div ref={btnsRef} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={pillPrimary} {...pressProps}>Get started</Link>
          <Link href="/case-studies" style={pillGhost} {...pressProps}>See our work</Link>
        </div>
      </div>

      {/* Floating email mockup */}
      <div ref={mockupRef} style={{ width: "100%", display: "flex", justifyContent: "center", padding: "0 28px", position: "relative", zIndex: 10, marginBottom: -120 }}>
        <EmailMockup />
      </div>
    </section>
  );
}
