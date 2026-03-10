const getTodos = (resurse, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            // console.log(request,request.readyState)
            if (request.readyState === 4 && request.status === 200) {
                const date = JSON.parse(request.responseText)
                resolve(date)
            } else if (request.readyState === 4) {
                reject("Malumotni iloji bolmadi !!!",)
            }
        })
        // OPEN
        request.open('GET', resurse)

        // send
        request.send()
    })
}


getTodos('todos/todos.json').then((data) =>{
    console.log(data)
    return getTodos('todos/todos.json')
})
.then((data) => {
    console.log(data)
})

.catch((err) => {
    console.log(err)
})



// getTodos('todos/todos.json', (err, data) => {
//     console.log(data)
//     getTodos('todos/todos.json', (err, data) => {
//         console.log(data)
//         getTodos('todos/todos.json', (err, data) => {
//             console.log(data)
//         })
//     })
// })



// promise

const internet = false

const getData = () => {
    return new Promise((resolve, reject) => {
        // serverga sorov jonatish
        if (internet) {
            resolve("salom date")
        } else {
            reject("hayr error")
        }
    })
}


getData().then((a) => {
    console.log(a)
}).catch((b) => {
    console.log(b)
})