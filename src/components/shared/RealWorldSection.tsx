"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { LessonData } from "@/lib/types";
import SectionHeader from "@/components/shared/SectionHeader";

function renderText(text: string): React.ReactNode {
  const regex = /\{\{latex:\s*(.*?)\s*\}\}/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  const { InlineMath } = require("react-katex");
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(<React.Fragment key={key++}>{text.substring(lastIndex, match.index)}</React.Fragment>);
    parts.push(<InlineMath key={key++} math={match[1]} />);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(<React.Fragment key={key++}>{text.substring(lastIndex)}</React.Fragment>);
  return <>{parts}</>;
}

export default function RealWorldSection({ data }: { data: LessonData }) {
  const { realWorldScenario } = data;
  return (
    <section className="bg-blossom-mist dark:bg-blossom-mist py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon="fa-globe" title="🌍 Where Do We See This?" />
        <div className="bg-blossom-cloud dark:bg-blossom-cloud rounded-3xl p-8 shadow-md mt-4">
          <h3 className="font-nunito font-extrabold text-2xl text-blossom-ink mb-4">{realWorldScenario.title}</h3>
          <div className="font-dm-sans text-blossom-charcoal leading-relaxed space-y-3 mb-6">
            {realWorldScenario.scenarioDescription.split("\n\n").map((p, i) => (
              <p key={i}>{renderText(p)}</p>
            ))}
          </div>
          <div className="bg-blossom-bloom/10 rounded-2xl p-5 flex items-start gap-3">
            <FontAwesomeIcon icon={faCommentDots} className="text-blossom-bloom mt-1 flex-shrink-0 text-lg" />
            <div>
              <strong className="font-nunito font-bold text-blossom-bloom block mb-1">Think about it:</strong>
              <p className="font-dm-sans text-blossom-ink">{realWorldScenario.thinkAboutItPrompt}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
