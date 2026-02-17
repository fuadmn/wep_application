const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks(){

  // getting old tasks tasks form localStorage
    
   const tasks = getTasksFormLocalStorage();

   tasks.forEach(task => {
    addTaskToDOM(task)
   })
   
}


// adding submit

todoForm.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();

  const taskText = todoInput.value.trim();

  //    console.log(new Date(Date.now()).getHours());

  if (taskText !== "") {
    const task = {
      id: Date.now(), // tariiqda markas lajogo ku calameeno
      text: taskText,
      completed: false,
    };
    //adding to the dom
    addTaskToDOM(task);
    saveTaskToLocalStorage(task)

    todoInput.value = ""; //input ka qimaha ku jiro firaqeey markad dom ka dirto input ka ifiraqeey
  }
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.className = `todo-item ${task.completed ? "completed" : ""}`;
  li.dataset.id = task.id;

  li.innerHTML = ` <input type="checkbox" class="complete-checkbox">
                     <span class="task">${task.text}</span>
                     <button class="edit-btn">Edit</button>
                     <button class="delete-btn">Delete</button>`;

  todoList.appendChild(li);



 attachEventListeners(li, task)

}

function attachEventListeners(li,task){

  const deleteBtn = li.querySelector(".delete-btn");
  const editBtn = li.querySelector(".edit-btn");


  deleteBtn.addEventListener("click", function(){
     handleDetele(task.id,li);
  });


  editBtn.addEventListener("click", function(){
    handleEdit(task.id, li)
  })

 }

 function handleDetele(taskId,li){

  const taskSpan = li.querySelector(".task");

  console.log(taskSpan)
  
  
 }

 function handleEdit(taskId, li){
   
   const taskSpan = li.querySelector(".task");



   const newTaskText = prompt("Edit your task:", taskSpan.textContent)

   if(newTaskText !== null && newTaskText.trim() !== ""){
    
    // update the local storage

    // update the dom

    taskSpan.textContent = newTaskText;

   } 
   
   

 }

 function  handleDetele (id, li){

  let tasks = getTasksFormLocalStorage();

  tasks = tasks.filter(task => task.id != id);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  li.remove();
  
 }


function saveTaskToLocalStorage(task){

  const oldTask =getTasksFormLocalStorage();
  oldTask.push(task);
  
  localStorage.setItem("tasks", JSON.stringify(oldTask))

}

function getTasksFormLocalStorage(){

  const oldTask = JSON.parse(localStorage.getItem("tasks")) || [];
  return oldTask;
}