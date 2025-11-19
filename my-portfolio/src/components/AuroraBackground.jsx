function AuroraBackground({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated Aurora Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-aurora-1" />
        <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-aurora-2" />
        <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 rounded-full blur-3xl animate-aurora-3" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default AuroraBackground;
