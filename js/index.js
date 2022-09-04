"use strict";
//add todo variables
const addTodoForm = document.querySelector(".todo-add__form");
const addTodoInput = document.querySelector(".todo-add__input");
//todo list variables
const todoList = document.querySelector(".todo-list__containter");
//filters todo variables
const itemsLeftNumber = document.querySelector(".filters-todo__number");
const filtersButtons = document.querySelectorAll(".filters-todo__button");
const filterButtonAll = document.querySelector(".filter-all");
const filterButtonActive = document.querySelector(".filter-active");
const filterButtonCompleted = document.querySelector(".filter-completed");
const clearCompletedButton = document.querySelector(".filters-todo__clear-completed");
const randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};
//todos array
let todos = [];
let completedTodos = [];
let activeTodos = [];
const renderTodoList = () => {
    todoList.innerHTML = "";
    if (todos.length &&
        filterButtonAll.classList.contains("filters-todo__button--active")) {
        todos.map((todo) => {
            const todoListContainer = document.createElement("li");
            todoListContainer.classList.add("todo-list__item");
            const completedButtonELement = document.createElement("button");
            completedButtonELement.classList.add("todo-list__completed-btn");
            completedButtonELement.addEventListener("click", () => {
                todo.completed = !todo.completed;
                completedButtonELement.classList.toggle("todo-list__completed-btn--completed");
                textSpanElement.classList.toggle("todo-list__text--completed");
            });
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
            addToActiveTodos();
        });
    }
    else if (activeTodos.length &&
        filterButtonActive.classList.contains("filters-todo__button--active")) {
        activeTodos.map((activeTodo) => {
            const todoListContainer = document.createElement("li");
            todoListContainer.classList.add("todo-list__item");
            const completedButtonELement = document.createElement("button");
            completedButtonELement.classList.add("todo-list__completed-btn");
            todoListContainer.appendChild(completedButtonELement);
            const textSpanElement = document.createElement("span");
            textSpanElement.classList.add("todo-list__text");
            textSpanElement.innerText = activeTodo.todo;
            todoListContainer.appendChild(textSpanElement);
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.classList.add("todo-list__delete-btn");
            deleteButtonElement.setAttribute("data-set-id", activeTodo.id);
            todoListContainer.appendChild(deleteButtonElement);
            todoList.appendChild(todoListContainer);
        });
    }
    else if (completedTodos.length &&
        filterButtonCompleted.classList.contains("filters-todo__button--active")) {
        completedTodos.map((completedTodo) => {
            const todoListContainer = document.createElement("li");
            todoListContainer.classList.add("todo-list__item");
            const completedButtonELement = document.createElement("button");
            completedButtonELement.classList.add("todo-list__completed-btn");
            todoListContainer.appendChild(completedButtonELement);
            const textSpanElement = document.createElement("span");
            textSpanElement.classList.add("todo-list__text");
            textSpanElement.innerText = completedTodo.todo;
            todoListContainer.appendChild(textSpanElement);
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.classList.add("todo-list__delete-btn");
            deleteButtonElement.setAttribute("data-set-id", completedTodo.id);
            todoListContainer.appendChild(deleteButtonElement);
            todoList.appendChild(todoListContainer);
        });
    }
};
const addTodo = (todo) => {
    todos.push({
        id: randomId(),
        todo: todo,
        completed: false,
    });
};
const addToActiveTodos = () => {
    activeTodos = todos.filter((todo) => todo.completed === false);
};
const addToCompletedTodos = () => {
    completedTodos = todos.filter((todo) => todo.completed === true);
};
const addNumberToItemsLeft = () => {
    if (completedTodos.length === 0) {
        itemsLeftNumber.innerText = "0";
    }
    else if (completedTodos.length > 0) {
        itemsLeftNumber.innerText = `${completedTodos.length}`;
    }
    else
        return;
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
filtersButtons.forEach((filtersButton) => {
    filtersButton.addEventListener("click", function () {
        let current = document.getElementsByClassName("filters-todo__button--active");
        current[0].className = current[0].className.replace(" filters-todo__button--active", "");
        this.className += " filters-todo__button--active";
        renderTodoList();
    });
});
const clearCompletedTodos = () => {
    completedTodos.splice(0, completedTodos.length);
    const filteredTodos = todos.filter((todo) => todo.completed === false);
    todos = filteredTodos;
    renderTodoList();
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
clearCompletedButton.addEventListener("click", clearCompletedTodos);
todoList.addEventListener("click", (event) => {
    const currentTarget = event.target;
    if (currentTarget.classList[0] === "todo-list__completed-btn") {
        addToCompletedTodos();
        addNumberToItemsLeft();
        addToActiveTodos();
    }
});
renderTodoList();
addToActiveTodos();
