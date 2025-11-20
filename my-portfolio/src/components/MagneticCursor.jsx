import { useEffect, useRef } from 'react';

const MagneticCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const particles = useRef([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            // Smooth cursor follow with easing
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

            if (cursorRef.current && cursorDotRef.current) {
                cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
                cursorDotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
            }

            // Create particle trail
            if (Math.random() > 0.7) {
                particles.current.push({
                    x: cursorPos.current.x,
                    y: cursorPos.current.y,
                    life: 1,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2
                });
            }

            // Update and remove old particles
            particles.current = particles.current.filter(p => p.life > 0);

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.3s, height 0.3s'
                }}
            >
                <div className="w-full h-full rounded-full border-2 border-brand-yellow opacity-50" />
            </div>
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9999]"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <div className="w-full h-full rounded-full bg-brand-yellow" />
            </div>
        </>
    );
};

export default MagneticCursor;
