import fs from "fs/promises";

//const wait = (ms) => new Promise((res) => setTimeout(res, ms));
async function main(params) {
  try {
    await fs.writeFile(
      "tasks.json",
      JSON.stringify([{ title: "Learn Node" }, { title: "Learn Js" }]),
    );
    const text = await fs.readFile("tasks.json", "utf-8");

    console.log(JSON.parse(text));
  } catch (error) {
    console.log("failed" + error);
  }
}

// Read tasks.json, add a task, write it back.
async function task(params) {
  try {
    await fs.readFile("tasks.json", "utf-8");
    const text = await fs.readFile("tasks.json", "utf-8");
    const tasks = JSON.parse(text);
    tasks.push({ title: "Learn React" });
    await fs.writeFile("tasks.json", JSON.stringify(tasks));
    console.log(tasks);
  } catch (error) {
    console.log("failed" + error);
  }
}
async function run() {
  await main();
  await task();
}
run();
