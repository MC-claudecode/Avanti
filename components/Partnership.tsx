"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { T } from "@/lib/data";

const pillars = [
  { title: "Inside your tools", body: "Slack, Klaviyo, your meetings, your Notion. We work where you work, not from a separate portal you have to log into." },
  { title: "Aligned on outcomes", body: "Our engagement is structured around your KPIs, not a list of deliverables. If your revenue isn't moving, neither are we." },
  { title: "We push back", body: "If something you're asking for is going to hurt the brand or the numbers, we'll tell you. A partner that only says yes isn't a partner." },
];

export default function Partnership() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headRef.current?.children ?? [], {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(cardsRef.current?.children ?? [], {
        opacity: 0, y: 32, stagger: 0.12, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fff", padding: "100px 28px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={headRef} style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 56px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 14 }}>How we work</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", lineHeight: 1.10, marginBottom: 14 }}>
            Most agencies want clients. <span className="brand-gradient-text">We want partners.</span>
          </h2>
          <p style={{ fontSize: 17, color: T.ink56, lineHeight: 1.55, letterSpacing: "-0.2px" }}>
            The difference shows up in the small things, and they&apos;re the reason every brand we&apos;ve ever signed is still with us.
          </p>
        </div>

        <div ref={cardsRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 14, padding: "8px 4px" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: T.brandGradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "-0.2px", boxShadow: "0 4px 14px rgba(10,132,255,0.22)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 600, color: T.ink, letterSpacing: "-0.3px", lineHeight: 1.2 }}>{p.title}</h3>
              <p style={{ fontSize: 15, color: T.ink56, lineHeight: 1.55, letterSpacing: "-0.15px" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
