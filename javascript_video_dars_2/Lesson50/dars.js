// /*---------------------- 50 ----------------------*/
// const button = document.querySelector('button')

// // button.addEventListener('click', () => {
// //     console.log('You are cliked me !')
// // })

const ul = document.querySelector('ul')
// ul.remove()

const button = document.querySelector('button')

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Someting new text 😎</li>'
    
    // js do element yaratish
    const li = document.createElement('li')
    li.textContent = 'Fomething new text 🤑'
    // console.log(li)

    ul.appendChild(li)
    ul.prepend(li)
})



const items = document.querySelectorAll('li')


items.forEach((item) => {
    item.addEventListener('click', (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(item)
        // e.target.style.textDecoration = 'line-through'
        // e.target.style.opacity = '0.9'
        e.target.remove()

    })
})

