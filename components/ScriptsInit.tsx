"use client";

import { useEffect } from "react";

// Initializes the DevFolio theme behaviors (AOS animations, GLightbox, the
// scrolled-header class). Libraries are imported dynamically because they touch
// `window` and must only run on the client.
export default function ScriptsInit() {
  useEffect(() => {
    let destroyLightbox: (() => void) | undefined;

    (async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });

      const GLightbox = (await import("glightbox")).default;
      const lightbox = GLightbox({ selector: ".glightbox" });
      destroyLightbox = () => lightbox.destroy();
    })();

    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      destroyLightbox?.();
    };
  }, []);

  return null;
}
