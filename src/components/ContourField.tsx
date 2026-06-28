"use client";

import { useEffect, useRef } from "react";

/**
 * The site's signature element: a topographic contour grid rendered on canvas.
 * It behaves like a field of springs — cursor proximity pushes grid nodes
 * outward, and they ease back to rest. This is a deliberate nod to the
 * gesture-tracked particle project: the same idea (motion warping a field
 * of points) rendered as the page's structural backdrop instead of a demo.
 */
export default function ContourField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const SPACING = 42;
    let cols = 0;
    let rows = 0;

    type Node = { x: number; y: number; ox: number; oy: number; vx: number; vy: number };
    let nodes: Node[] = [];

    let pointer = { x: -9999, y: -9999, active: false };
    let lastPointer = { x: -9999, y: -9999 };
    let pointerVel = 0;

    function buildGrid() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.scale(dpr, dpr);

      cols = Math.ceil(width / SPACING) + 2;
      rows = Math.ceil(height / SPACING) + 2;
      nodes = [];
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = i * SPACING;
          const y = j * SPACING;
          nodes.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
    }

    function onPointerMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointerVel = Math.hypot(x - lastPointer.x, y - lastPointer.y);
      lastPointer = { x, y };
      pointer = { x, y, active: true };
    }

    function onPointerLeave() {
      pointer.active = false;
    }

    const RADIUS = 150;
    const RADIUS_SQ = RADIUS * RADIUS;

    function step() {
      ctx!.clearRect(0, 0, width, height);

      const speedBoost = Math.min(pointerVel * 0.6, 26);

      for (const n of nodes) {
        if (pointer.active) {
          const dx = n.ox - pointer.x;
          const dy = n.oy - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < RADIUS_SQ) {
            const dist = Math.sqrt(distSq) || 0.001;
            const force = (1 - dist / RADIUS) * (18 + speedBoost);
            n.vx += (dx / dist) * force * 0.06;
            n.vy += (dy / dist) * force * 0.06;
          }
        }
        // Spring back to origin
        n.vx += (n.ox - n.x) * 0.02;
        n.vy += (n.oy - n.y) * 0.02;
        // Damping
        n.vx *= 0.86;
        n.vy *= 0.86;
        n.x += n.vx;
        n.y += n.vy;
      }

      pointerVel *= 0.9;

      // Draw horizontal contour lines
      ctx!.strokeStyle = "rgba(91, 90, 82, 0.16)";
      ctx!.lineWidth = 1;
      for (let j = 0; j < rows; j++) {
        ctx!.beginPath();
        for (let i = 0; i < cols; i++) {
          const n = nodes[j * cols + i];
          if (i === 0) ctx!.moveTo(n.x, n.y);
          else ctx!.lineTo(n.x, n.y);
        }
        ctx!.stroke();
      }
      // Draw vertical contour lines
      for (let i = 0; i < cols; i++) {
        ctx!.beginPath();
        for (let j = 0; j < rows; j++) {
          const n = nodes[j * cols + i];
          if (j === 0) ctx!.moveTo(n.x, n.y);
          else ctx!.lineTo(n.x, n.y);
        }
        ctx!.stroke();
      }

      // Highlight nodes near the pointer with small dots — like survey markers
      if (pointer.active) {
        ctx!.fillStyle = "rgba(255, 75, 31, 0.55)";
        for (const n of nodes) {
          const dx = n.ox - pointer.x;
          const dy = n.oy - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < RADIUS_SQ * 0.4) {
            ctx!.beginPath();
            ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
            ctx!.fill();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    let raf = 0;
    buildGrid();

    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", onPointerMove, { passive: true });
      window.addEventListener("mouseleave", onPointerLeave);
      raf = requestAnimationFrame(step);
    } else {
      // Static render, single frame, no listeners
      step();
      cancelAnimationFrame(raf);
    }

    const onResize = () => buildGrid();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
