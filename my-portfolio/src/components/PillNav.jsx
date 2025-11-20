import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DockIcon = ({ mouseX, item, isActive }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.li
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-full flex items-center justify-center relative group cursor-pointer"
    >
      <a
        href={item.href}
        className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${isActive
            ? "bg-brand-yellow text-brand-dark shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            : "bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white"
          }`}
      >
        {/* You might want to add icons to your navItems prop for a true dock experience */}
        <span className={`text-[10px] font-bold ${isActive ? "scale-110" : "scale-100"}`}>
          {item.label.substring(0, 2).toUpperCase()}
        </span>
      </a>

      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-brand-card border border-slate-800 rounded-md text-xs text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {item.label}
      </span>

      {isActive && (
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-yellow" />
      )}
    </motion.li>
  );
};

const PillNav = ({ items = [], activeHref = '' }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000]">
      <motion.ul
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-3 px-4 py-3 rounded-2xl bg-brand-dark-rich/80 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        {items.map((item) => (
          <DockIcon
            key={item.href}
            mouseX={mouseX}
            item={item}
            isActive={activeHref === item.href}
          />
        ))}
      </motion.ul>
    </nav>
  );
};

export default PillNav;
