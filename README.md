# 📘 TypeScript Learning Path

A comprehensive, beginner-friendly TypeScript curriculum built as a static site. Every topic is explained with **simple language**, **real-life analogies**, and **practical code examples** to make complex concepts intuitive and easy to grasp.

---

## ✨ Features

- **22 Core Topics** — from variables to error handling, in a logical prerequisite-based order
- **2 Bonus References** — Key Comparisons (A vs B interview prep) & A-Z Glossary
- **Real-Life Analogies** — every concept linked to an everyday scenario
- **Code Snippets** — copy-paste-ready TypeScript examples in every section
- **Practice Files** — 22 numbered `.ts` files to write and run your own code
- **No frameworks** — pure HTML + CSS, open `index.html` in any browser

---

## 📂 Project Structure

```
ts-age/
├── index.html              # Dashboard — all topics as clickable cards
├── styles.css              # Shared design system
├── pages/                  # One HTML file per topic
│   ├── variables-keywords.html
│   ├── data-types.html
│   ├── strings.html
│   ├── arrays-tuples.html
│   ├── array-methods.html
│   ├── operators.html
│   ├── conditionals.html
│   ├── loops.html
│   ├── functions.html
│   ├── functions-advanced.html
│   ├── higher-order-methods.html
│   ├── type-aliases.html
│   ├── enums.html
│   ├── type-narrowing.html
│   ├── objects.html
│   ├── classes-basics.html
│   ├── classes-inheritance.html
│   ├── interfaces.html
│   ├── generics.html
│   ├── modules.html
│   ├── async-await.html
│   ├── error-handling.html
│   ├── comparisons.html      # ★ Bonus — 16 A-vs-B comparisons
│   └── glossary.html          # ★ Bonus — 45 terms A-Z
├── practice/               # Blank .ts files for hands-on coding
│   ├── 01-variables-and-keywords.ts
│   ├── 02-data-types.ts
│   ├── ...
│   └── 22-error-handling.ts
└── claude.md               # Curriculum tracker & prompt guide
```

---

## 📖 Curriculum Order

The topics are sequenced so each one builds on the previous:

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
| ★ | Key Comparisons | Bonus |
| ★ | TypeScript Glossary | Bonus |

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
npx tsx 01-variables-and-keywords.ts

# Or install tsx globally for convenience
npm install -g tsx
tsx 01-variables-and-keywords.ts
```

---

## 🎨 Design

- **Typography** — IBM Plex Sans, IBM Plex Mono, Playfair Display
- **Layout** — Fixed sidebar navigation + scrollable content with IntersectionObserver-based active state
- **Components** — Hero sections, bordered tables, tip/info/warning note boxes, code blocks
- **Responsive** — Sidebar collapses on mobile

---

## 🤝 Content Philosophy

Every page follows these rules:

1. **No jargon without explanation** — if a term is used, it's defined first
2. **Real-life analogy for every concept** — arrays are grocery lists, classes are cookie cutters
3. **Code examples use real scenarios** — grocery lists, school marks, restaurant orders
4. **Interview-ready** — comparisons page covers the most-asked A-vs-B questions

---

## 📄 License

This project is for personal learning and portfolio use.
