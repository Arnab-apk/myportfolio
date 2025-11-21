import AuroraBackground from "../components/AuroraBackground";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import ClickSpark from "../components/ClickSpark";
import EnhancedMagicBento from "../components/EnhancedMagicBento";

const Home = () => {
    const navigate = useNavigate();

    const projectItems = [
        {
            image: '/portfolio-project-bw.png',
            link: 'https://github.com/Arnab-apk/myportfolio',
            title: 'My Portfolio',
            description: 'Personal portfolio website built with React.',
            label: 'Web'
        },
        {
            image: '/python-course-bw.png',
            link: 'https://github.com/Arnab-apk/100-days-Python-Course',
            title: '100 Days Python',
            description: 'A wonderful journey from Python noob to intermediate pro developer.',
            label: 'Python'
        },
        {
            image: '/machine-learning-bw.png',
            link: 'https://github.com/Arnab-apk/Machine_Learning_Python-R',
            title: 'Machine Learning',
            description: 'Machine Learning projects in Python and R.',
            label: 'AI/ML'
        },
        {
            image: '/kaggle-workshop-bw.png',
            link: 'https://github.com/Arnab-apk/5-DayGoogleKaggleWS',
            title: 'Google Kaggle WS',
            description: '5-Day Google Kaggle Workshop projects and learnings.',
            label: 'Data Science'
        },
        {
            image: '/ar-prototype-bw.png',
            link: 'https://github.com/Arnab-apk/Gentech_Thales_Prototype',
            title: 'AR Prototype',
            description: 'Augmented reality application prototype using Unity.',
            label: 'AR/VR'
        },
        {
            image: '/opencv-project-bw.png',
            link: 'https://github.com/Arnab-apk/Open_CV_-BTA-',
            title: 'OpenCV (BTA)',
            description: 'Hands-on computer vision exercises using OpenCV.',
            label: 'Computer Vision'
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
            <div className="relative min-h-screen flex flex-col items-center pb-12 sm:pb-20 px-3 sm:px-4 z-10 pt-16 sm:pt-20 md:pt-24">
                {/* Title */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in space-y-3 sm:space-y-4 md:space-y-6 relative z-10 mt-8 sm:mt-12 md:mt-20">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black text-black md:text-white drop-shadow-2xl tracking-tighter leading-tight">
                        Arnab Mandal
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black md:text-white font-light tracking-wide sm:tracking-widest uppercase px-2">
                        AI, AR, and Full Stack Development
                    </p>
                </div>

                {/* Profile Card */}
                <div className="mb-8 sm:mb-12 md:mb-16 animate-slide-up w-full max-w-md mx-auto">
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

                {/* Project Showcase - Enhanced Magic Bento */}
                <div className="w-full max-w-6xl animate-slide-up delay-200 px-2 sm:px-0">
                    <div className="inline-block mb-6 sm:mb-8 mx-auto relative left-1/2 -translate-x-1/2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl bg-white/20 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
                            Featured Projects
                        </h2>
                    </div>
                    <EnhancedMagicBento
                        items={projectItems}
                        enableSpotlight={true}
                        enableStars={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        clickEffect={true}
                        enableMagnetism={true}
                        spotlightRadius={400}
                        particleCount={15}
                    />
                </div>

                {/* Scroll Indicator */}
                <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
                    </div>
                </div>
            </div>
        </ClickSpark>
    );
};

export default Home;
