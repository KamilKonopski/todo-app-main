const themeButton = document.getElementById('theme-button');
const darkTheme = document.getElementsByClassName('dark');
const lightTheme = document.getElementsByClassName('light');
const addTodoInput = document.getElementById('add-todo');
const todoList = document.querySelector('.todo-list');

themeButton.addEventListener('click', () => {
    if(themeButton.classList.contains('dark')) {
        for(let i = 0; i = darkTheme.length; i++) {
            darkTheme[0].className = darkTheme[0].className.replace('dark', 'light');
        };
    } else if(themeButton.classList.contains('light')) {
        for(let i = 0; i = lightTheme.length; i++) {
            lightTheme[0].className = lightTheme[0].className.replace('light', 'dark');
        }; 
    };
});

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
    
});

todoList.addEventListener('click', e => {
    const item = e.target;
    if(item.classList[0] === 'delete-todo') {
        item.parentElement.remove();
    }

    if(item.classList[0] === 'done-todo') {
        const nextElement = item.nextElementSibling;
        nextElement.classList.toggle('completed');
        console.log(item);
        item.classList.toggle('completed');
        item.parentElement.classList.toggle('completed')
    }
})