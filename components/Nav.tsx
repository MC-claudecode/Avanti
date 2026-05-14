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

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
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

  const links = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 52,
        background: scrolled ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0.55)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        display: "flex", alignItems: "center", padding: "0 32px",
        transition: "background 200ms ease",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <Link href="/" style={{ ...btnBase, background: "none", padding: 0, marginRight: "auto" }}>
        <Image src="/assets/avanti-logo.png" alt="Avanti" width={96} height={38} style={{ height: 38, width: "auto", display: "block" }} />
      </Link>

      <div ref={linksRef} style={{ display: "flex", gap: 28, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        {links.map(l => (
          <Link key={l.label} href={l.href} style={{
            ...btnBase, background: "none", padding: 0,
            fontSize: 13, fontWeight: 400, letterSpacing: "-0.12px",
            color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.72)",
            transition: "color 160ms ease",
          }}>
            {l.label}
          </Link>
        ))}
      </div>

      <Link
        ref={ctaRef}
        href="/contact"
        style={{
          ...btnBase, marginLeft: "auto",
          background: T.brandGradient, color: "#fff", fontSize: 13, fontWeight: 500,
          borderRadius: 980, padding: "7px 16px",
          boxShadow: "0 4px 14px rgba(10,132,255,0.35)",
        }}
      >
        Get started
      </Link>
    </nav>
  );
}
