"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

export function NetBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef<Point>({ x: 0, y: 0 });
  const time = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useAnimationFrame((t) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match display size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Grid properties
    const spacing = 60; // Increased spacing
    const cols = Math.floor(rect.width / spacing) + 2;
    const rows = Math.floor(rect.height / spacing) + 2;

    // Animation time
    time.set(t / 2000); // Slowed down animation

    // Draw grid
    ctx.strokeStyle = "rgba(147, 51, 234, 0.08)"; // Reduced opacity for lines
    ctx.lineWidth = 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing;
        const y = j * spacing;

        // Calculate distance from mouse
        const dx = x - mousePosition.current.x;
        const dy = y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200; // Increased interaction distance

        // Calculate displacement based on mouse position and time
        const angle = Math.atan2(dy, dx);
        const displacement = Math.max(0, 1 - distance / maxDistance) * 25; // Increased displacement
        const offsetX = Math.cos(angle) * displacement;
        const offsetY = Math.sin(angle) * displacement;

        // Add wave effect
        const wave =
          Math.sin(i * 0.3 + time.get()) * 3 + // Adjusted wave parameters
          Math.cos(j * 0.3 + time.get()) * 3;

        // Draw point
        const pointSize = Math.max(1.5, 4 * (1 - distance / maxDistance)); // Larger points
        ctx.beginPath();
        ctx.arc(
          x + offsetX + wave,
          y + offsetY,
          pointSize,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(147, 51, 234, 0.2)"; // Adjusted point opacity
        ctx.fill();

        // Draw lines to neighbors with gradient
        if (i < cols - 1) {
          const gradient = ctx.createLinearGradient(
            x + offsetX + wave,
            y + offsetY,
            x + spacing + Math.cos(Math.atan2(dy, dx + spacing)) * Math.max(0, 1 - distance / maxDistance) * 25 + Math.sin((i + 1) * 0.3 + time.get()) * 3 + Math.cos(j * 0.3 + time.get()) * 3,
            y + Math.sin(Math.atan2(dy, dx + spacing)) * Math.max(0, 1 - distance / maxDistance) * 25
          );
          gradient.addColorStop(0, "rgba(147, 51, 234, 0.08)");
          gradient.addColorStop(1, "rgba(168, 85, 247, 0.08)");
          ctx.strokeStyle = gradient;
          
          ctx.beginPath();
          ctx.moveTo(x + offsetX + wave, y + offsetY);
          const nextOffsetX =
            Math.cos(Math.atan2(dy, dx + spacing)) *
            Math.max(0, 1 - distance / maxDistance) *
            25;
          const nextWave =
            Math.sin((i + 1) * 0.3 + time.get()) * 3 +
            Math.cos(j * 0.3 + time.get()) * 3;
          ctx.lineTo(
            x + spacing + nextOffsetX + nextWave,
            y +
              Math.sin(Math.atan2(dy, dx + spacing)) *
                Math.max(0, 1 - distance / maxDistance) *
                25
          );
          ctx.stroke();
        }

        if (j < rows - 1) {
          const gradient = ctx.createLinearGradient(
            x + offsetX + wave,
            y + offsetY,
            x + Math.cos(Math.atan2(dy + spacing, dx)) * Math.max(0, 1 - distance / maxDistance) * 25 + Math.sin(i * 0.3 + time.get()) * 3 + Math.cos((j + 1) * 0.3 + time.get()) * 3,
            y + spacing + Math.sin(Math.atan2(dy + spacing, dx)) * Math.max(0, 1 - distance / maxDistance) * 25
          );
          gradient.addColorStop(0, "rgba(147, 51, 234, 0.08)");
          gradient.addColorStop(1, "rgba(168, 85, 247, 0.08)");
          ctx.strokeStyle = gradient;

          ctx.beginPath();
          ctx.moveTo(x + offsetX + wave, y + offsetY);
          const nextOffsetY =
            Math.sin(Math.atan2(dy + spacing, dx)) *
            Math.max(0, 1 - distance / maxDistance) *
            25;
          const nextWave =
            Math.sin(i * 0.3 + time.get()) * 3 +
            Math.cos((j + 1) * 0.3 + time.get()) * 3;
          ctx.lineTo(
            x +
              Math.cos(Math.atan2(dy + spacing, dx)) *
                Math.max(0, 1 - distance / maxDistance) *
                25 +
              wave,
            y + spacing + nextOffsetY
          );
          ctx.stroke();
        }
      }
    }
  });

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
