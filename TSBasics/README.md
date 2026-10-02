# Day 5 — TypeScript Basics

## Notes

### What is TypeScript?

**TypeScript = JavaScript + Types**

TypeScript helps catch many errors **before the code runs**.

---

## Type Annotation

You explicitly tell TypeScript the type:

```ts
let title: string = "Learn TS";

let age: number = 21;

let completed: boolean = false;
```

---

## Type Inference

TypeScript can automatically figure out the type:

```ts
let count = 5;
```

TypeScript understands:

```text
count → number
```

So you don't always need to write the type.

---

## TypeScript Setup

Install TypeScript and development tools:

```bash
npm i -D typescript ts-node-dev @types/node
```

Create a TypeScript configuration file:

```bash
npx tsc --init
```

---

# Basic Types

### String

```ts
let title: string = "Learn TS";
```

### Number

```ts
let count: number = 5;
```

### Boolean

```ts
let done: boolean = false;
```

### Array

```ts
const tags: string[] = ["a", "b"];
```

### Tuple

A tuple has a fixed order and type for its values:

```ts
const pair: [string, number] = ["x", 1];
```

Here:

```text
"x" → string
1   → number
```

### Union

A union allows a value to have more than one possible type:

```ts
let id: string | number = 1;

id = "ABC";
```

---

# Functions

You can specify the types of parameters and the return value:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Here:

```text
a → number
b → number
return → number
```

---

# Exercise

Convert the Day 2 functions into TypeScript.

### `isOverdue`

Use the `Task` type and check whether the task's reminder time is before the current time.

### `priority`

Convert the previous JavaScript function:

```text
high → 1
default → 2
low → 3
```

Make sure the function parameter and return type are typed.

---

# TaskPilot Step

Move the project entry point to:

```text
src/
└── index.ts
```

Your project can look like:

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
    └── index.ts
```

Add this script to `package.json`:

```json
{
  "scripts": {
    "dev": "ts-node-dev src/index.ts"
  }
}
```

Then run:

```bash
npm run dev
```

---

## Day 5 Goal

> Understand basic TypeScript types, type annotations, type inference, unions, tuples, and typed functions, then start using TypeScript in TaskPilot.
