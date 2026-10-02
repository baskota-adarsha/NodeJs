# JavaScript Fundamentals

## Variables, Data Types, Arrays & Operators

### 📝 Notes

#### Variables

JavaScript provides different ways to declare variables:

- `const` → Cannot be reassigned.
- `let` → Can be reassigned.
- `var` → Avoid using it in modern JavaScript.

```js
const name = "Asha";
let age = 22;

age = 23; // ✅ Allowed
// name = "Ram"; // ❌ Not allowed
```

---

### 🔤 Data Types

#### Primitive Data Types

JavaScript's commonly used primitive types are:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`

```js
const name = "Asha"; // string
const age = 22; // number
const isActive = true; // boolean
const result = null; // null
let value; // undefined
```

#### Non-Primitive Data Types

Objects and arrays are non-primitive values and are handled through **references**.

```js
const user = {
  name: "Asha",
  age: 22,
};

const skills = ["JavaScript", "SQL"];
```

---

### 📦 Array Methods

These are some of the array methods you will use frequently:

| Method       | Purpose                              |
| ------------ | ------------------------------------ |
| `map()`      | Transform every element              |
| `filter()`   | Keep elements that match a condition |
| `find()`     | Find the first matching element      |
| `reduce()`   | Combine elements into a single value |
| `sort()`     | Sort elements                        |
| `includes()` | Check whether a value exists         |

Example:

```js
const nums = [5, 2, 8, 1];

nums.map((n) => n * 2);
nums.filter((n) => n > 2);
nums.find((n) => n > 5);
nums.reduce((sum, n) => sum + n, 0);
nums.sort((a, b) => a - b);
nums.includes(8);
```

---

### ⚙️ Operators

#### Arithmetic Operators

```text
+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Remainder
```

#### Comparison Operators

```text
===   Strict equality
!==   Strict inequality
>     Greater than
<     Less than
```

**Prefer `===` over `==`** for comparisons.

```js
5 === 5; // true
5 === "5"; // false
```

#### Logical Operators

```text
&&   AND
||   OR
!    NOT
```

Example:

```js
age >= 18 && isActive === true;
```

#### Bitwise Operators

```text
&   AND
|   OR
^   XOR
```

Bitwise operators work directly with the **binary representation of numbers**.

They are relatively rare in typical application development, so for now, just understand what they are and recognize them when you see them.

---

### 🎯 Quick Summary

```text
const       → Cannot reassign
let         → Can reassign
var         → Avoid

string      → Text
number      → Numbers
boolean     → true / false
null        → Intentional empty value
undefined   → Value not assigned

map         → Transform
filter      → Keep some
find        → First match
reduce      → Combine
sort        → Sort
includes    → Check existence

=== !==     → Comparison
&& || !     → Logic
& | ^       → Bitwise
```
