"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A diegetic cursor: a small crosshair with a live coordinate readout,
 * styled like a CAD/drafting tool pointer. It snaps into a "lock" state
 * over interactive elements (anything with data-cursor="lock" or default
 * interactive tags), and feeds its position to any listener via a custom
 * window event so the hero contour field can react to it.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  // Lazy-initialized once on first render rather than via an effect: this
  // reads a stable browser capability (fine pointer support), not state
  // that needs to sync with an external system over time.
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });
  const [locked, setLocked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    let raf = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${mouseX + 18}px, ${mouseY + 14}px, 0)`;
        labelRef.current.textContent = `${Math.round(mouseX).toString().padStart(4, "0")}, ${Math.round(
          mouseY
        )
          .toString()
          .padStart(4, "0")}`;
      }

      window.dispatchEvent(
        new CustomEvent("cursor:move", { detail: { x: mouseX, y: mouseY } })
      );

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="lock"]'
      );
      setLocked(Boolean(interactive));
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  return (
    <div
      aria-hidden="true"
      style={{ opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200"
    >
      {/* Center crosshair dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 will-change-transform"
        style={{ marginLeft: -1, marginTop: -1 }}
      >
        <div
          className="h-[2px] w-[2px] rounded-full transition-transform duration-150"
          style={{
            backgroundColor: "var(--signal)",
            transform: locked ? "scale(3)" : "scale(2)",
          }}
        />
      </div>

      {/* Trailing crosshair ring */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 will-change-transform"
        style={{ marginLeft: -14, marginTop: -14 }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          className="transition-transform duration-200"
          style={{ transform: locked ? "scale(1.4) rotate(45deg)" : "scale(1) rotate(0deg)" }}
        >
          <line x1="14" y1="0" x2="14" y2="8" stroke="var(--ink)" strokeWidth="1" opacity="0.7" />
          <line x1="14" y1="20" x2="14" y2="28" stroke="var(--ink)" strokeWidth="1" opacity="0.7" />
          <line x1="0" y1="14" x2="8" y2="14" stroke="var(--ink)" strokeWidth="1" opacity="0.7" />
          <line x1="20" y1="14" x2="28" y2="14" stroke="var(--ink)" strokeWidth="1" opacity="0.7" />
          <circle
            cx="14"
            cy="14"
            r="10.5"
            fill="none"
            stroke={locked ? "var(--signal)" : "var(--graphite)"}
            strokeWidth="1"
            opacity={locked ? "1" : "0.4"}
          />
        </svg>
      </div>

      {/* Coordinate readout */}
      <div
        ref={labelRef}
        className="diagnostic absolute top-0 left-0 will-change-transform whitespace-nowrap"
        style={{ color: "var(--graphite)" }}
      />
    </div>
  );
}
