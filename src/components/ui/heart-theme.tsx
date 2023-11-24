"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="theme"
      size="tiny"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span
        className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      >
        🤍
      </span>
      <span
        className="absolute h-5 w-5 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      >
        🖤
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
