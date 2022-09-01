"use strict";
//add todo variables
const addTodoForm = document.querySelector(".add-todo-form");
const addTodoInput = document.querySelector("#add-todo");
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
    if (todos.length) {
        todoList.innerHTML = "";
        todos.map((todo) => {
            const todoListContainer = document.createElement("li");
            todoListContainer.classList.add("simple-todo");
            const completedButtonELement = document.createElement("button");
            completedButtonELement.classList.add("done-todo");
            todoListContainer.appendChild(completedButtonELement);
            const textSpanElement = document.createElement("span");
            textSpanElement.classList.add("text-todo");
            textSpanElement.innerText = todo.todo;
            todoListContainer.appendChild(textSpanElement);
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.classList.add("delete-todo");
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
    console.log(currentId);
    if (currentTarget.classList[0] === "delete-todo") {
        let newTodos = todos.filter((todo) => todo.id !== currentId);
        todos = newTodos;
        renderTodoList();
    }
};
addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo(addTodoInput.value);
    addTodoInput.value = "";
    renderTodoList();
});
todoList.addEventListener("click", deleteTodo);
renderTodoList();
