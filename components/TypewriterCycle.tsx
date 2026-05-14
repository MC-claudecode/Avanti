"use client";

import { useEffect, useState } from "react";

export default function TypewriterCycle({
  words,
  typeSpeed = 135,
  deleteSpeed = 70,
  holdMs = 2200,
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  const [caretOn, setCaretOn] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCaretOn(c => !c), 480);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const word = words[idx];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (display.length < word.length) {
        t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase("deleting"), holdMs);
      }
    } else {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(word.slice(0, display.length - 1)), deleteSpeed);
      } else {
        setIdx((idx + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [display, phase, idx, words, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span style={{ whiteSpace: "nowrap" }}>
      <span className="brand-gradient-text">{display}</span>
      <span style={{
        display: "inline-block", width: "0.06em", height: "0.95em",
        background: "#34C759", marginLeft: 4, verticalAlign: "-0.12em",
        opacity: caretOn ? 1 : 0, transition: "opacity 80ms",
        boxShadow: "0 0 12px rgba(52,199,89,0.6)",
      }} />
    </span>
  );
}
