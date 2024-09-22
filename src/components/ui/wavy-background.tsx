import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast" | "medium";
  waveOpacity?: number;
  [key: string]: unknown;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 10,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const ntRef = useRef(0);

  // Function to get speed based on prop
  const getSpeed = useCallback(() => (speed === "slow" ? 0.001 : 0.002), [speed]);

  // Memoizing wave colors
  const waveColors = useMemo(() => colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"], [colors]);

  const drawWave = useCallback((n: number) => {
    if (ctxRef.current) {
      ntRef.current += getSpeed();
      for (let i = 0; i < n; i++) {
        ctxRef.current.beginPath();
        ctxRef.current.lineWidth = waveWidth;
        ctxRef.current.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < dimensions.w; x += 5) {
          const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
          // Increase the offset for each wave
          ctxRef.current.lineTo(x, y + dimensions.h * 0.5 + (i * 20)); // Adjust spacing
        }
        ctxRef.current.stroke();
        ctxRef.current.closePath();
      }
    }
  }, [waveWidth, waveColors, dimensions.w, dimensions.h, noise, getSpeed]);

  const render = useCallback(() => {
    if (ctxRef.current) {
      ctxRef.current.fillStyle = backgroundFill;
      ctxRef.current.globalAlpha = waveOpacity;
      ctxRef.current.fillRect(0, 0, dimensions.w, dimensions.h);
      drawWave(5);
      animationIdRef.current = requestAnimationFrame(render);
    }
  }, [backgroundFill, waveOpacity, dimensions.w, dimensions.h, drawWave]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setDimensions({ w: window.innerWidth, h: window.innerHeight });
        if (ctxRef.current) {
          ctxRef.current.filter = `blur(${blur}px)`;
          render(); // Re-render on resize
        }
      }
    };

    handleResize(); // Set initial dimensions
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [blur, render]);

  useEffect(() => {
    const init = () => {
      if (canvasRef.current) {
        ctxRef.current = canvasRef.current.getContext("2d");
        if (ctxRef.current) {
          ctxRef.current.filter = `blur(${blur}px)`;
          render();
        }
      }
    };

    init();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [blur, render]);

  return (
    <div className={cn("relative h-screen w-full flex flex-col items-center justify-center", containerClassName)}>
      <canvas
        className={cn("absolute inset-0 z-0")}
        ref={canvasRef}
        width={dimensions.w}
        height={dimensions.h}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
