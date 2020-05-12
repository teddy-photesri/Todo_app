## Project

# Todo_app
##### It's a great device for managing time that enables you to lay out everything that you need to accomplish and plan your day.

**01 - Problem Statement**
- What problem is your project solving? Finances? Boredom?

**02 - Solution**
- Create the application for managing tasks that enables you to lay out everything that you need to accomplish and plan your day.

**03 - Technologies Usage**
- HTML5 | CSS3 | JavaScript | Bootstrap | Illustrator

**04 - Challeneges**
- What was harder than you thought it might be?

**05 - Successes**
- What was easier than you thought it was going to be?

**06 - Demo**
- Click a [Link](https://teddy-photesri.github.io/Todo_app/) to play with App. (Please switch to mobile device)
<br />
<br />

![Image](/images/instruction.png "Image")

**7 - Code**
- HTML
```
<div class="container  ">
        <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="background col-md-8 col-sm-12">
                <div class="text-center">
                    <h3 class="mt-5">My todo list</h3>
                </div>

                <div class="d-flex mt-3 px-2">
                    <input type="text" class="form-control" id="user_input" placeholder="What is your plan?">
                    <button type="button" class="btn btn-light ml-2" id="button_add">Add</button>
                </div>

                <div class="todo_item mt-5 px-2">
                    <ul id="my_list">
                    </ul>
                </div>
            </div>
            <div class="col-md-2 col-sm-12"></div>
        </div>
    </div>
```
<br/>

- JavaScript
```
let user_input = document.querySelector("#user_input")
let button_add = document.querySelector("#button_add")
let my_list = document.querySelector("#my_list")

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
    button.style.borderColor = 'none'

    li.appendChild(button)
    my_list.appendChild(li)

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

```


