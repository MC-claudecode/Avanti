"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import FaqItem from "@/components/FaqItem";
import Footer from "@/components/Footer";
import { T } from "@/lib/data";

const CALENDLY_URL  = "https://calendly.com/lorenzo-avantiretention/15min";
const LORENZO_EMAIL = "lorenzo@avantiretention.com";

const faqItems = [
  { q: "How quickly can we get started?", a: "Most clients are live within two weeks of signing. We move fast." },
  { q: "Do you work with small brands?",  a: "We work with brands at every stage — from 2,000-subscriber lists to 500k+." },
  { q: "What's your minimum engagement?", a: "Our minimum is a 3-month engagement so we have time to actually move the needle." },
  { q: "Do you integrate with our ESP?",  a: "Yes. We work with Klaviyo, Mailchimp, HubSpot, ActiveCampaign, and more." },
];

export default function ContactPage() {
  const [form, setForm]     = useState({ name: "", email: "", brand: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "#fff",
    border: `1.5px solid ${focused === field ? T.blue : errors[field] ? "#e53935" : "rgba(15,20,25,0.12)"}`,
    borderRadius: 10, padding: "12px 14px",
    fontSize: 15, fontFamily: "inherit",
    color: T.ink, outline: "none",
    letterSpacing: "-0.2px",
    transition: "border-color 160ms ease, box-shadow 160ms ease",
    boxShadow: focused === field ? "0 0 0 3px rgba(10,132,255,0.10)" : "none",
  });

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !form.email.includes("@")) e.email = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject  = `Email marketing enquiry — ${form.brand || form.name}`;
    const bodyLines = [
      "Hey Lorenzo,",
      "",
      form.message,
      "",
      "—",
      `${form.name}${form.brand ? ` · ${form.brand}` : ""}`,
      form.email,
    ];
    window.location.href = `mailto:${LORENZO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  return (
    <>
      <Nav />
      <div style={{ paddingTop: 52 }}>
        {/* Hero */}
        <section style={{ position: "relative", background: "linear-gradient(140deg, #06121A 0%, #0E1A22 50%, #0A2A2A 100%)", padding: "120px 28px 72px", textAlign: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 720, height: 460, background: "radial-gradient(ellipse, rgba(10,132,255,0.20) 0%, rgba(52,199,89,0.10) 50%, transparent 75%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
            <h1 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.02, marginBottom: 18 }}>
              Let&apos;s <span className="brand-gradient-text">Talk.</span>
            </h1>
            <p style={{ fontSize: 19, color: T.paper65, lineHeight: 1.50, letterSpacing: "-0.2px" }}>Tell us about your brand and we&apos;ll be in touch within one business day.</p>
          </div>
        </section>

        {/* Booking + FAQ */}
        <section style={{ background: T.parchment, padding: "80px 28px" }}>
          <div className="responsive-stack" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            {/* LEFT — booking actions */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 20 }}>Get in touch</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                {/* Primary: Calendly */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 40px rgba(10,132,255,0.32)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "none"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(10,132,255,0.22)"; }}
                  style={{ display: "block", background: T.brandGradient, borderRadius: 20, padding: "32px 32px 28px", color: "#fff", textDecoration: "none", boxShadow: "0 8px 28px rgba(10,132,255,0.22)", transition: "transform 200ms ease, box-shadow 200ms ease", position: "relative", overflow: "hidden" }}
                >
                  <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, position: "relative" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.6px", textTransform: "uppercase", opacity: 0.85 }}>15-min intro call</span>
                  </div>
                  <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 8, position: "relative" }}>Book a call with Lorenzo</div>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.55, letterSpacing: "-0.15px", marginBottom: 22, position: "relative" }}>
                    Pick a slot that works. We&apos;ll walk through your email program and where the revenue is sitting unclaimed.
                  </p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.24)", borderRadius: 999, padding: "10px 18px", fontSize: 14, fontWeight: 500, position: "relative" }}>
                    Schedule on Calendly
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>

                {/* Secondary: Email form */}
                <div style={{ background: "#fff", border: "1px solid rgba(15,20,25,0.10)", borderRadius: 20, padding: "26px 28px", boxShadow: "0 4px 18px rgba(15,20,25,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span style={{ fontSize: 11, fontWeight: 700, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase" }}>Prefer email?</span>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: T.ink, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 6 }}>Send Lorenzo a note</div>
                  <p style={{ fontSize: 13.5, color: T.ink56, lineHeight: 1.5, letterSpacing: "-0.15px", marginBottom: 18 }}>
                    Fill this in — we&apos;ll open your mail app with everything ready to send to <span style={{ color: T.blue }}>{LORENZO_EMAIL}</span>.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <input style={inputStyle("name")} placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                        {errors.name && <div style={{ fontSize: 11, color: "#e53935", marginTop: 4 }}>Required</div>}
                      </div>
                      <input style={inputStyle("brand")} placeholder="Brand (optional)" value={form.brand} onChange={e => setForm({ ...form, brand: e.target.value })} onFocus={() => setFocused("brand")} onBlur={() => setFocused(null)} />
                    </div>
                    <div>
                      <input style={inputStyle("email")} type="email" placeholder="Your email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                      {errors.email && <div style={{ fontSize: 11, color: "#e53935", marginTop: 4 }}>Valid email required</div>}
                    </div>
                    <div>
                      <textarea style={{ ...inputStyle("message"), resize: "vertical", minHeight: 110 }} placeholder="What would you like email to do for your brand?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                      {errors.message && <div style={{ fontSize: 11, color: "#e53935", marginTop: 4 }}>Required</div>}
                    </div>
                    <button
                      onClick={sendEmail}
                      onMouseEnter={e => { (e.currentTarget).style.opacity = "0.86"; }}
                      onMouseLeave={e => { (e.currentTarget).style.opacity = "1"; (e.currentTarget).style.transform = "scale(1)"; }}
                      onMouseDown={e => { (e.currentTarget).style.transform = "scale(0.95)"; }}
                      onMouseUp={e => { (e.currentTarget).style.transform = "scale(1)"; }}
                      style={{ border: "none", cursor: "pointer", fontFamily: "inherit", transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 4, alignSelf: "flex-start", background: T.ink, color: "#fff", fontSize: 14, fontWeight: 500, borderRadius: 999, padding: "11px 22px", boxShadow: "0 4px 14px rgba(15,20,25,0.18)" }}
                    >
                      Open in mail app
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Trust signals */}
                <div style={{ display: "flex", gap: 18, padding: "0 4px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.green }} />
                    <span style={{ fontSize: 13, color: T.ink56, letterSpacing: "-0.1px" }}>Replies within 1 business day</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.blue }} />
                    <span style={{ fontSize: 13, color: T.ink56, letterSpacing: "-0.1px" }}>No pitch, no pressure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — FAQ */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.ink48, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 20 }}>Common Questions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {faqItems.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} last={i === faqItems.length - 1} />
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
