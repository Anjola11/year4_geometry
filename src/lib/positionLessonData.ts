import { LessonData } from "./types";

export const positionLessonData: LessonData = {
  topic: "Position and Direction",
  year: "Year 4",
  country: "United Kingdom",
  curriculumReference: "UK KS2 NC — Geometry: Position and Direction",
  slug: "position-and-direction",
  heroHook: "How do treasure hunters find the gold on a map? They use coordinates and translation!",
  learningObjectives: [
    "Read and write coordinates in the first quadrant.",
    "Translate shapes on a grid without changing their size.",
    "Plot missing points to complete a given polygon.",
  ],
  conceptLadder: [
    {
      stageNumber: 1,
      stageName: "Reading Coordinates",
      stageIcon: "fa-crosshairs",
      accentColor: "bloom",
      explanation: "A grid has an x-axis (horizontal, across the bottom) and a y-axis (vertical, up the side). We use a pair of numbers called **coordinates** to find a point. We always read the x-axis first, then the y-axis. The point (2, 5) means 2 steps across and 5 steps up.",
      mnemonic: {
        type: "rhyme",
        title: "Coordinate Rule",
        content: "Along the corridor, and up the stairs!",
        sayItAloud: "Along the corridor, up the stairs.",
      },
      watchOut: {
        warning: "Never mix up x and y! If you go up the stairs before walking along the corridor, you'll bump into the wall. Always go across the x-axis first.",
      },
      miniPractice: [
        {
          questionText: "In the coordinate (4, 7), which number tells you how far to go across?",
          options: [
            { key: "A", text: "7" },
            { key: "B", text: "4" },
            { key: "C", text: "Both" },
            { key: "D", text: "Neither" },
          ],
          correctKey: "B",
          difficulty: "Starter",
        },
        {
          questionText: "What do we call the horizontal line across the bottom of a coordinate grid?",
          options: [
            { key: "A", text: "The y-axis" },
            { key: "B", text: "The symmetry line" },
            { key: "C", text: "The parallel line" },
            { key: "D", text: "The x-axis" },
          ],
          correctKey: "D",
          difficulty: "Starter",
        },
      ],
    },
    {
      stageNumber: 2,
      stageName: "Translation",
      stageIcon: "fa-arrows-alt",
      accentColor: "sky",
      explanation: "Translation is a fancy word in maths for **sliding** a shape. When we translate a shape on a grid, we move it up, down, left, or right. The shape does not turn, it does not flip, and its size stays exactly the same.",
      definition: "Translation means sliding a shape to a new position on a grid without turning or resizing it.",
      miniPractice: [
        {
          questionText: "When you translate a shape, what happens to it?",
          options: [
            { key: "A", text: "It gets bigger" },
            { key: "B", text: "It turns upside down" },
            { key: "C", text: "It slides to a new position" },
            { key: "D", text: "It changes colour" },
          ],
          correctKey: "C",
          difficulty: "Starter",
        },
        {
          questionText: "If a triangle is translated '3 squares right', do its angles change?",
          options: [
            { key: "A", text: "Yes, they get wider" },
            { key: "B", text: "No, they stay exactly the same" },
            { key: "C", text: "Yes, they turn into right angles" },
            { key: "D", text: "Only the top angle changes" },
          ],
          correctKey: "B",
          difficulty: "Build Up",
        },
      ],
    },
    {
      stageNumber: 3,
      stageName: "Plotting Missing Points",
      stageIcon: "fa-pen-nib",
      accentColor: "leaf",
      explanation: "Sometimes you are given a few coordinates of a shape and asked to find the missing one. For example, if you have 3 corners of a square, you can look at the grid, trace the lines, and plot the 4th corner so all the sides match perfectly.",
      steps: [
        {
          title: "Plot the given points",
          explanation: "Mark all the points you already have with an X.",
          working: "\\text{Plot } (1,1), (1,4), (4,1)",
        },
        {
          title: "Look at the shape's properties",
          explanation: "If it's a square, all sides must be equal length.",
          working: "\\text{Side length is } 3",
        },
        {
          title: "Find the missing coordinate",
          explanation: "Trace up from (4,1) and across from (1,4) to find the final corner.",
          working: "\\text{Missing point is } (4,4)",
        },
      ],
      miniPractice: [
        {
          questionText: "You are drawing a rectangle. You have plotted (2,2), (2,6), and (5,2). Where is the 4th corner?",
          options: [
            { key: "A", text: "(5,6)" },
            { key: "B", text: "(6,5)" },
            { key: "C", text: "(2,5)" },
            { key: "D", text: "(6,2)" },
          ],
          correctKey: "A",
          difficulty: "Build Up",
        },
        {
          questionText: "You need to plot a square. How many missing points would you need to find if you are given 2 coordinates?",
          options: [
            { key: "A", text: "1" },
            { key: "B", text: "2" },
            { key: "C", text: "3" },
            { key: "D", text: "4" },
          ],
          correctKey: "B",
          difficulty: "Build Up",
        },
      ],
    },
  ],
  realWorldScenario: {
    title: "Navigating London",
    scenarioDescription: "If you look at an A-Z map of London or play a game like Battleships, you use a grid system just like coordinates! To find Trafalgar Square, you might look up the index, and it says 'Grid D4'. You go across to column D, and down to row 4.\n\nWhen a taxi drives 3 streets east and 2 streets north, that is exactly the same as translating a point on a mathematical grid!",
    thinkAboutItPrompt: "Can you think of any board games that use a grid with letters and numbers?",
  },
  workedExamples: [
    {
      difficulty: "Starter",
      questionText: "Write the coordinates of a point that is 3 steps along the x-axis and 8 steps up the y-axis.",
      steps: [
        {
          title: "Along the corridor",
          explanation: "The x-axis number comes first.",
          working: "\\text{x} = 3",
        },
        {
          title: "Up the stairs",
          explanation: "The y-axis number comes second.",
          working: "\\text{y} = 8",
        },
        {
          title: "Write as a coordinate pair",
          explanation: "Put them in brackets with a comma.",
          working: "(3, 8)",
        },
      ],
      answer: "(3, 8)",
    },
    {
      difficulty: "Build Up",
      questionText: "A point is at (2, 4). It is translated 3 squares right and 1 square up. What are its new coordinates?",
      steps: [
        {
          title: "Translate the x-axis (right)",
          explanation: "Moving right adds to the x coordinate.",
          working: "2 + 3 = 5",
        },
        {
          title: "Translate the y-axis (up)",
          explanation: "Moving up adds to the y coordinate.",
          working: "4 + 1 = 5",
        },
      ],
      answer: "(5, 5)",
    },
  ],
  classworkQuestions: [
    {
      questionText: "Which rule helps you remember the order of coordinates?",
      options: [
        { key: "A", text: "Up the stairs, along the corridor" },
        { key: "B", text: "Along the corridor, up the stairs" },
        { key: "C", text: "Down the slide, up the ladder" },
        { key: "D", text: "Round the garden, like a teddy bear" },
      ],
      correctKey: "B",
      difficulty: "Starter",
    },
    {
      questionText: "In the coordinate (5, 9), what is the y-axis value?",
      options: [
        { key: "A", text: "5" },
        { key: "B", text: "9" },
        { key: "C", text: "Neither" },
        { key: "D", text: "45" },
      ],
      correctKey: "B",
      difficulty: "Starter",
    },
    {
      questionText: "Translating a shape means you...",
      options: [
        { key: "A", text: "Slide it" },
        { key: "B", text: "Flip it over" },
        { key: "C", text: "Turn it around" },
        { key: "D", text: "Stretch it out" },
      ],
      correctKey: "A",
      difficulty: "Starter",
    },
    {
      questionText: "Point A is at (1, 1). If we translate it 4 units right, where is it now?",
      options: [
        { key: "A", text: "(1, 5)" },
        { key: "B", text: "(5, 1)" },
        { key: "C", text: "(4, 4)" },
        { key: "D", text: "(5, 5)" },
      ],
      correctKey: "B",
      difficulty: "Build Up",
    },
    {
      questionText: "You are given points (1,1), (1,3), and (3,1) for a square. What is the missing coordinate?",
      options: [
        { key: "A", text: "(3, 3)" },
        { key: "B", text: "(4, 4)" },
        { key: "C", text: "(2, 2)" },
        { key: "D", text: "(1, 4)" },
      ],
      correctKey: "A",
      difficulty: "Challenge",
    },
  ],
  keyRules: [
    {
      statement: "Coordinates are always (x, y). Across the x-axis first, up the y-axis second.",
    },
    {
      statement: "Translation is sliding a shape. Its size, shape, and orientation stay the same.",
    },
    {
      statement: "Use the properties of shapes (like equal side lengths) to figure out missing points on a grid.",
    },
  ],
  summary: [
    "Stage 1: Coordinates tell us the exact position of a point using an x and y number.",
    "Stage 2: Translating shapes means moving them along the grid without turning them.",
    "Stage 3: We can complete shapes by plotting missing points according to their properties.",
  ],
  homework: [
    {
      questionText: "Write down the coordinates of the letters of your name if you placed them on a grid. (Make a quick sketch!)",
      difficulty: "Starter",
    },
    {
      questionText: "If you translate the point (3, 6) down 2 squares and left 1 square, what are its new coordinates?",
      difficulty: "Build Up",
    },
    {
      questionText: "If the bottom edge of a square goes from (2, 2) to (6, 2), what are the coordinates of the top two corners?",
      difficulty: "Challenge",
    },
  ],
};
