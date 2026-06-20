"use client";

import React, { useState } from "react";
import { ConceptStage, MiniPracticeQuestion } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faQuoteLeft, faLightbulb, faMagic, faMusic, faCheckCircle, faTimesCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { InlineMath, BlockMath } from "react-katex";
import StageIllustration from "@/components/illustrations/StageIllustration";

const accentBg: Record<string, string> = {
  bloom: "bg-blossom-bloom",
  sky: "bg-blossom-sky",
  leaf: "bg-blossom-leaf",
  lavender: "bg-blossom-lavender",
};

function renderText(text: string): React.ReactNode {
  const regex = /\{\{latex:\s*(.*?)\s*\}\}/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      // Handle **bold** markdown
      const segment = text.substring(lastIndex, match.index);
      parts.push(<React.Fragment key={key++}>{parseBold(segment)}</React.Fragment>);
    }
    parts.push(<InlineMath key={key++} math={match[1]} />);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(<React.Fragment key={key++}>{parseBold(text.substring(lastIndex))}</React.Fragment>);
  }
  return parts.length > 0 ? <>{parts}</> : <>{parseBold(text)}</>;
}

function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

interface MiniPracticeProps {
  questions: MiniPracticeQuestion[];
  stageIndex: number;
}

function MiniPractice({ questions, stageIndex }: MiniPracticeProps) {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const handleSelect = (qIndex: number, key: string) => {
    if (revealed[qIndex]) return;
    setSelected((prev) => ({ ...prev, [qIndex]: key }));
    setRevealed((prev) => ({ ...prev, [qIndex]: true }));
  };

  return (
    <div className="bg-blossom-mist dark:bg-blossom-mist py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-nunito font-extrabold text-2xl text-blossom-ink mb-1">
          🔍 Quick Check — Stage {stageIndex + 1}
        </p>
        <p className="font-dm-sans italic text-blossom-charcoal text-sm mb-6">
          Try these before we move on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((q, qIndex) => {
            const isRevealed = revealed[qIndex];
            return (
              <div key={qIndex} className="bg-blossom-cloud dark:bg-blossom-cloud rounded-2xl p-6 shadow-md relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-blossom-bloom text-white font-nunito font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {qIndex + 1}
                  </span>
                  <p className="font-nunito font-bold text-blossom-ink text-base">{renderText(q.questionText)}</p>
                </div>
                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isSelected = selected[qIndex] === opt.key;
                    const isCorrect = opt.key === q.correctKey;
                    let cardClass = "cursor-pointer rounded-xl p-3 border-2 transition-all duration-150 font-dm-sans text-sm flex items-center gap-2 ";
                    if (!isRevealed) {
                      cardClass += isSelected
                        ? "bg-sky-100 border-blossom-sky scale-[1.03]"
                        : "bg-blossom-neutral border-transparent hover:border-blossom-sky";
                    } else {
                      if (isCorrect) cardClass += "bg-blossom-correct border-blossom-leaf ";
                      else if (isSelected && !isCorrect) cardClass += "bg-blossom-wrong border-blossom-bloom ";
                      else cardClass += "bg-blossom-neutral border-transparent opacity-50 ";
                    }
                    return (
                      <div key={opt.key} className={cardClass} onClick={() => handleSelect(qIndex, opt.key)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSelect(qIndex, opt.key)}>
                        <span className="w-6 h-6 rounded-full bg-blossom-bloom/20 text-blossom-bloom font-bold text-xs flex items-center justify-center flex-shrink-0">{opt.key}</span>
                        {renderText(opt.text)}
                        {isRevealed && isCorrect && <FontAwesomeIcon icon={faCheckCircle} className="text-blossom-leaf ml-auto" />}
                        {isRevealed && isSelected && !isCorrect && <FontAwesomeIcon icon={faTimesCircle} className="text-blossom-bloom ml-auto" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ConceptStageSection({ stage, totalStages }: { stage: ConceptStage; totalStages?: number }) {
  const bg = accentBg[stage.accentColor] || accentBg.bloom;

  return (
    <div id={`stage-${stage.stageNumber}`} className="w-full">
      {/* Stage Header Banner */}
      <div className={`${bg} w-full py-10 px-6`}>
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          <span className="self-start bg-white/20 text-white font-nunito font-bold text-sm px-4 py-1 rounded-full">
            Stage {stage.stageNumber}{totalStages ? ` of ${totalStages}` : ""}
          </span>
          <h2 className="font-nunito font-black text-4xl text-white">{stage.stageName}</h2>
        </div>
      </div>

      {/* Concept Intro */}
      <div className="bg-blossom-cream dark:bg-blossom-cream py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="bg-blossom-cloud dark:bg-blossom-cloud rounded-3xl p-8 shadow-md">
              <div className="font-dm-sans text-base leading-relaxed text-blossom-ink space-y-3">
                {stage.explanation.split("\n\n").map((para, i) => (
                  <p key={i}>{renderText(para)}</p>
                ))}
              </div>
            </div>

            {stage.definition && (
              <div className="border-l-4 border-blossom-lavender bg-blossom-lavender/10 rounded-r-2xl p-5 flex gap-3">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-blossom-lavender mt-1 flex-shrink-0" />
                <div>
                  <p className="font-nunito font-extrabold text-blossom-lavender text-sm mb-1">Definition</p>
                  <p className="font-dm-sans text-blossom-ink">{renderText(stage.definition)}</p>
                </div>
              </div>
            )}

            {stage.watchOut && (
              <div className="border-l-4 border-blossom-warningborder bg-blossom-warning rounded-r-2xl p-5">
                <p className="font-nunito font-extrabold text-blossom-petal flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faExclamationTriangle} /> ⚠️ Watch Out!
                </p>
                <p className="font-dm-sans text-blossom-ink text-sm">{renderText(stage.watchOut.warning)}</p>
                {stage.watchOut.wrongExample && stage.watchOut.rightExample && (
                  <div className="flex gap-3 mt-3 flex-wrap">
                    <div className="bg-blossom-wrong rounded-xl px-4 py-2 flex items-center gap-2 text-sm">
                      <span className="font-bold">❌ Wrong:</span>
                      <InlineMath math={stage.watchOut.wrongExample} />
                    </div>
                    <div className="bg-blossom-correct rounded-xl px-4 py-2 flex items-center gap-2 text-sm">
                      <span className="font-bold">✓ Right:</span>
                      <InlineMath math={stage.watchOut.rightExample} />
                    </div>
                  </div>
                )}
              </div>
            )}

            {stage.realWorldCallout && (
              <div className="bg-blossom-petal/15 rounded-2xl p-5 flex gap-3 items-start">
                <FontAwesomeIcon icon={faLightbulb} className="text-blossom-petal mt-1 flex-shrink-0" />
                <p className="font-dm-sans text-blossom-ink text-sm">
                  <strong>In Real Life: </strong>{renderText(stage.realWorldCallout)}
                </p>
              </div>
            )}

            {stage.steps && stage.steps.length > 0 && (
              <div className="space-y-3">
                {stage.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start bg-blossom-cloud rounded-2xl p-4 shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
                    <span className="w-8 h-8 rounded-full bg-blossom-bloom text-white font-nunito font-bold text-sm flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <div>
                      <p className="font-nunito font-bold text-blossom-ink">{step.title}</p>
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
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <StageIllustration stageIndex={stage.stageNumber - 1} accentColor={stage.accentColor} />
          </div>
        </div>
      </div>

      {/* Mnemonic Section */}
      {stage.mnemonic && (
        <div className="bg-blossom-cream dark:bg-blossom-cream pb-12 px-6">
          <div className="max-w-4xl mx-auto border-2 border-dashed border-blossom-trickborder bg-blossom-trick rounded-3xl p-8">
            <p className="font-nunito font-extrabold text-blossom-petal flex items-center gap-2 mb-4 text-xl">
              <FontAwesomeIcon icon={faMagic} /> 🪄 Remember It With a Trick!
            </p>
            {stage.mnemonic.type === "rhyme" && (
              <div className="mb-6">
                <FontAwesomeIcon icon={faMusic} className="text-blossom-lavender mr-2" />
                {stage.mnemonic.content.split("\n").map((line, i) => (
                  <p key={i} className="font-nunito font-extrabold text-xl text-blossom-ink leading-loose pl-4">{line}</p>
                ))}
              </div>
            )}
            {stage.mnemonic.type === "visual" && (
              <p className="font-dm-sans text-blossom-ink text-lg mb-6 pl-4">{stage.mnemonic.content}</p>
            )}
            {stage.mnemonic.type === "pattern" && (
              <p className="font-dm-sans text-blossom-ink text-lg mb-6 pl-4">{stage.mnemonic.content}</p>
            )}
            {stage.mnemonic.type === "acronym" && stage.mnemonic.acronymLetters && (
              <div className="flex flex-wrap gap-3 mb-6">
                {stage.mnemonic.acronymLetters.map((al, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className={`w-12 h-12 rounded-xl text-white font-nunito font-black text-2xl flex items-center justify-center bg-blossom-bloom`}>{al.letter}</span>
                    <span className="font-nunito font-bold text-sm text-blossom-ink mt-1">{al.meaning}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="bg-blossom-sky/10 rounded-2xl p-4 flex items-center gap-3">
              <span className="text-lg">💬</span>
              <p className="font-dm-sans text-blossom-ink">
                <strong>Say it out loud: </strong>&ldquo;{stage.mnemonic.sayItAloud}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mini Practice */}
      <MiniPractice questions={stage.miniPractice} stageIndex={stage.stageNumber - 1} />
    </div>
  );
}
