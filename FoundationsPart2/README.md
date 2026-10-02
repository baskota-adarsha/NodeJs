# 📅 Day 2: Functions, Loops & Conditions

Today we learn how JavaScript **reuses code, repeats operations, and makes decisions**.

---

## 🧠 Concepts

### 🔧 Functions

Functions are reusable blocks of code.

There are two common styles:

#### Regular Function

```js
function add(a, b) {
  return a + b;
}
```

- Function declarations are **hoisted**.
- They can be called before they appear in the code.

#### Arrow Function

```js
const addArrow = (a, b) => a + b;
```

Arrow functions provide a shorter syntax.

For a single parameter and single expression, they can be shortened even further:

```js
const double = (n) => n * 2;
```

> 💡 Arrow functions do **not** have their own `this`; they inherit `this` from their surrounding scope.

---

## 🔁 Loops

Loops allow us to execute code repeatedly.

### `for` — Counting

Use a `for` loop when you have a clear counter or number of iterations.

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

Output:

```text
0
1
2
```

---

### `for...of` — Array Values

Use `for...of` when you want to go through the values of an iterable, especially arrays.

```js
for (const t of ["a", "b"]) {
  console.log(t);
}
```

Output:

```text
a
b
```

---

### `while` — Until a Condition

A `while` loop continues running **as long as its condition is true**.

```js
let n = 0;

while (n < 5) {
  n++;

  if (n === 3) continue;
  if (n === 5) break;

  console.log(n);
}
```

Output:

```text
1
2
4
```

---

## 🛑 `break` & `continue`

These statements control how loops behave.

### `continue`

`continue` means:

> **Skip the current iteration and move to the next one.**

```js
if (n === 3) continue;
```

When `n` is `3`, JavaScript skips the rest of that iteration.

### `break`

`break` means:

> **Stop the loop completely.**

```js
if (n === 5) break;
```

Once `n` becomes `5`, the loop ends.

### Quick Difference

```text
continue → Skip this iteration
break    → Stop the entire loop
```

---

## 🔀 Conditions

Conditions allow your program to make decisions.

### `if / else`

Use `if/else` when your decision depends on conditions.

```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## 🎛️ `switch`

Use `switch` when you are checking **one value against several fixed values**.

```js
function priority(level) {
  switch (level) {
    case "high":
      return 1;

    case "low":
      return 3;

    default:
      return 2;
  }
}
```

Examples:

```js
priority("high"); // 1
priority("low"); // 3
priority("medium"); // 2
```

Here:

```text
"high" → 1
"medium" → 2
"low" → 3
```

The `default` case handles values that don't match any `case`.

---

## 💻 Complete Code

```js
// Functions

function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

const double = (n) => n * 2;

// for loop

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// for...of loop

for (const t of ["a", "b"]) {
  console.log(t);
}

// while loop + continue + break

let n = 0;

while (n < 5) {
  n++;

  if (n === 3) continue;
  if (n === 5) break;

  console.log(n);
}

// switch

function priority(level) {
  switch (level) {
    case "high":
      return 1;

    case "low":
      return 3;

    default:
      return 2;
  }
}
```

---

## 🎯 Quick Revision

| Concept          | Meaning                        |
| ---------------- | ------------------------------ |
| Function         | Reusable block of code         |
| Regular function | `function add() {}`            |
| Arrow function   | `const add = () => {}`         |
| `for`            | Counting / repeated iterations |
| `while`          | Repeat while condition is true |
| `for...of`       | Loop through values            |
| `break`          | Stop the loop                  |
| `continue`       | Skip current iteration         |
| `if/else`        | Make decisions                 |
| `switch`         | Match multiple fixed values    |

### 🧠 Remember

```text
Functions  → Reuse code
Loops      → Repeat code
if/else    → Make decisions
switch     → Match fixed values

break      → STOP
continue   → SKIP
```
