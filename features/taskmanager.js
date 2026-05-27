const addTaskBtn =
document.getElementById("addTaskBtn");

const taskInput =
document.getElementById("taskInput");

const prioritySelect =
document.getElementById("prioritySelect");

const todoColumn =
document.querySelector("#todo .task-list");

addTaskBtn.addEventListener(
  "click",
  createTask
);

function createTask(){

  const text = taskInput.value.trim();

  if(text === "") return;

  const task =
  document.createElement("div");

  task.classList.add("task");

  task.innerHTML = `
    <h3>${text}</h3>

    <p>
      Priority:
      ${prioritySelect.value}
    </p>

    <div class="task-buttons">

      <button class="complete-btn">
        Complete
      </button>

      <button class="delete-btn">
        Delete
      </button>

    </div>
  `;

  todoColumn.appendChild(task);

  addDeleteFunction(task);

  addCompleteFunction(task);

  taskInput.value = "";

}

function addDeleteFunction(task){

  task
  .querySelector(".delete-btn")
  .addEventListener("click", ()=>{

    task.remove();

  });

}

function addCompleteFunction(task){

  task
  .querySelector(".complete-btn")
  .addEventListener("click", ()=>{

    const doneColumn =
    document.querySelector(
      "#done .task-list"
    );

    doneColumn.appendChild(task);

  });

}const addTaskBtn =
document.getElementById("addTaskBtn");

const taskInput =
document.getElementById("taskInput");

const prioritySelect =
document.getElementById("prioritySelect");

const todoColumn =
document.querySelector("#todo .task-list");

addTaskBtn.addEventListener(
  "click",
  createTask
);

function createTask(){

  const text = taskInput.value.trim();

  if(text === "") return;

  const task =
  document.createElement("div");

  task.classList.add("task");

  task.innerHTML = `
    <h3>${text}</h3>

    <p>
      Priority:
      ${prioritySelect.value}
    </p>

    <div class="task-buttons">

      <button class="complete-btn">
        Complete
      </button>

      <button class="delete-btn">
        Delete
      </button>

    </div>
  `;

  todoColumn.appendChild(task);

  addDeleteFunction(task);

  addCompleteFunction(task);

  taskInput.value = "";

}

function addDeleteFunction(task){

  task
  .querySelector(".delete-btn")
  .addEventListener("click", ()=>{

    task.remove();

  });

}

function addCompleteFunction(task){

  task
  .querySelector(".complete-btn")
  .addEventListener("click", ()=>{

    const doneColumn =
    document.querySelector(
      "#done .task-list"
    );

    doneColumn.appendChild(task);

  });

}