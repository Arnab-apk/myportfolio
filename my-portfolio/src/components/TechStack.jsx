import LogoLoop from "./LogoLoop";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

const techLogos = [
  { src: '/logos/python-original.svg', ariaLabel: 'Python' },
  { src: '/logos/java-original.svg', ariaLabel: 'Java' },
  { src: '/logos/cplusplus-original.svg', ariaLabel: 'C++' },
  { src: '/logos/csharp-original.svg', ariaLabel: 'C#' },
  { src: '/logos/tensorflow-original.svg', ariaLabel: 'TensorFlow' },
  { src: '/logos/opencv-original.svg', ariaLabel: 'OpenCV' },
  { src: '/logos/numpy-original.svg', ariaLabel: 'NumPy' },
  { src: '/logos/pandas-original.svg', ariaLabel: 'Pandas' },
  { src: '/logos/scikitlearn-original.svg', ariaLabel: 'Scikit-learn' },
  { src: '/logos/unity.svg', ariaLabel: 'Unity' },
  { src: '/logos/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f626c656e6465722f626c656e6465722d6f726967696e616c2e737667.svg', ariaLabel: 'Blender' },
  { src: '/logos/android.svg', ariaLabel: 'Android' },
  { src: '/logos/androidstudio-original.svg', ariaLabel: 'Android Studio' },
  { src: '/logos/git-original.svg', ariaLabel: 'Git' },
  { src: '/logos/github-original.svg', ariaLabel: 'GitHub' },
  { src: '/logos/vscode-original.svg', ariaLabel: 'VS Code' },
  { src: '/logos/mongodb-original.svg', ariaLabel: 'MongoDB' },
  { src: '/logos/mysql-original.svg', ariaLabel: 'MySQL' },
  { src: '/logos/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667.svg', ariaLabel: 'Firebase' },
  { src: '/logos/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f616d617a6f6e5f6177732f616d617a6f6e5f6177732d69636f6e2e737667.svg', ariaLabel: 'AWS' },
  { src: '/logos/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676f6f676c655f636c6f75642f676f6f676c655f636c6f75642d69636f6e2e737667.svg', ariaLabel: 'Google Cloud' },
  { src: '/logos/postman-original.svg', ariaLabel: 'Postman' },
  { src: '/logos/jupyter-original.svg', ariaLabel: 'Jupyter' },
];

// ...existing code... (image-based partner logos removed)

function TechStack() {
  const containerRef = useRef(null);
  
  return (
    <section className="py-16 sm:py-20" id="tech-stack" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl sm:text-4xl">⚡</span>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider">
              <VariableProximity
                label="TECH STACK"
                fromFontVariationSettings="'wght' 400, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 125"
                containerRef={containerRef}
                radius={120}
                falloff="gaussian"
                className="text-brand-yellow"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 tracking-wide">Technologies I work with</p>
        </div>
      </AnimatedSection>

      <div className="mt-12">
        <AnimatedSection animation="fade-up" delay={100}>
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={48}
            gap={24}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#050816"
            ariaLabel="Technology stack logos"
            className="py-8"
          />
        </AnimatedSection>
      </div>

      {/* ...existing code... (image-based partner logos removed) */}

    </section>
  );
}

export default TechStack;
