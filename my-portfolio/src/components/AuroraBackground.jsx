import Aurora from "./Aurora";

function AuroraBackground({ children, className = "" }) {
  return (
    <div className={`relative ${className} bg-brand-dark`}>
      {/* Animated Aurora WebGL Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Aurora
          colorStops={['#38bdf8', '#8b5cf6', '#FFD700']}
          amplitude={1.2}
          blend={0.6}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default AuroraBackground;
