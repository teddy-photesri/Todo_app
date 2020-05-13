let user_input = document.querySelector("#user_input")
let button_add = document.querySelector("#button_add")
let my_list = document.querySelector("#my_list")

// add To Do function
function addTodo(text) {
    let li = document.createElement("li")
    let span = document.createElement('span')
    span.innerText = text
    li.appendChild(span)

    let button = document.createElement('button')

    button.innerText = 'delete'
    button.style.color = 'white'
    button.style.backgroundColor = '#b30000'
    button.style.borderRadius = '5px'
    // button.style.borderColor = 'none'

    li.appendChild(button)
    my_list.appendChild(li)

    // add remove function for remove button
    button.addEventListener('click', function () {
        my_list.removeChild(li)
    })

    li.addEventListener('click', function () {
        if (span.style.textDecoration === '') {
            span.style.textDecoration = "line-through"
        } else {
            span.style.textDecoration = ""
        }
    })
}

button_add.addEventListener('click', function () {
    if (user_input.value === "") {
        alert("Input the new thing To Do!")
        return
    }
    addTodo(user_input.value)
})
