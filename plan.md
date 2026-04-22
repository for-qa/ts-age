# 📋 TypeScript Learning Path — 100% Job-Ready Plan

> **Goal:** Make this curriculum complete enough that someone following it can confidently apply for a TypeScript developer job.
>
> **Pattern:** Every page follows → Real-life analogy → Concepts → Code examples (❌ wrong / ✅ correct) → Common Mistakes section → Comparison Table → Cheatsheet
>
> **Progress:** Mark `[ ]` → `[x]` as each item is implemented.

---

## ✅ Phase 0 — Already Done (22 existing topics + improvements)

- [x] 01 · Variables & Keywords
- [x] 02 · Data Types
- [x] 03 · Strings & String Methods
- [x] 04 · Arrays & Tuples
- [x] 05 · Array Methods
- [x] 06 · Operators
- [x] 07 · Conditional Statements
- [x] 08 · Loops
- [x] 09 · Functions (Basics)
- [x] 10 · Callbacks & Overloaded Functions
- [x] 11 · Higher-Order Array Methods
- [x] 12 · Type Aliases & Union Types
- [x] 13 · Enums
- [x] 14 · Type Narrowing
- [x] 15 · Objects & Object Types
- [x] 16 · Classes (Basics)
- [x] 17 · Classes (Inheritance)
- [x] 18 · Interfaces
- [x] 19 · Generics
- [x] 20 · Modules
- [x] 21 · Async/Await & Promises
- [x] 22 · Error Handling
- [x] ★ Key Comparisons (16 A-vs-B)
- [x] ★ Glossary (45 terms)
- [x] ⚠ Common Mistakes added to 8 pages (21 mistakes total)

---

## 🔨 Phase 1 — Essential Missing Topics (Job-Ready Foundation)

> These 6 topics are used in EVERY modern TypeScript/JavaScript project.
> Without them, a learner will struggle on day 1 of a real job.

---

### 📄 1.1 · Destructuring (Objects & Arrays)
- [x] **Page:** `pages/destructuring.html`
- [x] **Practice:** `practice/23-destructuring.ts`
- [x] **Nav + Index:** Add card to index.html

**Sections to cover:**
- [x] What is Destructuring? (Real-life: unpacking a suitcase — instead of taking one item at a time, you lay everything out at once)
- [x] Array Destructuring — `const [a, b] = [1, 2]`
- [x] Skipping elements — `const [, , third] = arr`
- [x] Default values — `const [a = 10] = []`
- [x] Object Destructuring — `const { name, age } = person`
- [x] Renaming while destructuring — `const { name: fullName } = person`
- [x] Nested Destructuring — `const { address: { city } } = person`
- [x] Destructuring in function parameters — `function greet({ name }: Person)`
- [x] Destructuring with Rest — `const { name, ...rest } = person`
- [x] Comparison Table — Array vs Object destructuring
- [x] Cheatsheet

**⚠ Common Mistakes to include:**
- [x] Mistake: Using `()` around object destructuring in assignment (needs parens when not in declaration)
- [x] Mistake: Destructuring `null` or `undefined` — `const { x } = null` crashes
- [x] Mistake: Forgetting default values — destructured value is `undefined` when missing
- [x] Mistake: Wrong nesting level — `const { a: { b } }` vs `const { a } = obj; const { b } = a`
- [x] Summary table with all mistakes

---

### 📄 1.2 · Spread & Rest Operators (`...`)
- [x] **Page:** `pages/spread-rest.html`
- [x] **Practice:** `practice/24-spread-rest.ts`
- [x] **Nav + Index:** Add card to index.html

**Sections to cover:**
- [x] What is `...`? (Real-life: Spread = pouring beads from one jar to another. Rest = putting remaining beads into a bag)
- [x] Spread with Arrays — `[...arr1, ...arr2]`
- [x] Spread with Objects — `{ ...obj1, ...obj2 }`
- [x] Spread for copying — shallow copy vs deep copy
- [x] Spread for function arguments — `Math.max(...numbers)`
- [x] Rest in function parameters — `function sum(...nums: number[])`
- [x] Rest in destructuring — `const [first, ...remaining] = arr`
- [x] Order matters in object spread — last one wins
- [x] Comparison Table — Spread vs Rest (same syntax, different purpose)
- [x] Cheatsheet

**⚠ Common Mistakes to include:**
- [x] Mistake: Spread only does SHALLOW copy — nested objects still share references
- [x] Mistake: Object spread — later properties overwrite earlier ones (`{ ...a, ...b }` — b wins)
- [x] Mistake: Spreading a string — `[..."hello"]` gives `["h","e","l","l","o"]` (surprise!)
- [x] Mistake: Rest must be LAST parameter — `function fn(...rest, last)` is an error
- [x] Mistake: Confusing spread vs rest — same `...` symbol but opposite jobs
- [x] Summary table with all mistakes

---

### 📄 1.3 · Promises (Deep Dive)
- [x] **Page:** `pages/promises.html`
- [x] **Practice:** `practice/25-promises.ts`
- [x] **Nav + Index:** Add card to index.html (place BEFORE async-await)

**Sections to cover:**
- [x] What is a Promise? (Real-life: Ordering food online — you get a tracking number (promise), the food is either delivered (resolved) or cancelled (rejected). You don't wait at the door the whole time)
- [x] 3 States — Pending, Fulfilled, Rejected
- [x] Creating a Promise — `new Promise((resolve, reject) => { })`
- [x] Consuming — `.then()` and `.catch()`
- [x] Chaining — `.then().then().then()`
- [x] `Promise.all()` — wait for ALL (parallel)
- [x] `Promise.race()` — first one wins
- [x] `Promise.allSettled()` — get results of ALL, even failures
- [x] `Promise.any()` — first SUCCESS wins (ignores failures)
- [x] Promise vs Callback — why promises are better
- [x] How async/await is sugar on top of promises
- [x] Comparison Table — all Promise static methods
- [x] Cheatsheet

**⚠ Common Mistakes to include:**
- [x] Mistake: Forgetting `.catch()` — unhandled rejection crashes Node.js
- [x] Mistake: Not returning inside `.then()` — chain breaks, next `.then()` gets `undefined`
- [x] Mistake: Nesting `.then()` inside `.then()` instead of chaining (callback hell in disguise)
- [x] Mistake: `Promise.all()` fails if ANY one fails — use `allSettled()` if you want all results
- [x] Mistake: Creating a promise but never consuming it (forgetting `.then()` or `await`)
- [x] Summary table with all mistakes

---

### 📄 1.4 · DOM Manipulation with TypeScript
- [x] **Page:** `pages/dom-manipulation.html`
- [x] **Practice:** `practice/26-dom-manipulation.ts`
- [x] **Nav + Index:** Add card to index.html

**Sections to cover:**
- [x] What is the DOM? (Real-life: HTML page = a building, DOM = the building's blueprint with labels on every room, door, and window. JS/TS lets you rearrange the furniture)
- [x] Selecting elements — `getElementById`, `querySelector`, `querySelectorAll`
- [x] Type assertions with DOM — `as HTMLInputElement` (TypeScript-specific!)
- [x] Changing content — `.textContent`, `.innerHTML`
- [x] Changing styles — `.style.color`, `.classList.add/remove/toggle`
- [x] Creating & removing elements — `createElement`, `appendChild`, `remove()`
- [x] Event handling — `addEventListener('click', handler)`
- [x] Event types in TS — `MouseEvent`, `KeyboardEvent`, `Event`
- [x] Form handling — reading input values, preventing default
- [x] Comparison Table — querySelector vs getElementById vs getElementsByClassName
- [x] Cheatsheet

**⚠ Common Mistakes to include:**
- [x] Mistake: `querySelector` returns `Element | null` — must check for null first!
- [x] Mistake: Forgetting type assertion — `.value` doesn't exist on generic `Element`, need `as HTMLInputElement`
- [x] Mistake: Using `innerHTML` with user input — XSS vulnerability! Use `textContent` instead
- [x] Mistake: Adding event listener inside a loop without proper closure
- [x] Mistake: `getElementsByClassName` returns live collection, `querySelectorAll` returns static — different behavior when DOM changes
- [x] Summary table with all mistakes

---

### 📄 1.5 · JSON — Parse & Stringify
- [x] **Page:** `pages/json.html`
- [x] **Practice:** `practice/27-json.ts`
- [x] **Nav + Index:** Add card to index.html

**Sections to cover:**
- [x] What is JSON? (Real-life: JSON is like a universal language for data — like English at an international airport. Every language/system can read it. It's how servers talk to browsers)
- [x] JSON syntax rules — keys must be double-quoted strings, no trailing commas, no comments
- [x] `JSON.stringify()` — object → string
- [x] `JSON.parse()` — string → object
- [x] Typing parsed JSON — `as Type` or type guards
- [x] Pretty printing — `JSON.stringify(obj, null, 2)`
- [x] Nested objects in JSON
- [x] Arrays in JSON
- [x] JSON vs JavaScript object — differences
- [x] Real use case: localStorage, API responses
- [x] Cheatsheet

**⚠ Common Mistakes to include:**
- [x] Mistake: `JSON.parse()` on invalid JSON — throws SyntaxError (always wrap in try/catch!)
- [x] Mistake: `JSON.parse()` returns `any` — you lose type safety. Always assert or validate
- [x] Mistake: JSON doesn't support `undefined`, functions, or `Date` objects — they get lost during stringify
- [x] Mistake: Single quotes in JSON — `{'name': 'John'}` is INVALID JSON (must use double quotes)
- [x] Mistake: Circular references — `JSON.stringify()` crashes on objects that reference themselves
- [x] Summary table with all mistakes

---

### 📄 1.6 · Map, Filter, Reduce — Practice Problems
- [x] **Page:** `pages/map-filter-reduce.html`
- [x] **Practice:** `practice/28-map-filter-reduce.ts`
- [x] **Nav + Index:** Add card to index.html

**Sections to cover:**
- [x] Quick recap of map, filter, reduce with simple examples
- [x] 5 Real-World `map()` problems (with solutions)
  - [x] Extract names from array of objects
  - [x] Convert prices from USD to INR
  - [x] Format dates
  - [x] Transform API response data
  - [x] Create HTML from data array
- [x] 5 Real-World `filter()` problems
  - [x] Filter users by age
  - [x] Remove null/undefined from array
  - [x] Search/filter by text
  - [x] Filter products by price range
  - [x] Find duplicates
- [x] 5 Real-World `reduce()` problems
  - [x] Sum of all numbers
  - [x] Count occurrences (word frequency)
  - [x] Flatten nested arrays
  - [x] Group by category
  - [x] Build object from array of key-value pairs
- [x] Chaining map + filter + reduce together
- [x] When to use forEach vs map vs filter vs reduce
- [x] Cheatsheet

**⚠ Common Mistakes to include:**
- [x] Mistake: Using `map()` when you don't need the return value — use `forEach()` instead
- [x] Mistake: Forgetting `return` in `reduce()` callback — accumulator becomes `undefined`
- [x] Mistake: Wrong initial value in `reduce()` — forgetting the second argument
- [x] Mistake: Mutating original array inside `map()` — map should return NEW values
- [x] Mistake: `filter()` doesn't modify the array — you must use the RETURNED array
- [x] Summary table with all mistakes

---

## 🔨 Phase 2 — Interview-Strong Topics

> These make you stand out. Add after Phase 1 is complete.

---

### 📄 2.1 · Closures & Scope (Deep Dive)
- [x] **Page:** `pages/closures-scope.html`
- [x] **Practice:** `practice/29-closures-scope.ts`

**Sections to cover:**
- [x] Global vs Local vs Block scope (recap with visuals)
- [x] Lexical scope — functions remember WHERE they were born
- [x] What is a Closure? (Real-life: A closure is like a backpack — when a function graduates from its school (scope), it carries a backpack with all the variables it needs)
- [x] Practical closures — counter, private variables, factory functions
- [x] Closure in loops — the classic `var` vs `let` trap
- [x] Memory considerations — closures keep variables alive

**⚠ Common Mistakes:**
- [x] `var` in loops creates shared closure (classic interview gotcha)
- [x] Accidentally keeping large objects alive in memory via closures
- [x] Thinking closures are complicated — they're just functions remembering their birthplace

---

### 📄 2.2 · `this` Keyword (Full Guide)
- [x] **Page:** `pages/this-keyword.html`
- [x] **Practice:** `practice/30-this-keyword.ts`

**Sections to cover:**
- [x] What is `this`? (Real-life: `this` is like the word "I" — it changes meaning depending on WHO is speaking)
- [x] `this` in global scope
- [x] `this` in regular functions
- [x] `this` in object methods
- [x] `this` in arrow functions (no own `this`)
- [x] `this` in classes
- [x] `bind()`, `call()`, `apply()` — explicitly setting `this`
- [x] Comparison Table — `this` in every context

**⚠ Common Mistakes:**
- [x] Arrow function as object method — `this` is undefined
- [x] Losing `this` when passing method as callback
- [x] `this` inside `setTimeout` — loses context
- [x] Forgetting `bind()` when passing methods around

---

### 📄 2.3 · Utility Types
- [x] **Page:** `pages/utility-types.html`
- [x] **Practice:** `practice/31-utility-types.ts`

**Sections to cover:**
- [x] What are Utility Types? (Real-life: Pre-built LEGO modifications — instead of building from scratch, TypeScript gives you ready-made transformations)
- [x] `Partial<T>` — make all properties optional
- [x] `Required<T>` — make all properties required
- [x] `Readonly<T>` — make all properties read-only
- [x] `Pick<T, K>` — select specific properties
- [x] `Omit<T, K>` — exclude specific properties
- [x] `Record<K, V>` — create object type from key-value
- [x] `Exclude<T, U>` and `Extract<T, U>` — for union types
- [x] `ReturnType<T>` — get function's return type
- [x] Real-world use cases for each
- [x] Comparison Table

**⚠ Common Mistakes:**
- [x] Using `Partial` when you need `Pick` — Partial makes ALL optional, Pick selects specific ones
- [x] Forgetting that `Readonly` is shallow — nested objects are still mutable
- [x] Confusing `Omit` vs `Exclude` — Omit works on object types, Exclude works on unions

---

### 📄 2.4 · Date & Time
- [x] **Page:** `pages/date-time.html`
- [x] **Practice:** `practice/32-date-time.ts`

**Sections to cover:**
- [x] Creating dates — `new Date()`, `Date.now()`, from string
- [x] Getting parts — `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`
- [x] Setting parts — `setFullYear()`, `setMonth()`, etc.
- [x] Formatting — `toLocaleDateString()`, `toISOString()`
- [x] Comparing dates — greater than, less than, difference in days
- [x] Timestamps — milliseconds since 1970

**⚠ Common Mistakes:**
- [x] `getMonth()` is 0-indexed — January = 0, not 1!
- [x] `getDay()` returns day of WEEK (0=Sunday), not day of month — use `getDate()`
- [x] `new Date("2024-01-15")` vs `new Date(2024, 0, 15)` — month is 0-indexed in constructor
- [x] Timezone confusion — UTC vs local time

---

### 📄 2.5 · Regular Expressions (Basics)
- [x] **Page:** `pages/regex-basics.html`
- [x] **Practice:** `practice/33-regex-basics.ts`

**Sections to cover:**
- [x] What is Regex? (Real-life: Regex is like a search-and-rescue dog trained to find specific patterns)
- [x] Creating regex — `/pattern/flags` and `new RegExp()`
- [x] Common patterns — digits `\d`, word chars `\w`, whitespace `\s`
- [x] Quantifiers — `+`, `*`, `?`, `{n,m}`
- [x] Anchors — `^` start, `$` end
- [x] Methods — `.test()`, `.match()`, `.replace()`, `.split()`
- [x] Flags — `g` (global), `i` (case insensitive), `m` (multiline)
- [x] 5 Practical patterns — email, phone, URL, password strength, extracting numbers

**⚠ Common Mistakes:**
- [x] Forgetting `g` flag — only matches the first occurrence
- [x] `.test()` returns boolean, `.match()` returns array — don't mix them up
- [x] Special characters need escaping — `.` matches ANY character, use `\.` for literal dot
- [x] Greedy vs lazy matching — `.*` vs `.*?`

---

### 📄 2.6 · Advanced Type Guards
- [x] **Page:** `pages/type-guards-advanced.html`
- [x] **Practice:** `practice/34-type-guards-advanced.ts`

**Sections to cover:**
- [x] Recap: `typeof`, `instanceof`, `in` guards
- [x] Custom type guards with `is` keyword
- [x] Discriminated unions — `type: "circle" | "square"`
- [x] Exhaustive checking with `never`
- [x] Assertion functions — `asserts value is Type`
- [x] Real-world: API response handling with discriminated unions

**⚠ Common Mistakes:**
- [x] `typeof null === "object"` — doesn't work as a type guard for objects
- [x] Forgetting `break`/`return` in switch with discriminated unions
- [x] Not handling the `default`/`never` case — new union members go unchecked

---

## 🔨 Phase 3 — Pro Level (Senior Roles)

> Add these when everything above is solid.

### 📄 3.1 · API Calls (fetch & axios)
- [x] **Page:** `pages/api-calls.html`
- [x] **Practice:** `practice/35-api-calls.ts`
- [x] GET, POST, PUT, DELETE requests
- [x] Headers, body, query parameters
- [x] Typing API responses with interfaces
- [x] Error handling with try/catch
- [x] Loading states pattern
- [x] ⚠ Mistakes: not awaiting fetch, not checking `response.ok`, not typing response

### 📄 3.2 · Design Patterns
- [x] **Page:** `pages/design-patterns.html`
- [x] **Practice:** `practice/36-design-patterns.ts`
- [x] Singleton, Factory, Observer, Strategy patterns
- [x] When to use each pattern
- [x] ⚠ Mistakes: overusing patterns, singleton in testing

### 📄 3.3 · Decorators
- [x] **Page:** `pages/decorators.html`
- [x] **Practice:** `practice/37-decorators.ts`
- [x] Class, Method, Property, Parameter decorators
- [x] Real-world: logging, validation, memoization
- [x] ⚠ Mistakes: decorator order, forgetting `experimentalDecorators`

### 📄 3.4 · Mapped & Conditional Types
- [x] **Page:** `pages/mapped-conditional-types.html`
- [x] **Practice:** `practice/38-mapped-conditional-types.ts`
- [x] `{ [K in keyof T]: ... }` mapped types
- [x] `T extends U ? X : Y` conditional types
- [x] `infer` keyword
- [x] Building custom utility types
- [x] ⚠ Mistakes: infinite recursion, overly complex types

### 📄 3.5 · Unit Testing (Jest/Vitest)
- [x] **Page:** `pages/testing.html`
- [x] **Practice:** `practice/39-testing.ts`
- [x] `describe`, `it`, `expect` basics
- [x] Matchers — `toBe`, `toEqual`, `toThrow`
- [x] Setup/teardown — `beforeEach`, `afterEach`
- [x] Mocking functions and modules
- [x] ⚠ Mistakes: testing implementation not behavior, not isolating tests

### 📄 3.6 · Data Structures in TypeScript
- [x] **Page:** `pages/data-structures.html`
- [x] **Practice:** `practice/40-data-structures.ts`
- [x] Stack, Queue, LinkedList
- [x] HashMap / Map / Set
- [x] When to use which structure
- [x] Big-O basics for each
- [x] ⚠ Mistakes: using array as queue (O(n) shift), Map vs object

---

## 📊 Progress Tracker

| Phase | Topics | Status | Job-Ready % |
|-------|--------|--------|------------|
| Phase 0 — Existing | 22 topics + 21 common mistakes | ✅ Done | 60% |
| Phase 1 — Job-Ready | 6 topics | ✅ Done | → 85% |
| Phase 2 — Interview-Strong | 6 topics | ✅ Done | → 95% |
| Phase 3 — Pro Level | 6 topics | ✅ Done | → 100% |
| **Total** | **40 topics** | **40/40 🎉** | |

---

## 📝 Checklist For Every New Page

- [x] Create `pages/<topic>.html` with full content
- [x] Create `practice/<##>-<topic>.ts` with practice header
- [x] Add card to `index.html` dashboard
- [x] Add ⚠ Common Mistakes section (minimum 3 mistakes per page)
- [x] Include summary comparison table
- [x] Include quick reference cheatsheet
- [x] Use real-life analogies for every new concept
- [x] Use ❌ WRONG / ✅ CORRECT code pattern for every mistake
- [x] Test all code examples actually work
