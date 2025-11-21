import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import FloatingCard from "./FloatingCard";
import { GlowingEffect } from "./ui/glowing-effect";
import { LinkPreview } from "./ui/link-preview";
import { useRef } from "react";
import {
  IconBrandPython,
  IconEye,
  IconChartBar,
  IconBrain,
  IconTerminal2,
  IconCoffee,
  IconExternalLink
} from "@tabler/icons-react";

const projects = [
  {
    name: "100 Days of Python",
    tags: ["Python", "Projects", "CLI"],
    description:
      "A curated journey from Python basics to intermediate projects, building real-world console apps.",
    link: "https://github.com/Arnab-apk/100-days-Python-Course",
    icon: <IconBrandPython size={24} />,
  },
  {
    name: "OpenCV (BTA)",
    tags: ["Python", "OpenCV", "Computer Vision"],
    description:
      "Hands-on computer vision exercises using OpenCV: image ops, filters, contours and more.",
    link: "https://github.com/Arnab-apk/Open_CV_-BTA-",
    icon: <IconEye size={24} />,
  },
  {
    name: "Google x Kaggle: 5-Day WS",
    tags: ["Jupyter", "Pandas", "ML"],
    description:
      "Workshop notebooks covering data cleaning, visualization, and beginner ML workflows.",
    link: "https://github.com/Arnab-apk/5-DayGoogleKaggleWS",
    icon: <IconChartBar size={24} />,
  },
  {
    name: "ML in Python & R",
    tags: ["Jupyter", "scikit-learn", "ML"],
    description:
      "Practical ML notebooks experimenting with classic algorithms and evaluation techniques.",
    link: "https://github.com/Arnab-apk/Machine_Learning_Python-R",
    icon: <IconBrain size={24} />,
  },
  {
    name: "College Coding (C)",
    tags: ["C", "Algorithms", "DSA"],
    description:
      "Foundational C programs and DSA practice from college coursework and labs.",
    link: "https://github.com/Arnab-apk/CollegeCoding-C",
    icon: <IconTerminal2 size={24} />,
  },
  {
    name: "Coffee Machine (OOP)",
    tags: ["Python", "OOP", "CLI"],
    description:
      "A console-based coffee machine demonstrating OOP principles and stateful workflows.",
    link: "https://github.com/Arnab-apk/Coffee_Machine",
    icon: <IconCoffee size={24} />,
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
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-1 overflow-hidden group hover:border-white/50 transition-colors duration-500">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative h-full rounded-2xl bg-brand-dark-rich/80 p-6 flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-white/10 text-white">
                      {project.icon}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <IconExternalLink size={20} />
                    </a>
                  </div>

                  <LinkPreview url={project.link} className="font-display font-bold text-xl mb-3 text-white group-hover:text-white transition-colors">
                    {project.name}
                  </LinkPreview>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-slate-300 group-hover:border-white/20 transition-colors"
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
