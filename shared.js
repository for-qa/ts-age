(function () {
  "use strict";

  const TOPICS = [
    { f: "variables-keywords.html", t: "Variables & Keywords", n: "1" },
    { f: "data-types.html", t: "Data Types", n: "2" },
    { f: "strings.html", t: "Strings & String Methods", n: "3" },
    { f: "arrays-tuples.html", t: "Arrays & Tuples", n: "4" },
    { f: "array-methods.html", t: "Array Methods", n: "5" },
    { f: "operators.html", t: "Operators", n: "6" },
    { f: "conditionals.html", t: "Conditional Statements", n: "7" },
    { f: "loops.html", t: "Loops", n: "8" },
    { f: "functions.html", t: "Functions", n: "9" },
    { f: "functions-advanced.html", t: "Callback & Overloaded Fns", n: "10" },
    { f: "higher-order-methods.html", t: "Higher-Order Array Methods", n: "11" },
    { f: "type-aliases.html", t: "Type Aliases & Union Types", n: "12" },
    { f: "enums.html", t: "Enums", n: "13" },
    { f: "type-narrowing.html", t: "Type Narrowing", n: "14" },
    { f: "objects.html", t: "Objects & Object Types", n: "15" },
    { f: "classes-basics.html", t: "Classes (Basics)", n: "16" },
    { f: "classes-inheritance.html", t: "Classes (Inheritance)", n: "17" },
    { f: "interfaces.html", t: "Interfaces", n: "18" },
    { f: "generics.html", t: "Generics", n: "19" },
    { f: "modules.html", t: "Modules", n: "20" },
    { f: "async-await.html", t: "Async/Await & Promises", n: "21" },
    { f: "error-handling.html", t: "Error Handling", n: "22" },
    { f: "destructuring.html", t: "Destructuring", n: "23" },
    { f: "spread-rest.html", t: "Spread & Rest Operators", n: "24" },
    { f: "promises.html", t: "Promises (Deep Dive)", n: "25" },
    { f: "dom-manipulation.html", t: "DOM Manipulation", n: "26" },
    { f: "json.html", t: "JSON \u2014 Parse & Stringify", n: "27" },
    { f: "map-filter-reduce.html", t: "Map, Filter, Reduce", n: "28" },
    { f: "closures-scope.html", t: "Closures & Scope", n: "29" },
    { f: "this-keyword.html", t: "The this Keyword", n: "30" },
    { f: "utility-types.html", t: "Utility Types", n: "31" },
    { f: "date-time.html", t: "Date & Time", n: "32" },
    { f: "regex-basics.html", t: "Regular Expressions", n: "33" },
    { f: "type-guards-advanced.html", t: "Advanced Type Guards", n: "34" },
    { f: "api-calls.html", t: "API Calls (fetch)", n: "35" },
    { f: "design-patterns.html", t: "Design Patterns", n: "36" },
    { f: "decorators.html", t: "Decorators", n: "37" },
    { f: "mapped-conditional-types.html", t: "Mapped & Conditional Types", n: "38" },
    { f: "testing.html", t: "Unit Testing", n: "39" },
    { f: "data-structures.html", t: "Data Structures", n: "40" },
    { f: "comparisons.html", t: "Key Comparisons", n: "\u2605" },
    { f: "glossary.html", t: "TypeScript Glossary", n: "\u2605" },
    { f: "mnemonic-cheatsheet.html", t: "\ud83e\udde0 Mnemonic Cheatsheet", n: "\ud83e\udde0" }
  ];

  const STORAGE_KEY = "ts-learning-progress";
  const THEME_KEY = "ts-theme";
  const currentFile = location.pathname.split("/").pop();
  let idx = -1;
  for (const [i, topic] of TOPICS.entries()) {
    if (topic.f === currentFile) { idx = i; break; }
  }
  if (idx < 0) return;

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch { /* storage unavailable */ }
  }

  /* ══════════════════════════════════════════════
     1. DARK MODE
  ══════════════════════════════════════════════ */
  function applyTheme(dark) {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try { localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch { /* storage unavailable */ }
  }

  function initDarkMode(topbar) {
    let savedTheme = null;
    try { savedTheme = localStorage.getItem(THEME_KEY); } catch { /* storage unavailable */ }
    let isDark = savedTheme === "dark";
    applyTheme(isDark);
    if (!topbar) return;
    const btn = document.createElement("button");
    btn.className = "tb-theme-btn";
    btn.title = "Toggle dark/light mode";
    btn.textContent = isDark ? "\u2600\ufe0f" : "\ud83c\udf19";
    btn.addEventListener("click", function () {
      isDark = !isDark;
      applyTheme(isDark);
      btn.textContent = isDark ? "\u2600\ufe0f" : "\ud83c\udf19";
    });
    topbar.appendChild(btn);
  }

  /* ══════════════════════════════════════════════
     2. PREV / NEXT NAVIGATION + KEYBOARD
  ══════════════════════════════════════════════ */
  function buildNavLink(topic, dir) {
    return '<a class="pn-link pn-' + dir + '" href="' + topic.f + '">' +
      '<span class="pn-dir">' + (dir === 'prev' ? '\u2190 Previous' : 'Next \u2192') + '</span>' +
      '<span class="pn-title"><span class="pn-badge">' + topic.n + '</span>' + topic.t + '</span></a>';
  }

  function initNavigation(content) {
    const prev = idx > 0 ? TOPICS[idx - 1] : null;
    const next = idx < TOPICS.length - 1 ? TOPICS[idx + 1] : null;
    let navHTML = '<div class="pn-nav">';
    navHTML += prev ? buildNavLink(prev, 'prev') : '<div></div>';
    navHTML += next ? buildNavLink(next, 'next') :
      '<a class="pn-link pn-next" href="../index.html"><span class="pn-dir">Finish \u2192</span><span class="pn-title">Back to Index</span></a>';
    navHTML += '</div>';
    if (content) {
      const navEl = document.createElement("div");
      navEl.innerHTML = navHTML;
      content.appendChild(navEl.firstChild);
    }
    document.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
      if (e.key === "ArrowLeft" && prev) location.href = prev.f;
      if (e.key === "ArrowRight" && next) location.href = next.f;
    });
  }

  /* ══════════════════════════════════════════════
     3. PROGRESS TRACKER
  ══════════════════════════════════════════════ */
  function initProgressTracker(hero) {
    const prog = getProgress();
    const done = !!prog[currentFile];
    const cb = document.createElement("div");
    cb.className = "pg-tracker";
    cb.innerHTML =
      '<label class="pg-label' + (done ? " pg-done" : "") + '">' +
      '<input type="checkbox" class="pg-check"' + (done ? " checked" : "") + '>' +
      '<span class="pg-icon">' + (done ? "\u2705" : "\u2610") + '</span>' +
      '<span class="pg-text">' + (done ? "Completed!" : "Mark as completed") + '</span></label>';
    hero.appendChild(cb);

    cb.querySelector(".pg-check").addEventListener("change", function () {
      const p = getProgress();
      const icon = cb.querySelector(".pg-icon");
      const text = cb.querySelector(".pg-text");
      const label = cb.querySelector(".pg-label");
      if (this.checked) {
        p[currentFile] = Date.now();
        icon.textContent = "\u2705"; text.textContent = "Completed!";
        label.classList.add("pg-done");
      } else {
        delete p[currentFile];
        icon.textContent = "\u2610"; text.textContent = "Mark as completed";
        label.classList.remove("pg-done");
      }
      saveProgress(p);
    });
  }

  /* ══════════════════════════════════════════════
     4. TOPBAR PROGRESS BAR
  ══════════════════════════════════════════════ */
  function initTopbarProgress(topbar) {
    const prog2 = getProgress();
    let completed = 0;
    for (const topic of TOPICS) { if (prog2[topic.f]) completed++; }
    const counter = document.createElement("div");
    counter.className = "tb-progress";
    counter.innerHTML =
      '<span class="tb-prog-bar"><span class="tb-prog-fill" style="width:' +
      Math.round((completed / TOPICS.length) * 100) + '%"></span></span>' +
      '<span class="tb-prog-text">' + completed + '/' + TOPICS.length + '</span>';
    topbar.appendChild(counter);
  }

  /* ══════════════════════════════════════════════
     5. INTERVIEW BADGES
  ══════════════════════════════════════════════ */
  function initInterviewBadges() {
    const INTERVIEW_PAGES = {
      "variables-keywords.html": ["var-hoist", "var-scope"],
      "operators.html": ["op-comparison"],
      "functions.html": ["fn-arrow"],
      "higher-order-methods.html": ["hom-map", "hom-filter", "hom-reduce"],
      "type-narrowing.html": ["tn-typeof", "tn-instanceof"],
      "classes-inheritance.html": ["ci-access"],
      "promises.html": ["prom-static"],
      "async-await.html": ["aa-syntax"],
      "error-handling.html": ["eh-trycatch"],
      "closures-scope.html": ["cs-what", "cs-traps"],
      "this-keyword.html": ["this-what", "this-bca"],
      "destructuring.html": ["dest-obj"],
      "spread-rest.html": ["sr-diff"],
      "generics.html": ["gen-what"],
      "dom-manipulation.html": ["dom-events"]
    };
    const ids = INTERVIEW_PAGES[currentFile];
    if (!ids) return;
    for (const id of ids) {
      const sec = document.getElementById(id);
      if (!sec) continue;
      const badge = document.createElement("span");
      badge.className = "interview-badge";
      badge.textContent = "\ud83c\udfaf Interview Favorite";
      const h2 = sec.querySelector("h2");
      if (h2) h2.appendChild(badge);
    }
  }

  /* ══════════════════════════════════════════════
     6. MINI SELF-TEST QUIZZES (from quiz-data.js)
  ══════════════════════════════════════════════ */
  // Strip HTML so all options look identical before answering
  function stripHTML(s) { return s.replaceAll(/<[^>]*>/g, ""); }

  // ── Bootstrap all features ──
  const topbar = document.getElementById("topbar");
  const content = document.querySelector(".content");
  initDarkMode(topbar);
  initNavigation(content);
  const hero = document.querySelector(".hero");
  if (hero) initProgressTracker(hero);
  if (topbar) initTopbarProgress(topbar);
  initInterviewBadges();

  const QUIZZES = globalThis.TS_QUIZZES || {};
  const questions = QUIZZES[currentFile];
  if (questions && content) {
    buildQuizSection(questions, content);
    wireQuizInteractions(questions, content);
  }

  /** Build the quiz HTML and insert it into the page */
  function buildQuizSection(questions, content) {
    let quizHTML = '<div class="sec quiz-sec" id="self-test">' +
      '<div class="sec-label">Self Test</div>' +
      '<h2>\ud83e\uddea Quick Quiz (' + questions.length + ' Questions)</h2>' +
      '<p>Test your understanding of every topic on this page. Click an option to check.</p>' +
      '<div class="quiz-grid">';
    questions.forEach(function (q, qi) {
      quizHTML += '<div class="quiz-card" data-answer="' + q.a + '">' +
        '<div class="quiz-q"><span class="quiz-num">Q' + (qi + 1) + '</span>' + q.q + '</div>' +
        '<div class="quiz-opts">';
      q.o.forEach(function (opt, oi) {
        quizHTML += '<button class="quiz-opt" data-idx="' + oi + '">' +
          '<span class="quiz-letter">' + "ABCD"[oi] + '</span><span>' + stripHTML(opt) + '</span></button>';
      });
      quizHTML += '</div><div class="quiz-fb"></div></div>';
    });
    quizHTML += '</div></div>';

    const pnNav = content.querySelector(".pn-nav");
    const quizEl = document.createElement("div");
    quizEl.innerHTML = quizHTML;
    if (pnNav) {
      content.insertBefore(quizEl.firstChild, pnNav);
    } else {
      content.appendChild(quizEl.firstChild);
    }

    // Add quiz link to sidebar nav
    addQuizNavLink(questions);
  }

  /** Add the quiz sidebar link and set up its scroll-based highlighting */
  function addQuizNavLink(questions) {
    const nav = document.querySelector("nav[id]");
    if (!nav) return;

    const quizLink = document.createElement("a");
    quizLink.href = "#self-test";
    quizLink.textContent = "Quick Quiz (" + questions.length + ")";

    // Find cheatsheet link and insert after it
    let cheatLink = null;
    for (const a of nav.querySelectorAll("a")) {
      if (a.textContent.toLowerCase().includes("cheatsheet")) cheatLink = a;
    }
    if (cheatLink?.nextSibling) {
      nav.insertBefore(quizLink, cheatLink.nextSibling);
    } else {
      nav.appendChild(quizLink);
    }

    // Highlight quiz link when self-test section is visible,
    // and deselect it when any other section becomes visible
    const selfTest = document.getElementById("self-test");
    if (!selfTest) return;

    const quizObs = new IntersectionObserver(function(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (entry.target.id === "self-test") {
            nav.querySelectorAll("a").forEach(function(a) { a.classList.remove("on"); });
            quizLink.classList.add("on");
          } else {
            quizLink.classList.remove("on");
          }
        }
      }
    }, { rootMargin: "-15% 0px -75% 0px" });
    quizObs.observe(selfTest);
    // Also observe all content sections so we can deselect quiz link
    document.querySelectorAll(".sec[id]").forEach(function(s) { quizObs.observe(s); });
  }

  /** Bind answer buttons for a single quiz card */
  function bindCardAnswers(card, ci, questions) {
    const correctIdx = Number.parseInt(card.dataset.answer);
    const fb = card.querySelector(".quiz-fb");
    let answered = false;
    const origAnswer = questions[ci].o[correctIdx];
    card.querySelectorAll(".quiz-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        handleQuizAnswer(this, card, fb, ci, correctIdx, origAnswer, questions);
      });
    });
  }

  /** Wire up click handlers on all quiz answer buttons */
  function wireQuizInteractions(questions, content) {
    content.querySelectorAll(".quiz-card").forEach(function (card, ci) {
      bindCardAnswers(card, ci, questions);
    });
  }

  /** Process a quiz answer click */
  function handleQuizAnswer(btn, card, fb, ci, correctIdx, origAnswer, questions) {
    const chosen = Number.parseInt(btn.dataset.idx);
    const ansLetter = "ABCD"[correctIdx];
    // Use explicit section ID from quiz data
    const secId = questions[ci].s;
    const sec = secId ? document.getElementById(secId) : null;
    const secTitle = sec?.querySelector("h2")?.textContent ?? "";
    const reviewLink = sec ? ' <a class="quiz-review" href="#' + secId + '">\ud83d\udcd6 ' + secTitle + ' \u2191</a>' : '';
    const exampleHtml = questions[ci].e ? '<div class="quiz-example"><span class="quiz-example-label">\ud83d\udca1 Example:</span> <code>' + questions[ci].e.replaceAll('<','&lt;').replaceAll('>','&gt;') + '</code></div>' : '';
    if (chosen === correctIdx) {
      btn.classList.add("quiz-correct");
      fb.innerHTML = "\u2705 Correct! <span class='quiz-ans'>" + ansLetter + ": " + origAnswer + "</span>" + exampleHtml + reviewLink;
      fb.className = "quiz-fb quiz-fb-correct";
    } else {
      btn.classList.add("quiz-wrong");
      card.querySelectorAll(".quiz-opt")[correctIdx].classList.add("quiz-correct");
      fb.innerHTML = "\u274c The answer is <span class='quiz-ans'>" + ansLetter + ": " + origAnswer + "</span>" + exampleHtml + reviewLink;
      fb.className = "quiz-fb quiz-fb-wrong";
    }
  }
})();
