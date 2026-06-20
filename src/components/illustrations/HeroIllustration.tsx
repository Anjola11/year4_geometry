"use client";

import React from "react";
import { useDarkMode } from "@/lib/DarkModeContext";

export default function HeroIllustration() {
  const { isDark } = useDarkMode();
  const bg = isDark ? "rgba(255,255,255,0.03)" : "#FFF8F0";
  const panelBg = isDark ? "rgba(255,255,255,0.08)" : "#FFFFFF";

  return (
    <svg
      width="100%"
      viewBox="0 0 400 360"
      role="img"
      aria-label="Geometry hero illustration showing angles and shapes"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="360" rx="32" fill={bg} />

      {/* Large triangle */}
      <polygon points="200,40 340,280 60,280" fill="#FF6B6B" opacity="0.15" stroke="#FF6B6B" strokeWidth="3" />

      {/* Angle arc at base-left */}
      <path d="M80,280 A50 50 0 0 1 119 250" stroke="#FF6B6B" strokeWidth="3" fill="none" />
      <text x="92" y="268" fontFamily="Nunito, sans-serif" fontSize="14" fontWeight="bold" fill="#FF6B6B">A</text>

      {/* Right angle marker at base-right */}
      <rect x="322" y="262" width="16" height="16" fill="none" stroke="#4ECBA2" strokeWidth="3" />

      {/* Quadrilateral (parallelogram) */}
      <polygon points="60,310 140,310 170,340 90,340" fill="#5BA4CF" opacity="0.2" stroke="#5BA4CF" strokeWidth="2.5" />

      {/* Circle with angle */}
      <circle cx="310" cy="120" r="60" fill={panelBg} stroke="#B48EDB" strokeWidth="3" />
      <line x1="310" y1="120" x2="310" y2="62" stroke="#B48EDB" strokeWidth="3" />
      <line x1="310" y1="120" x2="360" y2="150" stroke="#B48EDB" strokeWidth="3" />
      <path d="M310 90 A30 30 0 0 1 335 138" stroke="#FFB347" strokeWidth="2.5" fill="none" />
      <text x="328" y="112" fontFamily="Nunito, sans-serif" fontSize="13" fontWeight="bold" fill="#FFB347">θ</text>

      {/* Label */}
      <text x="200" y="330" fontFamily="Nunito, sans-serif" fontSize="15" fontWeight="800" fill={isDark ? "#ffffff" : "#2D2D2D"} textAnchor="middle">Angles &amp; Shapes</text>
    </svg>
  );
}
