"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { T } from "@/lib/data";

const btnBase: React.CSSProperties = {
  border: "none", cursor: "pointer", fontFamily: "inherit",
  transition: "opacity 160ms ease-in-out, transform 120ms ease-in-out",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
};

const pressProps = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.opacity = "0.86"; },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "scale(1)"; },
  onMouseDown:  (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(0.95)"; },
  onMouseUp:    (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; },
};

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(navRef.current, { yPercent: -100, duration: 0.7, delay: 0.1 })
        .from(linksRef.current?.children ?? [], { opacity: 0, y: -6, stagger: 0.08, duration: 0.4 }, "-=0.2")
        .from(ctaRef.current, { opacity: 0, x: 10, duration: 0.4 }, "-=0.3");
    });

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { ctx.revert(); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="nav-bar"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          height: 52,
          background: (scrolled || menuOpen) ? "rgba(6,18,26,0.97)" : "rgba(6,18,26,0.88)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          display: "flex", alignItems: "center", padding: "0 32px",
          transition: "background 200ms ease",
          borderBottom: (scrolled || menuOpen) ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <Link href="/" onClick={close} style={{ ...btnBase, background: "none", padding: 0, marginRight: "auto" }}>
          <Image className="nav-logo" src="/assets/avanti-logo.png" alt="Avanti" width={96} height={38} style={{ height: 38, width: "auto", display: "block" }} />
        </Link>

        {/* Desktop links */}
        <div ref={linksRef} className="nav-center-links" style={{ display: "flex", gap: 28, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          {links.map(l => (
            <Link key={l.label} href={l.href} style={{
              ...btnBase, background: "none", padding: 0,
              fontSize: 13, fontWeight: 400, letterSpacing: "-0.12px",
              whiteSpace: "nowrap",
              color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.72)",
              transition: "color 160ms ease",
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          ref={ctaRef}
          href="/contact"
          className="nav-desktop-cta"
          style={{
            ...btnBase, marginLeft: "auto",
            background: T.brandGradient, color: "#fff", fontSize: 13, fontWeight: 500,
            borderRadius: 980, padding: "7px 16px",
            boxShadow: "0 4px 14px rgba(10,132,255,0.35)",
          }}
        >
          Get started
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          style={{
            ...btnBase, display: "none",
            marginLeft: "auto",
            width: 40, height: 40, borderRadius: 10,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            flexDirection: "column", gap: 5,
          }}
        >
          <span style={{ width: 16, height: 1.5, background: "#fff", borderRadius: 1, transition: "transform 200ms ease", transform: menuOpen ? "translateY(3.25px) rotate(45deg)" : "none", display: "block" }} />
          <span style={{ width: 16, height: 1.5, background: "#fff", borderRadius: 1, transition: "transform 200ms ease", transform: menuOpen ? "translateY(-3.25px) rotate(-45deg)" : "none", display: "block" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        onClick={close}
        style={{
          position: "fixed", top: 52, left: 0, right: 0, bottom: 0,
          zIndex: 199,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 220ms ease",
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: "rgba(6,18,26,0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "20px 24px 28px",
            transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
            transition: "transform 260ms cubic-bezier(0.22,1,0.36,1)",
            display: "flex", flexDirection: "column", gap: 4,
          }}
        >
          {links.map(l => (
            <Link key={l.label} href={l.href} onClick={close}
              style={{
                ...btnBase, background: pathname === l.href ? "rgba(255,255,255,0.06)" : "transparent",
                padding: "16px 14px", borderRadius: 12,
                fontSize: 18, fontWeight: 500, letterSpacing: "-0.2px",
                color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.82)",
                justifyContent: "flex-start", textAlign: "left",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={close} {...pressProps}
            style={{
              ...btnBase, marginTop: 14,
              background: T.brandGradient, color: "#fff",
              fontSize: 15, fontWeight: 500,
              borderRadius: 12, padding: "14px 18px",
              boxShadow: "0 6px 20px rgba(10,132,255,0.32)",
            }}
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
}
