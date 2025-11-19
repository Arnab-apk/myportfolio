import React, { useState } from "react";

const ChatBotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Gemini API call
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      console.log("API Key exists:", !!apiKey);
      
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      console.log("Making request to Gemini API...");
      
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      });
      
      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Response data:", data);
      
      let botText = "Sorry, I couldn't get a response.";
      if (data && data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        botText = data.candidates[0].content.parts[0].text;
      } else if (data.error) {
        botText = `Error: ${data.error.message || "API Error"}`;
        console.error("Gemini API Error:", data.error);
      }
      setMessages(msgs => [...msgs, { from: "bot", text: botText }]);
    } catch (err) {
      console.error("Fetch error:", err);
      setMessages(msgs => [...msgs, { from: "bot", text: `[Error: ${err.message}]` }]);
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
