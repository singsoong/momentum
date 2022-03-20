const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];


const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const deleteItem = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteItem.id));
  saveToDos();
  deleteItem.remove();
}

function paintToDo(newTodo) {
  const listItem = document.createElement("li");
  listItem.id = newTodo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerHTML = "❌";
  btn.addEventListener("click", deleteToDo);
  listItem.appendChild(btn);
  listItem.appendChild(span);

  span.innerHTML = newTodo.text;
  toDoList.appendChild(listItem);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
      text: newTodo,
      id: Date.now(), // id
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => paintToDo(item));
}
