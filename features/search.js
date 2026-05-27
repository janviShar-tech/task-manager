const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener(
  "input",
  ()=>{

    const value =
    searchInput.value.toLowerCase();

    const tasks =
    document.querySelectorAll(".task");

    tasks.forEach(task=>{

      const text =
      task.innerText.toLowerCase();

      if(text.includes(value)){

        task.style.display = "block";

      }else{

        task.style.display = "none";

      }

    });

  }
);