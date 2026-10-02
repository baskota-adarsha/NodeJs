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
