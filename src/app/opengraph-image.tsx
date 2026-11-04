import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Akhilesh — AI and systems engineer";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "#f7f8f5", color: "#14263a", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", top: -180, right: -100, width: 680, height: 680, borderRadius: "50%", background: "#e5f2ef", border: "1px solid #cae3e0" }} />
      <div style={{ position: "absolute", top: -55, right: 20, width: 460, height: 460, borderRadius: "50%", border: "1px solid #a9d2d1" }} />
      <div style={{ position: "absolute", top: 55, right: 135, width: 240, height: 240, borderRadius: "50%", background: "#103a4a", border: "18px solid #d0e9e6" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "62px 68px", width: "100%", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, fontWeight: 700 }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 50, height: 50, borderRadius: 13, background: "#103a4a", color: "#fff" }}>A</span>
          Akhilesh
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 800 }}>
          <div style={{ display: "flex", color: "#087d91", letterSpacing: 4, fontSize: 19, fontWeight: 700 }}>AI / ML & SYSTEMS ENGINEER</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 75, lineHeight: 1.03, fontWeight: 700, letterSpacing: -4 }}>
            <span>I build systems that</span>
            <span>make intelligence <span style={{ color: "#087d91" }}>useful.</span></span>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", paddingTop: 20, borderTop: "1px solid #cfdedd", color: "#59717d", fontSize: 20 }}>
          Retrieval · Vision · IoT · Embedded
        </div>
      </div>
    </div>,
    size,
  );
}
