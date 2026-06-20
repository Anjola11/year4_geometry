import React from "react";
import { shapesLessonData } from "@/lib/shapesLessonData";
import HeroSection from "@/components/shared/HeroSection";
import TopBar from "@/components/layout/TopBar";
import SectionHeader from "@/components/shared/SectionHeader";
import ConceptStageSection from "@/components/shared/ConceptStageSection";
import RealWorldSection from "@/components/shared/RealWorldSection";
import WorkedExamplesSection from "@/components/shared/WorkedExamplesSection";
import ClassworkSection from "@/components/shared/ClassworkSection";
import TakeHomeSection from "@/components/shared/TakeHomeSection";
import FooterSection from "@/components/shared/FooterSection";

export default function ShapesLessonPage() {
  const data = shapesLessonData;

  return (
    <main className="w-full pt-16">
      <TopBar title={data.topic} />
      <HeroSection data={data} />

      <section className="bg-blossom-mist py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader icon="fa-map" title="🗺️ Our Learning Journey Today" />
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-8">
            {data.conceptLadder.map((stage, index) => (
              <React.Fragment key={stage.stageNumber}>
                <div className="flex flex-col items-center gap-3 text-center w-44">
                  <div className="w-16 h-16 rounded-full bg-blossom-bloom text-white flex items-center justify-center font-nunito font-black text-2xl shadow-md">
                    {stage.stageNumber}
                  </div>
                  <div className="font-nunito font-bold text-blossom-ink text-sm">{stage.stageName}</div>
                </div>
                {index < data.conceptLadder.length - 1 && (
                  <span className="text-blossom-charcoal hidden md:block text-xl">➔</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-center font-dm-sans italic text-blossom-charcoal mt-8 text-sm">
            We&apos;ll build each idea on top of the last — just like Lego.
          </p>
        </div>
      </section>

      {data.conceptLadder.map((stage) => (
        <ConceptStageSection key={stage.stageNumber} stage={stage} totalStages={data.conceptLadder.length} />
      ))}

      <RealWorldSection data={data} />
      <WorkedExamplesSection data={data} />
      <ClassworkSection data={data} />
      <TakeHomeSection data={data} />
      <FooterSection topic={data.topic} year={data.year} />
    </main>
  );
}
