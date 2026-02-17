const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

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
}
