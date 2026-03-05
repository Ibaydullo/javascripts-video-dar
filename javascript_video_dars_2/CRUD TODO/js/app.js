const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
// const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')
let editItemId

// check 

let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

if (todos.length) showTodos()

// setTodos to localstorage

function setTodods() {
    localStorage.setItem('list', JSON.stringify(todos))
}

// time


function getTime() {
    const now = new Date()
    const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    const month = now.getMonth() < 10 ? '0' + now.getDate() + 1 : now.getDate()
    const year = now.getFullYear()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
    const minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
    const sekund = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()

    const month_title = now.getMonth()
    fullDay.textContent = `${today} ${months[month_title]}, ${year}`

    hourEl.textContent = hours
    minuteEl.textContent = minute
    secondEl.textContent = sekund


    return `${hours}:${minute}, ${today}.${month}.${year}`


}

setInterval(getTime, 1000);



// show todos

function showTodos() {
    const todos = JSON.parse(localStorage.getItem('list'))
    listGroupTodo.innerHTML = ''
    todos.forEach((item, i) => {
        listGroupTodo.innerHTML += `
        <li ondblclick="setCompleted(${i})" class="list-group-item d-flex justify-content-between ${item.completed == true ? 'completed' : ''}">${item.text}
          <div class="todo-icons">
            <span class="opacity-50 me-2">${item.time}</span>
            <img onclick=(editTodo(${i})) class="edit" src="img/edit.svg" alt="edit icon" width="25" height="25" />
            <img onclick=(deleteTodo(${i})) class="delete" src="img/delete.svg" alt="delete icon" width="25" height="25" />
          </div>
        </li> 
        `
    });

}


// show error
function showMessage(where, message) {
    document.getElementById(`${where}`).textContent = message

    setTimeout(() => {
        document.getElementById(`${where}`).textContent = ''
    }, 3000)
}

/*      
*/





// get Todos
formCreate.addEventListener('submit', (e) => {
    e.preventDefault()

    const todoText = formCreate['input-create'].value.trim()
    formCreate.reset()

    if (todoText.length) {
        todos.push({ text: todoText, time: getTime(), completed: false })
        setTodods()
        showTodos()
    } else {
        showMessage('message-create', 'Plase, Enter som todo...')
    }
})



// delete todo

function deleteTodo(id) {
    const deleteTodos = todos.filter((item, i) => {
        return i !== id
    })
    todos = deleteTodos
    setTodods()
    showTodos()
}


// setCompleted

function setCompleted(id) {
    const completedTodos = todos.map((item, i) => {
        if (id == i) {
            return { ...item, completed: item.completed == true ? false : true }
        } else {
            return { ...item }
        }
    })
    todos = completedTodos
    setTodods()
    showTodos()
}


// edit Forim 
formEdit.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = formEdit['input-edit'].value.trim()
    formEdit.reset()

    if (todoText.length) {
        todos.splice(editItemId, 1, { text: todoText, time: getTime(), completed: false })
        setTodods()
        showTodos()
        close()
    } else {
        showMessage('message-edit', 'Plase, Enter som todo...')
    }
})

// editTodo

function editTodo(id) {
    open()
    editItemId = id
}

overlay.addEventListener('click', close)
closeEl.addEventListener('click', close)

document.addEventListener('keydown', (e) => {
    if (e.which == 27) {
        close()
    }
})


function open() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

function close() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}