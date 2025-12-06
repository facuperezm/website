import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Facundo Perez Montalvo - Frontend Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const profileImage = await readFile(
    join(process.cwd(), "public", "optimized-facundo.jpg")
  );
  const profileBase64 = `data:image/jpeg;base64,${profileImage.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <img
            src={profileBase64}
            alt="Profile"
            width={88}
            height={88}
            style={{
              borderRadius: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: 42,
                fontWeight: 500,
              }}
            >
              Facundo Perez Montalvo
            </span>
            <span
              style={{
                fontSize: 26,
                color: "#a1a1aa",
              }}
            >
              Frontend Developer
            </span>
          </div>
        </div>

        <span
          style={{
            position: "absolute",
            bottom: 50,
            fontSize: 20,
            color: "#3f3f46",
          }}
        >
          facuperezm.com
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
