"use client";
import React, { useRef, useEffect, useState } from "react";

export const GlowingEffect = ({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const updateDimensions = () => {
      setDimensions({
        width: container.offsetWidth,
        height: container.offsetHeight,
      });
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current?.parentElement;
    if (!canvas || !container || disabled) return;

    const ctx = canvas.getContext("2d");
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
    };

    const draw = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x, y } = mousePos.current;
      
      // Check if mouse is within proximity
      const distToEdge = Math.min(
        x,
        y,
        canvas.width - x,
        canvas.height - y
      );

      if (distToEdge < 0 || distToEdge > proximity) {
        animationFrameId.current = requestAnimationFrame(draw);
        return;
      }

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, spread);
      
      if (glow) {
        gradient.addColorStop(0, "rgba(255, 212, 0, 0.4)");
        gradient.addColorStop(0.5, "rgba(96, 213, 255, 0.2)");
        gradient.addColorStop(1, "rgba(255, 212, 0, 0)");
      } else {
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId.current = requestAnimationFrame(draw);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    draw();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions, spread, glow, disabled, proximity]);

  if (disabled) return null;

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
