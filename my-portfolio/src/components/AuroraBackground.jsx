import { lazy, Suspense, useState, useEffect } from "react";

// Lazy load the Silk component
const Silk = lazy(() => import("./Silk"));

function AuroraBackground({ children, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth initial render
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className} min-h-[100dvh]`}>
      {/* Silk WebGL Background with lazy loading */}
      <div className="absolute inset-0 overflow-hidden">
        <Suspense fallback={
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600" />
        }>
          {isLoaded && (
            <Silk
              color="#FFD700"
              speed={2}
              scale={1.5}
              noiseIntensity={0.5}
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
