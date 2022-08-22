export const doneTodo = () => {
    const doneButtons = document.getElementsByClassName('done-todo');
    
    for(let i = 0; i < doneButtons.length; i++) {
        doneButtons[i].addEventListener('click', () => {
            const nextElement = doneButtons[i].nextElementSibling;
            console.log(nextElement)
            nextElement.classList.toggle('done')
        })
    }

}

