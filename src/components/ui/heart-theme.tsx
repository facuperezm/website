"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="theme"
      size="tiny"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={className}
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
