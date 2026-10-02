# Day 4 — Node Setup, Modules, npm & Git

Today I learned the basics of setting up a Node.js project, using modules, managing packages with npm, and tracking code with Git.

---

## 1. Node.js

**Node.js** is a JavaScript runtime that allows JavaScript to run outside the browser.

It is built on Chrome's **V8 JavaScript engine**.

Node.js uses an **event loop** and asynchronous I/O, which allows it to handle many operations such as:

- File operations
- Network requests
- Database queries
- HTTP requests

without blocking the main JavaScript thread while waiting for slow operations.

---

## 2. Node.js LTS

When installing Node.js, use the **LTS (Long-Term Support)** version.

LTS versions are intended to provide:

- Stability
- Long-term support
- Security updates
- Reliable versions for projects

---

# 3. `package.json`

`package.json` is the main configuration file of a Node.js project.

You can think of it as the **project's ID card**.

It contains information such as:

```text
Project name
Version
Scripts
Dependencies
Module configuration
```

Create it with:

```bash
npm init -y
```

Example:

```json
{
  "name": "taskpilot",
  "version": "1.0.0"
}
```

---

## 4. npm

**npm (Node Package Manager)** is used to manage Node.js packages and project commands.

Install a package:

```bash
npm install package-name
```

Run a script from `package.json`:

```bash
npm run dev
```

For example:

```json
{
  "scripts": {
    "dev": "node index.js"
  }
}
```

Then:

```bash
npm run dev
```

will execute:

```bash
node index.js
```

**Yarn** is another package manager that performs similar tasks.

---

# 5. CommonJS vs ES Modules

Node.js supports different module systems.

## CommonJS

CommonJS uses:

```js
require();
```

and:

```js
module.exports;
```

Example:

```js
const math = require("./math");

console.log(math.add(2, 3));
```

---

## ES Modules

ES Modules use:

```js
import
export
```

Example:

```js
// math.js
export const add = (a, b) => a + b;
```

Then:

```js
// index.js
import { add } from "./math.js";

console.log(add(2, 3));
```

To use ES Modules in a Node.js project, add:

```json
{
  "type": "module"
}
```

to `package.json`.

---

# 6. Strict Mode

Strict mode makes JavaScript behave more strictly and helps catch certain programming mistakes.

It can be enabled with:

```js
"use strict";
```

With modern ES Modules, strict mode is automatically enabled, so you normally don't need to write it manually in files using `import`/`export`.

---

# 7. Git

**Git** is a version control system.

It allows us to track changes to our project over time.

Basic commands:

### Initialize Git

```bash
git init
```

### Check changes

```bash
git status
```

### Stage files

```bash
git add .
```

### Create a commit

```bash
git commit -m "Initial commit"
```

### Push to GitHub

```bash
git push
```

---

# 8. Create a Node Project

Basic setup:

```bash
mkdir taskpilot
cd taskpilot

npm init -y

git init
```

Create a `.gitignore` file:

```text
node_modules
.env
dist
```

These files/folders should generally not be committed to Git.

### Why?

`node_modules`

Contains installed dependencies and can be recreated with:

```bash
npm install
```

`.env`

Usually contains environment variables and potentially sensitive configuration.

`dist`

Usually contains compiled JavaScript generated from TypeScript.

---

# 9. Modules Example

Create:

```text
taskpilot/
├── index.js
└── math.js
```

### `math.js`

```js
export const add = (a, b) => a + b;
```

### `index.js`

```js
import { add } from "./math.js";

console.log(add(2, 3));
```

Output:

```text
5
```

---

# 10. Exercise — Create 3 Utility Modules

Create this structure:

```text
taskpilot/
├── index.js
│
└── utils/
    ├── math.js
    ├── string.js
    └── task.js
```

Your goal is to create **three separate modules** and import them into `index.js`.

### `math.js`

Create some mathematical utility functions.

For example:

```js
export const add = (a, b) => a + b;
```

You can add another function yourself.

### `string.js`

Create a string utility function.

For example, you could create a function that capitalizes text.

### `task.js`

Create a TaskPilot-related utility.

For example, you could create a function that checks whether a task is completed.

### `index.js`

Import functions from all three modules:

```js
import { ... } from "./utils/math.js";
import { ... } from "./utils/string.js";
import { ... } from "./utils/task.js";
```

Then call the functions and print their results.

---

# 11. TaskPilot Structure

The concepts from today will eventually be used in the actual TaskPilot project.

A possible structure is:

```text
TaskPilot/
├── package.json
├── tsconfig.json
├── .gitignore
│
├── data/
│   └── tasks.json
│
└── src/
    ├── types/
    │   └── task.ts
    │
    ├── store/
    │   └── taskStore.ts
    │
    └── server.ts
```

The `types/task.ts` file can contain:

```ts
export interface Task {
  id: number;
  title: string;
  remindAt?: Date;
  done: boolean;
}

export type ApiResponse<T> = {
  success: boolean;
  data: T;
};
```

---

# Key Takeaways

- **Node.js** runs JavaScript outside the browser.
- **V8** is the JavaScript engine used by Node.js.
- **LTS** versions provide long-term support and stability.
- `package.json` describes a Node.js project.
- **npm** manages packages and project scripts.
- **CommonJS** uses `require()` and `module.exports`.
- **ES Modules** use `import` and `export`.
- `"type": "module"` enables ES Module syntax for `.js` files.
- ES Modules are automatically in strict mode.
- **Git** tracks project changes.
- `.gitignore` prevents unwanted files from being committed.
- Modules allow code to be separated into smaller, reusable files.

---

## Day 4 Goal

> Understand how a Node.js project is structured and how to create, export, import, and use modules while managing the project with npm and Git.
