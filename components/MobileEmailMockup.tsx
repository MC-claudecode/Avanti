"use client";

import { T } from "@/lib/data";

export default function MobileEmailMockup() {
  return (
    <div className="email-mockup-mobile" style={{
      display: "none",
      width: "100%", maxWidth: 360,
      background: "#fff",
      borderRadius: "20px 20px 0 0",
      border: "1px solid rgba(255,255,255,0.10)",
      borderBottom: "none",
      boxShadow: "0 -24px 80px rgba(0,0,0,0.55)",
      overflow: "hidden",
      fontFamily: "'Google Sans', 'Inter', system-ui, sans-serif",
      flexDirection: "column",
    }}>
      {/* Phone chrome */}
      <div style={{
        background: "#fff", padding: "10px 16px 6px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontSize: 12, color: "#1d1d1f", fontWeight: 600,
      }}>
        <span>9:42</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <span style={{ fontSize: 10, opacity: 0.7 }}>5G</span>
          <div style={{ width: 18, height: 9, border: "1px solid #1d1d1f", borderRadius: 2, position: "relative", padding: 1 }}>
            <div style={{ width: "70%", height: "100%", background: "#1d1d1f", borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* Gmail top bar */}
      <div style={{
        background: "#f6f8fc", padding: "10px 14px",
        borderBottom: "1px solid #e0e3e7",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 3, padding: 4 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 14, height: 2, background: "#5f6368", borderRadius: 1 }} />)}
        </div>
        <div style={{
          flex: 1, background: "#eaf1fb", borderRadius: 999,
          height: 34, display: "flex", alignItems: "center", padding: "0 12px", gap: 8,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#5f6368"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 019.5 14z"/></svg>
          <span style={{ fontSize: 12, color: "#5f6368" }}>Search mail</span>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: T.brandGradient,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 600, color: "#fff",
        }}>Y</div>
      </div>

      {/* Active email row */}
      <div style={{
        display: "flex", alignItems: "flex-start", gap: 10,
        padding: "14px 14px 12px",
        background: "#c2dbff",
        borderBottom: "1px solid #e0e3e7",
        boxShadow: "inset 3px 0 0 #0b57d0",
        animation: "em-slide-in 600ms cubic-bezier(0.22,1,0.36,1) 200ms backwards, em-new-flash 1.6s ease-out 800ms 1",
        position: "relative",
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: "50%",
          background: T.brandGradient, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 13, fontWeight: 700,
        }}>L</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 2 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#001d35" }}>Lorenzo · Avanti</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: "#0b57d0", padding: "1px 6px", borderRadius: 4, letterSpacing: "0.4px" }}>NEW</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#001d35", marginBottom: 2 }}>Hey, we should talk.</div>
          <div style={{ fontSize: 12, color: "#3c4043", lineHeight: 1.4, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" } as React.CSSProperties}>
            I&apos;m the partner most ecom owners wish they&apos;d hired sooner…
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
            <span style={{ fontSize: 11, color: "#5f6368" }}>9:42 AM</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f6b900"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
        </div>
      </div>

      {/* Blurred rows */}
      {[
        { brand: "Shopify",  subj: "Weekly store summary — 14 new orders", time: "Tue" },
        { brand: "Stripe",   subj: "Receipt for your subscription",         time: "Mon" },
        { brand: "Notion",   subj: "Activity in your workspace",            time: "Sun" },
        { brand: "LinkedIn", subj: "5 people viewed your profile",          time: "Sat" },
      ].map((m, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "flex-start", gap: 10,
          padding: "12px 14px",
          borderBottom: "1px solid #f1f3f4",
          filter: "blur(2.4px)", opacity: 0.5,
          pointerEvents: "none", userSelect: "none",
          animation: `em-fade-in 400ms ease-out ${i * 70}ms backwards`,
        }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#dadce0", flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, color: "#3c4043", marginBottom: 2 }}>{m.brand}</div>
            <div style={{ fontSize: 12, color: "#5f6368", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.subj}</div>
            <div style={{ fontSize: 11, color: "#5f6368", marginTop: 4 }}>{m.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
