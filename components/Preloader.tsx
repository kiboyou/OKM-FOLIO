"use client";

import { useEffect, useState } from "react";

// Faithful port of the original 1s preloader overlay. Content is rendered
// underneath (SSR) and the overlay fades out shortly after mount.
export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return <div id="preloader" />;
}
