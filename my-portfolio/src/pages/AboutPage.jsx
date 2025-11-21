import About from "../components/About";
import TechStack from "../components/TechStack";
import Skills from "../components/Skills";
import Expertise from "../components/Expertise";
import AuroraBackground from "../components/AuroraBackground";

const AboutPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            <AuroraBackground>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <About />
                    <TechStack />
                    <Skills />
                    <div className="mt-20">
                        <Expertise />
                    </div>
                </div>
            </AuroraBackground>
        </div>
    );
};

export default AboutPage;
