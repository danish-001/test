//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// const todos = []

//event listner
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(event){

  //prevents form from submitting
  event.preventDefault();

  //creating a Div and a class inside it
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  //putting li inside the Div we just created
  todoDiv.appendChild(newTodo);

  //checkmark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.type='button'
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  trashButton.type = 'button'
  todoDiv.appendChild(trashButton);

  //now appending the whole todoDiv to the todo-list in the html
  todoList.appendChild(todoDiv);

  // todos.appendChild(todoList);

  //clearing todo input after adding a todo
  todoInput.value = "";
}

// const checkmarkButton = document.getElementsByClassName('.complete-btn')
// const trashButton = document.getElementsByClassName('.trash-btn')

// checkmarkButton.addEventListener('click', checkmarkTodo)
// trashButton.addEventListener('click', deleteTodo)

//to delete the todo when clicked on the delete button
function deleteCheck(e) {
  const item = e.target

  //deleting the todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement
    todo.classList.add('fall')
    todo.addEventListener('transitionend', function () {
      todo.remove()
    })
    console.log('delete')
  }

  //checkmark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
    console.log('check')
  }
}


// function createElementsForList() {
//   let ul = document.getElementById('todo-list')
//   ul
// }