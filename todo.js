function addTodo() { 

  //Assigning data to the variable
  var todoData = document.getElementById("textBox").value
  var text = document.createTextNode(todoData)

  

  //Creating a new element where the data will be stored
  var newItem = document.createElement("li")

  
  //Assigning new todo text in the li
  newItem.append(text)

  if (todoData == "") {
    alert("Add a Todo");
  } else { 
     // //Putting the new item in the list
    document.getElementById("myList").appendChild(newItem, () => todoData.value = "" )
  }
}