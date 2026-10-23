// Hand-drawn style SVGs shared by every layout. Colors come from theme tokens.
import type { Hobby } from "@/content/site";

export const CatMark = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <svg viewBox="0 0 64 48" className={className} aria-hidden>
    <g className="fill-matcha">
      {/* tail */}
      <path d="M50 40c8 0 10-8 6-14" className="stroke-matcha" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* body */}
      <ellipse cx="36" cy="34" rx="16" ry="11" />
      {/* head */}
      <circle cx="20" cy="22" r="10" />
      {/* ears */}
      <path d="M12 16l-1-11 8 7zM28 16l1-11-8 7z" />
      {/* legs */}
      <rect x="24" y="38" width="5" height="9" rx="2.5" />
      <rect x="40" y="38" width="5" height="9" rx="2.5" />
    </g>
    <circle cx="17" cy="21" r="1.4" className="fill-cream" />
    <circle cx="23" cy="21" r="1.4" className="fill-cream" />
  </svg>
);

export const NameBadge = () => (
  <svg viewBox="0 0 120 120" className="spin-slow h-24 w-24 sm:h-28 sm:w-28" aria-hidden>
    <defs>
      <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
    </defs>
    <text
      className="fill-cocoa"
      style={{ fontSize: 9.5, fontWeight: 600, fontFamily: "var(--font-display)" }}
    >
      <textPath href="#badge-circle" textLength="272" lengthAdjust="spacing">SARAH ZWART ✦ SOFTWARE DEVELOPER ✦</textPath>
    </text>
  </svg>
);

const stroke = {
  style: { stroke: "hsl(var(--cocoa))" },
  strokeWidth: 2.2,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

const Dumbbell = ({ className }: { className: string }) => (
  <svg viewBox="0 0 72 56" aria-hidden className={className}>
    <rect x="18" y="25" width="36" height="6" rx="2" className="fill-cream" {...stroke} />
    <rect x="8" y="12" width="10" height="32" rx="3" className="fill-blush" {...stroke} />
    <rect x="54" y="12" width="10" height="32" rx="3" className="fill-blush" {...stroke} />
    <rect x="3" y="19" width="5" height="18" rx="2" className="fill-petal" {...stroke} />
    <rect x="64" y="19" width="5" height="18" rx="2" className="fill-petal" {...stroke} />
  </svg>
);

const Puzzle = ({ className }: { className: string }) => (
  <svg viewBox="0 0 72 56" aria-hidden className={className}>
    <path
      d="M16 16h10a6 6 0 1 1 12 0h10v10a6 6 0 1 1 0 12v10H16V38a6 6 0 1 0 0-12z"
      className="fill-ember"
      {...stroke}
    />
  </svg>
);

const MatchaBowl = ({ className }: { className: string }) => (
  <svg viewBox="0 0 72 56" aria-hidden className={className}>
    {/* steam */}
    <path d="M30 15c-3-3 3-5 0-9M42 15c-3-3 3-5 0-9" fill="none" {...stroke} />
    {/* bowl */}
    <path d="M12 22h48a24 22 0 0 1-48 0z" className="fill-cream" {...stroke} />
    {/* frothy matcha surface */}
    <ellipse cx="36" cy="22" rx="24" ry="4" className="fill-matcha" {...stroke} />
    <path d="M22 50h28" fill="none" {...stroke} />
  </svg>
);

const City = ({ className }: { className: string }) => (
  <svg viewBox="0 0 72 56" aria-hidden className={className}>
    <rect x="8" y="26" width="13" height="24" rx="1.5" className="fill-petal" {...stroke} />
    <path d="M21 50V12l8-6 8 6v38z" className="fill-blush" {...stroke} />
    <rect x="37" y="20" width="13" height="30" rx="1.5" className="fill-sky" {...stroke} />
    <rect x="50" y="32" width="14" height="18" rx="1.5" className="fill-petal" {...stroke} />
    <path d="M26 20h6M26 28h6M26 36h6M41 27h5M41 35h5M54 39h6" fill="none" {...stroke} />
    <path d="M3 50h66" fill="none" {...stroke} />
  </svg>
);

const hobbyIcons = { puzzle: Puzzle, matcha: MatchaBowl, dumbbell: Dumbbell, city: City };

export const HobbyIcon = ({ name, className = "h-16 w-auto" }: { name: Hobby["icon"]; className?: string }) => {
  const Icon = hobbyIcons[name];
  return <Icon className={className} />;
};
