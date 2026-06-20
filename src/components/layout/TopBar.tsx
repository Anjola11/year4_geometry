"use client";

import React, { useEffect, useRef } from "react";
import { useDarkMode } from "@/lib/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function TopBar({ title }: { title: string }) {
  const { isDark, toggleDarkMode } = useDarkMode();
  const progressRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? Math.round((scrolled / max) * 100) : 0;
      if (progressRef.current) progressRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blossom-cloud/90 backdrop-blur-md border-b border-blossom-mist shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo" role="img">
            <circle cx="20" cy="20" r="6" fill="#FFB347" />
            {[0,72,144,216,288].map((deg, i) => (
              <ellipse key={i} cx="20" cy="8" rx="5" ry="8" fill={i % 2 === 0 ? "#FF6B6B" : "#FFB347"} transform={`rotate(${deg} 20 20)`} opacity="0.85" />
            ))}
          </svg>
        </div>

        {/* Title */}
        <p className="font-nunito font-bold text-blossom-ink text-sm md:text-base flex-1 text-center truncate">{title}</p>

        {/* Progress + dark mode */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden sm:flex items-center gap-2 bg-blossom-mist rounded-full px-3 py-1">
            <div className="w-24 h-2 bg-blossom-neutral rounded-full overflow-hidden">
              <div ref={progressRef} className="h-full bg-blossom-bloom rounded-full transition-all duration-300" style={{ width: "0%" }} />
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full bg-blossom-mist flex items-center justify-center text-blossom-ink hover:bg-blossom-neutral transition-colors"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-blossom-petal" />
          </button>
        </div>
      </div>
    </header>
  );
}
