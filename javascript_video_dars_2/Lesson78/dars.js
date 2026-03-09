const getTodos = (resurse, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState)
        if (request.readyState === 4 && request.status === 200) {
            const date = JSON.parse(request.responseText)
            callback(undefined, date)
        } else if (request.readyState === 4) {
            callback("Malumotni iloji bolmadi !!!", undefined)
        }
    })
    // OPEN
    request.open('GET', resurse)

    // send
    request.send()
}

getTodos('todos/todos.json', (err, data) => {
    console.log(data)
    getTodos('todos/todos.json', (err, data) => {
        console.log(data)
        getTodos('todos/todos.json', (err, data) => {
            console.log(data)
        })
    })
})


