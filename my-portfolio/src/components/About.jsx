import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import GlassSurface from "./GlassSurface";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

function About() {
  const containerRef = useRef(null);
  
  return (
    <section className="pt-10 sm:pt-16" id="about" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3">
            <GlassSurface
              width="auto"
              height="auto"
              borderRadius={20}
              backgroundOpacity={0.1}
              blur={18}
              saturation={1.3}
              className="inline-block"
            >
              <div className="px-8 py-4">
                <VariableProximity
                  label="ABOUT"
                  fromFontVariationSettings="'wght' 400, 'wdth' 100"
                  toFontVariationSettings="'wght' 900, 'wdth' 125"
                  containerRef={containerRef}
                  radius={120}
                  falloff="gaussian"
                  className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wider"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                />
              </div>
            </GlassSurface>
          </div>
        </div>
      </AnimatedSection>
      
      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <AnimatedSection animation="fade-right" delay={100}>
          <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-soft hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1">
            <h3 className="font-semibold text-xl sm:text-2xl mb-5">
              <VariableProximity
                label="Building at the intersection of AI, AR, and Web"
                fromFontVariationSettings="'wght' 600, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 115"
                containerRef={containerRef}
                radius={100}
                falloff="gaussian"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              />
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I&apos;m a Computer Science Engineering student at{" "}
              <span className="font-semibold">
                Academy of Technology, West Bengal
              </span>
              , specializing in{" "}
              <span className="font-semibold">
                AI/ML, AR experiences, and full-stack development
              </span>
              . I create solutions that blend algorithmic thinking with intuitive user experiences.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-4">
              When I&apos;m not coding, I&apos;m making music or exploring creative design. This mindset influences everything I build — clean architecture, thoughtful interactions, and scalable systems.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-4 text-slate-300">
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-5 hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1">
              <p className="font-semibold text-slate-100 mb-3 text-lg sm:text-xl">
                <VariableProximity
                  label="Current Focus"
                  fromFontVariationSettings="'wght' 600, 'wdth' 100"
                  toFontVariationSettings="'wght' 900, 'wdth' 115"
                  containerRef={containerRef}
                  radius={80}
                  falloff="gaussian"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                />
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>AI Agents & RAG Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>AR/Game Development (Unity)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Competitive Programming & DSA</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={300}>
            <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-5 hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1">
              <p className="font-semibold text-slate-100 mb-3 text-lg sm:text-xl">
                <VariableProximity
                  label="Open To"
                  fromFontVariationSettings="'wght' 600, 'wdth' 100"
                  toFontVariationSettings="'wght' 900, 'wdth' 115"
                  containerRef={containerRef}
                  radius={80}
                  falloff="gaussian"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                />
              </p>
              <p className="text-sm sm:text-base">
                Internships, collaborations, and tech discussions. Always happy to connect and share knowledge.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default About;
