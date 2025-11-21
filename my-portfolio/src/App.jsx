import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ChatBotWidget from "./components/ChatBotWidget";
import Footer from "./components/Footer";
import GooeyNav from "./components/GooeyNav";
import AuroraBackground from "./components/AuroraBackground";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function AppContent() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <AuroraBackground>
      <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
        {/* Kinetic Effects */}

        {/* AmbientParticles removed for performance */}

        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 sm:px-7 py-2.5 sm:py-3.5 border border-gray-200 shadow-lg hover:border-gray-300 transition-all duration-300">
            <GooeyNav items={navItems} />
          </div>
        </div>

        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>

        <ChatBotWidget />
        <Footer />
      </div>
    </AuroraBackground>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
