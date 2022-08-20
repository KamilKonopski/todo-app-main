const themeButton = document.getElementById('theme-button');
const body = document.body;
const todoApp = document.querySelector('.todo-app');

export const toggleTheme = () => {
    themeButton.addEventListener('click', () => {
        themeButton.classList.toggle('dark');
        themeButton.classList.toggle('light');
        body.classList.toggle('dark');
        body.classList.toggle('light');
        todoApp.classList.toggle('dark');
        todoApp.classList.toggle('light');
    });
};