import { LessonData } from "./types";

export const anglesLessonData: LessonData = {
  topic: "Angles and Turns",
  year: "Year 4",
  country: "United Kingdom",
  curriculumReference: "UK KS2 NC — Geometry: Properties of Shapes (Angles)",
  slug: "angles-and-turns",
  heroHook: "Ever wonder how skateboarders know how far to spin? It's all about angles and turns!",
  learningObjectives: [
    "Identify an angle as a measure of a turn.",
    "Recognise right angles as a benchmark.",
    "Sort and classify acute and obtuse angles.",
    "Order angles by size.",
  ],
  conceptLadder: [
    {
      stageNumber: 1,
      stageName: "What is an Angle?",
      stageIcon: "fa-rotate-right",
      accentColor: "bloom",
      explanation: "An angle is formed when two straight lines meet at a point. We measure angles by how much of a **turn** there is between the lines! Imagine a door opening — the wider you open it, the bigger the angle.",
      definition: "An angle is a measure of a turn, showing how far a line has rotated from a starting position.",
      realWorldCallout: "When you ride a bike and turn the handlebars, you are making an angle!",
      miniPractice: [
        {
          questionText: "Which of these describes an angle?",
          options: [
            { key: "A", text: "The length of a straight line" },
            { key: "B", text: "The weight of a shape" },
            { key: "C", text: "A measure of a turn between two lines" },
            { key: "D", text: "The area inside a circle" },
          ],
          correctKey: "C",
          difficulty: "Starter",
        },
        {
          questionText: "If you open a book wider, the angle between the covers becomes...",
          options: [
            { key: "A", text: "Smaller" },
            { key: "B", text: "Bigger" },
            { key: "C", text: "Stays the same" },
            { key: "D", text: "Turns into a square" },
          ],
          correctKey: "B",
          difficulty: "Build Up",
        },
      ],
    },
    {
      stageNumber: 2,
      stageName: "The Right Angle",
      stageIcon: "fa-square",
      accentColor: "sky",
      explanation: "A **right angle** is exactly a quarter turn. It forms a perfect corner, just like the corner of a square or the screen you are looking at right now. We show it with a little square in the corner {{latex: 90^\\circ }}.",
      watchOut: {
        warning: "A right angle doesn't always point straight up and down. If you tilt a square, its corners are still right angles!",
      },
      mnemonic: {
        type: "visual",
        title: "The Corner Check",
        content: "If the corner of a piece of paper fits perfectly into it, it's a right angle!",
        sayItAloud: "Right angles make perfect corners.",
      },
      miniPractice: [
        {
          questionText: "How much of a turn makes a right angle?",
          options: [
            { key: "A", text: "A full turn" },
            { key: "B", text: "A half turn" },
            { key: "C", text: "A quarter turn" },
            { key: "D", text: "No turn at all" },
          ],
          correctKey: "C",
          difficulty: "Starter",
        },
        {
          questionText: "Which real-life object has right angles?",
          options: [
            { key: "A", text: "A football" },
            { key: "B", text: "A piece of A4 paper" },
            { key: "C", text: "A hula hoop" },
            { key: "D", text: "A crescent moon" },
          ],
          correctKey: "B",
          difficulty: "Starter",
        },
      ],
    },
    {
      stageNumber: 3,
      stageName: "Acute and Obtuse Angles",
      stageIcon: "fa-chart-pie",
      accentColor: "leaf",
      explanation: "Now that we know the right angle, we can use it to classify other angles! \n\nAn **Acute Angle** is smaller than a right angle. It looks sharp.\nAn **Obtuse Angle** is larger than a right angle, but smaller than a straight line (a half-turn).",
      mnemonic: {
        type: "rhyme",
        title: "Angle Rhyme",
        content: "Acute is small and looks so CUTE.\nRight is a corner, straight and true.\nObtuse is BIG and wide as a boot!",
        sayItAloud: "Acute is cute and small, Obtuse is wide and tall.",
      },
      watchOut: {
        warning: "Don't just guess by looking! Use the corner of a page to check if it's smaller or bigger than a perfect right angle.",
      },
      miniPractice: [
        {
          questionText: "An angle that is smaller than a right angle is called...",
          options: [
            { key: "A", text: "Obtuse" },
            { key: "B", text: "Cute" },
            { key: "C", text: "Acute" },
            { key: "D", text: "Straight" },
          ],
          correctKey: "C",
          difficulty: "Starter",
        },
        {
          questionText: "If you turn a little bit past a right angle, what angle do you make?",
          options: [
            { key: "A", text: "Acute" },
            { key: "B", text: "Obtuse" },
            { key: "C", text: "Right" },
            { key: "D", text: "Tiny" },
          ],
          correctKey: "B",
          difficulty: "Build Up",
        },
      ],
    },
    {
      stageNumber: 4,
      stageName: "Ordering Angles",
      stageIcon: "fa-sort-amount-up",
      accentColor: "lavender",
      explanation: "We can order angles by comparing how wide their turn is. To order angles from smallest to largest, look at the space between the two lines. The wider the space, the bigger the angle!",
      steps: [
        {
          title: "Find the acute angles",
          explanation: "These are the smallest ones.",
          working: "\\text{Acute} < \\text{Right}",
        },
        {
          title: "Find the right angles",
          explanation: "These are exactly a quarter turn.",
          working: "\\text{Right} = 90^\\circ",
        },
        {
          title: "Find the obtuse angles",
          explanation: "These are the biggest ones.",
          working: "\\text{Obtuse} > \\text{Right}",
        },
      ],
      miniPractice: [
        {
          questionText: "Which list is in order from smallest to largest angle?",
          options: [
            { key: "A", text: "Right, Acute, Obtuse" },
            { key: "B", text: "Acute, Right, Obtuse" },
            { key: "C", text: "Obtuse, Right, Acute" },
            { key: "D", text: "Acute, Obtuse, Right" },
          ],
          correctKey: "B",
          difficulty: "Build Up",
        },
        {
          questionText: "You have two acute angles. One is open very little, the other is almost a right angle. Which is larger?",
          options: [
            { key: "A", text: "The one open very little" },
            { key: "B", text: "They are the same size" },
            { key: "C", text: "The one that is almost a right angle" },
            { key: "D", text: "Neither, acute angles have no size" },
          ],
          correctKey: "C",
          difficulty: "Build Up",
        },
      ],
    },
  ],
  realWorldScenario: {
    title: "The Skateboard Park",
    scenarioDescription: "Imagine you are at the skatepark trying to learn some new tricks! When you ride up the ramp, you need to turn your board in the air to land safely. \n\nIf you turn exactly a quarter turn, you have made a right angle! If you turn less than that, your turn was an acute angle, and you might fall off! Professional skateboarders often do huge spins, doing more than half a turn, making giant angles.",
    thinkAboutItPrompt: "What angle would you make if you turned completely around to face the way you came?",
  },
  workedExamples: [
    {
      difficulty: "Starter",
      questionText: "Identify if the angle shown on the clock hands at 3:00 is acute, right, or obtuse.",
      steps: [
        {
          title: "Look at the hands",
          explanation: "The minute hand points to 12. The hour hand points to 3.",
          working: "\\text{Hands are at 12 and 3}",
        },
        {
          title: "Check the corner",
          explanation: "This forms a perfect corner, or a quarter turn around the clock.",
          working: "\\frac{1}{4} \\text{ turn}",
          why: "15 minutes out of 60 is a quarter of the hour."
        },
      ],
      answer: "\\text{Right Angle}",
    },
    {
      difficulty: "Build Up",
      questionText: "A door is open just a tiny crack. What kind of angle does it make with the wall?",
      steps: [
        {
          title: "Visualize the turn",
          explanation: "The door has only turned a little bit from being closed.",
          working: "\\text{Small turn}",
        },
        {
          title: "Compare to a right angle",
          explanation: "It is much smaller than a right angle (a quarter turn).",
          working: "\\text{Angle} < \\text{Right Angle}",
        },
      ],
      answer: "\\text{Acute Angle}",
    },
  ],
  classworkQuestions: [
    {
      questionText: "A right angle is exactly a...",
      options: [
        { key: "A", text: "Half turn" },
        { key: "B", text: "Quarter turn" },
        { key: "C", text: "Full turn" },
        { key: "D", text: "Third of a turn" },
      ],
      correctKey: "B",
      difficulty: "Starter",
    },
    {
      questionText: "Which of the following describes an obtuse angle?",
      options: [
        { key: "A", text: "Greater than a right angle, but less than a straight line" },
        { key: "B", text: "Exactly a quarter turn" },
        { key: "C", text: "Smaller than a right angle" },
        { key: "D", text: "A completely straight line" },
      ],
      correctKey: "A",
      difficulty: "Starter",
    },
    {
      questionText: "At 1:00, the angle between the hands of a clock is...",
      options: [
        { key: "A", text: "Right" },
        { key: "B", text: "Obtuse" },
        { key: "C", text: "Acute" },
        { key: "D", text: "Straight" },
      ],
      correctKey: "C",
      difficulty: "Build Up",
    },
    {
      questionText: "Which is the correct order of angles from largest to smallest?",
      options: [
        { key: "A", text: "Acute, Right, Obtuse" },
        { key: "B", text: "Right, Acute, Obtuse" },
        { key: "C", text: "Obtuse, Acute, Right" },
        { key: "D", text: "Obtuse, Right, Acute" },
      ],
      correctKey: "D",
      difficulty: "Challenge",
    },
    {
      questionText: "If you cut a square piece of paper in half diagonally, what kinds of angles do the two new triangles have?",
      options: [
        { key: "A", text: "Three acute angles" },
        { key: "B", text: "One right angle and two acute angles" },
        { key: "C", text: "Two right angles and one acute angle" },
        { key: "D", text: "One obtuse angle and two acute angles" },
      ],
      correctKey: "B",
      difficulty: "Challenge",
    },
  ],
  keyRules: [
    {
      statement: "An angle is a measure of a turn.",
    },
    {
      statement: "A right angle is a quarter turn.",
      latex: "90^\\circ",
    },
    {
      statement: "Acute angles are smaller than right angles. Obtuse angles are larger.",
    },
  ],
  summary: [
    "Stage 1: An angle is created by a turn between two straight lines.",
    "Stage 2: A right angle makes a perfect corner (quarter turn).",
    "Stage 3: Acute angles are small, obtuse angles are wide.",
    "Stage 4: We can order angles by looking at the size of their turn.",
  ],
  homework: [
    {
      questionText: "Look around your bedroom. Find and write down 2 things that have right angles, 1 thing with an acute angle, and 1 thing with an obtuse angle.",
      difficulty: "Starter",
    },
    {
      questionText: "Draw a clock face showing 4:00. Is the angle between the hands acute, right, or obtuse?",
      difficulty: "Build Up",
    },
    {
      questionText: "If you add an acute angle and another acute angle together, will they always make an obtuse angle? Explain your reasoning.",
      difficulty: "Challenge",
    },
  ],
  mnemonicSummary: {
    type: "rhyme",
    title: "Angle Rhyme",
    content: "Acute is small and looks so CUTE.\nRight is a corner, straight and true.\nObtuse is BIG and wide as a boot!",
    sayItAloud: "Acute is cute, Obtuse is wide.",
  },
};
