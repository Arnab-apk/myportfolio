import { useState } from 'react';

const BentoCard = ({
    children,
    className = '',
    glowColor = 'rgba(255, 215, 0, 0.15)',
    hoverGlow = true,
    borderGlow = true,
    ...props
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!hoverGlow) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            className={`relative group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {/* Background with glassmorphism */}
            <div className="absolute inset-0 bg-brand-card/30 backdrop-blur-md rounded-2xl" />

            {/* Border glow effect */}
            {borderGlow && (
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
            )}

            {/* Hover spotlight effect */}
            {hoverGlow && isHovered && (
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
                    }}
                />
            )}

            {/* Subtle ambient glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-yellow/5 via-transparent to-brand-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BentoCard;
