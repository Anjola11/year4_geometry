"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faGlobe, faChalkboardTeacher, faPencilRuler, faHome, faStar, faBookOpen, faPen } from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, React.ReactNode> = {
  "fa-map": <FontAwesomeIcon icon={faMap} />,
  "fa-globe": <FontAwesomeIcon icon={faGlobe} />,
  "fa-chalkboard-teacher": <FontAwesomeIcon icon={faChalkboardTeacher} />,
  "fa-pencil-ruler": <FontAwesomeIcon icon={faPencilRuler} />,
  "fa-home": <FontAwesomeIcon icon={faHome} />,
  "fa-star": <FontAwesomeIcon icon={faStar} />,
  "fa-book-open": <FontAwesomeIcon icon={faBookOpen} />,
  "fa-pen": <FontAwesomeIcon icon={faPen} />,
};

export default function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="h-px w-24 bg-blossom-bloom/30" />
      <div className="w-12 h-12 rounded-full bg-blossom-bloom flex items-center justify-center text-white text-xl shadow-md">
        {iconMap[icon] ?? <FontAwesomeIcon icon={faMap} />}
      </div>
      <h2 className="font-nunito font-extrabold text-2xl text-blossom-ink text-center">{title}</h2>
      {/* Squiggly SVG underline */}
      <svg width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6 Q15 2 28 6 Q41 10 54 6 Q67 2 80 6 Q93 10 106 6 Q113 3 118 6" stroke="#FFB347" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}
