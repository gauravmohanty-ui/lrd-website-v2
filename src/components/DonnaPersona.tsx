/**
 * Donna AI Persona — animated 3D-style illustration
 * A stylized feminine silhouette with AI visual effects
 */
const DonnaPersona = () => {
  return (
    <div className="relative w-64 h-80 md:w-80 md:h-[400px] mx-auto" style={{ perspective: "1000px" }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 40%, rgba(31,110,140,0.2) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Body silhouette — stylized feminine form */}
      <svg
        viewBox="0 0 200 320"
        className="absolute inset-0 w-full h-full"
        style={{ filter: "drop-shadow(0 0 20px rgba(31,110,140,0.4))" }}
      >
        <defs>
          {/* Body gradient */}
          <linearGradient id="donna-body" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="rgba(31,110,140,0.9)" />
            <stop offset="40%" stopColor="rgba(15,55,80,0.95)" />
            <stop offset="100%" stopColor="rgba(5,20,40,0.98)" />
          </linearGradient>

          {/* Head glow */}
          <radialGradient id="donna-head-glow" cx="0.5" cy="0.4" r="0.5">
            <stop offset="0%" stopColor="rgba(92,196,208,0.6)" />
            <stop offset="60%" stopColor="rgba(31,110,140,0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Circuit pattern */}
          <pattern id="donna-circuits" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(31,110,140,0.15)" strokeWidth="0.5" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(31,110,140,0.15)" strokeWidth="0.5" />
            <circle cx="10" cy="10" r="1" fill="rgba(31,110,140,0.3)" />
          </pattern>

          {/* Scanning line animation */}
          <linearGradient id="donna-scan-line" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(31,110,140,0.6)" />
            <stop offset="55%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Head — circle */}
        <circle cx="100" cy="52" r="32" fill="url(#donna-body)" stroke="rgba(31,110,140,0.5)" strokeWidth="1.5" />
        {/* Head inner glow */}
        <circle cx="100" cy="52" r="28" fill="url(#donna-head-glow)" opacity="0.5" />

        {/* Eyes — glowing AI eyes */}
        <ellipse cx="88" cy="50" rx="4" ry="2.5" fill="rgba(92,196,208,0.9)">
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="112" cy="50" rx="4" ry="2.5" fill="rgba(92,196,208,0.9)">
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Eye glow halos */}
        <ellipse cx="88" cy="50" rx="7" ry="5" fill="rgba(92,196,208,0.15)" />
        <ellipse cx="112" cy="50" rx="7" ry="5" fill="rgba(92,196,208,0.15)" />

        {/* Neck */}
        <rect x="92" y="82" width="16" height="16" rx="4" fill="url(#donna-body)" />

        {/* Shoulders + Torso — feminine shape */}
        <path
          d="M 50 115 Q 55 95 92 96 L 108 96 Q 145 95 150 115 L 145 200 Q 140 220 130 225 L 120 280 Q 115 300 100 300 Q 85 300 80 280 L 70 225 Q 60 220 55 200 Z"
          fill="url(#donna-body)"
          stroke="rgba(31,110,140,0.3)"
          strokeWidth="1"
        />

        {/* Circuit overlay on body */}
        <path
          d="M 50 115 Q 55 95 92 96 L 108 96 Q 145 95 150 115 L 145 200 Q 140 220 130 225 L 120 280 Q 115 300 100 300 Q 85 300 80 280 L 70 225 Q 60 220 55 200 Z"
          fill="url(#donna-circuits)"
          opacity="0.6"
        />

        {/* Scanning sweep line */}
        <rect x="45" y="0" width="110" height="320" fill="url(#donna-scan-line)" opacity="0.4">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 -320;0 320"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Data flow lines — flowing up from body */}
        {[65, 80, 100, 120, 135].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="300"
            x2={x}
            y2="100"
            stroke="rgba(31,110,140,0.15)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-24"
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Floating data particles */}
        {[
          { cx: 70, delay: 0 },
          { cx: 90, delay: 0.5 },
          { cx: 110, delay: 1 },
          { cx: 130, delay: 1.5 },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} r="1.5" fill="rgba(92,196,208,0.8)">
            <animate
              attributeName="cy"
              values="250;80;250"
              dur="5s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur="5s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* "D" on chest — identity mark */}
        <text
          x="100"
          y="165"
          textAnchor="middle"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="28"
          fill="rgba(92,196,208,0.7)"
          style={{ filter: "drop-shadow(0 0 8px rgba(92,196,208,0.5))" }}
        >
          D
        </text>

        {/* Neural network nodes around head */}
        {[
          { cx: 60, cy: 35 },
          { cx: 140, cy: 35 },
          { cx: 55, cy: 65 },
          { cx: 145, cy: 65 },
          { cx: 100, cy: 15 },
        ].map((node, i) => (
          <g key={i}>
            <line
              x1={node.cx}
              y1={node.cy}
              x2="100"
              y2="52"
              stroke="rgba(31,110,140,0.2)"
              strokeWidth="0.5"
            />
            <circle cx={node.cx} cy={node.cy} r="2" fill="rgba(92,196,208,0.5)">
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur={`${2 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Floating holographic rings */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "25%",
          width: "120px",
          height: "120px",
          border: "1px solid rgba(31,110,140,0.2)",
          borderRadius: "50%",
          animation: "donna-orbit 8s linear infinite",
          transformStyle: "preserve-3d",
          transform: "rotateX(75deg)",
        }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "22%",
          width: "140px",
          height: "140px",
          border: "1px solid rgba(31,110,140,0.1)",
          borderRadius: "50%",
          animation: "donna-orbit 12s linear infinite reverse",
          transformStyle: "preserve-3d",
          transform: "rotateX(70deg) rotateZ(30deg)",
        }}
      />
    </div>
  );
};

export default DonnaPersona;
