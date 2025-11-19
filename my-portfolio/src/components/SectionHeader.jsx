function SectionHeader({ id, emoji, title, subtitle }) {
  return (
    <div id={id} className="mb-8 sm:mb-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl sm:text-4xl">{emoji}</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-brand-yellow">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-400 tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
