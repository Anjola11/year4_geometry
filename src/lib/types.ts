export interface LessonData {
  topic: string;
  year: string;
  country: string; // defaults to "United Kingdom"
  curriculumReference: string;
  slug: string;
  heroHook: string;
  learningObjectives: string[];
  conceptLadder: ConceptStage[];
  realWorldScenario: RealWorldBlock;
  workedExamples: WorkedExampleData[];
  classworkQuestions: ClassworkQuestionData[];
  keyRules: KeyRule[];
  mnemonicSummary?: MnemonicData;
  summary: string[];
  homework: HomeworkQuestion[];
}

export interface ConceptStage {
  stageNumber: number;
  stageName: string;
  stageIcon: string; 
  accentColor: "bloom" | "sky" | "leaf" | "lavender";
  explanation: string;
  steps?: StepData[];
  definition?: string;
  realWorldCallout?: string;
  watchOut?: WatchOutData;
  mnemonic?: MnemonicData;
  miniPractice: MiniPracticeQuestion[];
}

export interface MnemonicData {
  type: "acronym" | "rhyme" | "visual" | "pattern";
  title: string;
  content: string;
  acronymLetters?: AcronymLetter[];
  sayItAloud: string;
}

export interface AcronymLetter {
  letter: string;
  meaning: string;
  color: string;
}

export interface WatchOutData {
  warning: string;
  wrongExample?: string;
  rightExample?: string;
}

export interface MiniPracticeQuestion {
  questionText: string;
  options: { key: "A" | "B" | "C" | "D"; text: string }[];
  correctKey: "A" | "B" | "C" | "D";
  difficulty: "Starter" | "Build Up" | "Challenge";
}

export interface WorkedExampleData {
  questionText: string;
  difficulty: "Starter" | "Build Up" | "Challenge";
  steps: StepData[];
  answer: string;
}

export interface ClassworkQuestionData {
  questionText: string;
  options: { key: "A" | "B" | "C" | "D"; text: string }[];
  correctKey: "A" | "B" | "C" | "D";
  difficulty: "Starter" | "Build Up" | "Challenge";
  hasIllustration?: boolean;
}

export interface StepData {
  title: string;
  explanation: string;
  working: string;
  why?: string;
}

export interface KeyRule {
  statement: string;
  latex?: string;
}

export interface HomeworkQuestion {
  questionText: string;
  difficulty: "Starter" | "Build Up" | "Challenge";
}

export interface RealWorldBlock {
  title: string;
  scenarioDescription: string;
  thinkAboutItPrompt: string;
}
