import ChatBotWidget from "./components/ChatBotWidget";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AuroraBackground from "./components/AuroraBackground";
import SectionHeader from "./components/SectionHeader";
import EnhancedMagicBento from "./components/EnhancedMagicBento";
import GooeyNav from "./components/GooeyNav";
import InfiniteMenu from "./components/InfiniteMenu";
import Carousel from "./components/Carousel";
import MagneticCursor from "./components/MagneticCursor";
import AmbientParticles from "./components/AmbientParticles";
import { useRef, useState, useEffect } from "react";
import { FiAward, FiBook, FiStar, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

function App() {
  const highlightsRef = useRef(null);
  const [activeSection, setActiveSection] = useState("#hero");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#hero", "#about", "#tech-stack", "#skills", "#highlights", "#expertise", "#contact"];
      const scrollPosition = window.scrollY + 200;

      // Show content sections after scrolling past hero
      setShowContent(window.scrollY > window.innerHeight * 0.5);

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
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Contact', href: '#contact' }
  ];

  const highlightItems = [
    {
      title: 'Academic Excellence',
      description: 'Maintaining strong academic performance in Computer Science & Engineering.',
      id: 1,
      icon: <FiBook className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to open-source projects and tech communities.',
      id: 2,
      icon: <FiUsers className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Hackathon Participant',
      description: 'Participated in multiple hackathons and coding competitions.',
      id: 3,
      icon: <FiZap className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Continuous Learner',
      description: 'Completed 100 Days of Python and various online certifications.',
      id: 4,
      icon: <FiTrendingUp className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Problem Solver',
      description: 'Solved 200+ problems on competitive programming platforms.',
      id: 5,
      icon: <FiStar className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Innovation Award',
      description: 'Recognized for innovative AR prototype at Gentech Thales.',
      id: 6,
      icon: <FiAward className="h-[16px] w-[16px] text-white" />
    }
  ];

  const projectItems = [
    {
      image: '/portfolio-logo.png',
      link: 'https://github.com/Arnab-apk/myportfolio',
      title: 'My Portfolio',
      description: 'Personal portfolio website built with React.'
    },
    {
      image: '/python-course.png',
      link: 'https://github.com/Arnab-apk/100-days-Python-Course',
      title: '100 Days Python',
      description: 'A wonderful journey from Python noob to intermediate pro developer.'
    },
    {
      image: '/machine-learning.png',
      link: 'https://github.com/Arnab-apk/Machine_Learning_Python-R',
      title: 'Machine Learning',
      description: 'Machine Learning projects in Python and R.'
    },
    {
      image: '/kaggle-workshop.png',
      link: 'https://github.com/Arnab-apk/5-DayGoogleKaggleWS',
      title: 'Google Kaggle WS',
      description: '5-Day Google Kaggle Workshop projects and learnings.'
    },
    {
      image: '/ar-prototype.png',
      link: 'https://github.com/Arnab-apk/Gentech_Thales_Prototype',
      title: 'AR Prototype',
      description: 'Augmented reality application prototype using Unity.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white overflow-x-hidden">
      {/* Kinetic Effects */}
      <MagneticCursor />
      <AmbientParticles count={30} />

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
        <div className="bg-brand-dark-rich/80 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
          <GooeyNav items={navItems} initialActiveIndex={0} />
        </div>
      </div>

      {/* Hero Section - InfiniteMenu Full Viewport */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24">
        <AuroraBackground>
          <div className="w-full h-screen flex flex-col items-center justify-center px-4 pt-20">
            {/* Title */}
            <div className="text-center mb-12 sm:mb-16 animate-fade-in space-y-4 sm:space-y-6 relative z-10">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-brand-yellow">
                Computer Science Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white drop-shadow-lg">
                Arnab Mandal
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-400">
                AI, AR, and Full Stack Development
              </p>
            </div>

            {/* InfiniteMenu */}
            <div className="w-full max-w-4xl h-[500px] sm:h-[600px] relative">
              <InfiniteMenu items={projectItems} />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-brand-yellow/50 rounded-full flex justify-center pt-2">
                <div className="w-1 h-3 bg-brand-yellow/50 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </AuroraBackground>
      </section>

      <ChatBotWidget />

      {/* Content Sections with Kinetic Transitions */}
      <div className={`relative z-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <AuroraBackground>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <About />
            <TechStack />
            <Skills />

            {/* Highlights & Expertise Carousels Side by Side */}
            <section className="pt-14 sm:pt-20" id="highlights" ref={highlightsRef}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Highlights Carousel */}
                <div>
                  <SectionHeader
                    id="highlights"
                    title="HIGHLIGHTS"
                    containerRef={highlightsRef}
                  />
                  <div className="mt-8 flex justify-center">
                    <Carousel
                      items={highlightItems}
                      baseWidth={350}
                      autoplay={true}
                      autoplayDelay={3500}
                      pauseOnHover={true}
                      loop={true}
                    />
                  </div>
                </div>

                {/* Expertise Carousel */}
                <div id="expertise">
                  <Expertise />
                </div>
              </div>

              {/* Magic Bento Grid - Full Width Below */}
              <div className="mt-12 sm:mt-16 rounded-3xl bg-brand-card/30 backdrop-blur-md border border-white/10 overflow-hidden">
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

            <Contact />
          </main>
          <Footer />
        </AuroraBackground>
      </div>
    </div>
  );
}

export default App;
