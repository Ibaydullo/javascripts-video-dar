const textMesage = document.querySelector('#counter')
const startbutton = document.querySelector('#btn')
const pausetbutton = document.querySelector('#btn2')





let a = 0
startbutton.addEventListener('click', () => {
    const timeIntervall = setInterval(() => {
        textMesage.textContent = a
        a++

    }, 1000)
    pausetbutton.addEventListener('click', () => {
        setTimeout(() => {
            clearInterval(timeIntervall)
        }, )
    })
})





