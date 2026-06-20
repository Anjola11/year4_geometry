const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const sharedDir = path.join(componentsDir, 'shared');
const layoutDir = path.join(componentsDir, 'layout');
const illusDir = path.join(componentsDir, 'illustrations');
const lessonsDir = path.join(__dirname, 'src', 'app', 'lessons');
const anglesDir = path.join(lessonsDir, 'angles-and-turns');

[componentsDir, sharedDir, layoutDir, illusDir, lessonsDir, anglesDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const defaultExport = (name) => `import React from 'react';\n\nexport default function ${name}({ children, ...props }: any) {\n  return <div {...props}>{children || '${name}'}</div>;\n}\n`;

const sharedComponents = [
  'SectionHeader', 'HighlightChip', 'StepList', 'DefinitionBox', 'WatchOutBox', 
  'RealWorldCallout', 'MnemonicSection', 'MnemonicMiniCard', 'MiniPracticeSection', 
  'WorkedExample', 'ClassworkQuestion', 'KeyRulesCard', 'SummaryCard', 
  'HomeworkCard', 'ThinkAboutIt', 'LearningObjectivesList'
];

const layoutComponents = ['TopBar', 'ProgressBar', 'MathLogo'];

const illustrations = [
  'HeroIllustration', 'StageIllustration', 'RealWorldIllustration', 'TakeHomeSticker'
];

sharedComponents.forEach(c => fs.writeFileSync(path.join(sharedDir, `${c}.tsx`), defaultExport(c)));
layoutComponents.forEach(c => fs.writeFileSync(path.join(layoutDir, `${c}.tsx`), defaultExport(c)));
illustrations.forEach(c => fs.writeFileSync(path.join(illusDir, `${c}.tsx`), `import React from 'react';\nexport default function ${c}() { return <svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="gray" /></svg>; }\n`));

console.log("Component files created.");
