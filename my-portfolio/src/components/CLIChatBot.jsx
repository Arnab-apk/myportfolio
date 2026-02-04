import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaExpand, FaCompress, FaMinus } from 'react-icons/fa';

const COMMANDS = {
  help: "Show available commands",
  clear: "Clear terminal output",
  about: "Display information about Arnab",
  projects: "List projects",
  skills: "List technical skills",
  contact: "Show contact information",
  theme: "Toggle theme (matrix/cyber/retro)",
  exit: "Close the terminal"
};

const ASCII_ART = `
   _    ____  _  _    _    ___ 
  / \\  |  _ \\| \\| |  / \\  | _ )
 / _ \\ |   /| .  | / _ \\ | _ \\
/_/ \\_\\|_|_\\|_|\\_|/_/ \\_\\|___/
`;

const THEMES = {
  matrix: { bg: 'bg-black', text: 'text-green-500', prompt: 'text-green-400' },
  cyber: { bg: 'bg-gray-900', text: 'text-cyan-400', prompt: 'text-pink-500' },
  retro: { bg: 'bg-[#1a1a1a]', text: 'text-amber-500', prompt: 'text-amber-600' },
};

const CLIChatBot = ({ isOpen, onClose, onSendMessage, messages = [], isProcessing }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState('matrix');
  const [isMaximized, setIsMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);
  
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen && !minimized) {
      inputRef.current?.focus();
      scrollToBottom();
    }
  }, [isOpen, messages, minimized, isMaximized]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommand = (cmd) => {
    const parts = cmd.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (command) {
      case 'help':
        return Object.entries(COMMANDS).map(([k, v]) => `${k.padEnd(10)} - ${v}`).join('\n');
      case 'clear':
        // This needs to be handled by parent or by clearing local view if we separate them
        // For now, we'll return a special flag or handle it locally if messages were local
        return null; 
      case 'about':
        onSendMessage('Tell me about yourself');
        return null;
      case 'projects':
        onSendMessage('What are your projects?');
        return null;
      case 'skills':
        onSendMessage('What are your skills?');
        return null;
      case 'contact':
        onSendMessage('How can I contact you?');
        return null;
      case 'theme':
        const nextTheme = args[0] && THEMES[args[0]] ? args[0] : 
          Object.keys(THEMES)[(Object.keys(THEMES).indexOf(theme) + 1) % Object.keys(THEMES).length];
        setTheme(nextTheme);
        return `Theme set to: ${nextTheme}`;
      case 'exit':
        onClose();
        return null;
      default:
        // Treat as natural language query
        onSendMessage(cmd);
        return null;
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      // handle clear
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Enter') {
      const trimmed = input.trim();
      if (!trimmed) return;

      setHistory(prev => [...prev, trimmed]);
      setHistoryIndex(-1);
      setInput('');
      
      const response = handleCommand(trimmed);
      if (typeof response === 'string') {
        // Add local system message
        // Note: This relies on parent handling "echo" of user command if we want it shown
        // We might need a local state for terminal-only messages if the parent doesn't support them
      }
    }
  };

  if (!isOpen) return null;

  const currentTheme = THEMES[theme];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: minimized ? 0.5 : 1, 
          y: minimized ? 300 : 0,
          x: minimized ? 150 : 0
        }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`fixed z-[2000] shadow-2xl overflow-hidden flex flex-col font-mono text-sm md:text-base border border-opacity-30 border-white
          ${minimized ? 'bottom-4 right-4 w-64 h-16 rounded-md cursor-pointer' : 
            isMaximized ? 'inset-0 w-full h-full rounded-none' : 
            'bottom-4 right-4 w-[95vw] md:w-[600px] h-[80vh] md:h-[600px] rounded-lg'
          }
          ${currentTheme.bg} ${currentTheme.text}
        `}
        style={{ backdropFilter: 'blur(10px)' }}
        onClick={() => minimized && setMinimized(false)}
      >
        {/* Title Bar */}
        <div className={`flex items-center justify-between px-4 py-2 bg-white/10 select-none cursor-move`}>
          <div className="flex items-center gap-2">
            <FaTerminal />
            <span className="font-bold">param@arnab-portfolio:~</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={(e) => { e.stopPropagation(); setMinimized(!minimized); }} className="hover:text-white"><FaMinus /></button>
            <button onClick={() => setIsMaximized(!isMaximized)} className="hover:text-white">
              {isMaximized ? <FaCompress /> : <FaExpand />}
            </button>
            <button onClick={onClose} className="hover:text-red-500"><FaTimes /></button>
          </div>
        </div>

        {/* Terminal Content */}
        {!minimized && (
          <div 
            className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="whitespace-pre mb-4 font-bold opacity-50 select-none hidden md:block">
              {ASCII_ART}
            </div>
            <div className="mb-4 opacity-70">
              Welcome to the interactive CLI. Type 'help' for commands.
            </div>

            {messages.map((msg, i) => (
              <div key={i} className="mb-2">
                {msg.from === 'user' ? (
                  <div className="flex gap-2">
                    <span className={`${currentTheme.prompt}`}>user@portfolio:~$</span>
                    <span>{msg.text}</span>
                  </div>
                ) : (
                  <div className="flex gap-2 text-opacity-90">
                    <span className="text-blue-500 opacity-0 select-none">...</span>
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                )}
              </div>
            ))}
            
            {isProcessing && (
              <div className="flex gap-2 animate-pulse">
                <span className="text-blue-500 opacity-0 select-none">...</span>
                <span>Processing...</span>
              </div>
            )}

            <div className="flex gap-2 items-center">
              <span className={`${currentTheme.prompt}`}>user@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`flex-1 bg-transparent outline-none border-none p-0 ${currentTheme.text} caret-current`}
                autoComplete="off"
                spellCheck="false"
                autoFocus
              />
            </div>
            <div ref={bottomRef} />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CLIChatBot;
