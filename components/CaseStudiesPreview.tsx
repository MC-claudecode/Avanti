"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MiniCaseCard from "./MiniCaseCard";
import { T } from "@/lib/data";

const previews = [
  { company: "Confidential Client", result: "+€70k",  metric: "monthly revenue", desc: "From €5k to over €70k per month in 60 days. Luxury fashion email marketing rebuild — strategy, automation, and segmentation.", tag: "Luxury Fashion" },
  { company: "Confidential Client", result: "+€148k", metric: "in November",      desc: "Black Friday strategy that broke every prior brand record. Four-phase plan with VIP segmentation and 24,000 new subscribers.", tag: "Black Friday" },
  { company: "Aurum",               result: "€885k",  metric: "in 60 days",       desc: "Email-attributed revenue rose from €465k to €885k in two months for an emerging jewellery brand. Authority through education.", tag: "Jewellery" },
];

const pressProps = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.opacity = "0.86"; },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "scale(1)"; },
  onMouseDown:  (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(0.95)"; },
  onMouseUp:    (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; },
};

export default function CaseStudiesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headRef.current?.children ?? [], {
        opacity: 0, y: 20, stagger: 0.1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });
      gsap.from(gridRef.current?.children ?? [], {
        opacity: 0, y: 36, stagger: 0.14, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: T.parchment, padding: "80px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 12 }}>Results</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", lineHeight: 1.10 }}>
            Work That <span className="brand-gradient-text">Speaks for Itself.</span>
          </h2>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 44 }}>
          {previews.map((p, i) => <MiniCaseCard key={i} {...p} />)}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/case-studies"
            style={{ border: "1px solid rgba(10,132,255,0.4)", cursor: "pointer", fontFamily: "inherit", transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "transparent", color: T.blue, fontSize: 15, fontWeight: 400, borderRadius: 980, padding: "11px 24px" }}
            {...pressProps}
          >
            See all case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
