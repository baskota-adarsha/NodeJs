import fs from "fs/promises";
const file = "data/tasks.json";

export async function readTasks() {
  const text = await fs.readFile(file, "utf-8");
  return JSON.parse(text);
}
const tasks = await readTasks();
console.log(tasks);
export async function addTasks(task) {
  const text = await fs.readFile(file, "utf-8");
  const tasks = JSON.parse(text);
  tasks.push(task);
  await fs.writeFile("./data/tasks.json", JSON.stringify(tasks));
}
