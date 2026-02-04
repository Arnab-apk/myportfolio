import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ChatBotWidget from "./components/ChatBotWidget";
import VSCodeLayout from "./components/VSCodeLayout";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function AppContent() {
  return (
    <VSCodeLayout>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>

        <ChatBotWidget /> 
    </VSCodeLayout>
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
