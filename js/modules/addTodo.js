
const addButton = document.getElementById('add-button');

const addNewTodo = () => {
    addButton.addEventListener('click', () => {
        const addTodoInput = document.getElementById('add-todo');
    
        if(addTodoInput.value !== '') {
        const divElement = document.createElement('div');
        divElement.innerText = addTodoInput.value;
        document.querySelector('.todo-app').appendChild(divElement);
        
        addTodoInput.value = "";
        }
    });
};

export { addNewTodo }