"use client";

import React from "react";
import { useDarkMode } from "@/lib/DarkModeContext";

export default function StageIllustration({ stageIndex, accentColor }: { stageIndex: number; accentColor: string }) {
  const { isDark } = useDarkMode();
  const bg = isDark ? "rgba(255,255,255,0.05)" : "#F0EBE3";
  const stroke = isDark ? "rgba(255,255,255,0.3)" : "#2D2D2D";

  const accentFills: Record<string, string> = {
    bloom: "#FF6B6B",
    sky: "#5BA4CF",
    leaf: "#4ECBA2",
    lavender: "#B48EDB",
  };
  const accent = accentFills[accentColor] || "#FF6B6B";

  // Different SVG per stage
  const shapes = [
    // Stage 0: Two lines meeting at an angle
    <g key={0}>
      <line x1="80" y1="130" x2="150" y2="80" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      <line x1="80" y1="130" x2="160" y2="130" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
      <path d="M105 130 A25 25 0 0 1 97 109" stroke={accent} strokeWidth="3" fill="none" />
      <text x="110" y="120" fontFamily="sans-serif" fontSize="14" fill={accent}>θ</text>
    </g>,
    // Stage 1: Right angle square marker
    <g key={1}>
      <rect x="60" y="60" width="100" height="100" rx="4" fill="none" stroke={accent} strokeWidth="5" />
      <polyline points="100,130 100,100 130,100" stroke={accent} strokeWidth="4" fill="none" />
      <rect x="100" y="100" width="12" height="12" fill="none" stroke={accent} strokeWidth="3" />
    </g>,
    // Stage 2: Three angles (acute, right, obtuse)
    <g key={2}>
      <line x1="50" y1="140" x2="80" y2="70" stroke="#FF6B6B" strokeWidth="5" strokeLinecap="round" />
      <line x1="50" y1="140" x2="110" y2="140" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      <line x1="120" y1="140" x2="140" y2="90" stroke="#5BA4CF" strokeWidth="5" strokeLinecap="round" />
      <line x1="120" y1="140" x2="175" y2="140" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      <rect x="140" y="120" width="14" height="14" fill="none" stroke="#4ECBA2" strokeWidth="3" />
    </g>,
    // Stage 3: Angled lines sorted by size
    <g key={3}>
      {[30,60,90,120].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x2 = 120 + Math.cos(Math.PI - rad) * 70;
        const y2 = 130 + Math.sin(Math.PI - rad) * (-70);
        return (
          <g key={i}>
            <line x1="120" y1="130" x2={x2} y2={y2} stroke={accent} strokeWidth="4" strokeLinecap="round" />
            <line x1="120" y1="130" x2="180" y2="130" stroke={stroke} strokeWidth="2" />
          </g>
        );
      })}
    </g>,
  ];

  return (
    <div className="rounded-3xl overflow-hidden shadow-md" style={{ background: bg }}>
      <svg width="240" height="200" viewBox="0 0 240 200" role="img" aria-label={`Stage ${stageIndex + 1} illustration`} xmlns="http://www.w3.org/2000/svg">
        {shapes[stageIndex % shapes.length]}
      </svg>
      <p className="font-dm-sans italic text-xs text-center pb-3 text-blossom-charcoal px-3">
        Stage {stageIndex + 1} visual
      </p>
    </div>
  );
}
