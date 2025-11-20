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
import Carousel from "./components/Carousel";
import { useRef, useState, useEffect } from "react";
import { FiAward, FiBook, FiStar, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

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
      image: 'https://picsum.photos/seed/python100days/600/600',
      link: 'https://github.com/Arnab-apk/100-days-Python-Course',
      title: '100 Days Python',
      description: 'A wonderful journey from Python noob to intermediate pro developer.'
    },
    {
      image: 'https://picsum.photos/seed/mlpython/600/600',
      link: 'https://github.com/Arnab-apk/Machine_Learning_Python-R',
      title: 'Machine Learning',
      description: 'Machine Learning projects in Python and R.'
    },
    {
      image: 'https://picsum.photos/seed/kaggle/600/600',
      link: 'https://github.com/Arnab-apk/5-DayGoogleKaggleWS',
      title: 'Google Kaggle WS',
      description: '5-Day Google Kaggle Workshop projects and learnings.'
    },
    {
      image: 'https://picsum.photos/seed/arprototype/600/600',
      link: 'https://github.com/Arnab-apk/Gentech_Thales_Prototype',
      title: 'AR Prototype',
      description: 'Augmented reality application prototype using Unity.'
    },
    {
      image: 'https://picsum.photos/seed/portfolio/600/600',
      link: 'https://github.com/Arnab-apk/myportfolio',
      title: 'My Portfolio',
      description: 'Personal portfolio website built with React.'
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

            {/* Carousel for Achievements */}
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

            {/* Magic Bento Grid */}
            <div className="mt-8 rounded-3xl bg-brand-card/30 backdrop-blur-md border border-white/10 overflow-hidden">
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
