function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()} Arnab Mandal. Built with React, Tailwind
          & React Bits ✨
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
          From concept to commit — elevating innovation.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
