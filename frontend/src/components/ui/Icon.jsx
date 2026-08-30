/**
 * Single-source icon set for the site.
 * Every glyph is drawn on the same 24x24 grid with a 1.5 stroke and round
 * caps/joins, so icons stay optically consistent at any size.
 */

const paths = {
  /* ---------- What we do ---------- */
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-6" />
      <path d="M4.5 11.5v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-6" />
    </>
  ),
  sliders: (
    <>
      <path d="M3.5 7h9.5M17 7h3.5" />
      <circle cx="15" cy="7" r="2" />
      <path d="M3.5 12h3.5M11 12h9.5" />
      <circle cx="9" cy="12" r="2" />
      <path d="M3.5 17h4.5M12 17h8.5" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  hub: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="4.6" cy="5.2" r="1.8" />
      <circle cx="19.4" cy="5.2" r="1.8" />
      <circle cx="4.6" cy="18.8" r="1.8" />
      <circle cx="19.4" cy="18.8" r="1.8" />
      <path d="M5.9 6.5 9.9 9.9M18.1 6.5 14.1 9.9M5.9 17.5l4-3.4M18.1 17.5l-4-3.4" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6.8 20.5v-4.8M11 20.5v-9.2M15.2 20.5v-3.4M19.4 20.5v-12" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.4 19.2H7.1a4.6 4.6 0 0 1-.9-9.11 6.1 6.1 0 0 1 11.72 1.3 4.06 4.06 0 0 1-.52 7.81Z" />
      <path d="M12 16.4v-5.2M9.9 13.1 12 11l2.1 2.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 4.6 5.9v5.3c0 4.55 3.06 8.8 7.4 9.98 4.34-1.18 7.4-5.43 7.4-9.98V5.9L12 2.8Z" />
      <path d="m8.9 11.7 2.2 2.2 4.1-4.2" />
    </>
  ),

  /* ---------- How we work ---------- */
  signal: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M8.6 8.6a4.8 4.8 0 0 0 0 6.8M15.4 8.6a4.8 4.8 0 0 1 0 6.8" />
      <path d="M5.8 5.8a8.8 8.8 0 0 0 0 12.4M18.2 5.8a8.8 8.8 0 0 1 0 12.4" />
    </>
  ),
  funnel: (
    <>
      <path d="M3.4 5.2h17.2l-6.7 7.8v6.1l-3.8 1.9V13L3.4 5.2Z" />
    </>
  ),
  scan: (
    <>
      <circle cx="10.8" cy="10.8" r="7.1" />
      <path d="m16 16 4.4 4.4" />
      <path d="M8.4 12.6v-1.9M10.8 12.6V8.9M13.2 12.6v-3" />
    </>
  ),
  dashboard: (
    <>
      <rect x="2.8" y="3.8" width="18.4" height="13.4" rx="2" />
      <path d="M8.2 21.2h7.6M12 17.2v4" />
      <path d="M7.4 13.6v-3M11.2 13.6V8M15 13.6v-4.6" />
    </>
  ),
  refresh: (
    <>
      <path d="M20.3 12a8.3 8.3 0 1 1-2.43-5.87" />
      <path d="M20.3 3.8v5h-5" />
    </>
  ),

  /* ---------- Solutions ---------- */
  code: (
    <>
      <path d="m8.2 16.8-4.8-4.8 4.8-4.8" />
      <path d="m15.8 7.2 4.8 4.8-4.8 4.8" />
      <path d="m13.6 4-3.2 16" />
    </>
  ),
  mobile: (
    <>
      <rect x="6.2" y="2.4" width="11.6" height="19.2" rx="2.6" />
      <path d="M10.8 18.6h2.4" />
      <path d="M6.2 6.4h11.6" />
    </>
  ),
  chip: (
    <>
      <rect x="7.2" y="7.2" width="9.6" height="9.6" rx="2" />
      <circle cx="12" cy="12" r="1.7" />
      <path d="M10 3.4v3.8M14 3.4v3.8M10 16.8v3.8M14 16.8v3.8M3.4 10h3.8M3.4 14h3.8M16.8 10h3.8M16.8 14h3.8" />
    </>
  ),
  server: (
    <>
      <rect x="2.8" y="3.6" width="18.4" height="6.2" rx="1.8" />
      <rect x="2.8" y="14.2" width="18.4" height="6.2" rx="1.8" />
      <path d="M6.6 6.7h.01M6.6 17.3h.01" />
      <path d="M10.6 6.7h4.6M10.6 17.3h4.6" />
    </>
  ),
  transform: (
    <>
      <path d="M3.6 8.4h13.2M13.2 4.8l3.6 3.6-3.6 3.6" />
      <path d="M20.4 15.6H7.2M10.8 12l-3.6 3.6 3.6 3.6" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.9 6.3a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l3.3-3.3a6 6 0 0 1-7.9 7.9l-6.8 6.8a2.1 2.1 0 1 1-3-3l6.8-6.8a6 6 0 0 1 7.9-7.9l-3.1 3.5Z" />
    </>
  ),

  /* ---------- Utility ---------- */
  arrowRight: <path d="M4.5 12h15M13.2 5.7 19.5 12l-6.3 6.3" />,
  arrowUpRight: <path d="M7 17 17 7M8.4 7H17v8.6" />,
  mail: (
    <>
      <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2" />
      <path d="m3.6 6.6 8.4 6 8.4-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.4s7-5.6 7-11.1a7 7 0 1 0-14 0c0 5.5 7 11.1 7 11.1Z" />
      <circle cx="12" cy="10.1" r="2.6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M2.8 12h18.4" />
      <path d="M12 2.8a14 14 0 0 1 0 18.4 14 14 0 0 1 0-18.4Z" />
    </>
  ),
  plus: <path d="M12 5.2v13.6M5.2 12h13.6" />,
  check: <path d="m4.8 12.6 4.8 4.8L19.2 7" />,
  spark: (
    <>
      <path d="M12 3.2 13.9 9l5.9 1.9-5.9 1.9L12 18.8 10.1 12.8 4.2 10.9 10.1 9 12 3.2Z" />
    </>
  ),
}

export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.5, ...rest }) {
  const glyph = paths[name]
  if (!glyph) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  )
}
