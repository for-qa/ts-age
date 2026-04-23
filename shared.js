(function () {
  "use strict";

  var TOPICS = [
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
    { f: "json.html", t: "JSON â€” Parse & Stringify", n: "27" },
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

  var STORAGE_KEY = "ts-learning-progress";
  var THEME_KEY = "ts-theme";
  var currentFile = location.pathname.split("/").pop();
  var idx = -1;
  for (var i = 0; i < TOPICS.length; i++) {
    if (TOPICS[i].f === currentFile) { idx = i; break; }
  }
  if (idx < 0) return;

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (_) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (_) {}
  }

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     1. DARK MODE
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  function applyTheme(dark) {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch (_) {}
  }
  var savedTheme = null;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (_) {}
  var isDark = savedTheme === "dark";
  applyTheme(isDark);

  var topbar = document.getElementById("topbar");
  if (topbar) {
    var btn = document.createElement("button");
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

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     2. PREV / NEXT NAVIGATION + KEYBOARD
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  var prev = idx > 0 ? TOPICS[idx - 1] : null;
  var next = idx < TOPICS.length - 1 ? TOPICS[idx + 1] : null;

  var navHTML = '<div class="pn-nav">';
  if (prev) {
    navHTML += '<a class="pn-link pn-prev" href="' + prev.f + '">' +
      '<span class="pn-dir">\u2190 Previous</span>' +
      '<span class="pn-title"><span class="pn-badge">' + prev.n + '</span>' + prev.t + '</span></a>';
  } else {
    navHTML += '<div></div>';
  }
  if (next) {
    navHTML += '<a class="pn-link pn-next" href="' + next.f + '">' +
      '<span class="pn-dir">Next \u2192</span>' +
      '<span class="pn-title"><span class="pn-badge">' + next.n + '</span>' + next.t + '</span></a>';
  } else {
    navHTML += '<a class="pn-link pn-next" href="../index.html">' +
      '<span class="pn-dir">Finish \u2192</span><span class="pn-title">Back to Index</span></a>';
  }
  navHTML += '</div>';

  var content = document.querySelector(".content");
  if (content) {
    var navEl = document.createElement("div");
    navEl.innerHTML = navHTML;
    content.appendChild(navEl.firstChild);
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
    if (e.key === "ArrowLeft" && prev) location.href = prev.f;
    if (e.key === "ArrowRight" && next) location.href = next.f;
  });

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     3. PROGRESS TRACKER
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  var hero = document.querySelector(".hero");
  if (hero) {
    var prog = getProgress();
    var done = !!prog[currentFile];
    var cb = document.createElement("div");
    cb.className = "pg-tracker";
    cb.innerHTML =
      '<label class="pg-label' + (done ? " pg-done" : "") + '">' +
      '<input type="checkbox" class="pg-check"' + (done ? " checked" : "") + '>' +
      '<span class="pg-icon">' + (done ? "\u2705" : "\u2610") + '</span>' +
      '<span class="pg-text">' + (done ? "Completed!" : "Mark as completed") + '</span></label>';
    hero.appendChild(cb);

    cb.querySelector(".pg-check").addEventListener("change", function () {
      var p = getProgress();
      var icon = cb.querySelector(".pg-icon");
      var text = cb.querySelector(".pg-text");
      var label = cb.querySelector(".pg-label");
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

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     4. TOPBAR PROGRESS BAR
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  if (topbar) {
    var prog2 = getProgress();
    var completed = 0;
    for (var j = 0; j < TOPICS.length; j++) { if (prog2[TOPICS[j].f]) completed++; }
    var counter = document.createElement("div");
    counter.className = "tb-progress";
    counter.innerHTML =
      '<span class="tb-prog-bar"><span class="tb-prog-fill" style="width:' +
      Math.round((completed / TOPICS.length) * 100) + '%"></span></span>' +
      '<span class="tb-prog-text">' + completed + '/' + TOPICS.length + '</span>';
    topbar.appendChild(counter);
  }

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     5. INTERVIEW BADGES
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  var INTERVIEW_PAGES = {
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

  var badges = INTERVIEW_PAGES[currentFile];
  if (badges) {
    badges.forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) {
        var badge = document.createElement("span");
        badge.className = "interview-badge";
        badge.textContent = "\ud83c\udfaf Interview Favorite";
        var h2 = sec.querySelector("h2");
        if (h2) h2.appendChild(badge);
      }
    });
  }

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     6. MINI SELF-TEST QUIZZES (from quiz-data.js)
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  var QUIZZES = window.TS_QUIZZES || {};
  var questions = QUIZZES[currentFile];
  // Strip HTML so all options look identical before answering
  function stripHTML(s) { return s.replace(/<[^>]*>/g, ""); }

  if (questions && content) {
    var quizHTML = '<div class="sec quiz-sec" id="self-test">' +
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

    var pnNav = content.querySelector(".pn-nav");
    var quizEl = document.createElement("div");
    quizEl.innerHTML = quizHTML;
    if (pnNav) {
      content.insertBefore(quizEl.firstChild, pnNav);
    } else {
      content.appendChild(quizEl.firstChild);
    }

    // Add quiz link to nav, just below cheatsheet
    var nav = document.querySelector("nav[id]");
    if (nav) {
      var quizLink = document.createElement("a");
      quizLink.href = "#self-test";
      quizLink.textContent = "Quick Quiz (" + questions.length + ")";
      // Find cheatsheet link and insert after it
      var links = nav.querySelectorAll("a");
      var cheatLink = null;
      links.forEach(function(a) {
        if (a.textContent.toLowerCase().indexOf("cheatsheet") >= 0) cheatLink = a;
      });
      if (cheatLink && cheatLink.nextSibling) {
        nav.insertBefore(quizLink, cheatLink.nextSibling);
      } else {
        nav.appendChild(quizLink);
      }

      // Highlight quiz link when self-test section is visible,
      // and deselect it when any other section becomes visible
      var selfTest = document.getElementById("self-test");
      if (selfTest) {
        var quizObs = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              if (entry.target.id === "self-test") {
                nav.querySelectorAll("a").forEach(function(a) { a.classList.remove("on"); });
                quizLink.classList.add("on");
              } else {
                quizLink.classList.remove("on");
              }
            }
          });
        }, { rootMargin: "-15% 0px -75% 0px" });
        quizObs.observe(selfTest);
        // Also observe all content sections so we can deselect quiz link
        document.querySelectorAll(".sec[id]").forEach(function(s) { quizObs.observe(s); });
      }
    }

    content.querySelectorAll(".quiz-card").forEach(function (card, ci) {
      var correctIdx = parseInt(card.getAttribute("data-answer"));
      var fb = card.querySelector(".quiz-fb");
      var answered = false;
      var origAnswer = questions[ci].o[correctIdx];
      card.querySelectorAll(".quiz-opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (answered) return;
          answered = true;
          var chosen = parseInt(this.getAttribute("data-idx"));
          var ansLetter = "ABCD"[correctIdx];
          // Use explicit section ID from quiz data
          var secId = questions[ci].s;
          var sec = secId ? document.getElementById(secId) : null;
          var secTitle = sec && sec.querySelector("h2") ? sec.querySelector("h2").textContent : "";
          var reviewLink = sec ? ' <a class="quiz-review" href="#' + secId + '">\ud83d\udcd6 ' + secTitle + ' \u2191</a>' : '';
          var exampleHtml = questions[ci].e ? '<div class="quiz-example"><span class="quiz-example-label">\ud83d\udca1 Example:</span> <code>' + questions[ci].e.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</code></div>' : '';
          if (chosen === correctIdx) {
            this.classList.add("quiz-correct");
            fb.innerHTML = "\u2705 Correct! <span class='quiz-ans'>" + ansLetter + ": " + origAnswer + "</span>" + exampleHtml + reviewLink;
            fb.className = "quiz-fb quiz-fb-correct";
          } else {
            this.classList.add("quiz-wrong");
            card.querySelectorAll(".quiz-opt")[correctIdx].classList.add("quiz-correct");
            fb.innerHTML = "\u274c The answer is <span class='quiz-ans'>" + ansLetter + ": " + origAnswer + "</span>" + exampleHtml + reviewLink;
            fb.className = "quiz-fb quiz-fb-wrong";
          }
        });
      });
    });
  }
})();
