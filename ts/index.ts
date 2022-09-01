const addTodoForm = document.querySelector("#add-todo-form") as HTMLFormElement;
const addTodoInput = document.querySelector("#add-todo") as HTMLInputElement;
const todoList = document.querySelector(".todo-list--all") as HTMLDivElement;

let todos: string[] = [];

const addTodo = (todo: string) => {
	todos.push(todo);
};

const render = () => {
	if (todos.length) {
		todoList.innerHTML = "";

		const todoListContainer = document.createElement("ul");
		todos.map((todo) => {
			const liElement = document.createElement("li");
			liElement.innerText = todo;
			todoListContainer.appendChild(liElement);
		});

		todoList?.appendChild(todoListContainer);
	} else return;
};

addTodoForm.addEventListener("submit", (event) => {
	event.preventDefault();

	if (addTodoInput.value !== "") {
		addTodo(addTodoInput.value);

		addTodoInput.value = "";

		render();
	}
});

render();
