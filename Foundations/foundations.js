const name = "Asha";
let age = 22;
console.log(typeof name, typeof age);

const user = { name, age, skills: ["js", "sql"] };
console.log(user.skills.length);

const nums = [5, 2, 8, 1];
console.log(nums.map((n) => n * 2));
console.log(nums.filter((n) => n > 2));
console.log(nums.find((n) => n > 5));
console.log(nums.reduce((sum, n) => sum + n, 0));
console.log([...nums].sort((a, b) => a - b)); //Because sort() changes the original array.

console.log(5 & 3, 5 | 3);

tasks = [
  { title: "A", done: true },
  { title: "B", done: false },
];
// print only titles of tasks not done.
tasksDone = tasks.filter((t) => t.done !== true);
console.log(tasksDone);

tasksTitle = tasksDone.map((t) => t.title);
console.log(tasksTitle);
// Write down your Task shape: { id, title, remindAt, done }.

taskShape = {
  id: 1,
  title: "Do Homework",
  remindedAt: "2026-10-01 18:00",
  done: false,
};
