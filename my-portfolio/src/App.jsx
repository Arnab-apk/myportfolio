import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ChatBotWidget from "./components/ChatBotWidget";
import CLIChatBot from "./components/CLIChatBot"; // Direct import for Gate
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar"; // Added Navbar

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function AppContent() {
  const [isGranted, setIsGranted] = useState(false); // Gate state

  return (
    <>
      {!isGranted && (
        <CLIChatBot 
           isOpen={true}
           mode="login"
           onLoginSuccess={() => setIsGranted(true)}
           messages={[]} 
           onSendMessage={() => {}} 
           isProcessing={false} 
           onClose={() => {}} 
        />
      )}

      {isGranted && (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
          <Navbar />
          
          {/* Post-Login Content */}
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageTransition>

          {/* Regular Chat Widget for post-login access */}
          <ChatBotWidget /> 
        </div>
      )}
    </>
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
