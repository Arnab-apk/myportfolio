import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ChatBotWidget from "./components/ChatBotWidget";
import Footer from "./components/Footer";
import CardNav from "./components/CardNav";
import AuroraBackground from "./components/AuroraBackground";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function AppContent() {
  const navItems = [
    {
      label: 'Pages',
      bgColor: '#1a1a1a',
      textColor: '#ffffff',
      links: [
        { label: 'Home', href: '/', ariaLabel: 'Navigate to home page' },
        { label: 'About', href: '/about', ariaLabel: 'Navigate to about page' }
      ]
    },
    {
      label: 'Work',
      bgColor: '#2a2a2a',
      textColor: '#ffffff',
      links: [
        { label: 'Projects', href: '/projects', ariaLabel: 'Navigate to projects page' }
      ]
    },
    {
      label: 'Connect',
      bgColor: '#3a3a3a',
      textColor: '#ffffff',
      links: [
        { label: 'Contact', href: '/contact', ariaLabel: 'Navigate to contact page' }
      ]
    }
  ];

  return (
    <AuroraBackground>
      <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
        {/* Navigation */}
        <CardNav
          logo="/vite.svg"
          logoAlt="Portfolio Logo"
          items={navItems}
          baseColor="#ffffff"
          menuColor="#000000"
          buttonBgColor="#000000"
          buttonTextColor="#ffffff"
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
