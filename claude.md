# 🧠 TypeScript Notes — Curriculum Guide

> **Structure:** React 19 + Vite SPA with Clean Architecture. HTML content files in `public/content/` + React components in `src/` + practice `.ts` files in `practice/`.
> **Purpose:** 40-topic TypeScript curriculum — beginner to senior level.
> **Style:** Simple language + real-life examples (like explaining to a 10-year-old who can code).
> **Status:** ✅ 40/40 topics complete.

---

## 🏗️ Architecture Overview

This is a **React SPA** (Single Page Application), not a static HTML site. The app is structured in three clean layers:

```
src/
├── core/               ← Domain: Entities + Use Cases (zero React/UI logic)
├── data/               ← Infrastructure: Repos, Static data, DI container
└── presentation/       ← UI: React components, pages, Zustand stores
```

**Content delivery:** Each of the 43 topic pages has a corresponding HTML file in `public/content/`. The React `TopicPage` component dynamically fetches and renders this HTML at runtime, keeping content and code separated.

---

## 📂 Current File Structure

```
d:\practice\ts-age\
├── index.html                      ← Vite entry point (DO NOT add content here)
├── claude.md                       ← This file (AI instructions)
├── README.md                       ← Project documentation
├── package.json                    ← Dependencies (React, Zustand, react-router-dom)
├── vite.config.ts                  ← Build config
├── public/
│   └── content/                    ← HTML content files (one per topic)
│       ├── variables-keywords.html ← Topic 1
│       ├── data-types.html         ← Topic 2
│       └── ...                     ← Topics 3-43 + bonus pages
├── practice/
│   ├── 01-variables-and-keywords.ts
│   ├── 02-data-types.ts
│   └── ...                         ← 40 practice files
└── src/
    ├── App.tsx                      ← Router (lazy-loaded routes)
    ├── main.tsx                     ← React entry point
    ├── styles/
    │   └── styles.css               ← Shared CSS design system (ALL styles live here)
    ├── core/
    │   ├── entities/
    │   │   ├── Question.ts          ← Quiz question shape
    │   │   ├── Topic.ts             ← Topic card shape
    │   │   └── UserProgress.ts      ← Progress tracking shape
    │   ├── repositories/
    │   │   ├── IQuizRepository.ts
    │   │   ├── IProgressRepository.ts
    │   │   └── IThemeRepository.ts
    │   └── use-cases/
    │       ├── GetQuizQuestionsUseCase.ts
    │       ├── SubmitQuizAnswerUseCase.ts
    │       └── ToggleTopicCompleteUseCase.ts
    ├── data/
    │   ├── di/
    │   │   └── container.ts         ← Dependency Injection wiring
    │   ├── repositories/
    │   │   ├── LocalStorageProgressRepo.ts
    │   │   ├── LocalStorageThemeRepo.ts
    │   │   └── StaticQuizRepository.ts
    │   └── static/
    │       ├── topics.ts            ← All 43 topic cards (used by HomePage)
    │       └── quiz-data.ts         ← All quiz questions for all topics
    └── presentation/
        ├── components/
        │   ├── content/             ← ConceptSection, CodeCard, NoteCallout
        │   ├── layout/              ← TopBar, Sidebar, PageLayout
        │   ├── navigation/          ← PrevNextNav, ProgressTracker
        │   └── quiz/                ← QuizSection, QuizCard
        ├── pages/
        │   ├── HomePage.tsx         ← Topic grid + progress bar
        │   ├── TopicPage.tsx        ← Fetches & renders content HTML
        │   └── topic-content/
        │       └── VariablesKeywordsContent.tsx  ← ✅ Only fully-migrated React topic
        └── store/
            ├── progressStore.ts     ← Zustand: topic completion state
            ├── themeStore.ts        ← Zustand: dark/light mode state
            └── sidebarContext.tsx   ← Context: sidebar section links
```

---

## 📋 How to Add a New Topic (React Way)

Since 42 out of 43 topics are rendered via the hybrid HTML-fetch pattern, there are two paths:

### Path A — Hybrid (Quick, Recommended for new topics)

The app already fetches and renders HTML from `public/content/`. If you want to add a brand new topic:

1. **Create the HTML content file** in `public/content/{slug}.html`.
   - Copy the structure from an existing file (e.g., `public/content/variables-keywords.html`).
   - Follow the HTML Content Rules section below.

2. **Register the topic** in `src/data/static/topics.ts`:
```typescript
{
  id: 41,
  title: 'Your Topic Title',
  file: 'your-topic.html',       // must match the filename in public/content/
  category: 'Category Name',
  description: 'One-line description.',
  tags: ['tag1', 'tag2'],
  phase: 3,
}
```

3. **Add quiz questions** in `src/data/static/quiz-data.ts`:
```typescript
"your-topic.html": [
  {
    section: "section-id",       // must match an id="" on an element in the HTML
    question: "Your question?",
    options: ["A", "B", "C", "D"],
    answerIndex: 0,
    explanation: "Why this is correct. <code>optional code example</code>",
  },
]
```

4. **Create the practice file** in `practice/{##}-{slug}.ts`.

---

### Path B — Full React Migration (For topics being converted)

If migrating an existing topic from HTML to native React components:

1. Create `src/presentation/pages/topic-content/{TopicName}Content.tsx`.
2. Use the existing `ConceptSection`, `CodeCard`, and `NoteCallout` components.
3. In `TopicPage.tsx`, register the component so it renders instead of fetching HTML.
4. Quiz and sidebar are automatically handled by the existing system.

> **Note:** Only `VariablesKeywordsContent.tsx` is fully migrated. All others still use Path A. The migration to Path B is ongoing and optional — the app works perfectly with either approach.

---

## 🎨 Content Style Rules

### 1. Simple Language
- **DON'T:** "Arrays are ordered, index-based, iterable data structures."
- **DO:** "An array is like a **grocery list** — you write items one below another, and each item has a number (position) starting from 0."

### 2. Real-Life Examples (mandatory for every concept)
Every section must start with a real-life analogy before showing code:

```
🏪 Real-Life Example:
Think of an array like **shelves in a supermarket**.
- Each shelf has a number (index): Shelf 0, Shelf 1, Shelf 2...
- Each shelf holds one product (value).
- You can check any shelf by its number: "What's on Shelf 3?"
- You can add more shelves at the end (push) or remove the last shelf (pop).
```

### 3. Code Examples Must Be Relatable
- Use real names, real items, real scenarios.
- Avoid abstract names like `x`, `y`, `foo`, `bar`.
- Good: `let groceryList`, `let studentMarks`, `let pizzaToppings`
- Bad: `let arr1`, `let data`, `let temp`

### 4. Every Topic Must Have
- **🎯 What is it?** — One-line simple definition.
- **🏪 Real-Life Example** — Analogy before any code.
- **💻 Code Example** — Clear, commented TypeScript code (❌ wrong / ✅ correct pattern).
- **⚠️ Common Mistakes** — Minimum 3 per page with fixes.
- **✅ Quick Tip** — One-sentence memory aid.
- **📊 Comparison Table** — When comparing similar concepts (e.g., slice vs splice).
- **📝 Cheatsheet** — End of topic quick reference.

---

## 🔑 Ordering Rules

Topics must be ordered so a learner reading 1→40 **never** encounters a concept before it's taught:

1. **No forward references** — never use destructuring, spread, or other syntax before its topic.
2. **If you must preview a concept**, add a 1-line comment: `// "..." explained fully in Topic 24`.
3. **Deep-dive topics** that expand on earlier topics must include a note: "Builds on Topic X."
4. **Progressive disclosure** is OK — e.g., rest params introduced in Functions (#9), expanded in Spread/Rest (#24).

---

## 📝 Preferred Learning Order (Complete — 40/40)

| # | Topic | Content File | Practice | Status |
|---|-------|------|----------|--------|
| 1 | **Variables & Keywords** | `public/content/variables-keywords.html` | `practice/01-variables-and-keywords.ts` | ✅ |
| 2 | **Data Types** | `public/content/data-types.html` | `practice/02-data-types.ts` | ✅ |
| 3 | **Strings & String Methods** | `public/content/strings.html` | `practice/03-strings-and-string-methods.ts` | ✅ |
| 4 | **Arrays & Tuples** | `public/content/arrays-tuples.html` | `practice/04-arrays-and-tuples.ts` | ✅ |
| 5 | **Array Methods** | `public/content/array-methods.html` | `practice/05-array-methods.ts` | ✅ |
| 6 | **Operators** | `public/content/operators.html` | `practice/06-operators.ts` | ✅ |
| 7 | **Conditional Statements** | `public/content/conditionals.html` | `practice/07-conditional-statements.ts` | ✅ |
| 8 | **Loops** | `public/content/loops.html` | `practice/08-loops.ts` | ✅ |
| 9 | **Functions (Basics)** | `public/content/functions.html` | `practice/09-functions-basics.ts` | ✅ |
| 10 | **Callback & Overloaded Functions** | `public/content/functions-advanced.html` | `practice/10-callback-and-overloaded-functions.ts` | ✅ |
| 11 | **Higher-Order Array Methods** | `public/content/higher-order-methods.html` | `practice/11-higher-order-array-methods.ts` | ✅ |
| 12 | **Type Aliases & Union Types** | `public/content/type-aliases.html` | `practice/12-type-aliases-and-union-types.ts` | ✅ |
| 13 | **Enums** | `public/content/enums.html` | `practice/13-enums.ts` | ✅ |
| 14 | **Type Narrowing** | `public/content/type-narrowing.html` | `practice/14-type-narrowing.ts` | ✅ |
| 15 | **Objects & Object Types** | `public/content/objects.html` | `practice/15-objects-and-object-types.ts` | ✅ |
| 16 | **Classes (Basics)** | `public/content/classes-basics.html` | `practice/16-classes-basics.ts` | ✅ |
| 17 | **Classes (Inheritance)** | `public/content/classes-inheritance.html` | `practice/17-classes-inheritance.ts` | ✅ |
| 18 | **Interfaces** | `public/content/interfaces.html` | `practice/18-interfaces.ts` | ✅ |
| 19 | **Generics** | `public/content/generics.html` | `practice/19-generics.ts` | ✅ |
| 20 | **Modules** | `public/content/modules.html` | `practice/20-modules.ts` | ✅ |
| 21 | **Async/Await & Promises** | `public/content/async-await.html` | `practice/21-async-await-and-promises.ts` | ✅ |
| 22 | **Error Handling** | `public/content/error-handling.html` | `practice/22-error-handling.ts` | ✅ |
| 23 | **Destructuring** | `public/content/destructuring.html` | `practice/23-destructuring.ts` | ✅ |
| 24 | **Spread & Rest** | `public/content/spread-rest.html` | `practice/24-spread-rest.ts` | ✅ |
| 25 | **Promises (Deep Dive)** | `public/content/promises.html` | `practice/25-promises.ts` | ✅ |
| 26 | **DOM Manipulation** | `public/content/dom-manipulation.html` | `practice/26-dom-manipulation.ts` | ✅ |
| 27 | **JSON Parse & Stringify** | `public/content/json.html` | `practice/27-json.ts` | ✅ |
| 28 | **Map/Filter/Reduce Practice** | `public/content/map-filter-reduce.html` | `practice/28-map-filter-reduce.ts` | ✅ |
| 29 | **Closures & Scope** | `public/content/closures-scope.html` | `practice/29-closures-scope.ts` | ✅ |
| 30 | **this Keyword** | `public/content/this-keyword.html` | `practice/30-this-keyword.ts` | ✅ |
| 31 | **Utility Types** | `public/content/utility-types.html` | `practice/31-utility-types.ts` | ✅ |
| 32 | **Date & Time** | `public/content/date-time.html` | `practice/32-date-time.ts` | ✅ |
| 33 | **Regular Expressions** | `public/content/regex-basics.html` | `practice/33-regex-basics.ts` | ✅ |
| 34 | **Advanced Type Guards** | `public/content/type-guards-advanced.html` | `practice/34-type-guards-advanced.ts` | ✅ |
| 35 | **API Calls (fetch)** | `public/content/api-calls.html` | `practice/35-api-calls.ts` | ✅ |
| 36 | **Design Patterns** | `public/content/design-patterns.html` | `practice/36-design-patterns.ts` | ✅ |
| 37 | **Decorators** | `public/content/decorators.html` | `practice/37-decorators.ts` | ✅ |
| 38 | **Mapped & Conditional Types** | `public/content/mapped-conditional-types.html` | `practice/38-mapped-conditional-types.ts` | ✅ |
| 39 | **Unit Testing** | `public/content/testing.html` | `practice/39-testing.ts` | ✅ |
| 40 | **Data Structures** | `public/content/data-structures.html` | `practice/40-data-structures.ts` | ✅ |
| ★ | **Key Comparisons** | `public/content/comparisons.html` | — | ✅ |
| ★ | **TypeScript Glossary** | `public/content/glossary.html` | — | ✅ |
| ★ | **Mnemonic Cheatsheet** | `public/content/mnemonic-cheatsheet.html` | — | ✅ |

---

## ✅ Checklist Before Finishing a New Topic

- [ ] HTML content file created in `public/content/` with correct filename.
- [ ] Topic registered in `src/data/static/topics.ts`.
- [ ] Quiz questions added to `src/data/static/quiz-data.ts` with correct section IDs.
- [ ] Practice `.ts` file created in `practice/` with topic header.
- [ ] Every concept has a real-life example BEFORE the code.
- [ ] ⚠ Common Mistakes section with minimum 3 mistakes (❌/✅ pattern).
- [ ] Language is simple enough for a beginner.
- [ ] Cheatsheet section exists at the end.
- [ ] No forward references — don't use concepts before they're taught.
- [ ] Uses `let`/`const` only — no `var` (except when teaching why `var` is bad).
- [ ] Catch blocks use `unknown` type with narrowing (not `any`).

---

## 🔧 TypeScript Standards (Audit-Enforced)

All code examples must follow modern TypeScript (TS 4.0+):

| Rule | ❌ Avoid | ✅ Use |
|------|---------|--------|
| Variable declarations | `var x = 10` | `let x = 10` or `const x = 10` |
| Catch block typing | `catch (e) { e.message }` | `catch (e: unknown) { if (e instanceof Error) e.message }` |
| Constructor properties | Verbose declare + `this.x = x` | `constructor(public name: string)` shorthand |
| Module imports (types) | `import { User } from "./types"` | `import type { User } from "./types"` |
| typeof results | `"string", "number", etc.` | List all 8: `"string"`, `"number"`, `"bigint"`, `"boolean"`, `"symbol"`, `"undefined"`, `"object"`, `"function"` |
| Primitive types | `string`, `number`, `boolean` only | Include `bigint`, `symbol` where relevant |
| Advanced types | `any` for unknown data | Prefer `unknown` with narrowing |

---

## 📊 Curriculum Phases

| Phase | Topics | Level |
|-------|--------|-------|
| **Phase 0** — Foundation | 1–22 | Basics → Intermediate |
| **Phase 1** — Job-Ready | 23–28 | Essential modern JS/TS |
| **Phase 2** — Interview-Strong | 29–34 | Deep dives for interviews |
| **Phase 3** — Pro Level | 35–40 | Senior-level patterns |
