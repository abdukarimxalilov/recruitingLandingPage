import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0A2540 0%, #2E8BFF 100%)",
          color: "white",
          fontFamily: "Poppins, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", opacity: 0.7 }}>
          Tim Miller Recruiting
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            Moving freight forward with proven transportation talent
          </div>
          <div style={{ fontSize: 28, opacity: 0.85 }}>
            CDL drivers, dispatch leaders, and logistics executives delivered in 5–7 days.
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>timmillerrecruiting.com</div>
      </div>
    ),
    {
      ...size,
    },
  );
}
