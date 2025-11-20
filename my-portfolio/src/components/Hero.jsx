import ProfileCard from "./ProfileCard";
import TextType from "./TextType";
import GlassSurface from "./GlassSurface";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

function Hero() {
  const heroRef = useRef(null);

  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative pt-24 pb-12 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40 min-h-[85vh] flex items-center"
    >
      <div className="grid gap-8 lg:gap-16 lg:grid-cols-[1.5fr,1fr] items-center w-full">
        <div className="space-y-6 sm:space-y-8 relative z-10 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-brand-yellow animate-fade-in">
              Computer Science Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight text-white">
              <span className="block mb-1 sm:mb-2">
                Hi, I'm
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-200 to-brand-yellow bg-[length:200%_auto] animate-background-pan drop-shadow-lg block">
                Arnab Mandal
              </span>
            </h1>
          </div>

          <div className="max-w-2xl mx-auto lg:mx-0">
            <TextType
              text={["Building intelligent & immersive experiences.", "AI, AR, and Full Stack Development.", "Let's create something exceptional."]}
              as="p"
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={2000}
              initialDelay={500}
              loop={true}
              className="text-slate-400 text-base sm:text-xl md:text-2xl font-light leading-relaxed min-h-[3em] sm:min-h-[auto]"
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-brand-yellow"
              textColors={["#e2e8f0", "#e2e8f0", "#e2e8f0"]}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-slide-up justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
            <GlassSurface
              borderRadius={9999}
              backgroundOpacity={0.1}
              blur={20}
              className="inline-flex w-full sm:w-auto"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-brand-dark font-bold text-sm hover:bg-brand-yellow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
              >
                View Projects
              </button>
            </GlassSurface>

            <GlassSurface
              borderRadius={9999}
              backgroundOpacity={0.05}
              blur={10}
              className="inline-flex w-full sm:w-auto"
            >
              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white border border-white/20 font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Let's Collaborate
              </button>
            </GlassSurface>
          </div>
        </div>

        {/* 3D Holographic Profile Card */}
        <div className="flex justify-center relative z-10 perspective-1000 order-1 lg:order-2 mb-6 lg:mb-0">
          <div className="relative w-64 sm:w-80 md:w-full max-w-md aspect-square">
            {/* Decorative glow behind profile */}
            <div className="absolute inset-0 bg-brand-yellow/20 blur-[60px] sm:blur-[100px] rounded-full opacity-50 animate-pulse" />
            <ProfileCard
              avatarUrl="/arnab.jpg"
              name="Arnab Mandal"
              title="Tech Enthusiast"
              handle="arnab_mandal"
              status=""
              showUserInfo={true}
              onContactClick={handleContactClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
