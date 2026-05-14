"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandsMarquee from "./BrandsMarquee";
import { testimonials, T } from "@/lib/data";

function TestimonialCard({ logo, logoH, invert, brand, quote, name, role, avatarGrad, idx = 0 }: {
  logo: string; logoH: number; invert?: boolean; brand: string;
  quote: string; name: string; role: string; avatarGrad: string; idx?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const flip = idx % 2 === 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!cardRef.current) return;
    gsap.from(cardRef.current, {
      opacity: 0,
      x: flip ? 32 : -32,
      y: 24,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: cardRef.current, start: "top 82%", once: true },
    });
  }, [flip]);

  return (
    <div ref={cardRef} style={{ width: "100%", maxWidth: 760, margin: flip ? "0 0 0 auto" : "0 auto 0 0" }}>
      <div
        style={{ background: "#fff", borderRadius: 22, border: "1px solid rgba(15,20,25,0.08)", padding: "36px 38px 30px", display: "flex", flexDirection: "column", gap: 24, boxShadow: "0 4px 24px rgba(15,20,25,0.04)", transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease" }}
        onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 14px 36px rgba(15,20,25,0.10)"; el.style.borderColor = "rgba(10,132,255,0.22)"; }}
        onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "none"; el.style.boxShadow = "0 4px 24px rgba(15,20,25,0.04)"; el.style.borderColor = "rgba(15,20,25,0.08)"; }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 48 }}>
          <Image src={logo} alt={brand} width={170} height={logoH} style={{ height: logoH, maxWidth: 170, width: "auto", objectFit: "contain", filter: invert ? "invert(1)" : "none", opacity: 0.92 }} />
          <svg width="36" height="28" viewBox="0 0 30 24" style={{ flexShrink: 0 }}>
            <defs>
              <linearGradient id={`tq-${name}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stopColor="#0A84FF"/>
                <stop offset="55%"  stopColor="#1FBFA9"/>
                <stop offset="100%" stopColor="#34C759"/>
              </linearGradient>
            </defs>
            <path d="M0,24 V14 C0,6 4,1 12,0 V4 C7,5 5,8 5,12 H12 V24 Z M16,24 V14 C16,6 20,1 28,0 V4 C23,5 21,8 21,12 H28 V24 Z" fill={`url(#tq-${name})`}/>
          </svg>
        </div>

        <p style={{ fontSize: 17, color: T.ink, lineHeight: 1.6, letterSpacing: "-0.2px", fontWeight: 400 }}>{quote}</p>

        <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 20, borderTop: "1px solid rgba(15,20,25,0.07)" }}>
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: avatarGrad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 600, color: "#fff", letterSpacing: "-0.3px", flexShrink: 0, boxShadow: "0 2px 8px rgba(15,20,25,0.10)" }}>
            {name[0]}
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: T.ink, letterSpacing: "-0.2px" }}>{name}</div>
            <div style={{ fontSize: 13, color: T.ink48, letterSpacing: "-0.1px" }}>{role}, {brand}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headRef.current?.children ?? [], {
        opacity: 0, y: 20, stagger: 0.1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: T.parchment, padding: "100px 28px 110px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 12 }}>Social proof</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", lineHeight: 1.10, marginBottom: 14 }}>
            80+ brands. <span className="brand-gradient-text">Real words from a few of them.</span>
          </h2>
          <p style={{ fontSize: 16, color: T.ink56, letterSpacing: "-0.2px", maxWidth: 600, margin: "0 auto" }}>
            Fashion, food, jewellery, sport, beauty, antiques, lifestyle — and pretty much everything else.
          </p>
        </div>

        {/* Marquee */}
        <div style={{ marginInline: "calc(50% - 50vw)", marginBottom: 0 }}>
          <BrandsMarquee embedded />
        </div>

        {/* Connector */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, margin: "44px auto 36px", maxWidth: 720 }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(15,20,25,0.18) 100%)" }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", padding: "6px 14px", borderRadius: 980, background: "rgba(15,20,25,0.04)", border: "1px solid rgba(15,20,25,0.08)", whiteSpace: "nowrap" }}>
            Here&apos;s what some of them said
          </span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(15,20,25,0.18) 0%, transparent 100%)" }} />
        </div>

        {/* Testimonials */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", left: "50%", top: 20, bottom: 20, width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(15,20,25,0.10) 12%, rgba(15,20,25,0.10) 88%, transparent 100%)", transform: "translateX(-0.5px)", pointerEvents: "none" }} />
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
