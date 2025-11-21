import Contact from "../components/Contact";
import AuroraBackground from "../components/AuroraBackground";
import ClickSpark from "../components/ClickSpark";

const ContactPage = () => {
    return (
        <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            <div className="min-h-screen">
                <AuroraBackground>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <Contact />
                    </div>
                </AuroraBackground>
            </div>
        </ClickSpark>
    );
};

export default ContactPage;
