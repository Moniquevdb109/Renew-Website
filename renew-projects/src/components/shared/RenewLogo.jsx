export default function RenewLogo({ width = 200, darkBg = false }) {
  const h = Math.round(width * (142 / 440));
  const roofColor = darkBg ? '#cccccc' : '#1a1a1a';
  const textColor = darkBg ? '#e8e4dc' : '#1e1e1e';
  const lineColor = darkBg ? '#444444' : '#cccccc';
  const tagColor  = darkBg ? '#666666' : '#777777';

  return (
    <svg width={width} height={h} viewBox="0 0 440 142" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* ── OUTER roof (large chevron) ── */}
      <polyline
        points="2,138 78,28 154,138"
        fill="none" stroke={roofColor} strokeWidth="7"
        strokeLinejoin="round" strokeLinecap="round"
      />

      {/* ── INNER roof (smaller chevron, sits below outer) ── */}
      <polyline
        points="14,138 78,52 142,138"
        fill="none" stroke={roofColor} strokeWidth="5.5"
        strokeLinejoin="round" strokeLinecap="round"
      />

      {/* ── Chimney (sits above outer roof right side) ── */}
      <rect x="118" y="48" width="14" height="30" fill="none" stroke={roofColor} strokeWidth="5" strokeLinejoin="round" />

      {/* ── Arched window (centred on inner roof base) ── */}
      {/* window outline: arch top + rect bottom */}
      <path
        d="M 64,138 L 64,120 A 14,14 0 0 1 92,120 L 92,138"
        fill="#8b1a1a" stroke={roofColor} strokeWidth="3.5" strokeLinejoin="round"
      />
      {/* horizontal divider */}
      <line x1="64" y1="128" x2="92" y2="128" stroke={roofColor} strokeWidth="3" />
      {/* vertical divider */}
      <line x1="78" y1="106" x2="78" y2="138" stroke={roofColor} strokeWidth="3" />

      {/* ── Red tile strips (left slope, matching real logo) ── */}
      <rect x="-4"  y="66" width="60" height="13" rx="2" fill="#c0392b" transform="rotate(-52 -4 66)" />
      <rect x="-8"  y="84" width="60" height="12" rx="2" fill="#a93226" transform="rotate(-52 -8 84)" />
      <rect x="-12" y="102" width="58" height="12" rx="2" fill="#7b241c" transform="rotate(-52 -12 102)" />

      {/* ── RENEW ── */}
      <text
        x="168" y="100"
        fontFamily="'Barlow Condensed', Arial Narrow, sans-serif"
        fontWeight="800" fontSize="74" fill="#c0392b" letterSpacing="2"
      >RENEW</text>

      {/* ── PROJECTS ── */}
      <text
        x="168" y="136"
        fontFamily="'Barlow Condensed', Arial Narrow, sans-serif"
        fontWeight="700" fontSize="40" fill={textColor} letterSpacing="6"
      >PROJECTS</text>

    </svg>
  );
}
