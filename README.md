## Project

# Todo_app
##### It's a great device for managing time that enables you to lay out everything that you need to accomplish and plan your day.
<br />
<br />

**01 - Project Overview**
- In the busy world, everybody has so many things to accomplish daily. Personal through working. It should be great if we can use our personal device, such as a mobile phone as a tool to helps to manage our daily tasks. That makes our day smoothly.
<br />

**02 - Problem Statement**
- How might we managing tasks that enables to lay out everything that need to accomplish and plan our day?
<br />

**03 - Solution**
- Create the TO-DO List application.

![Image](/images/instruction2.png "Image")
<br />

**04 - Technologies Usage**
- HTML5 | CSS3 | JavaScript | Bootstrap | Illustrator
<br />

**05 - Information Architechture**
<br />
<br />
<br />

![IA](/images/ia.png "IA")
<br />

**06 - Successes**
- It's finally usable a self-code To-Do List web app that I absolutely used, and some of my friends using it too.
<br />

**07 - Next Step**
- The to-do list could be removed if we refresh the screen because all the data doesn't locate on any file or store in the memory. I would like to create the JSON file that we can put the talks and remove them from the JASON file.
<br />


**08 - Demo**
- Click a [Link](https://teddy-photesri.github.io/Todo_app/) to play with App. (Please switch to mobile device)
<br />

**9 - Code**
- HTML
```
<div class="container ">
    <div class="row">
        <div class="col-md-2 col-sm-12"></div>
        <div id="screen_color" class="col-md-8 col-sm-12">
            <div class="mt-3" id="btn_color"></div>
            <div class="text-center">
                <h3 class="mt-5">My to-do list</h3>
            </div>

            <div class="d-flex mt-3 px-2">
                <input type="text" class="form-control" id="user_input" placeholder="What is your plan?">
                <button type="button" class="btn btn-info ml-2" id="button_add">Add</button>
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
let screen_color = document.querySelector("#screen_color")
let btn_color = document.querySelector('#btn_color')
let mode = "light";

btn_color.innerText = 'dark mode'

btn_color.addEventListener('click', function () {

    mode = mode === "light" ? "dark" : "light"
    if (mode === "dark") {
        btn_color.innerText = 'light mode'
        screen_color.style.color = 'white'
        screen_color.style.backgroundColor = '#2f2f31'
    } else if (mode === "light") {
        btn_color.innerText = 'dark mode'
        screen_color.style.color = 'black'
        screen_color.style.backgroundColor = 'white'
    }
})

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
    button.style.borderColor = 'red'

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

```


