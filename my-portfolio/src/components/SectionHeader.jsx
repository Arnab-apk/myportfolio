import GlassSurface from "./GlassSurface";
import VariableProximity from "./VariableProximity";

function SectionHeader({ id, title, containerRef }) {
  return (
    <div id={id} className="mb-8 sm:mb-12">
      <div className="flex items-center justify-center mb-3">
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={20}
          backgroundOpacity={0.1}
          blur={18}
          saturation={1.3}
          className="inline-block"
        >
          <div className="px-8 py-4">
            <VariableProximity
              label={title}
              fromFontVariationSettings="'wght' 400, 'wdth' 100"
              toFontVariationSettings="'wght' 900, 'wdth' 125"
              containerRef={containerRef}
              radius={120}
              falloff="gaussian"
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            />
          </div>
        </GlassSurface>
      </div>
    </div>
  );
}

export default SectionHeader;
