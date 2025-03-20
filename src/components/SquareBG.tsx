"use client";

import React, { useRef, useEffect, useState } from "react";

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
  x: number;
  y: number;
}

interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  squareSize?: number;
  lightBorderColor?: CanvasStrokeStyle;
  darkBorderColor?: CanvasStrokeStyle;
  lightHoverFillColor?: CanvasStrokeStyle;
  darkHoverFillColor?: CanvasStrokeStyle;
  showRadialGradient?: boolean;
  showBottomGradient?: boolean;
  bottomGradientStart?: number; // 0-1 value to determine where bottom gradient starts
}

const Squares: React.FC<SquaresProps> = ({
  direction = "right",
  speed = 1,
  squareSize = 40,
  lightBorderColor = "rgba(0, 0, 0, 0.1)",
  darkBorderColor = "rgba(255, 255, 255, 0.2)",
  lightHoverFillColor = "rgba(0, 0, 0, 0.05)",
  darkHoverFillColor = "rgba(255, 255, 255, 0.1)",
  showRadialGradient = true,
  showBottomGradient = true,
  bottomGradientStart = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<GridOffset | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Detect dark mode
  useEffect(() => {
    setMounted(true);

    // Initial check for dark mode
    const checkDarkMode = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Set up a mutation observer to detect theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use different colors based on the theme
      const borderColor = isDarkMode ? darkBorderColor : lightBorderColor;
      const hoverFillColor = isDarkMode
        ? darkHoverFillColor
        : lightHoverFillColor;

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize) ===
              hoveredSquareRef.current.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // Create a gradient that matches the theme
      const gradientStartColor = isDarkMode
        ? "rgba(0, 0, 0, 0)"
        : "rgba(255, 255, 255, 0)";

      const gradientEndColor = isDarkMode ? "black" : "white";

      // Radial gradient from center to edges
      if (showRadialGradient) {
        const radialGradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
        );
        radialGradient.addColorStop(0, gradientStartColor);
        radialGradient.addColorStop(1, gradientEndColor);

        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Linear gradient from middle to bottom with more intensity
      if (showBottomGradient) {
        const gradientStartY = canvas.height * bottomGradientStart;
        const bottomGradient = ctx.createLinearGradient(
          0,
          gradientStartY,
          0,
          canvas.height
        );
        bottomGradient.addColorStop(0, gradientStartColor);
        bottomGradient.addColorStop(
          0.5,
          isDarkMode ? "rgba(6, 6, 6, 0.2)" : "rgba(250, 250, 250, 0.4)"
        );
        bottomGradient.addColorStop(1, gradientEndColor);

        ctx.fillStyle = bottomGradient;
        ctx.fillRect(
          0,
          gradientStartY,
          canvas.width,
          canvas.height - gradientStartY
        );
      }
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x - startX) / squareSize
      );
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y - startY) / squareSize
      );

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== hoveredSquareX ||
        hoveredSquareRef.current.y !== hoveredSquareY
      ) {
        hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    direction,
    speed,
    squareSize,
    lightBorderColor,
    darkBorderColor,
    lightHoverFillColor,
    darkHoverFillColor,
    isDarkMode,
    mounted,
    showRadialGradient,
    showBottomGradient,
    bottomGradientStart,
  ]);

  // Don't render until client-side to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full border-none block absolute inset-0"
    ></canvas>
  );
};

export default Squares;
