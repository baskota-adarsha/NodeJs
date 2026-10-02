import { add, multiply } from "./utils/math.js";
import { capitalize } from "./utils/string.js";
import { isCompleted } from "./utils/task.js";
console.log(add(1, 3));
console.log(multiply(4, 3));
console.log(capitalize("ram"));
const task = {
  title: "Learn Node",
  done: false,
};

console.log(isCompleted(task));
