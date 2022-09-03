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

//filters todo variables
const itemsLeftNumber = document.querySelector(
	".filters-todo__number"
) as HTMLSpanElement;

const filtersButtons = document.querySelectorAll<HTMLButtonElement>(
	".filters-todo__button"
);

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
let completedTodos: ArrayTodoList[] = [];

const renderTodoList = () => {
	todoList.innerHTML = "";
	if (todos.length) {
		todos.map((todo) => {
			const todoListContainer = document.createElement("li");
			todoListContainer.classList.add("todo-list__item");

			const completedButtonELement = document.createElement("button");
			completedButtonELement.classList.add("todo-list__completed-btn");
			completedButtonELement.addEventListener("click", () => {
				todo.completed = !todo.completed;
				completedButtonELement.classList.toggle(
					"todo-list__completed-btn--completed"
				);
				textSpanElement.classList.toggle("todo-list__text--completed");

				// addToCompletedTodos();
				// addNumberToItemsLeft();
				console.log("todos", todos);
				console.log("completedTodos", completedTodos);
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

// const addToCompletedTodos = () => {
// 	todos.forEach((todo) => {
// 		if (todo.completed === true) {
// 			completedTodos.push(todo);

// 			const newCompletedTodos = completedTodos.filter(
// 				(completedTodo) => completedTodo.completed === true
// 			);
// 			completedTodos = newCompletedTodos;
// 		}

// 		console.log(completedTodos);
// 	});
// };

// const addNumberToItemsLeft = () => {
// 	if (completedTodos.length === 0) {
// 		itemsLeftNumber.innerText = "0";
// 	} else if (completedTodos.length > 0) {
// 		itemsLeftNumber.innerText = `${completedTodos.length}`;
// 	} else return;
// };

const deleteTodo = (event: Event) => {
	const currentTarget = event.target as HTMLButtonElement;
	const currentId = currentTarget.getAttribute("data-set-id");

	if (currentTarget.classList[0] === "todo-list__delete-btn") {
		const newTodos = todos.filter((todo) => todo.id !== currentId);
		todos = newTodos;
		renderTodoList();
	}
};

filtersButtons.forEach((filtersButton) => {
	filtersButton.addEventListener("click", function () {
		let current = document.getElementsByClassName(
			"filters-todo__button--active"
		);
		current[0].className = current[0].className.replace(
			" filters-todo__button--active",
			""
		);
		this.className += " filters-todo__button--active";
	});
});

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
