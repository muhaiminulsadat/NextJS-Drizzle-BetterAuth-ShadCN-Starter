# Graph Report - keep-notes  (2026-08-09)

## Corpus Check
- 46 files · ~24,465 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 393 nodes · 451 edges · 36 communities (32 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `25722637`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_App Views & Navigation|App Views & Navigation]]
- [[_COMMUNITY_PRD & Spec Templates|PRD & Spec Templates]]
- [[_COMMUNITY_Production Dependencies|Production Dependencies]]
- [[_COMMUNITY_ShadCN Component Architecture|ShadCN Component Architecture]]
- [[_COMMUNITY_Dev & Build Dependencies|Dev & Build Dependencies]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Product Management Principles|Product Management Principles]]
- [[_COMMUNITY_PRD Structure & AI Prompts|PRD Structure & AI Prompts]]
- [[_COMMUNITY_Product Leaders & Insights|Product Leaders & Insights]]
- [[_COMMUNITY_PRD Skill Standards|PRD Skill Standards]]
- [[_COMMUNITY_Project Readme & Overview|Project Readme & Overview]]
- [[_COMMUNITY_Database & Auth API Routes|Database & Auth API Routes]]
- [[_COMMUNITY_Deslop Code Review Guidelines|Deslop Code Review Guidelines]]
- [[_COMMUNITY_Product Case Studies & Examples|Product Case Studies & Examples]]
- [[_COMMUNITY_Design Engineering Skill|Design Engineering Skill]]
- [[_COMMUNITY_Next.js Upgrade & Breaking Changes|Next.js Upgrade & Breaking Changes]]
- [[_COMMUNITY_UI Polish & Interaction Principles|UI Polish & Interaction Principles]]
- [[_COMMUNITY_Animation Decision Framework|Animation Decision Framework]]
- [[_COMMUNITY_Advanced CSS Patterns|Advanced CSS Patterns]]
- [[_COMMUNITY_Animation Performance Rules|Animation Performance Rules]]
- [[_COMMUNITY_Gesture & Drag Physics|Gesture & Drag Physics]]
- [[_COMMUNITY_Copilot Instructions & Rules|Copilot Instructions & Rules]]
- [[_COMMUNITY_3D & CSS Transform Techniques|3D & CSS Transform Techniques]]
- [[_COMMUNITY_Sonner Toast & UX Micro-interactions|Sonner Toast & UX Micro-interactions]]
- [[_COMMUNITY_Spring Physics & Interruptibility|Spring Physics & Interruptibility]]
- [[_COMMUNITY_Next.js Agent & Quality Rules|Next.js Agent & Quality Rules]]
- [[_COMMUNITY_Deslop Skill Focus Areas|Deslop Skill Focus Areas]]
- [[_COMMUNITY_Emil Design Philosophy|Emil Design Philosophy]]
- [[_COMMUNITY_Animation Debugging & Testing|Animation Debugging & Testing]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Component Skill Specification|Component Skill Specification]]
- [[_COMMUNITY_Next.js Configuration|Next.js Configuration]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 36 edges
2. `[other sections from your preferred template]` - 31 edges
3. `Frameworks` - 19 edges
4. `compilerOptions` - 16 edges
5. `Design Engineering` - 16 edges
6. `Writing Product Requirement Documents - All Guest Insights` - 15 edges
7. `Examples` - 10 edges
8. `Thermo-Nuclear Code Quality Review` - 9 edges
9. `Next.js 16 + Drizzle ORM + Better Auth + ShadCN Starter` - 9 edges
10. `Component Building Principles` - 8 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `AvatarBadge()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/avatar.tsx → src/lib/utils.ts
- `AvatarGroup()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/avatar.tsx → src/lib/utils.ts
- `AvatarGroupCount()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/avatar.tsx → src/lib/utils.ts
- `CardAction()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (36 total, 4 thin omitted)

### Community 0 - "App Views & Navigation"
Cohesion: 0.08
Nodes (37): geistMono, geistSans, inter, metadata, RootLayout(), FEATURES, Avatar(), AvatarBadge() (+29 more)

### Community 1 - "PRD & Spec Templates"
Cohesion: 0.05
Nodes (38): Adam Thomas's Initiative Template (My favorite product management templates), Adam Waxman's PRD Template (SeatGeek) (My favorite product management templates), Asana's Project Brief Template (Examples and templates of 1-Pagers and PRDs, My favorite product management templates), Bolt PRD Template (Examples and templates of 1-Pagers and PRDs), ChatPRD Standard Template Structure (Claire Vo), Checklists, Design Crit Format (How Figma builds product), Duolingo One-Pager Template (How Duolingo builds product) (+30 more)

### Community 2 - "Production Dependencies"
Cohesion: 0.10
Nodes (18): dependencies, better-auth, class-variance-authority, clsx, dotenv, drizzle-orm, lucide-react, @neondatabase/serverless (+10 more)

### Community 3 - "ShadCN Component Architecture"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 4 - "Dev & Build Dependencies"
Cohesion: 0.10
Nodes (19): devDependencies, drizzle-kit, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tsx, @types/node (+11 more)

### Community 5 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 6 - "Product Management Principles"
Cohesion: 0.11
Nodes (19): 5 Elements of a Great 1-Pager/PRD (Examples and templates of 1-Pagers and PRDs), 5 Tips for PM-Design Partnership (The PM 🤝 Design Partnership), Amazon Internal Press Release (Carilu Dietrich), Block Brain Diagrams (Bob Baxley), Breadboarding and Fat Marker Sketching (Ryan Singer), Business Problem vs. Customer Problem Distinction (Christopher Miller), Conversation Over Documentation Principle (Five habits of highly annoying product managers), Design Goals as Business Sub-Goals Hierarchy (The PM 🤝 Design Partnership) (+11 more)

### Community 7 - "PRD Structure & AI Prompts"
Cohesion: 0.12
Nodes (16): 1-Pager / PRD (Maggie Crowley), 1-Pager Project Template (A Three-Step Framework For Solving Problems 👌), Acceptance criteria, AI Prompt: Write a PRD (Product manager is an unfair role. So work unfairly.), AI Prompt: Write User Stories (Product manager is an unfair role. So work unfairly.), Grooming Q&A, How this connects to company strategy, Objective (+8 more)

### Community 8 - "Product Leaders & Insights"
Cohesion: 0.12
Nodes (15): Bob Baxley, Claire Vo, Jenny Wen, Julie Zhuo, Katie Dill, Kevin Yien, Lenny Rachitsky, Maggie Crowley (+7 more)

### Community 9 - "PRD Skill Standards"
Cohesion: 0.12
Nodes (15): Automate technical writing with AI, Avoid creative micromanagement, Center documents on the problem, Common Mistakes to Flag, Core Principles, Deep Dive, Design for functional prototyping, Document to move from chaos to clarity (+7 more)

### Community 10 - "Project Readme & Overview"
Cohesion: 0.12
Nodes (16): 1. Clone & Decouple Git History, 2. Install Dependencies, 3. Configure Environment Variables, 4. Run Database Migrations, 5. Start the Development Server, 📜 Available Scripts, 📦 Features & Capabilities, 🛠️ Getting Started (+8 more)

### Community 11 - "Database & Auth API Routes"
Cohesion: 0.22
Nodes (7): {GET, POST}, db, account, session, user, verification, auth

### Community 12 - "Deslop Code Review Guidelines"
Cohesion: 0.20
Nodes (9): Approval Bar, Core Prompt, Non-Negotiable Additional Standards, Output Expectations, Preferred Remedies, Primary Review Questions, Review Tone, Thermo-Nuclear Code Quality Review (+1 more)

### Community 13 - "Product Case Studies & Examples"
Cohesion: 0.20
Nodes (10): Airbnb Host Dashboard Scope Creep Example (A Three-Step Framework For Solving Problems 👌), Basecamp Calendar — shaping example (Ryan Singer), Examples, Facebook Newsfeed — Architecture That Stood 12+ Years (Peter Deng), Good vs Bad Problem Statement Examples (A Three-Step Framework For Solving Problems 👌), Linear's Target Date Feature (Nan Yu), Lyft Lost and Found 1-Pager (Examples and templates of 1-Pagers and PRDs), prodmgmt.world 1-Pager (Examples and templates of 1-Pagers and PRDs) (+2 more)

### Community 14 - "Design Engineering Skill"
Cohesion: 0.22
Nodes (8): Accessibility, Design Engineering, Initial Response, prefers-reduced-motion, Review Checklist, Review Format (Required), Stagger Animations, Touch device hover states

### Community 15 - "Next.js Upgrade & Breaking Changes"
Cohesion: 0.22
Nodes (8): Breaking / Behavior Changes (high-impact), Caching APIs (key signatures), Links, Performance / DX, Removed / Deprecated (high-level), Requirements (v16), Upgrade, What’s New (v16)

### Community 16 - "UI Polish & Interaction Principles"
Cohesion: 0.25
Nodes (8): Animate enter states with @starting-style, Buttons must feel responsive, Component Building Principles, Make popovers origin-aware, Never animate from scale(0), Tooltips: skip delay on subsequent hovers, Use blur to mask imperfect transitions, Use CSS transitions over keyframes for interruptible UI

### Community 17 - "Animation Decision Framework"
Cohesion: 0.33
Nodes (6): 1. Should this animate at all?, 2. What is the purpose?, 3. What easing should it use?, 4. How fast should it be?, Perceived performance, The Animation Decision Framework

### Community 18 - "Advanced CSS Patterns"
Cohesion: 0.33
Nodes (6): clip-path for Animation, Comparison sliders, Hold-to-delete pattern, Image reveals on scroll, Tabs with perfect color transitions, The inset shape

### Community 19 - "Animation Performance Rules"
Cohesion: 0.33
Nodes (6): CSS animations beat JS under load, CSS variables are inheritable, Framer Motion hardware acceleration caveat, Only animate transform and opacity, Performance Rules, Use WAAPI for programmatic CSS animations

### Community 20 - "Gesture & Drag Physics"
Cohesion: 0.33
Nodes (6): Damping at boundaries, Friction instead of hard stops, Gesture and Drag Interactions, Momentum-based dismissal, Multi-touch protection, Pointer capture for drag

### Community 21 - "Copilot Instructions & Rules"
Cohesion: 0.33
Nodes (5): Design, Project Rules, Rules, Stack, Structure

### Community 22 - "3D & CSS Transform Techniques"
Cohesion: 0.40
Nodes (5): 3D transforms for depth, CSS Transform Mastery, scale() scales children too, transform-origin, translateY with percentages

### Community 23 - "Sonner Toast & UX Micro-interactions"
Cohesion: 0.40
Nodes (5): Asymmetric enter/exit timing, Cohesion matters, Review your work the next day, The opacity + height combination, The Sonner Principles (Building Loved Components)

### Community 24 - "Spring Physics & Interruptibility"
Cohesion: 0.40
Nodes (5): Interruptibility advantage, Spring Animations, Spring-based mouse interactions, Spring configuration, When to use springs

### Community 25 - "Next.js Agent & Quality Rules"
Cohesion: 0.50
Nodes (3): Agent Rules, Code Quality & UI, This is NOT the Next.js you know

### Community 26 - "Deslop Skill Focus Areas"
Cohesion: 0.50
Nodes (3): Focus Areas, Guardrails, Remove AI code slop

### Community 27 - "Emil Design Philosophy"
Cohesion: 0.50
Nodes (4): Beauty is leverage, Core Philosophy, Taste is trained, not innate, Unseen details compound

### Community 28 - "Animation Debugging & Testing"
Cohesion: 0.50
Nodes (4): Debugging Animations, Frame-by-frame inspection, Slow motion testing, Test on real devices

## Knowledge Gaps
- **273 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+268 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `[other sections from your preferred template]` connect `PRD & Spec Templates` to `Product Case Studies & Examples`, `PRD Structure & AI Prompts`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `Design Engineering` connect `Design Engineering Skill` to `UI Polish & Interaction Principles`, `Animation Decision Framework`, `Advanced CSS Patterns`, `Animation Performance Rules`, `Gesture & Drag Physics`, `3D & CSS Transform Techniques`, `Sonner Toast & UX Micro-interactions`, `Spring Physics & Interruptibility`, `Emil Design Philosophy`, `Animation Debugging & Testing`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `Writing Product Requirement Documents - Frameworks, Templates & Checklists` connect `PRD Structure & AI Prompts` to `Product Management Principles`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _273 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Views & Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.07948568088836938 - nodes in this community are weakly interconnected._
- **Should `PRD & Spec Templates` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._
- **Should `Production Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._