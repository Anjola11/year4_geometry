"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faGraduationCap, faChevronDown, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { LessonData } from "@/lib/types";
import HeroIllustration from "@/components/illustrations/HeroIllustration";

interface HeroSectionProps {
  data: LessonData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blossom-cream dark:bg-blossom-cream relative overflow-hidden px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-[slideUp_0.6s_ease-out]">
          <div className="inline-flex items-center gap-2 bg-blossom-bloom text-white px-4 py-1.5 rounded-full font-nunito font-bold text-sm shadow-md">
            <FontAwesomeIcon icon={faGraduationCap} />
            {data.year} &middot; Mathematics {data.country !== "United Kingdom" ? "" : "🇬🇧"}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-nunito font-black text-blossom-ink">
            {data.topic.split(":").map((part, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-blossom-petal">: </span>}
                {part}
              </React.Fragment>
            ))}
          </h1>
          
          <p className="font-dm-sans text-xl text-blossom-charcoal">
            {data.heroHook}
          </p>
          
          <div className="bg-blossom-cloud dark:bg-blossom-cloud rounded-3xl p-6 shadow-blossom mt-8">
            <h3 className="font-nunito font-bold text-lg mb-4 text-blossom-ink flex items-center gap-2">
              <FontAwesomeIcon icon={faBullseye} className="text-blossom-petal" />
              What you'll learn today
            </h3>
            <ul className="space-y-3">
              {data.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 font-dm-sans text-blossom-charcoal">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blossom-leaf mt-1" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-8 text-center md:text-left">
            <FontAwesomeIcon icon={faChevronDown} className="text-blossom-bloom text-2xl animate-bounce" />
          </div>
        </div>
        
        <div className="hidden md:flex justify-center animate-[slideUp_0.8s_ease-out_0.2s_both]">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
