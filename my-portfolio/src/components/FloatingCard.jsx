function FloatingCard({ children, className = "", delay = 0 }) {
  return (
    <div
      className={`transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default FloatingCard;
