/** Hidden SVG defs — Lucide icons use stroke: url(#brand-icon-gradient) */
export function BrandIconGradient() {
  return (
    <svg
      aria-hidden
      width={0}
      height={0}
      className="pointer-events-none absolute"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <linearGradient
          id="brand-icon-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#fff4c4" />
          <stop offset="18%" stopColor="#f5e6a3" />
          <stop offset="45%" stopColor="#e8c547" />
          <stop offset="72%" stopColor="#d4a84b" />
          <stop offset="100%" stopColor="#b27e36" />
        </linearGradient>
      </defs>
    </svg>
  );
}
