"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LinkPreview = ({
  children,
  url,
  className = "",
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef(null);

  useEffect(() => {
    if (isOpen && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      
      // Position above if more space, otherwise below
      const yOffset = spaceAbove > spaceBelow ? -height - 20 : rect.height + 20;
      
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + yOffset,
      });
    }
  }, [isOpen, height]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <span
        ref={linkRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative cursor-pointer ${className}`}
      >
        {children}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "fixed",
              left: position.x,
              top: position.y,
              transform: "translateX(-50%)",
              zIndex: 9999,
            }}
            className="pointer-events-none"
          >
            <div
              className="rounded-xl border-2 border-slate-700 bg-slate-900 shadow-2xl overflow-hidden"
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-brand-yellow" />
                  <p className="text-xs text-slate-400 truncate">{url}</p>
                </div>
                <div className="text-sm font-semibold text-white">
                  {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </div>
                <div className="text-xs text-slate-400">
                  Click to visit this link
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
