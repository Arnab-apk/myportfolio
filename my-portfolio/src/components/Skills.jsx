import { skillSections } from "../data/skills";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

function Skills() {
  return (
    <section className="pt-14 sm:pt-20" id="skills">
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="skills"
          emoji="🧰"
          title="SKILLS"
          subtitle="Tools & languages I know and love working with."
        />
      </AnimatedSection>

      <div className="space-y-4 sm:space-y-5">
        {skillSections.map((section, idx) => (
          <AnimatedSection key={section.id} animation="fade-up" delay={idx * 100}>
            <div className="group relative bg-brand-card/70 border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-soft hover:border-brand-yellow/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-yellow/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{section.emoji}</span>
                  <h3 className="text-base sm:text-lg font-semibold tracking-wide text-slate-100">
                    {section.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm sm:text-base rounded-full bg-slate-800/80 border border-slate-700 text-slate-100 hover:border-brand-yellow hover:text-brand-yellow hover:scale-105 transition-all duration-300 cursor-default"
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
