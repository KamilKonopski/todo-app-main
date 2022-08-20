const addNewTodo = () => {
    const addTodoInput = document.getElementById('add-todo');
    addTodoInput.addEventListener('keypress', (e) => {
        if(e.key === "Enter") {
            if(addTodoInput.value !== '') {
            const divElement = document.createElement('div');
            divElement.innerText = addTodoInput.value;
            document.querySelector('.todo-app').appendChild(divElement);
            
            addTodoInput.value = "";
            }
        }
    });
};

export { addNewTodo }