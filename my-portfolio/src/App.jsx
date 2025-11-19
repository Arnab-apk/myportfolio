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
import ColorBends from "./components/ColorBends";
import PortfolioDock from "./components/PortfolioDock";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative">
      <ColorBends 
        className="fixed inset-0 z-0"
        colors={['#ff6b35', '#f7931e', '#fdc830', '#4facfe', '#00f2fe', '#667eea']}
        rotation={45}
        speed={0.15}
        scale={1.2}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0.8}
        parallax={0.5}
        noise={0.08}
        transparent={false}
        autoRotate={2}
      />
      <div className="relative z-10">
      <AuroraBackground>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <TechStack />
          <Skills />

          {/* Highlights (Magic Bento) */}
          <section className="pt-14 sm:pt-20" id="highlights">
            <SectionHeader
              id="highlights"
              emoji="🌟"
              title="HIGHLIGHTS"
              subtitle="A quick glimpse of the things I love building."
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
    </div>
  );
}

export default App;
