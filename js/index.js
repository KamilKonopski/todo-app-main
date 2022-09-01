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
const todos = [
    {
        id: randomId(),
        todo: "Pójść do sklepu",
        done: false,
    },
    {
        id: randomId(),
        todo: "Wbić range w Valoooo",
        done: false,
    },
    {
        id: randomId(),
        todo: "Nauczyć się TS",
        done: false,
    },
];
