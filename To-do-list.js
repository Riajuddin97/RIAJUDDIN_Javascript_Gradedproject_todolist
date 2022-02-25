const input = document.getElementById('inputtext');
const addTaskButton = document.getElementById('addbutton');
const saveTaskButton = document.getElementById("save");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("savelist");

let todoArray = [];

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
    todoArray.push(input.value);
    input.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
});

function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    todoArray.forEach((list, ind) => {
        htmlCode += `<div class='flex mb-4 items-center'>
      <p class='w-full text-grey-darkest'>${list}</p>
      <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
      <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
   </div>`;
    });
    listBox.innerHTML = htmlCode;
}

function deleteTodo(ind) {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    todoArray.splice(ind, 1);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
}

function edit(ind) {
    saveInd.value = ind;
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    inputtext.value = todoArray[ind];
    addTaskButton.style.display = "none";
    saveTaskButton.style.display = "block";
}

saveTaskButton.addEventListener("click", () => {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    let id = saveInd.value;
    todoArray[id] = inputtext.value;
    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
    inputtext.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
});