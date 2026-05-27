const columns = document.querySelectorAll(".task-list");

columns.forEach(column => {

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {

    const taskId = e.dataTransfer.getData("taskId");

    const task = document.getElementById(taskId);

    column.appendChild(task);

  });

});