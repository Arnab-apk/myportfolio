import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AuroraBackground from "./components/AuroraBackground";
import SectionHeader from "./components/SectionHeader";
import EnhancedMagicBento from "./components/EnhancedMagicBento";
import SplashCursor from "./components/SplashCursor";
import PortfolioDock from "./components/PortfolioDock";
import { useRef } from "react";

function App() {
  const highlightsRef = useRef(null);
  
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <SplashCursor />
      <AuroraBackground>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <TechStack />
          <Skills />

          {/* Highlights (Magic Bento) */}
          <section className="pt-14 sm:pt-20" id="highlights" ref={highlightsRef}>
            <SectionHeader
              id="highlights"
              title="HIGHLIGHTS"
              containerRef={highlightsRef}
            />
            <div className="mt-8 rounded-3xl bg-brand-card/40 border border-slate-800 overflow-hidden">
              <EnhancedMagicBento 
                enableSpotlight={true}
                enableStars={true}
                enableBorderGlow={true}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                spotlightRadius={400}
                particleCount={20}
              />
            </div>
          </section>

          <Expertise />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <PortfolioDock />
      </AuroraBackground>
    </div>
  );
}

export default App;
