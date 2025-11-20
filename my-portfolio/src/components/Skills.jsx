import { skillSections } from "../data/skills";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

function Skills() {
  const containerRef = useRef(null);

  return (
    <section className="pt-14 sm:pt-20" id="skills" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="skills"
          title="SKILLS"
          containerRef={containerRef}
        />
      </AnimatedSection>

      <div className="space-y-4 sm:space-y-5">
        {skillSections.map((section, idx) => (
          <AnimatedSection key={section.id} animation="fade-up" delay={idx * 100}>
            <div className="group relative bg-brand-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-5 hover:border-brand-yellow/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-base sm:text-lg font-display font-bold tracking-wide text-white">
                    <VariableProximity
                      label={section.label}
                      fromFontVariationSettings="'wght' 600, 'wdth' 100"
                      toFontVariationSettings="'wght' 900, 'wdth' 115"
                      containerRef={containerRef}
                      radius={80}
                      falloff="gaussian"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    />
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm sm:text-base rounded-full bg-white/5 border border-white/5 text-slate-300 hover:border-brand-yellow/50 hover:text-brand-yellow hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Skills;
