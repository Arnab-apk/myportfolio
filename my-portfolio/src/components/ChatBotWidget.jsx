import React, { useState, useRef, useEffect } from "react";

const ChatBotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          contents: [{ parts: [{ text: `You are an AI assistant for Arnab Mandal's portfolio. Context:

PERSONAL: Arnab Mandal - Computer Science Engineering student at Academy of Technology, West Bengal. Email: arnabmandal261@gmail.com, GitHub: github.com/Arnab-apk, LinkedIn: linkedin.com/in/arnab-mandal-00200131a/, WhatsApp: +919830945015

SKILLS: Python, C, C++, Java, JavaScript, Dart, Flutter, Unity 3D, React, Node.js, TensorFlow, PyTorch, OpenCV, NumPy, Pandas, scikit-learn, Git, Linux, Bash

EXPERTISE: AI/ML solutions, AR experiences, full-stack development, computer vision, game development, data science, mobile apps

FOCUS: AI Agents & RAG Systems, AR/Game Development (Unity), Competitive Programming & DSA

PROJECTS: 100 Days of Python, OpenCV (BTA), Google x Kaggle Workshop, ML in Python & R, College Coding (C), Coffee Machine (OOP)

Question: ${input}

Answer in 2-3 concise sentences about Arnab's portfolio.` }] }] 
        })
      });
      const data = await res.json();
      const botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || data?.error?.message || "Sorry, I couldn't get a response.";
      setMessages(msgs => [...msgs, { from: "bot", text: botText }]);
    } catch {
      setMessages(msgs => [...msgs, { from: "bot", text: "Connection error. Please try again." }]);
    }
  };

  return (
    <div>
      <button
        className="fixed bottom-6 right-6 z-[1200] bg-yellow-400 text-black rounded-full shadow-lg p-4 hover:bg-yellow-300 transition-all"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat bot"
      >
        <span role="img" aria-label="Chat">💬</span>
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] bg-white text-black rounded-2xl shadow-2xl z-[1200] flex flex-col overflow-hidden animate-fadeIn">
          <div className="bg-yellow-400 px-4 py-2 font-bold">ChatBot</div>
          <div className="flex-1 p-3 overflow-y-auto" style={{ maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-3 py-2 rounded-xl max-w-[80%] ${msg.from === "user" ? "bg-yellow-100" : "bg-gray-200"}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex border-t border-gray-200">
            <input
              className="flex-1 px-3 py-2 outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 transition-all font-bold"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.25s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default ChatBotWidget;
