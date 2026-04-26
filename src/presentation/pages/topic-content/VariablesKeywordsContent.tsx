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
      
      <ConceptSection id="vc-comments" label="Basics" title="Comments  --  Notes for Humans">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Imagine you're writing a{' '}
          recipe notebook. You write the steps, but you also write{' '}
          <strong>little side notes</strong> for yourself: "Mom's secret
          tip: add extra butter." Those side notes are{' '}
          <strong>comments</strong>  --  they don't get cooked (executed),
          they're just there for YOU to remember why you did something.
        </NoteCallout>
        
        <p>
          Comments are lines in your code that TypeScript <strong>completely ignores</strong> when running. They serve two purposes:
        </p>
        <ul>
          <li><strong>Explain your code</strong>  --  so other people (or future you) can understand WHY you wrote something.</li>
          <li><strong>Temporarily disable code</strong>  --  if you want to skip a line without deleting it, just comment it out.</li>
        </ul>

        <h3>Single-line comment</h3>
        <p>Use two forward slashes <code>{'//'}</code>. Everything after the <code>{'//'}</code> on that line is ignored.</p>
        <pre><code>{`// This is a comment  --  TypeScript ignores it
console.log("Hello");  // This part is also a comment`}</code></pre>

        <h3>Multi-line comment</h3>
        <p>Use <code>{'/*'}</code> to start and <code>{'*/'}</code> to end. Everything between them is ignored  --  works across multiple lines.</p>
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
          These shortcuts <strong>toggle</strong>  --  press once to comment,
          press again to uncomment. Same shortcut for both.
        </NoteCallout>
      </ConceptSection>

      <ConceptSection id="vc-intro" label="Basics" title="What is a Variable?">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Think of a variable as a{' '}
          <strong>labeled box</strong>. You write a name on the box (like
          "age" or "studentName"), and you put something inside it (like{' '}
          <strong>25</strong> or <strong>"John"</strong>). Later, you can
          open the box to see what's inside, or replace the contents with
          something new.
        </NoteCallout>
        <p>
          A variable is a <strong>container that stores data</strong>. You
          give it a name, and it holds a value for you. That's it!
        </p>

        <CodeCard number="1" title="Simple variable examples" badge="Basics" badgeColorClass="ph1-card">
          <pre><code>{`let age = 25;              // Box labeled "age"  --  contains 25
let studentName = "John";  // Box labeled "studentName"  --  contains "John"

console.log(age);          // 25
console.log(studentName);  // John`}</code></pre>
          <p className="fn">
            The variable name should describe what's inside  --  <code>studentName</code> is much better than <code>x</code>.
          </p>
        </CodeCard>

        <h3>Why is it called a "variable"?</h3>
        <p>
          Because the value can <strong>vary</strong> (change). Today the
          box says 25, tomorrow you can put 30 in it. The box stays the
          same, but the contents can change  --  that's the nature of a
          variable.
        </p>

        <h3>Naming best practices</h3>
        <ul>
          <li><strong>Use meaningful names</strong>  --  <code>studentName</code> instead of <code>x</code> or <code>sn</code>.</li>
          <li><strong>Start with lowercase</strong>  --  <code>age</code>, not <code>Age</code> (TypeScript convention).</li>
          <li><strong>Use camelCase</strong> for multi-word names  --  <code>firstName</code>, <code>totalPrice</code>, <code>isLoggedIn</code>.</li>
          <li><strong>No spaces or special characters</strong>  --  only letters, numbers, <code>_</code>, and <code>$</code>.</li>
        </ul>

        <NoteCallout type="info">
          <strong>Semicolons are optional</strong> in TypeScript and JavaScript. You can write <code>let age = 25;</code> or <code>let age = 25</code>  --  both work. But being consistent is good practice.
        </NoteCallout>
      </ConceptSection>

      <ConceptSection id="vc-syntax" label="Basics" title="Variable Syntax  --  How to Create One">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Creating a variable is like{' '}
          <strong>filling out a form</strong>. The form asks:{' '}
          <strong>What keyword?</strong> (let/const) →{' '}
          <strong>What name?</strong> (age) →{' '}
          <strong>What type?</strong> (number  --  optional) →{' '}
          <strong>What value?</strong> (25). That's the full syntax!
        </NoteCallout>

        <h3>Full syntax (with data type)</h3>
        <pre><code>{`keyword variableName: dataType = value;

// Example:
let age: number = 30;`}</code></pre>

        <h3>Short syntax (without data type  --  TypeScript figures it out)</h3>
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
                <td><span className="p p-gray">Optional</span>  --  TypeScript can figure it out</td>
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
    
      
      
      

      <ConceptSection id="vc-keywords" label="Three Keywords" title="var, let, and const  --  The Three Ways">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Imagine three types of containers:<br />
          ✓ <strong>var</strong> = An old cardboard box (works but unreliable  --  might leak, things fall out).<br />
          ✓ <strong>let</strong> = A sturdy plastic box (safe, you can change what's inside anytime).<br />
          ✓ <strong>const</strong> = A locked safe (once you put something in, it stays forever  --  can't change it).
        </NoteCallout>

        <p>
          TypeScript gives you <strong>three keywords</strong> to create variables. Each behaves differently:
        </p>

        <div className="agrid">
          <div className="acard">
            <div className="aschema">Keyword 1</div>
            <div className="aname">var</div>
            <span className="atype" style={{ background: 'var(--red-bg)', color: 'var(--red)' }}>Avoid</span>
            <div className="adesc">
              The old way. Still works but causes unexpected bugs. <strong>Don't use this</strong> in modern TypeScript. It's like using a flip phone in 2025.
            </div>
          </div>
          <div className="acard">
            <div className="aschema">Keyword 2</div>
            <div className="aname">let</div>
            <span className="atype at-kw">Recommended</span>
            <div className="adesc">
              The modern choice. Use <code>let</code> when your variable's value will <strong>change later</strong>. Like a whiteboard  --  erase and rewrite anytime.
            </div>
          </div>
          <div className="acard">
            <div className="aschema">Keyword 3</div>
            <div className="aname">const</div>
            <span className="atype at-tbl">Recommended</span>
            <div className="adesc">
              For values that should <strong>never change</strong>. Like carving your name in stone  --  permanent. Use this by default when possible.
            </div>
          </div>
        </div>
      </ConceptSection>

      <ConceptSection id="vc-when" label="Best Practices" title="When to Use Which?">
        <div className="pipe">
          <div className="pipe-step">
            <div className="pipe-ph" style={{ color: 'var(--red)' }}>var</div>
            <div className="pipe-name">✓ Never use</div>
            <div className="pipe-pts">Causes unexpected bugs</div>
          </div>
          <div className="pipe-step">
            <div className="pipe-ph ph2-c">let</div>
            <div className="pipe-name">✅ Value will change</div>
            <div className="pipe-pts">Counters, scores, names</div>
          </div>
          <div className="pipe-step">
            <div className="pipe-ph ph1-c">const</div>
            <div className="pipe-name">✅ Value stays fixed</div>
            <div className="pipe-pts">PI, URL, settings</div>
          </div>
        </div>

        <CodeCard number="2" title="Quick decision guide" badge="Rule of Thumb" badgeColorClass="ph2-card">
          <pre><code>{`// ✅ Use const by default  --  safest choice
const siteName = "MyApp";
const maxRetries = 3;

// ✅ Use let only when you NEED to change the value
let score = 0;
score = score + 10;  // score changes → let is correct

// ❌ Never use var  --  it's the old way
// var age = 25;  ← DON'T DO THIS`}</code></pre>
        </CodeCard>

        <NoteCallout type="warn">
          <strong>Why avoid var?</strong> Two reasons: (1) <code>var</code> has function scope which causes unexpected bugs in if/else and loops. (2) <code>var</code> allows redeclaration which breaks TypeScript's type safety.
        </NoteCallout>
      </ConceptSection>

      <ConceptSection id="vc-const-objects" label="Advanced Const" title="Const with Objects & Arrays">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Think of <code>const</code> like a <strong>fixed shelf</strong>. 
          You can't move the shelf to a different wall (reassign the variable), 
          but you can absolutely <strong>add, remove, or swap the items</strong> sitting on that shelf (modify properties).
        </NoteCallout>

        <p>
          This is a common point of confusion: <code>const</code> prevents you from <strong>reassigning</strong> the variable, but it does NOT make the <em>data inside</em> unchangeable if it's an Object or an Array.
        </p>

        <div className="card ph1-card">
          <div className="card-head">
            <div className="card-num">!</div>
            <div className="card-title">Modifying object properties</div>
            <span className="card-badge">Important</span>
          </div>
          <div className="card-body">
            <pre><code>{`const user = { name: "John", age: 30 };

// ✅ This is ALLOWED: Changing a property
user.age = 31; 
console.log(user.age); // 31

// ❌ This is NOT ALLOWED: Reassigning the whole object
user = { name: "Jane", age: 25 }; // ERROR!`}</code></pre>
            <p className="fn">
              The "box" (user) must always point to the same object, but the object's contents can be edited.
            </p>
          </div>
        </div>

        <div className="card ph3-card">
          <div className="card-head">
            <div className="card-num">!</div>
            <div className="card-title">Modifying array elements</div>
            <span className="card-badge">Important</span>
          </div>
          <div className="card-body">
            <pre><code>{`const colors = ["red", "green"];

// ✅ This is ALLOWED: Adding/changing items
colors.push("blue");
colors[0] = "dark-red"; 

// ❌ This is NOT ALLOWED: Reassigning the whole array
colors = ["blue", "yellow"]; // ERROR!`}</code></pre>
          </div>
        </div>


        <NoteCallout type="info">
          If you want to make the <em>entire object</em> unchangeable (including its properties), you would use <code>Object.freeze(obj)</code> or specialized TypeScript types like <code>Readonly&lt;T&gt;</code>.
        </NoteCallout>
      </ConceptSection>

      <div className="sec" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="note note-tip" style={{ alignItems: 'flex-start' }}>
          <span className="note-i" style={{ fontSize: '18px' }}>🧠</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <strong>Memory Trick  --  Remember All 5 Differences (var vs let vs const):</strong>
            <div style={{ color: '#14532d', fontSize: '13px', lineHeight: 1.6 }}>
              "<strong>S</strong>mart <strong>D</strong>evelopers <strong>R</strong>arely <strong>R</strong>epeat <strong>H</strong>istory"
            </div>
            <div style={{ color: '#14532d', fontSize: '13px', lineHeight: 1.6 }}>
              → <strong>S</strong>cope, <strong>D</strong>eclaration, <strong>R</strong>edeclaration, <strong>R</strong>eassignment, <strong>H</strong>oisting
            </div>
          </div>
        </div>
      </div>


      <ConceptSection id="vc-scope" label="Difference ①" title="Scope  --  Where Can You Access the Variable?">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Think of <strong>scope</strong> like <strong>rooms in a house</strong>.<br />
          ✓ <strong>Function scope (var)</strong> = If you leave your phone anywhere in the house, you can find it from any room.<br />
          ✓ <strong>Block scope (let/const)</strong> = If you leave your phone in the bathroom and close the door, you can ONLY access it while inside.
        </NoteCallout>

        <p>
          <strong>Scope</strong> means: "Where exactly can I use this variable?" TypeScript has two types of scope:
        </p>

        <div className="bordered">
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
                <td><span className="p p-amber">Function Scope</span></td>
                <td><code>var</code></td>
                <td>Accessible <strong>anywhere inside the function</strong>, even outside the block where it was created.</td>
              </tr>
              <tr>
                <td><span className="p p-blue">Block Scope</span></td>
                <td><code>let</code>, <code>const</code></td>
                <td>Only accessible inside the <code>{`{ }`}</code> block where it was created. Step outside? Gone.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeCard number="1" title="var  --  function scope (leaks out!)" badge="⚠ Problem" badgeColorClass="ph5-card">
          <pre><code>{`function varExample() {
  if (true) {
    var message = "Hello World";  // created INSIDE the if-block
  }
  console.log(message);  // ✅ "Hello World"  --  var LEAKS out!
}
varExample();`}</code></pre>
        </CodeCard>

        <CodeCard number="2" title="let / const  --  block scope" badge="✅ Safe" badgeColorClass="ph1-card">
          <pre><code>{`function letConstExample() {
  if (true) {
    let message = "Hello World";
    console.log(message);   // ✅ Works  --  we're INSIDE
  }
  console.log(message);   // ❌ ERROR: message is not defined
}
letConstExample();`}</code></pre>
        </CodeCard>

        <NoteCallout type="info">
          <strong>What is a "block"?</strong> Anything between curly braces <code>{`{ }`}</code> is a block. This includes <code>if</code> statements, <code>for</code> loops, and <code>function</code> bodies.
        </NoteCallout>
      </ConceptSection>

      <ConceptSection id="vc-declaration" label="Difference ②" title="Declaration  --  Can You Create Without a Value?">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> <strong>var/let</strong> are like getting an <strong>empty box</strong> from the store. <strong>const</strong> is like a <strong>pre-packaged gift</strong>  --  it must have something inside when you get it.
        </NoteCallout>

        <div className="agrid">
          <div className="acard">
            <div className="aschema">var / let</div>
            <div className="aname">Allowed</div>
            <span className="atype at-kw">Flexible</span>
            <div className="adesc">You can create the variable now and give it a value later. Until then, it is <code>undefined</code>.</div>
          </div>
          <div className="acard">
            <div className="aschema">const</div>
            <div className="aname">Required</div>
            <span className="atype" style={{ background: 'var(--red-bg)', color: 'var(--red)' }}>Strict</span>
            <div className="adesc">You MUST give a value the exact moment you create the variable. No empty boxes!</div>
          </div>
        </div>

        <CodeCard number="3" title="const  --  Value Required" badge="❌ Error" badgeColorClass="ph3-card">
          <pre><code>{`const PI;  // ❌ ERROR! "const must be initialized"
const PI = 3.14;  // ✅ This works!`}</code></pre>
        </CodeCard>
      </ConceptSection>

      <ConceptSection id="vc-redeclaration" label="Difference ③" title="Redeclaration  --  Same Name Twice?">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> <strong>var</strong> is like a name tag system where you can print the same name twice. <strong>let/const</strong> are like an ID card system  --  only one ID per person allowed.
        </NoteCallout>

        <div className="card ph5-card">
          <div className="card-head">
            <div className="card-num">!</div>
            <div className="card-title">var allows redeclaration (Dangerous!)</div>
            <span className="card-badge">⚠ Bug Hazard</span>
          </div>
          <div className="card-body">
            <pre><code>{`var city = "New York";
var city = "Los Angeles";  // ✅ No error! Silently overwrites.`}</code></pre>
            <p className="fn">In a 1000-line project, you'd never find this bug.</p>
          </div>
        </div>

        <NoteCallout type="warn">
          <strong>let and const</strong> will throw an error if you try to redeclare them. This catches mistakes immediately!
        </NoteCallout>
      </ConceptSection>

      <ConceptSection id="vc-reassignment" label="Difference ④" title="Reassignment  --  Changing Values Later">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> <strong>var/let</strong> are like a <strong>whiteboard</strong> (erase and rewrite). <strong>const</strong> is like a <strong>permanent marker</strong> (once written, stays forever).
        </NoteCallout>

        <div className="bordered">
          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Reassignment</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>var</code> / <code>let</code></td>
                <td><span className="p p-green">Allowed</span></td>
                <td>You can change the value as many times as you want.</td>
              </tr>
              <tr>
                <td><code>const</code></td>
                <td><span className="p p-red">NOT allowed</span></td>
                <td>The value is locked forever. (Except for object properties!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ConceptSection>

      <ConceptSection id="vc-hoisting" label="Difference ⑤" title="Hoisting  --  Usage Before Creation">
        <NoteCallout type="tip">
          <strong>Real-Life Example:</strong> Ordering food before looking at the menu. <strong>var</strong> brings an empty plate (<code>undefined</code>). <strong>let/const</strong> throw an error (wait for the menu!).
        </NoteCallout>

        <CodeCard number="4" title="var Hoisting" badge="⚠ Confusing" badgeColorClass="ph5-card">
          <pre><code>{`console.log(age);  // undefined (No error!)
var age = 30;`}</code></pre>
        </CodeCard>

        <CodeCard number="5" title="let / const Hoisting" badge="✅ Safe Error" badgeColorClass="ph1-card">
          <pre><code>{`console.log(score);  // ❌ ERROR: Cannot access before initialization
let score = 100;`}</code></pre>
        </CodeCard>
      </ConceptSection>

      <ConceptSection id="vc-mistakes" label="Watch Out!" title="⚠ Common Beginner Mistakes">
        <NoteCallout type="warn">
          <strong>Mistake: Using a variable BEFORE declaring it</strong>
          <p>
            With <code>var</code>, you get <code>undefined</code>. With <code>let/const</code>, you get a <strong>ReferenceError</strong>. Always declare before using!
          </p>
        </NoteCallout>

        <div className="bordered">
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
                <td><code>const obj = {}</code> then <code>obj.x = 1</code></td>
                <td>Error</td>
                <td><span className="p p-green">✅ Works</span></td>
                <td>const locks reference, not contents</td>
              </tr>
              <tr>
                <td><code>const obj = {}</code> then <code>obj = {}</code></td>
                <td>Works</td>
                <td><span className="p p-red">❌ Error</span></td>
                <td>Can't replace the whole box</td>
              </tr>
              <tr>
                <td>Use <code>let x</code> before declaring</td>
                <td><code>undefined</code></td>
                <td><span className="p p-red">❌ Error</span></td>
                <td>TDZ  --  let/const aren't hoisted like var</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ConceptSection>

      <ConceptSection id="vc-comparison" label="Reference" title="Complete Comparison  --  var vs let vs const">
        <div className="bordered">
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
                <td><span className="p p-amber">Function</span></td>
                <td><span className="p p-blue">Block</span></td>
                <td><span className="p p-blue">Block</span></td>
              </tr>
              <tr>
                <td>Redeclaration</td>
                <td><span className="p p-green">Allowed</span></td>
                <td><span className="p p-red">NOT allowed</span></td>
                <td><span className="p p-red">NOT allowed</span></td>
              </tr>
              <tr>
                <td>Reassignment</td>
                <td><span className="p p-green">Allowed</span></td>
                <td><span className="p p-green">Allowed</span></td>
                <td><span className="p p-red">NOT allowed</span></td>
              </tr>
              <tr>
                <td>Hoisting</td>
                <td><code>undefined</code></td>
                <td>Throws error</td>
                <td>Throws error</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>The Golden Rule</h3>
          <div className="pipe">
            <div className="pipe-step">
              <div className="pipe-ph ph1-c">Step 1</div>
              <div className="pipe-name">Start with const</div>
              <div className="pipe-pts">Use by default</div>
            </div>
            <div className="pipe-step">
              <div className="pipe-ph ph2-c">Step 2</div>
              <div className="pipe-name">Switch to let</div>
              <div className="pipe-pts">Only if value changes</div>
            </div>
            <div className="pipe-step">
              <div className="pipe-ph" style={{ color: 'var(--red)' }}>Never</div>
              <div className="pipe-name">Don't use var</div>
              <div className="pipe-pts">It's obsolete</div>
            </div>
          </div>
        </div>
      </ConceptSection>

      <ConceptSection id="vc-cheatsheet" label="Reference" title="Quick Reference Cheatsheet">
        <CodeCard number="6" title="Creation Summary" badge="Cheatsheet" badgeColorClass="ph1-card">
          <pre><code>{`// ✅ Use const for fixed values
const PI = 3.14;

// ✅ Use let for values that change
let score = 0;
score = 10;

// ❌ Avoid var
var old = "don't use";`}</code></pre>
        </CodeCard>

        <CodeCard number="7" title="Scope Quick Test" badge="Concept" badgeColorClass="ph3-card">
          <pre><code>{`if (true) {
  var a = 1;  // leaks out
  let b = 2;  // stays in
}
console.log(a); // 1
console.log(b); // Error!`}</code></pre>
        </CodeCard>

        <hr />
        <p style={{ fontSize: '11.5px', color: 'var(--ink3)', textAlign: 'center' }}>
          TypeScript Learning Path &nbsp;·&nbsp; Variables & Keywords &nbsp;·&nbsp; Next: Data Types
        </p>
      </ConceptSection>
    </>
  );
}
