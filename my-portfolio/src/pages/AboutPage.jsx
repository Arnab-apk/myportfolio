import About from "../components/About";
import TechStack from "../components/TechStack";
import Skills from "../components/Skills";
import Expertise from "../components/Expertise";
import AuroraBackground from "../components/AuroraBackground";
import ClickSpark from "../components/ClickSpark";

const AboutPage = () => {
    return (
        <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
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
        </ClickSpark>
    );
};

export default AboutPage;
