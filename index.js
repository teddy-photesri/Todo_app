let user_input = document.querySelector('#user_input');
let button_add = document.querySelector('button_add');
let my_list = document.querySelector('my_list');

// Add todo function

function addTodo(text) {
    let li = document.createElement('li');
    let span = document.createElement('span');

    span.innerHTML = text;
    span.appendChild(text);




}