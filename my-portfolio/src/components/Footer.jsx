function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20 bg-brand-dark-rich/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm text-slate-400">
            © {new Date().getFullYear()} Arnab Mandal.
          </span>
          <span className="text-xs text-slate-600">
            Built with React, Tailwind & React Bits ✨
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Arnab-apk"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:arnabmandal261@gmail.com"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <span className="text-[10px] uppercase tracking-[0.25em] text-slate-600 font-medium">
          From concept to commit
        </span>
      </div>
    </footer>
  );
}

export default Footer;
