import Carousel from "../components/Carousel";
import EnhancedMagicBento from "../components/EnhancedMagicBento";
import SectionHeader from "../components/SectionHeader";
import AuroraBackground from "../components/AuroraBackground";
import ClickSpark from "../components/ClickSpark";
import { useRef } from "react";
import { FiAward, FiBook, FiStar, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

const ProjectsPage = () => {
    const highlightsRef = useRef(null);

    const highlightItems = [
        {
            title: 'Academic Excellence',
            description: 'Maintaining strong academic performance in Computer Science & Engineering.',
            id: 1,
            icon: <FiBook className="h-[16px] w-[16px] text-white" />
        },
        {
            title: 'Open Source Contributor',
            description: 'Active contributor to open-source projects and tech communities.',
            id: 2,
            icon: <FiUsers className="h-[16px] w-[16px] text-white" />
        },
        {
            title: 'Hackathon Participant',
            description: 'Participated in multiple hackathons and coding competitions.',
            id: 3,
            icon: <FiZap className="h-[16px] w-[16px] text-white" />
        },
        {
            title: 'Continuous Learner',
            description: 'Completed 100 Days of Python and various online certifications.',
            id: 4,
            icon: <FiTrendingUp className="h-[16px] w-[16px] text-white" />
        },
        {
            title: 'Problem Solver',
            description: 'Solved 200+ problems on competitive programming platforms.',
            id: 5,
            icon: <FiStar className="h-[16px] w-[16px] text-white" />
        },
        {
            title: 'Innovation Award',
            description: 'Recognized for innovative AR prototype at Gentech Thales.',
            id: 6,
            icon: <FiAward className="h-[16px] w-[16px] text-white" />
        }
    ];

    return (
        <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            <div className="min-h-screen pt-16 sm:pt-20 md:pt-24">
                <AuroraBackground>
                    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
                        <section id="highlights" ref={highlightsRef}>
                            <div className="flex flex-col items-center gap-8 lg:gap-12">
                                {/* Highlights Carousel */}
                                <div className="w-full min-h-[350px] sm:min-h-[400px]">
                                    <SectionHeader
                                        id="highlights"
                                        title="HIGHLIGHTS"
                                        containerRef={highlightsRef}
                                    />
                                    <div className="mt-6 sm:mt-8 flex justify-center">
                                        <Carousel
                                            items={highlightItems}
                                            baseWidth={280}
                                            autoplay={true}
                                            autoplayDelay={3500}
                                            pauseOnHover={true}
                                            loop={true}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Magic Bento Grid - Full Width Below */}
                            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 rounded-2xl sm:rounded-3xl bg-brand-card/30 border border-white/10 overflow-hidden">
                                <EnhancedMagicBento
                                    enableSpotlight={true}
                                    enableStars={true}
                                    enableBorderGlow={true}
                                    enableTilt={true}
                                    clickEffect={true}
                                    enableMagnetism={true}
                                    spotlightRadius={400}
                                    particleCount={20}
                                />
                            </div>
                        </section>
                    </div>
                </AuroraBackground>
            </div>
        </ClickSpark>
    );
};

export default ProjectsPage;
