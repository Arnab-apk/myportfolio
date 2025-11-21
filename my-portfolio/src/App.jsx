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
      <div className="min-h-screen bg-brand-dark text-white overflow-x-hidden">
        {/* Kinetic Effects */}

        {/* AmbientParticles removed for performance */}

        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/10 transition-all duration-300">
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
    </Router>
  );
}

export default App;
