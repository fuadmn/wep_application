const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


// adding submit

todoForm.addEventListener("submit", addTask);

function addTask(e){

   e.preventDefault();

   const taskText = todoInput.value.trim()
   
    // console.log(Date.now()) // waxa ku siinaa trikha numbar ah oo la fahmi karin
    //  console.log(new Date(Date.now())) // markaa larujomo time ka
    //  console.log(new Date(Date.now()).getFullYear()) // markaa larujomo sanadka
  //  console.log(new Date(Date.now()).getHours()); //sacada karaas lajoogo isii
   
  if(taskText !== ""){
    const task = {
        id : Date.now(), // tariiqda markas lajogo ku calameeno
        text: taskText,
        completed: false
    }
 
  }

   addTaskToDOM(task)
}

function addTaskToDOM(task){
    console.log(task)
    
}