const getTodos = (callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState)
        if (request.readyState === 4 && request.status === 200) {
            const date = JSON.parse(request.responseText)
            callback(undefined, date)
        }else if (request.readyState === 4) {
            callback("Malumotni iloji bolmadi !", undefined)
        }
    })
    // OPEN
    request.open('GET', 'todos.json')
    
    // send
    request.send()    
}

getTodos((err, data) => {
    if (err) {
        console.log(err)
    }else {
        console.log(data)
    }
})


