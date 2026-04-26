import { ConceptSection } from '../../components/content/ConceptSection';
import { NoteCallout } from '../../components/content/NoteCallout';
import { CodeCard } from '../../components/content/CodeCard';

export function VariablesKeywordsContent() {
  return (
    <>
      {/* 
        The top-level <div className="hero"> and ProgressTracker is handled 
        by TopicPage.tsx so we only render the content sections here. 
      */}
      
      <ConceptSection id="vc-comments" label="Basics" title="Comments — Notes for Humans">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Imagine you're writing a
          recipe notebook. You write the steps, but you also write
          <strong> little side notes</strong> for yourself: "Mom's secret
          tip: add extra butter." Those side notes are
          <strong> comments</strong> — they don't get cooked (executed),
          they're just there for YOU to remember why you did something.
        </NoteCallout>
        
        <p>
          Comments are lines in your code that TypeScript <strong>completely ignores</strong> when running. They serve two purposes:
        </p>
        <ul>
          <li><strong>Explain your code</strong> — so other people (or future you) can understand WHY you wrote something.</li>
          <li><strong>Temporarily disable code</strong> — if you want to skip a line without deleting it, just comment it out.</li>
        </ul>

        <h3>Single-line comment</h3>
        <p>Use two forward slashes <code>//</code>. Everything after the <code>//</code> on that line is ignored.</p>
        <pre><code>{`// This is a comment — TypeScript ignores it
console.log("Hello");  // This part is also a comment`}</code></pre>

        <h3>Multi-line comment</h3>
        <p>Use <code>/*</code> to start and <code>*/</code> to end. Everything between them is ignored — works across multiple lines.</p>
        <pre><code>{`/* 
  This entire block is a comment.
  None of these lines will execute.
  Great for explaining a big section.
*/
console.log("This runs normally");`}</code></pre>

        <h3>Keyboard shortcuts (VS Code)</h3>
        <div className="bordered">
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Windows</th>
                <th>Mac</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toggle single-line comment</td>
                <td><code>Ctrl + /</code></td>
                <td><code>Cmd + /</code></td>
              </tr>
              <tr>
                <td>Toggle multi-line comment</td>
                <td><code>Shift + Alt + A</code></td>
                <td><code>Shift + Option + A</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <NoteCallout type="info">
          These shortcuts <strong>toggle</strong> — press once to comment,
          press again to uncomment. Same shortcut for both.
        </NoteCallout>
      </ConceptSection>

      <ConceptSection id="vc-intro" label="Basics" title="What is a Variable?">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Think of a variable as a
          <strong> labeled box</strong>. You write a name on the box (like
          "age" or "studentName"), and you put something inside it (like
          <strong> 25</strong> or <strong>"John"</strong>). Later, you can
          open the box to see what's inside, or replace the contents with
          something new.
        </NoteCallout>
        <p>
          A variable is a <strong>container that stores data</strong>. You
          give it a name, and it holds a value for you. That's it!
        </p>

        <CodeCard number="1" title="Simple variable examples" badge="Basics" badgeColorClass="ph1-card">
          <pre><code>{`let age = 25;              // Box labeled "age" — contains 25
let studentName = "John";  // Box labeled "studentName" — contains "John"

console.log(age);          // 25
console.log(studentName);  // John`}</code></pre>
          <p className="fn">
            The variable name should describe what's inside — <code>studentName</code> is much better than <code>x</code>.
          </p>
        </CodeCard>

        <h3>Why is it called a "variable"?</h3>
        <p>
          Because the value can <strong>vary</strong> (change). Today the
          box says 25, tomorrow you can put 30 in it. The box stays the
          same, but the contents can change — that's the nature of a
          variable.
        </p>

        <h3>Naming best practices</h3>
        <ul>
          <li><strong>Use meaningful names</strong> — <code>studentName</code> instead of <code>x</code> or <code>sn</code>.</li>
          <li><strong>Start with lowercase</strong> — <code>age</code>, not <code>Age</code> (TypeScript convention).</li>
          <li><strong>Use camelCase</strong> for multi-word names — <code>firstName</code>, <code>totalPrice</code>, <code>isLoggedIn</code>.</li>
          <li><strong>No spaces or special characters</strong> — only letters, numbers, <code>_</code>, and <code>$</code>.</li>
        </ul>

        <NoteCallout type="info">
          <strong>Semicolons are optional</strong> in TypeScript and JavaScript. You can write <code>let age = 25;</code> or <code>let age = 25</code> — both work. But being consistent is good practice.
        </NoteCallout>
      </ConceptSection>

      <ConceptSection id="vc-syntax" label="Basics" title="Variable Syntax — How to Create One">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Creating a variable is like
          <strong> filling out a form</strong>. The form asks:
          <strong> What keyword?</strong> (let/const) →
          <strong> What name?</strong> (age) →
          <strong> What type?</strong> (number — optional) →
          <strong> What value?</strong> (25). That's the full syntax!
        </NoteCallout>

        <h3>Full syntax (with data type)</h3>
        <pre><code>{`keyword variableName: dataType = value;

// Example:
let age: number = 30;`}</code></pre>

        <h3>Short syntax (without data type — TypeScript figures it out)</h3>
        <pre><code>{`keyword variableName = value;

// Example:
let age = 30;  // TypeScript automatically knows this is a number`}</code></pre>

        <div className="bordered">
          <table>
            <thead>
              <tr>
                <th>Part</th>
                <th>What it means</th>
                <th>Required?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="rid">Keyword</span></td>
                <td><code>var</code>, <code>let</code>, or <code>const</code></td>
                <td><span className="p p-blue">Required</span></td>
              </tr>
              <tr>
                <td><span className="rid">Variable name</span></td>
                <td>The label for your box</td>
                <td><span className="p p-blue">Required</span></td>
              </tr>
              <tr>
                <td><span className="rid">Data type</span></td>
                <td><code>number</code>, <code>string</code>, <code>boolean</code>, etc.</td>
                <td><span className="p p-gray">Optional</span> — TypeScript can figure it out</td>
              </tr>
              <tr>
                <td><span className="rid">Value</span></td>
                <td>What you're putting inside the box</td>
                <td>Depends on keyword (required for <code>const</code>)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <NoteCallout type="warn">
          <strong>Data types are covered in a separate topic.</strong> For
          now, just know that TypeScript can auto-detect the type from the
          value you assign. If you write <code>let age = 30</code>,
          TypeScript knows it's a <code>number</code> automatically.
        </NoteCallout>
      </ConceptSection>
    
      
      
      
      {/* Remaining legacy content injected via dangerouslySetInnerHTML to ensure nothing is missing while migration continues */}
      <div dangerouslySetInnerHTML={{ __html: `
<div class="sec" id="vc-keywords">
            <div class="sec-label">Three Keywords</div>
            <h2>var, let, and const — The Three Ways</h2>
            <div class="note note-tip">
              <span class="note-i">✓</span>
              <p>
                <strong>Real-Life Example:</strong> Imagine three types of
                containers:<br />
                ✓ <strong>var</strong> = An old cardboard box (works but
                unreliable — might leak, things fall out).<br />
                ✓ <strong>let</strong> = A sturdy plastic box (safe, you can
                change what's inside anytime).<br />
                ✓ <strong>const</strong> = A locked safe (once you put something
                in, it stays forever — can't change it).
              </p>
            </div>

            <p>
              TypeScript gives you <strong>three keywords</strong> to create
              variables. Each behaves differently:
            </p>

            <div class="agrid">
              <div class="acard">
                <div class="aschema">Keyword 1</div>
                <div class="aname">var</div>
                <span
                  class="atype"
                  style="background: var(--red-bg); color: var(--red)"
                  >Avoid</span
                >
                <div class="adesc">
                  The old way. Still works but causes unexpected bugs.
                  <strong>Don't use this</strong> in modern TypeScript. It's
                  like using a flip phone in 2025.
                </div>
              </div>
              <div class="acard">
                <div class="aschema">Keyword 2</div>
                <div class="aname">let</div>
                <span class="atype at-kw">Recommended</span>
                <div class="adesc">
                  The modern choice. Use <code>let</code> when your variable's
                  value will <strong>change later</strong>. Like a whiteboard —
                  erase and rewrite anytime.
                </div>
              </div>
              <div class="acard">
                <div class="aschema">Keyword 3</div>
                <div class="aname">const</div>
                <span class="atype at-tbl">Recommended</span>
                <div class="adesc">
                  For values that should <strong>never change</strong>. Like
                  carving your name in stone — permanent. Use this by default
                  when possible.
                </div>
              </div>
            </div>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     WHEN TO USE WHICH
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-when">
            <div class="sec-label">Three Keywords</div>
            <h2>When to Use Which?</h2>
            <div class="pipe">
              <div class="pipe-step">
                <div class="pipe-ph" style="color: var(--red)">var</div>
                <div class="pipe-name">✓ Never use</div>
                <div class="pipe-pts">Causes unexpected bugs</div>
              </div>
              <div class="pipe-step">
                <div class="pipe-ph ph2-c">let</div>
                <div class="pipe-name">✅ Value will change</div>
                <div class="pipe-pts">Counters, scores, names</div>
              </div>
              <div class="pipe-step">
                <div class="pipe-ph ph1-c">const</div>
                <div class="pipe-name">✅ Value stays fixed</div>
                <div class="pipe-pts">PI, URL, settings</div>
              </div>
            </div>

            <div class="card ph2-card">
              <div class="card-head">
                <div class="card-num">✓</div>
                <div class="card-title">Quick decision guide</div>
                <span class="card-badge">Rule of Thumb</span>
              </div>
              <div class="card-body">
                <pre><code>// ✅ Use const by default — safest choice
const siteName = "MyApp";
const maxRetries = 3;
const PI = 3.14159;

// ✅ Use let only when you NEED to change the value
let score = 0;
score = score + 10;  // score changes → let is correct

let userName = "Guest";
userName = "John";   // value changes → let is correct

// ❌ Never use var — it's the old way
// var age = 25;  ← DON'T DO THIS</code></pre>
              </div>
            </div>

            <div class="note note-warn">
              <span class="note-i">⚠</span>
              <p>
                <strong>Why avoid var?</strong> Two reasons: (1)
                <code>var</code> has function scope which causes unexpected bugs
                in if/else and loops. (2) <code>var</code> allows redeclaration
                which breaks TypeScript's type safety. We'll see exactly why in
                the sections below.
              </p>
            </div>
          </div>

          <div class="note note-tip" style="margin: 0 0 2rem">
            <span class="note-i">✓</span>
            <p>
              <strong>🧠 Memory Trick — Remember All 5 Differences
              (var vs let vs const):</strong><br /><br />
              "<strong>S</strong>mart <strong>D</strong>evelopers
              <strong>R</strong>arely
              <strong>R</strong>epeat
              <strong>H</strong>istory"<br />
              → <strong>S</strong>cope, <strong>D</strong>eclaration,
              <strong>R</strong>edeclaration,
              <strong>R</strong>eassignment,
              <strong>H</strong>oisting
            </p>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     DIFFERENCE 1: SCOPE
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-scope">
            <div class="sec-label">Difference ①</div>
            <h2>Scope — Where Can You Access the Variable?</h2>
            <div class="note note-tip">
              <span class="note-i">✓</span>
              <p>
                <strong>Real-Life Example:</strong> Think of
                <strong>scope</strong> like
                <strong>rooms in a house</strong>.<br />
                ✓ <strong>Function scope (var)</strong> = If you leave your
                phone anywhere in the house, you can find it from any room. Even
                if you left it in the bathroom, you can grab it from the
                kitchen.<br />
                ✓ <strong>Block scope (let/const)</strong> = If you leave your
                phone in the bathroom and close the door, you can ONLY access it
                while you're inside the bathroom. Step outside? Can't reach it
                anymore.
              </p>
            </div>

            <p>
              <strong>Scope</strong> means: "Where exactly can I use this
              variable?" TypeScript has two types of scope:
            </p>

            <div class="bordered">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Applies to</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="p p-amber">Function Scope</span></td>
                    <td><code>var</code></td>
                    <td>
                      Variable can be accessed
                      <strong>anywhere inside the function</strong>, even
                      outside the block where it was created.
                    </td>
                  </tr>
                  <tr>
                    <td><span class="p p-blue">Block Scope</span></td>
                    <td><code>let</code>, <code>const</code></td>
                    <td>
                      Variable can <strong>only</strong> be accessed inside the
                      <code>{ }</code> block where it was created. Step outside
                      the braces? Gone.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="card ph5-card">
              <div class="card-head">
                <div class="card-num">1</div>
                <div class="card-title">
                  var — function scope (leaks out of blocks!)
                </div>
                <span class="card-badge">⚠ Problem</span>
              </div>
              <div class="card-body">
                <pre><code>function varExample() {
  if (true) {
    var message = "Hello World";  // created INSIDE the if-block
  }

  console.log(message);  // ✅ "Hello World" — var LEAKS out!
  // ✓ This shouldn't work, but var ignores block boundaries
}

varExample();</code></pre>
                <p>
                  Even though <code>message</code> was created inside the
                  <code>if</code> block, <code>var</code> lets you access it
                  outside. That's the problem — it's unpredictable.
                </p>
              </div>
            </div>

            <div class="card ph1-card">
              <div class="card-head">
                <div class="card-num">2</div>
                <div class="card-title">
                  let / const — block scope (stays inside its block)
                </div>
                <span class="card-badge">✅ Safe</span>
              </div>
              <div class="card-body">
                <pre><code>function letConstExample() {
  if (true) {
    let message = "Hello World";
    const greeting = "Hi there";
    console.log(message);   // ✅ Works — we're INSIDE the block
    console.log(greeting);  // ✅ Works — we're INSIDE the block
  }

  console.log(message);   // ❌ ERROR: message is not defined
  console.log(greeting);  // ❌ ERROR: greeting is not defined
  // ✓ Can't access — they're locked inside the if-block
}

letConstExample();</code></pre>
                <p>
                  <code>let</code> and <code>const</code> stay inside their
                  <code>{ }</code> block. Once you step outside the curly
                  braces, the variable doesn't exist anymore.
                  <strong>This is safer and more predictable.</strong>
                </p>
              </div>
            </div>

            <div class="card ph3-card">
              <div class="card-head">
                <div class="card-num">3</div>
                <div class="card-title">
                  All three together — see the difference clearly
                </div>
                <span class="card-badge">Comparison</span>
              </div>
              <div class="card-body">
                <pre><code>function scopeComparison() {
  if (true) {
    var num1 = 10;    // var — function scoped
    let num2 = 20;    // let — block scoped
    const num3 = 30;  // const — block scoped
  }

  console.log(num1);  // ✅ 10 — var leaks out of the block
  console.log(num2);  // ❌ ERROR — let stays inside the block
  console.log(num3);  // ❌ ERROR — const stays inside the block
}</code></pre>
              </div>
            </div>

            <div class="note note-info">
              <span class="note-i">i</span>
              <p>
                <strong>What is a "block"?</strong> Anything between curly
                braces <code>{ }</code> is a block. This includes:
                <code>if</code> statements, <code>for</code> loops,
                <code>while</code> loops, and <code>function</code> bodies.
              </p>
            </div>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     DIFFERENCE 2: DECLARATION
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-declaration">
            <div class="sec-label">Difference ②</div>
            <h2>Declaration — Can You Create Without a Value?</h2>
            <div class="note note-tip">
              <span class="note-i">✓</span>
              <p>
                <strong>Real-Life Example:</strong> <strong>var/let</strong> are
                like getting an <strong>empty box from the store</strong> — you
                take the box home empty and fill it later.
                <strong>const</strong> is like a
                <strong>pre-packaged gift box</strong> — it comes with something
                inside already. You can't buy an empty gift box and say "I'll
                put something in later." It must have a value when created.
              </p>
            </div>

            <h3>
              Declaration = creating the variable. Initialization = giving it a
              value.
            </h3>

            <div class="card ph1-card">
              <div class="card-head">
                <div class="card-num">1</div>
                <div class="card-title">var — can declare without a value</div>
                <span class="card-badge">✅ Allowed</span>
              </div>
              <div class="card-body">
                <pre><code>var age;           // declaration only — no value yet
console.log(age);  // undefined (box exists but it's empty)

age = 30;          // initialization — now we put a value in
console.log(age);  // 30</code></pre>
              </div>
            </div>

            <div class="card ph2-card">
              <div class="card-head">
                <div class="card-num">2</div>
                <div class="card-title">
                  let — can also declare without a value
                </div>
                <span class="card-badge">✅ Allowed</span>
              </div>
              <div class="card-body">
                <pre><code>let score;          // declaration only — empty box
console.log(score); // undefined

score = 100;        // now we add the value
console.log(score); // 100</code></pre>
              </div>
            </div>

            <div class="card ph3-card">
              <div class="card-head">
                <div class="card-num">3</div>
                <div class="card-title">
                  const — MUST have a value at creation
                </div>
                <span class="card-badge">❌ Value Required</span>
              </div>
              <div class="card-body">
                <pre><code>const PI;  // ❌ ERROR! "const must be initialized"
// TypeScript says: You can't create a const without a value!

const PI = 3.14159;  // ✅ This works — value given at creation
console.log(PI);     // 3.14159</code></pre>
                <p>
                  Makes sense, right? If <code>const</code> means "this value
                  never changes," then it MUST have a value from the start —
                  otherwise what's the point of a permanently empty box?
                </p>
              </div>
            </div>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     DIFFERENCE 3: REDECLARATION
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-redeclaration">
            <div class="sec-label">Difference ③</div>
            <h2>Redeclaration — Can You Create the Same Variable Twice?</h2>
            <div class="note note-tip">
              <span class="note-i">✓</span>
              <p>
                <strong>Real-Life Example:</strong> <strong>var</strong> is like
                a name tag system where you can
                <strong>print the same name badge twice</strong> — confusing,
                right? Which badge is the real one?
                <strong>let/const</strong> are like an ID card system — each
                person gets <strong>one ID only</strong>. If you try to issue a
                second ID with the same name, the system says "Error! This
                person already exists."
              </p>
            </div>

            <div class="card ph5-card">
              <div class="card-head">
                <div class="card-num">1</div>
                <div class="card-title">
                  var — allows redeclaration (dangerous!)
                </div>
                <span class="card-badge">⚠ Problem</span>
              </div>
              <div class="card-body">
                <pre><code>var city = "New York";
var city = "Los Angeles";  // ✅ No error — but this is DANGEROUS!

console.log(city);  // "Los Angeles"
// ✓ The first value got silently replaced. Imagine this happening
// in a 1000-line project — you'd never find the bug!</code></pre>
              </div>
            </div>

            <div class="card ph1-card">
              <div class="card-head">
                <div class="card-num">2</div>
                <div class="card-title">let — does NOT allow redeclaration</div>
                <span class="card-badge">✅ Safe</span>
              </div>
              <div class="card-body">
                <pre><code>let country = "India";
let country = "USA";  // ❌ ERROR: Cannot redeclare block-scoped variable

// TypeScript catches the mistake BEFORE your code runs!</code></pre>
              </div>
            </div>

            <div class="card ph3-card">
              <div class="card-head">
                <div class="card-num">3</div>
                <div class="card-title">
                  const — does NOT allow redeclaration
                </div>
                <span class="card-badge">✅ Safe</span>
              </div>
              <div class="card-body">
                <pre><code>const planet = "Earth";
const planet = "Mars";  // ❌ ERROR: Cannot redeclare block-scoped variable

// const is even stricter — you can't redeclare OR change the value!</code></pre>
              </div>
            </div>

            <div class="note note-warn">
              <span class="note-i">⚠</span>
              <p>
                <strong>This is why var is unsafe.</strong> Redeclaration breaks
                TypeScript's <strong>type safety</strong> concept. The whole
                point of TypeScript is to catch bugs early — but
                <code>var</code> lets you silently overwrite variables, hiding
                bugs instead of catching them.
              </p>
            </div>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     DIFFERENCE 4: REASSIGNMENT
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-reassignment">
            <div class="sec-label">Difference ④</div>
            <h2>Reassignment — Can You Change the Value Later?</h2>
            <div class="note note-tip">
              <span class="note-i">✓</span>
              <p>
                <strong>Real-Life Example:</strong> <strong>var/let</strong> are
                like a <strong>whiteboard</strong> — you can erase what's
                written and write something new, over and over.
                <strong>const</strong> is like a
                <strong>permanent marker on paper</strong> — once you write
                something, it stays forever. No erasing!
              </p>
            </div>

            <div class="card ph1-card">
              <div class="card-head">
                <div class="card-num">1</div>
                <div class="card-title">
                  var &amp; let — reassignment allowed
                </div>
                <span class="card-badge">✅ Can change</span>
              </div>
              <div class="card-body">
                <pre><code>var age = 25;
age = 30;        // ✅ No problem — var allows changing values
console.log(age); // 30

let score = 0;
score = 100;     // ✅ No problem — let allows changing values
console.log(score); // 100</code></pre>
                <p class="fn">
                  Note: reassignment is NOT the same as redeclaration.
                  Reassignment changes the VALUE. Redeclaration creates the
                  VARIABLE again with the keyword. Here we're just changing the
                  value — no keyword used.
                </p>
              </div>
            </div>

            <div class="card ph3-card">
              <div class="card-head">
                <div class="card-num">2</div>
                <div class="card-title">const — reassignment NOT allowed</div>
                <span class="card-badge">✓ Locked</span>
              </div>
              <div class="card-body">
                <pre><code>const age = 25;
age = 30;  // ❌ ERROR: Cannot assign to 'age' because it is a constant

// The whole point of const is that the value NEVER changes.
// That's its superpower — guaranteed stability.</code></pre>
              </div>
            </div>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     DIFFERENCE 5: HOISTING
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-hoisting">
            <div class="sec-label">Difference ⑤</div>
            <h2>Hoisting — What Happens If You Use Before You Create?</h2>
            <div class="note note-tip">
              <span class="note-i">✓</span>
              <p>
                <strong>Real-Life Example:</strong> Imagine ordering food at a
                restaurant
                <strong>before even looking at the menu</strong>.<br />
                ✓ <strong>var</strong> = The waiter says "OK" and brings you an
                <strong>empty plate</strong> (<code>undefined</code>). Confusing
                but no crash.<br />
                ✓ <strong>let/const</strong> = The waiter says
                <strong
                  >"Sorry, you can't order yet — the kitchen isn't
                  ready"</strong
                >
                and throws an error. Honest and clear.
              </p>
            </div>

            <p>
              <strong>Hoisting</strong> means: what happens if you try to use a
              variable BEFORE you create it in your code?
            </p>

            <div class="card ph5-card">
              <div class="card-head">
                <div class="card-num">1</div>
                <div class="card-title">
                  var — hoisted with undefined (confusing!)
                </div>
                <span class="card-badge">⚠ Silently fails</span>
              </div>
              <div class="card-body">
                <pre><code>console.log(age);  // undefined (no error — just empty)
var age = 30;
console.log(age);  // 30

// ✓ var pretends the variable exists but with no value.
// This hides bugs — you expect an error but get "undefined" instead.</code></pre>
              </div>
            </div>

            <div class="card ph1-card">
              <div class="card-head">
                <div class="card-num">2</div>
                <div class="card-title">
                  let — hoisted but NOT initialized (proper error)
                </div>
                <span class="card-badge">✅ Clear error</span>
              </div>
              <div class="card-body">
                <pre><code>console.log(score);  // ❌ ERROR: Cannot access 'score' before initialization
let score = 100;

// ✓ let gives you a clear error — "Hey, you're using this before creating it!"
// This is MUCH better — the bug is caught immediately.</code></pre>
              </div>
            </div>

            <div class="card ph3-card">
              <div class="card-head">
                <div class="card-num">3</div>
                <div class="card-title">const — same as let (proper error)</div>
                <span class="card-badge">✅ Clear error</span>
              </div>
              <div class="card-body">
                <pre><code>console.log(PI);  // ❌ ERROR: Cannot access 'PI' before initialization
const PI = 3.14;

// Same behavior as let — clear, honest error.</code></pre>
              </div>
            </div>

            <div class="note note-info">
              <span class="note-i">i</span>
              <p>
                <strong
                  >In practice, you should never access a variable before
                  creating it.</strong
                >
                Hoisting is mainly important for understanding WHY
                <code>var</code> causes hard-to-find bugs in large projects.
              </p>
            </div>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     COMMON MISTAKES
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-mistakes">
            <div class="sec-label">Watch Out!</div>
            <h2>⚠ Common Beginner Mistakes</h2>

            <div class="note note-warn">
              <span class="note-i">⚠</span>
              <div>
                <strong
                  >Mistake 1: Thinking <code>const</code> makes EVERYTHING
                  unchangeable</strong
                >
                <p>
                  <code>const</code> locks the <em>box itself</em> (the
                  variable), NOT what's <em>inside</em> the box. For objects and
                  arrays, you can still change the contents — you just can't
                  replace the entire box with a new one!
                </p>
                <pre><code>const person = { name: "Alice", age: 25 };

// ✅ This WORKS — changing what's INSIDE the box
person.age = 26;           // ✓ Fine! Contents can change
person.name = "Bob";       // ✓ Fine! Still the same object

// ❌ This FAILS — trying to replace the entire box
person = { name: "Charlie", age: 30 }; // ERROR!
// "Cannot assign to 'person' because it is a constant."

// Same with arrays:
const colors = ["red", "blue"];
colors.push("green");      // ✓ Fine! Modifying contents
colors = ["yellow"];       // ❌ ERROR! Can't replace the array</code></pre>
                <p>
                  <strong>Rule:</strong> <code>const</code> = the variable name
                  ALWAYS points to the SAME object/array. But you can still add,
                  remove, or change items inside it.
                </p>
              </div>
            </div>

            <div class="note note-warn">
              <span class="note-i">⚠</span>
              <div>
                <strong>Mistake 2: Using a variable BEFORE declaring it</strong>
                <p>
                  With <code>var</code>, accessing a variable before its
                  declaration gives <code>undefined</code> (confusing but no
                  crash). With <code>let</code> and <code>const</code>, it
                  throws a <strong>ReferenceError</strong> (the Temporal Dead
                  Zone — TDZ).
                </p>
                <pre><code>// var — gives undefined (confusing!)
console.log(x); // undefined (no error, but WHY?!)
var x = 10;

// let — throws error (safer!)
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;

// const — same error
console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 10;</code></pre>
                <p>
                  <strong>Rule:</strong> Always declare your variables BEFORE
                  using them. <code>let</code> and <code>const</code> protect
                  you by crashing early instead of silently giving
                  <code>undefined</code>.
                </p>
              </div>
            </div>

            <div class="bordered">
              <table>
                <thead>
                  <tr>
                    <th>Mistake</th>
                    <th>What you expect</th>
                    <th>What happens</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>const obj = {}</code> then <code>obj.x = 1</code>
                    </td>
                    <td>Error</td>
                    <td>✅ Works fine</td>
                    <td>const locks reference, not contents</td>
                  </tr>
                  <tr>
                    <td>
                      <code>const obj = {}</code> then <code>obj = {}</code>
                    </td>
                    <td>Works</td>
                    <td>❌ Error</td>
                    <td>Can't replace the whole box</td>
                  </tr>
                  <tr>
                    <td>Use <code>let x</code> before declaring</td>
                    <td><code>undefined</code></td>
                    <td>❌ ReferenceError</td>
                    <td>TDZ — let/const aren't hoisted like var</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     COMPARISON TABLE
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-comparison">
            <div class="sec-label">Reference</div>
            <h2>Complete Comparison — var vs let vs const</h2>
            <div class="bordered">
              <table>
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>var</th>
                    <th>let</th>
                    <th>const</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Scope</td>
                    <td><span class="p p-amber">Function</span></td>
                    <td><span class="p p-blue">Block</span></td>
                    <td><span class="p p-blue">Block</span></td>
                  </tr>
                  <tr>
                    <td>Declaration without value</td>
                    <td><span class="p p-green">Allowed</span></td>
                    <td><span class="p p-green">Allowed</span></td>
                    <td><span class="p p-red">NOT allowed</span></td>
                  </tr>
                  <tr>
                    <td>Redeclaration</td>
                    <td><span class="p p-green">Allowed</span> ⚠</td>
                    <td><span class="p p-red">NOT allowed</span></td>
                    <td><span class="p p-red">NOT allowed</span></td>
                  </tr>
                  <tr>
                    <td>Reassignment</td>
                    <td><span class="p p-green">Allowed</span></td>
                    <td><span class="p p-green">Allowed</span></td>
                    <td><span class="p p-red">NOT allowed</span></td>
                  </tr>
                  <tr>
                    <td>Hoisting behavior</td>
                    <td>Returns <code>undefined</code></td>
                    <td>Throws error</td>
                    <td>Throws error</td>
                  </tr>
                  <tr>
                    <td>Should you use it?</td>
                    <td><span class="p p-red">✓ Avoid</span></td>
                    <td><span class="p p-green">✅ Yes</span></td>
                    <td><span class="p p-green">✅ Yes (default)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="note note-warn">
              <span class="note-i">⚠</span>
              <p>
                <strong>var is unsafe for two reasons:</strong> (1) Function
                scope causes unexpected behavior inside if/else and loops. (2)
                Redeclaration is allowed, which breaks TypeScript's type safety.
                Always use <code>let</code> or <code>const</code> instead.
              </p>
            </div>

            <h3>The golden rule</h3>
            <div class="pipe">
              <div class="pipe-step">
                <div class="pipe-ph ph1-c">Step 1</div>
                <div class="pipe-name">Start with const</div>
                <div class="pipe-pts">Use const by default</div>
              </div>
              <div class="pipe-step">
                <div class="pipe-ph ph2-c">Step 2</div>
                <div class="pipe-name">Switch to let if needed</div>
                <div class="pipe-pts">Only when value changes</div>
              </div>
              <div class="pipe-step">
                <div class="pipe-ph" style="color: var(--red)">Never</div>
                <div class="pipe-name">Don't use var</div>
                <div class="pipe-pts">It's from the old days</div>
              </div>
            </div>
          </div>

          <!-- ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
     CHEATSHEET
←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← -->
          <div class="sec" id="vc-cheatsheet">
            <div class="sec-label">Reference</div>
            <h2>Quick Reference Cheatsheet</h2>

            <h3>Creating variables</h3>
            <pre><code>// ”” With data type (explicit) ””””””””””””””””””
let age: number = 25;
let name: string = "John";
let isActive: boolean = true;
const PI: number = 3.14159;

// ”” Without data type (TypeScript auto-detects) ”
let age = 25;           // TypeScript knows it's a number
let name = "John";      // TypeScript knows it's a string
const PI = 3.14159;     // TypeScript knows it's a number</code></pre>

            <h3>Comments</h3>
            <pre><code>// Single line comment

/* Multi-line
   comment */

// Shortcut (VS Code): Ctrl+/ (single) | Shift+Alt+A (multi)</code></pre>

            <h3>var vs let vs const — quick summary</h3>
            <pre><code>// ❌ var — avoid this
var oldWay = "don't use me";

// ✅ let — value will change later
let score = 0;
score = 50;
score = 100;

// ✅ const — value stays forever
const appName = "MyApp";
const maxUsers = 1000;
// appName = "Other";  ← ERROR: can't change const</code></pre>

            <h3>Scope quick test</h3>
            <pre><code>function test() {
  if (true) {
    var a = 1;    // function scope — accessible everywhere in function
    let b = 2;    // block scope — ONLY here inside the if { }
    const c = 3;  // block scope — ONLY here inside the if { }
  }
  console.log(a); // ✅ 1 (var leaks out)
  console.log(b); // ❌ Error (let stays in block)
  console.log(c); // ❌ Error (const stays in block)
}</code></pre>

            <h3>TypeScript type inference — let vs const</h3>
            <pre><code>// TS infers DIFFERENTLY for let vs const:
let x = "hello";      // type: string   (widened — can be reassigned)
const y = "hello";    // type: "hello"  (literal — can never change!)

let n = 42;            // type: number
const m = 42;          // type: 42

// WHY this matters — const gives you narrower, safer types:
type Direction = "up" | "down";
const dir = "up";      // type: "up" ✅ — works with Direction
let dir2 = "up";       // type: string ❌ — too wide for Direction

// Fix: use 'as const' to force literal type with let:
let dir3 = "up" as const; // type: "up" ✅</code></pre>

            <hr />
            <p
              style="font-size: 11.5px; color: var(--ink3); text-align: center"
            >
              TypeScript Learning Path &nbsp;·&nbsp; Variables &amp; Keywords
              &nbsp;·&nbsp; Next: Data Types
            </p>
          </div>
        </div>
        
` }} />
    </>
  );
}
