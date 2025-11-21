import AuroraBackground from "../components/AuroraBackground";
import InfiniteMenu from "../components/InfiniteMenu";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import ClickSpark from "../components/ClickSpark";
import MetallicLogo from "../components/MetallicLogo";

const Home = () => {
    const navigate = useNavigate();

    const projectItems = [
        {
            image: '/portfolio-project.png',
            link: 'https://github.com/Arnab-apk/myportfolio',
            title: 'My Portfolio',
            description: 'Personal portfolio website built with React.'
        },
        {
            image: '/python-course.png',
            link: 'https://github.com/Arnab-apk/100-days-Python-Course',
            title: '100 Days Python',
            description: 'A wonderful journey from Python noob to intermediate pro developer.'
        },
        {
            image: '/machine-learning.png',
            link: 'https://github.com/Arnab-apk/Machine_Learning_Python-R',
            title: 'Machine Learning',
            description: 'Machine Learning projects in Python and R.'
        },
        {
            image: '/kaggle-workshop.png',
            link: 'https://github.com/Arnab-apk/5-DayGoogleKaggleWS',
            title: 'Google Kaggle WS',
            description: '5-Day Google Kaggle Workshop projects and learnings.'
        },
        {
            image: '/ar-prototype.png',
            link: 'https://github.com/Arnab-apk/Gentech_Thales_Prototype',
            title: 'AR Prototype',
            description: 'Augmented reality application prototype using Unity.'
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
            <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24">
                <AuroraBackground>
                    <div className="w-full h-screen flex flex-col items-center justify-center px-4 pt-20">
                        {/* Metallic Logo */}
                        <div className="mb-8 animate-fade-in">
                            <MetallicLogo />
                        </div>

                        {/* Title */}
                        <div className="text-center mb-12 sm:mb-16 animate-fade-in space-y-4 sm:space-y-6 relative z-10">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white drop-shadow-lg">
                                Arnab Mandal
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-slate-400">
                                AI, AR, and Full Stack Development
                            </p>
                        </div>

                        {/* Profile Card and InfiniteMenu Side by Side */}
                        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                            {/* Profile Card */}
                            <div className="flex-shrink-0">
                                <ProfileCard
                                    avatarUrl="/arnab.jpg"
                                    name="Arnab Mandal"
                                    title="Tech Enthusiast"
                                    handle="arnab_mandal"
                                    status="Available for work"
                                    contactText="CONTACT"
                                    onContactClick={() => {
                                        navigate('/contact');
                                    }}
                                />
                            </div>

                            {/* InfiniteMenu */}
                            <div className="w-full max-w-2xl h-[500px] sm:h-[600px] relative">
                                <InfiniteMenu items={projectItems} />
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                            <div className="w-6 h-10 border-2 border-brand-yellow/50 rounded-full flex justify-center pt-2">
                                <div className="w-1 h-3 bg-brand-yellow/50 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                </AuroraBackground>
            </section>
        </ClickSpark>
    );
};

export default Home;
