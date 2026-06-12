"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText({ strings }: { strings: string[] }) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, [strings]);

  return (
    <p>
      <span ref={el} />
    </p>
  );
}
