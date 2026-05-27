const appState = {

  tasks: [],

  theme: "dark"

};

function initializeApp(){

  console.log(
    "Cyberpunk Task Manager Initialized"
  );

  loadSavedTheme();

  setupAppListeners();

}

function setupAppListeners(){

  const addTaskBtn =
  document.getElementById(
    "addTaskBtn"
  );

  addTaskBtn.addEventListener(
    "mouseenter",
    ()=>{

      addTaskBtn.style.transform =
      "scale(1.05)";

    }
  );

  addTaskBtn.addEventListener(
    "mouseleave",
    ()=>{

      addTaskBtn.style.transform =
      "scale(1)";

    }
  );

}

function loadSavedTheme(){

  const savedTheme =
  localStorage.getItem("theme");

  if(savedTheme === "light"){

    document.body
    .classList.add("dark");

    appState.theme = "light";

  }

}

initializeApp();