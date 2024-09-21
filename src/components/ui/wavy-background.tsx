"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isSafari, setIsSafari] = useState(false);

  const w = useRef<number>(window.innerWidth);
  const h = useRef<number>(window.innerHeight);
  const nt = useRef<number>(0);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const getSpeed = () => (speed === "slow" ? 0.001 : 0.002);

  const drawWave = useCallback((n: number) => {
    nt.current += getSpeed();
    if (ctx.current) {
      for (let i = 0; i < n; i++) {
        ctx.current.beginPath();
        ctx.current.lineWidth = waveWidth!;
        ctx.current.strokeStyle = (colors || [
          "#38bdf8",
          "#818cf8",
          "#c084fc",
          "#e879f9",
          "#22d3ee",
        ])[i % (colors ? colors.length : 5)];
        
        for (let x = 0; x < w.current; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt.current) * 100;
          ctx.current.lineTo(x, y + h.current * 0.5);
        }
        ctx.current.stroke();
        ctx.current.closePath();
      }
    }
  }, [waveWidth, colors]);

  const render = useCallback(() => {
    if (ctx.current) {
      ctx.current.fillStyle = backgroundFill || "black";
      ctx.current.globalAlpha = waveOpacity || 0.5;
      ctx.current.fillRect(0, 0, w.current, h.current);
      drawWave(5);
      animationIdRef.current = requestAnimationFrame(render);
    }
  }, [backgroundFill, waveOpacity, drawWave]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      ctx.current = canvas.getContext("2d");
      if (ctx.current) {
        w.current = (ctx.current.canvas.width = window.innerWidth);
        h.current = (ctx.current.canvas.height = window.innerHeight);
        ctx.current.filter = `blur(${blur}px)`; // Set blur effect
        render(); // Call render
      }
    }
  }, [blur, render]);

  useEffect(() => {
    init();
    const handleResize = () => {
      if (ctx.current) {
        w.current = (ctx.current.canvas.width = window.innerWidth);
        h.current = (ctx.current.canvas.height = window.innerHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [init]);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
