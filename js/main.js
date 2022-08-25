const themeButton = document.getElementById('theme-button');
const darkTheme = document.getElementsByClassName('dark');
const lightTheme = document.getElementsByClassName('light');
const addTodoInput = document.getElementById('add-todo');
const todoListAll = document.querySelector('.todo-list--all');
const itemsLeftNumber = document.querySelector('.items-left-number');
const filterButtons = document.querySelectorAll('.filter-button');
const clearCompletedButton = document.querySelector('.clear-completed');
const completedFilterButton = document.querySelector('.filter-completed');
const todoApp = document.querySelector('.todo-app');
const allFilterButton = document.querySelector('.filter-all');
const todoListCompleted = document.querySelector('.todo-list--completed');


// Theme Changer 

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

// Add Todo

addTodoInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        if(addTodoInput.value !== '') {
        const divElement = document.createElement('div');
        divElement.classList.add('simple-todo');
        todoListAll.appendChild(divElement);

        // const filtersDiv = document.querySelector('.filters-todo');
        // divElement.parentNode.insertBefore(divElement, filtersDiv);

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

// Delete Todo

todoListAll.addEventListener('click', e => {
    const item = e.target;
    if(item.classList[0] === 'delete-todo') {
        item.parentElement.remove();
    }
});

// Completed Todo 

todoListAll.addEventListener('click', e => {
    const item = e.target;
    if(item.classList[0] === 'done-todo') {
        const nextElement = item.nextElementSibling;
        nextElement.classList.toggle('completed');
        item.classList.toggle('completed');
        item.parentElement.classList.toggle('completed');
    };

    const simpleTodo = document.querySelectorAll('.simple-todo');

      simpleTodo.forEach(item => {
        const completedSimpleTodo = document.querySelectorAll('div.completed');
        if(item.classList.contains('completed') || completedSimpleTodo.length) {
            itemsLeftNumber.innerText = completedSimpleTodo.length;
      } else if (!item.classList.contains('completed')) {
            itemsLeftNumber.innerText = '0';
      };
    });
});

// Active filter button

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(
            " active",
            ""
        );
        this.className += " active";
    });
}

//clear completed

clearCompletedButton.addEventListener('click', () => {
    const completedes = document.querySelectorAll('.simple-todo.completed');

    completedes.forEach(completed => {
        completed.remove();
    });
});

//completed todo filter button 

completedFilterButton.addEventListener('click', () => {
    const completedTodos = document.querySelectorAll('.simple-todo.completed');
    
    completedTodos.forEach(completedTodo => {
        todoListCompleted.appendChild(completedTodo);
    })
    todoApp.insertBefore(todoListCompleted, todoListAll);
    todoListAll.style.display = 'none';
    todoListCompleted.style.display = 'flex';
});

// all todo filter button

allFilterButton.addEventListener('click', () => {
    todoListAll.style.display = 'flex';
    todoListCompleted.style.display = 'none';
});