const themeButton = document.getElementById('theme-button');
const bodyTheme = document.body;
const todoAppTheme = document.querySelector('.todo-app');
const headerTheme = document.querySelector('.header');

export const toggleTheme = () => {
    themeButton.addEventListener('click', () => {
        themeButton.classList.toggle('dark');
        themeButton.classList.toggle('light');
        bodyTheme.classList.toggle('dark');
        bodyTheme.classList.toggle('light');
        todoAppTheme.classList.toggle('dark');
        todoAppTheme.classList.toggle('light');
        headerTheme.classList.toggle('dark');
        headerTheme.classList.toggle('light');
    });
};