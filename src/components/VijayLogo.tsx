import React from 'react';

interface VijayLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const VijayLogo: React.FC<VijayLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  // Enhanced, larger height presets for prominent visibility
  const heights = {
    sm: 'h-11',
    md: 'h-14 sm:h-16',
    lg: 'h-18 sm:h-20',
    xl: 'h-24 sm:h-28',
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Precision Vector SVG Logo matching the uploaded official VIJAY Engineering Gear Logo */}
      <svg
        viewBox="42 28 456 250"
        className={`${heights[size]} w-auto shrink-0 drop-shadow-lg transition-transform`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vijay Engineering Works Logo"
      >
        <defs>
          {/* Enhanced Ultra-Bright Brushed Steel Gradients */}
          <linearGradient id="gearMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="15%" stopColor="#e2e8f0" />
            <stop offset="35%" stopColor="#94a3b8" />
            <stop offset="55%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#64748b" />
            <stop offset="90%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="gearToothBevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="gearInnerMetal" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="85%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Dynamic Metallic Blue Swoosh Gradient */}
          <linearGradient id="blueSwooshGrad" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="30%" stopColor="#0284c7" />
            <stop offset="70%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#0c4a6e" />
          </linearGradient>

          {/* VIJAY Lettering Blue Gradient with Specular Sheen */}
          <linearGradient id="vijayBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="15%" stopColor="#0284c7" />
            <stop offset="55%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#075985" />
          </linearGradient>

          {/* Red Accent Chevron & Underline */}
          <linearGradient id="redAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>

          {/* High-Visibility Engineering Works Text Gradient */}
          <linearGradient id="engWorksGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Specular highlights filter */}
          <filter id="metallicBevel" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.55" />
          </filter>
        </defs>

        {/* ======================================================== */}
        {/* 1. BRUSHED STEEL GEAR ARC & TEETH (LEFT SIDE)            */}
        {/* ======================================================== */}
        <g filter="url(#metallicBevel)">
          {/* Main Gear Outer Body & Prominent Teeth */}
          {/* Tooth 1 (Top-Left) */}
          <polygon points="120,40 142,32 150,56 128,64" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />
          {/* Tooth 2 */}
          <polygon points="86,64 104,50 116,74 96,86" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />
          {/* Tooth 3 */}
          <polygon points="60,100 74,82 92,98 76,116" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />
          {/* Tooth 4 (Center-Left) */}
          <polygon points="46,140 54,120 78,128 72,152" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />
          {/* Tooth 5 */}
          <polygon points="48,184 52,162 76,166 74,190" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />
          {/* Tooth 6 */}
          <polygon points="68,222 66,200 90,198 94,222" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />
          {/* Tooth 7 (Bottom-Left) */}
          <polygon points="102,254 94,234 118,226 128,246" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />
          {/* Tooth 8 (Bottom) */}
          <polygon points="148,272 136,254 160,242 172,260" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />
          {/* Tooth 9 (Bottom-Right corner) */}
          <polygon points="198,276 186,260 208,246 220,262" fill="url(#gearToothBevel)" stroke="#334155" strokeWidth="1.2" />

          {/* Curved Steel Crescent Rim */}
          <path
            d="M 120,55 
               C 50,110 50,210 130,250 
               C 170,268 220,250 255,225 
               C 215,236 170,230 140,205 
               C 95,170 95,115 145,75 
               C 185,45 250,42 330,85 
               C 355,98 375,115 375,115 
               C 375,115 340,82 290,60 
               C 230,35 160,35 120,55 Z"
            fill="url(#gearMetalGrad)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Inner Steel Bevel Line */}
          <path
            d="M 140,78 
               C 100,112 100,172 142,206 
               C 175,232 230,234 275,214
               C 225,222 175,212 152,192
               C 118,162 118,118 152,88
               C 192,58 260,55 330,95
               C 260,60 190,56 140,78 Z"
            fill="url(#gearInnerMetal)"
            opacity="0.85"
          />
        </g>

        {/* ======================================================== */}
        {/* 2. DYNAMIC BLUE ACCENT SWOOSHES                          */}
        {/* ======================================================== */}
        {/* Top Blue Swoosh Arc */}
        <path
          d="M 155,90 
             C 210,58 280,60 350,105 
             C 320,86 260,74 200,88 
             C 175,94 155,102 155,90 Z"
          fill="url(#blueSwooshGrad)"
        />

        {/* Bottom Blue Swoosh Arc */}
        <path
          d="M 150,195 
             C 195,228 260,230 320,195 
             C 270,218 205,216 165,190 Z"
          fill="url(#blueSwooshGrad)"
        />

        {/* ======================================================== */}
        {/* 3. VIJAY MAIN LETTERING WITH METALLIC BLUE SHADING       */}
        {/* ======================================================== */}
        <g filter="url(#metallicBevel)">
          {/* Letter V */}
          <path
            d="M 122,108 L 158,108 L 180,178 L 202,108 L 238,108 L 198,202 L 160,202 Z"
            fill="url(#vijayBlueGrad)"
            stroke="#0369a1"
            strokeWidth="0.8"
          />

          {/* Letter I - Blue Stem */}
          <path
            d="M 235,128 L 268,128 L 268,202 L 235,202 Z"
            fill="url(#vijayBlueGrad)"
            stroke="#0369a1"
            strokeWidth="0.8"
          />

          {/* Letter I - Distinctive Red Parallelogram/Chevron Cap on top */}
          <polygon
            points="233,122 254,106 270,106 249,122"
            fill="url(#redAccentGrad)"
            stroke="#991b1b"
            strokeWidth="0.8"
          />

          {/* Letter J */}
          <path
            d="M 288,108 L 320,108 L 320,172 C 320,194 308,204 286,204 C 274,204 264,200 258,194 L 270,174 C 274,178 280,182 288,182 C 294,182 297,178 297,170 L 297,108 Z"
            fill="url(#vijayBlueGrad)"
            stroke="#0369a1"
            strokeWidth="0.8"
          />

          {/* Letter A */}
          <path
            d="M 334,108 L 368,108 L 396,202 L 366,202 L 360,180 L 338,180 L 332,202 L 306,202 Z M 343,158 L 355,158 L 349,132 Z"
            fill="url(#vijayBlueGrad)"
            stroke="#0369a1"
            strokeWidth="0.8"
          />

          {/* Letter Y */}
          <path
            d="M 390,108 L 422,108 L 442,150 L 462,108 L 494,108 L 458,166 L 458,202 L 426,202 L 426,166 Z"
            fill="url(#vijayBlueGrad)"
            stroke="#0369a1"
            strokeWidth="0.8"
          />
        </g>

        {/* ======================================================== */}
        {/* 4. TAPERED RED HORIZONTAL ACCENT LINE                    */}
        {/* ======================================================== */}
        <path
          d="M 205,211 L 494,211 L 494,215.5 L 235,214.5 Z"
          fill="url(#redAccentGrad)"
        />

        {/* ======================================================== */}
        {/* 5. "ENGINEERING WORKS" SUBTITLE (HIGH VISIBILITY & FIT) */}
        {/* ======================================================== */}
        <text
          x="318"
          y="244"
          textAnchor="middle"
          textLength="348"
          lengthAdjust="spacing"
          fill="url(#engWorksGrad)"
          fontSize="24"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          filter="url(#metallicBevel)"
        >
          ENGINEERING WORKS
        </text>
      </svg>
    </div>
  );
};
