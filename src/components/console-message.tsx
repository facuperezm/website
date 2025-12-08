"use client";

import { useEffect } from "react";

export function ConsoleMessage() {
  useEffect(() => {
    console.log(
      `%c
  Hey there, curious developer! 👋

  Thanks for inspecting my site.
  Built with Next.js, Tailwind CSS, and attention to detail.

  Let's connect: facundoperezmontalvo@gmail.com
      `,
      "color: #10b981; font-size: 14px; font-family: monospace;",
    );
  }, []);

  return null;
}
