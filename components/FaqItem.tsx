"use client";

import { useState, type CSSProperties } from "react";
import { T } from "@/lib/data";

const btnBase: CSSProperties = {
  border: "none", cursor: "pointer", fontFamily: "inherit",
  transition: "opacity 160ms ease-in-out",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
};

export default function FaqItem({ q, a, last }: { q: string; a: string; last?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: last && !open ? "none" : "1px solid rgba(0,0,0,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          ...btnBase, background: "none", width: "100%",
          justifyContent: "space-between", padding: "18px 0",
          fontSize: 16, fontWeight: 600, color: T.ink, letterSpacing: "-0.2px",
          textAlign: "left", gap: 16,
        }}
      >
        <span>{q}</span>
        <span
          className="brand-gradient-text"
          style={{ fontSize: 22, fontWeight: 700, transition: "transform 200ms ease", transform: open ? "rotate(45deg)" : "none", flexShrink: 0 }}
        >+</span>
      </button>
      {open && (
        <div style={{ fontSize: 15, color: T.ink56, lineHeight: 1.60, letterSpacing: "-0.2px", paddingBottom: 18 }}>{a}</div>
      )}
    </div>
  );
}
