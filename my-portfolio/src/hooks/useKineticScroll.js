import { useState, useEffect, useRef } from 'react';

export const useKineticScroll = () => {
    const [scrollData, setScrollData] = useState({
        scrollY: 0,
        velocity: 0,
        direction: 0, // 1 for down, -1 for up
        progress: 0 // 0 to 1
    });

    const lastScrollY = useRef(0);
    const lastTime = useRef(Date.now());
    const velocityRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const currentTime = Date.now();
            const deltaTime = currentTime - lastTime.current;
            const deltaScroll = currentScrollY - lastScrollY.current;

            // Calculate velocity (pixels per millisecond)
            const rawVelocity = deltaTime > 0 ? deltaScroll / deltaTime : 0;

            // Smooth velocity with exponential moving average
            velocityRef.current = velocityRef.current * 0.8 + rawVelocity * 0.2;

            // Calculate direction
            const direction = deltaScroll > 0 ? 1 : deltaScroll < 0 ? -1 : 0;

            // Calculate scroll progress (0 to 1)
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;

            setScrollData({
                scrollY: currentScrollY,
                velocity: velocityRef.current,
                direction,
                progress
            });

            lastScrollY.current = currentScrollY;
            lastTime.current = currentTime;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollData;
};

export default useKineticScroll;
