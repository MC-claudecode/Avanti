"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { T } from "@/lib/data";

const differentiators = [
  { stat: "100%", label: "Partner retention",    body: "Every brand we've ever signed has stayed with us for 2+ years. No churn. No exits." },
  { stat: "2 yrs", label: "Average tenure",      body: "We don't do trial campaigns or one-month sprints. We build long-term programs that compound." },
  { stat: "3",     label: "Brands per quarter",  body: "We onboard a maximum of three new partners every quarter. Not fake scarcity, each program takes us hundreds of hours, and we won't dilute the work." },
  { stat: "0",     label: "Cookie-cutter templates", body: "Every flow, every campaign, every subject line is built for your brand. No reused decks. No copy-paste strategy." },
];

export default function WhyAvanti() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);
  const quoteRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headRef.current?.children ?? [], {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(cardsRef.current?.children ?? [], {
        opacity: 0, y: 30, scale: 0.97, stagger: 0.1, duration: 0.65, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 78%" },
      });
      gsap.from(quoteRef.current, {
        opacity: 0, y: 24, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: quoteRef.current, start: "top 82%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: T.parchment, padding: "120px 28px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, right: -80, width: 540, height: 540, background: "radial-gradient(circle, rgba(10,132,255,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -160, left: -100, width: 600, height: 600, background: "radial-gradient(circle, rgba(52,199,89,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div ref={headRef} style={{ maxWidth: 820, margin: "0 auto 64px", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 14 }}>Why Avanti</div>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: T.ink, letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 20 }}>
            Built for <span className="brand-gradient-text">the long run</span>, not the campaign.
          </h2>
          <p style={{ fontSize: 19, color: T.ink56, lineHeight: 1.55, letterSpacing: "-0.2px", maxWidth: 680, margin: "0 auto" }}>
            Most email agencies onboard you, hand you off, and move on. We don&apos;t. Every partner we&apos;ve ever signed has been with us for two years or more, because we treat your email program like it&apos;s our own revenue line.
          </p>
        </div>

        <div ref={cardsRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
          {differentiators.map((d, i) => (
            <div key={i}
              style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(15,20,25,0.08)", padding: "26px 24px", transition: "transform 200ms ease, box-shadow 200ms ease" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 12px 32px rgba(15,20,25,0.08)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "none"; el.style.boxShadow = "none"; }}
            >
              <div className="brand-gradient-text" style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 6 }}>{d.stat}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.ink, letterSpacing: "-0.1px", marginBottom: 12, textTransform: "uppercase" }}>{d.label}</div>
              <p style={{ fontSize: 14.5, color: T.ink56, lineHeight: 1.55, letterSpacing: "-0.15px" }}>{d.body}</p>
            </div>
          ))}
        </div>

        <div ref={quoteRef} style={{ background: "#fff", borderRadius: 18, border: "1px solid rgba(15,20,25,0.08)", padding: "40px 44px", maxWidth: 840, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "center", boxShadow: "0 8px 32px rgba(15,20,25,0.04)" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: T.brandGradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", flexShrink: 0 }}>&ldquo;</div>
          <div>
            <p style={{ fontSize: 18, color: T.ink, lineHeight: 1.55, letterSpacing: "-0.2px", fontWeight: 500, marginBottom: 12 }}>
              We don&apos;t take on more partners than we can give attention to. If we can&apos;t move the needle, we won&apos;t sign you. That&apos;s why every brand we work with is still here, two years later.
            </p>
            <div style={{ fontSize: 13, color: T.ink48, letterSpacing: "-0.1px" }}>— The Avanti team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
