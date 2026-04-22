# 🧠 TypeScript Notes — Curriculum Guide

> **Structure:** Separate HTML file per topic in `pages/` + practice `.ts` file per topic in `practice/` + shared `styles.css` + `index.html` landing page.
> **Purpose:** 40-topic TypeScript curriculum — beginner to senior level.
> **Style:** Simple language + real-life examples (like explaining to a 10-year-old who can code).
> **Status:** ✅ 40/40 topics complete.

---

## 📋 How to Use

1. **Paste a YouTube transcript** (CC text from any TypeScript tutorial video).
2. The AI will:
   - Identify the topic from the transcript.
   - Assign it a **topic number** based on the learning order below.
   - Generate a **new standalone HTML file** (e.g., `pages/objects.html`).
   - Generate a **practice file** (e.g., `practice/15-objects.ts`).
   - Add a **topic card** on the `index.html` landing page.
   - Use `styles.css` for shared styling.
3. **All content must use:**
   - Simple, everyday language (no jargon without explanation).
   - Real-life analogies for every concept.
   - Code examples that relate to real scenarios (grocery lists, school marks, restaurant orders).

---

## 🔑 Ordering Rules

Topics must be ordered so a learner reading 1→40 **never** encounters a concept before it's taught:

1. **No forward references** — never use destructuring, spread, or other syntax before its topic.
2. **If you must preview a concept**, add a 1-line comment: `// "..." explained fully in Topic 24`.
3. **Deep-dive topics** that expand on earlier topics must include a note: "Builds on Topic X."
4. **Progressive disclosure** is OK — e.g., rest params introduced in Functions (#9), expanded in Spread/Rest (#24).

---

## 📝 Preferred Learning Order (Complete — 40/40)

| # | Topic | Page | Practice | Status |
|---|-------|------|----------|--------|
| 1 | **Variables & Keywords** | `pages/variables-keywords.html` | `practice/01-variables.ts` | ✅ |
| 2 | **Data Types** | `pages/data-types.html` | `practice/02-data-types.ts` | ✅ |
| 3 | **Strings & String Methods** | `pages/strings.html` | `practice/03-strings.ts` | ✅ |
| 4 | **Arrays & Tuples** | `pages/arrays-tuples.html` | `practice/04-arrays.ts` | ✅ |
| 5 | **Array Methods** | `pages/array-methods.html` | `practice/05-array-methods.ts` | ✅ |
| 6 | **Operators** | `pages/operators.html` | `practice/06-operators.ts` | ✅ |
| 7 | **Conditional Statements** | `pages/conditionals.html` | `practice/07-conditionals.ts` | ✅ |
| 8 | **Loops** | `pages/loops.html` | `practice/08-loops.ts` | ✅ |
| 9 | **Functions (Basics)** | `pages/functions.html` | `practice/09-functions.ts` | ✅ |
| 10 | **Callback & Overloaded Functions** | `pages/functions-advanced.html` | `practice/10-callbacks.ts` | ✅ |
| 11 | **Higher-Order Array Methods** | `pages/higher-order-methods.html` | `practice/11-higher-order.ts` | ✅ |
| 12 | **Type Aliases & Union Types** | `pages/type-aliases.html` | `practice/12-type-aliases.ts` | ✅ |
| 13 | **Enums** | `pages/enums.html` | `practice/13-enums.ts` | ✅ |
| 14 | **Type Narrowing** | `pages/type-narrowing.html` | `practice/14-type-narrowing.ts` | ✅ |
| 15 | **Objects & Object Types** | `pages/objects.html` | `practice/15-objects.ts` | ✅ |
| 16 | **Classes (Basics)** | `pages/classes-basics.html` | `practice/16-classes.ts` | ✅ |
| 17 | **Classes (Inheritance)** | `pages/classes-inheritance.html` | `practice/17-inheritance.ts` | ✅ |
| 18 | **Interfaces** | `pages/interfaces.html` | `practice/18-interfaces.ts` | ✅ |
| 19 | **Generics** | `pages/generics.html` | `practice/19-generics.ts` | ✅ |
| 20 | **Modules** | `pages/modules.html` | `practice/20-modules.ts` | ✅ |
| 21 | **Async/Await & Promises** | `pages/async-await.html` | `practice/21-async-await.ts` | ✅ |
| 22 | **Error Handling** | `pages/error-handling.html` | `practice/22-error-handling.ts` | ✅ |
| 23 | **Destructuring** | `pages/destructuring.html` | `practice/23-destructuring.ts` | ✅ |
| 24 | **Spread & Rest** | `pages/spread-rest.html` | `practice/24-spread-rest.ts` | ✅ |
| 25 | **Promises (Deep Dive)** | `pages/promises.html` | `practice/25-promises.ts` | ✅ |
| 26 | **DOM Manipulation** | `pages/dom-manipulation.html` | `practice/26-dom-manipulation.ts` | ✅ |
| 27 | **JSON Parse & Stringify** | `pages/json.html` | `practice/27-json.ts` | ✅ |
| 28 | **Map/Filter/Reduce Practice** | `pages/map-filter-reduce.html` | `practice/28-map-filter-reduce.ts` | ✅ |
| 29 | **Closures & Scope** | `pages/closures-scope.html` | `practice/29-closures-scope.ts` | ✅ |
| 30 | **this Keyword** | `pages/this-keyword.html` | `practice/30-this-keyword.ts` | ✅ |
| 31 | **Utility Types** | `pages/utility-types.html` | `practice/31-utility-types.ts` | ✅ |
| 32 | **Date & Time** | `pages/date-time.html` | `practice/32-date-time.ts` | ✅ |
| 33 | **Regular Expressions** | `pages/regex-basics.html` | `practice/33-regex-basics.ts` | ✅ |
| 34 | **Advanced Type Guards** | `pages/type-guards-advanced.html` | `practice/34-type-guards-advanced.ts` | ✅ |
| 35 | **API Calls (fetch)** | `pages/api-calls.html` | `practice/35-api-calls.ts` | ✅ |
| 36 | **Design Patterns** | `pages/design-patterns.html` | `practice/36-design-patterns.ts` | ✅ |
| 37 | **Decorators** | `pages/decorators.html` | `practice/37-decorators.ts` | ✅ |
| 38 | **Mapped & Conditional Types** | `pages/mapped-conditional-types.html` | `practice/38-mapped-conditional-types.ts` | ✅ |
| 39 | **Unit Testing** | `pages/testing.html` | `practice/39-testing.ts` | ✅ |
| 40 | **Data Structures** | `pages/data-structures.html` | `practice/40-data-structures.ts` | ✅ |
| ★ | **Key Comparisons** | `pages/comparisons.html` | — | ✅ |
| ★ | **TypeScript Glossary** | `pages/glossary.html` | — | ✅ |

> **Note:** If a transcript covers a topic not listed, add it at the most logical position based on prerequisites.

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

## 🏗️ HTML Structure Template

When adding a new topic, follow this exact pattern:

### Step 1: Create HTML file: `pages/{slug}.html`
Copy the structure from an existing topic file (e.g., `pages/variables-keywords.html`).

### Step 2: Create practice file: `practice/{##}-{slug}.ts`
```typescript
// ============================================
// Topic {##} — {TOPIC NAME}
// ============================================
// Practice here! Run with: npx tsx {##}-{slug}.ts
```

### Step 3: Add a topic card in `index.html` (inside `<div class="topic-grid">`)
```html
<a class="topic-card" href="pages/{slug}.html">
  <div class="tc-num"><span class="tc-num-badge">{N}</span> {Category}</div>
  <div class="tc-title">{Topic Name}</div>
  <div class="tc-desc">{One-line description}</div>
  <div class="tc-tags">
    <span class="tc-tag" style="background:var(--blue-bg);color:var(--blue)">{Tag1}</span>
    <span class="tc-tag" style="background:var(--teal-bg);color:var(--teal)">{Tag2}</span>
  </div>
</a>
```

### Step 4: Topic page structure
Each topic HTML file follows this structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
<div id="topbar">
  <!-- brand + back button (href="../index.html") -->
</div>
<div class="page-wrap">
<div class="wrap">
  <nav id="nav-{slug}">
    <div class="nav-logo">
      <div class="v">{Category}</div>
      <h2>{Topic Name}</h2>
    </div>
    <!-- sidebar links -->
  </nav>
  <div class="content">
    <!-- hero section -->
    <!-- sections with real-life examples -->
    <!-- ⚠ Common Mistakes section -->
    <!-- cheatsheet -->
  </div>
</div>
</div>
<script>/* sidebar observer */</script>
</body></html>
```

---

## 🔄 When Updating Existing Content

If the current content uses complex language, update it to:
1. Add a 🏪 **Real-Life Example** box at the start of each section.
2. Replace technical-first definitions with analogy-first definitions.
3. Use relatable variable names in code examples.
4. Keep all existing code examples but add a "Think of it like..." comment.

---

## ✅ Checklist Before Finishing

- [ ] New HTML file created in `pages/` with correct filename.
- [ ] Practice `.ts` file created in `practice/` with topic header.
- [ ] Topic card added to `index.html` (before bonus comparisons card).
- [ ] Topic page uses `<link rel="stylesheet" href="../styles.css">`.
- [ ] Page has topbar with "← Back to Index" link to `../index.html`.
- [ ] Sidebar navigation with all section links.
- [ ] Every concept has a real-life example BEFORE the code.
- [ ] ⚠ Common Mistakes section with minimum 3 mistakes (❌/✅ pattern).
- [ ] Language is simple enough for a beginner.
- [ ] Cheatsheet section exists at the end.
- [ ] Sidebar observer script at the bottom of the page.
- [ ] No forward references — don't use concepts before they're taught.
- [ ] No "Day X" labels — use topic numbers and category labels.

---

## 📂 File Structure

```
d:\practice\ts-age\
├── index.html                  ← Landing page with 40 topic cards
├── styles.css                  ← Shared CSS for all pages
├── plan.md                     ← Full curriculum roadmap (40/40 done)
├── claude.md                   ← This file (AI instructions)
├── pages/
│   ├── variables-keywords.html ← Topic 1
│   ├── data-types.html         ← Topic 2
│   ├── strings.html            ← Topic 3
│   ├── ...                     ← Topics 4-40
│   ├── data-structures.html    ← Topic 40
│   ├── comparisons.html        ← ★ Bonus
│   └── glossary.html           ← ★ Bonus
├── practice/
│   ├── 01-variables.ts         ← Topic 1 practice
│   ├── 02-data-types.ts        ← Topic 2 practice
│   ├── ...                     ← Topics 3-40
│   └── 40-data-structures.ts   ← Topic 40 practice
└── tsconfig.json
```

---

## 📊 Curriculum Phases

| Phase | Topics | Level |
|-------|--------|-------|
| **Phase 0** — Foundation | 1–22 | Basics → Intermediate |
| **Phase 1** — Job-Ready | 23–28 | Essential modern JS/TS |
| **Phase 2** — Interview-Strong | 29–34 | Deep dives for interviews |
| **Phase 3** — Pro Level | 35–40 | Senior-level patterns |
