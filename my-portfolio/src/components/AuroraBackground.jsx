

function AuroraBackground({ children, className = "" }) {
  return (
    <div className={`relative ${className} bg-brand-dark`}>
      {/* Lightweight CSS Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1a1a2e] to-brand-dark" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-brand-yellow/10 rounded-full blur-[100px] animate-pulse-slow delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default AuroraBackground;
