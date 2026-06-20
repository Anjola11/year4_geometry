import React from "react";

export default function FooterSection({ topic, year }: { topic: string; year: string }) {
  return (
    <footer className="bg-blossom-ink py-10 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="logo" role="img">
          <circle cx="20" cy="20" r="6" fill="#FFB347" />
          {[0,72,144,216,288].map((deg, i) => (
            <ellipse key={i} cx="20" cy="8" rx="5" ry="8" fill={i % 2 === 0 ? "#FF6B6B" : "#FFB347"} transform={`rotate(${deg} 20 20)`} opacity="0.85" />
          ))}
        </svg>
        <p className="font-dm-sans text-sm text-blossom-petal">Growing Brilliant Minds, One Lesson at a Time.</p>
        <div className="h-px w-24 bg-white/10" />
        <p className="font-dm-sans text-xs text-blossom-charcoal">{topic} · {year} · United Kingdom</p>
      </div>
    </footer>
  );
}
