function priorityy(level: string): Number {
  switch (level) {
    case "high":
      return 1;
    case "low":
      return 3;
    default:
      return 2;
  }
}
interface Task {
  id: number;
  title: string;
  remindAt: string;
  done: false;
}
const taskShape1: Task = {
  id: 1,
  title: "Do Homework",
  remindAt: "2026-10-02 10:00",
  done: false,
};

const isOverdue1 = (task: Task): Boolean => {
  return new Date(task.remindAt) < new Date();
};
console.log(isOverdue1(taskShape1));
