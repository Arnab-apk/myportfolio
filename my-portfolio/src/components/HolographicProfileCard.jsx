import { useRef, useEffect } from 'react';

const HolographicProfileCard = ({ imageSrc = '/arnab.jpg', size = 600 }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative overflow-hidden rounded-full transition-transform duration-300 ease-out"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                transformStyle: 'preserve-3d'
            }}
        >
            {/* Base Image */}
            <img
                src={imageSrc}
                alt="Profile"
                className="w-full h-full object-cover"
            />

            {/* Holographic Overlay */}
            <div
                className="absolute inset-0 opacity-60 mix-blend-color-dodge pointer-events-none"
                style={{
                    background: `
            linear-gradient(45deg, 
              transparent 0%, 
              rgba(255, 215, 0, 0.3) 25%, 
              rgba(56, 189, 248, 0.3) 50%, 
              rgba(168, 85, 247, 0.3) 75%, 
              transparent 100%
            )
          `,
                    backgroundSize: '200% 200%',
                    animation: 'holographic-shift 3s ease infinite'
                }}
            />

            {/* Shimmer Effect */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    background: `
            linear-gradient(110deg, 
              transparent 0%, 
              transparent 40%, 
              rgba(255, 255, 255, 0.8) 50%, 
              transparent 60%, 
              transparent 100%
            )
          `,
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s linear infinite'
                }}
            />

            {/* Glow Border */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    boxShadow: `
            0 0 20px rgba(255, 215, 0, 0.5),
            0 0 40px rgba(56, 189, 248, 0.3),
            inset 0 0 20px rgba(255, 215, 0, 0.2)
          `
                }}
            />

            <style jsx>{`
        @keyframes holographic-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
        </div>
    );
};

export default HolographicProfileCard;
