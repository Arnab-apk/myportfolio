
import Silk from "./Silk";

function AuroraBackground({ children, className = "" }) {
  return (
    <div className={`relative ${className} bg-brand-dark`}>
      {/* Silk WebGL Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Silk
          color="#1a1a2e"
          speed={2}
          scale={1.5}
          noiseIntensity={0.5}
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
