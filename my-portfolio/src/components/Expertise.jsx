import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import ChromaGrid from "./ChromaGrid";

function Expertise() {
  return (
    <section className="pt-14 sm:pt-20" id="expertise">
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="expertise"
          emoji="✨"
          title="EXPERTISE"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <div className="mt-8 rounded-3xl bg-brand-card/30 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
          <div className="overflow-hidden rounded-2xl">
            <ChromaGrid 
              radius={380}
              damping={0.5}
              fadeOut={0.7}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <div className="mt-6 text-center">
          <p className="text-base sm:text-lg text-slate-400">
            💡 <span className="hidden md:inline">Hover over the cards to reveal them with the spotlight effect!</span>
            <span className="md:hidden">Tap any card to explore more</span>
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Expertise;
