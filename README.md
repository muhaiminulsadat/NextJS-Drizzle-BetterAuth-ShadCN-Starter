# Next.js 16 + Drizzle ORM + Better Auth + ShadCN Starter

A production-ready starter template engineered with **Next.js 16**, **React 19**, **Better Auth**, **Drizzle ORM** (PostgreSQL / Neon), **Tailwind CSS v4**, **Shadcn UI**, pre-configured **AI Agent Skills**, and a pre-indexed **Graphify Knowledge Graph**.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Components & Server Actions)
- **UI & React:** [React 19](https://react.dev/), [Shadcn UI](https://ui.shadcn.com/), [Lucide React Icons](https://lucide.dev/)
- **Styling & UI:** [Tailwind CSS v4](https://tailwindcss.com/), `next-themes` (Dark/Light mode support), `react-hot-toast` (Toast notifications)
- **Authentication:** [Better Auth](https://better-auth.com/) (Type-safe auth client & server handlers)
- **Database & ORM:** [Drizzle ORM](https://orm.drizzle.team/) with [@neondatabase/serverless](https://neon.tech/) PostgreSQL driver & `drizzle-kit`
- **TypeScript:** Strict type checking across API routes, database schemas, and components
- **AI Agent Skills:** Pre-configured `.agents/skills` repository integrations via [skills.sh](https://skills.sh)
- **Knowledge Graph:** Pre-built [Graphify](https://github.com/safishamsi/graphify) knowledge graph (`graphify-out/`) for instant AI code context and visual architecture mapping.

---

## 📦 Features & Capabilities

- 🔐 **Authentication Ready:** Integrated Better Auth with pre-configured schemas for user management, sessions, and accounts.
- 🗄️ **Type-Safe Database Workflow:** Schema definitions in TypeScript via Drizzle ORM with instant migration syncing.
- 🎨 **Modern Design System:** Built-in Shadcn UI primitives, custom utility helpers (`clsx`, `tailwind-merge`), and theme provider support.
- 🤖 **Agentic AI Prepared:** Configured with Cursor / Agent Skills for high-quality code generation, design engine polish, and PRD reviews.
- 🧠 **Instant Knowledge Graph:** Pre-indexed codebase graph allowing AI agents to query architecture (`graphify query`) with zero startup delay.

---

## 🗂️ Project Structure

```text
.
├── .agents/                    # Agent skills directory
│   └── skills/                 # Pre-installed agent skills
├── drizzle/                    # Generated SQL migration files
├── graphify-out/               # Pre-built Knowledge Graph & Codebase Map
│   ├── GRAPH_REPORT.md         # Architecture & community audit report
│   ├── graph.html              # Interactive visual knowledge graph (open in browser)
│   ├── graph.json              # GraphRAG dataset for instant AI context
│   └── manifest.json           # File hash manifest for incremental graph updates
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router (pages & layout)
│   ├── components/             # Reusable UI & Shadcn components
│   ├── db/                     # Drizzle schema definitions & DB connection
│   │   └── schema.ts           # Unified database schema
│   └── lib/                    # Shared utility libraries & Auth instances
│       ├── auth.ts             # Server-side Better Auth setup
│       ├── auth-client.ts      # Client-side Auth client
│       └── utils.ts            # Classnames & UI utility helpers
├── .env                        # Environment variables (git-ignored)
├── drizzle.config.ts           # Drizzle Kit configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies & scripts
├── skills-lock.json            # Skills registry lockfile
└── tsconfig.json               # TypeScript configuration
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** v18.17+ or v20+
- **npm**, **pnpm**, **yarn**, or **bun**
- A **PostgreSQL** database (e.g., [Neon Serverless Postgres](https://neon.tech/))

---

### Step-by-Step Setup Guide

#### 1. Clone & Decouple Git History

Clone the starter template, then remove the template's `.git` history and initialize a fresh git repository for your new application:

**On macOS / Linux / Git Bash:**
```bash
# 1. Clone the starter repository into your new project directory
git clone <repository-url> my-new-app
cd my-new-app

# 2. Remove template git history and initialize your new project repository
rm -rf .git
git init
```

**On Windows (PowerShell):**
```powershell
# 1. Clone the starter repository into your new project directory
git clone <repository-url> my-new-app
cd my-new-app

# 2. Remove template git history and initialize your new project repository
Remove-Item -Recurse -Force .git
git init
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file in the root directory (or update the existing `.env`):

```env
# Database connection string (PostgreSQL / Neon)
DATABASE_URL="postgresql://user:password@ep-example-123456.neon.tech/neondb?sslmode=require"

# Better Auth Secret (Generate a strong random string)
BETTER_AUTH_SECRET="your-super-secret-key-here"

# Base URL for local development
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

#### 4. Run Database Migrations

Sync your TypeScript database schema directly with your PostgreSQL database using Drizzle Kit:

```bash
npx drizzle-kit push
```

*(Optional: Launch Drizzle Studio DB viewer with `npx drizzle-kit studio`)*

#### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧠 Knowledge Graph (Graphify)

This repository includes a pre-built knowledge graph located in `graphify-out/`.

- **Visual Architecture Map:** Open `graphify-out/graph.html` in your browser for an interactive visual representation of all modules, components, and relationships.
- **AI Agent Context:** AI agents working in this repository can immediately run `/graphify query "<question>"` to locate relevant files without reading the entire codebase.
- **Updating the Graph:** After making significant code additions or refactoring, update the graph:

```bash
# Incremental update (re-extracts only changed files)
graphify update .

# Full rebuild
/graphify .
```

---

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot reloading. |
| `npm run build` | Compiles the production build. |
| `npm run start` | Runs the compiled production server. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |
| `npx drizzle-kit push` | Direct schema sync to your remote or local database. |
| `npx drizzle-kit studio` | Launches the interactive Drizzle Studio database UI. |

---

## 🤖 Installed AI Agent Skills

This repository is equipped with curated AI Agent Skills under `.agents/skills` to assist in code generation, code quality, and project planning:

| Skill | Source | Description |
| :--- | :--- | :--- |
| **`emil-design-eng`** | `emilkowalski/skills` | High-polish UI design, animations, micro-interactions, and visual design standards. |
| **`deslop`** | `cursor/plugins` | Code cleanup, removing AI-generated bloat, and ensuring senior-level readability. |
| **`nextjs16-skills`** | `gocallum/nextjs16-agent-skills` | Best practices and convention guidelines tailored for Next.js 16 & React 19. |
| **`thermo-nuclear-code-quality-review`** | `cursor/plugins` | Comprehensive code quality, safety, and architectural review pass. |
| **`grill-with-docs`** | `mattpocock/skills` | Interactive alignment and documentation-driven requirement verification. |
| **`writing-prds`** | `refoundai/lenny-skills` | Crafting actionable product requirement documents and engineering specs. |

To add additional agent skills to the repository:

```bash
npx skills add <repository-url> --skill <skill-name>
```

---

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).
