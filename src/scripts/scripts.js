//Find elements and give them a variable

let listTask = [];
let today = new Date().toLocaleDateString()


var taskInput = document.getElementById("tasktext");
var addButton = document.getElementById("createtask");
var incompletedTaskHolder = document.getElementById("taskincomplete");
var completedTaskHolder = document.getElementById("taskcomplete");
var createNewTaskElement = document.getElementById("createtask")

var createNewTaskItem = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
    
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

var addTask = function() {
  textvalue = document.getElementById('tasktext').value;
  listTask.push(textvalue);
  console.log(listTask);
  const task = {
    date: today,
    text: tasktext.value
  }
  localStorage.setItem('currentTask', JSON.stringify(text))
}

var editTask = function() {
  console.log("edit Task");
}

var deleteTask = function() {
  console.log("delete Task");
  localStorage.removeItem(text)
}

var taskCompleted = function() {
  console.log("task completed");
  var listItem = this.parentNode;
  completedTaskHolder.appendChild(listItem);
  bindTasksEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
  console.log("task incomplete");
  var listItem = this.parentNode;
  incompletedTaskHolder.appendChild(listItem);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
  
	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkbox.onchange = checkBoxEventHandler;
	
}

var ajaxRequest = function() {
  console.log("AJAX request");
}

//Set the click handler to the addTask function
//addButton.addEventListener("click", addTask);
//addButton.addEventListener("click", ajaxRequest);
/*
// add an eventListener on form, and listen for submit event
addTask.addEventListener('click', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addTask(todoInput.value); // call addTodo function with input box current value
});


for (var i = 0; i < incompletedTaskHolder.length; i++) {  bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}

for (var i = 0; i < completedTaskHolder.length; i++) {
 bindTaskEvents(incompletedTaskHolder.children[i], taskIncompleted);
}
*/

//addButton.onclick = addTask;