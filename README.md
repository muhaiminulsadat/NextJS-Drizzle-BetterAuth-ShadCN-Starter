# Next.js 16 + Drizzle ORM + Better Auth + ShadCN Starter

A production-ready starter template engineered with **Next.js 16**, **React 19**, **Better Auth**, **Drizzle ORM** (PostgreSQL / Neon), **Tailwind CSS v4**, **Shadcn UI**, and pre-configured **AI Agent Skills**.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Components & Server Actions)
- **UI & React:** [React 19](https://react.dev/), [Shadcn UI](https://ui.shadcn.com/), [Lucide React Icons](https://lucide.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), `next-themes` (Dark/Light mode support), `sonner` (Toast notifications)
- **Authentication:** [Better Auth](https://better-auth.com/) (Type-safe auth client & server handlers)
- **Database & ORM:** [Drizzle ORM](https://orm.drizzle.team/) with [@neondatabase/serverless](https://neon.tech/) PostgreSQL driver & `drizzle-kit`
- **TypeScript:** Strict type checking across API routes, database schemas, and components
- **AI Agent Skills:** Pre-configured `.agents/skills` repository integrations via [skills.sh](https://skills.sh)

---

## 📦 Features & Capabilities

- 🔐 **Authentication Ready:** Integrated Better Auth with pre-configured schemas for user management, sessions, and accounts.
- 🗄️ **Type-Safe Database Workflow:** Schema definitions in TypeScript via Drizzle ORM with instant migration syncing.
- 🎨 **Modern Design System:** Built-in Shadcn UI primitives, custom utility helpers (`clsx`, `tailwind-merge`), and theme provider support.
- 🤖 **Agentic AI Prepared:** Configured with Cursor / Agent Skills for high-quality code generation, design engine polish, and PRD reviews.

---

## 🗂️ Project Structure

```text
.
├── .agents/                    # Agent skills directory
│   └── skills/                 # Pre-installed agent skills
├── drizzle/                    # Generated SQL migration files
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

### Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd keep-notes
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

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

4. **Run Database Migrations:**

   Sync your TypeScript database schema directly with your PostgreSQL database using Drizzle Kit:

   ```bash
   npx drizzle-kit push
   ```

   *(Optional: Generate migration files with `npx drizzle-kit generate`)*

5. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

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
