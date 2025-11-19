import { useScrollAnimation } from "../hooks/useScrollAnimation";

function AnimatedSection({ children, animation = "fade-up", delay = 0, className = "" }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const animations = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-down": "opacity-0 -translate-y-10",
    "fade-left": "opacity-0 translate-x-10",
    "fade-right": "opacity-0 -translate-x-10",
    "scale": "opacity-0 scale-95",
    "fade": "opacity-0",
  };

  const baseClasses = "transition-all duration-700 ease-out";
  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${!isVisible ? animations[animation] : visibleClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
