import { deleteTodo } from "./deleteTodo.js";

const addNewTodo = () => {
    const addTodoInput = document.getElementById('add-todo');
    addTodoInput.addEventListener('keypress', (e) => {
        if(e.key === "Enter") {
            if(addTodoInput.value !== '') {
            const divElement = document.createElement('div');
            divElement.classList.add('simple-todo');
            document.querySelector('.todo-list').appendChild(divElement);

            const filtersDiv = document.querySelector('.filters-todo');
            divElement.parentNode.insertBefore(divElement, filtersDiv);

            const doneButton = document.createElement('button');
            doneButton.classList.add('done-todo');
            divElement.appendChild(doneButton);
            
            const textElement = document.createElement('p');
            textElement.classList.add('text-todo');
            textElement.innerText = addTodoInput.value;
            divElement.appendChild(textElement);
            
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-todo');
            divElement.appendChild(deleteButton);
            
            addTodoInput.value = "";
            }
        }
        deleteTodo()
    });

};

export { addNewTodo }