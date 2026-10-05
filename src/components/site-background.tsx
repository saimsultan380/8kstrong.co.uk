const DESKTOP_BG = "/strong8k-dekstop-bg.jpeg";
const MOBILE_BG = "/strong8k-mobile-bg.jpeg";

/**
 * Fixed viewport background for the whole site (desktop / mobile assets).
 * Sits under the network mesh; content scrolls above both.
 */
export default function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-screen overflow-hidden bg-black"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={DESKTOP_BG}
        alt=""
        className="hidden h-full w-full object-cover object-center md:block"
        fetchPriority="high"
        decoding="async"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MOBILE_BG}
        alt=""
        className="block h-full w-full object-cover object-center md:hidden"
        fetchPriority="high"
        decoding="async"
      />
      <div
        className="site-bg-scrim absolute inset-0"
        aria-hidden
      />
    </div>
  );
}
