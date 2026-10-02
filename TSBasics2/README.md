# Day 6 — Interfaces, Type Aliases, Generics & tsconfig

## Notes

### Interface

An `interface` describes the shape of an object.

```ts
interface Task {
  id: number;
  title: string;
  remindAt?: Date;
  done: boolean;
}
```

---

### Type Alias

A `type` can give a name to different kinds of types, including unions.

```ts
type Status = "pending" | "done" | "overdue";
```

---

### Generics

Generics allow us to create reusable code that works with different types.

```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}
```

Example:

```ts
const t = first<Task>([
  {
    id: 1,
    title: "A",
    done: false,
  },
]);
```

Here, `T` becomes `Task`.

---

# tsconfig.json

`tsconfig.json` controls how TypeScript compiles the project.

Important options:

```text
target   → JavaScript version to generate
module   → module system
outDir   → output folder
rootDir  → source folder
strict   → enable strict type checking
```

Example:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

# Exercise

Create a generic `ApiResponse<T>` type.

It should contain:

```text
success → boolean
data    → T
```

Example:

```ts
type ApiResponse<T> = {
  success: boolean;
  data: T;
};
```

It can then work with different types:

```ts
ApiResponse<Task>;
ApiResponse<Task[]>;
ApiResponse<string>;
```

---

# TaskPilot Step

Create:

```text
src/
└── types/
    └── task.ts
```

Put the TaskPilot types inside `task.ts`:

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

The idea is to keep reusable TypeScript types in one place.

---

## Day 6 Goal

> Understand interfaces, type aliases, generics, and basic `tsconfig.json` settings, then create reusable types for TaskPilot.
