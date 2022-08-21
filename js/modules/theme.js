const themeButton = document.getElementById('theme-button');
const darkTheme = document.getElementsByClassName('dark');
const lightTheme = document.getElementsByClassName('light');
console.log(darkTheme);

export const toggleTheme = () => {
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
};