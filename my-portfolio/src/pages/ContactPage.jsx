import Contact from "../components/Contact";
import AuroraBackground from "../components/AuroraBackground";

const ContactPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            <AuroraBackground>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Contact />
                </div>
            </AuroraBackground>
        </div>
    );
};

export default ContactPage;
