import GlassSurface from "./GlassSurface";

function SectionHeader({ id, emoji, title, subtitle }) {
  return (
    <div id={id} className="mb-8 sm:mb-12">
      <GlassSurface
        width="auto"
        height="auto"
        borderRadius={20}
        backgroundOpacity={0.08}
        blur={15}
        saturation={1.4}
        className="inline-block mb-4"
      >
        <div className="flex items-center gap-3 px-6 py-3">
          <span className="text-3xl sm:text-4xl">{emoji}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white">
            {title}
          </h2>
        </div>
      </GlassSurface>
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-300 tracking-wide mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
