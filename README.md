# 📘 TypeScript Learning Path

A comprehensive, beginner-to-senior TypeScript curriculum built as a static site. Every topic is explained with **simple language**, **real-life analogies**, and **practical code examples** to make complex concepts intuitive and easy to grasp.

---

## ✨ Features

- **40 Core Topics** — from variables to data structures, in a logical prerequisite-based order
- **4 Learning Phases** — Foundation → Job-Ready → Interview-Strong → Pro Level
- **2 Bonus References** — Key Comparisons (A vs B interview prep) & A-Z Glossary
- **Real-Life Analogies** — every concept linked to an everyday scenario
- **Code Snippets** — copy-paste-ready TypeScript examples in every section
- **Practice Files** — 40 numbered `.ts` files to write and run your own code
- **No frameworks** — pure HTML + CSS, open `index.html` in any browser

---

## 📂 Project Structure

```
ts-age/
├── index.html              # Dashboard — 40 topics as clickable cards
├── styles.css              # Shared design system
├── plan.md                 # Full curriculum roadmap
├── claude.md               # AI prompt guide & content rules
├── pages/                  # One HTML file per topic (40 + 2 bonus)
│   ├── variables-keywords.html   # Topic 1
│   ├── data-types.html           # Topic 2
│   ├── ...                       # Topics 3–39
│   ├── data-structures.html      # Topic 40
│   ├── comparisons.html          # ★ Bonus — 16 A-vs-B comparisons
│   └── glossary.html             # ★ Bonus — 45 terms A-Z
├── practice/               # Blank .ts files for hands-on coding
│   ├── 01-variables.ts
│   ├── 02-data-types.ts
│   ├── ...
│   └── 40-data-structures.ts
└── tsconfig.json
```

---

## 📖 Curriculum Order

The topics are sequenced so each one builds on the previous — **no forward references**.

### Phase 0 — Foundation (Topics 1–22)

| # | Topic | Category |
|---|-------|----------|
| 1 | Variables & Keywords | Fundamentals |
| 2 | Data Types | Fundamentals |
| 3 | Strings & String Methods | Fundamentals |
| 4 | Arrays & Tuples | Data Structures |
| 5 | Array Methods | Data Structures |
| 6 | Operators | Control Flow |
| 7 | Conditional Statements | Control Flow |
| 8 | Loops | Control Flow |
| 9 | Functions (Basics) | Functions |
| 10 | Callbacks & Overloaded Functions | Functions |
| 11 | Higher-Order Array Methods | Functions |
| 12 | Type Aliases & Union Types | TS Type System |
| 13 | Enums | TS Type System |
| 14 | Type Narrowing | TS Type System |
| 15 | Objects & Object Types | OOP |
| 16 | Classes (Basics) | OOP |
| 17 | Classes (Inheritance) | OOP |
| 18 | Interfaces | OOP |
| 19 | Generics | Advanced |
| 20 | Modules | Architecture |
| 21 | Async/Await & Promises | Async |
| 22 | Error Handling | Async |

### Phase 1 — Job-Ready (Topics 23–28)

| # | Topic | Category |
|---|-------|----------|
| 23 | Destructuring | Modern JS |
| 24 | Spread & Rest | Modern JS |
| 25 | Promises (Deep Dive) | Async |
| 26 | DOM Manipulation | Browser |
| 27 | JSON Parse & Stringify | Data |
| 28 | Map/Filter/Reduce Practice | Practice |

### Phase 2 — Interview-Strong (Topics 29–34)

| # | Topic | Category |
|---|-------|----------|
| 29 | Closures & Scope | Deep Dive |
| 30 | this Keyword | Deep Dive |
| 31 | Utility Types | TS Advanced |
| 32 | Date & Time | Practical |
| 33 | Regular Expressions | Practical |
| 34 | Advanced Type Guards | TS Advanced |

### Phase 3 — Pro Level (Topics 35–40)

| # | Topic | Category |
|---|-------|----------|
| 35 | API Calls (fetch) | Real-World |
| 36 | Design Patterns | Architecture |
| 37 | Decorators | Pro |
| 38 | Mapped & Conditional Types | Pro |
| 39 | Unit Testing | Pro |
| 40 | Data Structures | Pro |

| | Bonus | |
|---|-------|----------|
| ★ | Key Comparisons | Interview Prep |
| ★ | TypeScript Glossary | Reference |

---

## 🚀 Getting Started

### View the Notes

Just open `index.html` in your browser — no server needed:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Practice TypeScript

Run any practice file with `tsx`:

```bash
cd practice

# Run a file
npx tsx 01-variables.ts

# Or install tsx globally for convenience
npm install -g tsx
tsx 01-variables.ts
```

---

## 🎨 Design

- **Typography** — IBM Plex Sans, IBM Plex Mono, Playfair Display
- **Layout** — Fixed sidebar navigation + scrollable content with IntersectionObserver-based active state
- **Components** — Hero sections, bordered tables, tip/info/warning note boxes, pipeline diagrams, code blocks
- **Responsive** — Sidebar collapses on mobile

---

## 🤝 Content Philosophy

Every page follows these rules:

1. **No jargon without explanation** — if a term is used, it's defined first
2. **Real-life analogy for every concept** — arrays are grocery lists, classes are cookie cutters
3. **Code examples use real scenarios** — grocery lists, school marks, restaurant orders
4. **❌/✅ pattern for mistakes** — every page has 3+ common beginner mistakes with fixes
5. **No forward references** — concepts are never used before they're taught
6. **Interview-ready** — comparisons page covers the most-asked A-vs-B questions

---

## 📄 License

This project is for personal learning and portfolio use.
