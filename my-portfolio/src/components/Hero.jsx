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
      className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.6fr,1fr] items-center">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-brand-yellow mb-2 sm:mb-3">
            Computer Science Engineer · AI & AR Developer
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4">
            <span className="block mb-1 sm:mb-2">
              <VariableProximity
                label="Hi, I'm"
                fromFontVariationSettings="'wght' 700, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 125"
                containerRef={heroRef}
                radius={100}
                falloff="gaussian"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              />
            </span>
            <span className="gradient-text drop-shadow-lg block">
              <VariableProximity
                label="Arnab Mandal"
                fromFontVariationSettings="'wght' 800, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 125"
                containerRef={heroRef}
                radius={120}
                falloff="gaussian"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              />
            </span>
            <div className="block">
              <TextType
                text={["Building intelligent & immersive experiences.", "AI, AR, and Full Stack Development.", "Let's create something exceptional."]}
                as="span"
                typingSpeed={38}
                deletingSpeed={22}
                pauseDuration={1700}
                initialDelay={400}
                loop={true}
                className="text-slate-300 text-lg sm:text-xl md:text-2xl font-normal mt-2 sm:mt-3"
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-brand-yellow"
                textColors={["#facc15", "#38bdf8", "#a3e635"]}
                variableSpeed={{ min: 28, max: 55 }}
              />
            </div>
          </h1>

          <p className="text-slate-300 max-w-xl mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed animate-[fadeIn_1s_ease-out_0.4s_both]">
            Currently pursuing Computer Science Engineering at{" "}
            <span className="font-semibold">
              Academy of Technology
            </span>
            . I specialize in developing AI/ML solutions, AR experiences, and scalable full-stack applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 animate-[fadeIn_1.2s_ease-out_0.6s_both]">
            <GlassSurface
              width="auto"
              height="auto"
              borderRadius={30}
              backgroundOpacity={0.12}
              blur={16}
              saturation={1.4}
              className="inline-flex"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:-translate-y-[2px] hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>
            </GlassSurface>
            <GlassSurface
              width="auto"
              height="auto"
              borderRadius={30}
              backgroundOpacity={0.08}
              blur={14}
              saturation={1.2}
              className="inline-flex"
            >
              <button
                onClick={handleContactClick}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm text-white/90 hover:text-white hover:-translate-y-[2px] transition-all duration-300"
              >
                Let&apos;s Collaborate
              </button>
            </GlassSurface>
          </div>
        </div>

        {/* 3D Holographic Profile Card */}
        <div className="flex justify-center">
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
    </section>
  );
}

export default Hero;
