import ProfileCard from "./ProfileCard";
import TextType from "./TextType";

function Hero() {
  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.6fr,1fr] items-center">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-brand-yellow mb-2 sm:mb-3">
            CSE Undergrad · AI & AR Enthusiast
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4">
            <span className="block mb-1 sm:mb-2">Hi, I&apos;m</span>
            <span className="gradient-text drop-shadow-lg">
              Arnab Mandal
            </span>
            <div className="block">
              <TextType
                text={["I build intelligent, immersive & reliable experiences.", "AI, AR, and Full Stack Magic.", "Let’s create something amazing!"]}
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
            A passionate programmer from India, currently pursuing Computer
            Science Engineering at <span className="font-semibold">
              Academy of Technology
            </span>. I love solving real-life problems with code — from
            AI/ML and AR experiences to full-stack web projects.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 animate-[fadeIn_1.2s_ease-out_0.6s_both]">
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-brand-yellow text-black text-xs sm:text-sm font-semibold shadow-soft hover:shadow-lg hover:-translate-y-[2px] hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={handleContactClick}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-600 text-xs sm:text-sm text-slate-200 hover:border-brand-yellow hover:text-brand-yellow hover:-translate-y-[2px] transition-all duration-300"
            >
              Let&apos;s Collaborate
            </button>
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
