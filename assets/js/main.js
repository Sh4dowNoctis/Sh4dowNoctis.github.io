const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const translations = {
  en: {
    "header.role": "Software Developer",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "nav.downloadResume": "Download Resume",
    "nav.linkedin": "LinkedIn",
    "nav.github": "GitHub",
    "nav.email": "Email",
    "hero.title": "Software Developer",
    "hero.subtitle":
      "Gameplay systems, AI tooling, and production-ready software.",
    "hero.proof1": "Unity gameplay systems delivered in production internship",
    "hero.proof2": "Rapid prototypes focused on responsiveness and game feel",
    "hero.proof3": "Performance-minded debugging and iteration workflows",
    "hero.ctaDemo": "Watch Demo Reel",
    "hero.previewLabel": "Featured Project",
    "hero.previewSummary":
      "2D platformer prototype focused on building mechanics and fast movement.",
    "hero.previewCta": "View featured work",
    "projects.title": "My Projects",
    "projects.lede": "My personal project and production-focused internships.",
    "projects.contributionTitle": "My contribution",
    "projects.caseStudyBtn": "Case study",
    "projects.internNote": "Work completed during a professional internship.",
    "projects.mediaPlaceholder": "Media coming soon",
    "projects.skybound.title": "SKYBOUND",
    "projects.skybound.groupNote": "Group project (3 contributors)",
    "projects.skybound.summary":
      "School group project focused on building mechanics and fast movement.",
    "projects.skybound.role": "Gameplay Programmer",
    "projects.skybound.highlights.0":
      "Fast movement controller tuned for responsive feel.",
    "projects.skybound.highlights.1":
      "Building mechanics prototype for quick iteration.",
    "projects.skybound.highlights.2":
      "Prototype structure ready for expansion.",
    "projects.skybound.contribution.0":
      "Gameplay systems and core mechanics implementation.",
    "projects.skybound.contribution.1":
      "Player movement, physics, and gameplay feel tuning.",
    "projects.skybound.contribution.2":
      "Integration of animations and visual assets into Unity.",
    "projects.skybound.contribution.3":
      "Iteration support, playtesting, and gameplay balance adjustments.",
    "projects.skybound.case.overview":
      "School group project exploring fast movement and building mechanics. Focused on feel, clarity, and iteration loops.",
    "projects.skybound.case.built.0":
      "Movement controller with tuning hooks for designer iteration.",
    "projects.skybound.case.built.1":
      "Building mechanic prototype with quick placement tests.",
    "projects.skybound.case.built.2":
      "Simple level layout for repeatable playtests.",
    "projects.skybound.case.challenges.0":
      "Balancing speed with readable platforming (add detail).",
    "projects.skybound.case.challenges.1":
      "Communicating build affordances clearly (add detail).",
    "projects.skybound.case.improvements.0":
      "Add more level content and constraints (add detail).",
    "projects.skybound.case.improvements.1":
      "Capture a short gameplay video (add link).",
    "projects.skybound.case.gallery.0.caption":
      "Movement prototype snapshot (placeholder).",
    "projects.skybound.case.gallery.1.caption":
      "Building mechanic test (placeholder).",
    "projects.skybound.playDemo": "Play Demo",
    "projects.happlyz-medical.title":
      "Happlyz Medical - Unity Gameplay Internship (Paris, France)",
    "projects.happlyz-medical.summary":
      "Professional internship as a Unity Gameplay Programmer on LORIO, a medical game-based application connected to a Bluetooth respiratory device.",
    "projects.happlyz-medical.role": "Gameplay Programmer Intern",
    "projects.happlyz-medical.highlights.0":
      "Designed and implemented multiplayer logic for mini-games (Multi Melo Memo).",
    "projects.happlyz-medical.highlights.1":
      "Optimized gameplay systems and performance for Pulmi's Race.",
    "projects.happlyz-medical.highlights.2":
      "Reworked the in-game cosmetic shop into a modular, scalable system.",
    "projects.happlyz-medical.highlights.3":
      "Implemented localization and player progression data visualization.",
    "projects.happlyz-medical.highlights.4":
      "Delivered production-ready features used in a real medical context.",
    "projects.happlyz-medical.case.overview":
      "Worked on LORIO, a medical game-based application tied to a Bluetooth respiratory device, delivering gameplay systems used in production.",
    "projects.happlyz-medical.case.built.0":
      "Multiplayer logic for mini-games, with sync and interaction handling.",
    "projects.happlyz-medical.case.built.1":
      "Gameplay and performance improvements for Pulmi's Race.",
    "projects.happlyz-medical.case.built.2":
      "Cosmetic shop refactor into a modular, scalable system.",
    "projects.happlyz-medical.case.built.3":
      "Localization support and player progression data visualization.",
    "projects.happlyz-medical.case.challenges.0":
      "Balancing production constraints with new gameplay feature work (add detail).",
    "projects.happlyz-medical.case.challenges.1":
      "Maintaining UX consistency while refactoring legacy systems.",
    "projects.happlyz-medical.case.improvements.0":
      "Expand automated regression coverage for key gameplay flows (add detail).",
    "projects.happlyz-medical.case.improvements.1":
      "Add deeper network diagnostics for edge cases (add detail).",
    "projects.happlyz-medical.case.gallery.0.caption":
      "LORIO professional dashboard with patient progress overview.",
    "projects.happlyz-medical.case.gallery.1.caption":
      "Cosmetic customization UI for player personalization.",
    "projects.happlyz-medical.case.gallery.2.caption":
      "Multi Melo Memo mini-game with musical interaction.",
    "projects.happlyz-medical.case.gallery.3.caption":
      "Pulmi's Race gameplay with performance-focused tuning.",
    "projects.potech-obsoft.title":
      "PoTech / OBSoft - AI Test Generation Internship (Lebanon)",
    "projects.potech-obsoft.summary":
      "Professional internship with OBSoft, the engineering and R&D branch of PoTech, designing an AI system to generate unit tests from source code and user stories.",
    "projects.potech-obsoft.role": "AI Engineer Intern",
    "projects.potech-obsoft.highlights.0":
      "Built an AI pipeline using embeddings and retrieval-augmented generation.",
    "projects.potech-obsoft.highlights.1":
      "Automated test generation integrated into CLI and Git workflows.",
    "projects.potech-obsoft.highlights.2":
      "Focused on clean architecture, validation, and maintainability.",
    "projects.potech-obsoft.highlights.3":
      "Improved developer productivity through fast iteration and feedback.",
    "projects.potech-obsoft.case.overview":
      "Designed an AI-driven system to generate unit tests from code and user stories with fast developer feedback loops.",
    "projects.potech-obsoft.case.built.0":
      "AI pipeline using embeddings and retrieval-augmented generation to ground prompts.",
    "projects.potech-obsoft.case.built.1":
      "CLI tooling and Git workflow integration for automated test generation.",
    "projects.potech-obsoft.case.built.2":
      "Validation loop to improve output reliability and maintainability.",
    "projects.potech-obsoft.case.challenges.0":
      "Maintaining reliability across varied code structures (add detail).",
    "projects.potech-obsoft.case.challenges.1":
      "Balancing generation speed with validation accuracy.",
    "projects.potech-obsoft.case.improvements.0":
      "Integrate CI checks for generated tests (add detail).",
    "projects.potech-obsoft.case.improvements.1":
      "Broaden coverage and dataset tuning (add detail).",
    "tags.unity": "Unity",
    "tags.csharp": "C#",
    "tags.gameFeel": "Game Feel",
    "tags.prototype": "Prototype",
    "tags.multiplayer": "Multiplayer",
    "tags.ux": "UX",
    "tags.production": "Production",
    "tags.python": "Python",
    "tags.php": "PHP",
    "tags.symfony": "Symfony",
    "tags.rag": "RAG",
    "tags.chromadb": "ChromaDB",
    "tags.llm": "LLM",
    "tags.gameplay": "Gameplay",
    "skills.title": "Technical Experience",
    "skills.lede": "Grouped by strength and focus areas.",
    "skills.core": "Core",
    "skills.familiar": "Familiar",
    "skills.chips.unity": "Unity",
    "skills.chips.csharp": "C#",
    "skills.chips.gameplayProgramming": "Gameplay Programming",
    "skills.chips.inputTuning": "Input Tuning",
    "skills.chips.gameFeel": "Game Feel",
    "skills.chips.debugging": "Debugging",
    "skills.chips.optimization": "Optimization",
    "skills.chips.ui": "UI",
    "skills.chips.prototyping": "Prototyping",
    "skills.chips.multiplayerBasics": "Multiplayer Basics",
    "skills.chips.python": "Python",
    "skills.chips.node": "Node.js",
    "skills.chips.php": "PHP",
    "skills.chips.mysql": "MySQL",
    "skills.chips.postgres": "PostgreSQL",
    "skills.chips.git": "Git",
    "skills.chips.ci": "CI Basics",
    "about.title": "About",
    "about.summary":
      "Software developer with a gameplay programming foundation in Unity and C#. I now build AI tooling and backend workflows while still shipping responsive gameplay systems and prototypes.",
    "about.bullets.0":
      "Rebuilt a shop system into a modern inventory structure.",
    "about.bullets.1": "Improved game feel, UX, and performance in production.",
    "about.bullets.2": "Added multiplayer functionality for select modes.",
    "about.bullets.3": "Improved UX and overall responsiveness.",
    "about.chips.gameFeel": "Game Feel",
    "about.chips.systemsDesign": "Systems Design",
    "about.chips.iterationSpeed": "Iteration Speed",
    "about.chips.teamCollaboration": "Team Collaboration",
    "resume.title": "Resume",
    "resume.lede": "Quick preview and a downloadable PDF.",
    "resume.download": "Download Resume",
    "resume.toggleOpen": "Open inline preview",
    "resume.toggleClose": "Close inline preview",
    "resume.howTitle": "How I Work",
    "resume.focusTitle": "Gameplay Focus",
    "resume.focus.0": "Feel-first systems (movement, abilities, combat loops)",
    "resume.focus.1": "Fast iteration driven by playtesting",
    "resume.focus.2": "Responsive input and readable feedback",
    "resume.techTitle": "Technical Mindset",
    "resume.tech.0": "Clean, maintainable C# architecture",
    "resume.tech.1": "Debugging and profiling as part of development",
    "resume.tech.2": "Performance-aware even during prototyping",
    "resume.teamTitle": "Team & Production",
    "resume.team.0": "Comfortable working with designers and artists",
    "resume.team.1": "Used to refactors and production constraints",
    "resume.team.2": "Clear communication, no overengineering",
    "resume.footnote": "Full experience and details available in the resume.",
    "contact.title": "Contact",
    "contact.lede": "Reach out for opportunities, collaboration, or questions.",
    "contact.heading": "Let's connect",
    "contact.copy":
      "Open to gameplay programming roles and collaborations. Reach out and I'll reply quickly.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.copyBtn": "Copy",
    "contact.copySuccess": "Copied!",
    "footer.name": "Carl Van Hoorebeke - Software Developer",
    "footer.location": "Based in France - open to opportunities",
    backToTop: "Top",
    "modal.close": "Close",
    "modal.built": "What I built",
    "modal.challenges": "Challenges",
    "modal.improvements": "What I'd improve next",
    "modal.gallery": "Media gallery",
    "modal.tech": "Tech used",
    "demo.title": "Demo Reel",
    "demo.description": "",
  },
  fr: {
    "header.role": "Développeur logiciel",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.resume": "CV",
    "nav.contact": "Contact",
    "nav.downloadResume": "Télécharger le CV",
    "nav.linkedin": "LinkedIn",
    "nav.github": "GitHub",
    "nav.email": "Email",
    "hero.title": "Développeur logiciel",
    "hero.subtitle":
      "Systèmes de gameplay, outils IA et logiciels prêts pour la production.",
    "hero.proof1":
      "Systèmes de gameplay Unity livrés en production lors de stages",
    "hero.proof2": "Prototypes rapides axés sur la réactivité et le game feel",
    "hero.proof3": "Debugging et itération orientés performance",
    "hero.ctaDemo": "Voir la démo",
    "hero.previewLabel": "Projet mis en avant",
    "hero.previewSummary":
      "Prototype de plateforme 2D axé sur les mécaniques de construction et la vitesse.",
    "hero.previewCta": "Voir les projets phares",
    "projects.title": "Mes projets",
    "projects.lede": "Mon projet personnel et des stages orientés production.",
    "projects.contributionTitle": "Ma contribution",
    "projects.caseStudyBtn": "Étude de cas",
    "projects.internNote":
      "Travail réalisé dans le cadre d'un stage professionnel.",
    "projects.mediaPlaceholder": "Média à venir",
    "projects.skybound.title": "SKYBOUND",
    "projects.skybound.groupNote": "Projet de groupe (3 contributeurs)",
    "projects.skybound.summary":
      "Projet de groupe scolaire axé sur les mécaniques de construction et la vitesse.",
    "projects.skybound.role": "Programmeur gameplay",
    "projects.skybound.highlights.0":
      "Contrôleur de mouvement rapide ajusté pour un ressenti réactif.",
    "projects.skybound.highlights.1":
      "Prototype de mécaniques de construction pour itération rapide.",
    "projects.skybound.highlights.2":
      "Structure de prototype prête à être étendue.",
    "projects.skybound.contribution.0":
      "Mise en place des systèmes de gameplay et des mécaniques principales.",
    "projects.skybound.contribution.1":
      "Déplacement du joueur, physique et réglage du game feel.",
    "projects.skybound.contribution.2":
      "Intégration des animations et assets visuels dans Unity.",
    "projects.skybound.contribution.3":
      "Support d'itération, playtests et ajustements d'équilibrage.",
    "projects.skybound.case.overview":
      "Projet de groupe scolaire explorant des mouvements rapides et des mécaniques de construction, avec un focus sur le ressenti, la lisibilité et l’itération.",
    "projects.skybound.case.built.0":
      "Contrôleur de mouvement avec points de réglage pour l’itération.",
    "projects.skybound.case.built.1":
      "Prototype de mécanique de construction avec tests de placement rapides.",
    "projects.skybound.case.built.2":
      "Niveau simple pour des playtests répétables.",
    "projects.skybound.case.challenges.0":
      "Équilibrer la vitesse avec une plateforme lisible (à détailler).",
    "projects.skybound.case.challenges.1":
      "Rendre les possibilités de construction claires (à détailler).",
    "projects.skybound.case.improvements.0":
      "Ajouter plus de contenu et de contraintes de niveau (à détailler).",
    "projects.skybound.case.improvements.1":
      "Capturer une courte vidéo de gameplay (ajouter le lien).",
    "projects.skybound.case.gallery.0.caption":
      "Aperçu du prototype de mouvement (placeholder).",
    "projects.skybound.case.gallery.1.caption":
      "Test de mécanique de construction (placeholder).",
    "projects.skybound.playDemo": "Jouer à la démo",
    "projects.happlyz-medical.title":
      "Happlyz Medical — Stage en gameplay Unity (Paris, France)",
    "projects.happlyz-medical.summary":
      "Stage professionnel en tant que Gameplay Programmer Unity sur LORIO, une application médicale de jeux connectée à un dispositif respiratoire Bluetooth.",
    "projects.happlyz-medical.role": "Stagiaire programmeur gameplay",
    "projects.happlyz-medical.highlights.0":
      "Conception et implémentation de la logique multijoueur pour des mini-jeux (Multi Melo Memo).",
    "projects.happlyz-medical.highlights.1":
      "Optimisation des systèmes de gameplay et des performances pour Pulmi's Race.",
    "projects.happlyz-medical.highlights.2":
      "Refonte de la boutique cosmétique en un système modulaire et évolutif.",
    "projects.happlyz-medical.highlights.3":
      "Mise en place de la localisation et de la visualisation des données de progression.",
    "projects.happlyz-medical.highlights.4":
      "Livraison de fonctionnalités prêtes pour la production dans un contexte médical réel.",
    "projects.happlyz-medical.case.overview":
      "Travail sur LORIO, une application médicale de jeux liée à un dispositif respiratoire Bluetooth, avec des systèmes de gameplay utilisés en production.",
    "projects.happlyz-medical.case.built.0":
      "Logique multijoueur pour des mini-jeux, avec synchronisation et interactions.",
    "projects.happlyz-medical.case.built.1":
      "Améliorations du gameplay et des performances pour Pulmi's Race.",
    "projects.happlyz-medical.case.built.2":
      "Refonte de la boutique cosmétique en système modulaire et évolutif.",
    "projects.happlyz-medical.case.built.3":
      "Support de la localisation et visualisation des données de progression.",
    "projects.happlyz-medical.case.challenges.0":
      "Gérer les contraintes de production tout en ajoutant des fonctionnalités (à détailler).",
    "projects.happlyz-medical.case.challenges.1":
      "Maintenir la cohérence UX lors de la refonte d'anciens systèmes.",
    "projects.happlyz-medical.case.improvements.0":
      "Étendre la couverture des tests de régression pour les flux clés (à détailler).",
    "projects.happlyz-medical.case.improvements.1":
      "Ajouter des diagnostics réseau plus poussés pour les cas limites (à détailler).",
    "projects.happlyz-medical.case.gallery.0.caption":
      "Tableau de bord LORIO avec suivi de progression des patients.",
    "projects.happlyz-medical.case.gallery.1.caption":
      "Interface de personnalisation cosmétique.",
    "projects.happlyz-medical.case.gallery.2.caption":
      "Mini-jeu Multi Melo Memo avec interaction musicale.",
    "projects.happlyz-medical.case.gallery.3.caption":
      "Gameplay de Pulmi's Race optimisé pour la performance.",
    "projects.potech-obsoft.title":
      "PoTech / OBSoft — Stage génération de tests IA (Liban)",
    "projects.potech-obsoft.summary":
      "Stage professionnel chez OBSoft, branche ingénierie et R&D de PoTech, pour concevoir un système IA générant des tests unitaires à partir du code source et des user stories.",
    "projects.potech-obsoft.role": "Stagiaire ingénieur IA",
    "projects.potech-obsoft.highlights.0":
      "Pipeline IA basé sur des embeddings et le RAG.",
    "projects.potech-obsoft.highlights.1":
      "Génération automatique de tests intégrée au CLI et aux workflows Git.",
    "projects.potech-obsoft.highlights.2":
      "Architecture propre, validation et maintenabilité.",
    "projects.potech-obsoft.highlights.3":
      "Productivité améliorée grâce à des itérations rapides et du feedback.",
    "projects.potech-obsoft.case.overview":
      "Conception d’un système IA pour générer des tests unitaires à partir du code et des user stories, avec des boucles de feedback rapides.",
    "projects.potech-obsoft.case.built.0":
      "Pipeline IA utilisant des embeddings et le RAG pour ancrer les prompts.",
    "projects.potech-obsoft.case.built.1":
      "Outils CLI et intégration au workflow Git pour la génération automatique.",
    "projects.potech-obsoft.case.built.2":
      "Boucle de validation pour améliorer la fiabilité et la maintenabilité.",
    "projects.potech-obsoft.case.challenges.0":
      "Fiabiliser les résultats sur des structures de code variées (à détailler).",
    "projects.potech-obsoft.case.challenges.1":
      "Équilibrer la vitesse de génération et la précision de validation.",
    "projects.potech-obsoft.case.improvements.0":
      "Intégrer des vérifications CI pour les tests générés (à détailler).",
    "projects.potech-obsoft.case.improvements.1":
      "Élargir la couverture et ajuster les datasets (à détailler).",
    "tags.unity": "Unity",
    "tags.csharp": "C#",
    "tags.gameFeel": "Game feel",
    "tags.prototype": "Prototype",
    "tags.multiplayer": "Multijoueur",
    "tags.ux": "UX",
    "tags.production": "Production",
    "tags.python": "Python",
    "tags.php": "PHP",
    "tags.symfony": "Symfony",
    "tags.rag": "RAG",
    "tags.chromadb": "ChromaDB",
    "tags.llm": "LLM",
    "tags.gameplay": "Gameplay",
    "skills.title": "Expérience technique",
    "skills.lede": "Regroupé par niveau et domaines.",
    "skills.core": "Essentiel",
    "skills.familiar": "Connaissances",
    "skills.chips.unity": "Unity",
    "skills.chips.csharp": "C#",
    "skills.chips.gameplayProgramming": "Programmation gameplay",
    "skills.chips.inputTuning": "Réglage des entrées",
    "skills.chips.gameFeel": "Game feel",
    "skills.chips.debugging": "Debugging",
    "skills.chips.optimization": "Optimisation",
    "skills.chips.ui": "UI",
    "skills.chips.prototyping": "Prototypage",
    "skills.chips.multiplayerBasics": "Bases multijoueur",
    "skills.chips.python": "Python",
    "skills.chips.node": "Node.js",
    "skills.chips.php": "PHP",
    "skills.chips.mysql": "MySQL",
    "skills.chips.postgres": "PostgreSQL",
    "skills.chips.git": "Git",
    "skills.chips.ci": "Bases CI",
    "about.title": "À propos",
    "about.summary":
      "Développeur logiciel avec un socle en programmation gameplay sous Unity et C#. Je conçois désormais des outils IA et des workflows backend tout en continuant à livrer des systèmes de gameplay et des prototypes réactifs.",
    "about.bullets.0":
      "Refonte d'une boutique en structure d'inventaire moderne.",
    "about.bullets.1":
      "Amélioration du game feel, de l'UX et des performances en production.",
    "about.bullets.2":
      "Ajout de fonctionnalités multijoueur pour certains modes.",
    "about.bullets.3": "Amélioration de l'UX et de la réactivité globale.",
    "about.chips.gameFeel": "Game feel",
    "about.chips.systemsDesign": "Conception de systèmes",
    "about.chips.iterationSpeed": "Vitesse d'itération",
    "about.chips.teamCollaboration": "Collaboration d'équipe",
    "resume.title": "CV",
    "resume.lede": "Aperçu rapide et PDF téléchargeable.",
    "resume.download": "Télécharger le CV",
    "resume.toggleOpen": "Ouvrir l'aperçu intégré",
    "resume.toggleClose": "Fermer l'aperçu intégré",
    "resume.howTitle": "Ma façon de travailler",
    "resume.focusTitle": "Focus gameplay",
    "resume.focus.0":
      "Systèmes centrés sur le ressenti (mouvement, capacités, boucles de combat)",
    "resume.focus.1": "Itération rapide guidée par les playtests",
    "resume.focus.2": "Entrées réactives et feedback lisible",
    "resume.techTitle": "Approche technique",
    "resume.tech.0": "Architecture C# propre et maintenable",
    "resume.tech.1": "Debugging et profiling intégrés au développement",
    "resume.tech.2": "Attention aux performances même en prototypage",
    "resume.teamTitle": "Équipe & production",
    "resume.team.0": "À l’aise avec designers et artistes",
    "resume.team.1": "Habitué aux refactors et contraintes de production",
    "resume.team.2": "Communication claire, pas de sur-ingénierie",
    "resume.footnote": "L'expérience complète est disponible dans le CV.",
    "contact.title": "Contact",
    "contact.lede":
      "Disponible pour des opportunités, collaborations ou questions.",
    "contact.heading": "Restons en contact",
    "contact.copy":
      "Ouvert aux rôles de gameplay programming et aux collaborations. Écrivez-moi, je répondrai rapidement.",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.copyBtn": "Copier",
    "contact.copySuccess": "Copié !",
    "footer.name": "Carl Van Hoorebeke - Développeur logiciel",
    "footer.location": "Basé en France - ouvert aux opportunités",
    backToTop: "Haut",
    "modal.close": "Fermer",
    "modal.built": "Ce que j'ai construit",
    "modal.challenges": "Défis",
    "modal.improvements": "Améliorations à venir",
    "modal.gallery": "Galerie média",
    "modal.tech": "Technos utilisées",
    "demo.title": "Démo vidéo",
    "demo.description": "",
  },
};

if (!window.demoReel) {
  window.demoReel = {
    title: "Demo Reel",
    description: "",
    embedUrl: "",
  };
}

if (!Array.isArray(window.projects) || window.projects.length === 0) {
  window.projects = [
    {
      id: "happlyz-medical",
      title: "Happlyz Medical - Unity Gameplay Internship (Paris, France)",
      year: "2023",
      role: "Gameplay Programmer Intern",
      summary:
        "Professional internship as a Unity Gameplay Programmer on LORIO, a medical game-based application connected to a Bluetooth respiratory device.",
      tags: ["Unity", "C#", "Multiplayer", "UX", "Production"],
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
      tags: ["Python", "PHP", "Symfony", "RAG", "ChromaDB", "LLM"],
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
  console.error("Project data missing: assets/js/projects.js (fallback used)");
}
const tagKeyMap = {
  Unity: "tags.unity",
  "C#": "tags.csharp",
  "Game Feel": "tags.gameFeel",
  Prototype: "tags.prototype",
  Multiplayer: "tags.multiplayer",
  UX: "tags.ux",
  Production: "tags.production",
  Python: "tags.python",
  PHP: "tags.php",
  Symfony: "tags.symfony",
  RAG: "tags.rag",
  ChromaDB: "tags.chromadb",
  LLM: "tags.llm",
  Gameplay: "tags.gameplay",
};

const getStoredLanguage = () => {
  try {
    const stored = localStorage.getItem("language");
    return stored && translations[stored] ? stored : "en";
  } catch (e) {
    return "en";
  }
};

let currentLanguage = getStoredLanguage();

const getTranslation = (key, fallback = "") => {
  const currentMap = translations[currentLanguage];
  const value = currentMap ? currentMap[key] : undefined;
  if (value !== undefined) return value;
  const enMap = translations.en;
  const fallbackValue = enMap ? enMap[key] : undefined;
  if (fallbackValue !== undefined) return fallbackValue;
  return fallback;
};

const renderTag = (tag, className) => {
  const key = tagKeyMap[tag];
  const label = key ? getTranslation(key, tag) : tag;
  const i18nAttr = key ? ` data-i18n="${key}"` : "";
  return `<span class="${className}"${i18nAttr}>${label}</span>`;
};

const getClosestTarget = (target, selector) => {
  if (!target) return null;
  if (target.closest) return target.closest(selector);
  if (target.parentElement && target.parentElement.closest) {
    return target.parentElement.closest(selector);
  }
  return null;
};

const smoothScrollTo = (target) => {
  if (!target) return;
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (link.dataset.placeholder === "true") {
      event.preventDefault();
      return;
    }
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    smoothScrollTo(target);
  });
});

document.addEventListener("click", (event) => {
  const placeholderLink = getClosestTarget(
    event.target,
    'a[data-placeholder="true"]',
  );
  if (placeholderLink) {
    event.preventDefault();
  }
});

const navLinks = document.querySelectorAll(".nav-link");
if (navLinks.length) {
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

let revealObserver = null;
if (!prefersReducedMotion) {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
}

const observeReveal = (elements) => {
  elements.forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add("in-view");
    } else if (revealObserver) {
      revealObserver.observe(el);
    }
  });
};

observeReveal(document.querySelectorAll(".reveal"));

const backToTop = document.getElementById("back-to-top");
if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
  };
  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });
}

const resumeToggle = document.querySelector("[data-resume-toggle]");
const resumePanel = document.querySelector("[data-resume-panel]");
if (resumeToggle && resumePanel) {
  const resumeFrame = resumePanel.querySelector("iframe");
  resumeToggle.addEventListener("click", () => {
    const isOpen = resumeToggle.getAttribute("aria-expanded") === "true";
    if (!isOpen) {
      const src = resumeFrame.getAttribute("data-src");
      if (src && !resumeFrame.getAttribute("src")) {
        resumeFrame.setAttribute("src", src);
      }
      resumePanel.hidden = false;
      resumeToggle.setAttribute("aria-expanded", "true");
      resumeToggle.textContent = getTranslation(
        "resume.toggleClose",
        "Close inline preview",
      );
    } else {
      resumePanel.hidden = true;
      resumeToggle.setAttribute("aria-expanded", "false");
      resumeToggle.textContent = getTranslation(
        "resume.toggleOpen",
        "Open inline preview",
      );
      resumeFrame.removeAttribute("src");
    }
  });
}

const emailEl = document.querySelector("[data-email]");
if (emailEl) {
  const user = emailEl.getAttribute("data-user");
  const domain = emailEl.getAttribute("data-domain");
  if (user && domain) {
    const email = `${user}@${domain}`;
    emailEl.textContent = email;
    emailEl.setAttribute("href", `mailto:${email}`);
  }
}

const phoneEl = document.querySelector("[data-phone]");
if (phoneEl) {
  const display = phoneEl.getAttribute("data-value");
  const tel = phoneEl.getAttribute("data-tel");
  if (display && tel) {
    phoneEl.textContent = display;
    phoneEl.setAttribute("href", `tel:${tel}`);
  }
}

const copyButtons = document.querySelectorAll(".copy-btn[data-copy]");
copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const item = button.closest(".contact-item");
    if (!item) return;
    const valueEl = item.querySelector(".contact-value");
    const value = valueEl ? valueEl.textContent.trim() : "";
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    button.classList.add("copied");
    const originalText = button.textContent;
    button.textContent = getTranslation("contact.copySuccess", "Copied!");
    setTimeout(() => {
      button.classList.remove("copied");
      button.textContent = getTranslation("contact.copyBtn", originalText);
    }, 1500);
  });
});

const languageButtons = document.querySelectorAll("[data-lang]");

const updateLanguageButtons = () => {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
};
let activeProjectId = null;
const applyTranslations = () => {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = getTranslation(key);
    if (!value) return;
    if (el.classList.contains("icon-btn")) {
      if (el.hasAttribute("data-tooltip")) {
        el.setAttribute("data-tooltip", value);
      }
      if (el.hasAttribute("title")) {
        el.setAttribute("title", value);
      }
      if (el.hasAttribute("aria-label")) {
        el.setAttribute("aria-label", value);
      }
      return;
    }
    el.textContent = value;
    if (el.hasAttribute("data-tooltip")) {
      el.setAttribute("data-tooltip", value);
    }
    if (el.hasAttribute("title")) {
      el.setAttribute("title", value);
    }
    if (el.hasAttribute("aria-label")) {
      el.setAttribute("aria-label", value);
    }
  });

  if (window.demoReel) {
    window.demoReel.title = getTranslation("demo.title", window.demoReel.title);
    window.demoReel.description = getTranslation(
      "demo.description",
      window.demoReel.description,
    );
  }

  if (resumeToggle) {
    const isOpen = resumeToggle.getAttribute("aria-expanded") === "true";
    const toggleKey = isOpen ? "resume.toggleClose" : "resume.toggleOpen";
    resumeToggle.textContent = getTranslation(
      toggleKey,
      resumeToggle.textContent,
    );
  }

  if (typeof activeProjectId !== "undefined" && activeProjectId) {
    const modalEl = document.getElementById("project-modal");
    if (modalEl && modalEl.classList.contains("is-open")) {
      renderCaseStudyContent(activeProjectId);
    }
  }

  if (languageButtons.length) {
    updateLanguageButtons();
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLang = button.dataset.lang;
    if (!nextLang || !translations[nextLang]) return;
    currentLanguage = nextLang;
    try {
      localStorage.setItem("language", currentLanguage);
    } catch (e) {}
    applyTranslations();
  });
});

const featuredGrid = document.getElementById("featured-grid");

const buildLinkButton = (link, variant) => {
  if (!link) return "";
  const hasUrl = link.url && link.url.trim() !== "";
  const isPlaceholder = link.placeholder || !hasUrl;
  const label = link.label || "Link";
  const classes = `btn ${variant || "ghost"}`;
  const attrs = isPlaceholder
    ? 'data-placeholder="true" aria-disabled="true"'
    : 'target="_blank" rel="noreferrer"';
  const href = hasUrl ? link.url : "#";
  const i18nAttr = link.i18nKey ? ` data-i18n="${link.i18nKey}"` : "";
  return `<a class="${classes}" href="${href}" ${attrs}${i18nAttr}>${label}</a>`;
};

const getProjectLinks = (project) => {
  const links = [];
  if (project.videoUrl || project.videoPlaceholder) {
    links.push({
      url: project.videoUrl,
      label: project.videoLabel || "Video",
      placeholder: project.videoPlaceholder,
    });
  }
  if (project.repoUrl || project.repoPlaceholder) {
    links.push({
      url: project.repoUrl,
      label: project.repoLabel || "Repo",
      placeholder: project.repoPlaceholder,
    });
  }
  if (project.buildUrl || project.buildPlaceholder) {
    links.push({
      url: project.buildUrl,
      label: project.buildLabel || "Build",
      placeholder: project.buildPlaceholder,
    });
  }
  return links;
};

const buildCaseStudyButton = (project) =>
  `<button class="btn ghost js-case-study" type="button" data-project-id="${project.id}" data-i18n="projects.caseStudyBtn">Case study</button>`;

const buildProjectActions = (project) => {
  const links = getProjectLinks(project);
  const buttons = [];
  if (links[0]) buttons.push(buildLinkButton(links[0], "primary"));
  if (links[1]) buttons.push(buildLinkButton(links[1], "ghost"));
  if (links[2]) buttons.push(buildLinkButton(links[2], "ghost"));
  buttons.push(buildCaseStudyButton(project));
  return buttons.join("");
};

const buildFeaturedCard = (project) => {
  const keyBase = `projects.${project.id}`;
  const highlights = (project.highlights || [])
    .map(
      (item, index) =>
        `<li data-i18n="${keyBase}.highlights.${index}">${item}</li>`,
    )
    .join("");
  const tags = (project.tags || [])
    .map((tag) => renderTag(tag, "chip"))
    .join("");
  const metaTags = (project.tags || [])
    .slice(0, 3)
    .map((tag) => renderTag(tag, "meta-pill"))
    .join("");
  const media = project.image
    ? `<img src="${project.image}" alt="${project.title} gameplay screenshot" loading="lazy" decoding="async">`
    : `<div class="media-placeholder" data-i18n="projects.mediaPlaceholder">${getTranslation("projects.mediaPlaceholder", "Media coming soon")}</div>`;
  const noteKey = project.noteKey || "projects.internNote";
  const note = project.note
    ? `<p class="project-note" data-i18n="${noteKey}">${project.note}</p>`
    : "";
  const groupNote = project.groupNote
    ? `<p class="project-subnote" data-i18n="${keyBase}.groupNote">${project.groupNote}</p>`
    : "";
  const contributionItems = (project.contribution || [])
    .map(
      (item, index) =>
        `<li data-i18n="${keyBase}.contribution.${index}">${item}</li>`,
    )
    .join("");
  const contribution = contributionItems
    ? `
      <div class="project-contribution">
        <h4 data-i18n="projects.contributionTitle">My contribution</h4>
        <ul>${contributionItems}</ul>
      </div>
    `
    : "";
  let actions = "";
  if (project.showActions === "case-study") {
    actions = `<div class="project-actions">${buildCaseStudyButton(project)}</div>`;
  } else if (project.showActions === "build-only") {
    if (project.buildUrl) {
      actions = `<div class="project-actions">${buildLinkButton(
        {
          url: project.buildUrl,
          label: project.buildLabel || "Play Demo",
          i18nKey: `${keyBase}.playDemo`,
        },
        "primary",
      )}</div>`;
    }
  } else if (project.showActions !== false) {
    actions = `<div class="project-actions">${buildProjectActions(project)}</div>`;
  }
  return `
    <article class="project-card featured-card reveal" data-project-id="${project.id}">
      <div class="project-media">
        ${media}
        <div class="project-meta">
          ${metaTags}
        </div>
      </div>
      <div class="project-body">
        <div class="project-top">
          <span>${project.year}</span>
          <span data-i18n="${keyBase}.role">${getTranslation(`${keyBase}.role`, project.role)}</span>
        </div>
        <h3 class="project-title" data-i18n="${keyBase}.title">${project.title}</h3>
        ${groupNote}
        <p class="project-summary" data-i18n="${keyBase}.summary">${project.summary}</p>
        <ul class="project-highlights">${highlights}</ul>
        ${contribution}
        <div class="tag-row">${tags}</div>
        ${note}
        ${actions}
      </div>
    </article>
  `;
};

const getProjectData = () => {
  if (!Array.isArray(window.projects) || window.projects.length === 0) {
    console.error("Project data missing: assets/js/projects.js");
    return null;
  }
  return window.projects;
};

const renderProjects = (data) => {
  if (!featuredGrid || !data) return;
  const featuredProjects = data.filter((project) => project.featured);

  if (featuredProjects.length > 0) {
    featuredGrid.innerHTML = featuredProjects.map(buildFeaturedCard).join("");
  }

  observeReveal(document.querySelectorAll(".reveal:not(.in-view)"));
  applyTranslations();
};

let caseStudyDelegated = false;
const bindCaseStudyButtons = () => {
  if (caseStudyDelegated) return;
  caseStudyDelegated = true;
  document.addEventListener("click", (event) => {
    const button = getClosestTarget(event.target, ".js-case-study");
    if (!button) return;
    const projectId = button.getAttribute("data-project-id");
    if (!projectId) return;
    openCaseStudyModal(projectId, button);
  });
};

const projectData = getProjectData();
if (projectData) {
  renderProjects(projectData);
}

const createModalController = (modalId, onClose) => {
  const modal = document.getElementById(modalId);
  if (!modal) return null;
  let lastFocusedElement = null;

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (onClose) onClose();
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const open = (trigger) => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    lastFocusedElement = trigger || document.activeElement;
    const focusable = modal.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length) {
      focusable[0].focus();
    }
  };

  const closeButton = modal.querySelector(".modal-close");
  if (closeButton) {
    closeButton.addEventListener("click", close);
  }
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      close();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      close();
    }
    if (event.key === "Tab") {
      const focusable = modal.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  return { modal, open, close };
};

const createLightbox = () => {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="lightbox-inner" role="dialog" aria-modal="true" aria-label="Image preview">
      <button class="lightbox-close" type="button" data-i18n="modal.close">Close</button>
      <img class="lightbox-image" alt="" />
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(overlay);

  const imageEl = overlay.querySelector(".lightbox-image");
  const captionEl = overlay.querySelector(".lightbox-caption");
  const closeButton = overlay.querySelector(".lightbox-close");

  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (imageEl) {
      imageEl.removeAttribute("src");
      imageEl.removeAttribute("alt");
    }
    if (captionEl) {
      captionEl.textContent = "";
      captionEl.hidden = true;
    }
  };

  const open = (src, altText, caption) => {
    if (!src || !imageEl) return;
    imageEl.setAttribute("src", src);
    imageEl.setAttribute("alt", altText || "");
    if (captionEl) {
      captionEl.textContent = caption || "";
      captionEl.hidden = !(caption && caption.trim());
    }
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    if (closeButton) {
      closeButton.focus();
    }
  };

  if (closeButton) {
    closeButton.addEventListener("click", close);
  }

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      close();
    }
  });

  document.addEventListener(
    "keydown",
    (event) => {
      if (!overlay.classList.contains("is-open")) return;
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        close();
      }
    },
    true,
  );

  return { open, close, overlay };
};

const lightbox = createLightbox();

document.addEventListener("click", (event) => {
  const image = getClosestTarget(event.target, "#modal-gallery img");
  if (!image || !lightbox) return;
  const figure = image.closest("figure");
  const captionEl = figure ? figure.querySelector("figcaption") : null;
  const caption = captionEl ? captionEl.textContent.trim() : "";
  lightbox.open(image.getAttribute("src"), image.getAttribute("alt"), caption);
});

const demoModalController = createModalController("demo-modal", () => {
  const demoVideo = document.getElementById("demo-video");
  if (demoVideo) {
    demoVideo.removeAttribute("src");
  }
});

const demoTrigger = document.getElementById("demo-reel-trigger");
const openDemoModal = (trigger) => {
  if (!demoModalController) return;
  const title = document.getElementById("demo-title");
  const description = document.getElementById("demo-description");
  const video = document.getElementById("demo-video");
  const reel = window.demoReel || {
    title: getTranslation("demo.title", "Demo Reel"),
    description: getTranslation(
      "demo.description",
      "Short reel of gameplay systems, prototypes, and iteration snapshots.",
    ),
    embedUrl: "",
  };
  if (title) title.textContent = reel.title;
  if (description) description.textContent = reel.description;
  if (video) {
    if (reel.embedUrl) {
      video.setAttribute("src", reel.embedUrl);
    } else {
      video.removeAttribute("src");
    }
  }
  demoModalController.open(trigger);
};

if (demoTrigger) {
  demoTrigger.addEventListener("click", () => openDemoModal(demoTrigger));
}

document.addEventListener("click", (event) => {
  const demoButton = getClosestTarget(event.target, "[data-open-demo]");
  if (!demoButton) return;
  event.preventDefault();
  openDemoModal(demoButton);
});

const projectModalController = createModalController("project-modal");

const renderCaseStudyContent = (projectId) => {
  if (!projectModalController || !window.projects) return;
  const project = window.projects.find((item) => item.id === projectId);
  if (!project) return;

  const titleEl = document.getElementById("modal-title");
  const metaEl = document.getElementById("modal-meta");
  const overviewEl = document.getElementById("modal-overview");
  const builtEl = document.getElementById("modal-built");
  const challengesEl = document.getElementById("modal-challenges");
  const improvementsEl = document.getElementById("modal-improvements");
  const galleryEl = document.getElementById("modal-gallery");
  const techEl = document.getElementById("modal-tech");
  const linksEl = document.getElementById("modal-links");

  const caseStudy = project.caseStudy || {};
  const keyBase = `projects.${project.id}`;
  titleEl.textContent = getTranslation(`${keyBase}.title`, project.title);
  metaEl.textContent = `${getTranslation(`${keyBase}.role`, project.role)} - ${project.year}`;
  overviewEl.textContent = getTranslation(
    `${keyBase}.case.overview`,
    caseStudy.overview || project.summary,
  );
  builtEl.innerHTML = (caseStudy.built || [])
    .map(
      (item, index) =>
        `<li>${getTranslation(`${keyBase}.case.built.${index}`, item)}</li>`,
    )
    .join("");
  challengesEl.innerHTML = (caseStudy.challenges || [])
    .map(
      (item, index) =>
        `<li>${getTranslation(`${keyBase}.case.challenges.${index}`, item)}</li>`,
    )
    .join("");
  improvementsEl.innerHTML = (caseStudy.improvements || [])
    .map(
      (item, index) =>
        `<li>${getTranslation(`${keyBase}.case.improvements.${index}`, item)}</li>`,
    )
    .join("");

  if (galleryEl) {
    const galleryItems = caseStudy.gallery || [];
    const gallerySection = galleryEl.closest(".modal-section");
    if (galleryItems.length === 0) {
      galleryEl.innerHTML = "";
      if (gallerySection) {
        gallerySection.style.display = "none";
      }
    } else {
      if (gallerySection) {
        gallerySection.style.display = "";
      }
      galleryEl.innerHTML = galleryItems
        .map(
          (item, index) => `
      <figure>
        <img src="${item.src}" alt="${project.title} gallery image" loading="lazy" decoding="async">
        <figcaption>${getTranslation(`${keyBase}.case.gallery.${index}.caption`, item.caption)}</figcaption>
      </figure>
      `,
        )
        .join("");
    }
  }

  if (techEl) {
    techEl.innerHTML = (project.tags || [])
      .map((tag) => renderTag(tag, "chip"))
      .join("");
  }

  if (linksEl) {
    const linkItems = getProjectLinks(project);
    const actions = linkItems.map((link) => buildLinkButton(link, "ghost"));
    linksEl.innerHTML = actions.join("");
    linksEl.style.display = actions.length ? "flex" : "none";
  }
};

const openCaseStudyModal = (projectId, trigger) => {
  if (!projectModalController || !window.projects) return;
  activeProjectId = projectId;
  try {
    renderCaseStudyContent(projectId);
  } catch (error) {
    console.error("Case study render failed:", error);
  }
  projectModalController.open(trigger);
};

bindCaseStudyButtons();
applyTranslations();

