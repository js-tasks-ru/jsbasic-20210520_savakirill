function toggleText() {
    let button = document.querySelector('.toggle-text-button');
    let text = document.querySelector('#text');
    let toDo = () => {text.hidden === false ? text.hidden = true: text.hidden = false;}
    button.addEventListener('click', toDo);
}
