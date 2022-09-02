"use strict";
//add todo variables
const addTodoForm = document.querySelector(".todo-add__form");
const addTodoInput = document.querySelector(".todo-add__input");
//todo list variables
const todoList = document.querySelector(".todo-list__containter");
const randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};
//todos array
let todos = [];
const renderTodoList = () => {
    todoList.innerHTML = "";
    if (todos.length) {
        todos.map((todo) => {
            const todoListContainer = document.createElement("li");
            todoListContainer.classList.add("todo-list__item");
            const completedButtonELement = document.createElement("button");
            completedButtonELement.classList.add("todo-list__completed-btn");
            todoListContainer.appendChild(completedButtonELement);
            const textSpanElement = document.createElement("span");
            textSpanElement.classList.add("todo-list__text");
            textSpanElement.innerText = todo.todo;
            todoListContainer.appendChild(textSpanElement);
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.classList.add("todo-list__delete-btn");
            deleteButtonElement.setAttribute("data-set-id", todo.id);
            todoListContainer.appendChild(deleteButtonElement);
            todoList.appendChild(todoListContainer);
        });
    }
    else
        return;
};
const addTodo = (todo) => {
    todos.push({
        id: randomId(),
        todo: todo,
        completed: false,
    });
};
const deleteTodo = (event) => {
    const currentTarget = event.target;
    const currentId = currentTarget.getAttribute("data-set-id");
    if (currentTarget.classList[0] === "todo-list__delete-btn") {
        const newTodos = todos.filter((todo) => todo.id !== currentId);
        todos = newTodos;
        renderTodoList();
    }
};
addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (addTodoInput.value !== "") {
        addTodo(addTodoInput.value);
        addTodoInput.value = "";
        renderTodoList();
    }
});
todoList.addEventListener("click", deleteTodo);
renderTodoList();
