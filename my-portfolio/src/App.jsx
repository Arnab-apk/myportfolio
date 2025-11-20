import Hero from "./components/Hero";
import ChatBotWidget from "./components/ChatBotWidget";
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
import CardNav from "./components/CardNav";
import ElectricBorder from "./components/ElectricBorder";
import InfiniteMenu from "./components/InfiniteMenu";
import { useRef, useState, useEffect } from "react";

function App() {
  const highlightsRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#hero", "#about", "#tech-stack", "#skills", "#highlights", "#expertise", "#projects", "#contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Menu',
      bgColor: '#0F1629', // brand-card
      textColor: '#ffffff',
      links: [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      label: 'Work',
      bgColor: '#FFD700', // brand-yellow
      textColor: '#030508', // brand-dark
      links: [
        { label: 'Projects', href: '#projects' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'Highlights', href: '#highlights' }
      ]
    },
    {
      label: 'Skills',
      bgColor: '#1e293b', // slate-800
      textColor: '#ffffff',
      links: [
        { label: 'Tech Stack', href: '#tech-stack' },
        { label: 'Skills', href: '#skills' }
      ]
    }
  ];

  const projectItems = [
    {
      image: 'https://picsum.photos/seed/project1/600/600',
      link: 'https://github.com/arnab-mandal',
      title: 'AI Assistant',
      description: 'Next-gen AI powered by neural networks.'
    },
    {
      image: 'https://picsum.photos/seed/project2/600/600',
      link: 'https://github.com/arnab-mandal',
      title: 'Crypto Dash',
      description: 'Real-time cryptocurrency tracking dashboard.'
    },
    {
      image: 'https://picsum.photos/seed/project3/600/600',
      link: 'https://github.com/arnab-mandal',
      title: 'E-Commerce',
      description: 'Full-stack shopping platform with Stripe.'
    },
    {
      image: 'https://picsum.photos/seed/project4/600/600',
      link: 'https://github.com/arnab-mandal',
      title: 'Task Master',
      description: 'Productivity app with drag-and-drop.'
    },
    {
      image: 'https://picsum.photos/seed/project5/600/600',
      link: 'https://github.com/arnab-mandal',
      title: 'Portfolio V1',
      description: 'Previous iteration of my personal site.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <CardNav
        logo="/arnab.jpg"
        logoAlt="Arnab Mandal"
        items={navItems}
        baseColor="rgba(10, 15, 28, 0.8)" // brand-dark-rich with opacity
        menuColor="#ffffff"
        buttonBgColor="#FFD700"
        buttonTextColor="#030508"
        className="backdrop-blur-md"
      />
      <ChatBotWidget />
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
            <div className="mt-8">
              <ElectricBorder color="#FFD700" speed={2} chaos={0.5} thickness={2} style={{ borderRadius: '1.5rem' }}>
                <div className="rounded-3xl bg-brand-card/30 backdrop-blur-md border border-white/10 overflow-hidden">
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
              </ElectricBorder>
            </div>
          </section>

          <Expertise />

          {/* Projects (Infinite 3D Menu) */}
          <section className="pt-14 sm:pt-20 min-h-[600px] relative" id="projects" ref={projectsRef}>
            <SectionHeader
              id="projects"
              title="PROJECTS"
              containerRef={projectsRef}
            />
            <div className="w-full h-[600px] mt-8 relative rounded-3xl overflow-hidden border border-white/10 bg-brand-card/30 backdrop-blur-md">
              <div className="absolute inset-0 z-0">
                <InfiniteMenu items={projectItems} />
              </div>
              <div className="absolute bottom-4 right-6 z-10 text-xs text-slate-500 pointer-events-none">
                Drag to rotate • Click to visit
              </div>
            </div>
          </section>

          <Contact />
        </main>
        <Footer />
      </AuroraBackground>
    </div>
  );
}

export default App;
