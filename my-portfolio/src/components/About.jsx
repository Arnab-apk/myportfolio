import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

function About() {
  const containerRef = useRef(null);

  return (
    <section className="pt-14 sm:pt-20" id="about" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="about"
          title="ABOUT"
          containerRef={containerRef}
        />
      </AnimatedSection>

      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <AnimatedSection animation="fade-right" delay={100}>
          <div className="bg-brand-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1 h-full">
            <h3 className="font-display font-bold text-xl sm:text-2xl mb-5 text-white">
              Building at the intersection of AI, AR, and Web
            </h3>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              I&apos;m a Computer Science Engineering student at{" "}
              <span className="font-semibold text-slate-200">
                Academy of Technology, West Bengal
              </span>
              , specializing in{" "}
              <span className="font-semibold text-brand-yellow">
                AI/ML, AR experiences, and full-stack development
              </span>
              . I create solutions that blend algorithmic thinking with intuitive user experiences.
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mt-4">
              When I&apos;m not coding, I&apos;m making music or exploring creative design. This mindset influences everything I build — clean architecture, thoughtful interactions, and scalable systems.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="bg-brand-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1">
              <p className="font-display font-bold text-white mb-3 text-lg sm:text-xl">
                Current Focus
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-400">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  <span>AI Agents & RAG Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  <span>AR/Game Development (Unity)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  <span>Competitive Programming & DSA</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={300}>
            <div className="bg-brand-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1 h-full">
              <p className="font-display font-bold text-white mb-3 text-lg sm:text-xl">
                Open To
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
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
