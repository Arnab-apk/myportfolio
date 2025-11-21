import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ChatBotWidget from "./components/ChatBotWidget";
import Footer from "./components/Footer";
import { StaggeredMenu } from "./components/StaggeredMenu";
import AuroraBackground from "./components/AuroraBackground";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function AppContent() {
  const navItems = [
    { label: 'Home', link: '/', ariaLabel: 'Navigate to home page' },
    { label: 'About', link: '/about', ariaLabel: 'Navigate to about page' },
    { label: 'Projects', link: '/projects', ariaLabel: 'Navigate to projects page' },
    { label: 'Contact', link: '/contact', ariaLabel: 'Navigate to contact page' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/yourusername' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/yourusername' },
    { label: 'Twitter', link: 'https://twitter.com/yourusername' }
  ];

  return (
    <AuroraBackground>
      <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
        {/* Navigation */}
        <StaggeredMenu
          position="right"
          colors={['#2a2a2a', '#1a1a1a', '#0a0a0a']}
          items={navItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl="/vite.svg"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          isFixed={true}
          accentColor="#ffffff"
        />

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
