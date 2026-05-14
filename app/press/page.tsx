import Nav from "@/components/Nav";

export default function PressPage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 52, minHeight: "calc(100vh - 52px)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "clamp(80px, 18vw, 220px)", color: "#0F1419", letterSpacing: "-0.04em", fontWeight: 900, userSelect: "none", lineHeight: 1 }}>
          mashallah
        </span>
      </div>
    </>
  );
}
