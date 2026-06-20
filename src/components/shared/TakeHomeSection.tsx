"use client";

import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookOpen, faPen, faMagic } from "@fortawesome/free-solid-svg-icons";
import { LessonData } from "@/lib/types";
import SectionHeader from "@/components/shared/SectionHeader";

function renderText(text: string): React.ReactNode {
  const regex = /\{\{latex:\s*(.*?)\s*\}\}/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0; let match; let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(<React.Fragment key={key++}>{text.substring(lastIndex, match.index)}</React.Fragment>);
    parts.push(<InlineMath key={key++} math={match[1]} />);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(<React.Fragment key={key++}>{text.substring(lastIndex)}</React.Fragment>);
  return <>{parts}</>;
}

const diffColors: Record<string, string> = {
  Starter: "bg-blossom-leaf/20 text-blossom-leaf",
  "Build Up": "bg-blossom-sky/20 text-blossom-sky",
  Challenge: "bg-blossom-lavender/20 text-blossom-lavender",
};

export default function TakeHomeSection({ data }: { data: LessonData }) {
  return (
    <section className="bg-blossom-cream dark:bg-blossom-cream py-16 px-6 relative overflow-hidden">
      {/* Blob decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-80 bg-blossom-lavender/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader icon="fa-home" title="🏠 Take Home" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Key Rules */}
          <div className="bg-blossom-lavender/15 border-2 border-dashed border-blossom-lavender rounded-3xl p-6">
            <h3 className="font-nunito font-extrabold text-blossom-lavender flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faStar} /> Key Rules to Remember
            </h3>
            <ul className="space-y-4">
              {data.keyRules.map((rule, i) => (
                <li key={i}>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blossom-lavender flex-shrink-0 mt-0.5" />
                    <p className="font-dm-sans text-sm text-blossom-ink">{rule.statement}</p>
                  </div>
                  {rule.latex && <div className="mt-1 pl-7"><BlockMath math={rule.latex} /></div>}
                </li>
              ))}
            </ul>
            {data.mnemonicSummary && (
              <div className="mt-4 bg-blossom-trick rounded-2xl p-4 border border-blossom-trickborder">
                <p className="font-nunito font-bold text-blossom-petal flex items-center gap-1 text-sm mb-1">
                  <FontAwesomeIcon icon={faMagic} /> 🪄 Remember:
                </p>
                <p className="font-nunito font-bold text-blossom-ink text-sm whitespace-pre-line">{data.mnemonicSummary.content}</p>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-blossom-sky/10 rounded-3xl p-6">
            <h3 className="font-nunito font-extrabold text-blossom-sky flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faBookOpen} /> What We Covered Today
            </h3>
            <ul className="space-y-3">
              {data.summary.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-dm-sans text-sm text-blossom-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-blossom-sky mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Homework */}
          <div className="bg-blossom-petal/15 border-2 border-dashed border-blossom-petal rounded-3xl p-6 relative">
            <h3 className="font-nunito font-extrabold text-blossom-petal flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faPen} /> Homework / Practice
            </h3>
            <ol className="space-y-4">
              {data.homework.map((hw, i) => (
                <li key={i}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${diffColors[hw.difficulty]} mb-1 inline-block`}>{hw.difficulty}</span>
                  <p className="font-dm-sans text-sm text-blossom-ink">{renderText(hw.questionText)}</p>
                </li>
              ))}
            </ol>
            <p className="font-dm-sans italic text-blossom-charcoal text-xs mt-6">Bring your working to the next session!</p>
            {/* Sticker */}
            <svg className="absolute bottom-4 right-4" width="36" height="36" viewBox="0 0 36 36" aria-label="star sticker" role="img">
              <path d="M18 2l4 8 9 1.5-6.5 6 1.5 9L18 22l-8 4.5 1.5-9L5 11.5 14 10z" fill="#FFB347" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
