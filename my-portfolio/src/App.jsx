import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBotWidget from "./components/ChatBotWidget";
import Footer from "./components/Footer";
import GooeyNav from "./components/GooeyNav";


import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <Router>
      <AuroraBackground>
        <div className="min-h-screen bg-transparent text-black overflow-x-hidden">
          {/* Kinetic Effects */}

          {/* AmbientParticles removed for performance */}

          {/* Navigation */}
          <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6">
            <div className="bg-transparent backdrop-blur-sm rounded-full px-5 sm:px-7 py-2.5 sm:py-3.5 border border-black/10 shadow-sm hover:border-black/20 transition-all duration-300">
              <GooeyNav items={navItems} />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <ChatBotWidget />
          <Footer />
        </div>
      </AuroraBackground>
    </Router>
  );
}

export default App;
