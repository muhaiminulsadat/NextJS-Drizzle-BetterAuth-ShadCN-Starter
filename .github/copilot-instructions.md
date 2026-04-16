# Project Rules

## Stack

Next.js 16 App Router · TypeScript · Drizzle ORM · Tailwind CSS · shadcn/ui

## Rules

- Server Components by default — `'use client'` only when necessary
- `interface` over `type`
- shadcn/ui components over raw HTML
- Mobile-first responsive design
- try/catch + error boundaries for all error handling
- Suspense + revalidation for caching

## Structure

- `/components` → components
- `/app` → pages
- `/lib` → utilities
- `/types` → types

## Design

Clean, minimal, consistent Tailwind spacing, shadcn/ui design system
