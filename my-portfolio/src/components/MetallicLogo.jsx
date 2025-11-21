import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';

const MetallicLogo = () => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('/logo.svg');
                const blob = await response.blob();
                const file = new File([blob], 'logo.svg', { type: 'image/svg+xml' });
                const result = await parseLogoImage(file);
                setImageData(result.imageData);
            } catch (error) {
                console.error('Error loading logo:', error);
            }
        };

        fetchImage();
    }, []);

    if (!imageData) {
        return <div className="w-[200px] h-[200px] animate-pulse bg-white/10 rounded-full" />;
    }

    return (
        <div className="w-[200px] h-[200px] relative">
            <MetallicPaint
                imageData={imageData}
                params={{
                    patternScale: 2,
                    refraction: 0.015,
                    edge: 1,
                    patternBlur: 0.005,
                    liquid: 0.07,
                    speed: 0.3
                }}
            />
        </div>
    );
};

export default MetallicLogo;
