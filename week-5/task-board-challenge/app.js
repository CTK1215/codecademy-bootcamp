"use strict";

const taskInput = document.querySelector("#taskInput");
const prioritySelect = document.querySelector("#priority");
const addBtn = document.querySelector("#addBtn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const taskCount = document.querySelector("#taskCount");
const taskList = document.querySelector("#taskList");
const emptyMessage = document.querySelector("#emptyMessage");

function updateTaskCount() {
  const remaining = taskList.querySelectorAll("li:not(.completed)").length;
  const label = remaining === 1 ? "task" : "tasks";
  taskCount.textContent = `${remaining} ${label} remaining`;
}

function updateEmptyMessage() {
  emptyMessage.hidden = taskList.children.length > 0;
}

function refreshBoard() {
  updateTaskCount();
  updateEmptyMessage();
}

function createTask(text, priority) {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add(priority);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  li.appendChild(deleteBtn);

  return li;
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  taskList.appendChild(createTask(text, prioritySelect.value));
  taskInput.value = "";
  taskInput.focus();
  refreshBoard();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTask();
});

// One listener on the list covers every task, including ones added later.
taskList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;

  if (event.target.classList.contains("delete-btn")) {
    li.remove();
  } else {
    li.classList.toggle("completed");
  }

  refreshBoard();
});

clearCompletedBtn.addEventListener("click", () => {
  taskList.querySelectorAll(".completed").forEach((task) => task.remove());
  refreshBoard();
});

refreshBoard();
