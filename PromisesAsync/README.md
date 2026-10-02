# Day 3 — Async JavaScript & File Handling

Today I learned how JavaScript handles slow operations such as **file operations, network requests, and database operations**.

---

## 1. JavaScript Is Single-Threaded

JavaScript runs code on a single main thread.

But slow operations such as:

- File operations
- Network requests
- Database queries
- Timers

can be handled asynchronously.

Instead of blocking the whole program, JavaScript can start the operation and continue doing other work. When the operation finishes, its result is handled later.

---

## 2. Callback

A **callback** is a function passed to another function so it can be called later.

```js
setTimeout(() => {
  console.log("later");
}, 1000);
```

Here:

```js
() => {
  console.log("later");
};
```

is the callback.

It is executed after the timer finishes.

### Problem

When many callbacks depend on each other, code can become deeply nested.

This is commonly called:

**Callback Hell**

---

## 3. Promise

A **Promise** represents a result that will be available later.

A Promise has three states:

```text
Pending
   ↓
Fulfilled
```

or

```text
Pending
   ↓
Rejected
```

Example:

```js
const wait = (ms) => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};
```

The Promise starts as **pending**.

After `ms` milliseconds:

```js
res();
```

is called, so the Promise becomes **fulfilled**.

---

## 4. async / await

`async/await` provides a cleaner way to work with Promises.

```js
async function main() {
  await wait(1000);

  console.log("Finished");
}
```

`await` means:

> Wait for this Promise to finish before continuing this async function.

---

## 5. Error Handling

Async operations can fail, so we commonly use:

```js
try {
  // async code
} catch (err) {
  // handle error
}
```

Example:

```js
async function main() {
  try {
    await someAsyncOperation();
  } catch (err) {
    console.error("Failed:", err.message);
  }
}
```

---

# 6. Working With Files

Node.js provides:

```js
import fs from "fs/promises";
```

This gives us Promise-based file operations.

### Write a file

```js
await fs.writeFile("tasks.json", JSON.stringify([{ title: "Learn Node" }]));
```

### Read a file

```js
const text = await fs.readFile("tasks.json", "utf-8");
```

### Convert JSON text into JavaScript data

```js
const tasks = JSON.parse(text);
```

---

# 7. Complete Example

```js
import fs from "fs/promises";

// Callback style
setTimeout(() => console.log("later"), 1000);

// Promise
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

// async/await
async function main() {
  try {
    await fs.writeFile("tasks.json", JSON.stringify([{ title: "Learn Node" }]));

    const text = await fs.readFile("tasks.json", "utf-8");

    console.log(JSON.parse(text));

    await wait(500);

    console.log("done");
  } catch (err) {
    console.error("Failed:", err.message);
  }
}

main();
```

---

# 8. Exercise — Add a Task

### Goal

Read the existing `tasks.json`, add a new task, and write the updated data back.

The basic flow is:

```text
tasks.json
    ↓
readFile()
    ↓
JSON.parse()
    ↓
Add task
    ↓
JSON.stringify()
    ↓
writeFile()
    ↓
tasks.json
```

Example:

```js
const text = await fs.readFile("tasks.json", "utf-8");

const tasks = JSON.parse(text);

tasks.push({
  title: "Learn Promises",
});

await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2));
```

---

# 9. TaskPilot — File-Based Task Store

For TaskPilot, I will temporarily use a JSON file as a small database.

```text
TaskPilot
│
├── data/
│   └── tasks.json
│
└── src/
    └── store/
        └── taskStore.js
```

The idea is:

```text
Application
     ↓
taskStore.js
     ↓
tasks.json
```

Later, this will become:

```text
Application
     ↓
Task Store / Repository
     ↓
PostgreSQL
```

---

## Task Store Responsibilities

The `taskStore.js` file will eventually contain functions such as:

```js
readTasks();
addTask();
updateTask();
deleteTask();
```

For now, it works with:

```text
data/tasks.json
```

Later, on **Day 9**, the file-based storage will be replaced with a real database.

---

# 10. Key Takeaways

- JavaScript executes code on a single main thread.
- Slow I/O operations can be handled asynchronously.
- A callback is a function called later.
- A Promise represents a future result.
- A Promise can be `pending`, `fulfilled`, or `rejected`.
- `async/await` makes Promise-based code easier to read.
- `try/catch` is used to handle errors from awaited operations.
- `fs/promises` provides Promise-based file operations.
- `JSON.parse()` converts JSON text → JavaScript data.
- `JSON.stringify()` converts JavaScript data → JSON text.
- TaskPilot will temporarily use `tasks.json` as storage.
- On Day 9, the file-based store will be replaced with a database.

---

## Day 3 Goal

> Understand asynchronous JavaScript well enough to read, modify, and write TaskPilot's task data using a JSON file.
