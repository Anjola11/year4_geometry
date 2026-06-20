"use client";

import React, { useState, useEffect, useRef } from "react";
import { InlineMath } from "react-katex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faRedo, faLock } from "@fortawesome/free-solid-svg-icons";
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

export default function ClassworkSection({ data }: { data: LessonData }) {
  const questions = data.classworkQuestions;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);
  const scoreRef = useRef(0);

  const allAnswered = questions.every((_, i) => selected[i] !== undefined);
  const score = submitted ? questions.filter((q, i) => selected[i] === q.correctKey).length : 0;

  useEffect(() => {
    if (!submitted) return;
    scoreRef.current = 0;
    const interval = setInterval(() => {
      scoreRef.current += 1;
      setDisplayScore(scoreRef.current);
      if (scoreRef.current >= score) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [submitted, score]);

  const getMsg = () => {
    const pct = (score / questions.length) * 100;
    if (pct >= 80) return "Brilliant work! 🌟";
    if (pct >= 50) return "Good effort! Let's review a few. 💪";
    return "Let's go through these together. 📚";
  };

  const q = questions[current];

  const dotColor = (i: number) => {
    if (submitted) return selected[i] === questions[i].correctKey ? "bg-blossom-leaf" : "bg-blossom-bloom";
    if (selected[i] !== undefined) return "bg-blossom-petal";
    return "bg-blossom-neutral";
  };

  return (
    <section className="bg-blossom-mist dark:bg-blossom-mist py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader icon="fa-pencil-ruler" title="📝 Classwork — Let's Try It!" />

        <div className="flex items-center gap-3 bg-blossom-cloud rounded-2xl px-5 py-3 mb-6 shadow-sm">
          <FontAwesomeIcon icon={faLock} className="text-blossom-charcoal" />
          <p className="font-dm-sans text-sm text-blossom-charcoal">
            Read each question carefully and choose your answer. You'll see how you did at the end!
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 justify-center mb-6">
          {questions.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all duration-200 ${dotColor(i)} ${i === current ? "scale-150" : ""}`} aria-label={`Question ${i + 1}`} />
          ))}
        </div>

        <div className="bg-blossom-cloud rounded-3xl p-8 shadow-md min-h-64">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-full bg-blossom-bloom text-white font-nunito font-black text-sm flex items-center justify-center">{current + 1}</span>
            <p className="font-dm-sans text-xs text-blossom-charcoal">Question {current + 1} of {questions.length}</p>
            <span className={`ml-auto text-xs font-bold px-3 py-1 rounded-full ${diffColors[q.difficulty]}`}>{q.difficulty}</span>
          </div>
          <p className="font-nunito font-bold text-xl text-blossom-ink mb-6">{renderText(q.questionText)}</p>
          <div className="space-y-3">
            {q.options.map((opt) => {
              const isSelected = selected[current] === opt.key;
              const isCorrect = opt.key === q.correctKey;
              let cls = "w-full text-left rounded-2xl p-4 border-2 transition-all duration-150 font-dm-sans flex items-center gap-3 ";
              if (!submitted) {
                cls += isSelected ? "bg-sky-100 border-blossom-sky scale-[1.02] shadow-sm" : "bg-blossom-neutral border-transparent hover:border-blossom-sky cursor-pointer";
              } else {
                if (isCorrect) cls += "bg-blossom-correct border-blossom-leaf ";
                else if (isSelected) cls += "bg-blossom-wrong border-blossom-bloom ";
                else cls += "bg-blossom-neutral border-transparent opacity-50 ";
              }
              return (
                <button key={opt.key} className={cls} disabled={submitted} onClick={() => !submitted && setSelected((s) => ({ ...s, [current]: opt.key }))}>
                  <span className="w-7 h-7 rounded-full bg-blossom-bloom/20 text-blossom-bloom font-bold text-xs flex items-center justify-center flex-shrink-0">{opt.key}</span>
                  {renderText(opt.text)}
                  {submitted && isCorrect && <FontAwesomeIcon icon={faCheckCircle} className="text-blossom-leaf ml-auto" />}
                  {submitted && isSelected && !isCorrect && <FontAwesomeIcon icon={faTimesCircle} className="text-blossom-bloom ml-auto" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-4">
          <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0} className="px-5 py-2 rounded-full bg-blossom-cloud font-nunito font-bold text-blossom-ink disabled:opacity-40">← Prev</button>
          <button onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))} disabled={current === questions.length - 1} className="px-5 py-2 rounded-full bg-blossom-bloom text-white font-nunito font-bold disabled:opacity-40">Next →</button>
        </div>

        {/* Submit */}
        {!submitted && (
          <button onClick={() => setSubmitted(true)} disabled={!allAnswered} className="mt-6 w-full py-4 rounded-full bg-blossom-bloom text-white font-nunito font-extrabold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform shadow-md">
            Submit All Answers 🎉
          </button>
        )}

        {/* Results */}
        {submitted && (
          <div className="mt-6 bg-blossom-cloud rounded-3xl p-8 shadow-md animate-[slideUp_0.4s_ease]">
            <p className="font-nunito font-black text-4xl text-blossom-ink text-center mb-2">
              You got <span className="text-blossom-bloom">{displayScore}</span> out of {questions.length}!
            </p>
            <p className="font-dm-sans text-center text-blossom-charcoal mb-6">{getMsg()}</p>
            <div className="space-y-3 mb-6">
              {questions.map((qu, i) => (
                <div key={i} className="flex items-center gap-3 font-dm-sans text-sm">
                  {selected[i] === qu.correctKey
                    ? <FontAwesomeIcon icon={faCheckCircle} className="text-blossom-leaf flex-shrink-0" />
                    : <FontAwesomeIcon icon={faTimesCircle} className="text-blossom-bloom flex-shrink-0" />}
                  <span className="text-blossom-charcoal">Q{i + 1}:</span>
                  <span className="text-blossom-ink">{renderText(qu.questionText)}</span>
                  {selected[i] !== qu.correctKey && (
                    <span className="ml-auto text-blossom-leaf text-xs font-bold">✓ {qu.options.find((o) => o.key === qu.correctKey)?.text}</span>
                  )}
                </div>
              ))}
            </div>
            <button onClick={() => { setSelected({}); setSubmitted(false); setCurrent(0); setDisplayScore(0); }} className="flex items-center gap-2 mx-auto px-6 py-3 rounded-full border-2 border-blossom-bloom text-blossom-bloom font-nunito font-bold hover:bg-blossom-bloom hover:text-white transition-colors">
              <FontAwesomeIcon icon={faRedo} /> Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
