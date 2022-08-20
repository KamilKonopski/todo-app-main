const themeButton = document.getElementById('theme-button');

export const toggleTheme = () => {
    themeButton.addEventListener('click', () => {
        themeButton.classList.toggle('dark');
        themeButton.classList.toggle('light');
    });
};