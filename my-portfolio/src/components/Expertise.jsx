import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import ChromaGrid from "./ChromaGrid";
import { useRef } from "react";

function Expertise() {
  const containerRef = useRef(null);

  return (
    <section className="pt-14 sm:pt-20 scroll-mt-24" id="expertise" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="expertise"
          title="EXPERTISE"
          containerRef={containerRef}
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <div className="mt-8 rounded-3xl bg-brand-card/30 border border-white/10 p-6 sm:p-8 backdrop-blur-sm">
          <div className="overflow-hidden rounded-2xl">
            <ChromaGrid
              radius={380}
              damping={0.5}
              fadeOut={0.7}
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Expertise;
