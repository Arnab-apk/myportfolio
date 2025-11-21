import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBotWidget from "./components/ChatBotWidget";
import Footer from "./components/Footer";
import GooeyNav from "./components/GooeyNav";
import MagneticCursor from "./components/MagneticCursor";
import AmbientParticles from "./components/AmbientParticles";
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
        <MagneticCursor />
        <AmbientParticles count={30} />

        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
          <div className="bg-brand-dark-rich/80 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
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
