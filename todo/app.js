const submitBtn = document.getElementById("add-task");
const todo = document.getElementById("input-task");
const taskContainer = document.getElementById("task-container");

let todoInput = null;
let taskList = null;

submitBtn.addEventListener("click", function (e) {
  todoInput = todo.value;
  if (todoInput === "") return;
  const task = document.createElement("ul");
  task.className = "task";
  taskContainer.appendChild(task);
  taskList = document.createElement("li");
  taskList.innerText = todoInput;
  task.appendChild(taskList);
  task.appendChild(checkBtn(taskList));
  task.appendChild(deleteBtn());
});

function deleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteTask");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener("click", function (e) {
    console.log("parent", e.target.parentElement);
    e.target.parentElement.remove();
  });
  return deleteBtn;
}

function checkBtn(taskList) {
  const checkBtn = document.createElement("button");
  checkBtn.classList.add("checkTask");
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkBtn.addEventListener("click", function (e) {
    taskList.style.textDecoration = "line-through";
  });
  return checkBtn;
}
