import Image from "next/image";
import { T } from "@/lib/data";

const blurredRows = [
  { brand: "Shopify",  subj: "Weekly store summary — 14 new orders" },
  { brand: "Stripe",   subj: "Receipt for your subscription" },
  { brand: "Notion",   subj: "Activity in your workspace" },
  { brand: "Calendar", subj: "Reminder: 1:1 at 3:00 PM" },
  { brand: "LinkedIn", subj: "5 people viewed your profile" },
  { brand: "GitHub",   subj: "PR #482 has been merged" },
  { brand: "Figma",    subj: "Comment on Brand v3" },
];

const sidebarItems = [
  { name: "Inbox", count: "1", active: true,  icon: "M22 4H2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-10 5L2 8V6l10 5 10-5v2z" },
  { name: "Starred",  active: false, icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" },
  { name: "Snoozed",  active: false, icon: "M12 6a6 6 0 110 12 6 6 0 010-12m0-2a8 8 0 100 16 8 8 0 000-16zm.5 4H11v5l4.25 2.52.75-1.23-3.5-2.08V8z" },
  { name: "Sent",     active: false, icon: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" },
  { name: "Drafts",   active: false, icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" },
];

export default function EmailMockup() {
  return (
    <div style={{
      width: "100%", maxWidth: 1000,
      background: "#fff",
      borderRadius: "16px 16px 0 0",
      border: "1px solid rgba(255,255,255,0.10)",
      borderBottom: "none",
      boxShadow: "0 -24px 80px rgba(0,0,0,0.55)",
      overflow: "hidden",
      fontFamily: "'Google Sans', 'Inter', system-ui, sans-serif",
    }}>
      {/* Mac chrome */}
      <div style={{ background: "#e8eaed", height: 32, display: "flex", alignItems: "center", padding: "0 12px", gap: 7, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, textAlign: "center", fontSize: 11, color: "rgba(0,0,0,0.42)" }}>mail.google.com</div>
      </div>

      {/* Gmail top bar */}
      <div style={{ height: 56, background: "#f6f8fc", display: "flex", alignItems: "center", padding: "0 16px", gap: 14, borderBottom: "1px solid #e0e3e7" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 3, padding: 6 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 16, height: 2, background: "#5f6368", borderRadius: 1 }} />)}
        </div>
        <Image src="/assets/gmail-logo.png" alt="Gmail" width={56} height={26} style={{ height: 26, width: "auto" }} />
        <div style={{ flex: 1, maxWidth: 540, marginLeft: 14, background: "#eaf1fb", borderRadius: 8, height: 40, display: "flex", alignItems: "center", padding: "0 14px", gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#5f6368"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 019.5 14z"/></svg>
          <span style={{ fontSize: 13, color: "#5f6368" }}>Search mail</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: T.brandGradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: "#fff" }}>Y</div>
        </div>
      </div>

      {/* Gmail body */}
      <div style={{ display: "flex", height: 460, background: "#f6f8fc" }}>
        {/* Side rail */}
        <div style={{ width: 196, flexShrink: 0, padding: "14px 0 14px 12px" }}>
          <button style={{ background: "#c2e7ff", color: "#001d35", border: "none", borderRadius: 16, padding: "13px 22px 13px 14px", fontSize: 14, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 10, cursor: "default", boxShadow: "0 1px 2px rgba(0,0,0,0.06)", marginBottom: 16 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#001d35"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            Compose
          </button>
          {sidebarItems.map(f => (
            <div key={f.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px 0 26px", height: 32, borderRadius: "0 16px 16px 0", background: f.active ? "#d3e3fd" : "transparent", marginBottom: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={f.active ? "#001d35" : "#5f6368"}><path d={f.icon}/></svg>
                <span style={{ fontSize: 13.5, color: f.active ? "#001d35" : "#3c4043", fontWeight: f.active ? 700 : 400 }}>{f.name}</span>
              </div>
              {"count" in f && f.count && <span style={{ fontSize: 12, color: "#001d35", fontWeight: 700 }}>{f.count}</span>}
            </div>
          ))}
        </div>

        {/* Main column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", borderTopLeftRadius: 16, overflow: "hidden", border: "1px solid #e0e3e7", borderBottom: "none", borderRight: "none" }}>
          {/* Toolbar */}
          <div style={{ height: 44, padding: "0 16px", display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid #e0e3e7" }}>
            <div style={{ width: 16, height: 16, border: "1.5px solid #5f6368", borderRadius: 2 }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#5f6368"><path d="M7 10l5 5 5-5z"/></svg>
            <div style={{ width: 1, height: 16, background: "#dadce0", marginLeft: 4 }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#5f6368"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
            <span style={{ fontSize: 12, color: "#5f6368", marginLeft: "auto" }}>1–8 of 247</span>
          </div>

          <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
            {/* Message list */}
            <div style={{ width: 290, flexShrink: 0, borderRight: "1px solid #e0e3e7", overflow: "hidden", background: "#fff" }}>
              {/* Active row */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#c2dbff", borderBottom: "1px solid #e0e3e7", boxShadow: "inset 3px 0 0 #0b57d0", animation: "em-slide-in 600ms cubic-bezier(0.22,1,0.36,1) 200ms backwards, em-new-flash 1.6s ease-out 800ms 1", position: "relative" }}>
                <span style={{ position: "absolute", top: 6, right: 10, fontSize: 9, fontWeight: 700, color: "#fff", background: "#0b57d0", padding: "1px 6px", borderRadius: 4, letterSpacing: "0.4px", animation: "em-fade-up 400ms ease-out 800ms backwards" }}>NEW</span>
                <div style={{ width: 16, height: 16, border: "1.5px solid #5f6368", borderRadius: 2, flexShrink: 0 }} />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#f6b900" style={{ flexShrink: 0 }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#001d35", whiteSpace: "nowrap" }}>Lorenzo · Avanti</span>
                    <span style={{ fontSize: 11, color: "#001d35", fontWeight: 600, flexShrink: 0, marginRight: 36 }}>9:42 AM</span>
                  </div>
                  <div style={{ fontSize: 12.5, color: "#001d35", marginTop: 2, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    Hey, we should talk. <span style={{ color: "#5f6368", fontWeight: 400 }}>I&apos;m the partner most ecom owners wish they&apos;d hired sooner…</span>
                  </div>
                </div>
              </div>

              {blurredRows.map((m, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderBottom: "1px solid #f1f3f4", filter: "blur(2.6px)", opacity: 0.55, pointerEvents: "none", userSelect: "none", animation: `em-fade-in 400ms ease-out ${i * 70}ms backwards` }}>
                  <div style={{ width: 16, height: 16, border: "1.5px solid #bdc1c6", borderRadius: 2, flexShrink: 0 }} />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bdc1c6" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                      <span style={{ fontSize: 13, color: "#3c4043", whiteSpace: "nowrap" }}>{m.brand}</span>
                      <span style={{ fontSize: 11, color: "#5f6368", flexShrink: 0 }}>Tue</span>
                    </div>
                    <div style={{ fontSize: 12.5, color: "#5f6368", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.subj}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reading pane */}
            <div style={{ flex: 1, background: "#fff", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "18px 26px 14px", borderBottom: "1px solid #f1f3f4", animation: "em-fade-up 500ms ease-out 1200ms backwards" }}>
                <h1 style={{ fontSize: 21, fontWeight: 400, color: "#202124", lineHeight: 1.25, margin: 0 }}>
                  Hey, we should talk.
                  <span style={{ marginLeft: 8, fontSize: 12, color: "#5f6368", fontWeight: 400, background: "#f1f3f4", padding: "2px 8px", borderRadius: 4, verticalAlign: "middle" }}>Inbox</span>
                </h1>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: T.brandGradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600, color: "#fff" }}>L</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, color: "#202124" }}>
                      <span style={{ fontWeight: 600 }}>Lorenzo · Avanti</span>
                      <span style={{ color: "#5f6368", fontWeight: 400 }}> &lt;lorenzo@avantiretention.com&gt;</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#5f6368", marginTop: 1 }}>to you · 9:42 AM (0 minutes ago)</div>
                  </div>
                </div>
              </div>

              <div style={{ flex: 1, overflow: "hidden", padding: "22px 26px" }}>
                <p style={{ fontSize: 14, color: "#202124", lineHeight: 1.65, marginBottom: 14, animation: "em-fade-up 500ms ease-out 1500ms backwards" }}>Every brand we&apos;ve ever signed is still with us.</p>
                <p style={{ fontSize: 14, color: "#202124", lineHeight: 1.65, marginBottom: 14, animation: "em-fade-up 500ms ease-out 1800ms backwards" }}>That&apos;s not luck, and it&apos;s not a long contract. It&apos;s because we treat partners differently. There&apos;s one specific thing we do that almost no one else is willing to.</p>
                <p style={{ fontSize: 14, color: "#202124", lineHeight: 1.65, marginBottom: 22, animation: "em-fade-up 500ms ease-out 2100ms backwards" }}>Scroll down. You&apos;ll see it for yourself.</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, animation: "em-cta-in 500ms cubic-bezier(0.34,1.56,0.64,1) 2400ms backwards" }}>
                  <button style={{ background: T.brandGradient, color: "#fff", border: "none", padding: "11px 22px", borderRadius: 999, fontSize: 13.5, fontWeight: 500, cursor: "default", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 14px rgba(10,132,255,0.30)" }}>
                    Keep scrolling
                    <span style={{ display: "inline-block", animation: "bounceDown 1.4s ease-in-out infinite" }}>↓</span>
                  </button>
                  <span style={{ fontSize: 12, color: "#5f6368" }}>30 seconds · no email required</span>
                </div>
                <div style={{ fontSize: 13, color: "#3c4043", lineHeight: 1.55, animation: "em-fade-up 500ms ease-out 2700ms backwards" }}>
                  — Lorenzo<br/>
                  <span style={{ color: "#5f6368", fontSize: 12 }}>Founder, Avanti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
