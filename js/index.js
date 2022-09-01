"use strict";
const addTodoForm = document.querySelector("#add-todo-form");
const addTodoInput = document.querySelector("#add-todo");
const todoList = document.querySelector(".todo-list--all");
let todos = [];
const addTodo = (todo) => {
    todos.push(todo);
};
const renderTodoList = () => {
    if (todos.length) {
        todoList.innerHTML = "";
        const todoListContainer = document.createElement("ul");
        todos.map((todo) => {
            const completedButtonElement = document.createElement("button");
            todoListContainer.appendChild(completedButtonElement);
            const liElement = document.createElement("li");
            liElement.innerText = todo;
            todoListContainer.appendChild(liElement);
            const deleteButtonELement = document.createElement("button");
            todoListContainer.appendChild(deleteButtonELement);
        });
        todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(todoListContainer);
    }
    else
        return;
};
addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (addTodoInput.value !== "") {
        addTodo(addTodoInput.value);
        addTodoInput.value = "";
        renderTodoList();
    }
});
renderTodoList();
