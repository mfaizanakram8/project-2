"use client";

// eslint-disable-next-line
import { cn } from "@/utils/cn";
// eslint-disable-next-line
import React, { useEffect, useRef, useState, useCallback } from "react";
// eslint-disable-next-line
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
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  // eslint-disable-next-line
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isSafari, setIsSafari] = useState(false);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  const nt = useRef<number>(0);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const getSpeed = useCallback(() => (speed === "slow" ? 0.001 : 0.002), [speed]);

  const drawWave = useCallback(
    (n: number) => {
      nt.current += getSpeed();
      if (ctx.current) {
        for (let i = 0; i < n; i++) {
          ctx.current.beginPath();
          ctx.current.lineWidth = waveWidth!;
          ctx.current.strokeStyle =
            (colors || [
              "#38bdf8",
              "#818cf8",
              "#c084fc",
              "#e879f9",
              "#22d3ee",
            ])[i % (colors ? colors.length : 5)];

          for (let x = 0; x < dimensions.w; x += 5) {
            const y = noise(x / 800, 0.3 * i, nt.current) * 100;
            ctx.current.lineTo(x, y + dimensions.h * 0.5);
          }
          ctx.current.stroke();
          ctx.current.closePath();
        }
      }
    },
    [getSpeed, waveWidth, colors, noise, dimensions]
  );

  const render = useCallback(() => {
    if (ctx.current) {
      ctx.current.fillStyle = backgroundFill;
      ctx.current.globalAlpha = waveOpacity;
      ctx.current.fillRect(0, 0, dimensions.w, dimensions.h);
      drawWave(5);
      animationIdRef.current = requestAnimationFrame(render);
    }
  }, [backgroundFill, waveOpacity, drawWave, dimensions]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      ctx.current = canvas.getContext("2d");
      if (ctx.current) {
        setDimensions({ w: window.innerWidth, h: window.innerHeight });
        render();
      }
    }
  }, [render]);

  useEffect(() => {
    init();
    const handleResize = () => {
      setDimensions({ w: window.innerWidth, h: window.innerHeight });
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

  // Mapping blur values to CSS classes
  const blurClasses: { [key: number]: string } = {
    10: "blur-10",
    20: "blur-20",
    30: "blur-30",
    // Add more mappings as needed
  };

  // Determine the appropriate blur class
  const blurClass = isSafari ? (blurClasses[blur] || "blur-10") : "";

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas className={`canvas ${blurClass}`} ref={canvasRef} id="canvas" />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
