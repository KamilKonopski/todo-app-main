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
	completed: boolean;
}
const randomId = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
};

//todos array
let todos: ArrayTodoList[] = [];

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
	} else return;
};

const addTodo = (todo: string) => {
	todos.push({
		id: randomId(),
		todo: todo,
		completed: false,
	});
};

const deleteTodo = (event: Event) => {
	const currentTarget = event.target as HTMLButtonElement;
	const currentId = currentTarget.getAttribute("data-set-id");
	console.log(currentId);

	if (currentTarget.classList[0] === "delete-todo") {
		let newTodos = todos.filter((todo) => todo.id !== currentId);
		todos = newTodos;
		renderTodoList();
	}
};

addTodoForm.addEventListener("submit", (event: SubmitEvent) => {
	event.preventDefault();
	if (addTodoInput.value !== "") {
		addTodo(addTodoInput.value);
		addTodoInput.value = "";

		renderTodoList();
	}
});

todoList.addEventListener("click", deleteTodo);

renderTodoList();
