// src/components/MouseTrail/MouseCircle.tsx
"use client";

import { RefObject, useEffect, useRef } from "react";

type Props = {
  containerRef: RefObject<HTMLElement>;
};

export default function MouseCircle({ containerRef }: Props) {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;
    if (!container || !circle) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;

      if (!visible.current) {
        visible.current = true;
        circle.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      visible.current = false;
      circle.style.opacity = "0";
    };

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15);

      circle.style.left = `${pos.current.x}px`;
      circle.style.top = `${pos.current.y}px`;

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef]);

  return <div ref={circleRef} className="aua-hero__circle" />;
}
