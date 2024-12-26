"use client";

import React from "react";

export function ClientQuote() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <p
        onClick={() => setIsOpen(!isOpen)}
        className="font-serif italic tracking-[0.020em]"
      >
        Dream big, work hard, stay focused.
      </p>
      {isOpen && (
        <div className="relative mx-auto max-w-3xl px-4 py-8 font-serif italic tracking-[0.020em] text-muted-foreground">
          <p className="text-pretty">
            My life is guided by the principle of pursuing my passions and
            delivering excellence in everything I do. I know that by doing what
            I love, I am making a positive impact in the world.
          </p>
        </div>
      )}
    </>
  );
}
