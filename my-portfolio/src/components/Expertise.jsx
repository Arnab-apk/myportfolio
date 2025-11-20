import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import Carousel from "./Carousel";
import { useRef } from "react";
import { FiBriefcase, FiCode, FiCpu, FiDatabase, FiGlobe, FiLayers } from "react-icons/fi";

function Expertise() {
  const containerRef = useRef(null);

  const expertiseItems = [
    {
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems with Python, TensorFlow, and scikit-learn.',
      id: 1,
      icon: <FiCpu className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'AR Development',
      description: 'Creating immersive augmented reality experiences with Unity 3D.',
      id: 2,
      icon: <FiLayers className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end web applications using React, Node.js, and modern frameworks.',
      id: 3,
      icon: <FiGlobe className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Competitive programming and problem-solving with C++ and Java.',
      id: 4,
      icon: <FiDatabase className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Cloud Computing',
      description: 'Deploying scalable applications on AWS, GCP, and DevOps practices.',
      id: 5,
      icon: <FiBriefcase className="h-[16px] w-[16px] text-white" />
    },
    {
      title: 'Software Engineering',
      description: 'Clean code, design patterns, and best practices for maintainable systems.',
      id: 6,
      icon: <FiCode className="h-[16px] w-[16px] text-white" />
    }
  ];

  return (
    <section className="scroll-mt-24" id="expertise" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="expertise"
          title="EXPERTISE"
          containerRef={containerRef}
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <div className="mt-8 flex justify-center">
          <Carousel
            items={expertiseItems}
            baseWidth={350}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            loop={true}
          />
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Expertise;
