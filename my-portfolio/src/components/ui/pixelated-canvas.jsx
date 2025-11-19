"use client";
import React, { useRef, useEffect, useState } from 'react';

export const PixelatedCanvas = ({
  src,
  width = 400,
  height = 500,
  cellSize = 3,
  dotScale = 0.9,
  shape = 'square',
  backgroundColor = '#000000',
  dropoutStrength = 0.4,
  interactive = true,
  distortionStrength = 3,
  distortionRadius = 80,
  distortionMode = 'swirl',
  followSpeed = 0.2,
  jitterStrength = 4,
  jitterSpeed = 4,
  sampleAverage = true,
  tintColor = '#FFFFFF',
  tintStrength = 0.2,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const targetMousePos = useRef({ x: -1000, y: -1000 });
  const currentMousePos = useRef({ x: -1000, y: -1000 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      imageRef.current = img;
      canvas.width = width;
      canvas.height = height;
      animate();
    };
    
    img.src = src;

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      targetMousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      targetMousePos.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      // Smooth follow
      currentMousePos.current.x += (targetMousePos.current.x - currentMousePos.current.x) * followSpeed;
      currentMousePos.current.y += (targetMousePos.current.y - currentMousePos.current.y) * followSpeed;

      render(ctx, img);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [src, width, height, interactive, followSpeed]);

  const render = (ctx, img) => {
    if (!img || !ctx) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');
    
    tempCtx.drawImage(img, 0, 0, width, height);
    const imageData = tempCtx.getImageData(0, 0, width, height);

    const cols = Math.floor(width / cellSize);
    const rows = Math.floor(height / cellSize);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * cellSize;
        const y = row * cellSize;

        // Sample color
        let r = 0, g = 0, b = 0, a = 0;
        let sampleCount = 0;

        if (sampleAverage) {
          for (let dy = 0; dy < cellSize; dy++) {
            for (let dx = 0; dx < cellSize; dx++) {
              const px = Math.min(x + dx, width - 1);
              const py = Math.min(y + dy, height - 1);
              const i = (py * width + px) * 4;
              r += imageData.data[i];
              g += imageData.data[i + 1];
              b += imageData.data[i + 2];
              a += imageData.data[i + 3];
              sampleCount++;
            }
          }
          r /= sampleCount;
          g /= sampleCount;
          b /= sampleCount;
          a /= sampleCount;
        } else {
          const i = (y * width + x) * 4;
          r = imageData.data[i];
          g = imageData.data[i + 1];
          b = imageData.data[i + 2];
          a = imageData.data[i + 3];
        }

        // Apply tint
        if (tintStrength > 0) {
          const tintRGB = hexToRgb(tintColor);
          r = r * (1 - tintStrength) + tintRGB.r * tintStrength;
          g = g * (1 - tintStrength) + tintRGB.g * tintStrength;
          b = b * (1 - tintStrength) + tintRGB.b * tintStrength;
        }

        // Dropout
        if (Math.random() < dropoutStrength * 0.3) continue;

        // Calculate distance from mouse
        const dx = x + cellSize / 2 - currentMousePos.current.x;
        const dy = y + cellSize / 2 - currentMousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let offsetX = 0;
        let offsetY = 0;

        // Apply distortion
        if (dist < distortionRadius) {
          const factor = 1 - dist / distortionRadius;
          const strength = distortionStrength * factor;

          if (distortionMode === 'swirl') {
            const angle = factor * Math.PI * strength;
            offsetX = Math.cos(angle) * dx - Math.sin(angle) * dy - dx;
            offsetY = Math.sin(angle) * dx + Math.cos(angle) * dy - dy;
          } else if (distortionMode === 'push') {
            offsetX = (dx / dist) * strength * 5;
            offsetY = (dy / dist) * strength * 5;
          }
        }

        // Apply jitter
        const jitterTime = Date.now() / 1000;
        const jitterX = Math.sin(jitterTime * jitterSpeed + col) * jitterStrength;
        const jitterY = Math.cos(jitterTime * jitterSpeed + row) * jitterStrength;

        const finalX = x + offsetX + jitterX;
        const finalY = y + offsetY + jitterY;

        ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a / 255})`;

        const size = cellSize * dotScale;
        
        if (shape === 'circle') {
          ctx.beginPath();
          ctx.arc(finalX + cellSize / 2, finalY + cellSize / 2, size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(finalX + (cellSize - size) / 2, finalY + (cellSize - size) / 2, size, size);
        }
      }
    }
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 255, b: 255 };
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};
