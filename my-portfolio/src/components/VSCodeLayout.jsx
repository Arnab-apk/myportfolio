import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  VscFiles, 
  VscSearch, 
  VscSourceControl, 
  VscDebugAlt, 
  VscExtensions, 
  VscAccount, 
  VscSettingsGear,
  VscChevronRight,
  VscChevronDown,
  VscClose,
  VscRemote
} from 'react-icons/vsc';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaMarkdown, FaCode } from 'react-icons/fa';

const VSCodeLayout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const files = [
    { name: 'Home.jsx', path: '/', icon: <FaReact className="text-[#61dafb]" /> },
    { name: 'About.jsx', path: '/about', icon: <FaReact className="text-[#61dafb]" /> },
    { name: 'Projects.jsx', path: '/projects', icon: <FaReact className="text-[#61dafb]" /> },
    { name: 'Contact.md', path: '/contact', icon: <FaMarkdown className="text-[#42a5f5]" /> },
    { name: 'skills.json', path: '/skills', icon: <FaCode className="text-yellow-400" /> },
    { name: 'style.css', path: '/styles', icon: <FaCss3Alt className="text-[#42a5f5]" /> },
  ];

  const currentFile = files.find(f => f.path === location.pathname) || files[0];

  return (
    <div className="flex flex-col h-screen w-screen bg-vscode-bg text-vscode-text font-sans overflow-hidden">
      {/* Title Bar */}
      <div className="h-8 bg-vscode-title flex items-center justify-between px-2 select-none text-xs">
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="logo" className="w-4 h-4" />
          <nav className="hidden md:flex gap-4 ml-2">
             <span className="cursor-pointer hover:bg-white/10 px-1 rounded">File</span>
             <span className="cursor-pointer hover:bg-white/10 px-1 rounded">Edit</span>
             <span className="cursor-pointer hover:bg-white/10 px-1 rounded">Selection</span>
             <span className="cursor-pointer hover:bg-white/10 px-1 rounded">View</span>
             <span className="cursor-pointer hover:bg-white/10 px-1 rounded">Go</span>
             <span className="cursor-pointer hover:bg-white/10 px-1 rounded">Run</span>
             <span className="cursor-pointer hover:bg-white/10 px-1 rounded">Terminal</span>
             <span className="cursor-pointer hover:bg-white/10 px-1 rounded">Help</span>
          </nav>
        </div>
        <div className="flex-1 text-center font-medium opacity-80 hidden md:block">
          {currentFile.name} — arnab-portfolio
        </div>
        <div className="flex gap-2">
           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
           <div className="w-3 h-3 rounded-full bg-green-500"></div>
           <div className="w-3 h-3 rounded-full bg-red-500"></div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-vscode-activity flex flex-col items-center py-2 justify-between shrink-0 z-20">
          <div className="flex flex-col gap-4">
            <div className="relative group cursor-pointer p-2 border-l-2 border-white">
              <VscFiles size={24} className="text-white" />
            </div>
            <div className="relative group cursor-pointer p-2 opacity-50 hover:opacity-100">
               <VscSearch size={24} />
            </div>
            <div className="relative group cursor-pointer p-2 opacity-50 hover:opacity-100">
               <VscSourceControl size={24} />
            </div>
            <div className="relative group cursor-pointer p-2 opacity-50 hover:opacity-100">
               <VscDebugAlt size={24} />
            </div>
            <div className="relative group cursor-pointer p-2 opacity-50 hover:opacity-100">
               <VscExtensions size={24} />
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-2">
            <div className="relative group cursor-pointer p-2 opacity-50 hover:opacity-100">
               <VscAccount size={24} />
            </div>
            <div className="relative group cursor-pointer p-2 opacity-50 hover:opacity-100">
               <VscSettingsGear size={24} />
            </div>
          </div>
        </div>

        {/* Sidebar (Explorer) */}
        {sidebarVisible && (
          <div className="w-64 bg-vscode-sidebar flex flex-col border-r border-black/20 shrink-0 hidden md:flex">
            <div className="h-9 px-4 flex items-center text-xs font-bold uppercase tracking-wide opacity-60">
              Explorer
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="px-1">
                 <div className="flex items-center gap-1 py-1 cursor-pointer hover:bg-white/5 font-bold text-xs" onClick={() => setSidebarVisible(!sidebarVisible)}>
                    <VscChevronDown /> <span>ARNAB-PORTFOLIO</span>
                 </div>
                 
                 <div className="ml-2 flex flex-col">
                   <div className="flex items-center gap-1 py-1 px-2 cursor-pointer hover:bg-white/5 opacity-80" onClick={() => {}}>
                      <VscChevronDown /> <span className="text-blue-400">src</span>
                   </div>
                   <div className="ml-4 border-l border-white/10 pl-1">
                     {files.map(file => (
                       <div 
                         key={file.path}
                         onClick={() => navigate(file.path)}
                         className={`flex items-center gap-2 py-1 px-2 cursor-pointer text-sm hover:bg-white/5 ${location.pathname === file.path ? 'bg-white/10 text-white' : 'opacity-70'}`}
                       >
                         {file.icon}
                         <span>{file.name}</span>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col bg-vscode-bg min-w-0">
           {/* Tabs */}
           <div className="flex bg-vscode-title overflow-x-auto hide-scrollbar">
              {files.map(file => (
                <div 
                  key={file.path}
                  onClick={() => navigate(file.path)}
                  className={`flex items-center gap-2 px-3 py-2 min-w-fit cursor-pointer border-r border-black/20 text-sm border-t-2 ${location.pathname === file.path ? 'bg-vscode-bg border-t-vscode-keyword text-white' : 'bg-vscode-tab-inactive border-t-transparent opacity-70 hover:bg-vscode-bg/50'}`}
                >
                  {file.icon}
                  <span>{file.name}</span>
                  <VscClose className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-white/20 rounded p-0.5" />
                </div>
              ))}
           </div>
           
           {/* Breadcrumbs */}
           <div className="h-6 flex items-center px-4 bg-vscode-bg text-xs opacity-60 gap-1 border-b border-white/5">
             <span>src</span> <VscChevronRight /> <span>pages</span> <VscChevronRight /> <span>{currentFile.name}</span>
           </div>

           {/* Content */}
           <div className="flex-1 overflow-y-auto relative scrollbar-thin scrollbar-thumb-gray-700">
             {/* Line Numbers Decoration (Fake) */}
             <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col items-end pr-4 text-xs opacity-30 select-none pt-4 bg-vscode-bg z-0 hidden md:flex">
               {Array.from({ length: 50 }).map((_, i) => <div key={i} className="h-6">{i + 1}</div>)}
             </div>

             <div className="md:pl-12 h-full"> 
                {children}
             </div>
           </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-vscode-status flex items-center justify-between px-3 text-xs text-white shrink-0 select-none z-30">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
             <VscRemote /> <span>WSL: Ubuntu</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
             <VscSourceControl /> <span>main*</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
             <span>0 errors, 0 warnings</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block hover:bg-white/20 px-1 rounded cursor-pointer">Ln 12, Col 34</div>
          <div className="hidden md:block hover:bg-white/20 px-1 rounded cursor-pointer">UTF-8</div>
          <div className="hidden md:block hover:bg-white/20 px-1 rounded cursor-pointer">JavaScript React</div>
          <div className="hover:bg-white/20 px-1 rounded cursor-pointer">Prettier</div>
          <div className="hover:bg-white/20 px-1 rounded cursor-pointer">Bell</div>
        </div>
      </div>
    </div>
  );
};

export default VSCodeLayout;
