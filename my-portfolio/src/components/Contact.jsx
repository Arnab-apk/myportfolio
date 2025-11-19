import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

function Contact() {
  const containerRef = useRef(null);
  
  return (
    <section className="pt-14 sm:pt-20 pb-16" id="contact" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="contact"
          title="CONTACT"
          containerRef={containerRef}
        />
      </AnimatedSection>

      <div className="grid gap-6 lg:grid-cols-[1.3fr,1fr]">
        <AnimatedSection animation="fade-right" delay={100}>
          <form
            className="bg-brand-card/70 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 hover:border-brand-yellow/30 transition-all duration-500"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[10px] sm:text-xs text-slate-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg sm:rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-xs sm:text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs text-slate-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg sm:rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-xs sm:text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] sm:text-xs text-slate-400 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg sm:rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-xs sm:text-sm outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 resize-none transition-all duration-300"
                placeholder="Tell me a bit about what you have in mind..."
              />
            </div>
            <button
              type="submit"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-brand-yellow text-black text-xs sm:text-sm font-semibold shadow-soft hover:shadow-lg hover:-translate-y-[2px] hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
            <p className="text-xs text-slate-400">
              Or mail me directly at{" "}
              <a
                href="mailto:arnabmandal261@gmail.com"
                className="text-brand-yellow underline hover:text-brand-yellow/80 transition-colors"
              >
                arnabmandal261@gmail.com
              </a>
            </p>
          </form>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={200}>
          <div className="bg-brand-card/70 border border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between hover:border-brand-yellow/30 transition-all duration-500 h-full">
            <div>
              <p className="text-base font-semibold text-slate-100 mb-3">
                <VariableProximity
                  label="Let's Connect"
                  fromFontVariationSettings="'wght' 600, 'wdth' 100"
                  toFontVariationSettings="'wght' 900, 'wdth' 115"
                  containerRef={containerRef}
                  radius={80}
                  falloff="gaussian"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                />
              </p>
              <ul className="text-sm text-slate-200 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Open to internships & freelance opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Collaborations on AI, AR, and web projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Technical discussions & knowledge sharing</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 text-xs text-slate-400">
              <p className="mb-2">Connect with me:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Arnab-apk"
                  className="underline hover:text-brand-yellow transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com"
                  className="underline hover:text-brand-yellow transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;
