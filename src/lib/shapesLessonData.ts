import { LessonData } from "./types";

export const shapesLessonData: LessonData = {
  topic: "2D Shapes: Triangles & Quadrilaterals",
  year: "Year 4",
  country: "United Kingdom",
  curriculumReference: "UK KS2 NC — Geometry: Properties of Shapes",
  slug: "2d-shapes",
  heroHook: "Look closely at the screen you're reading this on. It's a quadrilateral! Let's discover the secret properties of shapes.",
  learningObjectives: [
    "Classify different types of triangles by their sides and angles.",
    "Identify and describe the family of quadrilaterals.",
    "Recognise parallel and perpendicular lines in shapes.",
    "Find lines of symmetry in 2D shapes.",
  ],
  conceptLadder: [
    {
      stageNumber: 1,
      stageName: "Classifying Triangles",
      stageIcon: "fa-play",
      accentColor: "bloom",
      explanation: "Triangles are polygons with exactly 3 straight sides. But not all triangles are the same! We look at their side lengths and their angles to name them:\n\n* **Equilateral:** All 3 sides are equal, and all 3 angles are equal (they are all {{latex: 60^\\circ }}).\n* **Isosceles:** Has 2 equal sides and 2 equal angles.\n* **Scalene:** Has 0 equal sides and 0 equal angles. It's completely wonky!\n* **Right-angled:** Has exactly one right angle.",
      watchOut: {
        warning: "A right-angled triangle can also be an isosceles or scalene triangle! For example, if it has one right angle and two equal sides, it's an isosceles right-angled triangle.",
      },
      miniPractice: [
        {
          questionText: "Which triangle has all sides equal?",
          options: [
            { key: "A", text: "Scalene" },
            { key: "B", text: "Right-angled" },
            { key: "C", text: "Isosceles" },
            { key: "D", text: "Equilateral" },
          ],
          correctKey: "D",
          difficulty: "Starter",
        },
        {
          questionText: "If a triangle has two equal sides, what is it called?",
          options: [
            { key: "A", text: "Equilateral" },
            { key: "B", text: "Isosceles" },
            { key: "C", text: "Scalene" },
            { key: "D", text: "Square" },
          ],
          correctKey: "B",
          difficulty: "Starter",
        },
      ],
    },
    {
      stageNumber: 2,
      stageName: "The Quadrilateral Family",
      stageIcon: "fa-square",
      accentColor: "sky",
      explanation: "A quadrilateral is any 2D shape with exactly 4 straight sides. You know squares and rectangles, but they have cousins!\n\n* **Parallelogram:** Opposite sides are parallel and equal in length. Opposite angles are equal.\n* **Rhombus:** A special parallelogram where all 4 sides are equal (like a pushed-over square).\n* **Trapezium:** Has exactly one pair of parallel sides.",
      mnemonic: {
        type: "rhyme",
        title: "Quad Family",
        content: "Parallelogram leans, its sides are in pairs.\nRhombus is equal, like a squashed-up square.\nTrapezium has one parallel pair, not two.\nLearn all their properties and you'll know what to do!",
        sayItAloud: "Rhombus is equal, Trapezium has one parallel pair.",
      },
      miniPractice: [
        {
          questionText: "What do we call a shape with exactly 4 sides?",
          options: [
            { key: "A", text: "Triangle" },
            { key: "B", text: "Pentagon" },
            { key: "C", text: "Quadrilateral" },
            { key: "D", text: "Hexagon" },
          ],
          correctKey: "C",
          difficulty: "Starter",
        },
        {
          questionText: "Which shape has all 4 sides equal length but no right angles?",
          options: [
            { key: "A", text: "Square" },
            { key: "B", text: "Rectangle" },
            { key: "C", text: "Rhombus" },
            { key: "D", text: "Trapezium" },
          ],
          correctKey: "C",
          difficulty: "Build Up",
        },
      ],
    },
    {
      stageNumber: 3,
      stageName: "Parallel and Perpendicular",
      stageIcon: "fa-pause",
      accentColor: "leaf",
      explanation: "To fully describe shapes, we need to talk about lines:\n\n* **Parallel Lines:** Lines that stay the exact same distance apart forever, like train tracks. They never meet.\n* **Perpendicular Lines:** Lines that meet at a perfect right angle (quarter turn), like the corner of a room.",
      watchOut: {
        warning: "Just because lines don't touch in your drawing doesn't mean they are parallel. If you extended them with a ruler and they would eventually cross, they are NOT parallel!",
      },
      miniPractice: [
        {
          questionText: "Lines that meet at a perfect right angle are called...",
          options: [
            { key: "A", text: "Parallel" },
            { key: "B", text: "Perpendicular" },
            { key: "C", text: "Straight" },
            { key: "D", text: "Curved" },
          ],
          correctKey: "B",
          difficulty: "Starter",
        },
        {
          questionText: "Which shape always has parallel lines?",
          options: [
            { key: "A", text: "Scalene Triangle" },
            { key: "B", text: "Circle" },
            { key: "C", text: "Rectangle" },
            { key: "D", text: "Kite" },
          ],
          correctKey: "C",
          difficulty: "Build Up",
        },
      ],
    },
    {
      stageNumber: 4,
      stageName: "Symmetry in Shapes",
      stageIcon: "fa-star-half-alt",
      accentColor: "lavender",
      explanation: "A line of symmetry is a line that divides a shape into two identical halves. If you folded the shape along the line, the two halves would match exactly!\n\nSome shapes have zero lines of symmetry (like a scalene triangle). Some have many. A square has 4 lines of symmetry: vertical, horizontal, and two diagonal.",
      definition: "A line of symmetry is an imaginary line that acts like a mirror through the middle of a shape.",
      miniPractice: [
        {
          questionText: "How many lines of symmetry does a regular rectangle have?",
          options: [
            { key: "A", text: "0" },
            { key: "B", text: "1" },
            { key: "C", text: "2" },
            { key: "D", text: "4" },
          ],
          correctKey: "C",
          difficulty: "Build Up",
        },
        {
          questionText: "Which triangle has exactly ONE line of symmetry?",
          options: [
            { key: "A", text: "Equilateral" },
            { key: "B", text: "Isosceles" },
            { key: "C", text: "Scalene" },
            { key: "D", text: "All of them" },
          ],
          correctKey: "B",
          difficulty: "Challenge",
        },
      ],
    },
  ],
  realWorldScenario: {
    title: "Designing a Football Pitch",
    scenarioDescription: "A football pitch is full of geometry! The entire pitch is a massive rectangle, which is a type of quadrilateral. The side lines and goal lines meet to form perpendicular lines, creating perfect 90-degree right angles in the corners.\n\nIf you stand on the halfway line, that line acts as a line of symmetry for the whole pitch — the two halves of the field reflect each other exactly!",
    thinkAboutItPrompt: "Can you spot any other shapes in a sports field, like a tennis court or basketball court?",
  },
  workedExamples: [
    {
      difficulty: "Starter",
      questionText: "Name a quadrilateral that has exactly one pair of parallel sides.",
      steps: [
        {
          title: "Recall the definitions",
          explanation: "A parallelogram has two pairs of parallel sides. A square and rectangle also have two.",
          working: "\\text{Two pairs} = \\text{Parallelogram, Rectangle, Square, Rhombus}",
        },
        {
          title: "Find the odd one out",
          explanation: "The trapezium is the only one with just one pair.",
          working: "\\text{One pair} = \\text{Trapezium}",
        },
      ],
      answer: "\\text{Trapezium}",
    },
    {
      difficulty: "Build Up",
      questionText: "Identify the type of triangle with sides of 5cm, 5cm, and 8cm.",
      steps: [
        {
          title: "Look at the side lengths",
          explanation: "Two of the sides are 5cm, meaning they are equal.",
          working: "5\\text{cm} = 5\\text{cm}",
        },
        {
          title: "Match the property",
          explanation: "A triangle with exactly two equal sides is an isosceles triangle.",
          working: "\\text{Isosceles}",
        },
      ],
      answer: "\\text{Isosceles Triangle}",
    },
  ],
  classworkQuestions: [
    {
      questionText: "What type of triangle has NO equal sides?",
      options: [
        { key: "A", text: "Equilateral" },
        { key: "B", text: "Isosceles" },
        { key: "C", text: "Scalene" },
        { key: "D", text: "Right-angled" },
      ],
      correctKey: "C",
      difficulty: "Starter",
    },
    {
      questionText: "Which property does a Rhombus NOT have?",
      options: [
        { key: "A", text: "4 equal sides" },
        { key: "B", text: "2 pairs of parallel sides" },
        { key: "C", text: "4 right angles" },
        { key: "D", text: "Opposite angles are equal" },
      ],
      correctKey: "C",
      difficulty: "Build Up",
    },
    {
      questionText: "Lines that cross to make a 90-degree corner are...",
      options: [
        { key: "A", text: "Parallel" },
        { key: "B", text: "Perpendicular" },
        { key: "C", text: "Horizontal" },
        { key: "D", text: "Diagonal" },
      ],
      correctKey: "B",
      difficulty: "Starter",
    },
    {
      questionText: "How many lines of symmetry does an Equilateral triangle have?",
      options: [
        { key: "A", text: "1" },
        { key: "B", text: "2" },
        { key: "C", text: "3" },
        { key: "D", text: "0" },
      ],
      correctKey: "C",
      difficulty: "Challenge",
    },
    {
      questionText: "I am a shape with 4 equal sides and 4 right angles. What am I?",
      options: [
        { key: "A", text: "Rectangle" },
        { key: "B", text: "Rhombus" },
        { key: "C", text: "Square" },
        { key: "D", text: "Parallelogram" },
      ],
      correctKey: "C",
      difficulty: "Starter",
    },
  ],
  keyRules: [
    {
      statement: "Triangles have 3 sides: Equilateral (3 equal), Isosceles (2 equal), Scalene (0 equal).",
    },
    {
      statement: "Quadrilaterals have 4 sides. Examples: Square, Rectangle, Parallelogram, Rhombus, Trapezium.",
    },
    {
      statement: "Parallel lines never meet. Perpendicular lines meet at a right angle.",
    },
    {
      statement: "A line of symmetry folds a shape into two identical halves.",
    },
  ],
  summary: [
    "Stage 1: Triangles are sorted by their side lengths and angles.",
    "Stage 2: Quadrilaterals have 4 sides and special family members.",
    "Stage 3: Parallel and perpendicular lines describe how lines interact.",
    "Stage 4: Symmetry is when a shape can be mirrored perfectly.",
  ],
  homework: [
    {
      questionText: "Draw a parallelogram and a trapezium. Write down one difference between them.",
      difficulty: "Starter",
    },
    {
      questionText: "Look at capital letters: A, E, H, S. Which ones have a line of symmetry?",
      difficulty: "Build Up",
    },
    {
      questionText: "Is it possible to draw a right-angled equilateral triangle? Explain why or why not.",
      difficulty: "Challenge",
    },
  ],
};
