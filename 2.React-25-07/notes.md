## what is babel

Bebel is a transpiler , Babel covert script to browser understable code

# Transpiler

Transpilers, or source-to-source compilers, are tools that read source code written in one programming language, and produce the equivalent code in another language which is in the same level.

## What is Jsx

JSX is more intuitive than the raw React API and is easier to understand when
reading the code. It's fairly simple HTML-like syntactic sugar on top of the raw
React APIs:

```jsx
const ui = <h1 id="greeting">Hey there</h1>;

// ↓ ↓ ↓ ↓ compiles to ↓ ↓ ↓ ↓

const ui = React.createElement("h1", { id: "greeting", children: "Hey there" });
```
