import LogoLoop from "./LogoLoop";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-[42px] text-cyan-400 drop-shadow" />, ariaLabel: 'React' },
  { node: <SiNextdotjs className="text-[42px] text-white drop-shadow" />, ariaLabel: 'Next.js' },
  { node: <SiTypescript className="text-[42px] text-blue-500 drop-shadow" />, ariaLabel: 'TypeScript' },
  { node: <SiTailwindcss className="text-[42px] text-sky-400 drop-shadow" />, ariaLabel: 'Tailwind CSS' },
];

// ...existing code... (image-based partner logos removed)

function TechStack() {
  const containerRef = useRef(null);
  
  return (
    <section className="py-16 sm:py-20" id="tech-stack" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl sm:text-4xl">⚡</span>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider">
              <VariableProximity
                label="TECH STACK"
                fromFontVariationSettings="'wght' 400, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 125"
                containerRef={containerRef}
                radius={120}
                falloff="gaussian"
                className="text-brand-yellow"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 tracking-wide">Technologies I work with</p>
        </div>
      </AnimatedSection>

      <div className="mt-12">
        <AnimatedSection animation="fade-up" delay={100}>
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={48}
            gap={24}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#050816"
            ariaLabel="Technology stack logos"
            className="py-8"
          />
        </AnimatedSection>
      </div>

      {/* ...existing code... (image-based partner logos removed) */}

    </section>
  );
}

export default TechStack;
