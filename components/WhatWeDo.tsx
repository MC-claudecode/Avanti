"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { T } from "@/lib/data";

const services = [
  { eyebrow: "Strategy",     headline: "Every Campaign Has a Purpose.",       body: "We don't send email for the sake of it. Every touchpoint is mapped to a goal, a segment, and a moment in your customer's journey." },
  { eyebrow: "Design",       headline: "Emails Worth Opening.",                body: "Beautifully crafted templates that feel native to your brand — designed from first principles and tested across 40+ email clients." },
  { eyebrow: "Delivery & Ops", headline: "Land in the Inbox.",                 body: "Sender reputation, list hygiene, ISP monitoring — the invisible infrastructure that keeps your deliverability strong, campaign after campaign." },
  { eyebrow: "Analytics",    headline: "Numbers You Can Act On.",              body: "Open rates, click maps, revenue attribution — surfaced weekly in a report that tells you what to do next, not just what happened." },
];

const pressProps = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.opacity = "0.86"; },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "scale(1)"; },
  onMouseDown:  (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(0.95)"; },
  onMouseUp:    (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; },
};

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headRef.current?.children ?? [], {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(gridRef.current?.children ?? [], {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: T.dark2, padding: "120px 28px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, left: -100, width: 520, height: 520, background: "radial-gradient(circle, rgba(10,132,255,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -160, right: -100, width: 560, height: 560, background: "radial-gradient(circle, rgba(52,199,89,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div ref={headRef} style={{ maxWidth: 720, margin: "0 auto 64px", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: T.paper45, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 14 }}>What we do</div>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 18 }}>
            Four pillars. <span className="brand-gradient-text">One revenue channel.</span>
          </h2>
          <p style={{ fontSize: 18, color: T.paper65, lineHeight: 1.55, letterSpacing: "-0.2px" }}>
            Strategy, design, deliverability, analytics. Every part of your email program, run by one team.
          </p>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {services.map((s, i) => (
            <div key={i}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "30px 28px", position: "relative", overflow: "hidden", transition: "transform 220ms ease, background 220ms ease, border-color 220ms ease" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-3px)"; el.style.background = "rgba(255,255,255,0.06)"; el.style.borderColor = "rgba(94,182,255,0.30)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "none"; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <div style={{ width: 38, height: 38, borderRadius: 10, background: T.brandGradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.2px", marginBottom: 20, boxShadow: "0 6px 20px rgba(10,132,255,0.25)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.paper45, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 10 }}>{s.eyebrow}</div>
              <h3 style={{ fontSize: 21, fontWeight: 600, color: "#fff", letterSpacing: "-0.3px", lineHeight: 1.18, marginBottom: 12 }}>{s.headline}</h3>
              <p style={{ fontSize: 14.5, color: T.paper65, lineHeight: 1.6, letterSpacing: "-0.15px" }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Link href="/case-studies"
            style={{ border: "1px solid rgba(94,182,255,0.5)", cursor: "pointer", fontFamily: "inherit", transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "transparent", color: T.skyBlue, fontSize: 15, fontWeight: 400, borderRadius: 980, padding: "11px 24px" }}
            {...pressProps}
          >
            See it in action
          </Link>
        </div>
      </div>
    </section>
  );
}
