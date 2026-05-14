import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { T } from "@/lib/data";

const btnBase: CSSProperties = {
  border: "none", cursor: "pointer", fontFamily: "inherit",
  transition: "opacity 160ms ease-in-out",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
};

const cols = [
  { title: "Services", links: [{ label: "Email Strategy", href: "/" }, { label: "Campaign Design", href: "/" }, { label: "A/B Testing", href: "/" }, { label: "Deliverability", href: "/" }, { label: "Analytics", href: "/" }] },
  { title: "Work",     links: [{ label: "Case Studies", href: "/case-studies" }, { label: "Results", href: "/case-studies" }, { label: "Testimonials", href: "/" }] },
  { title: "Company",  links: [{ label: "About", href: "/" }, { label: "Blog", href: "/" }, { label: "Careers", href: "/" }, { label: "Press", href: "/press" }] },
  { title: "Contact",  links: [{ label: "Get in Touch", href: "/contact" }, { label: "Schedule a Call", href: "/contact" }, { label: "Partner With Us", href: "/contact" }] },
];

export default function Footer() {
  return (
    <footer style={{ background: T.parchment, padding: "52px 28px 28px", borderTop: "1px solid rgba(15,20,25,0.08)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 36 }}>
          <Image src="/assets/avanti-logo.png" alt="Avanti" width={120} height={56} style={{ height: 56, width: "auto", display: "block" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 32, marginBottom: 44 }}>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 12, fontWeight: 600, color: T.ink, letterSpacing: "-0.12px", marginBottom: 6 }}>{col.title}</div>
              {col.links.map(link => (
                <Link key={link.label} href={link.href} style={{
                  ...btnBase, background: "none", padding: 0,
                  display: "block", fontSize: 12, color: T.ink,
                  lineHeight: 2.41, letterSpacing: "-0.12px", opacity: 0.68,
                  textAlign: "left",
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.10)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontSize: 12, color: T.ink48, letterSpacing: "-0.12px" }}>Copyright © 2026 Avanti. All rights reserved.</span>
          <div style={{ display: "flex", gap: 16 }}>
            {["Privacy Policy", "Terms of Use", "Legal"].map(l => (
              <Link key={l} href="#" style={{ fontSize: 12, color: T.ink48, letterSpacing: "-0.12px" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
