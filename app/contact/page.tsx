"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";
import FaqItem from "@/components/FaqItem";
import Footer from "@/components/Footer";
import { T } from "@/lib/data";

const faqItems = [
  { q: "How quickly can we get started?", a: "Most clients are live within two weeks of signing. We move fast." },
  { q: "Do you work with small brands?",  a: "We work with brands at every stage — from 2,000-subscriber lists to 500k+." },
  { q: "What's your minimum engagement?", a: "Our minimum is a 3-month engagement so we have time to actually move the needle." },
  { q: "Do you integrate with our ESP?",  a: "Yes. We work with Klaviyo, Mailchimp, HubSpot, ActiveCampaign, and more." },
];

export default function ContactPage() {
  const [form, setForm]     = useState({ first: "", last: "", email: "", company: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current?.children ?? [], {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.7, ease: "power3.out", delay: 0.4,
      });
      gsap.from(formRef.current, {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 82%" },
      });
    });
    return () => ctx.revert();
  }, []);

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "#fff",
    border: `1.5px solid ${focused === field ? T.blue : errors[field] ? "#e53935" : "rgba(15,20,25,0.12)"}`,
    borderRadius: 12, padding: "14px 18px",
    fontSize: 17, fontFamily: "inherit",
    color: T.ink, outline: "none",
    letterSpacing: "-0.3px",
    transition: "border-color 160ms ease, box-shadow 160ms ease",
    boxShadow: focused === field ? "0 0 0 4px rgba(10,132,255,0.10)" : "none",
  });

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!form.first.trim()) e.first = true;
    if (!form.email.trim() || !form.email.includes("@")) e.email = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return (
    <>
      <Nav />
      <div style={{ paddingTop: 52 }}>
        {/* Hero */}
        <section style={{ position: "relative", background: "linear-gradient(140deg, #06121A 0%, #0E1A22 50%, #0A2A2A 100%)", padding: "120px 28px 72px", textAlign: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 720, height: 460, background: "radial-gradient(ellipse, rgba(10,132,255,0.20) 0%, rgba(52,199,89,0.10) 50%, transparent 75%)", pointerEvents: "none" }} />
          <div ref={heroRef} style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
            <h1 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.02, marginBottom: 18 }}>
              Let&apos;s <span className="brand-gradient-text">Talk.</span>
            </h1>
            <p style={{ fontSize: 19, color: T.paper65, lineHeight: 1.50, letterSpacing: "-0.2px" }}>Tell us about your brand and we&apos;ll be in touch within one business day.</p>
          </div>
        </section>

        {/* Form + FAQ */}
        <section style={{ background: T.parchment, padding: "80px 28px" }}>
          <div ref={formRef} style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            {/* Form */}
            <div>
              <div style={{ background: "#fff", borderRadius: 20, padding: "40px", border: "1px solid rgba(0,0,0,0.08)" }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: T.brandGradient, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 700, marginBottom: 20, boxShadow: "0 8px 24px rgba(10,132,255,0.32)" }}>✓</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: T.ink, letterSpacing: "-0.03em", marginBottom: 10 }}>Message sent.</div>
                    <div style={{ fontSize: 17, color: T.ink56, lineHeight: 1.5, letterSpacing: "-0.2px" }}>We&apos;ll be in touch within one business day.</div>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ fontSize: 22, fontWeight: 600, color: T.ink, letterSpacing: "-0.02em", marginBottom: 8 }}>Start a conversation</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <input style={inputStyle("first")} placeholder="First name" value={form.first} onChange={e => setForm({ ...form, first: e.target.value })} onFocus={() => setFocused("first")} onBlur={() => setFocused(null)} />
                        {errors.first && <div style={{ fontSize: 12, color: "#e53935", marginTop: 4 }}>Required</div>}
                      </div>
                      <input style={inputStyle("last")} placeholder="Last name" value={form.last} onChange={e => setForm({ ...form, last: e.target.value })} onFocus={() => setFocused("last")} onBlur={() => setFocused(null)} />
                    </div>
                    <div>
                      <input style={inputStyle("email")} type="email" placeholder="Work email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                      {errors.email && <div style={{ fontSize: 12, color: "#e53935", marginTop: 4 }}>Valid email required</div>}
                    </div>
                    <input style={inputStyle("company")} placeholder="Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} />
                    <div>
                      <textarea style={{ ...inputStyle("message"), resize: "vertical", minHeight: 130 }} placeholder="Tell us about your email goals..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                      {errors.message && <div style={{ fontSize: 12, color: "#e53935", marginTop: 4 }}>Required</div>}
                    </div>
                    <button
                      onClick={() => { if (validate()) setSent(true); }}
                      style={{ border: "none", cursor: "pointer", fontFamily: "inherit", transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out", display: "inline-flex", alignItems: "center", justifyContent: "center", background: T.brandGradient, color: T.paper, fontSize: 17, fontWeight: 500, borderRadius: 980, padding: "12px 26px", boxShadow: "0 6px 20px rgba(10,132,255,0.28)", alignSelf: "flex-start", marginTop: 4 }}
                      onMouseEnter={e => { (e.currentTarget).style.opacity = "0.86"; }}
                      onMouseLeave={e => { (e.currentTarget).style.opacity = "1"; (e.currentTarget).style.transform = "scale(1)"; }}
                      onMouseDown={e => { (e.currentTarget).style.transform = "scale(0.95)"; }}
                      onMouseUp={e => { (e.currentTarget).style.transform = "scale(1)"; }}
                    >
                      Send message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 20 }}>Common Questions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {faqItems.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} last={i === faqItems.length - 1} />
                ))}
              </div>

              <div style={{ marginTop: 44 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 20 }}>Other Ways to Reach Us</div>
                {[
                  { label: "Email",          val: "hello@avanti.co" },
                  { label: "Schedule a call", val: "book.avanti.co" },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: T.ink }}>{r.label}</span>
                    <span style={{ fontSize: 15, color: T.blue }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
