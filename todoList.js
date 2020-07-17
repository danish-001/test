//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listner
todoButton.addEventListener('click', addTodo)

//functions
function addTodo(){ 
  
  //prevents form from submitting
  event.preventDefault();

  //creating a Div and a class inside it
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement('li');
  newTodo.innerHTML = "Workout";
  newTodo.classList.add("todo-item");

  //putting li inside the Div we jsut created
  todoDiv.appendChild(newTodo);

  //checkmark button
  const checkmarkButton = document.createElement("button");
  checkmarkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkmarkButton.classList.add("complete-btn");
  todoDiv.appendChild(checkmarkButton)

  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton)

  //now appending the whole todoDiv to the todo-list in the html
  todoList.appendChild(todoDiv)
}