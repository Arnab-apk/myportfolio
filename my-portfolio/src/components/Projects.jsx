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
              <div className="relative h-full rounded-3xl border-2 border-slate-800 p-2">
                <GlowingEffect
                  spread={60}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.01}
                />
                <div className="group bg-brand-card/70 rounded-2xl p-4 sm:p-5 shadow-soft hover:shadow-2xl transition-all duration-500 transform flex flex-col h-full relative overflow-hidden">
                  <LinkPreview url={project.link} className="font-semibold text-base sm:text-lg mb-2 group-hover:text-brand-yellow transition-colors duration-300 relative z-10">
                    {project.name}
                  </LinkPreview>
                  <p className="text-sm sm:text-base text-slate-300 flex-1 relative z-10">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full bg-slate-800 text-xs uppercase tracking-wide text-slate-200 group-hover:bg-slate-700 transition-colors duration-300"
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
