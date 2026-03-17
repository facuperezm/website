"use client";

import { useEffect } from "react";

export function ConsoleMessage() {
  useEffect(() => {
    console.log(
      `%c
  Facundo Perez Montalvo
  Senior Frontend Developer

  React • Next.js • TypeScript
  Product UI • Design Systems • Performance
  Currently building at Storied

  Resume: https://www.facuperezm.com/resume
  Contact: facundoperezmontalvo@gmail.com
      `,
      "color: #10b981; font-size: 14px; font-family: monospace;",
    );
  }, []);

  return null;
}
