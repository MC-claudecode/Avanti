"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";
import DarkCTA from "@/components/DarkCTA";
import Footer from "@/components/Footer";
import { caseStudiesData, T } from "@/lib/data";

function StatBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const stats = [
    { n: "4",      l: "Featured client case studies" },
    { n: "100%",   l: "Client retention since day one" },
    { n: "6,800%", l: "Peak ROI achieved on a single engagement" },
  ];
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const rawVals = [4, 100, 6800];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    rawVals.forEach((val, i) => {
      const el = counterRefs.current[i];
      if (!el) return;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: val, duration: 1.6, ease: "power2.out",
        scrollTrigger: { trigger: barRef.current, start: "top 80%", once: true },
        onUpdate: () => {
          if (!el) return;
          if (i === 2) el.textContent = Math.round(obj.v).toLocaleString();
          else el.textContent = Math.round(obj.v).toString();
        },
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={barRef} style={{ background: "#fff", padding: "48px 28px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map((s, i) => (
          <div key={s.n}>
            <div style={{ fontSize: 48, fontWeight: 600, color: T.ink, letterSpacing: "-0.03em" }}>
              <span ref={el => { counterRefs.current[i] = el; }}>0</span>
              {i === 1 ? "%" : i === 2 ? "%" : ""}
            </div>
            <div style={{ fontSize: 14, color: T.ink48, marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudySection({ c, i }: { c: typeof caseStudiesData[0]; i: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);

  const bg       = c.dark ? T.dark2 : T.parchment;
  const head     = c.dark ? "#fff" : T.ink;
  const bodyC    = c.dark ? T.paper65 : T.ink56;
  const eye      = c.dark ? T.paper45 : T.ink48;
  const chipBg   = c.dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";
  const chipCol  = c.dark ? "rgba(255,255,255,0.62)" : T.ink56;
  const cardBg   = c.dark ? "rgba(255,255,255,0.04)" : "#fff";
  const cardBorder = c.dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(15,20,25,0.08)";
  const ruleCol  = c.dark ? "rgba(255,255,255,0.10)" : "rgba(15,20,25,0.10)";
  const labelCol = c.dark ? "#5EE0CA" : T.blue;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children ?? [], {
        opacity: 0, y: 28, stagger: 0.12, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: bg, padding: "92px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={headerRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: labelCol, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 16 }}>
              {String(i + 1).padStart(2, "0")} · {c.industry}
            </div>
            <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, color: head, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 14 }}>{c.headline}</h2>
            <div style={{ fontSize: 14, color: eye, letterSpacing: "-0.1px" }}>
              <span style={{ color: head, fontWeight: 600 }}>{c.company}</span>
              <span style={{ margin: "0 10px", opacity: 0.5 }}>·</span>
              <span>{c.timeline}</span>
            </div>
          </div>

          <div style={{ background: cardBg, borderRadius: 18, border: cardBorder, padding: "32px 28px", textAlign: "left", boxShadow: c.dark ? "0 12px 40px rgba(10,132,255,0.16)" : "0 8px 32px rgba(15,20,25,0.06)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 240, height: 240, background: "radial-gradient(circle, rgba(31,191,169,0.20) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div style={{ fontSize: 11, fontWeight: 700, color: labelCol, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 8, position: "relative" }}>Headline result</div>
            <div className="brand-gradient-text" style={{ fontSize: "clamp(56px,6vw,84px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, position: "relative" }}>{c.result}</div>
            <div style={{ fontSize: 17, color: bodyC, marginTop: 8, letterSpacing: "-0.2px", position: "relative" }}>{c.metric}</div>
          </div>
        </div>

        {/* Objective + Challenge */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, paddingTop: 32, borderTop: `1px solid ${ruleCol}` }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: eye, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 10 }}>Objective</div>
            <p style={{ fontSize: 17, color: bodyC, lineHeight: 1.55, letterSpacing: "-0.2px" }}>{c.objective}</p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: eye, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 10 }}>Challenge</div>
            <p style={{ fontSize: 17, color: bodyC, lineHeight: 1.55, letterSpacing: "-0.2px" }}>{c.challenge}</p>
          </div>
        </div>

        {/* Strategy */}
        <div style={{ marginTop: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: eye, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 18 }}>Strategy</div>
          <div style={{ display: "grid", gridTemplateColumns: c.phases.length === 4 ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {c.phases.map((p, pi) => (
              <div key={pi} style={{ background: cardBg, border: cardBorder, borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span className="brand-gradient-text" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-0.1px" }}>{String(pi + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: head, letterSpacing: "-0.2px" }}>{p.name}</span>
                </div>
                <p style={{ fontSize: 14.5, color: bodyC, lineHeight: 1.55, letterSpacing: "-0.15px" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: `1px solid ${ruleCol}`, borderBottom: `1px solid ${ruleCol}` }}>
          {c.metrics.map((m, mi) => (
            <div key={mi} style={{ padding: "26px 18px", borderRight: mi < c.metrics.length - 1 ? `1px solid ${ruleCol}` : "none" }}>
              <div className="brand-gradient-text" style={{ fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05 }}>{m.v}</div>
              <div style={{ fontSize: 12.5, color: bodyC, marginTop: 8, letterSpacing: "-0.1px", lineHeight: 1.4 }}>{m.l}</div>
            </div>
          ))}
        </div>

        {/* Outcome + Services */}
        <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: eye, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 10 }}>Outcome</div>
            <p style={{ fontSize: 17, color: head, lineHeight: 1.55, letterSpacing: "-0.2px", fontWeight: 500 }}>{c.outcome}</p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: eye, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 12 }}>Services</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {c.services.map(sv => (
                <span key={sv} style={{ background: chipBg, color: chipCol, fontSize: 12, padding: "5px 12px", borderRadius: 980 }}>{sv}</span>
              ))}
            </div>
            <Link href="/contact"
              style={{ border: c.dark ? "1px solid rgba(94,182,255,0.5)" : "none", cursor: "pointer", fontFamily: "inherit", transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out", display: "inline-flex", alignItems: "center", justifyContent: "center", background: c.dark ? "transparent" : T.brandGradient, color: c.dark ? T.skyBlue : "#fff", fontSize: 14, fontWeight: c.dark ? 400 : 500, borderRadius: 980, padding: c.dark ? "11px 24px" : "10px 22px", boxShadow: c.dark ? "none" : "0 4px 14px rgba(10,132,255,0.28)" }}
            >
              Work with us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 52 }}>
        {/* Hero */}
        <section style={{ position: "relative", background: "linear-gradient(140deg, #06121A 0%, #0E1A22 50%, #0A2A2A 100%)", padding: "160px 28px 120px", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -120, left: -60, width: 640, height: 640, background: "radial-gradient(circle, rgba(10,132,255,0.22) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -160, right: -100, width: 700, height: 700, background: "radial-gradient(circle, rgba(52,199,89,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 60, alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 980, padding: "6px 14px", marginBottom: 28, backdropFilter: "blur(12px)" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#34C759" }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", letterSpacing: "-0.1px" }}>Receipts, not pitch decks</span>
                </div>
                <h1 style={{ fontSize: "clamp(56px, 9vw, 132px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.045em", lineHeight: 0.92, marginBottom: 28 }}>
                  The work,<br/>
                  <span className="brand-gradient-text">in numbers.</span>
                </h1>
                <p style={{ fontSize: "clamp(18px, 1.6vw, 22px)", color: T.paper65, lineHeight: 1.45, letterSpacing: "-0.2px", maxWidth: 540 }}>
                  Four programs. Four industries. Real revenue you can underwrite.
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ display: "inline-block", borderTop: "1px solid rgba(255,255,255,0.12)", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "18px 0", textAlign: "left" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 12 }}>Across this page</div>
                  <div className="brand-gradient-text" style={{ fontSize: "clamp(64px, 8vw, 124px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.9 }}>+€2.7M</div>
                  <div style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", marginTop: 12, letterSpacing: "-0.15px" }}>In email-attributed revenue, delivered.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatBar />

        {caseStudiesData.map((c, i) => <CaseStudySection key={i} c={c} i={i} />)}

        <DarkCTA
          title={<>Ready to Write Your <span className="brand-gradient-text">Case Study?</span></>}
          sub="Let's build results worth talking about."
        />
        <Footer />
      </div>
    </>
  );
}
