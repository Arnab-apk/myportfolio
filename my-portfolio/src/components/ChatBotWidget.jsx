import React, { useState, useRef, useEffect } from "react";
import CLIChatBot from "./CLIChatBot";
import { FaTerminal } from "react-icons/fa";

// Static portfolio context (not sent if question is unrelated)
const PORTFOLIO_CONTEXT = `Name: Arnab Mandal\nEducation: Computer Science Engineering student at Academy of Technology, West Bengal\nPublic Contacts: Email (arnabmandal261@gmail.com), GitHub (github.com/Arnab-apk), LinkedIn (linkedin.com/in/arnab-mandal-00200131a/)\nSkills: Python, C, C++, Java, JavaScript, Dart, Flutter, Unity 3D, React, Node.js, TensorFlow, PyTorch, OpenCV, NumPy, Pandas, scikit-learn, Git, Linux, Bash\nExpertise: AI/ML, AR/VR (Unity), Full-stack Web, Computer Vision, Data Science, Mobile Apps\nFocus: AI Agents & RAG, AR/Game Dev, Competitive Programming & DSA\nProjects: 100 Days of Python, ML in Python & R, Google x Kaggle Workshop, OpenCV CV projects, Coffee Machine (OOP), College Coding (C)`;

// Simple heuristic for non-portfolio queries
const UNRELATED_PATTERNS = [
  /age|old are you|birthday/i,
  /family|parents|mother|father|sister|brother/i,
  /address|where do you live|location/i,
  /salary|income|pay/i,
  /religion|politics|belief|married|single/i,
  /hobby|hobbies|favourite|favorite/i,
  /tell.*joke|joke|funny/i,
  /write .*code|solve .*math|equation|calculate/i
];

const ChatBotWidget = () => {
  const [open, setOpen] = useState(false);
  const [cliMode, setCliMode] = useState(true); // Default to CLI mode
  const [processing, setProcessing] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me about Arnab's skills, projects, or tech." },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [messages, cliMode]);

  const isUnrelated = (text) => UNRELATED_PATTERNS.some(r => r.test(text));

  const handleSend = async (textOveride, localResponse = null) => {
    const question = (typeof textOveride === 'string' ? textOveride : input).trim();
    if (!question) return;
    
    setMessages(prev => [...prev, { from: "user", text: question }]);
    if (typeof textOveride !== 'string') setInput("");
    setProcessing(true);

    if (localResponse) {
      // Simulate a small delay for "processing" feel even for local commands
      setTimeout(() => {
        setMessages(prev => [...prev, { from: "bot", text: localResponse }]);
        setProcessing(false);
      }, 300);
      return;
    }

    // Fast local guard for unrelated queries
    if (isUnrelated(question)) {
      setMessages(prev => [...prev, { from: "bot", text: "I only answer portfolio-related questions: skills, projects, technologies, education, or professional contact." }]);
      setProcessing(false);
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key missing");
      }

      const bodyPrompt = `You are Arnab's portfolio assistant. ONLY answer portfolio-related queries. Be concise (max 2 sentences, <200 characters). If question is unrelated, reply: 'I only answer portfolio-related questions.'\n\nContext:\n${PORTFOLIO_CONTEXT}\n\nUser Question: ${question}\nAnswer:`;
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: bodyPrompt }] }] })
        });
      
      const data = await res.json();
      
      if (!res.ok) {
        console.error("Gemini API Error details:", data);
        throw new Error(data.error?.message || `API Request failed with status ${res.status}`);
      }
      
      let botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, no response.";
      // Enforce concise length client-side as fallback
      botText = botText.replace(/\s+/g, ' ').trim();
      if (botText.length > 200) botText = botText.slice(0, 197).replace(/[,;:]+$/, '').trim() + '...';
      // If model ignored instruction and answered unrelated
      if (isUnrelated(botText) || /I can'?t|unrelated/i.test(botText)) {
        botText = "I only answer portfolio-related questions.";
      }
      setMessages(prev => [...prev, { from: "bot", text: botText }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [...prev, { from: "bot", text: `Connection error: ${error.message || "Unknown error"}. Try again.` }]);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div>
      <button
        className="fixed bottom-6 right-6 z-[1200] bg-white text-black rounded-full shadow-lg p-4 hover:bg-gray-200 transition-all"
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat bot"
      >
        <span role="img" aria-label="Chat">💬</span>
      </button>

      {cliMode ? (
        <CLIChatBot
          isOpen={open} 
          onClose={() => setOpen(false)} 
          onSendMessage={handleSend}
          onClear={() => setMessages([])}
          messages={messages}
          isProcessing={processing}
        />
      ) : (
        open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] bg-white text-black rounded-2xl shadow-2xl z-[1200] flex flex-col overflow-hidden animate-fadeIn">
          <div className="bg-gray-800 text-white px-4 py-2 font-bold flex justify-between items-center">
            <span>ChatBot</span>
            <button 
              onClick={() => setCliMode(true)}
              className="text-xs bg-black/30 hover:bg-black/50 p-1 rounded flex items-center gap-1 transition-colors"
              title="Switch to CLI Mode"
            >
              <FaTerminal /> CLI
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto" style={{ maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-xl max-w-[80%] ${msg.from === 'user' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}>{msg.text}</div>
              </div>
            ))}
            {processing && <div className="text-gray-400 text-xs ml-2">Typing...</div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex border-t border-gray-200">
            <input
              className="flex-1 px-3 py-2 outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask about skills, projects..."
            />
            <button
              className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition-all font-bold"
              onClick={() => handleSend()}
            >
              Send
            </button>
          </div>
        </div>
        )
      )}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.25s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default ChatBotWidget;
