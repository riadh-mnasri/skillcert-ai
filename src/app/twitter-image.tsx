import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SkillCert AI — Préparation aux certifications IA";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(#e6ecf4 1px, transparent 1px), linear-gradient(90deg, #e6ecf4 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              backgroundColor: "#3B82C4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 34,
                height: 18,
                borderLeft: "9px solid #ffffff",
                borderBottom: "9px solid #ffffff",
                transform: "rotate(-45deg) translate(2px, -4px)",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 42, fontWeight: 700, color: "#1c2b3a" }}>
            SkillCert&nbsp;<span style={{ color: "#3B82C4" }}>AI</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 700, color: "#1c2b3a", lineHeight: 1.15 }}>
            Reussissez vos certifications IA, sans deviner ce qui va tomber.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#51677d" }}>
            Anthropic Claude · OpenAI · AWS · Google Cloud · Microsoft Azure
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Cours", "Fiches", "QCM", "Examens blancs"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid #8C3B4A",
                color: "#8C3B4A",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
