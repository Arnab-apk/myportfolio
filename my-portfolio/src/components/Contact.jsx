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

      <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.2fr,1fr]">
        <AnimatedSection animation="fade-right" delay={100}>
          <form
            className="bg-brand-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-brand-yellow/30 transition-all duration-500"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-brand-yellow focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-brand-yellow focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-brand-yellow focus:bg-white/10 resize-none transition-all duration-300 placeholder:text-slate-600"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-yellow text-brand-dark font-bold text-sm shadow-glow hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
            <p className="text-xs text-slate-500 mt-4 text-center sm:text-left">
              Or mail me directly at{" "}
              <a
                href="mailto:arnabmandal261@gmail.com"
                className="text-brand-yellow hover:underline decoration-brand-yellow/50 underline-offset-4 transition-all"
              >
                arnabmandal261@gmail.com
              </a>
            </p>
          </form>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={200}>
          <div className="bg-brand-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-full hover:border-brand-yellow/30 transition-all duration-500">
            <div>
              <div className="mb-6">
                <p className="text-2xl font-display font-bold text-white mb-2">
                  Let's Connect
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Open to internships & freelance opportunities",
                  "Collaborations on AI, AR, and web projects",
                  "Technical discussions & knowledge sharing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", url: "https://github.com/Arnab-apk" },
                  { name: "LinkedIn", url: "https://www.linkedin.com" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;
