import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import FloatingCard from "./FloatingCard";
import { GlowingEffect } from "./ui/glowing-effect";
import { LinkPreview } from "./ui/link-preview";
import { useRef } from "react";

const projects = [
  {
    name: "100 Days of Python",
    tags: ["Python", "Projects", "CLI"],
    description:
      "A curated journey from Python basics to intermediate projects, building real-world console apps.",
    link: "https://github.com/Arnab-apk/100-days-Python-Course",
  },
  {
    name: "OpenCV (BTA)",
    tags: ["Python", "OpenCV", "Computer Vision"],
    description:
      "Hands-on computer vision exercises using OpenCV: image ops, filters, contours and more.",
    link: "https://github.com/Arnab-apk/Open_CV_-BTA-",
  },
  {
    name: "Google x Kaggle: 5-Day WS",
    tags: ["Jupyter", "Pandas", "ML"],
    description:
      "Workshop notebooks covering data cleaning, visualization, and beginner ML workflows.",
    link: "https://github.com/Arnab-apk/5-DayGoogleKaggleWS",
  },
  {
    name: "ML in Python & R",
    tags: ["Jupyter", "scikit-learn", "ML"],
    description:
      "Practical ML notebooks experimenting with classic algorithms and evaluation techniques.",
    link: "https://github.com/Arnab-apk/Machine_Learning_Python-R",
  },
  {
    name: "College Coding (C)",
    tags: ["C", "Algorithms", "DSA"],
    description:
      "Foundational C programs and DSA practice from college coursework and labs.",
    link: "https://github.com/Arnab-apk/CollegeCoding-C",
  },
  {
    name: "Coffee Machine (OOP)",
    tags: ["Python", "OOP", "CLI"],
    description:
      "A console-based coffee machine demonstrating OOP principles and stateful workflows.",
    link: "https://github.com/Arnab-apk/Coffee_Machine",
  },
];

function Projects() {
  const containerRef = useRef(null);

  return (
    <section className="pt-14 sm:pt-20" id="projects" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="projects"
          title="PROJECTS"
          containerRef={containerRef}
        />
      </AnimatedSection>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <AnimatedSection key={project.name} animation="scale" delay={idx * 100}>
            <FloatingCard>
              <div className="relative h-full rounded-3xl border border-white/10 bg-brand-card/50 backdrop-blur-sm p-1 overflow-hidden group hover:border-brand-yellow/50 transition-colors duration-500">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative h-full rounded-2xl bg-brand-dark-rich/80 p-6 flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-brand-yellow/10 text-brand-yellow">
                      {/* Simple icon placeholder based on tag */}
                      {project.tags[0] === "Python" ? "🐍" : project.tags[0] === "C" ? "💻" : "⚡"}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-brand-yellow transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>

                  <LinkPreview url={project.link} className="font-display font-bold text-xl mb-3 text-white group-hover:text-brand-yellow transition-colors">
                    {project.name}
                  </LinkPreview>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-slate-300 group-hover:border-brand-yellow/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 z-0"
                    aria-label={`Visit ${project.name} on GitHub`}
                  />
                </div>
              </div>
            </FloatingCard>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Projects;
