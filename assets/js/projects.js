// Update links/labels and media paths here.
window.demoReel = {
  title: "Gameplay Demo Reel",
  description: "",
  embedUrl: "https://www.youtube-nocookie.com/embed/u6ffrpjhXyM?rel=0",
};

window.projects = [
  {
    id: "skybound",
    title: "SKYBOUND",
    year: "2024",
    role: "Gameplay Programmer",
    summary:
      "School group project focused on building mechanics and fast movement.",
    featured: true,
    image: "assets/img/sc1.png",
    tags: ["Unity", "C#", "Game Feel", "Prototype"],
    groupNote: "Group project (3 contributors)",
    highlights: [
      "Fast movement controller tuned for responsive feel.",
      "Building mechanics prototype for quick iteration.",
      "Prototype structure ready for expansion.",
    ],
    contribution: [
      "Gameplay systems and core mechanics implementation.",
      "Player movement, physics, and gameplay feel tuning.",
      "Integration of animations and visual assets into Unity.",
      "Iteration support, playtesting, and gameplay balance adjustments.",
    ],
    caseStudy: {
      overview:
        "School group project exploring fast movement and building mechanics. Focused on feel, clarity, and iteration loops.",
      built: [
        "Movement controller with tuning hooks for designer iteration.",
        "Building mechanic prototype with quick placement tests.",
        "Simple level layout for repeatable playtests.",
      ],
      challenges: [
        "Balancing speed with readable platforming (add detail).",
        "Communicating build affordances clearly (add detail).",
      ],
      improvements: [
        "Add more level content and constraints (add detail).",
        "Capture a short gameplay video (add link).",
      ],
      gallery: [
        {
          src: "assets/img/sc1.png",
          caption: "Movement prototype snapshot (placeholder).",
        },
        {
          src: "assets/img/sc3.png",
          caption: "Building mechanic test (placeholder).",
        },
      ],
    },
    buildUrl: "https://sh4downoctis.itch.io/skybound",
    buildLabel: "Play Demo",
    buildPlaceholder: false,
    showActions: "build-only",
  },
  {
    id: "happlyz-medical",
    title: "Happlyz Medical - Unity Gameplay Internship (Paris, France)",
    year: "2023",
    role: "Gameplay Programmer Intern",
    summary:
      "Professional internship as a Unity Gameplay Programmer on LORIO, a medical game-based application connected to a Bluetooth respiratory device.",
    featured: true,
    image: "assets/img/lorio.png",
    tags: ["Unity", "C#", "Multiplayer", "UX", "Production"],
    note: "Work completed during a professional internship.",
    showActions: "case-study",
    highlights: [
      "Designed and implemented multiplayer logic for mini-games (Multi Melo Memo).",
      "Optimized gameplay systems and performance for Pulmi's Race.",
      "Reworked the in-game cosmetic shop into a modular, scalable system.",
      "Implemented localization and player progression data visualization.",
      "Delivered production-ready features used in a real medical context.",
    ],
    caseStudy: {
      overview:
        "Worked on LORIO, a medical game-based application tied to a Bluetooth respiratory device, delivering gameplay systems used in production.",
      built: [
        "Multiplayer logic for mini-games, with sync and interaction handling.",
        "Gameplay and performance improvements for Pulmi's Race.",
        "Cosmetic shop refactor into a modular, scalable system.",
        "Localization support and player progression data visualization.",
      ],
      challenges: [
        "Balancing production constraints with new gameplay feature work (add detail).",
        "Maintaining UX consistency while refactoring legacy systems.",
      ],
      improvements: [
        "Expand automated regression coverage for key gameplay flows (add detail).",
        "Add deeper network diagnostics for edge cases (add detail).",
      ],
      gallery: [
        {
          src: "assets/img/happlyz-lorio-progress.png",
          caption:
            "LORIO professional dashboard with patient progress overview.",
        },
        {
          src: "assets/img/happlyz-customization.png",
          caption: "Cosmetic customization UI for player personalization.",
        },
        {
          src: "assets/img/happlyz-melo-memo.png",
          caption: "Multi Melo Memo mini-game with musical interaction.",
        },
        {
          src: "assets/img/happlyz-pulmis-race.png",
          caption: "Pulmi's Race gameplay with performance-focused tuning.",
        },
      ],
    },
  },
  {
    id: "potech-obsoft",
    title: "PoTech / OBSoft - AI Test Generation Internship (Lebanon)",
    year: "2025",
    role: "AI Engineer Intern",
    summary:
      "Professional internship with OBSoft, the engineering and R&D branch of PoTech, designing an AI system to generate unit tests from source code and user stories.",
    featured: true,
    image: "",
    tags: ["Python", "PHP", "Symfony", "RAG", "ChromaDB", "LLM"],
    note: "Work completed during a professional internship.",
    showActions: "case-study",
    highlights: [
      "Built an AI pipeline using embeddings and retrieval-augmented generation.",
      "Automated test generation integrated into CLI and Git workflows.",
      "Focused on clean architecture, validation, and maintainability.",
      "Improved developer productivity through fast iteration and feedback.",
    ],
    caseStudy: {
      overview:
        "Designed an AI-driven system to generate unit tests from code and user stories with fast developer feedback loops.",
      built: [
        "AI pipeline using embeddings and retrieval-augmented generation to ground prompts.",
        "CLI tooling and Git workflow integration for automated test generation.",
        "Validation loop to improve output reliability and maintainability.",
      ],
      challenges: [
        "Maintaining reliability across varied code structures (add detail).",
        "Balancing generation speed with validation accuracy.",
      ],
      improvements: [
        "Integrate CI checks for generated tests (add detail).",
        "Broaden coverage and dataset tuning (add detail).",
      ],
      gallery: [],
    },
  },
];
