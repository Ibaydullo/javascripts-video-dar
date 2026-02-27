// /*---------------------- 50 ----------------------*/


const ul = document.querySelector('ul')

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'Fomething new text 🤑'
    ul.appendChild(li)
})



const items = document.querySelectorAll('li')


// items.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         // e.target.remove()
//         console.log('CLICKED LI')
//         e.stopPropagation()

//     })
// })


ul.addEventListener('click', (e) => {
    // console.log('CLICKED LI')

    if (e.target.nodeName == 'LI') {
        e.target.remove()

    }
    // console.log(e.target.nodeName)
    
})

