//add todo variables
const addTodoForm = document.querySelector(
	".todo-add__form"
) as HTMLFormElement;
const addTodoInput = document.querySelector(
	".todo-add__input"
) as HTMLInputElement;

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

	if (currentTarget.classList[0] === "todo-list__delete-btn") {
		const newTodos = todos.filter((todo) => todo.id !== currentId);
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
