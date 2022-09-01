"use strict";
//add todo variables
const addTodoForm = document.querySelector(".add-todo-form");
const addTodoInput = document.querySelector("#add-todo");
//todo list variables
const todoList = document.querySelector(".todo-list__containter");
//todos array
let todos = [];
// functions
const addTodo = (todo) => {
    todos.push(todo);
};
const renderTodoList = () => {
    if (todos.length) {
        todoList.innerHTML = "";
        todos.map((todo) => {
            const todoListContainer = document.createElement("li");
            todoListContainer.classList.add("simple-todo");
            const completedButtonElement = document.createElement("button");
            completedButtonElement.classList.add("done-todo");
            todoListContainer.appendChild(completedButtonElement);
            const spanElement = document.createElement("span");
            spanElement.classList.add("text-todo");
            spanElement.innerText = todo;
            todoListContainer.appendChild(spanElement);
            const deleteButtonELement = document.createElement("button");
            deleteButtonELement.classList.add("delete-todo");
            todoListContainer.appendChild(deleteButtonELement);
            todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(todoListContainer);
        });
    }
    else
        return;
};
// listeners
addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (addTodoInput.value !== "") {
        addTodo(addTodoInput.value);
        addTodoInput.value = "";
        renderTodoList();
    }
});
//first todo list render
renderTodoList();
