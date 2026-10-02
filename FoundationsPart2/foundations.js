function add(a, b) {
  return a + b;
}
const addArrow = (a, b) => a + b;
const double = (n) => n * 2;

for (let i = 0; i < 3; i++) console.log(i);
for (const t of ["a", "b"]) console.log(t);

let n = 0;
while (n < 5) {
  n++;
  if (n === 3) continue; // skip this iteration and keep looping
  if (n === 5) break; //stop the loop right now
  console.log(n);
}

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

console.log(priority("low"));

//Exercise: Write isOverdue(task) that returns true if task.remindAt is before now.

const taskShape = {
  id: 1,
  title: "Do Homework",
  remindAt: "2026-10-02 10:00",
  done: false,
};

const isOverdue = (task) => {
  return new Date(task.remindAt) < new Date();
};
console.log(isOverdue(taskShape));
