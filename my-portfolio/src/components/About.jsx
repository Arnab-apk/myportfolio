import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import ScrollFloat from "./ScrollFloat";

function About() {
  return (
    <section className="pt-10 sm:pt-16" id="about">
      <AnimatedSection animation="fade-up">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl sm:text-4xl">👋</span>
            <ScrollFloat>
              ABOUT
            </ScrollFloat>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 tracking-wide">A quick snapshot of who I am beyond just code.</p>
        </div>
      </AnimatedSection>
      
      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <AnimatedSection animation="fade-right" delay={100}>
          <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-soft hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1">
            <h3 className="font-semibold text-xl sm:text-2xl mb-4">
              Curious mind. Consistent builder.
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I&apos;m a Computer Science Engineering undergrad at{" "}
              <span className="font-semibold">
                Academy of Technology, West Bengal
              </span>
              . I enjoy building things that live at the intersection of{" "}
              <span className="font-semibold">
                algorithms, user experience, and real-world impact
              </span>
              — from AI-powered agents to AR experiences and full-stack apps.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-4">
              When I&apos;m not coding, you&apos;ll probably find me making music
              or jamming with my guitar. That creativity flows into my work:
              clean design, thoughtful interactions, and scalable architecture.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-3 text-slate-300">
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-4 hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1">
              <p className="font-semibold text-slate-100 mb-2 text-lg sm:text-xl">
                What I&apos;m focusing on
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                <li>AI Agents & RAG-based systems</li>
                <li>AR / Game Dev experiments with Unity</li>
                <li>Competitive programming & DSA</li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-left" delay={300}>
            <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-4 hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1">
              <p className="font-semibold text-slate-100 mb-2 text-lg sm:text-xl">
                Ask me about
              </p>
              <p className="text-sm sm:text-base">
                DSA, hosting, website development, AI agents, AR ideas —
                always happy to help or brainstorm.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default About;
