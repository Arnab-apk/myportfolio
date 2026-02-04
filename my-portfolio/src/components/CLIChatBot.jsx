import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaExpand, FaCompress, FaMinus } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const COMMANDS = {
  help: "Show available commands",
  clear: "Clear terminal output",
  ls: "List directory contents",
  cd: "Change directory (e.g., 'cd projects')",
  pwd: "Print working directory",
  whoami: "Print current user",
  about: "Display information about Arnab",
  projects: "List projects",
  skills: "List technical skills",
  contact: "Show contact information",
  theme: "Toggle theme (matrix/cyber/retro)",
  exit: "Close the terminal"
};

const ASCII_ART = `
      .:.           .::::::.      ...     :.        .:.          .::::::. 
     .:::.          ::.    ::     .:::.   ::       .:::.         ::.    ::
    .::.::.         ::.    ::     ::.::.  ::      .::.::.        ::.    ::
   .::.  .::.       :::::::.      :: .::. ::     .::.  .::.      :::::::. 
  .::::::::::.      ::.   ::.     ::  .::.::    .::::::::::.     ::.    ::
 .::.      .::.     ::.    ::.    ::   .:::.   .::.      .::.    ::.    ::
.::.        .::.    ::.     ::.   ::     .::  .::.        .::.   :::::::. 
`;

const THEMES = {
  matrix: { bg: 'bg-black', text: 'text-green-500', prompt: 'text-green-400' },
  cyber: { bg: 'bg-gray-900', text: 'text-cyan-400', prompt: 'text-pink-500' },
  retro: { bg: 'bg-[#1a1a1a]', text: 'text-amber-500', prompt: 'text-amber-600' },
};

const CLIChatBot = ({ isOpen, onClose, onSendMessage, onClear, messages = [], isProcessing, mode = 'chat', onLoginSuccess }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState('matrix');
  const [isMaximized, setIsMaximized] = useState(true);
  const [minimized, setMinimized] = useState(false);
  
  // Login State
  const [loginStep, setLoginStep] = useState(mode === 'login' ? 0 : -1); // 0: prompt, 1: password
  const [loginMsg, setLoginMsg] = useState(["Initialising secure connection...", "Enter password to access portfolio:"]);

  const navigate = useNavigate();
  const location = useLocation();

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  
  // PASSWORD configuration
  const ACCESS_PASSWORD = "arnab"; 

  useEffect(() => {
    if (isOpen && !minimized) {
      inputRef.current?.focus();
      scrollToBottom();
    }
  }, [isOpen, messages, minimized, isMaximized, loginMsg]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = (val) => {
     if (val === ACCESS_PASSWORD) {
        setLoginMsg(prev => [...prev, `> ${'*'.repeat(val.length)}`, "Access Granted.", "Loading graphical interface..."]);
        setTimeout(() => {
           if (onLoginSuccess) onLoginSuccess();
        }, 1500);
     } else {
        setLoginMsg(prev => [...prev, `> ${'*'.repeat(val.length)}`, "Access Denied. Try again:", "Enter password to access portfolio:"]);
     }
  };

  const handleCommand = (cmd) => {
    const parts = cmd.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (command) {
      case 'help':
        return Object.entries(COMMANDS).map(([k, v]) => `${k.padEnd(10)} - ${v}`).join('\n');
      case 'clear':
        if (onClear) onClear();
        return null; 
      case 'ls':
        return "home/  about/  projects/  contact/";
      case 'pwd':
        return `/home/arnab/portfolio${location.pathname === '/' ? '' : location.pathname}`;
      case 'whoami':
        return "guest";
      case 'cd':
        if (!args[0] || args[0] === '~') {
          navigate('/');
          return "Changed directory to home"; 
        }
        if (args[0] === '..') {
          navigate('/');
          return "Changed directory to home";
        }
        
        const path = args[0].replace(/\/$/, '');
        const routeMap = {
          'home': '/',
          'about': '/about',
          'projects': '/projects',
          'contact': '/contact'
        };
        
        if (routeMap[path]) {
          navigate(routeMap[path]);
          return `Changed directory to ${path}`;
        } else {
          return `cd: no such file or directory: ${path}`;
        }
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
      if (onClear) onClear();
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
      
      if (mode === 'login') {
        handleLogin(trimmed);
        setInput('');
        return;
      }

      if (!trimmed) return;

      setHistory(prev => [...prev, trimmed]);
      setHistoryIndex(-1);
      setInput('');
      
      const response = handleCommand(trimmed);
      if (typeof response === 'string') {
        onSendMessage(trimmed, response);
      }
    }
  };

  if (!isOpen) return null;

  const currentTheme = THEMES[theme];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          x: 0
        }}
        exit={{ opacity: 0, scale: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed z-[2000] shadow-2xl overflow-hidden flex flex-col font-mono text-sm md:text-base border border-opacity-30 border-white
          ${minimized ? 'bottom-4 right-4 w-64 h-12 rounded-md cursor-pointer border-gray-500' : 
            // In login mode or hackermode, force fullscreen mostly
            (isMaximized || mode === 'login') ? 'inset-0 w-full h-full rounded-none' : 
            'bottom-4 right-4 w-[95vw] md:w-[600px] h-[80vh] md:h-[600px] rounded-lg'
          }
          ${currentTheme.bg} ${currentTheme.text}
        `}
        style={{ backdropFilter: 'blur(10px)' }}
        onClick={() => minimized && setMinimized(false)}
      >
        {/* Title Bar - Simplified for hacker vibe */}
        {mode !== 'login' && (
        <div className={`flex items-center justify-between px-4 py-2 bg-white/10 select-none cursor-move`}>
          <div className="flex items-center gap-2">
            <FaTerminal />
            <span className="font-bold">param@arnab-portfolio:~</span>
          </div>
          <div className="flex items-center gap-3">
             {/* Removed minimize/resize as requested, only Close is left but user might want NO controls at all. 
                 I'll keep Close for safety unless strictly 'login' mode, but the user said "remove teh minimise a d resize option". 
                 If it is 'login' mode, we usually don't want them to close it. 
             */}
            <button onClick={onClose} className="hover:text-red-500"><FaTimes /></button>
          </div>
        </div>
        )}

        {/* Terminal Content */}
        {!minimized && (
          <div 
            className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            onClick={() => inputRef.current?.focus()}
          >
            {mode === 'login' ? (
                <div className="h-full flex flex-col justify-center items-center text-center">
                   <div className="mb-4 font-bold whitespace-pre text-[0.6rem] md:text-xs lg:text-sm opacity-80 leading-tight select-none">
                      {ASCII_ART}
                   </div>
                   <div className="max-w-md w-full text-left space-y-2 font-mono">
                      {loginMsg.map((msg, i) => (
                        <div key={i} className={`${i === loginMsg.length - 1 ? 'text-green-400' : 'opacity-70 text-gray-300'}`}>
                          {msg}
                        </div>
                      ))}
                      
                      <div className="flex items-center gap-2 mt-4 text-green-500 text-xl border-b border-green-500/50 pb-1">
                        <span>{'>'}</span>
                        <input 
                           ref={inputRef}
                           type="password"
                           value={input}
                           onChange={(e) => setInput(e.target.value)}
                           onKeyDown={handleKeyDown}
                           className={`flex-1 bg-transparent outline-none border-none p-0 ${currentTheme.text} caret-current`}
                           autoFocus
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-2">Hint: The password is "arnab"</div>
                   </div>
                </div>
            ) : (
             <>
            <div className="whitespace-pre mb-4 font-bold opacity-50 select-none hidden md:block">
              {ASCII_ART}
            </div>
            <div className="mb-4 opacity-70">
              Welcome to the interactive CLI. Type 'help' for commands.
            </div>

            {/* Quick Actions / Chips in CLI (rendered as clickable text or buttons) */}
            <div className="mb-4 flex flex-wrap gap-2">
              {['about', 'projects', 'skills', 'contact'].map(cmd => (
                <button 
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className={`px-2 py-1 text-xs border border-current opacity-50 hover:opacity-100 hover:bg-white/10 transition-all rounded`}
                >
                  {cmd}
                </button>
              ))}
            </div>

            {messages.filter(msg => !msg.text.startsWith("Hi! Ask me")).map((msg, i) => (
              <div key={i} className="mb-2">
                {msg.from === 'user' ? (
                  <div className="flex gap-2">
                    <span className={`${currentTheme.prompt}`}>user@portfolio:{location.pathname === '/' ? '~' : location.pathname}$</span>
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
              <span className={`${currentTheme.prompt}`}>user@portfolio:{location.pathname === '/' ? '~' : location.pathname}$</span>
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
            </>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CLIChatBot;
