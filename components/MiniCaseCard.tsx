"use client";

import Link from "next/link";
import { T } from "@/lib/data";

export default function MiniCaseCard({ company, result, metric, desc, tag }: {
  company: string; result: string; metric: string; desc: string; tag: string;
}) {
  return (
    <Link href="/case-studies"
      style={{ background: "#fff", borderRadius: 18, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", display: "block", transition: "transform 180ms ease, box-shadow 180ms ease" }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)"; }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "none"; el.style.boxShadow = "none"; }}
    >
      <div style={{ background: T.brandGradientSoft, height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 40%, rgba(10,132,255,0.18), transparent 60%), radial-gradient(circle at 70% 60%, rgba(52,199,89,0.18), transparent 60%)" }} />
        <div style={{ textAlign: "center", position: "relative" }}>
          <div className="brand-gradient-text" style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.04em" }}>{result}</div>
          <div style={{ fontSize: 13, color: T.ink56, marginTop: 2 }}>{metric}</div>
        </div>
      </div>
      <div style={{ padding: "18px 20px 22px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.blue, letterSpacing: "0.4px", textTransform: "uppercase", marginBottom: 6 }}>{tag}</div>
        <div style={{ fontSize: 18, fontWeight: 600, color: T.ink, letterSpacing: "-0.3px", marginBottom: 8 }}>{company}</div>
        <div style={{ fontSize: 14, color: T.ink56, lineHeight: 1.50, letterSpacing: "-0.2px", marginBottom: 12 }}>{desc}</div>
        <span style={{ fontSize: 14, color: T.blue, fontWeight: 500 }}>Read case study →</span>
      </div>
    </Link>
  );
}
