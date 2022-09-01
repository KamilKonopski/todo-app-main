//add todo variables
const addTodoForm = document.querySelector(".add-todo-form") as HTMLFormElement;
const addTodoInput = document.querySelector("#add-todo") as HTMLInputElement;

//todo list variables
const todoList = document.querySelector(
	".todo-list__containter"
) as HTMLUListElement;

interface ArrayTodoList {
	id: string;
	todo: string;
	done: boolean;
}

//todos array
let todos: ArrayTodoList[];
