const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


// adding submit

todoForm.addEventListener("submit", addTask);

function addTask(e){

   e.preventDefault();

   const taskText = todoInput.value.trim()
   
//    console.log(new Date(Date.now()).getHours());
   
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
    
}