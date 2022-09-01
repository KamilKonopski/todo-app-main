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
const randomId = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
};

//todos array
const todos: ArrayTodoList[] = [
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
