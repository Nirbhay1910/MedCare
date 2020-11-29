const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') {
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto';
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})

var p = "<td class = 'sno'></td> <td><input class='val1'></input></td> <td><input class='val2'></input></td> <td class='add'></td>";
function appendRow() {
    var newRow = document.createElement("tr");
    newRow.innerHTML = p;
    var mytable = document.getElementById("mytable");
    var x;
    if(mytable.childElementCount > 1){
        x = mytable.lastElementChild.firstChild.innerHTML * 1;
    }
    else x = 0;
    document.getElementById("mytable").appendChild(newRow);
    mytable.lastElementChild.firstChild.innerHTML = x + 1;
    addfunction();
}

function deleteRow(){
    var mytable = document.getElementById("mytable");
    if(mytable.childElementCount > 1)
    mytable.removeChild(mytable.lastElementChild);
}
function addfunction(){
    var value1 = document.querySelectorAll(".val1");
    var value2 = document.querySelectorAll(".val2");
    var value3 = document.querySelectorAll(".add");
    for(var i=0;i<value1.length;i++){
        var val11 = value1[i].value * 1;
        var val22 = value2[i].value * 1;
        value3[i].innerHTML = val11 + val22;
    }
}
var audi = document.getElementById("myAudio");
function playAudio() {
    audi.play();
}
function pauseAudio() {
    audi.pause();
}
function rewindAudio() {
    audi.currentTime-=2.0;
}
function forwardAudio() {
    audi.currentTime+=2.0;
}
function soundup(){
    audi.volume += 0.2;
}
function sounddown(){
    audi.volume -= 0.2;
}

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
	//Create List Item
	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input"); // checkbox
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input"); // text
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");

	//Each element needs modifying

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;

	//Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

//Add a new task
var addTask = function() {
	console.log("Add task...");
	//Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value);
	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
}

//Edit an existing task
var editTask = function() {
	console.log("Edit task...");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");

	//if the class of the parent is .editMode
	if (containsClass) {
		//Switch from .editMode
		//label text become the input's value
		label.innerText = editInput.value;
	} else {
		//Switch to .editMode
		//input value becomes the label's text
		editInput.value = label.innerText;
	}

	//Toggle .editMode on the list item
	listItem.classList.toggle("editMode");

}

//Delete an existing task
var deleteTask = function() {
	console.log("Delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove the parent list item from the ul
	ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
	console.log("Task complete...");
	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Task incomplete...");
	//Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	//select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	//bind editTask to edit button
	editButton.onclick = editTask;

	//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;

	//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;
}

// var ajaxRequest = function() {
// 	console.log("AJAX request");
// }

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
//addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
	//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
	//bind events to list item's children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}





$('.error-page').hide(0);

$('.login-button , .no-access').click(function(){
  $('.login').slideUp(500);
  $('.error-page').slideDown(1000);
});

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
});







document.querySelector(function () {
	document.querySelector(".s-w .s-b").addEventListener("click", function (e) {
	  e.preventDefault();
	  document.documentElement.classList.add("search-exp");
	  document.querySelector(".s-i").focus();
	});
	document.querySelector(".s-i").blur(function () {
	  // Do not hide input if contains text
	  if (document.querySelector(".s-i").value === "") {
		document.documentElement.removeClass("search-exp");
	  }
	});
  });

  
  document.querySelector(window).scroll(function() {
	document.querySelector('.fadedfx').each(function(){
	var imagePos = document.querySelector(this).offset().top;

	var topOfWindow = document.querySelector(window).scrollTop;
		if (imagePos < topOfWindow+500) {
			document.querySelector(this).classList.add("fadeIn");
		}
	});
});