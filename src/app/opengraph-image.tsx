import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Facundo Perez Montalvo - Senior Frontend Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const profileImage = await readFile(
    join(process.cwd(), "public", "optimized-facundo.jpg"),
  );
  const profileBase64 = `data:image/jpeg;base64,${profileImage.toString("base64")}`;

  // Warm stone palette matching the site
  const colors = {
    background: "#131211",
    foreground: "#edeceb",
    muted: "#8a8785",
    border: "#2a2827",
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: colors.background,
          color: colors.foreground,
          padding: "80px 100px",
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <img
            src={profileBase64}
            alt="Profile"
            width={100}
            height={100}
            style={{
              borderRadius: "100%",
              border: `2px solid ${colors.border}`,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: 48,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                fontFamily: "Georgia, serif",
              }}
            >
              Facundo Perez Montalvo
            </span>
            <span
              style={{
                fontSize: 24,
                color: colors.muted,
                letterSpacing: "0.02em",
              }}
            >
              Senior Frontend Developer
            </span>
            <span
              style={{
                fontSize: 18,
                color: colors.muted,
                letterSpacing: "0.04em",
              }}
            >
              React · Next.js · TypeScript · Svitla Systems
            </span>
          </div>
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 100,
            right: 100,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${colors.border}`,
            paddingTop: 24,
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: colors.muted,
              letterSpacing: "0.05em",
            }}
          >
            facuperezm.com
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 18,
              color: colors.muted,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "100%",
                backgroundColor: "#10b981",
              }}
            />
            Available
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
