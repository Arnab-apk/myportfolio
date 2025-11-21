import { lazy, Suspense, useState, useEffect } from "react";

// Lazy load the Silk component
const Silk = lazy(() => import("./Silk"));

function AuroraBackground({ children, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Minimal delay for smooth initial render
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className} min-h-[100dvh]`}>
      {/* Silk WebGL Background with lazy loading */}
      <div className="absolute inset-0 overflow-hidden">
        <Suspense fallback={
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        }>
          {isLoaded && (
            <Silk
              color="#FFFFFF"
              speed={2}
              scale={1.5}
              noiseIntensity={0.3}
            />
          )}
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default AuroraBackground;
