import type { Question } from '../../core/entities/Question';

export const quizData: Record<string, Question[]> = {
  "variables-keywords.html": [
    {
      "section": "vc-scope",
      "question": "Which keyword has function scope?",
      "options": [
        "let",
        "const",
        "<code>var</code>",
        "all three"
      ],
      "answerIndex": 2,
      "explanation": "The 'var' keyword is function-scoped, meaning it is only accessible within the function it is defined in. 'let' and 'const' are block-scoped.<code>{ let x = 1; }\nconsole.log(x); // Error: x is not defined</code>"
    },
    {
      "section": "vc-reassignment",
      "question": "Can a <code>const</code> object's properties be changed?",
      "options": [
        "Yes",
        "No",
        "Only with Object.freeze",
        "Only in strict mode"
      ],
      "answerIndex": 0,
      "explanation": "Yes! While you cannot reassign a completely new object to a 'const' variable, you are perfectly allowed to modify the properties inside an existing 'const' object.<code>const obj = { a: 1 };\nobj.a = 2; // Allowed!</code>"
    },
    {
      "section": "vc-hoisting",
      "question": "Which keyword is hoisted but NOT initialized (TDZ)?",
      "options": [
        "var",
        "<code>let</code>",
        "const",
        "function"
      ],
      "answerIndex": 1,
      "explanation": "Both 'let' and 'const' are hoisted to the top of the block, but they are kept in a Temporal Dead Zone (TDZ). You cannot access them before their declaration line.<code>console.log(x); // ReferenceError\nlet x = 5;</code>"
    },
    {
      "section": "vc-redeclaration",
      "question": "Which keyword allows redeclaration in the same scope?",
      "options": [
        "let",
        "const",
        "<code>var</code>",
        "none"
      ],
      "answerIndex": 2,
      "explanation": "Only 'var' allows you to declare the exact same variable twice in the same scope without throwing an error. 'let' and 'const' will protect you from accidental redeclarations by throwing a syntax error.<code>var x = 1; var x = 2; // Allowed\nlet y = 1; let y = 2; // SyntaxError</code>"
    },
    {
      "section": "vc-declaration",
      "question": "What does <code>let x;</code> default to?",
      "options": [
        "null",
        "<code>undefined</code>",
        "0",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "If you declare a variable using 'let' or 'var' without assigning it a value, TypeScript automatically gives it the default value of 'undefined' until you give it a real value.<code>let a;\nconsole.log(a); // undefined</code>"
    },
    {
      "section": "vc-hoisting",
      "question": "What is hoisting?",
      "options": [
        "<b>Moving declarations to top</b>",
        "Moving values",
        "Importing modules",
        "Compiling TS"
      ],
      "answerIndex": 0,
      "explanation": "Hoisting is JavaScript's default behavior of secretly moving variable and function declarations to the very top of their scope before the code executes.<code>console.log(x); // undefined\nvar x = 5;</code>"
    },
    {
      "section": "vc-hoisting",
      "question": "What does <code>typeof x</code> return before <code>let x = 5</code>?",
      "options": [
        "undefined",
        "<b>ReferenceError</b>",
        "number",
        "null"
      ],
      "answerIndex": 1,
      "explanation": "Because 'let' is in the Temporal Dead Zone (TDZ) before it is initialized, trying to check its type or access it before its declaration will immediately throw a ReferenceError.<code>typeof x; // ReferenceError\nlet x = 5;</code>"
    },
    {
      "section": "vc-redeclaration",
      "question": "What output?<br><code>var a = 1; var a = 2; console.log(a)</code>",
      "options": [
        "1",
        "<b>2</b>",
        "Error",
        "undefined"
      ],
      "answerIndex": 1,
      "explanation": "The code will output '2'. Because 'var' doesn't block redeclarations, the second 'var a = 2' simply overwrites the first one without showing any warnings.<code>var a = 1;\nvar a = 2;\nconsole.log(a); // 2</code>"
    },
    {
      "section": "vc-scope",
      "question": "Which has block scope?",
      "options": [
        "var",
        "<code>let & const</code>",
        "only const",
        "none"
      ],
      "answerIndex": 1,
      "explanation": "Both 'let' and 'const' have block scope. This means if they are created inside an if-statement or a for-loop (inside {} curly braces), they cannot be accessed outside of those braces.<code>if (true) { let x = 1; }\nconsole.log(x); // Error</code>"
    },
    {
      "section": "vc-hoisting",
      "question": "What output?<br><code>console.log(x); var x = 5;</code>",
      "options": [
        "5",
        "Error",
        "<code>undefined</code>",
        "null"
      ],
      "answerIndex": 2,
      "explanation": "It outputs 'undefined'. The declaration 'var x' is hoisted to the top, but the assignment '= 5' stays where it is. So at the time of logging, x exists but has no value yet.<code>console.log(x); // undefined\nvar x = 5;</code>"
    },
    {
      "section": "vc-keywords",
      "question": "Which keyword should you use by default?",
      "options": [
        "var",
        "let",
        "<code>const</code>",
        "any"
      ],
      "answerIndex": 2,
      "explanation": "Always use 'const' by default to prevent accidental changes to your variables. Only switch to 'let' when you know the value absolutely needs to change later (like a counter).<code>const PI = 3.14;\nlet score = 0;</code>"
    },
    {
      "section": "vc-comments",
      "question": "Single-line comment syntax?",
      "options": [
        "/* */",
        "#",
        "<code>//</code>",
        "--"
      ],
      "answerIndex": 2,
      "explanation": "In TypeScript and JavaScript, single-line comments are written using two forward slashes (//). Anything after these slashes on the same line will be ignored by the compiler.<code>// This code is ignored\nlet x = 5;</code>"
    },
    {
      "section": "vc-intro",
      "question": "TypeScript variables store?",
      "options": [
        "Only strings",
        "<b>Data values of specific types</b>",
        "Functions only",
        "HTML elements"
      ],
      "answerIndex": 1,
      "explanation": "Variables act as labeled containers for storing data values. In TypeScript, these containers are strictly bound to specific types (like numbers, strings, or booleans) to ensure type safety.<code>let age: number = 25;</code>"
    },
    {
      "section": "vc-syntax",
      "question": "Variable declaration syntax order?",
      "options": [
        "name type = value",
        "<b>keyword name: type = value</b>",
        "type name value",
        "value = keyword name"
      ],
      "answerIndex": 1,
      "explanation": "The correct order is: the keyword ('let' or 'const'), the variable name, a colon followed by the data type, an equals sign, and finally the value.<code>let name: string = 'Alice';</code>"
    },
    {
      "section": "vc-when",
      "question": "When to use <code>let</code> over <code>const</code>?",
      "options": [
        "Always",
        "<b>When the value needs to change</b>",
        "Never",
        "For objects only"
      ],
      "answerIndex": 1,
      "explanation": "You should only use 'let' when you expect the variable's value to be updated or reassigned later in the program, such as a user's score in a game or a loop counter.<code>let score = 0;\nscore = 10; // Only 'let' allows this</code>"
    },
    {
      "section": "vc-mistakes",
      "question": "Common mistake: using var in modern TS?",
      "options": [
        "It's fine",
        "<b>Avoid  --  use let/const instead</b>",
        "Required",
        "Faster"
      ],
      "answerIndex": 1,
      "explanation": "Because 'var' does not respect block scope and allows silent redeclarations, it leads to confusing bugs. Modern TypeScript and JavaScript strongly encourage completely avoiding 'var' and using 'let' and 'const' instead.<code>// Avoid var\nlet active = true;</code>"
    }
  ],
  "data-types.html": [
    {
      "section": "dt-null",
      "question": "<code>typeof null</code> returns?",
      "options": [
        "null",
        "undefined",
        "<code>'object'</code>",
        "NaN"
      ],
      "answerIndex": 2,
      "explanation": "Due to a historic bug in JavaScript, 'typeof null' incorrectly returns 'object' instead of 'null'. Because of this, you should always check for null using strict equality (=== null).<code>typeof null // 'object'</code>"
    },
    {
      "section": "dt-unknown",
      "question": "Which prevents operations without checking first?",
      "options": [
        "any",
        "<code>unknown</code>",
        "never",
        "void"
      ],
      "answerIndex": 1,
      "explanation": "The 'unknown' type is the safe version of 'any'. It allows any value to be assigned, but strictly requires you to 'narrow' or check the type before you can perform any operations on it.<code>let x: unknown = 5;\nif (typeof x === 'number') { x + 1; }</code>"
    },
    {
      "section": "dt-null",
      "question": "Default type of uninitialized variable?",
      "options": [
        "null",
        "<code>undefined</code>",
        "any",
        "void"
      ],
      "answerIndex": 1,
      "explanation": "When a variable is declared but not assigned a value, JavaScript automatically assigns it the 'undefined' primitive value. 'null' represents an intentionally missing value, whereas 'undefined' means 'not set yet'.<code>let x;\nconsole.log(x); // undefined</code>"
    },
    {
      "section": "dt-never",
      "question": "Which type means 'this can never happen'?",
      "options": [
        "void",
        "null",
        "undefined",
        "<code>never</code>"
      ],
      "answerIndex": 3,
      "explanation": "The 'never' type is used to represent states or return values that should never occur. For example, a function that always throws an error or has an infinite loop returns 'never'.<code>function fail(): never { throw new Error(); }</code>"
    },
    {
      "section": "dt-union",
      "question": "How to create a union type?",
      "options": [
        "<code>A & B</code>",
        "<code>A + B</code>",
        "<code>A | B</code>",
        "<code>A : B</code>"
      ],
      "answerIndex": 2,
      "explanation": "A union type is created using the pipe (|) operator. It tells TypeScript that a variable is allowed to hold values of multiple specific types.<code>let id: string | number = 'A1';</code>"
    },
    {
      "section": "dt-safety",
      "question": "What does type inference mean?",
      "options": [
        "<b>TS guesses the type automatically</b>",
        "You must declare all types",
        "Runtime checking",
        "No types allowed"
      ],
      "answerIndex": 0,
      "explanation": "Type inference occurs when you don't explicitly write the type. TypeScript acts like a detective and automatically 'infers' or guesses the type based on the value you assigned to the variable.<code>let x = 5; // TS infers 'number' automatically</code>"
    },
    {
      "section": "dt-bigint",
      "question": "What is <code>bigint</code> used for?",
      "options": [
        "Decimals",
        "<b>Very large integers</b>",
        "Binary data",
        "Objects"
      ],
      "answerIndex": 1,
      "explanation": "The standard 'number' type in JavaScript loses precision for astronomically large numbers. 'bigint' was introduced to safely store and perform math on extremely large integers without losing accuracy.<code>const big: bigint = 9007199254740991n;</code>"
    },
    {
      "section": "dt-void",
      "question": "What does <code>void</code> mean as return type?",
      "options": [
        "Returns null",
        "<b>Returns nothing</b>",
        "Throws error",
        "Returns undefined"
      ],
      "answerIndex": 1,
      "explanation": "When a function has a return type of 'void', it means the function performs an action (like logging to the console or updating the UI) but does not 'return' any value back to the caller.<code>function log(): void { console.log('Hi'); }</code>"
    },
    {
      "section": "dt-any",
      "question": "What output?<br><code>let x: any = 'hello'; x = 42; console.log(typeof x)</code>",
      "options": [
        "string",
        "<code>'number'</code>",
        "any",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "The output will be 'number'. Even though 'x' was typed as 'any', the 'typeof' operator always checks the runtime JavaScript type of the variable's current value, which is now the number 42.<code>let x: any = 'hi'; x = 42;\ntypeof x; // 'number'</code>"
    },
    {
      "section": "dt-symbol",
      "question": "<code>symbol</code> values are always?",
      "options": [
        "Strings",
        "Numbers",
        "<b>Unique</b>",
        "Boolean"
      ],
      "answerIndex": 2,
      "explanation": "Symbols are unique identifiers. Every time you call Symbol(), it creates a completely unique value. Even if two symbols share the same description string, they are never equal to each other.<code>Symbol('id') === Symbol('id'); // false</code>"
    },
    {
      "section": "dt-number",
      "question": "<code>typeof 3.14</code> returns?",
      "options": [
        "float",
        "decimal",
        "<code>'number'</code>",
        "double"
      ],
      "answerIndex": 2,
      "explanation": "Unlike languages like Java or C++ that have separate types for integers and decimals (like float or double), JavaScript groups all numeric values under a single primitive type called 'number'.<code>typeof 3.14 // 'number'\ntypeof 42 // 'number'</code>"
    },
    {
      "section": "dt-string",
      "question": "<code>typeof 'hello'</code> returns?",
      "options": [
        "text",
        "<code>'string'</code>",
        "String",
        "char"
      ],
      "answerIndex": 1,
      "explanation": "Any text wrapped in single quotes, double quotes, or backticks is evaluated as a string. The 'typeof' operator correctly identifies text data with the 'string' primitive type label.<code>typeof 'hello' // 'string'</code>"
    },
    {
      "section": "dt-boolean",
      "question": "<code>typeof true</code> returns?",
      "options": [
        "<code>'boolean'</code>",
        "'true'",
        "1",
        "'bool'"
      ],
      "answerIndex": 0,
      "explanation": "The values 'true' and 'false' belong exclusively to the 'boolean' data type. It is the fundamental type used for logic, if-statements, and conditional branching.<code>let isDone: boolean = true;\ntypeof isDone // 'boolean'</code>"
    },
    {
      "section": "dt-categories",
      "question": "TypeScript has how many type categories?",
      "options": [
        "2",
        "<b>3 (Primitive, Special, Composite)</b>",
        "4",
        "5"
      ],
      "answerIndex": 1,
      "explanation": "TypeScript types can be grouped into three main buckets: Primitives (like string, number), TypeScript Specials (like any, unknown, void), and Composites/Non-Primitives (like Objects, Arrays, Tuples).<code>// Primitive: number\n// Special: any\n// Composite: Array</code>"
    },
    {
      "section": "dt-dynamic",
      "question": "JavaScript is dynamically or statically typed?",
      "options": [
        "Static",
        "<b>Dynamically typed</b>",
        "Both",
        "Neither"
      ],
      "answerIndex": 1,
      "explanation": "JavaScript is dynamically typed, meaning a variable's type can change at runtime. TypeScript sits on top of JS to provide static typing, locking a variable's type down during the compile phase.<code>let x = 5; x = 'hi'; // JS allows this\n// TS catches it as an Error</code>"
    },
    {
      "section": "dt-terms",
      "question": "Type annotation means?",
      "options": [
        "Guessing types",
        "<b>Explicitly writing the type</b>",
        "Removing types",
        "Auto typing"
      ],
      "answerIndex": 1,
      "explanation": "Type annotation is when you, the developer, explicitly define the type using a colon syntax (e.g., : string). It tells the TypeScript compiler exactly what data should be allowed.<code>let name: string = 'Jo'; // The ': string' is the annotation</code>"
    },
    {
      "section": "dt-mistakes",
      "question": "Common mistake: using <code>any</code> everywhere?",
      "options": [
        "Good practice",
        "<b>Defeats TypeScript's purpose</b>",
        "Required",
        "Faster"
      ],
      "answerIndex": 1,
      "explanation": "Using the 'any' type turns off the TypeScript compiler for that variable, removing autocomplete features and type checking. Overusing 'any' makes your TypeScript code just as risky as raw JavaScript.<code>let data: any = 5;\ndata.toUpperCase(); // No TS error, but crashes at runtime!</code>"
    }
  ],
  "strings.html": [
    {
      "section": "str-immutable",
      "question": "Are strings mutable or immutable?",
      "options": [
        "Mutable",
        "<b>Immutable</b>",
        "Depends on const/let",
        "Only with methods"
      ],
      "answerIndex": 1,
      "explanation": "Strings are immutable in JavaScript and TypeScript. This means once a string is created, you cannot change its individual characters. String methods like replace() or toUpperCase() will always return a brand new string rather than modifying the original one.<code>let s = 'hi';\ns[0] = 'H'; // Fails silently!\nconsole.log(s); // 'hi'</code>"
    },
    {
      "section": "str-split",
      "question": "What does <code>'hello'.split('')</code> return?",
      "options": [
        "'hello'",
        "<code>['h','e','l','l','o']</code>",
        "5",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "The split() method breaks a string into an array of smaller strings. Passing an empty string ('') as the separator splits the string at every single character, turning 'hello' into an array of 5 individual letters.<code>'hello'.split('');\n// Returns: ['h', 'e', 'l', 'l', 'o']</code>"
    },
    {
      "section": "str-trim",
      "question": "What does <code>trim()</code> remove?",
      "options": [
        "All spaces",
        "<b>Whitespace from both ends</b>",
        "First space",
        "Special chars"
      ],
      "answerIndex": 1,
      "explanation": "The trim() method removes whitespace (spaces, tabs, and newlines) from BOTH ends of a string. It is incredibly useful for cleaning up user input from forms where users might accidentally type extra spaces.<code>let input = '   hello world   ';\ninput.trim(); // 'hello world'</code>"
    },
    {
      "section": "str-includes",
      "question": "<code>'TypeScript'.includes('Script')</code> returns?",
      "options": [
        "'Script'",
        "0",
        "<code>true</code>",
        "5"
      ],
      "answerIndex": 2,
      "explanation": "The includes() method searches a string to see if it contains a specific substring. It returns a boolean (true if found, false if not). It is case-sensitive.<code>'TypeScript'.includes('Script'); // true\n'TypeScript'.includes('script'); // false</code>"
    },
    {
      "section": "str-backtick",
      "question": "Template literals use which quotes?",
      "options": [
        "Single '",
        "Double \"",
        "<b>Backticks `</b>",
        "Any"
      ],
      "answerIndex": 2,
      "explanation": "Template literals are created using backticks (`). They allow you to easily inject variables and expressions directly into the string using the ${variable} syntax, which is much cleaner than using the + operator.<code>let user = 'John';\nlet msg = `Hi ${user}!`; // 'Hi John!'</code>"
    },
    {
      "section": "str-substring",
      "question": "<code>'hello'.substring(1,4)</code> returns?",
      "options": [
        "'hel'",
        "<code>'ell'</code>",
        "'ello'",
        "'hell'"
      ],
      "answerIndex": 1,
      "explanation": "The substring(startIndex, endIndex) method extracts characters between two indices. It includes the character at the startIndex (1, which is 'e') but EXCLUDES the character at the endIndex (4, which is 'o').<code>'hello'.substring(1, 4); // 'ell'</code>"
    },
    {
      "section": "str-replace",
      "question": "Does <code>replace()</code> modify the original string?",
      "options": [
        "Yes",
        "<b>No (immutable)</b>",
        "Only with regex",
        "Only first match"
      ],
      "answerIndex": 1,
      "explanation": "No, string methods never modify the original string because strings are immutable. The replace() method creates and returns a completely new string with the replacements applied, leaving the original string untouched.<code>let s = 'cat';\nlet newS = s.replace('c', 'b');\nconsole.log(s); // still 'cat'</code>"
    },
    {
      "section": "str-charat",
      "question": "<code>'hello'.charAt(0)</code> returns?",
      "options": [
        "'hello'",
        "0",
        "<code>'h'</code>",
        "['h']"
      ],
      "answerIndex": 2,
      "explanation": "The charAt(index) method returns the single character located at the specified index. Since JavaScript strings are 0-indexed, index 0 is the very first character of the string.<code>'hello'.charAt(0); // 'h'\n'hello'[0]; // 'h' (alternative)</code>"
    },
    {
      "section": "str-split",
      "question": "<code>'A,B,C'.split(',')</code> returns?",
      "options": [
        "'ABC'",
        "<code>['A','B','C']</code>",
        "3",
        "'A B C'"
      ],
      "answerIndex": 1,
      "explanation": "When you pass a comma (',') to split(), it cuts the string wherever it finds a comma and puts the pieces into an array. This is extremely useful for parsing CSV (Comma Separated Values) data.<code>'A,B,C'.split(',');\n// Returns: ['A', 'B', 'C']</code>"
    },
    {
      "section": "str-trim",
      "question": "<code>'  hi  '.trimStart()</code> returns?",
      "options": [
        "'hi'",
        "<code>'hi  '</code>",
        "'  hi'",
        "'hi'"
      ],
      "answerIndex": 1,
      "explanation": "Unlike trim() which removes whitespace from both sides, trimStart() (also known as trimLeft()) only removes the whitespace from the very beginning of the string, leaving any trailing spaces intact.<code>let s = '  hi  ';\ns.trimStart(); // 'hi  '</code>"
    },
    {
      "section": "str-case",
      "question": "<code>'Hello'.toLowerCase()</code> returns?",
      "options": [
        "'Hello'",
        "<code>'hello'</code>",
        "'HELLO'",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "The toLowerCase() method converts all uppercase letters in the string to lowercase. This is frequently used when comparing user input (like usernames or email addresses) to make the comparison case-insensitive.<code>'HeLLo'.toLowerCase(); // 'hello'</code>"
    },
    {
      "section": "str-startend",
      "question": "<code>'TypeScript'.startsWith('Type')</code> returns?",
      "options": [
        "'Type'",
        "0",
        "<code>true</code>",
        "4"
      ],
      "answerIndex": 2,
      "explanation": "The startsWith() method checks if a string begins with the exact sequence of characters you provide. It returns true if it matches and false if it doesn't. It is case-sensitive.<code>'TypeScript'.startsWith('Type'); // true\n'TypeScript'.startsWith('type'); // false</code>"
    },
    {
      "section": "str-concat",
      "question": "<code>'Hi'.concat(' ', 'World')</code> returns?",
      "options": [
        "'HiWorld'",
        "<code>'Hi World'</code>",
        "['Hi','World']",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "The concat() method joins two or more strings together to form a new string. However, in modern JavaScript, using the plus operator (+) or template literals (`) is much more common and easier to read.<code>'Hi'.concat(' ', 'World'); // 'Hi World'</code>"
    },
    {
      "section": "str-length",
      "question": "<code>'abc'.length</code> returns?",
      "options": [
        "'abc'",
        "2",
        "<code>3</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The 'length' property returns the total number of characters in the string. Notice that it is a property (no parentheses) and not a method (like toLowerCase()).<code>let s = 'abc';\nconsole.log(s.length); // 3</code>"
    },
    {
      "section": "str-multiline",
      "question": "Multi-line strings require which quotes?",
      "options": [
        "Single '",
        "Double",
        "<b>Backticks `</b>",
        "Any"
      ],
      "answerIndex": 2,
      "explanation": "Standard single or double quotes will throw an error if you press 'Enter' to start a new line. Template literals (using backticks ` `) natively support multi-line strings without needing any special escape characters.<code>let msg = `Line 1\nLine 2`; // Works perfectly!</code>"
    },
    {
      "section": "str-what",
      "question": "Strings in TypeScript are?",
      "options": [
        "Mutable",
        "<b>Immutable sequences of characters</b>",
        "Arrays",
        "Numbers"
      ],
      "answerIndex": 1,
      "explanation": "Strings are simply sequences of text characters. In JavaScript and TypeScript, they are primitive data types and are strictly immutable (their content cannot be altered after creation).<code>let s = 'TypeScript'; // An immutable text sequence</code>"
    },
    {
      "section": "str-mistakes",
      "question": "Common mistake: forgetting strings are immutable?",
      "options": [
        "Strings are mutable",
        "<b>str[0]='X' silently fails</b>",
        "Causes error",
        "Works fine"
      ],
      "answerIndex": 1,
      "explanation": "Many beginners try to change a single letter of a string using bracket notation (like s[0] = 'X'). This doesn't throw an error, but it completely fails silently. The string will remain unchanged!<code>let name = 'Bob';\nname[0] = 'R';\nconsole.log(name); // Still 'Bob'!</code>"
    }
  ],
  "arrays-tuples.html": [
    {
      "section": "at-approach1",
      "question": "Correct array type annotation?",
      "options": [
        "<code>number[]</code>",
        "array&lt;number&gt;",
        "Number[]",
        "number()"
      ],
      "answerIndex": 0,
      "explanation": "The standard and most common way to declare an array in TypeScript is by adding empty square brackets '[]' after the data type. This explicitly tells TypeScript that the variable will hold a list of that specific type.<code>let ages: number[] = [25, 30, 42];</code>"
    },
    {
      "section": "at-tuple",
      "question": "How is a tuple different from an array?",
      "options": [
        "Faster",
        "<b>Fixed length + types per position</b>",
        "Read-only",
        "No methods"
      ],
      "answerIndex": 1,
      "explanation": "A tuple is a strictly typed array where you define the exact number of elements and the specific type for each position. It's perfect for fixed data structures like coordinates or key-value pairs.<code>let point: [number, number] = [10, 20];</code>"
    },
    {
      "section": "at-forin",
      "question": "Which loop gives you the INDEX?",
      "options": [
        "for...of",
        "forEach",
        "<code>for...in</code>",
        "while"
      ],
      "answerIndex": 2,
      "explanation": "The 'for...in' loop is designed to iterate over the keys or indexes of an object or array, returning strings ('0', '1', '2') instead of the actual items. It's generally avoided for arrays.<code>for (let i in ['A', 'B']) {\n  console.log(i); // '0', '1'\n}</code>"
    },
    {
      "section": "at-forof",
      "question": "Which loop gives you the VALUE directly?",
      "options": [
        "for...in",
        "<code>for...of</code>",
        "classic for",
        "while"
      ],
      "answerIndex": 1,
      "explanation": "The 'for...of' loop is the modern and preferred way to loop over arrays. It directly iterates through the actual values of the array.<code>for (let val of ['A', 'B']) {\n  console.log(val); // 'A', 'B'\n}</code>"
    },
    {
      "section": "at-tuple",
      "question": "What output?<br><code>let t: [string, number] = ['hi', 5]; console.log(t[0])</code>",
      "options": [
        "5",
        "<code>'hi'</code>",
        "['hi',5]",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "A tuple is a strictly typed array where you define the exact number of elements and the specific type for each position. It's perfect for fixed data structures like coordinates or key-value pairs.<code>let point: [number, number] = [10, 20];</code>"
    },
    {
      "section": "at-tuple",
      "question": "Can tuples have different types at each position?",
      "options": [
        "<b>Yes</b>",
        "No",
        "Only 2 types",
        "Only primitives"
      ],
      "answerIndex": 0,
      "explanation": "A tuple is a strictly typed array where you define the exact number of elements and the specific type for each position. It's perfect for fixed data structures like coordinates or key-value pairs.<code>let point: [number, number] = [10, 20];</code>"
    },
    {
      "section": "at-concepts",
      "question": "What does <code>readonly</code> do to an array?",
      "options": [
        "Makes it empty",
        "<b>Prevents push/pop/mutation</b>",
        "Makes it private",
        "Freezes values"
      ],
      "answerIndex": 1,
      "explanation": "Using 'const' only prevents reassigning the whole array, but allows pushing new items. To completely lock the array and prevent methods like push() or pop(), use 'readonly Type[]'.<code>let safe: readonly number[] = [1];\nsafe.push(2); // TS Error!</code>"
    },
    {
      "section": "at-approach1",
      "question": "<code>let arr: number[] = []; arr.push('hi')</code>  --  what happens?",
      "options": [
        "Works fine",
        "<b>Compile error</b>",
        "Runtime error",
        "Converts to string[]"
      ],
      "answerIndex": 1,
      "explanation": "The standard and most common way to declare an array in TypeScript is by adding empty square brackets '[]' after the data type. This explicitly tells TypeScript that the variable will hold a list of that specific type.<code>let ages: number[] = [25, 30, 42];</code>"
    },
    {
      "section": "at-tuple",
      "question": "How to type an array of tuples?",
      "options": [
        "<code>[string,number][]</code>",
        "tuple[]",
        "Array(string,number)",
        "[string|number]"
      ],
      "answerIndex": 0,
      "explanation": "A 2D array of tuples is declared by wrapping the tuple type in array brackets: '[string, number][]'. This is exactly the format used by Object.entries().<code>let pairs: [string, number][] = [['A', 1]];</code>"
    },
    {
      "section": "at-concepts",
      "question": "What is the index of the first element?",
      "options": [
        "1",
        "<code>0</code>",
        "-1",
        "depends"
      ],
      "answerIndex": 1,
      "explanation": "Because array indexing is zero-based, the very first element of an array is always accessed using index 0.<code>let arr = ['first', 'second'];\nconsole.log(arr[0]); // 'first'</code>"
    },
    {
      "section": "at-approach2",
      "question": "<code>Array&lt;number&gt;</code> is called?",
      "options": [
        "Bracket syntax",
        "<b>Generic array type</b>",
        "Tuple",
        "Object array"
      ],
      "answerIndex": 1,
      "explanation": "The 'Array<T>' syntax is known as the Generic array syntax. It clearly states that Array is a generic class that holds elements of type T.<code>let list: Array&lt;number&gt; = [1, 2];</code>"
    },
    {
      "section": "at-forloop",
      "question": "Classic for loop uses?",
      "options": [
        "for...of",
        "for...in",
        "<b>for(init;cond;update)</b>",
        "forEach"
      ],
      "answerIndex": 2,
      "explanation": "A standard 'for' loop uses a counter variable (like let i = 0), a condition (i < arr.length), and an incrementor (i++). It's the most flexible but most verbose loop.<code>for(let i = 0; i < arr.length; i++) { }</code>"
    },
    {
      "section": "at-pass",
      "question": "Arrays passed to functions are passed by?",
      "options": [
        "Value",
        "Copy",
        "<b>Reference</b>",
        "Clone"
      ],
      "answerIndex": 2,
      "explanation": "Arrays in JS/TS are passed by reference. When you pass an array into a function and modify it inside, the original array outside the function is also changed!<code>function add(a: number[]) { a.push(1); }</code>"
    },
    {
      "section": "at-return",
      "question": "Can a function return an array?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only tuples",
        "Only readonly"
      ],
      "answerIndex": 1,
      "explanation": "When a function returns an array, you annotate its return type exactly like a variable annotation: 'function name(): type[]'.<code>function getScores(): number[] { return [1, 2]; }</code>"
    },
    {
      "section": "at-declaration",
      "question": "<code>let arr: string[] = []</code> creates?",
      "options": [
        "Null array",
        "<b>Empty string array</b>",
        "Any array",
        "Error"
      ],
      "answerIndex": 1,
      "explanation": "If you initialize an empty array without an explicit type annotation, TypeScript cannot guess what you plan to put in it later, so it defaults to 'any[]'. Always annotate empty arrays!<code>let arr: string[] = []; // Good practice!</code>"
    },
    {
      "section": "at-tupleloop",
      "question": "Can you use for...of on a tuple?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only for...in",
        "Only classic for"
      ],
      "answerIndex": 1,
      "explanation": "The 'for...of' loop is incredibly clean and readable when you only need to access the values of the array, not the index.<code>let nums = [1, 2];\nfor(let n of nums) { console.log(n); }</code>"
    },
    {
      "section": "at-intro",
      "question": "An array holds?",
      "options": [
        "One value",
        "<b>Multiple values of the same type</b>",
        "Only strings",
        "Only numbers"
      ],
      "answerIndex": 1,
      "explanation": "You can make elements at the end of a tuple optional by adding a question mark (?) after their type. This allows the tuple to be valid even if those elements are omitted.<code>let record: [string, number?] = ['Alice'];</code>"
    },
    {
      "section": "at-loops",
      "question": "How many ways to loop an array?",
      "options": [
        "1",
        "2",
        "<b>4+ (for, for...in, for...of, forEach)</b>",
        "Only forEach"
      ],
      "answerIndex": 2,
      "explanation": "There are four common ways to loop an array: a standard 'for' loop, a 'for...of' loop, a 'for...in' loop, and the '.forEach()' method.<code>arr.forEach(x => console.log(x));</code>"
    },
    {
      "section": "at-arrfn",
      "question": "Arrow function in forEach: <code>arr.forEach(x => ...)</code>  --  x is?",
      "options": [
        "Index",
        "<b>Each element</b>",
        "The array",
        "undefined"
      ],
      "answerIndex": 1,
      "explanation": "The '.forEach()' method is a functional way to loop through an array. It takes a callback function and executes it once for every element in the array.<code>arr.forEach(item => console.log(item));</code>"
    },
    {
      "section": "at-arraytuple",
      "question": "Array vs Tuple difference?",
      "options": [
        "Same thing",
        "<b>Tuple has fixed length and types per position</b>",
        "Array is typed",
        "Tuple is longer"
      ],
      "answerIndex": 1,
      "explanation": "Arrays are designed for dynamic lists where the length can grow and shrink. Tuples are designed for strict, fixed-length structures where every specific index has a known type.<code>let arr: string[] = ['A', 'B'];\nlet tup: [string, number] = ['ID', 101];</code>"
    },
    {
      "section": "at-edgecases",
      "question": "Accessing out-of-bounds index returns?",
      "options": [
        "Error",
        "null",
        "0",
        "<code>undefined</code>"
      ],
      "answerIndex": 3,
      "explanation": "Surprisingly, array mutation methods like push() bypass the compiler checks completely on Tuples. While you can't assign extra elements directly, push() is allowed.<code>let t: [string] = ['A'];\nt.push('B'); // Compiles without error!</code>"
    }
  ],
  "array-methods.html": [
    {
      "section": "am-shift",
      "question": "Which removes the FIRST element?",
      "options": [
        "pop()",
        "<code>shift()</code>",
        "unshift()",
        "splice(0)"
      ],
      "answerIndex": 1,
      "explanation": "The shift() method removes the very first element from an array and returns that removed element. This method mutates the original array, shifting all remaining elements down by one index.<code>let arr = [1, 2, 3];\nlet first = arr.shift(); // first is 1, arr is now [2, 3]</code>"
    },
    {
      "section": "am-slice",
      "question": "Does <code>slice()</code> modify the original?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Only with 2 args",
        "Depends"
      ],
      "answerIndex": 1,
      "explanation": "The slice(start, end) method extracts a section of an array and returns it as a brand new array. It does NOT mutate the original array. The 'end' index is exclusive.<code>let arr = [10, 20, 30, 40];\nlet sub = arr.slice(1, 3); // [20, 30]</code>"
    },
    {
      "section": "am-push",
      "question": "Which adds to the END?",
      "options": [
        "unshift()",
        "concat()",
        "<code>push()</code>",
        "splice()"
      ],
      "answerIndex": 2,
      "explanation": "The push() method adds one or more elements to the very end of an array and returns the new length of the array. It mutates the original array directly.<code>let arr = ['A', 'B'];\narr.push('C'); // arr is now ['A', 'B', 'C']</code>"
    },
    {
      "section": "am-splice",
      "question": "Does <code>splice()</code> modify the original array?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Returns new array",
        "Only removes"
      ],
      "answerIndex": 1,
      "explanation": "The splice() method is the universal array mutator. It can add, remove, or replace elements anywhere in the array. It directly changes the original array and returns an array of the removed items.<code>let arr = ['A', 'B', 'C'];\narr.splice(1, 1); // Removes 'B'. arr is ['A', 'C']</code>"
    },
    {
      "section": "am-concat",
      "question": "<code>[1,2].concat([3,4])</code> returns?",
      "options": [
        "[1,2,3,4]",
        "[[1,2],[3,4]]",
        "<code>[1,2,3,4]</code>",
        "6"
      ],
      "answerIndex": 2,
      "explanation": "The concat() method merges two or more arrays together. It does not change the existing arrays, but instead creates and returns a completely new array. Modern JS often uses the spread operator (...) instead.<code>let a = [1], b = [2];\nlet c = a.concat(b); // [1, 2]</code>"
    },
    {
      "section": "am-indexof",
      "question": "<code>[1,2,3].indexOf(5)</code> returns?",
      "options": [
        "0",
        "null",
        "undefined",
        "<code>-1</code>"
      ],
      "answerIndex": 3,
      "explanation": "The indexOf() method searches the array for a specific element and returns its first index position. If the element is nowhere to be found, it returns -1.<code>let arr = [10, 20, 30];\narr.indexOf(30); // 2\narr.indexOf(99); // -1</code>"
    },
    {
      "section": "am-includes",
      "question": "<code>[1,2,3].includes(2)</code> returns?",
      "options": [
        "1",
        "2",
        "<code>true</code>",
        "[2]"
      ],
      "answerIndex": 2,
      "explanation": "The includes() method checks if an array contains a specific value, returning true or false. It is much cleaner and easier to read than checking if indexOf() > -1.<code>let arr = ['apple', 'banana'];\narr.includes('apple'); // true</code>"
    },
    {
      "section": "am-slice",
      "question": "<code>[1,2,3].slice(1,2)</code> returns?",
      "options": [
        "[1,2]",
        "<code>[2]</code>",
        "[2,3]",
        "[1]"
      ],
      "answerIndex": 1,
      "explanation": "Slice takes two arguments: the start index (inclusive) and the end index (exclusive). It creates a shallow copy of that portion into a new array.<code>let arr = [1, 2, 3];\nlet part = arr.slice(1, 2); // [2]</code>"
    },
    {
      "section": "am-unshift",
      "question": "What does <code>unshift()</code> do?",
      "options": [
        "Removes first",
        "Removes last",
        "<b>Adds to beginning</b>",
        "Adds to end"
      ],
      "answerIndex": 2,
      "explanation": "The unshift() method adds one or more elements to the very beginning of an array and returns the new length. It mutates the array by shifting all existing elements to higher indexes.<code>let arr = [2, 3];\narr.unshift(1); // arr is now [1, 2, 3]</code>"
    },
    {
      "section": "am-splice",
      "question": "<code>[1,2,3].splice(1,1)</code>  --  what's left in array?",
      "options": [
        "[2]",
        "[1,2,3]",
        "<code>[1,3]</code>",
        "[2,3]"
      ],
      "answerIndex": 2,
      "explanation": "Splice can replace elements by passing new items as the third argument and beyond. 'splice(1, 1, 'x')' means: go to index 1, remove 1 item, and insert 'x' in its place.<code>let arr = ['a', 'b', 'c'];\narr.splice(1, 1, 'x'); // arr is ['a', 'x', 'c']</code>"
    },
    {
      "section": "am-pop",
      "question": "<code>[1,2,3].pop()</code> returns?",
      "options": [
        "[1,2]",
        "1",
        "<code>3</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The pop() method removes the very last element from an array and returns that element. This mutates the original array, shrinking its length by 1.<code>let arr = [10, 20, 30];\nlet last = arr.pop(); // last is 30, arr is [10, 20]</code>"
    },
    {
      "section": "am-tostring",
      "question": "<code>[1,2,3].toString()</code> returns?",
      "options": [
        "[1,2,3]",
        "<code>'1,2,3'</code>",
        "123",
        "['1','2','3']"
      ],
      "answerIndex": 1,
      "explanation": "The toString() method converts an array into a single string, with each element separated by a comma. It does not modify the original array.<code>let arr = [1, 2, 3];\narr.toString(); // '1,2,3'</code>"
    },
    {
      "section": "am-intro",
      "question": "Array methods are?",
      "options": [
        "Standalone functions",
        "<b>Built-in functions on arrays</b>",
        "Custom functions",
        "Operators"
      ],
      "answerIndex": 1,
      "explanation": "Arrays come with a rich set of built-in methods. Some mutate the array directly (push, pop, shift, unshift, splice, sort, reverse), while others return new data without altering the original (slice, concat, map, filter).<code>// Mutator vs Non-mutator awareness is crucial!</code>"
    },
    {
      "section": "am-length",
      "question": "<code>[5,10,15].length</code> returns?",
      "options": [
        "15",
        "2",
        "<code>3</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The 'length' property returns the total number of elements currently in the array. It is a property, not a method, so you don't use parentheses to call it.<code>let arr = [5, 10, 15];\nconsole.log(arr.length); // 3</code>"
    }
  ],
  "operators.html": [
    {
      "section": "op-equality",
      "question": "<code>===</code> checks what that <code>==</code> doesn't?",
      "options": [
        "Value",
        "<b>Type</b>",
        "Reference",
        "Scope"
      ],
      "answerIndex": 1,
      "explanation": "The strict equality operator (===) checks both value AND type. Because the number 5 and the string '5' are different data types, it correctly returns false. Always use === instead of ==.<code>5 === '5'; // false\n5 === 5;   // true</code>"
    },
    {
      "section": "op-increment",
      "question": "<code>++x</code> returns?",
      "options": [
        "Original value",
        "<b>Incremented value</b>",
        "undefined",
        "NaN"
      ],
      "answerIndex": 1,
      "explanation": "The pre-increment operator (++x) adds 1 to the variable BEFORE the statement is evaluated, so it returns the new incremented value immediately.<code>let x = 5;\nconsole.log(++x); // 6</code>"
    },
    {
      "section": "op-logical",
      "question": "<code>false || 'hello'</code> returns?",
      "options": [
        "false",
        "true",
        "<code>'hello'</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The logical OR (||) operator returns the first 'truthy' value it finds. Because 'false' is falsy, it moves to the right side and returns 'hello'. This is often used to provide default values.<code>let name = null || 'Guest'; // 'Guest'</code>"
    },
    {
      "section": "op-assignment",
      "question": "<code>x += 5</code> is shorthand for?",
      "options": [
        "x = 5",
        "<code>x = x + 5</code>",
        "x == 5",
        "x === 5"
      ],
      "answerIndex": 1,
      "explanation": "The addition assignment operator (+=) is a shorthand for adding a value to a variable and immediately reassigning it. 'x += 5' is exactly the same as 'x = x + 5'.<code>let x = 3;\nx += 5; // x becomes 8</code>"
    },
    {
      "section": "op-logical",
      "question": "<code>!true</code> evaluates to?",
      "options": [
        "true",
        "<code>false</code>",
        "null",
        "0"
      ],
      "answerIndex": 1,
      "explanation": "The logical NOT operator (!) flips a boolean value. Using a double NOT (!!) is a common trick to explicitly convert any value into a strict boolean (true or false).<code>!!'hello'; // true\n!!0;       // false</code>"
    },
    {
      "section": "op-logical",
      "question": "<code>true && 'hello'</code> returns?",
      "options": [
        "true",
        "false",
        "<code>'hello'</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The logical AND (&&) operator evaluates from left to right and returns the first falsy value it hits. If everything is truthy, it returns the very last value.<code>true && 'hello'; // 'hello'\nfalse && 'hello'; // false</code>"
    },
    {
      "section": "op-ternary",
      "question": "Ternary operator replaces?",
      "options": [
        "for loop",
        "switch",
        "<b>if-else</b>",
        "while"
      ],
      "answerIndex": 2,
      "explanation": "The ternary operator (condition ? trueVal : falseVal) is the only JavaScript operator that takes three operands. It is frequently used as a concise one-line alternative to an if-else block.<code>let status = age >= 18 ? 'Adult' : 'Minor';</code>"
    },
    {
      "section": "op-arithmetic",
      "question": "<code>5 % 2</code> returns?",
      "options": [
        "2.5",
        "2",
        "<code>1</code>",
        "0"
      ],
      "answerIndex": 2,
      "explanation": "The modulo operator (%) returns the remainder left over after dividing the left number by the right number. It is extremely useful for checking if a number is even (num % 2 === 0).<code>5 % 2;  // 1 (5 divided by 2 is 2 remainder 1)\n10 % 2; // 0 (Even)</code>"
    },
    {
      "section": "op-equality",
      "question": "<code>'5' == 5</code> returns?",
      "options": [
        "false",
        "<code>true</code>",
        "error",
        "undefined"
      ],
      "answerIndex": 1,
      "explanation": "The loose equality operator (==) performs 'type coercion', secretly attempting to convert the values to the same type before comparing them. This causes the string '5' to equal the number 5, which leads to bugs.<code>'5' == 5; // true (Dangerous!)</code>"
    },
    {
      "section": "op-equality",
      "question": "<code>'5' === 5</code> returns?",
      "options": [
        "true",
        "<code>false</code>",
        "error",
        "undefined"
      ],
      "answerIndex": 1,
      "explanation": "The strict equality operator (===) never converts types. If the types are different, it immediately fails and returns false. This is the safest and most predictable way to compare values.<code>'5' === 5; // false (Safe)</code>"
    },
    {
      "section": "op-intro",
      "question": "Operators perform?",
      "options": [
        "Loops",
        "<b>Operations on values</b>",
        "Declarations",
        "Imports"
      ],
      "answerIndex": 1,
      "explanation": "JavaScript and TypeScript provide Math operators (+, -, *, /), Comparison operators (>, <, ===), and Logical operators (&&, ||, !). You combine these to perform calculations and make decisions.<code>let valid = (age > 18) && (hasID === true);</code>"
    },
    {
      "section": "op-relational",
      "question": "<code>5 > 3</code> returns?",
      "options": [
        "5",
        "3",
        "<code>true</code>",
        "'5>3'"
      ],
      "answerIndex": 2,
      "explanation": "The greater-than (>) and less-than (<) operators compare numbers and return a boolean. They are heavily used in if-statements and loops to control logic flow.<code>if (score > 90) { console.log('A grade!'); }</code>"
    },
    {
      "section": "op-logical-combo",
      "question": "<code>true && false || true</code> returns?",
      "options": [
        "false",
        "<code>true</code>",
        "undefined",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "The logical NOT (!) operator reverses the truthiness of a value. It turns true into false, and false into true.<code>let isActive = true;\nlet isInactive = !isActive; // false</code>"
    },
    {
      "section": "op-prepost",
      "question": "Pre-increment <code>++x</code> vs post <code>x++</code> difference?",
      "options": [
        "Same",
        "<b>Pre increments before use, post after</b>",
        "Pre is slower",
        "Post is invalid"
      ],
      "answerIndex": 1,
      "explanation": "Pre-increment (++x) increases the value before handing it to the code. Post-increment (x++) hands the current value to the code first, and then increases it afterward.<code>let x = 5;\nconsole.log(x++); // Prints 5, then x becomes 6\nconsole.log(++x); // x becomes 7, then prints 7</code>"
    },
    {
      "section": "op-mistakes",
      "question": "Common mistake: <code>==</code> vs <code>===</code>?",
      "options": [
        "Same thing",
        "<b>== coerces types, === doesn't</b>",
        "=== is slower",
        "== is better"
      ],
      "answerIndex": 1,
      "explanation": "Because '==' does unpredictable type coercion (e.g., '0' == false is true), the industry standard is to completely ban '==' and only ever use '===' for comparisons to guarantee strict type safety.<code>0 == false;  // true (confusing)\n0 === false; // false (safe)</code>"
    }
  ],
  "conditionals.html": [
    {
      "section": "cs-break",
      "question": "What happens without <code>break</code> in switch?",
      "options": [
        "Error",
        "Skips",
        "<b>Falls through to next case</b>",
        "Returns undefined"
      ],
      "answerIndex": 2,
      "explanation": "If you forget to put a 'break' statement at the end of a switch case, JavaScript will 'fall through' and execute all the code in the subsequent cases, regardless of whether they match the condition!<code>case 1:\n  console.log('One');\n  // Missing break! Will execute case 2 also!</code>"
    },
    {
      "section": "cs-switch",
      "question": "Can switch check ranges like <code>x > 10</code>?",
      "options": [
        "Yes",
        "<b>No (exact values only)</b>",
        "With default",
        "With expressions"
      ],
      "answerIndex": 1,
      "explanation": "A switch statement evaluates a single expression and checks it against multiple 'cases'. It is much cleaner and easier to read than writing a massive chain of 'else if' statements when checking a single variable.<code>switch (color) {\n  case 'red': break;\n  case 'blue': break;\n}</code>"
    },
    {
      "section": "cs-switch",
      "question": "What does <code>default</code> do in switch?",
      "options": [
        "Required always",
        "<b>Runs when no case matches</b>",
        "First case",
        "Error handler"
      ],
      "answerIndex": 1,
      "explanation": "The 'default' block in a switch statement acts exactly like the final 'else' in an if-else chain. It is the fallback code that runs if absolutely none of the specific cases match the value.<code>switch (status) {\n  // ...cases...\n  default: console.log('Unknown status');\n}</code>"
    },
    {
      "section": "cs-switch",
      "question": "Which is better for exact value matching?",
      "options": [
        "if-else",
        "<b>switch</b>",
        "ternary",
        "while"
      ],
      "answerIndex": 1,
      "explanation": "A switch statement allows you to neatly organize complex branching logic based on the exact value of a specific variable. It performs a strict equality (===) comparison behind the scenes.<code>switch (role) {\n  case 'Admin': grantAccess(); break;\n}</code>"
    },
    {
      "section": "cs-if",
      "question": "What output?<br><code>if(0) { 'yes' } else { 'no' }</code>",
      "options": [
        "'yes'",
        "<code>'no'</code>",
        "0",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "In JavaScript, the number 0 is 'falsy'. This means if you put 0 inside an if-statement's condition, it evaluates as false, completely skipping the 'if' block and running the 'else' block instead.<code>if (0) {\n  // Skipped\n} else {\n  // This runs!\n}</code>"
    },
    {
      "section": "cs-nested",
      "question": "What does <code>else if</code> allow?",
      "options": [
        "Loops",
        "<b>Multiple conditions in sequence</b>",
        "Nesting only",
        "Default values"
      ],
      "answerIndex": 1,
      "explanation": "The 'else if' statement allows you to chain multiple distinct conditions together. As soon as the first true condition is found, its block runs, and the rest of the chain is entirely skipped.<code>if (score > 90) { ... }\nelse if (score > 80) { ... }</code>"
    },
    {
      "section": "cs-nested",
      "question": "Nested if-else should be avoided when?",
      "options": [
        "Always",
        "<b>When switch is clearer</b>",
        "In functions",
        "Never"
      ],
      "answerIndex": 1,
      "explanation": "Deeply nesting if-statements (putting ifs inside ifs inside ifs) is called the 'Arrow Anti-Pattern' because the indented code looks like a sideways arrow. It makes code extremely hard to read. Use early returns or logical operators (&&) instead.<code>if (a && b) { ... } // Better than nesting</code>"
    },
    {
      "section": "cs-if",
      "question": "<code>let x = 5 > 3 ? 'yes' : 'no'</code>  --  x equals?",
      "options": [
        "5",
        "true",
        "<code>'yes'</code>",
        "'no'"
      ],
      "answerIndex": 2,
      "explanation": "The ternary operator acts as a compact, inline if-else statement. It's incredibly useful for assigning a value to a variable based on a simple condition without taking up 5 lines of code.<code>let access = isAdmin ? 'Granted' : 'Denied';</code>"
    },
    {
      "section": "cs-intro",
      "question": "Conditionals control?",
      "options": [
        "Loops",
        "<b>Which code runs based on conditions</b>",
        "Variables",
        "Types"
      ],
      "answerIndex": 1,
      "explanation": "The 'if' statement is the most fundamental decision-making tool in programming. If the condition inside the parentheses evaluates to true, the code inside the curly braces is executed.<code>if (userIsLoggedIn) {\n  showDashboard();\n}</code>"
    },
    {
      "section": "cs-ifelse",
      "question": "<code>if...else</code> provides?",
      "options": [
        "Loop",
        "<b>Two paths: true or false</b>",
        "Switch",
        "Error handling"
      ],
      "answerIndex": 1,
      "explanation": "An 'if-else' statement guarantees that exactly one block of code will run. If the condition is true, the first block runs. If it's false, the 'else' block serves as the guaranteed fallback.<code>if (isRaining) {\n  takeUmbrella();\n} else {\n  wearSunglasses();\n}</code>"
    },
    {
      "section": "cs-mistakes",
      "question": "Common mistake: missing break in switch?",
      "options": [
        "No effect",
        "<b>Fall-through to next case</b>",
        "Error",
        "Faster"
      ],
      "answerIndex": 1,
      "explanation": "The 'fall-through' bug is one of the most common mistakes in JavaScript. Without a 'break' statement, the switch doesn't stop evaluating; it just keeps executing every line of code below it until it hits a break or the end of the switch.<code>case 'A':\n  score += 10;\n  // FORGOT BREAK!\ncase 'B':\n  score += 5; // This runs too!</code>"
    }
  ],
  "loops.html": [
    {
      "section": "lp-dowhile",
      "question": "Which loop always runs at least once?",
      "options": [
        "while",
        "for",
        "<code>do...while</code>",
        "for...of"
      ],
      "answerIndex": 2,
      "explanation": "Unlike a while loop, a 'do...while' loop guarantees that the code block will execute at least once before the condition is ever checked. It executes the 'do' block, then checks the 'while' condition.<code>do {\n  showMenu();\n} while (userWantsToContinue);</code>"
    },
    {
      "section": "lp-for",
      "question": "3 parts of a for loop?",
      "options": [
        "<b>Init, condition, update</b>",
        "Start, end, step",
        "Var, check, run",
        "Begin, test, next"
      ],
      "answerIndex": 0,
      "explanation": "The classic 'for' loop gives you complete control over the index, making it perfect for looping through an array when you need to know the exact numeric position of the elements.<code>for (let i = 0; i < arr.length; i++) {\n  console.log(`Index ${i}: ${arr[i]}`);\n}</code>"
    },
    {
      "section": "lp-break",
      "question": "What does <code>break</code> do?",
      "options": [
        "Pauses",
        "Skips iteration",
        "<b>Exits loop entirely</b>",
        "Restarts"
      ],
      "answerIndex": 2,
      "explanation": "The 'break' keyword acts as an emergency exit for loops. As soon as a break statement is hit, the loop instantly terminates and the program moves on to the code below the loop.<code>for (let item of items) {\n  if (item === 'target') break; // Stop searching!\n}</code>"
    },
    {
      "section": "lp-continue",
      "question": "What does <code>continue</code> do?",
      "options": [
        "Exits loop",
        "<b>Skips current iteration</b>",
        "Pauses",
        "Breaks all loops"
      ],
      "answerIndex": 1,
      "explanation": "The 'continue' keyword is like a skip button. It immediately stops the current iteration of the loop and jumps straight to the next iteration, ignoring any code below it in the block.<code>for (let n of nums) {\n  if (n % 2 !== 0) continue; // Skip odd numbers\n  console.log(n); // Only logs evens\n}</code>"
    },
    {
      "section": "lp-for",
      "question": "Best loop when you know the count?",
      "options": [
        "while",
        "do-while",
        "<code>for</code>",
        "forEach"
      ],
      "answerIndex": 2,
      "explanation": "A 'for' loop is the best choice when you know exactly how many times the loop needs to run in advance (for example, looping exactly 10 times, or looping from 1 to 100).<code>for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}</code>"
    },
    {
      "section": "lp-while",
      "question": "<code>while</code> checks condition ___ loop body?",
      "options": [
        "After",
        "<b>Before</b>",
        "During",
        "Never"
      ],
      "answerIndex": 1,
      "explanation": "A 'while' loop evaluates its condition BEFORE running the code block. If the condition is false from the very beginning, the code inside the loop will simply never run at all.<code>while (battery > 0) {\n  keepScreenOn();\n}</code>"
    },
    {
      "section": "lp-continue",
      "question": "What output?<br><code>for(let i=0;i<3;i++){if(i===1)continue;console.log(i)}</code>",
      "options": [
        "0,1,2",
        "<code>0,2</code>",
        "1",
        "0,1"
      ],
      "answerIndex": 1,
      "explanation": "Using 'continue' is a great way to avoid deeply nested if-statements inside a loop. By checking for invalid data early and calling 'continue', you keep the rest of your loop logic flat and readable.<code>if (!isValid) continue;\n// Process valid data...</code>"
    },
    {
      "section": "lp-while",
      "question": "What output?<br><code>let i=5; while(i<3){console.log(i);i++}</code>",
      "options": [
        "5",
        "5,6,7",
        "<b>Nothing (never enters)</b>",
        "Infinite loop"
      ],
      "answerIndex": 2,
      "explanation": "A 'while' loop is ideal when you don't know exactly how many iterations will be required, but you know the loop must stop when a specific condition changes. Remember to update the condition, or you'll create an infinite loop!<code>while (!dataLoaded) {\n  showLoadingSpinner();\n}</code>"
    },
    {
      "section": "lp-for",
      "question": "<code>for(let i=3;i>0;i--)</code> runs how many times?",
      "options": [
        "0",
        "2",
        "<code>3</code>",
        "infinite"
      ],
      "answerIndex": 2,
      "explanation": "Loops don't just count up! You can easily count backwards by initializing your counter high, setting the condition to check if it's above zero, and using the decrement operator (--).<code>for (let i = 3; i > 0; i--) {\n  console.log(i);\n}</code>"
    },
    {
      "section": "lp-while",
      "question": "Which loop is best for unknown iterations?",
      "options": [
        "for",
        "<code>while</code>",
        "do-while",
        "for-in"
      ],
      "answerIndex": 1,
      "explanation": "Loops are essential for repetitive tasks like polling a server, traversing a tree structure, or continuously prompting a user for input until they provide valid data.<code>while (!validInput) {\n  askUserAgain();\n}</code>"
    },
    {
      "section": "lp-intro",
      "question": "Loops are used to?",
      "options": [
        "Declare variables",
        "<b>Repeat code multiple times</b>",
        "Define types",
        "Import modules"
      ],
      "answerIndex": 1,
      "explanation": "A loop allows you to execute the exact same block of code multiple times without writing it over and over again, keeping your code DRY (Don't Repeat Yourself).<code>for (let i = 0; i < 5; i++) {\n  console.log('Hello');\n}</code>"
    },
    {
      "section": "lp-three",
      "question": "Three parts of a for loop?",
      "options": [
        "<b>Init, condition, update</b>",
        "Start, middle, end",
        "Var, let, const",
        "Begin, run, stop"
      ],
      "answerIndex": 0,
      "explanation": "A 'for' loop has three parts separated by semicolons: 1. Initialization (runs once at the start), 2. Condition (checked before every iteration), and 3. Update (runs at the end of every iteration).<code>for (let i=0; i<10; i++) { ... }</code>"
    },
    {
      "section": "lp-scope",
      "question": "<code>let</code> in for loop is scoped to?",
      "options": [
        "Function",
        "Global",
        "<b>Each iteration (block)</b>",
        "Module"
      ],
      "answerIndex": 2,
      "explanation": "By using 'let' to declare the counter variable inside the loop (e.g., let i = 0), you ensure the variable is securely scoped to the loop block. It cannot be accessed from outside, preventing accidental variable collisions.<code>for (let i = 0; i < 5; i++) { }\nconsole.log(i); // ReferenceError!</code>"
    }
  ],
  "functions.html": [
    {
      "section": "fn-arrow",
      "question": "Arrow functions don't have their own ___?",
      "options": [
        "return",
        "parameters",
        "<code>this</code>",
        "scope"
      ],
      "answerIndex": 2,
      "explanation": "Unlike traditional functions, arrow functions do NOT have their own 'this' binding. They automatically inherit 'this' from the surrounding scope where they were defined, which is extremely useful in callbacks and classes.<code>const obj = {\n  start: function() {\n    setTimeout(() => console.log(this), 100);\n  }\n};</code>"
    },
    {
      "section": "fn-rest",
      "question": "<code>...</code> operator in params is called?",
      "options": [
        "spread",
        "optional",
        "<code>rest</code>",
        "default"
      ],
      "answerIndex": 2,
      "explanation": "The rest parameter (...) allows a function to accept an infinite number of arguments as an array. It must be strictly typed as an array (e.g., number[]) and must be the very last parameter in the function signature.<code>function sum(...nums: number[]) {\n  return nums.reduce((a, b) => a + b, 0);\n}</code>"
    },
    {
      "section": "fn-optional",
      "question": "Optional params must come ___ required params.",
      "options": [
        "before",
        "<b>after</b>",
        "instead of",
        "anywhere"
      ],
      "answerIndex": 1,
      "explanation": "To make a function parameter optional, add a question mark (?) right before the colon. Optional parameters must always come AFTER all required parameters in the signature.<code>function greet(name: string, age?: number) {\n  // age might be undefined\n}</code>"
    },
    {
      "section": "fn-anon",
      "question": "What is an anonymous function?",
      "options": [
        "<b>A function without a name</b>",
        "A private fn",
        "An arrow fn",
        "A method"
      ],
      "answerIndex": 0,
      "explanation": "An anonymous function is simply a function without a name. They are often assigned directly to variables or passed inline as callbacks to other functions.<code>const double = function(x: number) {\n  return x * 2;\n};</code>"
    },
    {
      "section": "fn-implicit",
      "question": "<code>const add = (a:number) => a + 1</code>  --  this uses?",
      "options": [
        "Named fn",
        "<b>Implicit return</b>",
        "Explicit return",
        "void"
      ],
      "answerIndex": 1,
      "explanation": "Arrow functions offer an implicit return syntax. If the function body is just a single expression without curly braces {}, the result of that expression is automatically returned.<code>const double = (x: number) => x * 2;</code>"
    },
    {
      "section": "fn-void-never",
      "question": "Function that never returns has type?",
      "options": [
        "void",
        "null",
        "<code>never</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The 'never' return type tells the compiler that the function will absolutely NEVER finish executing normally. It is used for functions that always throw errors or contain infinite loops.<code>function crash(): never {\n  throw new Error('Fatal');\n}</code>"
    },
    {
      "section": "fn-default",
      "question": "<code>function greet(name = 'World')</code>  --  'World' is?",
      "options": [
        "rest param",
        "optional",
        "<b>default param</b>",
        "required"
      ],
      "answerIndex": 2,
      "explanation": "Default parameters allow you to specify a fallback value that will be used if the caller doesn't provide an argument (or passes 'undefined'). TypeScript automatically infers the type from the default value.<code>function greet(name = 'Guest') {\n  console.log('Hi ' + name);\n}</code>"
    },
    {
      "section": "fn-optional",
      "question": "What output?<br><code>const fn = (a:number, b?:number) => a+(b??0); fn(5)</code>",
      "options": [
        "NaN",
        "error",
        "<code>5</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "Optional parameters are marked with '?'. Because they might be omitted, TypeScript forces you to handle the scenario where the value is 'undefined' before you try to use it.<code>function log(msg?: string) {\n  if (msg) console.log(msg.toUpperCase());\n}</code>"
    },
    {
      "section": "fn-void-never",
      "question": "<code>void</code> return means?",
      "options": [
        "Returns null",
        "<b>Returns nothing meaningful</b>",
        "Throws error",
        "Returns 0"
      ],
      "answerIndex": 1,
      "explanation": "When a function performs an action (like logging or modifying the DOM) but doesn't explicitly return any data using the 'return' keyword, its return type should be annotated as 'void'.<code>function log(msg: string): void {\n  console.log(msg);\n}</code>"
    },
    {
      "section": "fn-named",
      "question": "Named vs arrow: which is hoisted?",
      "options": [
        "Arrow",
        "Both",
        "Neither",
        "<b>Named (declaration)</b>"
      ],
      "answerIndex": 3,
      "explanation": "Function declarations (using the 'function' keyword at the start of a statement) are completely hoisted to the top of the file before execution. This means you can call the function lines before it is actually defined!<code>greet(); // Works perfectly!\nfunction greet() { }</code>"
    },
    {
      "section": "fn-named",
      "question": "<code>function greet(){}</code> is called?",
      "options": [
        "Anonymous",
        "Arrow",
        "<b>Named function declaration</b>",
        "Lambda"
      ],
      "answerIndex": 2,
      "explanation": "A standard function declaration starts with the 'function' keyword, requires a name, and is fully hoisted. It is the most traditional way to define a reusable block of code.<code>function calculateTotal() {\n  return 100;\n}</code>"
    },
    {
      "section": "fn-what",
      "question": "A function is?",
      "options": [
        "A variable",
        "<b>Reusable block of code</b>",
        "A type",
        "A loop"
      ],
      "answerIndex": 1,
      "explanation": "You annotate the return type by placing a colon (:) after the parameter parentheses. This strictly locks the function to only ever return data of that specific type.<code>function add(a: number, b: number): number {\n  return a + b;\n}</code>"
    },
    {
      "section": "fn-mistakes",
      "question": "Common mistake: forgetting return type?",
      "options": [
        "Always fine",
        "<b>Can lead to implicit any</b>",
        "Causes crash",
        "Required"
      ],
      "answerIndex": 1,
      "explanation": "While TypeScript can often guess the return type based on what you return, explicitly annotating the return type prevents you from accidentally returning the wrong data type (or nothing at all) and helps document your code.<code>// Good practice:\nfunction getId(): string { return '123'; }</code>"
    }
  ],
  "functions-advanced.html": [
    {
      "section": "cb-what",
      "question": "What is a callback function?",
      "options": [
        "<b>A function passed as argument</b>",
        "A return value",
        "A method",
        "A promise"
      ],
      "answerIndex": 0,
      "explanation": "A callback is simply a function that you pass as an argument into another function. The receiving function will execute (call back) your passed function at a later time, often when an asynchronous task finishes.<code>function fetch(callback: (res: string) => void) {\n  setTimeout(() => callback('Done'), 100);\n}</code>"
    },
    {
      "section": "ol-what",
      "question": "How many overload signatures can a function have?",
      "options": [
        "1",
        "<b>2 or more</b>",
        "Exactly 2",
        "Unlimited"
      ],
      "answerIndex": 1,
      "explanation": "Function Overloading allows you to define multiple completely different parameter signatures for a single function name. It helps you strictly type a function that can be called in several distinct ways.<code>function get(id: string): User;\nfunction get(ids: string[]): User[];</code>"
    },
    {
      "section": "ol-steps",
      "question": "Is the implementation signature callable directly?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Sometimes",
        "Only in classes"
      ],
      "answerIndex": 1,
      "explanation": "In an overloaded function, you first write all the 'overload signatures' (without bodies) to tell TS how it can be called. Then you write ONE 'implementation signature' with the actual logic.<code>function fn(x: string): string; // Overload 1\nfunction fn(x: number): number; // Overload 2\nfunction fn(x: any): any { return x; } // Implementation</code>"
    },
    {
      "section": "cb-sync",
      "question": "Sync callbacks run ___?",
      "options": [
        "Later",
        "<b>Immediately</b>",
        "In background",
        "On event"
      ],
      "answerIndex": 1,
      "explanation": "A synchronous callback runs immediately, blocking the main thread until it finishes. For example, array methods like map() and forEach() execute your callback synchronously for every item.<code>[1, 2].forEach(n => console.log(n));\nconsole.log('Done'); // Prints LAST</code>"
    },
    {
      "section": "ol-return",
      "question": "Can overloaded functions have different return types?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only void",
        "Only same type"
      ],
      "answerIndex": 1,
      "explanation": "Yes, overload signatures can absolutely have different return types based on the parameters passed. If you pass a string, it can return a string; if you pass an array, it can return an array.<code>function make(id: number): string;\nfunction make(id: string): number;</code>"
    },
    {
      "section": "cb-what",
      "question": "What output?<br><code>function run(cb:()=>void){cb()} run(()=>console.log('hi'))</code>",
      "options": [
        "undefined",
        "<code>'hi'</code>",
        "error",
        "void"
      ],
      "answerIndex": 1,
      "explanation": "To strictly type a callback parameter, use the arrow function syntax in the type annotation: '(param: type) => returnType'. This enforces that the caller provides a perfectly matching function.<code>function onClick(callback: (event: string) => void) { }</code>"
    },
    {
      "section": "ol-steps",
      "question": "What is the 'implementation signature' in overloading?",
      "options": [
        "First signature",
        "Last signature",
        "<b>The actual function body</b>",
        "The return type"
      ],
      "answerIndex": 2,
      "explanation": "The implementation signature is the final definition that contains the actual code body. It is completely invisible to the outside world; callers can ONLY use the specific overload signatures defined above it.<code>// The implementation signature is private!\nfunction fn(x: any): any { ... }</code>"
    },
    {
      "section": "ol-invalid",
      "question": "What error occurs with wrong overload params?",
      "options": [
        "Runtime error",
        "<b>Compile-time type error</b>",
        "Warning",
        "None"
      ],
      "answerIndex": 1,
      "explanation": "The implementation signature must use a highly generic type (like 'any' or wide unions) because its single code body must be able to internally handle every possible argument combination defined by the overloads above it.<code>function make(id: string | number) {\n  if (typeof id === 'string') ...\n}</code>"
    },
    {
      "section": "cb-sync",
      "question": "<code>setTimeout(callback, 1000)</code> is?",
      "options": [
        "Sync callback",
        "<b>Async callback</b>",
        "Promise",
        "Generator"
      ],
      "answerIndex": 1,
      "explanation": "An asynchronous callback is passed to an operation that takes time (like setTimeout, fetching data, or reading files). The main thread moves on instantly, and the callback only runs when the operation finally completes.<code>setTimeout(() => console.log('Done'), 1000);\nconsole.log('Start'); // Prints FIRST!</code>"
    },
    {
      "section": "ol-steps",
      "question": "Overload signatures must be ___ the implementation.",
      "options": [
        "After",
        "<b>Before</b>",
        "Inside",
        "Anywhere"
      ],
      "answerIndex": 1,
      "explanation": "You write the overload signatures sequentially first (no curly braces, just semicolons). The very last definition is the implementation signature, which contains the curly braces and the actual execution logic.<code>function fn(a: string): string;\nfunction fn(a: number): number;\nfunction fn(a: any): any { ... }</code>"
    },
    {
      "section": "cb-ex1",
      "question": "<code>setTimeout(fn, 1000)</code>  --  fn is a?",
      "options": [
        "Promise",
        "Timer",
        "<b>Callback function</b>",
        "Return value"
      ],
      "answerIndex": 2,
      "explanation": "Because 'setTimeout' schedules execution for later and doesn't block the code beneath it, the callback you provide to it is considered Asynchronous.<code>setTimeout(() => console.log('Async'), 0);</code>"
    },
    {
      "section": "cb-ex2",
      "question": "<code>arr.map(x => x*2)</code>  --  the arrow function is?",
      "options": [
        "Method",
        "<b>A callback</b>",
        "Class",
        "Loop"
      ],
      "answerIndex": 1,
      "explanation": "Because 'map' stops everything else and executes your callback function for every element in the array immediately before moving to the next line of code, the callback is strictly Synchronous.<code>[1,2].map(x => x * 2);</code>"
    },
    {
      "section": "ol-types",
      "question": "Overloads must have same?",
      "options": [
        "Parameters",
        "Return type",
        "<b>Function name</b>",
        "Body"
      ],
      "answerIndex": 2,
      "explanation": "Function overloading is extremely useful when a function needs to behave differently depending on the types or number of arguments passed in. Instead of creating 'getById' and 'getByList', you overload a single 'get' function.<code>function get(id: string): User;\nfunction get(ids: string[]): User[];</code>"
    },
    {
      "section": "ol-params",
      "question": "Overload signatures define?",
      "options": [
        "The body",
        "<b>Different parameter combinations</b>",
        "Return only",
        "Variable types"
      ],
      "answerIndex": 1,
      "explanation": "When a function is overloaded, TypeScript completely hides the 'implementation signature' from developers. When you type the function, the IDE will only show you the explicitly defined overload signatures as valid options.<code>// You only see the strict overloads in VS Code!</code>"
    }
  ],
  "higher-order-methods.html": [
    {
      "section": "ho-reduce",
      "question": "Which returns a SINGLE value from an array?",
      "options": [
        "map()",
        "filter()",
        "<code>reduce()</code>",
        "forEach()"
      ],
      "answerIndex": 2,
      "explanation": "A Higher-Order Method is simply any function or array method that takes another function as an argument (a callback), or returns a function. map, filter, and reduce are all higher-order methods.<code>[1, 2].map(x => x * 2); // Takes a callback!</code>"
    },
    {
      "section": "ho-foreach",
      "question": "Does <code>forEach()</code> return a new array?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Only if you return",
        "Sometimes"
      ],
      "answerIndex": 1,
      "explanation": "The forEach() method executes a provided callback function once for every array element. It is purely for executing side effects (like logging or modifying external variables) and always returns 'undefined'.<code>arr.forEach(item => console.log(item));</code>"
    },
    {
      "section": "ho-every",
      "question": "<code>every()</code> on an empty array returns?",
      "options": [
        "false",
        "<code>true</code>",
        "undefined",
        "Error"
      ],
      "answerIndex": 1,
      "explanation": "The every() method tests whether ALL elements in the array pass the condition in your callback. If even one element fails, it immediately returns false. If all pass, it returns true.<code>[2, 4, 6].every(x => x % 2 === 0); // true</code>"
    },
    {
      "section": "ho-some",
      "question": "What does <code>some()</code> return?",
      "options": [
        "Array",
        "Number",
        "<code>Boolean</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The some() method tests whether AT LEAST ONE element in the array passes the condition in your callback. If it finds a match, it immediately stops and returns true. If none pass, it returns false.<code>[1, 5, 9].some(x => x % 2 === 0); // false</code>"
    },
    {
      "section": "ho-map",
      "question": "<code>map()</code> does what that <code>forEach()</code> doesn't?",
      "options": [
        "Mutate",
        "Loop",
        "<b>Return a new array</b>",
        "Filter"
      ],
      "answerIndex": 2,
      "explanation": "The map() method creates a brand new array populated with the results of calling your callback function on every single element in the original array. It is perfect for transforming data.<code>let doubled = [1, 2].map(x => x * 2); // [2, 4]</code>"
    },
    {
      "section": "ho-reduce",
      "question": "Second argument of <code>reduce()</code> is?",
      "options": [
        "Callback",
        "Index",
        "<b>Initial accumulator value</b>",
        "Length"
      ],
      "answerIndex": 2,
      "explanation": "The reduce() method runs a 'reducer' callback on each element, passing in the return value from the calculation on the preceding element. It boils the entire array down to a single output value (like a sum or an object).<code>let sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0);</code>"
    },
    {
      "section": "ho-map",
      "question": "<code>[1,2,3].map(x => x*2)</code> returns?",
      "options": [
        "6",
        "[1,2,3]",
        "<code>[2,4,6]</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "Unlike map or filter which return arrays, forEach explicitly returns 'undefined'. It is a 'void' method meant exclusively for side effects, so you can never chain other array methods after a forEach.<code>let x = [1, 2].forEach(n => n); // x is undefined</code>"
    },
    {
      "section": "ho-filter",
      "question": "<code>[1,2,3].filter(x => x>1)</code> returns?",
      "options": [
        "[1]",
        "<code>[2,3]</code>",
        "true",
        "2"
      ],
      "answerIndex": 1,
      "explanation": "The filter() method creates a brand new array containing ONLY the elements from the original array that returned 'true' when passed through your callback condition.<code>let evens = [1, 2, 3].filter(x => x % 2 === 0);</code>"
    },
    {
      "section": "ho-reduce",
      "question": "<code>[1,2,3].reduce((a,b)=>a+b, 0)</code> returns?",
      "options": [
        "[1,2,3]",
        "0",
        "<code>6</code>",
        "123"
      ],
      "answerIndex": 2,
      "explanation": "The second argument to reduce() is the 'initialValue'. It sets the starting value for the accumulator. Always provide an initial value (like 0 for sums or {} for objects) to prevent confusing bugs on empty arrays!<code>arr.reduce((acc, curr) => acc + curr, 0); // 0 is initial!</code>"
    },
    {
      "section": "ho-some",
      "question": "<code>[1,2,3].some(x => x>5)</code> returns?",
      "options": [
        "true",
        "<code>false</code>",
        "undefined",
        "[]"
      ],
      "answerIndex": 1,
      "explanation": "Methods like every() and some() use 'short-circuiting'. The moment some() finds a 'true' match, it immediately stops looping and returns true. It doesn't waste time checking the rest of the array.<code>[1, 2, 3].some(x => x === 1); // Stops at index 0!</code>"
    },
    {
      "section": "ho-overview",
      "question": "Higher-order methods take ___ as arguments?",
      "options": [
        "Strings",
        "Numbers",
        "<b>Functions (callbacks)</b>",
        "Arrays"
      ],
      "answerIndex": 2,
      "explanation": "The callback function passed to map, filter, or forEach automatically receives three arguments: the current value, the current index, and the original array itself.<code>arr.map((val, index, array) => { ... });</code>"
    }
  ],
  "type-aliases.html": [
    {
      "section": "ta-what",
      "question": "Which keyword creates a type alias?",
      "options": [
        "interface",
        "class",
        "<code>type</code>",
        "typedef"
      ],
      "answerIndex": 2,
      "explanation": "The 'type' keyword creates a Type Alias. It allows you to give a custom, readable name to any TypeScript type, ranging from simple primitives and unions to complex object structures.<code>type ID = string | number;\nlet userId: ID = 42;</code>"
    },
    {
      "section": "it-inter",
      "question": "<code>&</code> (intersection) does what?",
      "options": [
        "Union",
        "<b>Combines multiple types into one</b>",
        "Subtracts",
        "Checks equality"
      ],
      "answerIndex": 1,
      "explanation": "An Intersection Type uses the ampersand (&) to mash multiple types together into a single, combined type. The resulting type requires the properties of ALL intersected types.<code>type Point3D = Point2D & { z: number };</code>"
    },
    {
      "section": "ut-literal",
      "question": "What are literal types?",
      "options": [
        "String types",
        "<b>Types allowing only exact values</b>",
        "Enum types",
        "Generic types"
      ],
      "answerIndex": 1,
      "explanation": "A Union Type uses the pipe (|) to tell TypeScript that a value can be 'this OR that'. It's incredibly useful for parameters that can accept multiple distinct shapes or primitives.<code>type Status = 'loading' | 'success' | 'error';</code>"
    },
    {
      "section": "dt-discrim",
      "question": "What is a discriminated union?",
      "options": [
        "Any union",
        "<b>Union with a shared tag property</b>",
        "Intersection",
        "Enum"
      ],
      "answerIndex": 1,
      "explanation": "A Discriminated Union is a pattern where multiple object types in a union share a single, identical property (like 'kind' or 'type'). This 'discriminator' allows TypeScript to safely narrow down the exact object shape.<code>type Shape = { kind: 'circle', radius: number }\n           | { kind: 'square', size: number };</code>"
    },
    {
      "section": "ta-compare",
      "question": "Can type aliases use <code>extends</code>?",
      "options": [
        "Yes",
        "<b>No, use & instead</b>",
        "Only with interfaces",
        "Only with classes"
      ],
      "answerIndex": 1,
      "explanation": "While an interface 'extends' other interfaces to inherit properties, a Type Alias uses the intersection operator (&) to achieve the exact same result of combining objects.<code>type Admin = User & { role: string };</code>"
    },
    {
      "section": "ut-literal",
      "question": "<code>type Dir = 'up'|'down'</code>  --  what is 'up'?",
      "options": [
        "String",
        "<code>Literal type</code>",
        "Enum",
        "Const"
      ],
      "answerIndex": 1,
      "explanation": "Literal Types allow you to restrict a variable to specific, exact strings or numbers (e.g., 'small' | 'medium'). It prevents typos because TypeScript will reject any string that isn't explicitly listed.<code>type Size = 'sm' | 'md' | 'lg';\nlet shirt: Size = 'xl'; // Error!</code>"
    },
    {
      "section": "it-inter",
      "question": "<code>type A = {x:number}; type B = {y:string}; type C = A & B</code>  --  C has?",
      "options": [
        "Only x",
        "Only y",
        "<b>Both x and y</b>",
        "Error"
      ],
      "answerIndex": 2,
      "explanation": "Intersection types (&) strictly require the object to have ALL the combined properties simultaneously. If you intersect {a: string} & {b: number}, the final object MUST have both 'a' and 'b'.<code>type Combo = { a: 1 } & { b: 2 };\nlet c: Combo = { a: 1, b: 2 };</code>"
    },
    {
      "section": "ta-compare",
      "question": "Main difference: <code>type</code> vs <code>interface</code>?",
      "options": [
        "No difference",
        "<b>interface can be reopened, type can't</b>",
        "type is faster",
        "interface is newer"
      ],
      "answerIndex": 1,
      "explanation": "Interfaces are exclusively for defining the shape of Objects. Type Aliases are universally flexible -- they can describe objects, but they can also describe primitives, unions, tuples, and functions!<code>type ID = string | number; // Only possible with type!</code>"
    },
    {
      "section": "ut-literal",
      "question": "<code>type Status = 'active'|'inactive'; let s:Status='hello'</code>?",
      "options": [
        "Works",
        "<b>Compile error</b>",
        "Runtime error",
        "Converts"
      ],
      "answerIndex": 1,
      "explanation": "A String Literal Union is a type made entirely of specific string values. It's the modern, lightweight alternative to Enums for restricting a value to a small set of predefined options.<code>type Theme = 'light' | 'dark' | 'system';</code>"
    },
    {
      "section": "ut-narrowing",
      "question": "Narrowing a union means?",
      "options": [
        "Widening type",
        "<b>Checking type at runtime to use safely</b>",
        "Converting types",
        "Removing types"
      ],
      "answerIndex": 1,
      "explanation": "When using a Union type like 'string | number', TypeScript will block methods that don't exist on BOTH types. You must use a Type Guard (like typeof) to 'narrow' the type before you can safely use specific methods like .toUpperCase().<code>if (typeof id === 'string') id.toUpperCase();</code>"
    },
    {
      "section": "ta-object",
      "question": "Type alias for object: <code>type User = {name: string}</code> defines?",
      "options": [
        "Variable",
        "<b>Object shape/structure</b>",
        "Class",
        "Interface"
      ],
      "answerIndex": 1,
      "explanation": "A Type Alias can define the exact property structure of an object. This is structurally identical to creating an interface, and for objects, 'type' and 'interface' can be used interchangeably 95% of the time.<code>type User = { id: number, name: string };</code>"
    },
    {
      "section": "ta-function",
      "question": "Type alias for function: <code>type Fn = (x:number)=>string</code> defines?",
      "options": [
        "A variable",
        "<b>Function signature type</b>",
        "A class",
        "An interface"
      ],
      "answerIndex": 1,
      "explanation": "You can define the strict signature of a function using a Type Alias. It uses the arrow syntax: '(params) => returnType'. This makes assigning typed callbacks incredibly clean.<code>type Logger = (msg: string) => void;</code>"
    },
    {
      "section": "ut-what",
      "question": "Union types allow a value to be?",
      "options": [
        "Only one type",
        "<b>One of several types</b>",
        "All types",
        "No type"
      ],
      "answerIndex": 1,
      "explanation": "Utility Types are built-in TypeScript helpers (like Partial<T>, Omit<T>, Pick<T>) that take an existing Type or Interface and transform it into a brand new shape dynamically.<code>type OptionalUser = Partial&lt;User&gt;;</code>"
    }
  ],
  "enums.html": [
    {
      "section": "en-numeric",
      "question": "Default starting value of numeric enum?",
      "options": [
        "1",
        "-1",
        "<code>0</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "An Enum (enumeration) is a feature that allows you to define a set of named constants. Behind the scenes, TypeScript converts standard Enums into real JavaScript objects at runtime.<code>enum Direction { Up, Down, Left, Right }</code>"
    },
    {
      "section": "en-hetero",
      "question": "Can you mix numbers and strings in an enum?",
      "options": [
        "No",
        "<b>Yes (heterogeneous)</b>",
        "Only numbers",
        "Only strings"
      ],
      "answerIndex": 1,
      "explanation": "A Heterogeneous Enum mixes both number and string values. While TypeScript allows this, it is considered bad practice because it causes confusing runtime behavior and breaks reverse mapping.<code>enum Mix { No = 0, Yes = 'Y' } // Avoid doing this!</code>"
    },
    {
      "section": "en-const",
      "question": "<code>const enum</code> is different because?",
      "options": [
        "Can't use strings",
        "<b>Inlined at compile time, no runtime object</b>",
        "Must be exported",
        "Only 1 member"
      ],
      "answerIndex": 1,
      "explanation": "A 'const enum' is a hyper-optimized enum. Instead of compiling into a JavaScript object, TypeScript completely erases the enum and inlines the raw values directly into your compiled JS, saving performance and bundle size.<code>const enum Size { S, M, L }\nlet s = Size.S; // Compiles simply to: let s = 0;</code>"
    },
    {
      "section": "en-reverse",
      "question": "What is reverse mapping?",
      "options": [
        "Swapping keys",
        "<b>Getting the name from the value</b>",
        "Reversing order",
        "Inverting values"
      ],
      "answerIndex": 1,
      "explanation": "Reverse Mapping is a feature unique to Numeric Enums. TypeScript creates a two-way object, meaning you can look up the value by name (Color.Red -> 0), AND look up the name by value (Color[0] -> 'Red').<code>enum Status { Active = 1 }\nconsole.log(Status[1]); // 'Active'</code>"
    },
    {
      "section": "en-reverse",
      "question": "Do string enums support reverse mapping?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Only const enums",
        "Only numeric"
      ],
      "answerIndex": 1,
      "explanation": "String Enums do NOT support reverse mapping. Because string values aren't predictably sequential, TypeScript only generates a standard one-way object for string enums.<code>enum Role { Admin = 'ADMIN' }\nRole['ADMIN']; // Error! No reverse map</code>"
    },
    {
      "section": "en-compare",
      "question": "When use union literals instead of enums?",
      "options": [
        "Never",
        "Always",
        "<b>When you want simpler, tree-shakeable code</b>",
        "Only in React"
      ],
      "answerIndex": 2,
      "explanation": "Many modern TS developers prefer String Literal Unions (type Dir = 'Up' | 'Down') over Enums. Unions are simpler, don't generate extra JS code, and prevent edge-case bugs caused by numeric enums.<code>type Direction = 'Up' | 'Down'; // Highly preferred!</code>"
    },
    {
      "section": "en-numeric",
      "question": "<code>enum Dir {Up, Down, Left}</code>  --  <code>Dir.Left</code> equals?",
      "options": [
        "0",
        "1",
        "<code>2</code>",
        "'Left'"
      ],
      "answerIndex": 2,
      "explanation": "If you don't assign values to a Numeric Enum, TypeScript automatically auto-increments them starting from zero. So the first item is 0, the second is 1, and so on.<code>enum State { Start, Stop } // Start=0, Stop=1</code>"
    },
    {
      "section": "en-string",
      "question": "<code>enum Color {Red='R', Blue='B'}</code>  --  this is a?",
      "options": [
        "Numeric enum",
        "<b>String enum</b>",
        "Const enum",
        "Heterogeneous"
      ],
      "answerIndex": 1,
      "explanation": "In a String Enum, you must explicitly assign a string literal value to every single member. They do not auto-increment, but they provide much clearer debug logs than numeric enums.<code>enum Theme { Dark = 'DARK', Light = 'LIGHT' }</code>"
    },
    {
      "section": "en-numeric",
      "question": "Can enum members be computed?",
      "options": [
        "<b>Yes (numeric only)</b>",
        "No",
        "All types",
        "Only const"
      ],
      "answerIndex": 0,
      "explanation": "Enums define a set of named constants. They are useful when you have a strictly limited group of related values, like days of the week, user roles, or system states.<code>enum LogLevel { Info, Warn, Error }</code>"
    },
    {
      "section": "en-custom",
      "question": "<code>enum E {A=1, B, C}</code>  --  B equals?",
      "options": [
        "0",
        "1",
        "<code>2</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "If you set the first value of a numeric enum (e.g., Active = 1), TypeScript will automatically increment all subsequent members from that starting point (so Inactive becomes 2).<code>enum Rank { First = 1, Second, Third } // 1, 2, 3</code>"
    },
    {
      "section": "en-what",
      "question": "Enums define?",
      "options": [
        "Functions",
        "<b>Named constants (fixed set of values)</b>",
        "Variables",
        "Loops"
      ],
      "answerIndex": 1,
      "explanation": "Unless you use the 'const' keyword, standard Enums are not erased during compilation. TypeScript compiles them into bulky Immediately Invoked Function Expressions (IIFEs) in your final JavaScript.<code>enum Shape { Circle } // Leaves a footprint in JS!</code>"
    },
    {
      "section": "en-usage",
      "question": "When to use enums?",
      "options": [
        "For any string",
        "<b>When you have a fixed set of related constants</b>",
        "Always",
        "For numbers only"
      ],
      "answerIndex": 1,
      "explanation": "You access Enum members exactly like object properties, using dot notation. This provides great autocomplete and ensures you don't use invalid magic numbers in your logic.<code>if (user.role === Role.Admin) { ... }</code>"
    }
  ],
  "type-narrowing.html": [
    {
      "section": "tn-in",
      "question": "Which checks if property exists in object?",
      "options": [
        "typeof",
        "instanceof",
        "<code>in</code>",
        "is"
      ],
      "answerIndex": 2,
      "explanation": "The 'in' operator checks if an object possesses a specific property key. TypeScript intelligently uses this as a Type Guard to narrow down union types based on the existence of that property.<code>if ('swim' in animal) { animal.swim(); }</code>"
    },
    {
      "section": "tn-truthiness",
      "question": "How many falsy values in JavaScript?",
      "options": [
        "4",
        "5",
        "<code>6</code>",
        "7"
      ],
      "answerIndex": 2,
      "explanation": "Truthiness narrowing uses a simple if-statement (if (value)) to filter out all falsy values (like null, undefined, 0, and empty strings). It's the most common way to ensure a variable actually exists.<code>if (user) { console.log(user.name); }</code>"
    },
    {
      "section": "tn-typeof",
      "question": "<code>typeof undefined</code> returns?",
      "options": [
        "null",
        "<code>'undefined'</code>",
        "object",
        "void"
      ],
      "answerIndex": 1,
      "explanation": "The 'typeof' operator is the standard Type Guard for primitives (string, number, boolean, symbol). It guarantees to TypeScript that inside the block, the variable is strictly that primitive type.<code>if (typeof val === 'number') { val.toFixed(2); }</code>"
    },
    {
      "section": "tn-typeof",
      "question": "<code>typeof null</code> returns? (the trap!)",
      "options": [
        "null",
        "undefined",
        "<code>'object'</code>",
        "NaN"
      ],
      "answerIndex": 2,
      "explanation": "Type narrowing is the process where TypeScript analyzes your logic (like if-statements) to refine a broad type (like string | number) into a more specific, narrower type (like string) for a specific block of code.<code>let id: string | number;\n// Narrowing safely unlocks methods!</code>"
    },
    {
      "section": "tn-instanceof",
      "question": "<code>instanceof</code> checks against?",
      "options": [
        "Primitives",
        "Types",
        "<b>Class constructors</b>",
        "Interfaces"
      ],
      "answerIndex": 2,
      "explanation": "The 'instanceof' operator checks if an object was constructed by a specific Class. It is the go-to Type Guard for narrowing down complex class instances (like Error, Date, or your custom classes).<code>if (err instanceof Error) { console.log(err.message); }</code>"
    },
    {
      "section": "tn-discrim",
      "question": "Discriminated unions use a shared ___ property?",
      "options": [
        "Optional",
        "Private",
        "<b>Literal tag/kind</b>",
        "Generic"
      ],
      "answerIndex": 2,
      "explanation": "When narrowing a Discriminated Union (where all shapes share a 'kind' or 'type' property), checking that property inside an if or switch statement acts as a perfect type guard, revealing the exact object shape.<code>if (shape.kind === 'square') shape.size;</code>"
    },
    {
      "section": "tn-predicate",
      "question": "Custom type predicate uses keyword?",
      "options": [
        "typeof",
        "instanceof",
        "as",
        "<code>is</code>"
      ],
      "answerIndex": 3,
      "explanation": "A Custom Type Guard is a function that returns a boolean but has a special return type annotation called a Type Predicate ('arg is Type'). This tells the TS compiler to trust the function's narrowing logic.<code>function isDog(pet: any): pet is Dog { ... }</code>"
    },
    {
      "section": "tn-never",
      "question": "Exhaustive check uses which type?",
      "options": [
        "void",
        "unknown",
        "any",
        "<code>never</code>"
      ],
      "answerIndex": 3,
      "explanation": "Exhaustive checking ensures you handled every possible case in a union. If you add a new type to a union later, assigning the leftover value to 'never' in the default case will throw a brilliant compile-time error!<code>default:\n  const _exhaustiveCheck: never = shape;\n  return _exhaustiveCheck; // Catches missing cases!</code>"
    },
    {
      "section": "tn-typeof",
      "question": "What output?<br><code>let x: string|number = 'hi'; if(typeof x==='string') x.toUpperCase()</code>",
      "options": [
        "Error",
        "<code>'HI'</code>",
        "undefined",
        "string|number"
      ],
      "answerIndex": 1,
      "explanation": "The 'typeof' guard completely fails for arrays, objects, and null, because JavaScript's 'typeof' operator returns 'object' for all of them! You must use 'Array.isArray()' or 'instanceof' instead.<code>typeof [1, 2]; // 'object' (Useless!)</code>"
    },
    {
      "section": "tn-truthiness",
      "question": "Which is NOT a falsy value?",
      "options": [
        "0",
        "''",
        "null",
        "<code>[] (empty array)</code>"
      ],
      "answerIndex": 3,
      "explanation": "To quickly narrow away 'null' and 'undefined' from a type like 'string | null', just use truthiness narrowing (if (value)). Inside the block, TypeScript knows it must be a valid string!<code>if (name) { name.toUpperCase(); }</code>"
    },
    {
      "section": "tn-what",
      "question": "Type narrowing means?",
      "options": [
        "Adding types",
        "<b>Refining a broad type to a specific one</b>",
        "Removing types",
        "Converting types"
      ],
      "answerIndex": 1,
      "explanation": "Once you successfully narrow a union type (e.g., using typeof id === 'string'), TypeScript intelligently applies that specific type to the variable, but ONLY within that specific code block.<code>if (typeof id === 'string') {\n  // id is ONLY a string here!\n}</code>"
    },
    {
      "section": "tn-equality",
      "question": "<code>x === null</code> narrows x to?",
      "options": [
        "any",
        "<b>null</b>",
        "undefined",
        "never"
      ],
      "answerIndex": 1,
      "explanation": "Equality narrowing uses operators like ===, !==, ==, and !=. If you check 'x === y', TypeScript realizes that x and y must be identical types inside that block, and gracefully narrows them both.<code>if (status === 'success') { ... }</code>"
    }
  ],
  "objects.html": [
    {
      "section": "obj-access",
      "question": "Two notations to access properties?",
      "options": [
        "<b>Dot and bracket</b>",
        "Dot and colon",
        "Arrow and bracket",
        "Dot and hash"
      ],
      "answerIndex": 0,
      "explanation": "You can access object properties using either dot notation (obj.name) or bracket notation (obj['name']). Bracket notation is especially useful when the key has spaces or is stored dynamically inside a variable.<code>let key = 'age';\nconsole.log(user[key]); // Dynamic access!</code>"
    },
    {
      "section": "obj-access",
      "question": "When must you use bracket notation?",
      "options": [
        "Always",
        "<b>Dynamic keys or special characters</b>",
        "Never",
        "Only arrays"
      ],
      "answerIndex": 1,
      "explanation": "Because bracket notation requires a string, you must pass the property name wrapped in quotes unless you are using a variable.<code>const user = { role: 'admin' };\nuser['role']; // correct\nuser[role]; // Error: role is not defined</code>"
    },
    {
      "section": "obj-intersection",
      "question": "Intersection type uses which symbol?",
      "options": [
        "|",
        "<code>&</code>",
        "+",
        "*"
      ],
      "answerIndex": 1,
      "explanation": "You can intersect two object types using the '&' operator. The resulting type is a single merged object that requires all the properties from both intersecting types.<code>type UserInfo = { id: number } & { name: string };</code>"
    },
    {
      "section": "obj-constructor",
      "question": "What does a constructor do?",
      "options": [
        "Destroys object",
        "<b>Initializes properties at creation</b>",
        "Copies object",
        "Validates type"
      ],
      "answerIndex": 1,
      "explanation": "In JavaScript, you create objects using object literal syntax '{}', or by instantiating a Class using the 'new' keyword.<code>const p = new Point(); // Class instantiation</code>"
    },
    {
      "section": "obj-class",
      "question": "Preferred approach for typed objects?",
      "options": [
        "Direct",
        "Inline",
        "Type alias",
        "<code>Class</code>"
      ],
      "answerIndex": 3,
      "explanation": "Object types can also be defined by declaring a Class. Classes serve as both a blueprint for creating objects at runtime, and as a strict type definition for TypeScript during compile time.<code>class Car { brand: string; }</code>"
    },
    {
      "section": "obj-modify",
      "question": "Can you add new properties to a typed object?",
      "options": [
        "Yes",
        "<b>No (type error)</b>",
        "Only optional ones",
        "Only at runtime"
      ],
      "answerIndex": 1,
      "explanation": "TypeScript uses strict structural typing for objects. If you try to assign or access a property that wasn't explicitly defined in the object's type annotation, the compiler throws an error.<code>let user: { name: string } = { name: 'Bob' };\nuser.age = 20; // Error: 'age' does not exist!</code>"
    },
    {
      "section": "obj-access",
      "question": "<code>obj.name</code> vs <code>obj['name']</code>  --  same result?",
      "options": [
        "<b>Yes</b>",
        "No",
        "Only for strings",
        "Only for numbers"
      ],
      "answerIndex": 0,
      "explanation": "Dot notation is the cleaner and preferred way to access properties when you know the exact name of the property. Bracket notation is required when the key contains dashes (e.g., obj['first-name']).<code>let data = { 'first-name': 'Jo' };\ndata.first-name; // Syntax Error!</code>"
    },
    {
      "section": "obj-intersection",
      "question": "<code>type A={x:1}; type B={y:2}; const c:A&B={x:1,y:2}</code>  --  valid?",
      "options": [
        "<b>Yes</b>",
        "No",
        "Runtime error",
        "Missing type"
      ],
      "answerIndex": 0,
      "explanation": "Intersection types are extremely useful for combining multiple smaller, reusable types into one massive object type. It is the 'Type Alias' equivalent of interface inheritance.<code>type FullData = BasicData & MetaData;</code>"
    },
    {
      "section": "obj-inline",
      "question": "What happens if required property is missing?",
      "options": [
        "undefined",
        "null",
        "<b>Compile error</b>",
        "Runtime error"
      ],
      "answerIndex": 2,
      "explanation": "When you assign an object literal to a typed variable, it must satisfy the type completely. If the type requires a property (like 'x') and you omit it, TypeScript throws an error.<code>let point: { x: number } = {}; // Error: missing 'x'!</code>"
    },
    {
      "section": "obj-modify",
      "question": "<code>const obj = {a:1}; obj.b = 2;</code>  --  what happens?",
      "options": [
        "Works",
        "<b>Error (property 'b' doesn't exist)</b>",
        "undefined",
        "null"
      ],
      "answerIndex": 1,
      "explanation": "Properties on an object can be easily modified by assigning them a new value, as long as the new value perfectly matches the type defined for that property.<code>let user = { age: 20 };\nuser.age = 30; // OK!</code>"
    },
    {
      "section": "obj-what",
      "question": "Objects store data as?",
      "options": [
        "Arrays",
        "<b>Key-value pairs</b>",
        "Strings",
        "Indices"
      ],
      "answerIndex": 1,
      "explanation": "An object in JavaScript is a collection of key-value pairs wrapped in curly braces {}. It is the most fundamental way to group related data together.<code>const user = {\n  name: 'Alice',\n  age: 25\n};</code>"
    },
    {
      "section": "obj-direct",
      "question": "<code>const obj = {x:1}</code> is?",
      "options": [
        "Class instance",
        "<b>Object literal</b>",
        "Array",
        "Tuple"
      ],
      "answerIndex": 1,
      "explanation": "If you don't provide an explicit type annotation, TypeScript will use Type Inference to automatically generate an object type based on the properties and values you provided in the literal.<code>const p = { x: 1 };\n// TS infers: { x: number }</code>"
    },
    {
      "section": "obj-alias",
      "question": "<code>type Point = {x:number, y:number}</code>  --  Point is?",
      "options": [
        "Variable",
        "<b>Type alias for object shape</b>",
        "Class",
        "Interface"
      ],
      "answerIndex": 1,
      "explanation": "You can define the strict shape of an object using either an 'interface' or a 'type' alias. This makes your code highly reusable and much cleaner than writing inline annotations.<code>type Point = { x: number, y: number };</code>"
    },
    {
      "section": "obj-mistakes",
      "question": "Common mistake: accessing undefined property?",
      "options": [
        "Error thrown",
        "<b>Returns undefined silently</b>",
        "Returns null",
        "Returns 0"
      ],
      "answerIndex": 1,
      "explanation": "A common mistake is assuming that accessing a non-existent property on a dynamic object (like 'any') throws an error. It doesn't! It silently returns 'undefined', which can cause nasty bugs later down the line.<code>let data: any = {};\nconsole.log(data.missing); // Logs 'undefined'</code>"
    }
  ],
  "classes-basics.html": [
    {
      "section": "cls-readonly",
      "question": "<code>readonly</code> means?",
      "options": [
        "Can't read",
        "<b>Assign once, then never changed</b>",
        "Private",
        "Static"
      ],
      "answerIndex": 1,
      "explanation": "The 'readonly' modifier ensures that a property can only be assigned a value once (either where it is declared or inside the constructor). Once initialized, it can never be changed again.<code>class Car {\n  readonly wheels = 4;\n}</code>"
    },
    {
      "section": "cls-static",
      "question": "<code>static</code> belongs to?",
      "options": [
        "Instance",
        "<b>The class itself</b>",
        "Constructor",
        "Module"
      ],
      "answerIndex": 1,
      "explanation": "A 'static' property belongs to the Class itself, NOT to the individual object instances created from it. You access it by calling the class name directly (e.g., Math.PI or User.count).<code>class User {\n  static count = 0;\n}\nconsole.log(User.count);</code>"
    },
    {
      "section": "cls-static",
      "question": "Access static member how?",
      "options": [
        "this.member",
        "<code>ClassName.member</code>",
        "new Class().member",
        "super.member"
      ],
      "answerIndex": 1,
      "explanation": "Static members are perfectly suited for utility functions, configuration constants, or tracking data across all instances (like keeping a count of how many times a Class was instantiated).<code>class MathUtils {\n  static add(a: number, b: number) { return a + b; }\n}</code>"
    },
    {
      "section": "cls-optional",
      "question": "<code>?</code> after property name means?",
      "options": [
        "Required",
        "Nullable",
        "<code>Optional</code>",
        "Readonly"
      ],
      "answerIndex": 2,
      "explanation": "You can mark a class property as optional using the question mark (?). This tells TypeScript that it is perfectly fine if the property is never assigned a value; it will simply default to 'undefined'.<code>class Person {\n  middleName?: string;\n}</code>"
    },
    {
      "section": "cls-shorthand",
      "question": "Constructor parameter properties shorthand does?",
      "options": [
        "Overloads",
        "<b>Declares + assigns in constructor params</b>",
        "Creates static",
        "Makes readonly"
      ],
      "answerIndex": 1,
      "explanation": "Parameter Properties are a fantastic TypeScript shortcut. By adding a visibility modifier (public, private, protected) directly to a constructor parameter, TS automatically creates and assigns that property for you behind the scenes!<code>constructor(public id: number) { }\n// Replaces 3 lines of boilerplate code!</code>"
    },
    {
      "section": "cls-method-overload",
      "question": "Can methods be overloaded in a class?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only constructors",
        "Only static"
      ],
      "answerIndex": 1,
      "explanation": "Just like standard functions, Class methods can be completely overloaded. You provide multiple signatures followed by a single implementation method to handle all the different ways the method can be called.<code>class Greeter {\n  sayHi(): void;\n  sayHi(name: string): void;\n  sayHi(name?: string) { ... }\n}</code>"
    },
    {
      "section": "cls-static",
      "question": "<code>class C { static count = 0 }</code>  --  how to access?",
      "options": [
        "this.count",
        "<code>C.count</code>",
        "new C().count",
        "count"
      ],
      "answerIndex": 1,
      "explanation": "Because a static property lives on the Class blueprint itself, you cannot access it using 'this' from inside a normal instance method. You must use the Class name instead.<code>class App {\n  static version = '1.0';\n  log() { console.log(App.version); }\n}</code>"
    },
    {
      "section": "cls-readonly",
      "question": "<code>class C { readonly id: number }</code>  --  can id change after constructor?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Only in methods",
        "Only if public"
      ],
      "answerIndex": 1,
      "explanation": "If you try to reassign a 'readonly' property anywhere outside of the constructor, the TypeScript compiler will throw a strict error preventing the mutation.<code>class User {\n  readonly id: number;\n  constructor(id: number) { this.id = id; }\n  change() { this.id = 2; } // Error!</code>"
    },
    {
      "section": "cls-ctor-overload",
      "question": "What does constructor overloading require?",
      "options": [
        "Multiple constructors",
        "<b>Multiple signatures + single implementation</b>",
        "Factory pattern",
        "Builder pattern"
      ],
      "answerIndex": 1,
      "explanation": "When overloading methods, the actual implementation must have a flexible signature (using optional parameters or unions) that can successfully handle all the strict signatures defined above it.<code>// The implementation must catch all overloads!\nparse(data: any) { ... }</code>"
    },
    {
      "section": "cls-optional",
      "question": "<code>class C { name?: string }</code>  --  <code>new C().name</code> is?",
      "options": [
        "''",
        "null",
        "<code>undefined</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "Because optional properties might be undefined, you must use strict checks or optional chaining (this.name?.toUpperCase()) before interacting with them to avoid runtime crashes.<code>if (this.middleName) {\n  console.log(this.middleName);\n}</code>"
    },
    {
      "section": "cls-student",
      "question": "A class is a?",
      "options": [
        "Function",
        "<b>Blueprint for creating objects</b>",
        "Variable",
        "Module"
      ],
      "answerIndex": 1,
      "explanation": "A Class acts as a blueprint for creating multiple objects that share the exact same structure and behavior. It encapsulates both data (properties) and actions (methods) into one clean package.<code>class Animal {\n  name: string;\n  speak() { ... }\n}</code>"
    },
    {
      "section": "cls-usage",
      "question": "<code>new Student('Joe')</code> creates?",
      "options": [
        "Class",
        "Type",
        "<b>Instance/object</b>",
        "Function"
      ],
      "answerIndex": 2,
      "explanation": "To create a real, usable object from a Class blueprint, you must instantiate it using the 'new' keyword. This calls the class constructor and returns a fresh object in memory.<code>const dog = new Animal();</code>"
    }
  ],
  "classes-inheritance.html": [
    {
      "section": "inh-access",
      "question": "Which modifier allows child class access but NOT outside?",
      "options": [
        "public",
        "<code>protected</code>",
        "private",
        "readonly"
      ],
      "answerIndex": 1,
      "explanation": "TypeScript offers three visibility modifiers. 'public' (default) means the property is accessible everywhere. 'protected' means it's accessible inside the class and its subclasses. 'private' means it is ONLY accessible inside that exact class.<code>class Secret { private pin = 1234; }</code>"
    },
    {
      "section": "inh-super-ctor",
      "question": "What keyword calls parent constructor?",
      "options": [
        "this",
        "parent",
        "<code>super</code>",
        "base"
      ],
      "answerIndex": 2,
      "explanation": "If a child class has its own 'constructor()', it is strictly required to call 'super()' before it can ever use the 'this' keyword. 'super()' executes the parent's constructor to set up the inherited data.<code>constructor() {\n  super(); // Must be first!\n  this.age = 5;\n}</code>"
    },
    {
      "section": "inh-access",
      "question": "Can private members be accessed in child classes?",
      "options": [
        "Yes",
        "<b>No</b>",
        "With super",
        "If static"
      ],
      "answerIndex": 1,
      "explanation": "The 'private' modifier strictly locks down a property. Even if another class 'extends' the parent, the child class completely lacks access to the parent's private properties.<code>class A { private x = 1; }\nclass B extends A { log() { this.x; } } // Error!</code>"
    },
    {
      "section": "inh-extends",
      "question": "<code>extends</code> keyword does?",
      "options": [
        "Implements interface",
        "<b>Inherits from parent class</b>",
        "Creates mixin",
        "Adds type"
      ],
      "answerIndex": 1,
      "explanation": "Inheritance allows a child class to automatically receive all the properties and methods from a parent class. It is achieved using the 'extends' keyword.<code>class Dog extends Animal { }</code>"
    },
    {
      "section": "inh-override",
      "question": "Method overriding means?",
      "options": [
        "Overloading",
        "<b>Child redefines parent's method</b>",
        "Creating new method",
        "Deleting method"
      ],
      "answerIndex": 1,
      "explanation": "Method Overriding happens when a child class defines a method with the exact same name as a method in its parent class. When called, the child's specific version of the method executes instead of the parent's generic version.<code>class Dog extends Animal {\n  speak() { console.log('Woof!'); }\n}</code>"
    },
    {
      "section": "inh-super-ctor",
      "question": "<code>super()</code> must be called ___ in child constructor?",
      "options": [
        "Last",
        "Anywhere",
        "<b>Before using this</b>",
        "After return"
      ],
      "answerIndex": 2,
      "explanation": "The 'super' keyword acts as a direct reference to the parent class. Calling 'super()' inside a constructor invokes the parent's constructor, while calling 'super.method()' invokes a specific parent method.<code>super.init(); // Calls parent's init method</code>"
    },
    {
      "section": "inh-super-prop",
      "question": "Can you access <code>super.property</code> in TypeScript?",
      "options": [
        "Yes",
        "<b>No (only methods)</b>",
        "Only public",
        "Only static"
      ],
      "answerIndex": 1,
      "explanation": "Because inheritance copies the parent's properties directly into the child object, you access inherited properties using the 'this' keyword just like normal properties.<code>class Dog extends Animal {\n  log() { console.log(this.name); }\n}</code>"
    },
    {
      "section": "inh-access",
      "question": "<code>public</code> is accessible from?",
      "options": [
        "Class only",
        "Class + children",
        "<b>Everywhere</b>",
        "Module only"
      ],
      "answerIndex": 2,
      "explanation": "Unlike 'private' which blocks children entirely, 'protected' acts as a family secret. The property is hidden from the outside public world, but perfectly accessible to the class and any child class that extends it.<code>class A { protected id = 1; }\nclass B extends A { log() { this.id; } } // Works!</code>"
    },
    {
      "section": "inh-parent-var",
      "question": "Parent variable holding child object  --  valid?",
      "options": [
        "No",
        "<b>Yes (polymorphism)</b>",
        "Only with cast",
        "Only interfaces"
      ],
      "answerIndex": 1,
      "explanation": "Polymorphism allows a variable typed as a Parent class to comfortably hold an instance of a Child class. This is because the child class perfectly guarantees it has all the behaviors of the parent!<code>let pet: Animal = new Dog(); // Polymorphism!</code>"
    },
    {
      "section": "inh-extends",
      "question": "<code>class Dog extends Animal</code>  --  Dog is the?",
      "options": [
        "Parent",
        "Base",
        "<b>Child/derived</b>",
        "Interface"
      ],
      "answerIndex": 2,
      "explanation": "You can only extend a single parent class. Unlike interfaces, TypeScript (and JavaScript) does not support multiple inheritance for classes to prevent conflicting behaviors.<code>class Child extends Father, Mother { } // ERROR!</code>"
    },
    {
      "section": "inh-what",
      "question": "Inheritance means?",
      "options": [
        "Copying code",
        "<b>Child class gets parent's properties/methods</b>",
        "Importing",
        "Mixing types"
      ],
      "answerIndex": 1,
      "explanation": "When inheriting from a parent, the child class can add its own entirely unique methods and properties that the parent knows nothing about.<code>class Dog extends Animal {\n  fetch() { console.log('Fetching!'); }\n}</code>"
    },
    {
      "section": "inh-constructor",
      "question": "Child constructor must call?",
      "options": [
        "this()",
        "new()",
        "<code>super()</code>",
        "parent()"
      ],
      "answerIndex": 2,
      "explanation": "If you don't define a constructor in the child class, TypeScript automatically calls the parent's constructor for you behind the scenes, passing along all arguments automatically.<code>class Dog extends Animal { }\n// Works instantly without boilerplate!</code>"
    },
    {
      "section": "inh-super-method",
      "question": "<code>super.method()</code> calls?",
      "options": [
        "Child method",
        "<b>Parent's version of the method</b>",
        "Static method",
        "Constructor"
      ],
      "answerIndex": 1,
      "explanation": "If you override a method in the child class but still want to use the parent's original logic, you can call 'super.methodName()' from inside the child's method.<code>speak() {\n  super.speak(); // Does the parent logic first\n  console.log('...and Woof!');\n}</code>"
    },
    {
      "section": "inh-access-demo",
      "question": "<code>protected</code> is accessible in?",
      "options": [
        "Anywhere",
        "<b>Class and subclasses only</b>",
        "Only the class",
        "Only subclasses"
      ],
      "answerIndex": 1,
      "explanation": "Using 'protected' is highly recommended when building complex class hierarchies where you want to hide internal variables from the public API but still let subclasses tweak or read them.<code>protected calculateHash() { ... }</code>"
    }
  ],
  "interfaces.html": [
    {
      "section": "if-implement",
      "question": "Keyword to make class follow an interface?",
      "options": [
        "extends",
        "uses",
        "<code>implements</code>",
        "follows"
      ],
      "answerIndex": 2,
      "explanation": "The 'implements' keyword binds a class to an Interface contract. It forces the class to actively define every single property and method outlined in the interface. If it misses one, TS throws an error!<code>class Bird implements Flyer {\n  fly() { console.log('Flying!'); }\n}</code>"
    },
    {
      "section": "if-extend",
      "question": "Can interfaces extend other interfaces?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only with type",
        "Only one"
      ],
      "answerIndex": 1,
      "explanation": "Interfaces can effortlessly inherit properties from other interfaces using the 'extends' keyword. This allows you to build highly modular, layered object definitions without duplicating code.<code>interface Admin extends User {\n  adminLevel: number;\n}</code>"
    },
    {
      "section": "if-abstract",
      "question": "Abstract method in interface has?",
      "options": [
        "Full body",
        "Default value",
        "<b>Signature only, no body</b>",
        "Static keyword"
      ],
      "answerIndex": 2,
      "explanation": "An Interface is a completely abstract 'contract' -- it only describes the shape of data, never the actual implementation or logic. It compiles entirely away and leaves zero footprint in your final JavaScript.<code>interface Shape { area(): number; } // No {} logic!</code>"
    },
    {
      "section": "if-index",
      "question": "What is an index signature?",
      "options": [
        "Array index",
        "<b>Allows dynamic/unknown property names</b>",
        "enum index",
        "Loop index"
      ],
      "answerIndex": 1,
      "explanation": "An Index Signature allows you to define an object that can hold an infinite number of properties, as long as the keys and values match specific types. It's perfect for dynamic dictionaries or caches.<code>interface Cache { \n  [key: string]: string; \n}</code>"
    },
    {
      "section": "if-basic",
      "question": "Can you create an instance of an interface?",
      "options": [
        "Yes",
        "<b>No</b>",
        "With new",
        "With create"
      ],
      "answerIndex": 1,
      "explanation": "Interfaces are the gold standard for defining the structural shape of complex Objects in TypeScript. They are often preferred over Type Aliases because they provide clearer error messages and support 'declaration merging'.<code>interface User { id: number; name: string; }</code>"
    },
    {
      "section": "if-implement",
      "question": "Class doesn't implement all interface methods?",
      "options": [
        "Warning",
        "<b>Compile error</b>",
        "Runtime error",
        "Works fine"
      ],
      "answerIndex": 1,
      "explanation": "When a class implements an interface, it must ensure that all properties are correctly typed. The interface acts as a strict checklist that the class must pass before compiling.<code>interface Runner { speed: number; }</code>"
    },
    {
      "section": "if-implement",
      "question": "Can a class implement multiple interfaces?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Max 2",
        "Only with extends"
      ],
      "answerIndex": 1,
      "explanation": "A class can implement multiple interfaces at the same time by separating them with commas. This is incredibly powerful for mixing different behavioral contracts together (e.g., implements Flyer, Swimmer).<code>class Duck implements Flyer, Swimmer { ... }</code>"
    },
    {
      "section": "if-basic",
      "question": "<code>interface A {x:number} interface A {y:string}</code>  --  what happens?",
      "options": [
        "Error",
        "<b>Declaration merging (A has x AND y)</b>",
        "Overwritten",
        "Only last"
      ],
      "answerIndex": 1,
      "explanation": "Because TypeScript uses 'structural typing', any object literal that has the exact properties required by an interface will automatically be accepted, even if it wasn't explicitly created from a class.<code>let p: Point = { x: 10, y: 20 }; // Works perfectly!</code>"
    },
    {
      "section": "if-readonly",
      "question": "<code>readonly</code> in interface means?",
      "options": [
        "Private",
        "Optional",
        "<b>Can't reassign after creation</b>",
        "Static"
      ],
      "answerIndex": 2,
      "explanation": "You can mark interface properties as 'readonly'. This ensures that any object or class using this interface cannot mutate that property after it has been initialized.<code>interface Item {\n  readonly id: string;\n}</code>"
    },
    {
      "section": "if-abstract-class",
      "question": "Interface vs abstract class  --  which has NO implementation?",
      "options": [
        "Abstract class",
        "<b>Interface</b>",
        "Both",
        "Neither"
      ],
      "answerIndex": 1,
      "explanation": "An Abstract Class is a hybrid between an interface and a standard class. It can provide concrete implementation logic (like a class) AND abstract method signatures that children must implement (like an interface).<code>abstract class Base { \n  log() { } // Real logic\n  abstract doX(): void; // Abstract signature\n}</code>"
    },
    {
      "section": "if-optional",
      "question": "<code>name?: string</code> in interface means?",
      "options": [
        "Must be string",
        "<b>Optional, may be undefined</b>",
        "Nullable",
        "Default empty"
      ],
      "answerIndex": 1,
      "explanation": "Just like types and classes, interfaces fully support optional properties using the question mark (?). This is heavily used for options/configuration objects where you don't want to force the user to provide every setting.<code>interface FetchOptions { method?: string; }</code>"
    },
    {
      "section": "if-what",
      "question": "An interface defines?",
      "options": [
        "Implementation",
        "<b>A contract/shape that objects must follow</b>",
        "A class",
        "A function"
      ],
      "answerIndex": 1,
      "explanation": "Interfaces support 'Declaration Merging'. If you define the exact same interface twice in a file, TypeScript will automatically merge their properties together into one massive interface! Type aliases cannot do this.<code>interface A { x: number }\ninterface A { y: number } // A now has x AND y!</code>"
    },
    {
      "section": "if-rules",
      "question": "Can a class implement multiple interfaces?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only 2",
        "Only with extends"
      ],
      "answerIndex": 1,
      "explanation": "Because interfaces only declare structure and contain zero implementation logic, it is perfectly safe for a class to implement ten different interfaces simultaneously without worrying about logic conflicts.<code>class SuperHero implements Flyer, Fighter, Healer { }</code>"
    },
    {
      "section": "if-mistakes",
      "question": "Common mistake: adding implementation in interface?",
      "options": [
        "It's fine",
        "<b>Interfaces only declare, not implement</b>",
        "Required",
        "Optional"
      ],
      "answerIndex": 1,
      "explanation": "One of the biggest mistakes beginners make is trying to write actual function logic (like { return x; }) inside an interface. Interfaces strictly define the 'what', while Classes/Objects define the 'how'.<code>interface Math {\n  // Only the signature, NO curly braces!\n  add(a: number): number;\n}</code>"
    }
  ],
  "generics.html": [
    {
      "section": "gn-what",
      "question": "<code>T</code> conventionally stands for?",
      "options": [
        "Template",
        "<code>Type</code>",
        "Token",
        "Target"
      ],
      "answerIndex": 1,
      "explanation": "Generics allow you to write flexible, reusable code that works with any data type while still maintaining strict type safety. The '<T>' defines a 'Type Variable' that captures the type passed in by the user.<code>function wrap&lt;T&gt;(val: T): T[] { return [val]; }</code>"
    },
    {
      "section": "gn-constraint",
      "question": "<code>extends</code> in generics does?",
      "options": [
        "Inherits",
        "<b>Constrains the type</b>",
        "Creates subtype",
        "Extends class"
      ],
      "answerIndex": 1,
      "explanation": "Generic Constraints use the 'extends' keyword to restrict the types that can be passed into a generic. For example, '<T extends { length: number }>' forces the generic type to be an array, string, or any object possessing a 'length' property.<code>function logLength&lt;T extends { length: number }&gt;(arg: T) { ... }</code>"
    },
    {
      "section": "gn-what",
      "question": "<code>K</code> conventionally stands for?",
      "options": [
        "Kind",
        "<code>Key</code>",
        "Keyword",
        "Klass"
      ],
      "answerIndex": 1,
      "explanation": "It is industry convention to use single uppercase letters for generic type variables. 'T' stands for Type, 'K' for Key, 'V' for Value, and 'E' for Element. However, you can name them whatever you want (like &lt;MyType&gt;).<code>class Pair&lt;K, V&gt; { key: K; value: V; }</code>"
    },
    {
      "section": "gn-func",
      "question": "<code>function id&lt;T&gt;(val:T):T</code>  --  what does this do?",
      "options": [
        "Converts type",
        "<b>Returns same type as input</b>",
        "Creates new type",
        "Error"
      ],
      "answerIndex": 1,
      "explanation": "When calling a generic function, you explicitly pass the desired type inside angle brackets &lt;&gt; directly before the function parentheses. This strictly locks the function's internal 'T' to that specific type.<code>let result = myFunc&lt;string&gt;('hello');</code>"
    },
    {
      "section": "gn-iface",
      "question": "Can interfaces be generic?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only classes",
        "Only functions"
      ],
      "answerIndex": 1,
      "explanation": "Generics are fully supported in Interfaces, Classes, Type Aliases, and Functions. They are incredibly powerful for creating reusable data structures, like a 'Box' that can hold literally any type of item securely.<code>interface Box&lt;T&gt; { contents: T; }</code>"
    },
    {
      "section": "gn-constraint",
      "question": "<code>&lt;T extends string&gt;</code> means T must be?",
      "options": [
        "Exactly string",
        "<b>string or subtype of string</b>",
        "Any type",
        "Not string"
      ],
      "answerIndex": 1,
      "explanation": "Without a constraint, TypeScript assumes 'T' could be absolutely anything (like a number), so accessing properties like 'T.length' throws an error. Constraints prove to the compiler that the property absolutely exists.<code>function log&lt;T extends { id: number }&gt;(item: T) {\n  console.log(item.id); // Safe!\n}</code>"
    },
    {
      "section": "gn-default",
      "question": "Default type parameter syntax?",
      "options": [
        "<code>T?</code>",
        "<code>&lt;T = string&gt;</code>",
        "<code>T:string</code>",
        "<code>T||string</code>"
      ],
      "answerIndex": 1,
      "explanation": "Just like default function parameters, you can provide Default Generic Types. If the developer doesn't explicitly pass a type in the angle brackets, TypeScript will automatically fall back to the default type.<code>interface Response&lt;Data = any&gt; { data: Data; }</code>"
    },
    {
      "section": "gn-builtin",
      "question": "<code>Array&lt;number&gt;</code> is same as?",
      "options": [
        "Array(number)",
        "<code>number[]</code>",
        "[number]",
        "array:number"
      ],
      "answerIndex": 1,
      "explanation": "Many built-in JavaScript objects are inherently generic in TypeScript. 'Array&lt;T&gt;' requires you to specify the type of its elements, and 'Promise&lt;T&gt;' requires you to specify the type of data it will eventually resolve with.<code>let asyncData: Promise&lt;string&gt;;</code>"
    },
    {
      "section": "gn-func",
      "question": "<code>function first&lt;T&gt;(arr:T[]):T { return arr[0] }</code>  --  <code>first([1,2,3])</code> returns type?",
      "options": [
        "any",
        "T",
        "T[]",
        "<code>number</code>"
      ],
      "answerIndex": 3,
      "explanation": "Generics shine in utility functions because they mathematically link the input type to the output type. If you pass an array of numbers, TypeScript guarantees the return type is a single number, not 'any'.<code>function getFirst&lt;T&gt;(arr: T[]): T { return arr[0]; }</code>"
    },
    {
      "section": "gn-multi",
      "question": "Can generic classes have multiple type params?",
      "options": [
        "No",
        "<b>Yes: &lt;T,U&gt;</b>",
        "Max 2",
        "Only with extends"
      ],
      "answerIndex": 1,
      "explanation": "A single function or class can comfortably accept multiple generic type parameters by separating them with commas.<code>function merge&lt;T, U&gt;(obj1: T, obj2: U): T & U { ... }</code>"
    },
    {
      "section": "gn-class",
      "question": "<code>class Box&lt;T&gt; {value:T}</code>  --  T is resolved when?",
      "options": [
        "Compile time",
        "<b>When creating an instance</b>",
        "Runtime",
        "Import time"
      ],
      "answerIndex": 1,
      "explanation": "A generic class acts as a flexible blueprint. When you instantiate the class (e.g., new Stack&lt;number&gt;()), every single method and property inside that specific instance becomes rigidly locked to the 'number' type.<code>class Queue&lt;T&gt; { data: T[] = []; }</code>"
    },
    {
      "section": "gn-patterns",
      "question": "<code>function identity&lt;T&gt;(x:T):T</code>  --  what is guaranteed?",
      "options": [
        "T is string",
        "<b>Input and output are same type</b>",
        "T is any",
        "Nothing"
      ],
      "answerIndex": 1,
      "explanation": "Thanks to Type Inference, you rarely need to explicitly write '&lt;string&gt;' when calling a generic function. TypeScript automatically looks at the argument you passed in and silently infers 'T' for you!<code>let val = getFirst(['A', 'B']); // TS infers T is string</code>"
    }
  ],
  "modules.html": [
    {
      "section": "mod-export",
      "question": "<code>export</code> does what?",
      "options": [
        "Imports code",
        "<b>Makes code available to other files</b>",
        "Runs code",
        "Compiles code"
      ],
      "answerIndex": 1,
      "explanation": "The 'export' keyword exposes a variable, function, class, or interface so that other files in your project can import and use it. Without 'export', everything inside the file remains completely private to that file.<code>export const PI = 3.14;</code>"
    },
    {
      "section": "mod-default",
      "question": "How many default exports per file?",
      "options": [
        "Unlimited",
        "Two",
        "<code>One</code>",
        "Zero"
      ],
      "answerIndex": 2,
      "explanation": "A file can have one (and only one) 'export default'. It represents the primary fallback or main feature of that module. It is imported without curly braces and can be renamed instantly by the importer.<code>export default class User { ... }\n// Import: import MyUser from './User';</code>"
    },
    {
      "section": "mod-import",
      "question": "Named export is imported with?",
      "options": [
        "No braces",
        "<code>{ name }</code>",
        "* as name",
        "default"
      ],
      "answerIndex": 1,
      "explanation": "When importing a standard 'named export', you MUST wrap the exact imported name in curly braces {}. The name must perfectly match the exported name, unless you rename it using the 'as' keyword.<code>import { add, subtract as sub } from './math';</code>"
    },
    {
      "section": "mod-type",
      "question": "<code>import type</code> does?",
      "options": [
        "Imports everything",
        "<b>Imports only type, removed at compile time</b>",
        "Imports default",
        "Creates type"
      ],
      "answerIndex": 1,
      "explanation": "In TypeScript, you can explicitly use 'import type' when importing interfaces or type aliases. This is a highly recommended optimization because the TS compiler will completely erase this import statement from the final compiled JavaScript file.<code>import type { UserData } from './api';</code>"
    },
    {
      "section": "mod-what",
      "question": "What makes a file a 'module'?",
      "options": [
        "export keyword",
        "<b>Having at least one import or export</b>",
        "File extension",
        "tsconfig setting"
      ],
      "answerIndex": 1,
      "explanation": "In modern JavaScript/TypeScript, any file that contains at least one top-level 'import' or 'export' statement is automatically treated as a Module. This means its variables are completely isolated and won't pollute the global scope.<code>// File has an export, it is isolated!</code>"
    },
    {
      "section": "mod-default",
      "question": "<code>export default</code> vs named  --  which needs braces on import?",
      "options": [
        "Default",
        "<b>Named</b>",
        "Both",
        "Neither"
      ],
      "answerIndex": 1,
      "explanation": "Default exports are completely anonymous to the importing file. You don't need curly braces, and you can give the imported value any name you want locally.<code>import AnyNameYouWant from './myDefaultModule';</code>"
    },
    {
      "section": "mod-import",
      "question": "<code>import * as Utils from './utils'</code> creates?",
      "options": [
        "Default import",
        "<b>Namespace import</b>",
        "Type import",
        "Side-effect import"
      ],
      "answerIndex": 1,
      "explanation": "Named exports allow a single file to export dozens of distinct utility functions or variables. Importers can use object destructuring syntax to cherry-pick only the specific functions they actually need.<code>export function a(){} export function b(){}</code>"
    },
    {
      "section": "mod-export",
      "question": "Re-exporting syntax?",
      "options": [
        "import then export",
        "<code>export { x } from './mod'</code>",
        "re-export x",
        "forward x"
      ],
      "answerIndex": 1,
      "explanation": "You can apply the 'export' keyword directly in front of the declaration (like 'export const x = 1;'), or you can declare everything normally and use a grouped export statement at the very bottom of the file ('export { x, y };').<code>const x = 1; const y = 2;\nexport { x, y };</code>"
    },
    {
      "section": "mod-default",
      "question": "Can you have both default and named exports?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only 1 named",
        "Only in TypeScript"
      ],
      "answerIndex": 1,
      "explanation": "While you can have unlimited Named exports in a file, you are strictly limited to exactly one Default export per file.<code>export default App; // Only one allowed!</code>"
    },
    {
      "section": "mod-import",
      "question": "<code>import './styles.css'</code>  --  this is?",
      "options": [
        "Default import",
        "Named import",
        "<b>Side-effect import</b>",
        "Type import"
      ],
      "answerIndex": 2,
      "explanation": "If an export name conflicts with a variable already existing in your current file, you can instantly rename the import using the 'as' keyword.<code>import { data as userData } from './api';</code>"
    },
    {
      "section": "mod-problem",
      "question": "Without modules, variables are?",
      "options": [
        "Private",
        "<b>Global (risk of name collisions)</b>",
        "Typed",
        "Scoped"
      ],
      "answerIndex": 1,
      "explanation": "Before ES Modules existed, all JavaScript files loaded via script tags dumped their variables into one giant shared global scope, causing massive naming collisions and spaghetti code dependencies. Modules securely isolate your code.<code>// Modules protect against global variable pollution.</code>"
    },
    {
      "section": "mod-full",
      "question": "A module is any file with?",
      "options": [
        "A class",
        "A function",
        "<b>import or export statement</b>",
        "A type"
      ],
      "answerIndex": 2,
      "explanation": "The Namespace Import syntax ('import * as Name') scoops up every single named export from a file and bundles them together into a single organized object.<code>import * as Math from './math';\nMath.add(1, 2);</code>"
    },
    {
      "section": "mod-rules",
      "question": "One file = one ___?",
      "options": [
        "Function",
        "<b>Module</b>",
        "Class",
        "Type"
      ],
      "answerIndex": 1,
      "explanation": "A module maps exactly 1-to-1 with a file. Each file acts as its own secure ecosystem, explicitly declaring its dependencies via 'import' and explicitly sharing its APIs via 'export'.<code>// utils.ts is exactly one module.</code>"
    }
  ],
  "async-await.html": [
    {
      "section": "as-await",
      "question": "<code>async</code> before a function does?",
      "options": [
        "Makes it sync",
        "<b>Makes it return a Promise</b>",
        "Blocks thread",
        "Delays execution"
      ],
      "answerIndex": 1,
      "explanation": "The 'async' keyword transforms a standard function into an asynchronous one. It guarantees that the function will always, without exception, return a Promise. If you return a primitive like 5, TS wraps it in Promise.resolve(5).<code>async function getNumber() { return 5; }</code>"
    },
    {
      "section": "as-await",
      "question": "<code>await</code> does?",
      "options": [
        "Runs in parallel",
        "<b>Pauses until Promise resolves</b>",
        "Creates Promise",
        "Throws error"
      ],
      "answerIndex": 1,
      "explanation": "The 'await' keyword pauses the execution of the surrounding async function until the Promise either resolves or rejects. It cleanly unwraps the Promise and returns the final resolved value directly.<code>let response = await fetch('/api');</code>"
    },
    {
      "section": "as-await",
      "question": "Can you use <code>await</code> outside async function?",
      "options": [
        "Yes always",
        "<b>Only at top-level in modules</b>",
        "Never",
        "Only in Node"
      ],
      "answerIndex": 1,
      "explanation": "The golden rule of modern JS is that you can ONLY use the 'await' keyword inside a function that has been explicitly marked with the 'async' keyword (excluding top-level await in modern modules).<code>async function run() {\n  await doSomething();\n}</code>"
    },
    {
      "section": "as-trycatch",
      "question": "What replaces <code>.catch()</code> in async/await?",
      "options": [
        "finally",
        "throw",
        "<code>try/catch</code>",
        "if/else"
      ],
      "answerIndex": 2,
      "explanation": "Because 'await' unwraps a Promise, if that Promise rejects (fails), 'await' literally throws an error synchronously. This allows you to catch async network errors using standard, clean 'try...catch' blocks instead of chaining .catch().<code>try { await fetch(); } catch (err) { }</code>"
    },
    {
      "section": "as-all",
      "question": "<code>Promise.all()</code> does?",
      "options": [
        "First wins",
        "<b>Runs parallel, fails if any fail</b>",
        "Runs sequential",
        "Ignores errors"
      ],
      "answerIndex": 1,
      "explanation": "Promise.all() takes an array of promises and runs them concurrently in parallel! It waits until ALL of them are successfully resolved, and returns a single array of their results. It's drastically faster than awaiting them one by one.<code>let [res1, res2] = await Promise.all([req1, req2]);</code>"
    },
    {
      "section": "as-callback",
      "question": "What is callback hell?",
      "options": [
        "Too many callbacks",
        "<b>Deeply nested callbacks</b>",
        "Slow callbacks",
        "Error callbacks"
      ],
      "answerIndex": 1,
      "explanation": "Before Promises and async/await, developers had to pass callbacks inside callbacks inside callbacks to handle sequential asynchronous tasks. This created unreadable, deeply nested code universally known as 'Callback Hell'.<code>// Async/await completely cures callback hell!</code>"
    },
    {
      "section": "as-race",
      "question": "<code>Promise.race()</code> resolves with?",
      "options": [
        "All results",
        "<b>First settled (fulfilled or rejected)</b>",
        "First success",
        "Last result"
      ],
      "answerIndex": 1,
      "explanation": "Promise.race() accepts an array of promises and immediately resolves or rejects the exact moment the VERY FIRST promise finishes. It completely ignores all the slower promises.<code>let winner = await Promise.race([req1, req2]);</code>"
    },
    {
      "section": "as-await",
      "question": "What output?<br><code>async function f(){return 5} f().then(v=>console.log(v))</code>",
      "options": [
        "Promise",
        "undefined",
        "<code>5</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "Because 'async' functions ALWAYS return a Promise, when you call them from a normal synchronous context, you must append '.then()' to handle the result.<code>async function get() { return 1; }\nget().then(res => console.log(res));</code>"
    },
    {
      "section": "as-await",
      "question": "<code>await</code> on a non-Promise value?",
      "options": [
        "Error",
        "<b>Returns the value directly</b>",
        "undefined",
        "Wraps in Promise"
      ],
      "answerIndex": 1,
      "explanation": "When you 'await' a promise, the main JavaScript thread is NOT blocked! The engine pauses only that specific async function, allowing the rest of your app (like UI rendering and event listeners) to run perfectly smoothly in the background.<code>await fetch(); // Non-blocking pause!</code>"
    },
    {
      "section": "as-trycatch",
      "question": "Error in async function without try/catch?",
      "options": [
        "Swallowed",
        "<b>Returned as rejected Promise</b>",
        "Crashes app",
        "Logged automatically"
      ],
      "answerIndex": 1,
      "explanation": "A massive advantage of async/await is that you can use standard 'try...catch' blocks to catch BOTH asynchronous network errors AND standard synchronous logic errors (like null references) all in the exact same block!<code>try { ... } catch (error) { console.log(error); }</code>"
    },
    {
      "section": "as-sync",
      "question": "Synchronous code runs?",
      "options": [
        "In parallel",
        "<b>Line by line, blocking</b>",
        "Randomly",
        "After async"
      ],
      "answerIndex": 1,
      "explanation": "Synchronous code executes strictly line-by-line. If a line of synchronous code takes 5 seconds to run, the entire browser tab completely freezes for 5 seconds. Asynchronous code solves this by offloading the waiting.<code>// Async prevents UI freezing!</code>"
    },
    {
      "section": "as-promise",
      "question": "async/await is built on top of?",
      "options": [
        "Callbacks",
        "<b>Promises</b>",
        "Events",
        "Timers"
      ],
      "answerIndex": 1,
      "explanation": "Under the hood, async/await is purely 'syntactic sugar' built directly on top of standard ES6 Promises. It doesn't introduce any new functionality; it just allows you to write Promise-based code that looks beautifully synchronous.<code>// It compiles down to Promises!</code>"
    },
    {
      "section": "as-create",
      "question": "<code>new Promise((resolve,reject)=>{...})</code> creates?",
      "options": [
        "Callback",
        "<b>A new Promise</b>",
        "Async function",
        "Timer"
      ],
      "answerIndex": 1,
      "explanation": "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states: 'Pending' (waiting), 'Fulfilled' (success, calling resolve), and 'Rejected' (failed, calling reject).<code>let p = new Promise((resolve) => resolve('Done!'));</code>"
    },
    {
      "section": "as-chain",
      "question": "Promise chaining uses?",
      "options": [
        "Callbacks",
        "await",
        "<code>.then().then()</code>",
        "for loops"
      ],
      "answerIndex": 2,
      "explanation": "Every single '.then()' implicitly returns a brand new Promise. This allows you to chain them endlessly, where the return value of one '.then()' is passed as the argument to the next '.then()'.<code>fetch().then(r => r.json()).then(data => data);</code>"
    },
    {
      "section": "as-patterns",
      "question": "Best practice: prefer async/await over?",
      "options": [
        "Promises",
        "<b>.then() chains (for readability)</b>",
        "Callbacks",
        "All of these"
      ],
      "answerIndex": 1,
      "explanation": "The industry standard is to always use async/await instead of raw .then() chains. Async/await makes error handling vastly easier (via try/catch), prevents scope issues, and makes sequential logic read like a standard book.<code>// Modern code relies almost entirely on async/await!</code>"
    }
  ],
  "error-handling.html": [
    {
      "section": "eh-error",
      "question": "Accessing undeclared variable throws?",
      "options": [
        "TypeError",
        "SyntaxError",
        "<code>ReferenceError</code>",
        "RangeError"
      ],
      "answerIndex": 2,
      "explanation": "A ReferenceError occurs when you try to access or use a variable that hasn't been declared or is out of scope (like accessing a 'let' block variable from the outside).<code>console.log(missingVar); // ReferenceError!</code>"
    },
    {
      "section": "eh-trycatch",
      "question": "Which block ALWAYS executes?",
      "options": [
        "try",
        "catch",
        "<code>finally</code>",
        "throw"
      ],
      "answerIndex": 2,
      "explanation": "The 'try' block contains risky code that might crash. The 'catch' block ONLY runs if an error occurs. The 'finally' block ALWAYS runs at the very end, regardless of success or failure. It's perfect for cleaning up resources or closing loaders.<code>finally { isLoading = false; }</code>"
    },
    {
      "section": "eh-unknown",
      "question": "In TypeScript, catch parameter type is?",
      "options": [
        "Error",
        "any",
        "<code>unknown</code>",
        "string"
      ],
      "answerIndex": 2,
      "explanation": "In modern TypeScript, caught errors default to type 'unknown' instead of 'any'. Because people can technically 'throw' strings or numbers, TS forces you to strictly check if the thrown item is an actual Error object before accessing it.<code>catch (e) { if (e instanceof Error) console.log(e.message); }</code>"
    },
    {
      "section": "eh-throw",
      "question": "<code>throw</code> keyword does?",
      "options": [
        "Logs error",
        "<b>Creates and throws an error</b>",
        "Catches error",
        "Stops program"
      ],
      "answerIndex": 1,
      "explanation": "The 'throw' keyword immediately terminates the current execution path and generates a custom error. You can throw anything, but you should ALWAYS throw an instantiated 'Error' object so you get a full stack trace.<code>throw new Error('User not found!');</code>"
    },
    {
      "section": "eh-custom",
      "question": "Custom error classes extend?",
      "options": [
        "Object",
        "<code>Error</code>",
        "Exception",
        "Throwable"
      ],
      "answerIndex": 1,
      "explanation": "You can build highly specific Custom Errors by creating a class that 'extends Error'. This allows you to add custom properties (like HTTP status codes) and easily differentiate errors in your catch blocks using 'instanceof'.<code>class AuthError extends Error { statusCode = 401; }</code>"
    },
    {
      "section": "eh-unknown",
      "question": "<code>unknown</code> vs <code>any</code> in catch  --  which is safer?",
      "options": [
        "any",
        "<b>unknown (forces type checking)</b>",
        "Same",
        "Neither"
      ],
      "answerIndex": 1,
      "explanation": "When a function throws an error, the engine aggressively jumps down the call stack, aborting every function until it finally hits the nearest 'catch' block. If it reaches the top without a catch, the app crashes!<code>// Uncaught errors bubble all the way up!</code>"
    },
    {
      "section": "eh-error",
      "question": "What does <code>error.stack</code> contain?",
      "options": [
        "Error message",
        "Error code",
        "<b>Call stack trace</b>",
        "File name"
      ],
      "answerIndex": 2,
      "explanation": "err.stack // \"Error: msg\\n at func (file:line)\""
    },
    {
      "section": "eh-result",
      "question": "Result pattern returns?",
      "options": [
        "throw/catch",
        "<b>Success or Error object</b>",
        "true/false",
        "Promise"
      ],
      "answerIndex": 1,
      "explanation": "Every instantiated Error object automatically receives a 'stack' property. This is a massive string detailing the exact file name, line number, and sequence of function calls that led perfectly up to the crash.<code>console.error(err.stack); // Crucial for debugging!</code>"
    },
    {
      "section": "eh-throw",
      "question": "<code>try{throw 'oops'}catch(e){console.log(typeof e)}</code> outputs?",
      "options": [
        "object",
        "Error",
        "<code>'string'</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The 'Result Object' pattern avoids 'throw' entirely. Instead of crashing, risky functions return a discriminated union object indicating success or failure. This forces developers to handle errors cleanly without try/catch blocks.<code>if (result.ok) { use(result.data); }</code>"
    },
    {
      "section": "eh-throw",
      "question": "Can you throw non-Error values?",
      "options": [
        "No",
        "<b>Yes (but not recommended)</b>",
        "Only strings",
        "Only numbers"
      ],
      "answerIndex": 1,
      "explanation": "A TypeError occurs when a value is not of the expected type, like trying to invoke a string as a function, or attempting to read a property from a 'null' or 'undefined' value.<code>let x = null;\nx.toUpperCase(); // TypeError!</code>"
    },
    {
      "section": "eh-what",
      "question": "Error handling prevents?",
      "options": [
        "Slow code",
        "<b>App crashes from unexpected errors</b>",
        "Type errors",
        "Warnings"
      ],
      "answerIndex": 1,
      "explanation": "You can technically throw strings (throw 'Error!'). However, this is heavily discouraged because raw strings do NOT generate a stack trace, making it nearly impossible to debug where the crash actually originated.<code>// Bad: throw 'Oops';\n// Good: throw new Error('Oops');</code>"
    },
    {
      "section": "eh-type-guard",
      "question": "Checking <code>error instanceof Error</code> before accessing .message is?",
      "options": [
        "Optional",
        "<b>A type guard (required in TS)</b>",
        "Unnecessary",
        "A bug"
      ],
      "answerIndex": 1,
      "explanation": "If an error is thrown inside an asynchronous Promise (or async function) and you don't 'catch' it, it creates an 'Unhandled Promise Rejection'. In modern Node.js, this will instantly crash your entire server process!<code>// Always catch your async errors!</code>"
    },
    {
      "section": "eh-async",
      "question": "Async errors need?",
      "options": [
        "Nothing special",
        "<b>try/catch around await</b>",
        "Only .catch()",
        "Global handler"
      ],
      "answerIndex": 1,
      "explanation": "The 'Error' class is the global base class for all built-in JavaScript errors. It natively provides the 'name' property (like 'TypeError') and the 'message' property (your custom text).<code>let err = new Error('Hi');\nerr.message; // 'Hi'</code>"
    },
    {
      "section": "eh-best",
      "question": "Best practice: throw Error objects not?",
      "options": [
        "Functions",
        "<b>Strings or numbers</b>",
        "Classes",
        "undefined"
      ],
      "answerIndex": 1,
      "explanation": "When using 'await', rejected promises act exactly like synchronous 'throw' statements. By wrapping your 'await' calls in a try/catch block, you can elegantly trap network failures without using messy .catch() callbacks.<code>try { await fetch(); } catch (e) { alert('Network failed'); }</code>"
    }
  ],
  "destructuring.html": [
    {
      "section": "ds-array",
      "question": "Array destructuring extracts by?",
      "options": [
        "Name",
        "<b>Position</b>",
        "Type",
        "Index name"
      ],
      "answerIndex": 1,
      "explanation": "Array destructuring pulls values out of an array sequentially based strictly on their position. The first variable gets index 0, the second gets index 1, and so on.<code>let [first, second] = ['A', 'B'];</code>"
    },
    {
      "section": "ds-object",
      "question": "Object destructuring extracts by?",
      "options": [
        "Position",
        "<b>Property name</b>",
        "Index",
        "Order"
      ],
      "answerIndex": 1,
      "explanation": "Object destructuring pulls values out of an object based strictly on the property keys. The order doesn't matter at all, but the variable names MUST exactly match the object's property keys.<code>let { age, name } = { name: 'Jo', age: 20 };</code>"
    },
    {
      "section": "ds-rename",
      "question": "Rename while destructuring: <code>{ name: newName",
      "options": [
        "Original",
        "<b>The new variable name</b>",
        "Alias type",
        "undefined"
      ],
      "answerIndex": 1,
      "explanation": "If you want to extract a property but give it a different variable name locally, use a colon (:). 'const { name: newName }' means: find the property 'name', and assign its value to a new variable called 'newName'.<code>let { id: userId } = { id: 5 }; // userId is 5</code>"
    },
    {
      "section": "ds-skip",
      "question": "Skip array elements how?",
      "options": [
        "Use null",
        "<b>Leave empty commas: [,third]</b>",
        "Use undefined",
        "Use skip()"
      ],
      "answerIndex": 1,
      "explanation": "In array destructuring, you can easily skip unwanted elements by leaving empty spaces between the commas.<code>let [,, third] = ['A', 'B', 'C']; // third is 'C'</code>"
    },
    {
      "section": "ds-default",
      "question": "Default values in destructuring?",
      "options": [
        "Not possible",
        "<b>Yes: {x = 5}</b>",
        "Only arrays",
        "Only objects"
      ],
      "answerIndex": 1,
      "explanation": "You can provide default values using the equals sign (=). If the property you are trying to extract is strictly 'undefined' (or missing), it will safely fall back to your default value instead of breaking.<code>let { role = 'guest' } = user;</code>"
    },
    {
      "section": "ds-params",
      "question": "Destructuring in function params?",
      "options": [
        "Not allowed",
        "<b>Yes</b>",
        "Only arrays",
        "Only objects"
      ],
      "answerIndex": 1,
      "explanation": "Destructuring function parameters is an incredibly common React/TS pattern. It unpacks the 'props' object immediately in the signature. You must provide the type annotation for the entire object after the destructured block.<code>function draw({ x, y }: { x: number, y: number }) { ... }</code>"
    },
    {
      "section": "ds-rest",
      "question": "<code>const {a, ...rest",
      "options": [
        "{a:1}",
        "[2,3]",
        "<code>{b:2,c:3}</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The 'rest' operator (...) cleanly scoops up any properties that weren't explicitly extracted and bundles them into a brand new object. It is a fantastic way to omit a specific property from an object.<code>let { id, ...data } = user; // data has everything except id</code>"
    },
    {
      "section": "ds-array",
      "question": "<code>const [a,b] = [1,2,3]</code>  --  valid?",
      "options": [
        "No",
        "<b>Yes (3 is ignored)</b>",
        "Error",
        "a=1,b=2,3 lost"
      ],
      "answerIndex": 1,
      "explanation": "Destructuring syntax looks exactly like constructing arrays/objects, but it happens on the LEFT side of the equals sign. It unpacks data instead of packing it.<code>let [x, y] = coordinates; // Unpacking!</code>"
    },
    {
      "section": "ds-nested",
      "question": "Nested destructuring: <code>const {a:{b",
      "options": [
        "{b:5}",
        "undefined",
        "<code>5</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "You can perform Deep Destructuring by nesting the curly braces to extract properties from deeply nested objects in a single line.<code>let { address: { city } } = user;</code>"
    },
    {
      "section": "ds-object",
      "question": "<code>const {length",
      "options": [
        "'hello'",
        "undefined",
        "<code>5</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "Object destructuring is incredibly safe. If you attempt to destructure a property that simply doesn't exist on the object, it doesn't crash; it merely assigns the value 'undefined' to your variable.<code>let { missing } = {}; // missing is undefined</code>"
    },
    {
      "section": "ds-rest",
      "question": "<code>const [a, ...rest] = [1,2,3,4]</code>  --  rest is?",
      "options": [
        "4",
        "[1,2,3,4]",
        "<code>[2,3,4]</code>",
        "undefined"
      ],
      "answerIndex": 2,
      "explanation": "The rest operator (...) must ALWAYS be the absolute last element in your destructuring pattern. You cannot put a variable after the rest operator because it consumes everything remaining.<code>let [first, ...rest] = arr; // Safe!</code>"
    },
    {
      "section": "ds-what",
      "question": "Destructuring means?",
      "options": [
        "Deleting data",
        "<b>Unpacking values from arrays/objects into variables</b>",
        "Copying objects",
        "Merging arrays"
      ],
      "answerIndex": 1,
      "explanation": "Destructuring is purely syntactic sugar for extracting properties into isolated variables. It radically reduces boilerplate code like 'const x = obj.x;' and makes passing configuration objects extremely elegant.<code>// Clean, concise, and modern!</code>"
    },
    {
      "section": "ds-mistakes",
      "question": "Common mistake: destructuring <code>undefined</code>?",
      "options": [
        "Returns null",
        "<b>Throws TypeError</b>",
        "Returns empty",
        "Works fine"
      ],
      "answerIndex": 1,
      "explanation": "While extracting a missing property safely returns 'undefined', attempting to destructure 'null' or 'undefined' itself will instantly throw a fatal TypeError and crash your app!<code>let obj = null;\nlet { a } = obj; // CRASH! Cannot read properties of null</code>"
    }
  ],
  "spread-rest.html": [
    {
      "section": "sr-what",
      "question": "Spread operator does?",
      "options": [
        "Collects",
        "<b>Expands/unpacks elements</b>",
        "Copies reference",
        "Merges types"
      ],
      "answerIndex": 1,
      "explanation": "The Spread operator (...) 'unpacks' or expands an iterable (like an array or string) into individual elements. It is heavily used inside array brackets to merge, clone, or insert items.<code>let combined = [...arr1, ...arr2];</code>"
    },
    {
      "section": "sr-rest-fn",
      "question": "Rest operator does?",
      "options": [
        "Expands",
        "<b>Collects remaining into array</b>",
        "Removes items",
        "Spreads"
      ],
      "answerIndex": 1,
      "explanation": "While Spread unpacks elements, the Rest parameter (...) does the exact opposite: it 'packs' or gathers an infinite number of loose arguments into a single array. It is only used in function signatures or destructuring.<code>function log(...msgs: string[]) { ... }</code>"
    },
    {
      "section": "sr-copy",
      "question": "Is spread a deep copy?",
      "options": [
        "Yes",
        "<b>No (shallow)</b>",
        "Depends",
        "Only for arrays"
      ],
      "answerIndex": 1,
      "explanation": "Spreading an object or array creates a 'Shallow Copy'. It creates a brand new top-level object, but if there are nested objects inside, those nested objects are NOT cloned -- they are shared by reference!<code>let clone = { ...original };</code>"
    },
    {
      "section": "sr-rest-fn",
      "question": "Rest parameter must be at?",
      "options": [
        "Start",
        "Middle",
        "<b>End</b>",
        "Anywhere"
      ],
      "answerIndex": 2,
      "explanation": "The Rest parameter MUST be the absolute last parameter in a function definition. It scoops up any remaining arguments, so placing a required parameter after it is logically impossible.<code>function add(first: number, ...others: number[]) { }</code>"
    },
    {
      "section": "sr-obj",
      "question": "Can you spread objects into arrays?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Only with Array.from",
        "Only iterables"
      ],
      "answerIndex": 1,
      "explanation": "When spreading multiple objects together, if they share the exact same property key, the object spread LAST will completely overwrite the previous ones. Order matters immensely!<code>let merged = { a: 1, ...{ a: 2 } }; // a is 2!</code>"
    },
    {
      "section": "sr-arr",
      "question": "<code>[...a, ...b]</code> does?",
      "options": [
        "Overwrites",
        "<b>Merges both arrays</b>",
        "Error",
        "Creates tuple"
      ],
      "answerIndex": 1,
      "explanation": "Before ES6, combining arrays required the verbose 'concat()' method. The spread operator allows you to merge arrays seamlessly and safely without mutating the originals.<code>let all = [0, ...evens, ...odds];</code>"
    },
    {
      "section": "sr-obj",
      "question": "<code>{...obj1, ...obj2",
      "options": [
        "Error",
        "<b>Last one wins</b>",
        "First wins",
        "Both kept"
      ],
      "answerIndex": 1,
      "explanation": "Object spread is widely used in state management (like React or Redux) to cleanly update a single property while copying over all existing state properties immutably.<code>setState({ ...state, age: 25 });</code>"
    },
    {
      "section": "sr-rest-ds",
      "question": "<code>const [first,...rest] = [1,2,3]</code>  --  rest is?",
      "options": [
        "[1,2,3]",
        "3",
        "<code>[2,3]</code>",
        "2,3"
      ],
      "answerIndex": 2,
      "explanation": "In destructuring, the Rest operator neatly extracts a specific element and bundles all the remaining un-extracted properties or elements into a brand new object or array.<code>let { id, ...details } = user;</code>"
    },
    {
      "section": "sr-args",
      "question": "<code>Math.max(...[1,5,3])</code> returns?",
      "options": [
        "[1,5,3]",
        "1",
        "<code>5</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "Many legacy functions (like Math.max) do not accept arrays -- they only accept a comma-separated list of arguments. Spread perfectly bridges this gap by unspooling an array into loose arguments!<code>Math.max(...numbersArray);</code>"
    },
    {
      "section": "sr-copy",
      "question": "Shallow copy means nested objects are?",
      "options": [
        "Copied",
        "<b>Still referenced (shared)</b>",
        "Frozen",
        "Deleted"
      ],
      "answerIndex": 1,
      "explanation": "While spread is excellent for duplicating simple arrays, if your array contains nested objects (e.g., users = [{name: 'A'}]), modifying the object in the cloned array WILL modify the original! You need a deep clone (like JSON.parse) instead.<code>// Spread is shallow! Beware nested references.</code>"
    },
    {
      "section": "sr-mistakes",
      "question": "Common mistake: expecting deep copy from spread?",
      "options": [
        "Spread is deep",
        "<b>Spread is shallow  --  nested objects are shared</b>",
        "Spread clones all",
        "No issue"
      ],
      "answerIndex": 1,
      "explanation": "The most dangerous misconception is that spread creates a 'deep' clone. It does not. Spread copies primitives safely, but it merely copies the memory pointer references for nested arrays and objects.<code>let clone = [...arr]; // Shallow!</code>"
    }
  ],
  "promises.html": [
    {
      "section": "pm-settled",
      "question": "Promise.allSettled settles when?",
      "options": [
        "First settles",
        "Any rejects",
        "<b>ALL settle (fulfilled or rejected)</b>",
        "All fulfill"
      ],
      "answerIndex": 2,
      "explanation": "Promise.allSettled() runs an array of promises concurrently. Unlike Promise.all(), it NEVER rejects. It waits for absolutely all of them to finish and returns an array of objects describing each outcome ({ status: 'fulfilled' | 'rejected', value/reason }).<code>await Promise.allSettled([p1, p2]);</code>"
    },
    {
      "section": "pm-any",
      "question": "Promise.any resolves with?",
      "options": [
        "All results",
        "First settled",
        "<b>First FULFILLED</b>",
        "First rejected"
      ],
      "answerIndex": 2,
      "explanation": "Promise.any() resolves the very instant the first promise in the array successfully FULFILLS. It completely ignores rejected promises unless literally every single promise in the array fails (which throws an AggregateError).<code>let fast = await Promise.any([p1, p2]);</code>"
    },
    {
      "section": "pm-states",
      "question": "How many states can a Promise be in?",
      "options": [
        "2",
        "<code>3</code>",
        "4",
        "5"
      ],
      "answerIndex": 1,
      "explanation": "A Promise is a state machine that can only ever exist in one of three states. It starts as 'Pending'. If it succeeds, it permanently becomes 'Fulfilled'. If it fails, it permanently becomes 'Rejected'.<code>// Pending -> Fulfilled OR Rejected</code>"
    },
    {
      "section": "pm-states",
      "question": "The 3 Promise states are?",
      "options": [
        "<b>Pending, Fulfilled, Rejected</b>",
        "Open, Closed, Error",
        "Start, Done, Fail",
        "New, Running, Done"
      ],
      "answerIndex": 0,
      "explanation": "Once a Promise settles (becomes Fulfilled or Rejected), it is entirely immutable. You cannot change its state, and you cannot resolve or reject it a second time. It will forever hold that final value.<code>let p = Promise.resolve(1); // Locked at 1</code>"
    },
    {
      "section": "pm-finally",
      "question": "<code>.finally()</code> receives?",
      "options": [
        "The value",
        "The error",
        "<b>No arguments</b>",
        "Both"
      ],
      "answerIndex": 2,
      "explanation": "The .finally() block executes at the absolute end of a Promise chain, regardless of whether the chain succeeded or crashed. It receives no arguments and is universally used for cleanup tasks like hiding loading spinners.<code>fetch().finally(() => stopSpinner());</code>"
    },
    {
      "section": "pm-chain",
      "question": "Promise chaining returns?",
      "options": [
        "Original promise",
        "undefined",
        "<b>New promise</b>",
        "Same promise"
      ],
      "answerIndex": 2,
      "explanation": "Every single time you call .then(), .catch(), or .finally(), JavaScript creates and returns a brand NEW Promise. This is exactly what makes endless Promise chaining possible.<code>let p2 = p1.then(x => x + 1); // p2 is new!</code>"
    },
    {
      "section": "pm-all",
      "question": "<code>Promise.all([p1,p2])</code>  --  if p2 rejects?",
      "options": [
        "p1 result only",
        "Partial results",
        "<b>Entire thing rejects</b>",
        "Waits for p1"
      ],
      "answerIndex": 2,
      "explanation": "Promise.all() is strictly 'all or nothing'. If even a single promise in the array rejects, the entire Promise.all() instantly rejects and ignores the success of any other promises.<code>await Promise.all([success, fail]); // Throws error!</code>"
    },
    {
      "section": "pm-vs",
      "question": "Promise vs Callback  --  which avoids nesting?",
      "options": [
        "Callback",
        "<b>Promise (via chaining)</b>",
        "Both",
        "Neither"
      ],
      "answerIndex": 1,
      "explanation": "By returning a new promise from every .then(), we can flatten deeply nested, unreadable callbacks into a clean, vertical, sequential chain of operations.<code>fetch().then(x).then(y).then(z); // Beautiful chain!</code>"
    },
    {
      "section": "pm-create",
      "question": "<code>new Promise((resolve,reject)=>resolve(42))</code> state?",
      "options": [
        "Pending",
        "Rejected",
        "<code>Fulfilled</code>",
        "Error"
      ],
      "answerIndex": 2,
      "explanation": "When you construct a new Promise, you pass it an 'Executor Callback'. This callback runs immediately and provides you with two functions: resolve() to succeed, and reject() to fail.<code>new Promise((res, rej) => res('Done!'));</code>"
    },
    {
      "section": "pm-then",
      "question": "<code>.then()</code> can take how many callbacks?",
      "options": [
        "1",
        "<b>2 (onFulfilled, onRejected)</b>",
        "3",
        "Unlimited"
      ],
      "answerIndex": 1,
      "explanation": "While it's exceedingly common to only pass one callback to .then() for success, it can actually accept two! The first handles fulfillment, and the second optionally handles rejection. (Though .catch() is preferred).<code>p.then(handleSuccess, handleFail);</code>"
    },
    {
      "section": "pm-create",
      "question": "Promise constructor takes?",
      "options": [
        "One callback",
        "<b>(resolve, reject) => {...} executor</b>",
        "async function",
        "then/catch"
      ],
      "answerIndex": 1,
      "explanation": "If you have asynchronous code that relies on legacy event listeners or callbacks (like setTimeout), wrapping it in 'new Promise()' is the standard way to modernize it into an awaitable Promise.<code>const wait = () => new Promise(res => setTimeout(res, 1000));</code>"
    },
    {
      "section": "pm-chain",
      "question": "Each <code>.then()</code> returns?",
      "options": [
        "Original promise",
        "undefined",
        "<b>A new promise</b>",
        "The value"
      ],
      "answerIndex": 2,
      "explanation": "When a .then() block returns a value, that value is automatically wrapped in a resolved Promise and passed as the argument to the very next .then() block in the chain.<code>Promise.resolve(5).then(n => n * 2); // Yields 10</code>"
    },
    {
      "section": "pm-vs",
      "question": "Promises avoid callback hell by?",
      "options": [
        "Being faster",
        "<b>Chaining instead of nesting</b>",
        "Using events",
        "Being sync"
      ],
      "answerIndex": 1,
      "explanation": "The core philosophy of Promises was to rescue JavaScript developers from the 'Pyramid of Doom' (Callback Hell), allowing asynchronous logic to read sequentially rather than deeply nested.<code>// Promises flatten the curve!</code>"
    },
    {
      "section": "pm-what",
      "question": "A Promise represents?",
      "options": [
        "A variable",
        "<b>A future value (async result)</b>",
        "A callback",
        "A timer"
      ],
      "answerIndex": 1,
      "explanation": "Think of a Promise exactly like a restaurant buzzer. You place your order (async task) and receive a buzzer (the Promise). You can chat at your table (run sync code) until the buzzer flashes (Promise resolves).<code>// A Promise is a guarantee of a future event.</code>"
    },
    {
      "section": "pm-race",
      "question": "<code>Promise.race()</code> resolves/rejects with?",
      "options": [
        "All results",
        "Last result",
        "<b>First settled promise</b>",
        "Random one"
      ],
      "answerIndex": 2,
      "explanation": "Promise.race() is heavily used for implementing Timeouts. If you race a 5-second fetch request against a 3-second rejection timer, the timer wins and aborts the operation if the fetch is too slow.<code>Promise.race([fetchData, timeout(3000)]);</code>"
    },
    {
      "section": "pm-async",
      "question": "<code>async/await</code> is syntactic sugar for?",
      "options": [
        "Callbacks",
        "<b>Promises</b>",
        "Events",
        "Timers"
      ],
      "answerIndex": 1,
      "explanation": "It is crucial to remember that async/await does not replace Promises -- it IS Promises! It is merely a visually cleaner syntax for working with them. You are still interacting with Promises under the hood.<code>await fetch(); // Awaiting a Promise!</code>"
    },
    {
      "section": "pm-mistakes",
      "question": "Common mistake: forgetting to handle rejections?",
      "options": [
        "No problem",
        "<b>Causes unhandled promise rejection</b>",
        "Auto-handled",
        "Silent fail"
      ],
      "answerIndex": 1,
      "explanation": "If a Promise chain crashes and you don't have a .catch() at the end (or a try/catch block if using await), the error is completely swallowed in older JS, or crashes the Node app in modern JS. ALWAYS handle rejections.<code>fetch().catch(err => console.log(err));</code>"
    }
  ],
  "dom-manipulation.html": [
    {
      "section": "dom-select",
      "question": "<code>querySelector</code> returns if not found?",
      "options": [
        "undefined",
        "''",
        "<code>null</code>",
        "Error"
      ],
      "answerIndex": 2,
      "explanation": "querySelector() is the most versatile DOM method. It accepts standard CSS selectors (like '.class' or '#id') and returns the FIRST matching Element. If it finds absolutely nothing, it safely returns 'null'.<code>document.querySelector('.btn-primary');</code>"
    },
    {
      "section": "dom-assert",
      "question": "Why TypeScript needs type assertions for DOM?",
      "options": [
        "Performance",
        "<b>querySelector returns Element|null</b>",
        "Compatibility",
        "Style"
      ],
      "answerIndex": 1,
      "explanation": "Because querySelector can return 'null' if an element doesn't exist, TypeScript strictly forces you to check that the element actually exists before you can access its properties or add event listeners.<code>let el = document.querySelector('div');\nif (el) el.click(); // TS is happy!</code>"
    },
    {
      "section": "dom-content",
      "question": "<code>textContent</code> vs <code>innerHTML</code>?",
      "options": [
        "Same",
        "<b>textContent=plain, innerHTML=HTML</b>",
        "textContent=HTML",
        "innerHTML=safe"
      ],
      "answerIndex": 1,
      "explanation": "Using 'textContent' is highly recommended because it treats all input strictly as raw text. If you use 'innerHTML', any HTML tags in the string are rendered, which opens your app to dangerous Cross-Site Scripting (XSS) attacks.<code>el.textContent = '&lt;script&gt;bad()&lt;/script&gt;'; // Perfectly safe!</code>"
    },
    {
      "section": "dom-style",
      "question": "Add a class to element?",
      "options": [
        "elem.class.add()",
        "<code>elem.classList.add()</code>",
        "elem.addClass()",
        "elem.class='x'"
      ],
      "answerIndex": 1,
      "explanation": "The 'classList' API is the modern, robust way to manipulate CSS classes. Instead of manually parsing the messy 'className' string, you can cleanly use .add(), .remove(), .toggle(), and .contains().<code>el.classList.toggle('dark-mode');</code>"
    },
    {
      "section": "dom-create",
      "question": "Create new element?",
      "options": [
        "new Element()",
        "<code>document.createElement()</code>",
        "DOM.create()",
        "element.new()"
      ],
      "answerIndex": 1,
      "explanation": "You construct brand new, detached HTML elements in memory using document.createElement(). These elements do not appear on the webpage until you explicitly append them to an existing DOM node.<code>let p = document.createElement('p');\ndocument.body.appendChild(p);</code>"
    },
    {
      "section": "dom-events",
      "question": "Listen for events how?",
      "options": [
        "elem.on()",
        "<code>elem.addEventListener()</code>",
        "elem.listen()",
        "elem.event()"
      ],
      "answerIndex": 1,
      "explanation": "addEventListener() is the gold standard for binding events. Unlike the older 'onclick' property which only allows one function, addEventListener allows you to attach an infinite number of independent listeners to a single event!<code>btn.addEventListener('click', doX);\nbtn.addEventListener('click', doY); // Both run!</code>"
    },
    {
      "section": "dom-forms",
      "question": "Prevent form default submit?",
      "options": [
        "return false",
        "<code>e.preventDefault()</code>",
        "e.stop()",
        "e.cancel()"
      ],
      "answerIndex": 1,
      "explanation": "Forms natively refresh the entire webpage when submitted, and links natively navigate away when clicked. Calling e.preventDefault() instantly halts these native browser behaviors, allowing you to handle them manually with JavaScript.<code>e.preventDefault(); // Stops the page reload!</code>"
    },
    {
      "section": "dom-select",
      "question": "<code>document.getElementById('x')</code> returns?",
      "options": [
        "NodeList",
        "<b>HTMLElement or null</b>",
        "Array",
        "String"
      ],
      "answerIndex": 1,
      "explanation": "getElementById() is the fastest DOM query available. It searches exclusively by the 'id' attribute and returns a specific HTMLElement (like HTMLDivElement), giving TypeScript more accurate type info than querySelector.<code>document.getElementById('app');</code>"
    },
    {
      "section": "dom-select",
      "question": "<code>querySelectorAll</code> returns?",
      "options": [
        "Array",
        "HTMLElement",
        "<code>NodeList</code>",
        "null"
      ],
      "answerIndex": 2,
      "explanation": "querySelectorAll() returns ALL matching elements, but it does NOT return a standard JavaScript Array. It returns a 'NodeList'. While modern NodeLists support .forEach(), they lack methods like .map() or .filter() unless you convert them to an array first.<code>let arr = Array.from(document.querySelectorAll('p'));</code>"
    },
    {
      "section": "dom-create",
      "question": "<code>elem.remove()</code> does?",
      "options": [
        "Hides element",
        "<b>Removes from DOM entirely</b>",
        "Disables",
        "Sets display:none"
      ],
      "answerIndex": 1,
      "explanation": "The .remove() method allows an element to cleanly delete itself from the DOM tree. Before this modern method existed, you awkwardly had to find the parent element and ask it to delete the child!<code>document.querySelector('.ad')?.remove();</code>"
    },
    {
      "section": "dom-what",
      "question": "DOM stands for?",
      "options": [
        "Data Object Model",
        "<b>Document Object Model</b>",
        "Display Output Manager",
        "Dynamic Object Map"
      ],
      "answerIndex": 1,
      "explanation": "The Document Object Model (DOM) is an object-oriented representation of your webpage. The browser parses your HTML string and converts it into a live tree of interconnected Objects that JavaScript can easily manipulate.<code>// The DOM is the bridge between JS and HTML.</code>"
    },
    {
      "section": "dom-types",
      "question": "Common event types include?",
      "options": [
        "<b>click, input, submit, keydown</b>",
        "get, set, delete",
        "push, pop, shift",
        "import, export"
      ],
      "answerIndex": 0,
      "explanation": "The browser fires hundreds of different events! 'click' for buttons, 'input' for typing in text fields, 'submit' for forms, and 'keydown' for tracking specific keys on the keyboard.<code>inputElement.addEventListener('input', ...);</code>"
    },
    {
      "section": "dom-mistakes",
      "question": "Common mistake: querying DOM before it loads?",
      "options": [
        "Always works",
        "<b>Returns null  --  use DOMContentLoaded</b>",
        "Returns empty",
        "Throws error"
      ],
      "answerIndex": 1,
      "explanation": "If you put your `<script>` tag in the `<head>`, JavaScript runs BEFORE the body HTML is parsed. Attempting to query elements will fail and return null. Always put scripts at the bottom of the body, or use the 'defer' attribute.<code>&lt;script src=\"app.js\" defer&gt;&lt;/script&gt;</code>"
    }
  ],
  "json.html": [
    {
      "section": "json-syntax",
      "question": "Can JSON contain comments?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Only // style",
        "Only in arrays"
      ],
      "answerIndex": 1,
      "explanation": "JSON is a strict data format, NOT a programming language. It strictly forbids any form of comments (// or /*). If you include a comment in a .json file, JSON.parse() will immediately crash with a SyntaxError.<code>// This is illegal in a .json file!</code>"
    },
    {
      "section": "json-parse",
      "question": "<code>JSON.parse()</code> return type defaults to?",
      "options": [
        "object",
        "string",
        "<code>any</code>",
        "unknown"
      ],
      "answerIndex": 2,
      "explanation": "JSON.parse() consumes a valid JSON string and converts it directly back into a live, usable JavaScript object (or array).<code>let obj = JSON.parse('{\"name\":\"Jo\"}');\nconsole.log(obj.name); // 'Jo'</code>"
    },
    {
      "section": "json-syntax",
      "question": "Trailing commas in JSON?",
      "options": [
        "Yes",
        "<b>No (invalid)</b>",
        "Only arrays",
        "Only objects"
      ],
      "answerIndex": 1,
      "explanation": "While JavaScript allows trailing commas in objects and arrays for convenience, JSON is ruthlessly strict. A trailing comma at the end of a JSON array or object will cause a fatal parsing error.<code>{\"list\": [1, 2]} // Good\n{\"list\": [1, 2,]} // Fatal Error!</code>"
    },
    {
      "section": "json-stringify",
      "question": "<code>JSON.stringify(obj)</code> returns?",
      "options": [
        "Object",
        "<b>String</b>",
        "Array",
        "Buffer"
      ],
      "answerIndex": 1,
      "explanation": "JSON.stringify() does the exact opposite of parse. It consumes a live JavaScript object and converts it into a flat, transportable JSON string. This is required before saving data to a file or sending it over an HTTP network request.<code>let str = JSON.stringify({ a: 1 });</code>"
    },
    {
      "section": "json-pretty",
      "question": "<code>JSON.stringify(obj, null, 2)</code>  --  the 2 means?",
      "options": [
        "Max depth",
        "<b>Indent spaces for pretty print</b>",
        "Max properties",
        "Encoding"
      ],
      "answerIndex": 1,
      "explanation": "By passing 'null' and '2' as the second and third arguments to JSON.stringify, you tell the engine to beautifully format the output string with line breaks and 2-space indentation, making it human-readable!<code>JSON.stringify(data, null, 2); // Pretty print!</code>"
    },
    {
      "section": "json-syntax",
      "question": "Can JSON have functions as values?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Only arrow functions",
        "Only named"
      ],
      "answerIndex": 1,
      "explanation": "JSON cannot store JavaScript-specific types like Functions, undefined, Dates, Sets, or Maps. It strictly supports only universally recognized data types: strings, numbers, booleans, null, arrays, and standard objects.<code>JSON.stringify({ fn: () => {} }); // fn is erased!</code>"
    },
    {
      "section": "json-syntax",
      "question": "JSON keys must use?",
      "options": [
        "Single quotes",
        "No quotes",
        "<b>Double quotes</b>",
        "Backticks"
      ],
      "answerIndex": 2,
      "explanation": "In standard JavaScript, object keys don't require quotes. But in JSON, EVERY single property key absolutely MUST be wrapped in double quotes. Single quotes are entirely forbidden in JSON format!<code>{ \"validKey\": \"value\", 'invalid': 1 }</code>"
    },
    {
      "section": "json-storage",
      "question": "<code>localStorage.setItem('k', obj)</code>  --  correct?",
      "options": [
        "Yes",
        "<b>No (must stringify first)</b>",
        "Only for strings",
        "Auto-converts"
      ],
      "answerIndex": 1,
      "explanation": "The browser's LocalStorage API can only store raw strings. If you try to save an object directly, it saves the useless string '[object Object]'. You must always JSON.stringify() an object before saving it.<code>localStorage.setItem('user', JSON.stringify(user));</code>"
    },
    {
      "section": "json-parse",
      "question": "<code>JSON.parse('invalid')</code> throws?",
      "options": [
        "TypeError",
        "<code>SyntaxError</code>",
        "ReferenceError",
        "null"
      ],
      "answerIndex": 1,
      "explanation": "Because JSON.parse() returns the wildly unsafe 'any' type in TypeScript, it is best practice to immediately typecast the result using the 'as' keyword so you regain autocomplete and type safety.<code>let data = JSON.parse(str) as User;</code>"
    },
    {
      "section": "json-stringify",
      "question": "<code>undefined</code> values in JSON.stringify are?",
      "options": [
        "Kept",
        "Set to null",
        "<b>Omitted/skipped</b>",
        "Error"
      ],
      "answerIndex": 2,
      "explanation": "If an object contains the value 'undefined', JSON.stringify() will completely erase that property from the final string. If an array contains 'undefined', it will be stringified as 'null' to preserve the array index!<code>JSON.stringify({ a: undefined }); // '{}'</code>"
    },
    {
      "section": "json-vs",
      "question": "JSON keys vs JS object keys  --  difference?",
      "options": [
        "No difference",
        "<b>JSON requires double quotes</b>",
        "JSON allows functions",
        "JSON is typed"
      ],
      "answerIndex": 1,
      "explanation": "JSON is a subset of JavaScript Object syntax. While JS objects are dynamic memory structures that can hold functions and references, JSON is just a rigid text string used purely for transporting flat data.<code>// JSON is just text.</code>"
    },
    {
      "section": "json-what",
      "question": "JSON stands for?",
      "options": [
        "Java Standard Object",
        "<b>JavaScript Object Notation</b>",
        "JS Open Network",
        "Java Syntax ON"
      ],
      "answerIndex": 1,
      "explanation": "JSON (JavaScript Object Notation) became the undisputed king of the internet because it is extremely lightweight, easy for machines to parse, and shockingly easy for humans to read compared to bulky XML.<code>// The universal language of APIs!</code>"
    },
    {
      "section": "json-typing",
      "question": "Type JSON data in TypeScript how?",
      "options": [
        "Use any",
        "<b>Define an interface matching the shape</b>",
        "No types needed",
        "Use JSON type"
      ],
      "answerIndex": 1,
      "explanation": "Since TypeScript cannot magically know the shape of the data coming from an external JSON file or API, you define an Interface representing the expected JSON structure and apply it to the parsed result.<code>interface APIResponse { count: number; }</code>"
    },
    {
      "section": "json-guards",
      "question": "Validate parsed JSON with?",
      "options": [
        "typeof only",
        "<b>Type guards or validation libraries</b>",
        "No validation needed",
        "JSON.validate()"
      ],
      "answerIndex": 1,
      "explanation": "Blindly trusting parsed JSON is dangerous. If the API changes, your Type Casts will be wrong! Robust applications always use Type Guards or validation libraries (like Zod) to verify the JSON data matches the expected interface at runtime.<code>if (typeof parsed.id === 'number') { ... }</code>"
    },
    {
      "section": "json-api",
      "question": "APIs typically send/receive data as?",
      "options": [
        "XML",
        "HTML",
        "<b>JSON</b>",
        "CSV"
      ],
      "answerIndex": 2,
      "explanation": "When fetching data using the modern Fetch API, calling 'response.json()' automatically reads the network stream and performs JSON.parse() for you, returning a fully constructed JavaScript object asynchronously!<code>let data = await fetch(url).then(r => r.json());</code>"
    },
    {
      "section": "json-mistakes",
      "question": "Common mistake: forgetting to parse JSON string?",
      "options": [
        "Auto-parsed",
        "<b>You get a string, not an object</b>",
        "Throws error",
        "Returns null"
      ],
      "answerIndex": 1,
      "explanation": "If you forget to parse a JSON string, your variable remains a string. Attempting to access 'user.name' on a string returns 'undefined', leading to cascading bugs. Always parse incoming JSON!<code>typeof '{\"a\":1}'; // 'string', NOT object!</code>"
    }
  ],
  "map-filter-reduce.html": [
    {
      "section": "mfr-chain",
      "question": "Can you chain <code>map().filter().reduce()</code>?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only 2",
        "Only map+filter"
      ],
      "answerIndex": 1,
      "explanation": "Method chaining is a core pattern in modern JS. Because map() and filter() both return brand new arrays, you can instantly attach the next method directly to the end, creating incredibly clean, data-processing pipelines.<code>users.filter(u => u.active).map(u => u.name);</code>"
    },
    {
      "section": "mfr-filter",
      "question": "Does <code>filter()</code> modify the original?",
      "options": [
        "Yes",
        "<b>No</b>",
        "Sometimes",
        "Only with mutating callback"
      ],
      "answerIndex": 1,
      "explanation": "The filter() method is 'pure' -- it NEVER modifies the original array. Instead, it builds a completely new array in memory containing only the items that passed the test. Your original data is safely preserved.<code>let original = [1, 2]; let f = original.filter();</code>"
    },
    {
      "section": "mfr-map",
      "question": "<code>map()</code> always returns?",
      "options": [
        "Same array",
        "Filtered array",
        "<b>New array of same length</b>",
        "Single value"
      ],
      "answerIndex": 2,
      "explanation": "The map() method guarantees that the new array it returns will have the exact same length as the original array. It simply transforms every single item 1-to-1.<code>[1,2].map(x => 'Hi'); // ['Hi', 'Hi']</code>"
    },
    {
      "section": "mfr-reduce",
      "question": "Accumulator in <code>reduce()</code> is?",
      "options": [
        "Index",
        "Callback",
        "<b>Running total/result</b>",
        "Array copy"
      ],
      "answerIndex": 2,
      "explanation": "The accumulator (the first argument in a reduce callback) acts like a snowball rolling down a hill. It preserves the running total/result across every iteration, and its final value is what reduce() returns.<code>arr.reduce((snowball, flake) => snowball + flake);</code>"
    },
    {
      "section": "mfr-chain",
      "question": "For efficiency, which order: filter then map or map then filter?",
      "options": [
        "Map first",
        "<b>Filter first (fewer items to map)</b>",
        "No difference",
        "Reduce first"
      ],
      "answerIndex": 1,
      "explanation": "Order of operations matters! If you map() 10,000 items and then filter() them, you wasted CPU cycles mapping items that get deleted anyway. Always filter() first to shrink the array before applying expensive map() transformations.<code>// Filter early to boost performance!</code>"
    },
    {
      "section": "mfr-map",
      "question": "<code>[1,2,3].map(String)</code> returns?",
      "options": [
        "'123'",
        "NaN",
        "<code>['1','2','3']</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "A neat trick: you can pass native functions directly into map! For example, passing the 'String' constructor will instantly convert an array of numbers into an array of strings.<code>[1, 2].map(String); // ['1', '2']</code>"
    },
    {
      "section": "mfr-filter",
      "question": "<code>[1,2,3,4].filter(x=>x%2===0)</code> returns?",
      "options": [
        "[1,3]",
        "<code>[2,4]</code>",
        "true",
        "2"
      ],
      "answerIndex": 1,
      "explanation": "The callback provided to filter() must return a boolean (or truthy/falsy value). If it evaluates to true, the item is kept. If false, it is completely discarded from the new array.<code>arr.filter(x => x > 10); // Keep big numbers</code>"
    },
    {
      "section": "mfr-reduce",
      "question": "<code>[10,20,30].reduce((a,b)=>a+b)</code> returns? (no initial)",
      "options": [
        "[10,20,30]",
        "10",
        "<code>60</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "If you completely omit the initial value in reduce(), it automatically uses the FIRST element of the array as the accumulator, and begins iterating from the SECOND element.<code>[10, 20].reduce((a, b) => a + b); // 30</code>"
    },
    {
      "section": "mfr-reduce",
      "question": "Can <code>reduce()</code> return an object?",
      "options": [
        "No",
        "<b>Yes</b>",
        "Only arrays",
        "Only numbers"
      ],
      "answerIndex": 1,
      "explanation": "While reduce is famous for summing numbers, it is incredibly powerful for converting arrays into Objects! You can set the initial value to an empty object '{}' and accumulate keys dynamically.<code>arr.reduce((obj, item) => { obj[item.id] = item; return obj; }, {});</code>"
    },
    {
      "section": "mfr-map",
      "question": "<code>[1,2,3].map(x=>x>1).filter(Boolean)</code> returns?",
      "options": [
        "[2,3]",
        "<code>[true,true]</code>",
        "[false,true,true]",
        "[1,2,3]"
      ],
      "answerIndex": 1,
      "explanation": "Passing the native 'Boolean' constructor into filter() is the industry-standard trick for instantly wiping out all falsy values (null, undefined, 0, false, '') from an array!<code>[1, null, 2].filter(Boolean); // [1, 2]</code>"
    },
    {
      "section": "mfr-recap",
      "question": "map, filter, reduce are all?",
      "options": [
        "Loops",
        "<b>Array higher-order methods</b>",
        "Operators",
        "Types"
      ],
      "answerIndex": 1,
      "explanation": "Map, Filter, and Reduce are considered 'Higher-Order Methods' because they accept functions as arguments. They are the holy trinity of functional programming in JavaScript.<code>// The pillars of data manipulation.</code>"
    },
    {
      "section": "mfr-when",
      "question": "Use reduce when you need?",
      "options": [
        "New array",
        "Filtered array",
        "<b>A single accumulated value</b>",
        "Sorted array"
      ],
      "answerIndex": 2,
      "explanation": "Use map when you want to change every item. Use filter when you want to keep fewer items. Use reduce when you want to completely boil the array down to a single number, string, or object.<code>// Know which tool to reach for!</code>"
    },
    {
      "section": "mfr-mistakes",
      "question": "Common mistake: mutating original array in map?",
      "options": [
        "Required",
        "<b>Should return new values, not mutate</b>",
        "map auto-mutates",
        "No issue"
      ],
      "answerIndex": 1,
      "explanation": "A massive anti-pattern is mutating objects inside a map() callback. map() should be a pure function that returns newly constructed objects. If you mutate directly, you corrupt the original array's references!<code>// Bad: item.val = 1; return item;\n// Good: return { ...item, val: 1 };</code>"
    }
  ],
  "closures-scope.html": [
    {
      "section": "cls-what",
      "question": "A closure remembers variables from?",
      "options": [
        "Global scope",
        "<b>Outer/lexical scope</b>",
        "Block scope only",
        "Module scope"
      ],
      "answerIndex": 1,
      "explanation": "A Closure occurs when a function 'remembers' and has continued access to the variables in its surrounding lexical scope, EVEN AFTER that surrounding function has completely finished executing and returned!<code>// The inner function traps the outer variables!</code>"
    },
    {
      "section": "cls-loop",
      "question": "Classic var-in-loop trap: var has ___ scope.",
      "options": [
        "Block",
        "<b>Function</b>",
        "Global",
        "Module"
      ],
      "answerIndex": 1,
      "explanation": "The 'var' keyword ignores block scopes (like for-loops or if-statements). It is only contained by full functions. This causes severe bugs in loops because the single 'var' variable is shared across all iterations.<code>for (var i = 0; i < 3; i++) { } // i leaks out!</code>"
    },
    {
      "section": "cls-lexical",
      "question": "JavaScript uses which scope type?",
      "options": [
        "Dynamic",
        "<b>Lexical</b>",
        "Static",
        "Both A and B"
      ],
      "answerIndex": 1,
      "explanation": "JavaScript uses Lexical Scoping (also called Static Scoping). This means scope is strictly determined by WHERE the code is physically typed on the page, not by where or how the function is eventually called at runtime.<code>// Location matters, invocation doesn't.</code>"
    },
    {
      "section": "cls-scope",
      "question": "3 types of scope?",
      "options": [
        "<b>Global, Function, Block</b>",
        "Global, Local, Module",
        "Public, Private, Protected",
        "Outer, Inner, Nested"
      ],
      "answerIndex": 0,
      "explanation": "There are 3 main scopes in JS: Global (accessible everywhere), Function (accessible only within the function), and Block (accessible only within { curly braces }, provided you use 'let' or 'const').<code>{ let a = 1; } // Block scoped!</code>"
    },
    {
      "section": "cls-private",
      "question": "Module pattern uses closures for?",
      "options": [
        "Speed",
        "<b>Private variables</b>",
        "Type safety",
        "Memory"
      ],
      "answerIndex": 1,
      "explanation": "Closures are the classic way to create genuinely Private Variables in JavaScript. By hiding a variable inside an outer function and returning an inner function to interact with it, the variable cannot be touched from the outside!<code>// Encapsulation via Closures!</code>"
    },
    {
      "section": "cls-factory",
      "question": "Factory functions create?",
      "options": [
        "Classes",
        "<b>New objects with private state via closure</b>",
        "Modules",
        "Singletons"
      ],
      "answerIndex": 1,
      "explanation": "When a function returns an object containing methods, and those methods use the function's parameters, a closure is perfectly formed. Those methods permanently remember the parameters!<code>const user = createUser('Jo'); user.getName();</code>"
    },
    {
      "section": "cls-loop",
      "question": "<code>for(var i=0;i<3;i++){setTimeout(()=>console.log(i),0)",
      "options": [
        "0,1,2",
        "<code>3,3,3</code>",
        "undefined",
        "error"
      ],
      "answerIndex": 1,
      "explanation": "If you use 'var' in a loop with asynchronous callbacks (like setTimeout), the loop finishes instantly. When the callbacks finally run, they all look up the single shared 'var' variable, which has already hit the max value!<code>// The classic interview trap!</code>"
    },
    {
      "section": "cls-loop",
      "question": "Fix var loop trap by using?",
      "options": [
        "var",
        "<b>let</b>",
        "const",
        "global"
      ],
      "answerIndex": 1,
      "explanation": "Using 'let' completely fixes the loop closure trap! Because 'let' is block-scoped, the loop creates a brand new, isolated variable 'i' for every single iteration. Each callback closures over its own unique value.<code>for (let i=0; ...) // Works perfectly!</code>"
    },
    {
      "section": "cls-memory",
      "question": "Do closures cause memory leaks?",
      "options": [
        "Never",
        "Always",
        "<b>Possible if references held unnecessarily</b>",
        "Only in Node"
      ],
      "answerIndex": 2,
      "explanation": "Because closures maintain live references to outer variables, those variables cannot be garbage collected by the browser. If your closure traps massive DOM elements or huge arrays, you can accidentally create memory leaks.<code>// Clean up unnecessary closures!</code>"
    },
    {
      "section": "cls-counter",
      "question": "<code>function counter(){let n=0;return()=>++n",
      "options": [
        "0",
        "1",
        "<code>2</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "Closures are heavily used for State Management. A simple 'counter' function uses a closure to hold an internal 'count' variable that perfectly remembers its value between multiple calls.<code>const tick = counter(); tick(); tick();</code>"
    },
    {
      "section": "cls-mistakes",
      "question": "Common closure mistake: var in loop captures?",
      "options": [
        "Each value",
        "<b>Only the final value</b>",
        "Nothing",
        "First value"
      ],
      "answerIndex": 1,
      "explanation": "The old-school fix for the 'var' loop trap was wrapping the setTimeout in an Immediately Invoked Function Expression (IIFE) to forcefully create a new function scope for every iteration. Today, we simply use 'let'.<code>// IIFE: (function(val) { ... })(i);</code>"
    }
  ],
  "this-keyword.html": [
    {
      "section": "this-arrow",
      "question": "Arrow function <code>this</code> refers to?",
      "options": [
        "Global object",
        "undefined",
        "<b>Parent scope's this</b>",
        "The function itself"
      ],
      "answerIndex": 2,
      "explanation": "Arrow functions absolutely DO NOT possess their own 'this' context. They completely ignore how they are called and instead permanently inherit the 'this' value from the lexical scope where they were typed.<code>const fn = () => this; // Lexical this!</code>"
    },
    {
      "section": "this-bca",
      "question": "Which returns a NEW function with bound this?",
      "options": [
        "call",
        "apply",
        "<code>bind</code>",
        "attach"
      ],
      "answerIndex": 2,
      "explanation": "The .call() method invokes a function immediately while explicitly overriding what 'this' points to. The first argument becomes 'this', and subsequent arguments are passed to the function normally.<code>greet.call(user, 'Hello');</code>"
    },
    {
      "section": "this-bca",
      "question": "<code>call()</code> takes args as ___, <code>apply()</code> as ___.",
      "options": [
        "array, comma",
        "<b>comma, array</b>",
        "object, array",
        "comma, object"
      ],
      "answerIndex": 1,
      "explanation": "The .apply() method is identical to .call(), EXCEPT it takes the function's arguments as a single Array. (Mnemonic: A is for Apply and Array).<code>greet.apply(user, ['Hello', 'World']);</code>"
    },
    {
      "section": "this-global",
      "question": "<code>this</code> in global scope (browser)?",
      "options": [
        "undefined",
        "null",
        "<code>window</code>",
        "document"
      ],
      "answerIndex": 2,
      "explanation": "If you use 'this' in the absolute global scope (outside of any function or class), it points directly to the global object. In a browser environment, that object is the 'window'.<code>console.log(this === window); // true</code>"
    },
    {
      "section": "this-func",
      "question": "<code>this</code> in a regular function (strict mode)?",
      "options": [
        "window",
        "global",
        "<code>undefined</code>",
        "null"
      ],
      "answerIndex": 2,
      "explanation": "In a standard function call, 'this' defaults to the global window. However, under 'use strict' (which TypeScript enables by default), JavaScript stops this unsafe behavior and strictly assigns 'undefined' to 'this'.<code>function run() { console.log(this); } // undefined</code>"
    },
    {
      "section": "this-method",
      "question": "<code>this</code> in an object method?",
      "options": [
        "Global",
        "<b>The object itself</b>",
        "undefined",
        "The function"
      ],
      "answerIndex": 1,
      "explanation": "Implicit Binding is the most common rule. If a function is called as a method on an object (look for the dot!), the object immediately to the left of the dot becomes 'this' during the execution.<code>user.login(); // 'this' is user!</code>"
    },
    {
      "section": "this-class",
      "question": "<code>this</code> in a class method?",
      "options": [
        "Global",
        "<b>The class instance</b>",
        "The class itself",
        "undefined"
      ],
      "answerIndex": 1,
      "explanation": "Inside an instantiated Class, 'this' perfectly points to the specific object instance that was created by the 'new' keyword.<code>class Dog { bark() { console.log(this.name); } }</code>"
    },
    {
      "section": "this-arrow",
      "question": "<code>const obj={name:'A',greet:()=>this.name}</code>  --  this.name is?",
      "options": [
        "'A'",
        "<b>undefined (arrow inherits outer this)</b>",
        "Error",
        "null"
      ],
      "answerIndex": 1,
      "explanation": "Because arrow functions inherit 'this' lexically, they are the absolute perfect choice for callbacks (like setTimeout or array methods) inside classes, because they won't accidentally lose the class 'this' context.<code>setTimeout(() => this.save(), 1000);</code>"
    },
    {
      "section": "this-bca",
      "question": "<code>bind()</code> vs <code>call()</code> difference?",
      "options": [
        "<b>bind returns new fn, call invokes immediately</b>",
        "Same thing",
        "bind is faster",
        "call returns new fn"
      ],
      "answerIndex": 0,
      "explanation": "The .bind() method does NOT execute the function. Instead, it creates and returns a brand new function where 'this' is permanently locked to the object you provided. It's heavily used in React class components.<code>const boundFn = fn.bind(user); boundFn();</code>"
    },
    {
      "section": "this-method",
      "question": "<code>const fn=obj.method; fn()</code>  --  this is?",
      "options": [
        "obj",
        "<b>Global/undefined (lost context)</b>",
        "null",
        "Error"
      ],
      "answerIndex": 1,
      "explanation": "Even if a function is attached to an object, if you assign that method to a standalone variable and call it without the dot, the Implicit Binding is completely lost, and 'this' becomes undefined!<code>const log = user.login; log(); // 'this' is LOST!</code>"
    },
    {
      "section": "this-what",
      "question": "<code>this</code> refers to?",
      "options": [
        "The function",
        "<b>The object that called the method</b>",
        "Global always",
        "undefined always"
      ],
      "answerIndex": 1,
      "explanation": "Unlike variable scope which is determined by where you write the code, the value of 'this' in standard functions is highly dynamic and is determined entirely by HOW the function is called at runtime.<code>// Execution context determines 'this'.</code>"
    },
    {
      "section": "this-mistakes",
      "question": "Common mistake: using <code>this</code> in callback?",
      "options": [
        "Always works",
        "<b>Loses context  --  use arrow function or bind</b>",
        "No issue",
        "Throws error"
      ],
      "answerIndex": 1,
      "explanation": "Passing a class method directly into an event listener or callback (like btn.addEventListener('click', this.save)) will strip the method of its 'this' context. You must use an arrow function or .bind() to preserve it!<code>btn.onClick = () => this.save(); // Safe!</code>"
    }
  ],
  "utility-types.html": [
    {
      "section": "ut-partial",
      "question": "Which makes ALL properties optional?",
      "options": [
        "Required",
        "<code>Partial</code>",
        "Readonly",
        "Pick"
      ],
      "answerIndex": 1,
      "explanation": "The Partial&lt;T&gt; utility creates a new type by taking an existing interface/type and making every single property optional (adding a ?). It is heavily used for writing 'update' functions where a user only passes a few fields to change.<code>function update(data: Partial&lt;User&gt;) { ... }</code>"
    },
    {
      "section": "ut-pick",
      "question": "Which creates type with ONLY selected properties?",
      "options": [
        "Omit",
        "Extract",
        "<code>Pick</code>",
        "Record"
      ],
      "answerIndex": 2,
      "explanation": "The Pick&lt;T, K&gt; utility creates a new type by explicitly selecting a specific subset of properties from an existing type. It's the cleanest way to reuse parts of a massive interface without duplicating code.<code>type NameOnly = Pick&lt;User, 'firstName' | 'lastName'&gt;;</code>"
    },
    {
      "section": "ut-omit",
      "question": "Which creates type by REMOVING properties?",
      "options": [
        "Pick",
        "Exclude",
        "<code>Omit</code>",
        "Extract"
      ],
      "answerIndex": 2,
      "explanation": "The Omit&lt;T, K&gt; utility does the exact opposite of Pick. It creates a new type by taking an existing type and explicitly deleting specific properties from it. Very useful for stripping out sensitive data like passwords!<code>type PublicUser = Omit&lt;User, 'password' | 'ssn'&gt;;</code>"
    },
    {
      "section": "ut-required",
      "question": "<code>Required&lt;T&gt;</code> does?",
      "options": [
        "Makes optional",
        "<b>Makes all properties required</b>",
        "Removes props",
        "Adds props"
      ],
      "answerIndex": 1,
      "explanation": "The Required&lt;T&gt; utility takes a type where properties might be optional (?), and completely removes the optional modifier, forcing every single property to be strictly required.<code>type StrictConfig = Required&lt;AppConfig&gt;;</code>"
    },
    {
      "section": "ut-readonly",
      "question": "<code>Readonly&lt;T&gt;</code> prevents?",
      "options": [
        "Reading",
        "<b>Reassignment of all properties</b>",
        "Deletion",
        "Creation"
      ],
      "answerIndex": 1,
      "explanation": "The Readonly&lt;T&gt; utility adds the 'readonly' modifier to every property of a type. This guarantees that an object cannot be mutated or changed after it has been created, enforcing strict immutability.<code>const state: Readonly&lt;State&gt; = { count: 0 };</code>"
    },
    {
      "section": "ut-record",
      "question": "<code>Record&lt;string, number&gt;</code> creates?",
      "options": [
        "Array",
        "<b>Object with string keys and number values</b>",
        "Tuple",
        "Map"
      ],
      "answerIndex": 1,
      "explanation": "The Record&lt;K, V&gt; utility is the absolute best way to define a Dictionary or Map-like object. It strictly defines the type of the keys and the type of the values.<code>const ages: Record&lt;string, number&gt; = { 'Jo': 25 };</code>"
    },
    {
      "section": "ut-exclude",
      "question": "<code>Exclude&lt;'a'|'b'|'c', 'a'&gt;</code> returns?",
      "options": [
        "'a'",
        "<code>'b'|'c'</code>",
        "'a'|'b'|'c'",
        "never"
      ],
      "answerIndex": 1,
      "explanation": "The Exclude&lt;UnionType, ExcludedMembers&gt; utility constructs a new type by removing specific types from a Union. If you have 'A | B | C' and exclude 'A', you are left with 'B | C'.<code>type SafeModes = Exclude&lt;'dev' | 'test' | 'prod', 'prod'&gt;;</code>"
    },
    {
      "section": "ut-exclude",
      "question": "<code>Extract&lt;'a'|'b'|'c', 'a'|'d'&gt;</code> returns?",
      "options": [
        "'b'|'c'",
        "<code>'a'</code>",
        "'a'|'d'",
        "never"
      ],
      "answerIndex": 1,
      "explanation": "The Extract&lt;Type, Union&gt; utility is the opposite of Exclude. It extracts only the types from a union that are assignable to the specified union.<code>type Intersect = Extract&lt;'a' | 'b', 'a' | 'c'&gt;; // 'a'</code>"
    },
    {
      "section": "ut-return",
      "question": "<code>ReturnType&lt;typeof fn&gt;</code> gets?",
      "options": [
        "Parameter types",
        "<b>The function's return type</b>",
        "Function name",
        "Argument count"
      ],
      "answerIndex": 1,
      "explanation": "The ReturnType&lt;T&gt; utility analyzes an existing function and magically extracts its exact return type. It is incredibly useful when you are using a third-party function and need to type a variable to hold its result!<code>type Res = ReturnType&lt;typeof fetchUser&gt;;</code>"
    },
    {
      "section": "ut-exclude",
      "question": "Exclude works on ___, Omit works on ___.",
      "options": [
        "<b>Unions, Object types</b>",
        "Objects, Unions",
        "Same",
        "Arrays, Objects"
      ],
      "answerIndex": 0,
      "explanation": "While Omit is used to delete keys from Object/Interface types, Exclude is strictly used to remove items from simple Union types (like string literals). Mixing them up is a classic beginner mistake!<code>// Omit for Objects. Exclude for Unions.</code>"
    },
    {
      "section": "ut-what",
      "question": "Utility types are?",
      "options": [
        "Custom types",
        "<b>Built-in TypeScript type transformers</b>",
        "JavaScript types",
        "npm packages"
      ],
      "answerIndex": 1,
      "explanation": "Utility Types are global, built-in generic types provided by TypeScript out of the box. They act as functions for your types, transforming existing structures into new shapes so you never have to repeat yourself (DRY).<code>// Utilities save you from writing duplicate interfaces!</code>"
    },
    {
      "section": "ut-mistakes",
      "question": "Common mistake: confusing Omit vs Exclude?",
      "options": [
        "Same thing",
        "<b>Omit=objects, Exclude=unions</b>",
        "Both for unions",
        "Both for objects"
      ],
      "answerIndex": 1,
      "explanation": "Remember the golden rule: 'Omit' expects an object type as its first argument (Omit&lt;User, 'id'&gt;), while 'Exclude' expects a union of strings/numbers (Exclude&lt;'a'|'b', 'a'&gt;).<code>type T = Omit&lt;{a:1, b:2}, 'a'&gt;; // {b:2}</code>"
    }
  ],
  "date-time.html": [
    {
      "section": "dt-get",
      "question": "Is January month 0 or 1?",
      "options": [
        "1",
        "<code>0</code>",
        "-1",
        "Depends"
      ],
      "answerIndex": 1,
      "explanation": "In JavaScript, the getMonth() method returns a deeply confusing zero-based index for the month! January is 0, February is 1, and December is 11. Always remember to add +1 when displaying the month to a user!<code>let m = new Date().getMonth() + 1;</code>"
    },
    {
      "section": "dt-create",
      "question": "<code>Date.now()</code> returns?",
      "options": [
        "Date object",
        "String",
        "<b>Timestamp in milliseconds</b>",
        "Seconds"
      ],
      "answerIndex": 2,
      "explanation": "Date.now() is a static method that instantly returns the current Timestamp: the exact number of milliseconds that have passed since the Unix Epoch (January 1, 1970). It's much faster than creating a 'new Date()'.<code>let start = Date.now();</code>"
    },
    {
      "section": "dt-iso",
      "question": "ISO date format?",
      "options": [
        "DD-MM-YYYY",
        "<code>YYYY-MM-DDTHH:mm:ss.sssZ</code>",
        "MM/DD/YYYY",
        "YYYY.MM.DD"
      ],
      "answerIndex": 1,
      "explanation": "The ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) is the international, undisputed standard for storing and transferring dates across APIs and Databases. The 'Z' at the end stands for Zulu time (UTC).<code>const dbDate = new Date().toISOString();</code>"
    },
    {
      "section": "dt-format",
      "question": "Format date for display?",
      "options": [
        "toString()",
        "<code>toLocaleDateString()</code>",
        "format()",
        "display()"
      ],
      "answerIndex": 1,
      "explanation": "The toLocaleDateString() method is incredibly powerful. It automatically formats a raw Date object into a beautiful, human-readable string based on the user's local language, region, and formatting preferences.<code>date.toLocaleDateString('en-GB'); // 'dd/mm/yyyy'</code>"
    },
    {
      "section": "dt-calc",
      "question": "Difference between two dates?",
      "options": [
        "date1 - date2 directly",
        "<b>Subtract timestamps, convert ms</b>",
        "diff() method",
        "compare()"
      ],
      "answerIndex": 1,
      "explanation": "To calculate the time elapsed between two dates, you must convert both dates into timestamps (using .getTime() or Date.now()), subtract them to get the difference in milliseconds, and then mathematically convert that into days, hours, or minutes.<code>let diff = dateB.getTime() - dateA.getTime();</code>"
    },
    {
      "section": "dt-get",
      "question": "<code>getDay()</code> returns 0 for?",
      "options": [
        "Monday",
        "<code>Sunday</code>",
        "Saturday",
        "January"
      ],
      "answerIndex": 1,
      "explanation": "The getDay() method returns the day of the week as a number from 0 to 6. Crucially, in JavaScript, Sunday is considered the very first day of the week, so it returns 0! Monday is 1, and Saturday is 6.<code>if (date.getDay() === 0) console.log('Sunday!');</code>"
    },
    {
      "section": "dt-get",
      "question": "<code>getMonth()</code> returns 0 for?",
      "options": [
        "<code>January</code>",
        "February",
        "December",
        "Current month"
      ],
      "answerIndex": 0,
      "explanation": "getMonth() is zero-indexed, meaning January is exactly 0. This quirk exists because JavaScript originally copied its Date implementation directly from the Java programming language in 1995!<code>let isJan = date.getMonth() === 0;</code>"
    },
    {
      "section": "dt-create",
      "question": "<code>new Date('invalid')</code> creates?",
      "options": [
        "null",
        "Error",
        "undefined",
        "<b>Invalid Date (NaN)</b>"
      ],
      "answerIndex": 3,
      "explanation": "If you pass an unparsable string to the Date constructor (like 'hello'), it does NOT throw an error! Instead, it silently creates an 'Invalid Date' object. If you call .getTime() on it, it returns 'NaN'.<code>let d = new Date('bad'); console.log(isNaN(d.getTime())); // true</code>"
    },
    {
      "section": "dt-set",
      "question": "<code>setMonth()</code> modifies?",
      "options": [
        "Returns new Date",
        "<b>Mutates original Date object</b>",
        "Creates copy",
        "Throws error"
      ],
      "answerIndex": 1,
      "explanation": "All 'set' methods on a Date object (like setDate, setMonth, setFullYear) aggressively mutate the original Date object in place! They do NOT return a new Date copy. This causes massive bugs if you pass a Date around by reference.<code>const d = new Date(); d.setMonth(0); // Original is altered!</code>"
    },
    {
      "section": "dt-create",
      "question": "Timestamps are measured from?",
      "options": [
        "2000",
        "<b>Jan 1, 1970 (Unix epoch)</b>",
        "1980",
        "2020"
      ],
      "answerIndex": 1,
      "explanation": "The Unix Epoch (January 1, 1970 at midnight UTC) is the absolute starting point for computer time. Every single timestamp is simply a massive integer counting the milliseconds that have ticked by since that exact moment.<code>new Date(0); // The Epoch!</code>"
    },
    {
      "section": "dt-mistakes",
      "question": "Common date mistake: months are 0-indexed?",
      "options": [
        "1-indexed",
        "<b>Yes  --  January is 0, not 1</b>",
        "Depends",
        "Only in JS"
      ],
      "answerIndex": 1,
      "explanation": "The most common date mistake in JavaScript is forgetting that months are 0-indexed (Jan=0, Dec=11) but days of the month are 1-indexed (the 1st is 1)! If you want to create May 5th, you write new Date(2024, 4, 5).<code>new Date(2024, 4, 5); // May 5th!</code>"
    }
  ],
  "regex-basics.html": [
    {
      "section": "rx-chars",
      "question": "<code>d</code> matches?",
      "options": [
        "Letters",
        "<b>Any digit (0-9)</b>",
        "Whitespace",
        "Word chars"
      ],
      "answerIndex": 1,
      "explanation": "\\d=digit \\w=word \\s=space .=any"
    },
    {
      "section": "rx-flags",
      "question": "<code>g</code> flag does?",
      "options": [
        "Case insensitive",
        "<b>Find ALL matches, not just first</b>",
        "Multiline",
        "Greedy"
      ],
      "answerIndex": 1,
      "explanation": "Regular Expressions (Regex) rely on 'Character Classes' for matching. '\\d' strictly matches any single digit (0-9). '\\w' matches any 'word character' (letters, numbers, and underscores). '\\s' matches any whitespace (spaces, tabs, newlines).<code>const hasNum = /\\d/.test('user1'); // true</code>"
    },
    {
      "section": "rx-methods",
      "question": "<code>test()</code> returns?",
      "options": [
        "Match",
        "String",
        "<code>Boolean</code>",
        "Array"
      ],
      "answerIndex": 2,
      "explanation": "By default, regex stops immediately after finding the very first match. If you append the 'g' (global) flag to the end of the pattern, it forces the engine to scan the entire string and return ALL occurrences.<code>'a b a'.replace(/a/g, 'x'); // 'x b x'</code>"
    },
    {
      "section": "rx-quant",
      "question": "<code>+</code> quantifier means?",
      "options": [
        "Zero or more",
        "<b>One or more</b>",
        "Exactly one",
        "Optional"
      ],
      "answerIndex": 1,
      "explanation": "Regex provides two primary methods: regex.test(string) returns a simple true/false if the pattern exists. string.match(regex) returns a detailed Array containing the actual matched string and capture groups (or null).<code>/a/.test('abc'); // true</code>"
    },
    {
      "section": "rx-anchors",
      "question": "<code>^</code> and <code>$</code> represent?",
      "options": [
        "Any char",
        "<b>Start and end of string</b>",
        "Word boundary",
        "Line break"
      ],
      "answerIndex": 1,
      "explanation": "^start | end$ | \\b boundary"
    },
    {
      "section": "rx-chars",
      "question": "<code>w</code> matches?",
      "options": [
        "Whitespace",
        "Digits only",
        "<b>Word char (letter, digit, _)</b>",
        "Any char"
      ],
      "answerIndex": 2,
      "explanation": "\\d=digit \\w=word \\s=space .=any"
    },
    {
      "section": "rx-chars",
      "question": "<code>s</code> matches?",
      "options": [
        "String",
        "<b>Whitespace (space, tab, newline)</b>",
        "Symbol",
        "Special char"
      ],
      "answerIndex": 1,
      "explanation": "\\d=digit \\w=word \\s=space .=any"
    },
    {
      "section": "rx-flags",
      "question": "<code>/hello/i</code>  --  the <code>i</code> flag means?",
      "options": [
        "Global",
        "<b>Case insensitive</b>",
        "Multiline",
        "Ignore"
      ],
      "answerIndex": 1,
      "explanation": "Quantifiers define how many times a character should appear. The plus (+) means 'one or more times'. The asterisk (*) means 'zero or more times'. The question mark (?) means 'zero or one time (optional)'.<code>/ba+/.test('baaa'); // true</code>"
    },
    {
      "section": "rx-methods",
      "question": "<code>'abc123'.match(/d+/)</code> returns?",
      "options": [
        "true",
        "'abc'",
        "<code>['123']</code>",
        "6"
      ],
      "answerIndex": 2,
      "explanation": "'abc123'.match(/\\d+/) // ['123']"
    },
    {
      "section": "rx-chars",
      "question": "<code>D</code> (uppercase) matches?",
      "options": [
        "Digits",
        "<b>Non-digits</b>",
        "Decimals",
        "Double"
      ],
      "answerIndex": 1,
      "explanation": "\\D matches any NON-digit: letters, spaces, symbols"
    },
    {
      "section": "rx-what",
      "question": "Regex is used for?",
      "options": [
        "Math",
        "<b>Pattern matching in strings</b>",
        "Loops",
        "Type checking"
      ],
      "answerIndex": 1,
      "explanation": "Anchors lock your pattern to specific positions! The caret (^) strictly matches the absolute beginning of the string. The dollar sign ($) strictly matches the absolute end of the string.<code>/^hello$/.test('hello world'); // false!</code>"
    },
    {
      "section": "rx-create",
      "question": "Two ways to create regex?",
      "options": [
        "<b>Literal /pattern/ and new RegExp()</b>",
        "Only literal",
        "Only constructor",
        "String.regex()"
      ],
      "answerIndex": 0,
      "explanation": "The period (.) is the wild card of Regex. It literally matches ANY single character in existence, except for line breaks. If you actually want to match a literal period, you must escape it with a backslash (\\.).<code>/h.t/.test('hat'); // true</code>"
    },
    {
      "section": "rx-patterns",
      "question": "Email validation regex checks for?",
      "options": [
        "Just @",
        "<b>user@domain.ext pattern</b>",
        "Only .com",
        "Length only"
      ],
      "answerIndex": 1,
      "explanation": "Square brackets [] create a 'Character Set', allowing you to match any ONE character listed inside them. For example, /[aeiou]/ matches any single vowel. /[A-Z]/ matches any uppercase letter.<code>/[a-c]/.test('b'); // true</code>"
    },
    {
      "section": "rx-mistakes",
      "question": "Common regex mistake: forgetting the <code>g</code> flag?",
      "options": [
        "Matches all",
        "<b>Only finds first match</b>",
        "Error",
        "No effect"
      ],
      "answerIndex": 1,
      "explanation": "Regex Flags alter the fundamental behavior of the search. 'g' makes it global. 'i' makes it case-insensitive (ignoring upper/lowercase differences). 'm' makes the ^ and $ anchors match the start/end of every single line, not just the whole string.<code>/hello/i.test('HELLO'); // true</code>"
    }
  ],
  "type-guards-advanced.html": [
    {
      "section": "tg-custom",
      "question": "Custom type guard returns?",
      "options": [
        "Boolean",
        "<code>paramName is Type predicate</code>",
        "typeof",
        "void"
      ],
      "answerIndex": 1,
      "explanation": "A User-Defined Type Guard is a custom function that returns a boolean but uses a 'Type Predicate' (arg is Type) as its return annotation. This tells the TS compiler, 'If this function returns true, trust me, the variable is definitively this type!'<code>function isDog(p: any): p is Dog { ... }</code>"
    },
    {
      "section": "tg-exhaust",
      "question": "Exhaustive checking uses?",
      "options": [
        "void",
        "unknown",
        "<code>never</code>",
        "any"
      ],
      "answerIndex": 2,
      "explanation": "Exhaustive Checking is a brilliant pattern. By assigning a variable to 'never' in the default block of a switch statement, TypeScript will instantly throw a compiler error if you ever add a new type to a union but forget to add a case for it!<code>const _check: never = val; // Compile error if missing!</code>"
    },
    {
      "section": "tg-assert",
      "question": "Assertion function does?",
      "options": [
        "Returns boolean",
        "<b>Throws or narrows type</b>",
        "Creates type",
        "Logs"
      ],
      "answerIndex": 1,
      "explanation": "An Assertion Function uses the 'asserts' keyword. Instead of returning a boolean, it strictly throws a runtime error if the condition is false. If it doesn't throw, TS automatically narrows the type for the rest of the surrounding scope!<code>function assertIsStr(x: any): asserts x is string { ... }</code>"
    },
    {
      "section": "tg-disc",
      "question": "Discriminant in discriminated union is?",
      "options": [
        "Any property",
        "<b>A shared literal property (kind/type)</b>",
        "Method",
        "Index"
      ],
      "answerIndex": 1,
      "explanation": "Discriminated Unions are the safest way to type complex state. By giving every object in a union a unique literal property (like type: 'success' | 'error'), you can use simple if/switch statements to flawlessly narrow the type.<code>if (res.status === 'success') { res.data; }</code>"
    },
    {
      "section": "tg-api",
      "question": "Why use type guards with API responses?",
      "options": [
        "Performance",
        "<b>Runtime data is untyped, needs validation</b>",
        "Style",
        "TypeScript requires it"
      ],
      "answerIndex": 1,
      "explanation": "Whenever you fetch JSON data from an API, TypeScript has absolutely no idea what shape the data is in (it types it as 'any' or 'unknown'). You MUST write Type Guards (or use libraries like Zod) to validate the data at runtime before trusting it!<code>if (isUser(data)) { ... }</code>"
    },
    {
      "section": "tg-custom",
      "question": "<code>function isString(x: unknown): x is string</code>  --  <code>is</code> means?",
      "options": [
        "Comparison",
        "Assignment",
        "<b>Type predicate</b>",
        "instanceof"
      ],
      "answerIndex": 2,
      "explanation": "The 'unknown' type is the strict, safe sibling of 'any'. You can assign anything to 'unknown', but TypeScript completely forbids you from accessing properties on it UNTIL you use a Type Guard to prove what type it actually is.<code>let data: unknown;\nif (typeof data === 'string') data.toUpperCase();</code>"
    },
    {
      "section": "tg-assert",
      "question": "<code>asserts value is string</code>  --  if false?",
      "options": [
        "Returns false",
        "<b>Throws an error</b>",
        "Returns void",
        "Logs warning"
      ],
      "answerIndex": 1,
      "explanation": "While Type Predicates (x is string) are used in if-statements to conditionally branch logic, Assertion Guards (asserts x is string) are used to aggressively crash the application if the data is horribly wrong, instantly narrowing the type downstream.<code>assertIsString(val);\nval.toUpperCase(); // Safe here!</code>"
    },
    {
      "section": "tg-recap",
      "question": "Built-in type guards include?",
      "options": [
        "<b>typeof, instanceof, in</b>",
        "is, as, extends",
        "guard, check, verify",
        "type, class, interface"
      ],
      "answerIndex": 0,
      "explanation": "TypeScript natively understands 3 JavaScript operators as perfect type guards. 'typeof' for primitives, 'instanceof' for classes/arrays, and 'in' for checking if an object possesses a specific property key.<code>if ('swim' in animal) animal.swim();</code>"
    },
    {
      "section": "tg-mistakes",
      "question": "Common mistake: not narrowing <code>unknown</code> before use?",
      "options": [
        "Works fine",
        "<b>TypeScript error  --  must check type first</b>",
        "Returns any",
        "Auto-narrows"
      ],
      "answerIndex": 1,
      "explanation": "If you try to access 'x.name' when 'x' is typed as 'unknown', TypeScript throws a strict error. You must first prove that 'x' is an object and possesses the 'name' property using a type guard!<code>if (typeof x === 'object' && x !== null && 'name' in x)</code>"
    }
  ],
  "api-calls.html": [
    {
      "section": "api-get",
      "question": "<code>response.ok</code> checks?",
      "options": [
        "Body exists",
        "<b>HTTP status 200-299</b>",
        "JSON valid",
        "Network connected"
      ],
      "answerIndex": 1,
      "explanation": "The fetch API's Response object provides a brilliant '.ok' boolean property. It is automatically set to 'true' if the HTTP status code is anything between 200 and 299 (a successful request), and 'false' for 400s or 500s.<code>if (!res.ok) throw new Error('Failed!');</code>"
    },
    {
      "section": "api-get",
      "question": "<code>response.json()</code> returns?",
      "options": [
        "Object",
        "String",
        "<code>Promise</code>",
        "Array"
      ],
      "answerIndex": 2,
      "explanation": "The 'response.json()' method does NOT return data instantly! It reads the incoming data stream and asynchronously parses it. Therefore, it returns a Promise, meaning you absolutely MUST 'await' it!<code>let obj = await res.json(); // Must await!</code>"
    },
    {
      "section": "api-get",
      "question": "Default HTTP method for fetch?",
      "options": [
        "POST",
        "<code>GET</code>",
        "PUT",
        "PATCH"
      ],
      "answerIndex": 1,
      "explanation": "By default, if you just call fetch(url) without providing a configuration object, it automatically executes an HTTP GET request, which is used strictly for retrieving data from a server.<code>fetch('https://api.com/users'); // GET request</code>"
    },
    {
      "section": "api-post",
      "question": "Send data with POST requires?",
      "options": [
        "URL only",
        "<code>body: JSON.stringify(data) + headers</code>",
        "query params",
        "FormData only"
      ],
      "answerIndex": 1,
      "explanation": "To send data to a server (like submitting a form), you must use a POST request. You configure fetch with { method: 'POST' } and you MUST JSON.stringify() your data payload before passing it into the 'body' property!<code>body: JSON.stringify({ name: 'Jo' })</code>"
    },
    {
      "section": "api-error",
      "question": "Why isn't fetch rejected on 404?",
      "options": [
        "Bug",
        "<b>Only rejects on network failure</b>",
        "Always resolves",
        "Depends on server"
      ],
      "answerIndex": 1,
      "explanation": "The single biggest trap with fetch() is that it DOES NOT reject its Promise for 404 (Not Found) or 500 (Server Error) HTTP responses! It ONLY rejects if the internet disconnects or the DNS fails. You MUST manually check res.ok!<code>// 404s still resolve the fetch promise!</code>"
    },
    {
      "section": "api-get",
      "question": "<code>fetch(url)</code> returns?",
      "options": [
        "Data",
        "Response",
        "<code>Promise&lt;Response&gt;</code>",
        "JSON"
      ],
      "answerIndex": 2,
      "explanation": "The fetch() function is built directly into modern browsers (and modern Node.js). It is the universal standard for making asynchronous HTTP requests to external APIs, entirely replacing the legacy XMLHttpRequest (XHR).<code>let response = await fetch(url);</code>"
    },
    {
      "section": "api-post",
      "question": "Content-Type header for JSON POST?",
      "options": [
        "text/plain",
        "text/html",
        "<code>application/json</code>",
        "multipart/form"
      ],
      "answerIndex": 2,
      "explanation": "When sending JSON data via a POST or PUT request, you are strictly required to tell the server what format you are sending! You do this by passing a 'headers' object with 'Content-Type': 'application/json'.<code>headers: { 'Content-Type': 'application/json' }</code>"
    },
    {
      "section": "api-error",
      "question": "How to handle fetch errors properly?",
      "options": [
        "Just .catch()",
        "<b>Check response.ok AND use try/catch</b>",
        "Ignore them",
        "Use callbacks"
      ],
      "answerIndex": 1,
      "explanation": "The ultimate, bulletproof fetch pattern: 1) Await the fetch. 2) Explicitly check if(!res.ok) and throw an Error if false. 3) Await res.json(). 4) Wrap the entire thing in a try/catch block to elegantly handle the failure.<code>if (!res.ok) throw new Error('Bad status');</code>"
    },
    {
      "section": "api-what",
      "question": "API stands for?",
      "options": [
        "App Programming Interface",
        "<b>Application Programming Interface</b>",
        "Async Program Input",
        "Auto Process Integration"
      ],
      "answerIndex": 1,
      "explanation": "API stands for Application Programming Interface. In web development, it generally refers to a server URL that your JavaScript code can request data from (usually in JSON format) to populate your application dynamically.<code>// The menu your frontend uses to order data!</code>"
    },
    {
      "section": "api-type",
      "question": "Type API responses how?",
      "options": [
        "Use any",
        "<b>Define interface + use as generic</b>",
        "No types needed",
        "Use JSON type"
      ],
      "answerIndex": 1,
      "explanation": "Because res.json() returns the unsafe 'any' type, TypeScript requires you to manually type the result using an interface. This immediately restores strict type checking and rich autocomplete for the fetched data.<code>const users = await res.json() as User[];</code>"
    },
    {
      "section": "api-loading",
      "question": "Loading state pattern shows?",
      "options": [
        "Nothing",
        "<b>Spinner/skeleton while data fetches</b>",
        "Error",
        "Cached data"
      ],
      "answerIndex": 1,
      "explanation": "Because fetch is an asynchronous network request that takes time, you should always maintain an 'isLoading' boolean state in your UI. Set it to true before fetching, and set it to false inside a 'finally' block when done!<code>finally { setLoading(false); }</code>"
    },
    {
      "section": "api-mistakes",
      "question": "Common mistake: not checking <code>response.ok</code>?",
      "options": [
        "Auto-checked",
        "<b>404/500 won't throw  --  must check manually</b>",
        "Always throws",
        "No issue"
      ],
      "answerIndex": 1,
      "explanation": "Always remember: fetch() considers a 404 Not Found to be a 'successful' network connection to the server! It will NOT trigger your catch block! You must explicitly write 'if (!res.ok) throw new Error();' to trap it.<code>// fetch() only rejects if wifi drops!</code>"
    }
  ],
  "design-patterns.html": [
    {
      "section": "dp-singleton",
      "question": "Singleton ensures?",
      "options": [
        "Many instances",
        "<b>Only one instance exists</b>",
        "No instances",
        "Factory created"
      ],
      "answerIndex": 1,
      "explanation": "The Singleton pattern ensures that a Class can only ever have ONE single instance created, providing a global point of access to it. It's heavily used for Database connections or global App State managers to prevent memory duplication.<code>// Only ONE database connection forever!</code>"
    },
    {
      "section": "dp-factory",
      "question": "Factory pattern hides?",
      "options": [
        "Data",
        "<b>The exact class being created</b>",
        "Errors",
        "Methods"
      ],
      "answerIndex": 1,
      "explanation": "The Factory pattern is a dedicated function or method that abstracts away the complex 'new' keyword logic. Instead of calling 'new Car()' directly, you ask the Factory: Factory.create('car'), and it builds the correct object for you.<code>const enemy = EnemyFactory.spawn('goblin');</code>"
    },
    {
      "section": "dp-observer",
      "question": "Observer pattern enables?",
      "options": [
        "Single instance",
        "<b>Subscribe to and react to events</b>",
        "Swapping algorithms",
        "Creating objects"
      ],
      "answerIndex": 1,
      "explanation": "The Observer pattern (Pub/Sub) is the architecture behind all modern reactive frameworks (like React or RxJS). A 'Subject' maintains a list of 'Observers', and whenever the Subject's data changes, it automatically broadcasts an update to all of them!<code>store.subscribe(() => updateUI());</code>"
    },
    {
      "section": "dp-strategy",
      "question": "When use Strategy pattern?",
      "options": [
        "One instance",
        "Events",
        "<b>Swappable algorithms</b>",
        "Object creation"
      ],
      "answerIndex": 2,
      "explanation": "The Strategy pattern allows you to dynamically swap out algorithms or behaviors at runtime! Instead of writing a massive if-statement, you pass an interchangeable 'Strategy' object (like an AuthStrategy) into the main class.<code>const sorter = new Sorter(new QuickSortAlgo());</code>"
    },
    {
      "section": "dp-observer",
      "question": "Which pattern is used for event systems?",
      "options": [
        "Singleton",
        "Factory",
        "<code>Observer</code>",
        "Strategy"
      ],
      "answerIndex": 2,
      "explanation": "Event Listeners (like addEventListener) are the most famous, natively built-in example of the Observer pattern in JavaScript! The button is the 'Subject', and your callback is the 'Observer' waiting for the broadcast.<code>button.addEventListener('click', observerFunc);</code>"
    },
    {
      "section": "dp-singleton",
      "question": "Singleton uses <code>private constructor</code> to?",
      "options": [
        "Hide methods",
        "<b>Prevent external instantiation</b>",
        "Improve speed",
        "Enable inheritance"
      ],
      "answerIndex": 1,
      "explanation": "To strictly enforce a Singleton in TypeScript, you must set the constructor to 'private'! This physically prevents any developer from ever typing 'new DB()', forcing them to use the approved 'DB.getInstance()' static method.<code>class DB { private constructor() {} }</code>"
    },
    {
      "section": "dp-factory",
      "question": "Factory returns?",
      "options": [
        "Always same type",
        "<b>Different objects based on input</b>",
        "Singleton",
        "Promise"
      ],
      "answerIndex": 1,
      "explanation": "The massive benefit of the Factory pattern is decoupling. Your main application logic doesn't need to know exactly which classes exist or how to build them; it just asks the Factory for a 'Shape' and trusts the result.<code>// Decouples creation logic from usage logic.</code>"
    },
    {
      "section": "dp-observer",
      "question": "Observer has which two roles?",
      "options": [
        "Creator/Destroyer",
        "<b>Subject (publisher) and Observer (subscriber)</b>",
        "Factory/Product",
        "Client/Server"
      ],
      "answerIndex": 1,
      "explanation": "In the Observer pattern, decoupling is key. The Subject (data source) has absolutely no idea who is listening to it. It just blindly shouts 'I updated!' and trusts that the Observers will handle the UI changes.<code>// Total separation of concerns!</code>"
    },
    {
      "section": "dp-what",
      "question": "Design patterns are?",
      "options": [
        "Libraries",
        "<b>Reusable solutions to common problems</b>",
        "Frameworks",
        "npm packages"
      ],
      "answerIndex": 1,
      "explanation": "Design Patterns are not libraries or code snippets; they are universally agreed-upon blueprints for solving incredibly common architectural problems in software engineering. They give developers a shared vocabulary.<code>// 'We need a Singleton here!'</code>"
    },
    {
      "section": "dp-mistakes",
      "question": "Common mistake: overusing Singleton?",
      "options": [
        "Always good",
        "<b>Creates tight coupling, hard to test</b>",
        "No downside",
        "Required"
      ],
      "answerIndex": 1,
      "explanation": "The Singleton pattern is often considered an 'Anti-Pattern' because it acts like a glorified global variable! It creates hidden dependencies and makes Unit Testing incredibly difficult because the global state persists between tests.<code>// Use Dependency Injection instead of Singletons!</code>"
    }
  ],
  "decorators.html": [
    {
      "section": "dec-what",
      "question": "Decorator symbol prefix?",
      "options": [
        "#",
        "$",
        "<code>@</code>",
        "&"
      ],
      "answerIndex": 2,
      "explanation": "A Decorator is a special type of declaration that can be attached to a class, method, or property. It uses the '@' symbol and acts as a wrapper function that can observe, modify, or completely replace the behavior of the item it sits on!<code>@Controller('/users')\nclass UserCtrl {}</code>"
    },
    {
      "section": "dec-class",
      "question": "Class decorator receives?",
      "options": [
        "Instance",
        "<b>The class constructor</b>",
        "Properties",
        "Methods"
      ],
      "answerIndex": 1,
      "explanation": "A Class Decorator is applied directly above the class definition. At runtime, JavaScript passes the entire Class Constructor into the decorator function, allowing you to add new properties, freeze the prototype, or register the class globally.<code>function sealed(constructor: Function) { ... }</code>"
    },
    {
      "section": "dec-method",
      "question": "Method decorator receives?",
      "options": [
        "Return value",
        "<code>target, propertyKey, descriptor</code>",
        "Only method name",
        "The class"
      ],
      "answerIndex": 1,
      "explanation": "A Method Decorator observes a specific function inside a class. It receives three arguments: the class prototype, the name of the method, and the Property Descriptor (which allows you to literally rewrite the method's executable code!).<code>function LogSpeed(target, key, desc) { ... }</code>"
    },
    {
      "section": "dec-what",
      "question": "Decorators run at?",
      "options": [
        "Compile time",
        "<b>Runtime</b>",
        "Build time",
        "Import time"
      ],
      "answerIndex": 1,
      "explanation": "A critical fact: Decorators do NOT execute when a class is instantiated (new Class()). They execute exactly once, at runtime, the very moment the browser/Node reads the class definition in the file.<code>// Decorators run during script initialization!</code>"
    },
    {
      "section": "dec-what",
      "question": "tsconfig option for decorators?",
      "options": [
        "enableDecorators",
        "<code>experimentalDecorators</code>",
        "useDecorators",
        "decoratorSupport"
      ],
      "answerIndex": 1,
      "explanation": "Because Decorators were an experimental stage-2 JavaScript proposal for years, TypeScript strictly requires you to open your tsconfig.json and explicitly set 'experimentalDecorators: true' to enable the legacy '@' syntax!<code>// Must be enabled in tsconfig!</code>"
    },
    {
      "section": "dec-prop",
      "question": "Property decorator receives?",
      "options": [
        "Value",
        "<b>target and propertyKey</b>",
        "Descriptor",
        "Constructor"
      ],
      "answerIndex": 1,
      "explanation": "A Property Decorator is attached to a specific variable inside a class. It is famously used in frameworks like Angular or TypeORM to mark properties as database columns or required inputs.<code>@Column() title: string;</code>"
    },
    {
      "section": "dec-method",
      "question": "Multiple decorators execute in which order?",
      "options": [
        "Top to bottom",
        "<b>Bottom to top (closest first)</b>",
        "Random",
        "Left to right"
      ],
      "answerIndex": 1,
      "explanation": "When you stack multiple decorators on a single method, their execution order is perfectly deterministic: they are evaluated top-down, but they are actually EXECUTED bottom-up (like peeling an onion from the inside out)!<code>@First @Second doX() // Second runs, THEN First!</code>"
    },
    {
      "section": "dec-memo",
      "question": "Memoization decorator does?",
      "options": [
        "Logs calls",
        "<b>Caches results of expensive functions</b>",
        "Validates input",
        "Times execution"
      ],
      "answerIndex": 1,
      "explanation": "Method decorators are incredibly powerful for Meta-Programming. A '@Memoize' decorator can intercept a method's execution, check if the result is already cached, and return the cache directly without ever running the actual method!<code>// Intercepts and rewrites behavior!</code>"
    },
    {
      "section": "dec-log",
      "question": "A logging decorator does?",
      "options": [
        "Removes logs",
        "<b>Auto-logs method calls and arguments</b>",
        "Validates types",
        "Caches results"
      ],
      "answerIndex": 1,
      "explanation": "Decorators are the ultimate tool for Aspect-Oriented Programming. They allow you to rip out repetitive boilerplate (like logging, performance tracking, or permission checking) and abstract it into a reusable '@' tag.<code>@RequiresAuth() deleteUser() { ... }</code>"
    },
    {
      "section": "dec-mistakes",
      "question": "Common mistake: forgetting <code>experimentalDecorators</code> in tsconfig?",
      "options": [
        "Not needed",
        "<b>Decorators won't work without it</b>",
        "Auto-enabled",
        "Only for Node"
      ],
      "answerIndex": 1,
      "explanation": "If you try to use the '@' decorator syntax without enabling 'experimentalDecorators' in your config, the TypeScript compiler will throw a massive error. Always check your tsconfig when setting up frameworks like NestJS!<code>// Error: Experimental support...</code>"
    }
  ],
  "mapped-conditional-types.html": [
    {
      "section": "mc-mapped",
      "question": "<code>keyof T</code> returns?",
      "options": [
        "Values",
        "<b>Union of all property names</b>",
        "Array of keys",
        "Object"
      ],
      "answerIndex": 1,
      "explanation": "A Mapped Type acts exactly like a 'for-loop' for TypeScript interfaces. It iterates over all the keys of an existing type using '[K in keyof T]' and applies a transformation to each property, creating a brand new interface automatically.<code>type Stringify&lt;T&gt; = { [K in keyof T]: string };</code>"
    },
    {
      "section": "mc-mapped",
      "question": "<code>in</code> in mapped type does?",
      "options": [
        "Checks existence",
        "<b>Iterates over each key</b>",
        "Filters keys",
        "Adds keys"
      ],
      "answerIndex": 1,
      "explanation": "The built-in 'Readonly&lt;T&gt;' utility is actually just a simple mapped type! It iterates over every key in your object and attaches the 'readonly' modifier to the front of the property signature.<code>{ readonly [K in keyof T]: T[K] }</code>"
    },
    {
      "section": "mc-cond",
      "question": "Conditional type syntax?",
      "options": [
        "T if U then X else Y",
        "<code>T extends U ? X : Y</code>",
        "T === U ? X : Y",
        "T is U ? X : Y"
      ],
      "answerIndex": 1,
      "explanation": "Conditional Types use the exact same syntax as JavaScript's ternary operator (? :). They allow the TypeScript compiler to logically branch and choose a type based on whether a condition ('T extends X') evaluates to true or false!<code>type IsString&lt;T&gt; = T extends string ? true : false;</code>"
    },
    {
      "section": "mc-infer",
      "question": "<code>infer</code> keyword does?",
      "options": [
        "Declares variable",
        "<b>Extracts a type from within another</b>",
        "Checks type",
        "Creates type"
      ],
      "answerIndex": 1,
      "explanation": "The 'infer' keyword is absolute magic. When used inside a Conditional Type, it asks the compiler to act like a detective, automatically extracting and 'inferring' a hidden type (like the generic type inside an array) so you can return it.<code>// Infers the array contents!</code>"
    },
    {
      "section": "mc-custom",
      "question": "Which built-in type uses mapped types?",
      "options": [
        "Array",
        "<b>Partial, Readonly, etc.</b>",
        "Promise",
        "Function"
      ],
      "answerIndex": 1,
      "explanation": "Mapped types are incredibly powerful for mass-modifications. If you want a version of your interface where every property can be null, you just write a mapped type that adds '| null' to every single key!<code>{ [K in keyof T]: T[K] | null }</code>"
    },
    {
      "section": "mc-mapped",
      "question": "<code>type MyPartial&lt;T&gt; = { [K in keyof T]?: T[K]",
      "options": [
        "Required",
        "<b>Each property optional</b>",
        "Readonly",
        "Nullable"
      ],
      "answerIndex": 1,
      "explanation": "Mapped types can also REMOVE modifiers! If an interface has readonly or optional (?) properties, you can forcibly strip them away by placing a minus sign (-) in front of the modifier in your mapped type loop!<code>{ -readonly [K in keyof T]-?: T[K] } // Strips all!</code>"
    },
    {
      "section": "mc-cond",
      "question": "<code>T extends string ? 'yes' : 'no'</code> with <code>T=number</code>?",
      "options": [
        "'yes'",
        "<code>'no'</code>",
        "error",
        "never"
      ],
      "answerIndex": 1,
      "explanation": "Conditional types are the foundation of advanced generic utilities like 'Exclude' and 'Extract'. They allow TypeScript to dynamically resolve types at compile time based on the exact generic arguments provided by the user.<code>// Type-level logic and branching!</code>"
    },
    {
      "section": "mc-infer",
      "question": "<code>infer R</code> in <code>T extends (...args:any)=>infer R ? R : never</code> extracts?",
      "options": [
        "Arguments",
        "<b>Return type</b>",
        "Function name",
        "Parameters"
      ],
      "answerIndex": 1,
      "explanation": "The 'infer' keyword can ONLY be used inside the 'extends' clause of a Conditional Type. It effectively creates a temporary type variable that captures a piece of the analyzed type for you to use in the true/false branches.<code>// It 'unwraps' complex types!</code>"
    },
    {
      "section": "mc-build",
      "question": "Building a mapped type requires?",
      "options": [
        "extends",
        "<b>[K in keyof T] syntax</b>",
        "typeof",
        "infer"
      ],
      "answerIndex": 1,
      "explanation": "The 'keyof' operator extracts a literal union of all the property names inside a type (e.g., 'name' | 'age'). The 'in' operator then loops over that union inside the mapped type brackets to process each key individually.<code>// The engine of mapped types!</code>"
    },
    {
      "section": "mc-mistakes",
      "question": "Common mistake: forgetting <code>keyof</code> in mapped types?",
      "options": [
        "Optional",
        "<b>Without it, can't iterate over keys</b>",
        "Auto-inferred",
        "Not needed"
      ],
      "answerIndex": 1,
      "explanation": "A mapped type absolutely requires the 'in' and 'keyof' keywords to function. Without them, TypeScript has no iterable list of keys to loop through, and the mapped type will fail to compile.<code>// [K in keyof T] is the golden syntax.</code>"
    }
  ],
  "testing.html": [
    {
      "section": "test-structure",
      "question": "<code>describe()</code> does?",
      "options": [
        "Runs test",
        "<b>Groups related tests</b>",
        "Asserts value",
        "Mocks function"
      ],
      "answerIndex": 1,
      "explanation": "The 'describe()' function creates a Test Suite, physically grouping related tests together. The 'it()' (or test()) function defines an individual, isolated Test Case containing the actual assertions.<code>describe('Auth', () => { it('logs in', () => {}) });</code>"
    },
    {
      "section": "test-matchers",
      "question": "<code>expect().toBe()</code> checks?",
      "options": [
        "Deep equality",
        "<b>Strict equality (===)</b>",
        "Type match",
        "Truthy"
      ],
      "answerIndex": 1,
      "explanation": "The 'expect()' function takes the actual output of your code and chains it to a Matcher (like .toBe()). .toBe() strictly compares primitives using Object.is (which is exactly like ===). It will fail if comparing two different objects in memory!<code>expect(result).toBe(true);</code>"
    },
    {
      "section": "test-mock",
      "question": "<code>jest.fn()</code> creates?",
      "options": [
        "Real function",
        "<b>Mock function</b>",
        "Test suite",
        "Spy"
      ],
      "answerIndex": 1,
      "explanation": "A Mock Function (like jest.fn()) replaces a real function. It secretly tracks exactly how many times it was called, and what exact arguments were passed into it! It's essential for testing if callbacks were executed correctly.<code>expect(mockFunc).toHaveBeenCalledWith('user');</code>"
    },
    {
      "section": "test-setup",
      "question": "What runs before each test?",
      "options": [
        "afterEach",
        "<code>beforeEach()</code>",
        "describe",
        "it"
      ],
      "answerIndex": 1,
      "explanation": "The 'beforeEach()' hook is a lifesaver! It runs automatically right before every single 'it()' block inside the suite. It guarantees that every test starts with a completely fresh, identical environment, preventing tests from corrupting each other.<code>beforeEach(() => clearDatabase());</code>"
    },
    {
      "section": "test-async",
      "question": "Test async code how?",
      "options": [
        "Cannot test",
        "<b>Return promise or use async/await</b>",
        "Use setTimeout",
        "Use callbacks only"
      ],
      "answerIndex": 1,
      "explanation": "To test asynchronous code, you simply mark your 'it()' callback as 'async' and use the 'await' keyword inside it! The test runner will smartly pause the test until your Promises fully resolve before checking the assertions.<code>it('works', async () => { await doX(); });</code>"
    },
    {
      "section": "test-matchers",
      "question": "<code>toEqual()</code> vs <code>toBe()</code>?",
      "options": [
        "Same",
        "<b>toEqual checks deep equality, toBe checks reference</b>",
        "toBe is for objects",
        "toEqual is for primitives"
      ],
      "answerIndex": 1,
      "explanation": "While .toBe() strictly checks memory references, .toEqual() recursively scans every single property inside an object or array. You MUST use .toEqual() when comparing two separate objects that happen to hold the same data!<code>expect({a:1}).toEqual({a:1}); // Passes!</code>"
    },
    {
      "section": "test-matchers",
      "question": "<code>expect(fn).toThrow()</code> checks?",
      "options": [
        "Return value",
        "<b>That function throws an error</b>",
        "That function exists",
        "Async error"
      ],
      "answerIndex": 1,
      "explanation": "When testing that a function successfully throws an error, you MUST wrap the execution inside an anonymous callback arrow function! If you just run the function directly, the error will crash the test runner before the assertion happens.<code>expect(() => thrower()).toThrow();</code>"
    },
    {
      "section": "test-structure",
      "question": "AAA pattern stands for?",
      "options": [
        "<b>Arrange, Act, Assert</b>",
        "Add, Apply, Assert",
        "Assign, Act, Affirm",
        "Analyze, Act, Accept"
      ],
      "answerIndex": 0,
      "explanation": "AAA (Arrange, Act, Assert) is the universal industry standard for formatting a test. 1. Set up the fake data. 2. Call the function you want to test. 3. Expect the result to match your desired outcome.<code>// Arrange, Act, Assert keeps tests readable!</code>"
    },
    {
      "section": "test-what",
      "question": "Unit testing verifies?",
      "options": [
        "Whole app",
        "<b>Individual functions/units in isolation</b>",
        "UI only",
        "API only"
      ],
      "answerIndex": 1,
      "explanation": "Unit Testing strictly focuses on testing one single, isolated function or class at a time. If that function relies on a database or API, you absolutely must 'Mock' (fake) those external dependencies so the test runs instantly and predictably.<code>// Unit tests = 100% isolated logic.</code>"
    },
    {
      "section": "test-mistakes",
      "question": "Common mistake: testing implementation not behavior?",
      "options": [
        "Good practice",
        "<b>Tests break when refactoring  --  test outcomes instead</b>",
        "Required",
        "Faster"
      ],
      "answerIndex": 1,
      "explanation": "The golden rule of testing: Test the public BEHAVIOR, not the internal implementation! You should only assert that input X produces output Y. Do not write tests that care about which internal private variables or loops the function used.<code>// Refactoring internals shouldn't break tests!</code>"
    }
  ],
  "data-structures.html": [
    {
      "section": "ds-stack",
      "question": "LIFO stands for?",
      "options": [
        "Last In First Out",
        "<b>Last In, First Out (Stack)</b>",
        "Left In First Out",
        "Least In First Out"
      ],
      "answerIndex": 1,
      "explanation": "A Stack is a LIFO (Last-In, First-Out) data structure. Imagine a stack of plates: the last plate you place on top is the very first one you take off. JavaScript's native Call Stack and browser history perfectly utilize this architecture!<code>// Push adds to top, Pop removes from top.</code>"
    },
    {
      "section": "ds-queue",
      "question": "FIFO stands for?",
      "options": [
        "First In First Out",
        "<b>First In, First Out (Queue)</b>",
        "Fast In First Out",
        "Find In First Out"
      ],
      "answerIndex": 1,
      "explanation": "A Queue is a FIFO (First-In, First-Out) data structure. Imagine a line at a grocery store: the first person to join the line is the first person to be served. JS Event Loops and background task managers rely heavily on Queues!<code>// Enqueue adds to back, Dequeue removes from front.</code>"
    },
    {
      "section": "ds-stack",
      "question": "Big-O of array <code>push/pop</code>?",
      "options": [
        "O(n)",
        "<code>O(1)</code>",
        "O(log n)",
        "O(nÂ²)"
      ],
      "answerIndex": 1,
      "explanation": "In JavaScript Arrays, push() and pop() are incredibly fast (O(1) Constant Time) because they just touch the absolute end of the array. However, unshift() and shift() are devastatingly slow (O(N)) because they must re-index every single item in the array!<code>// Avoid shift() on massive arrays!</code>"
    },
    {
      "section": "ds-map",
      "question": "Map advantage over plain objects?",
      "options": [
        "Faster",
        "<b>Any key type + insertion order</b>",
        "Less memory",
        "Type safe"
      ],
      "answerIndex": 1,
      "explanation": "The ES6 'Map' is drastically superior to a standard Object for dictionaries! Maps preserve the exact insertion order of elements, have a built-in .size property, and most importantly, allow you to use ANY type (even Objects or Functions) as a key!<code>let m = new Map(); m.set(userObj, 'Data');</code>"
    },
    {
      "section": "ds-set",
      "question": "Set guarantees?",
      "options": [
        "Order",
        "<b>All values are unique</b>",
        "Sorted",
        "Fixed size"
      ],
      "answerIndex": 1,
      "explanation": "The ES6 'Set' is a hyper-optimized collection that strictly stores UNIQUE values. If you try to add a duplicate, the Set silently ignores it. It's the absolute fastest way to remove duplicates from an array!<code>let unique = [...new Set([1, 1, 2])]; // [1, 2]</code>"
    },
    {
      "section": "ds-linked",
      "question": "When use LinkedList?",
      "options": [
        "Random access",
        "<b>Frequent insertions/deletions</b>",
        "Sorting",
        "Searching"
      ],
      "answerIndex": 1,
      "explanation": "A Linked List stores data in nodes that point to the next node. Unlike Arrays, Linked Lists are incredibly fast at inserting or deleting items in the absolute middle of the list, because they don't have to shift any indexes -- they just update the pointers!<code>// Node -> NextNode -> NextNode</code>"
    },
    {
      "section": "ds-stack",
      "question": "Stack operations are called?",
      "options": [
        "add/remove",
        "enqueue/dequeue",
        "<b>push/pop</b>",
        "insert/delete"
      ],
      "answerIndex": 2,
      "explanation": "You can perfectly simulate a Stack using a standard JavaScript Array just by restricting yourself to ONLY using the array.push() and array.pop() methods.<code>let stack = []; stack.push(1); stack.pop();</code>"
    },
    {
      "section": "ds-queue",
      "question": "Queue operations are called?",
      "options": [
        "push/pop",
        "<b>enqueue/dequeue</b>",
        "add/remove",
        "shift/unshift"
      ],
      "answerIndex": 1,
      "explanation": "You can simulate a Queue using a standard Array by using push() to add to the back, and shift() to pull from the front. But beware, shift() is terrible for performance on massive datasets!<code>let q = []; q.push(1); q.shift();</code>"
    },
    {
      "section": "ds-map",
      "question": "<code>new Map().set('a',1).get('a')</code> returns?",
      "options": [
        "undefined",
        "'a'",
        "<code>1</code>",
        "Map"
      ],
      "answerIndex": 2,
      "explanation": "Objects inherit nasty prototype keys (like 'toString') which can cause severe dictionary collisions. Maps are 100% pure data stores with no inherited prototype keys, making them the safest choice for dynamic user-generated keys.<code>// Maps are immune to prototype pollution!</code>"
    },
    {
      "section": "ds-set",
      "question": "<code>new Set([1,2,2,3]).size</code> returns?",
      "options": [
        "4",
        "2",
        "<code>3</code>",
        "error"
      ],
      "answerIndex": 2,
      "explanation": "Checking if an item exists in a massive Array using .includes() is extremely slow (O(N)). Checking if an item exists in a massive Set using .has() is lightning fast (O(1)) because Sets use hash-table lookups!<code>mySet.has('value'); // Instant lookup!</code>"
    },
    {
      "section": "ds-bigo",
      "question": "Big-O notation measures?",
      "options": [
        "File size",
        "<b>Algorithm efficiency (time/space)</b>",
        "Lines of code",
        "Memory usage only"
      ],
      "answerIndex": 1,
      "explanation": "Big O Notation describes how an algorithm's speed degrades as the data gets massively larger. O(1) is instant regardless of size. O(N) takes twice as long for twice the data. O(N^2) (nested loops) will completely freeze your app on large data!<code>// Nested loops = Danger Zone O(N^2)</code>"
    },
    {
      "section": "ds-when",
      "question": "Choose data structure based on?",
      "options": [
        "Preference",
        "<b>What operations you need (speed of insert/search/delete)</b>",
        "Alphabetical",
        "File size"
      ],
      "answerIndex": 1,
      "explanation": "Choosing the right data structure dictates your app's performance. Fast key lookups? Map. Ensuring uniqueness? Set. Chronological history? Stack. Sequential processing? Queue. Ordered list? Array.<code>// Data Structures solve performance bottlenecks.</code>"
    },
    {
      "section": "ds-mistakes",
      "question": "Common mistake: using array when Map is better?",
      "options": [
        "Array is always best",
        "<b>Map has O(1) lookup vs array O(n)</b>",
        "Same speed",
        "Map is slower"
      ],
      "answerIndex": 1,
      "explanation": "A massive beginner mistake is using array.find() or array.indexOf() inside a loop to look up related data. This creates a hidden O(N^2) bottleneck! Convert the target array into a Map first, then perform lightning-fast O(1) lookups inside the loop.<code>// Maps make nested lookups instant!</code>"
    }
  ]
};
