export const deleteTodo = () => {
    const deleteButtons = document.getElementsByClassName('delete-todo');
    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function() {
            this.parentElement.remove()
        })
    };
}

