"use client";

import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ==== Vars ====
    const win = {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    const mouse = {
      x: win.w * 0.5,
      y: win.h * 0.5,
      lerpX: win.w * 0.5,
      lerpY: win.h * 0.5,
    };

    const opts = {
      points: 60,
      colorHead: "#b6f93f",
      colorBody: "#68c316",
      colorTail: "#2D0ECE",
      headWidth: 40,
      tailWidth: 0,
      lerp: 0.1,
    };

    let colorHead: number[] = [];
    let colorBody: number[] = [];
    let colorTail: number[] = [];
    let Colors: string[] = [];

    const Line: { x: number; y: number }[] = [];

    // ==== Resize ====
    const handleResize = () => {
      win.w = window.innerWidth;
      win.h = window.innerHeight;
      canvas.width = win.w;
      canvas.height = win.h;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const clear = () => {
      ctx.clearRect(0, 0, win.w, win.h);
    };

    const lerp = (a: number, b: number, c: number) => {
      return (1 - c) * a + c * b;
    };

    const getLerpCol = (
      c1: number,
      c2: number,
      c3: number,
      l: number
    ): number => {
      const l1 = Math.round(lerp(c2, c1, l * 1.5));
      const l2 = Math.round(lerp(c3, c2, l * 1.5));
      return Math.round(lerp(l1, l2, 1 - l));
    };

    const handleColors = () => {
      colorHead = [
        parseInt(opts.colorHead.slice(1, 3), 16),
        parseInt(opts.colorHead.slice(3, 5), 16),
        parseInt(opts.colorHead.slice(5, 7), 16),
      ];
      colorBody = [
        parseInt(opts.colorBody.slice(1, 3), 16),
        parseInt(opts.colorBody.slice(3, 5), 16),
        parseInt(opts.colorBody.slice(5, 7), 16),
      ];
      colorTail = [
        parseInt(opts.colorTail.slice(1, 3), 16),
        parseInt(opts.colorTail.slice(3, 5), 16),
        parseInt(opts.colorTail.slice(5, 7), 16),
      ];

      Colors = [];
      for (let i = 0; i < opts.points; i++) {
        const t = i / opts.points;
        const r = getLerpCol(colorHead[0], colorBody[0], colorTail[0], t);
        const g = getLerpCol(colorHead[1], colorBody[1], colorTail[1], t);
        const b = getLerpCol(colorHead[2], colorBody[2], colorTail[2], t);
        Colors.push(`rgb(${r}, ${g}, ${b})`);
      }
    };
    handleColors();

    const drawMouse = () => {
      mouse.lerpX = lerp(mouse.lerpX, mouse.x, opts.lerp);
      mouse.lerpY = lerp(mouse.lerpY, mouse.y, opts.lerp);
    };

    const draw = () => {
      clear();
      drawMouse();

      if (Line.length > opts.points) Line.pop();
      Line.unshift({ x: mouse.lerpX, y: mouse.lerpY });

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.miterLimit = 5;

      for (let i = 0; i < opts.points; i++) {
        const t = i / opts.points;
        ctx.beginPath();
        ctx.lineWidth = lerp(opts.tailWidth, opts.headWidth, t);
        ctx.strokeStyle = Colors[i];

        const l = Line[opts.points - i];
        const n = Line[opts.points - i + 1];

        if (l) ctx.moveTo(l.x, l.y);
        if (n) ctx.lineTo(n.x, n.y);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // ==== Cleanup ====
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-trail-canvas" />;
}
