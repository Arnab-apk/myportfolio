import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const PillNav = ({ items = [], activeHref = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[1000]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-brand-dark-rich/80 backdrop-blur-xl border border-white/10 text-white shadow-lg hover:bg-brand-yellow hover:text-brand-dark transition-colors duration-300"
      >
        {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10, originX: 1, originY: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-0 w-56 p-2 rounded-2xl bg-brand-dark-rich/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-1"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between group ${activeHref === item.href
                  ? "bg-brand-yellow text-brand-dark"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {item.label}
                {activeHref === item.href && (
                  <motion.span
                    layoutId="activeDot"
                    className="w-1.5 h-1.5 rounded-full bg-brand-dark"
                  />
                )}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default PillNav;
