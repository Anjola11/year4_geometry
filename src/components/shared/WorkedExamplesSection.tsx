"use client";

import React from "react";
import { BlockMath } from "react-katex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { LessonData } from "@/lib/types";
import SectionHeader from "@/components/shared/SectionHeader";

const difficultyColors: Record<string, string> = {
  Starter: "bg-blossom-leaf/20 text-blossom-leaf",
  "Build Up": "bg-blossom-sky/20 text-blossom-sky",
  Challenge: "bg-blossom-lavender/20 text-blossom-lavender",
};

export default function WorkedExamplesSection({ data }: { data: LessonData }) {
  return (
    <section className="bg-blossom-cream dark:bg-blossom-cream py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon="fa-chalkboard-teacher" title="✏️ Worked Examples" />
        <p className="font-dm-sans text-blossom-charcoal text-center mb-8">
          Let&apos;s work through these together. Watch each step carefully.
        </p>
        <div className="space-y-6">
          {data.workedExamples.map((ex, i) => (
            <div key={i} className="bg-blossom-cloud rounded-3xl border-t-4 border-blossom-sky overflow-hidden shadow-md transition-all duration-500">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-full bg-blossom-sky text-white font-nunito font-black text-xl flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="font-nunito font-bold text-xl text-blossom-ink flex-1">{ex.questionText}</p>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${difficultyColors[ex.difficulty]}`}>{ex.difficulty}</span>
                </div>
                <div className="space-y-4 pl-14">
                  {ex.steps.map((step, j) => (
                    <div key={j} className="flex gap-4 items-start" style={{ animationDelay: `${j * 100}ms` }}>
                      <span className="w-7 h-7 rounded-full bg-blossom-sky/20 text-blossom-sky font-bold text-sm flex items-center justify-center flex-shrink-0 mt-1">{j + 1}</span>
                      <div className="flex-1">
                        <p className="font-nunito font-bold text-blossom-ink mb-1">{step.title}</p>
                        <p className="font-dm-sans text-sm text-blossom-charcoal mb-2">{step.explanation}</p>
                        {step.working && <BlockMath math={step.working} />}
                        {step.why && (
                          <div className="bg-blossom-sky/10 rounded-lg p-3 mt-2 text-sm font-dm-sans text-blossom-charcoal">
                            <strong>Why?</strong> {step.why}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="bg-blossom-correct rounded-2xl px-5 py-3 flex items-center gap-3 mt-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blossom-leaf text-lg" />
                    <span className="font-nunito font-extrabold text-blossom-ink">Answer:</span>
                    <BlockMath math={ex.answer} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
