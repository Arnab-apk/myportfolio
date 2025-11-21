import PrismaticBurst from "./PrismaticBurst";

function AuroraBackground({ children, className = "" }) {
  return (
    <div className={`relative ${className} bg-brand-dark`}>
      {/* Animated Prismatic WebGL Background */}
      <div className="absolute inset-0 overflow-hidden">
        <PrismaticBurst
          colors={['#38bdf8', '#8b5cf6', '#FFD700']}
          intensity={2}
          speed={0.5}
          distort={0.3}
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
