import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import BentoCard from "./BentoCard";
import { useRef } from "react";

function About() {
  const containerRef = useRef(null);

  return (
    <section className="pt-10 sm:pt-14 md:pt-20" id="about" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="about"
          title="ABOUT"
          containerRef={containerRef}
        />
      </AnimatedSection>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.4fr,1fr]">
        <AnimatedSection animation="fade-right" delay={100}>
          <BentoCard className="p-5 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-500 h-full">
            <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 text-white">
              Building at the intersection of AI, AR, and Web
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
              I&apos;m a Computer Science Engineering student at{" "}
              <span className="font-semibold text-slate-200">
                Academy of Technology, West Bengal
              </span>
              , specializing in{" "}
              <span className="font-semibold text-white">
                AI/ML, AR experiences, and full-stack development
              </span>
              . I create solutions that blend algorithmic thinking with intuitive user experiences.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mt-3 sm:mt-4">
              When I&apos;m not coding, I&apos;m making music or exploring creative design. This mindset influences everything I build — clean architecture, thoughtful interactions, and scalable systems.
            </p>
          </BentoCard>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          <AnimatedSection animation="fade-left" delay={200}>
            <BentoCard className="p-5 sm:p-6 hover:-translate-y-1 transition-transform duration-500">
              <p className="font-display font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">
                Current Focus
              </p>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-slate-400">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>AI Agents & RAG Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>AR/Game Development (Unity)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Competitive Programming & DSA</span>
                </li>
              </ul>
            </BentoCard>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={300}>
            <BentoCard className="p-5 sm:p-6 hover:-translate-y-1 transition-transform duration-500">
              <p className="font-display font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">
                Beyond Code
              </p>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-slate-400">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Music Production & Sound Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>UI/UX Design Exploration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Tech Community Building</span>
                </li>
              </ul>
            </BentoCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default About;
