window.addEventListener(
  "beforeunload",
  saveTasks
);

function saveTasks(){

  const tasks = [];

  document
  .querySelectorAll(".task")
  .forEach(task=>{

    tasks.push(task.innerText);

  });

  localStorage.setItem(
    "cyberTasks",
    JSON.stringify(tasks)
  );

}