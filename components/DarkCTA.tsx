"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { T } from "@/lib/data";

const pressProps = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.opacity = "0.86"; },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "scale(1)"; },
  onMouseDown:  (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(0.95)"; },
  onMouseUp:    (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; },
};

export default function DarkCTA({ title, sub }: { title: React.ReactNode; sub: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children ?? [], {
        opacity: 0, y: 24, stagger: 0.12, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ position: "relative", background: "linear-gradient(140deg, #06121A 0%, #0E1A22 60%, #0A2A2A 100%)", padding: "100px 28px", textAlign: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(31,191,169,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div ref={contentRef} style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
        <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 18 }}>{title}</h2>
        <p style={{ fontSize: 19, color: T.paper65, lineHeight: 1.50, marginBottom: 36, letterSpacing: "-0.2px" }}>{sub}</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact"
            style={{ border: "none", cursor: "pointer", fontFamily: "inherit", transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out", display: "inline-flex", alignItems: "center", justifyContent: "center", background: T.brandGradient, color: "#fff", fontSize: 17, fontWeight: 500, borderRadius: 980, padding: "12px 26px", boxShadow: "0 6px 20px rgba(10,132,255,0.28)" }}
            {...pressProps}
          >
            Get started
          </Link>
          <Link href="/case-studies"
            style={{ border: "1px solid rgba(94,182,255,0.5)", cursor: "pointer", fontFamily: "inherit", transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "transparent", color: T.skyBlue, fontSize: 17, fontWeight: 400, borderRadius: 980, padding: "11px 24px" }}
            {...pressProps}
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
