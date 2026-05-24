import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = document.createElement("div");
    el.className = "cursor-glow";
    document.body.appendChild(el);
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", e.clientX + "px");
        el.style.setProperty("--my", e.clientY + "px");
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.remove();
    };
  }, []);
  return null;
}