const signupForm = document.querySelector('#signup-form')
// const username = document.querySelector('#username')
const message = document.querySelector('.message')


signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(username.value)
    const regEX = /^[a-zA-Z0-9]{6,12}$/
    const inputVal = signupForm.username.value
    if (regEX.test(inputVal)) {
        message.textContent = "Malumot to'g'ri kiritildi"
    } else {
        message.textContent = `
        Kiritilayotgan ma'lumot 6 va 12 ta malumot orasida bo'lishi kerak 
        kata va kichik lotin hariflaridan ibortab bo'lishii zarur. 
        Raqamlar ham aralashishi mumkin  `
    }
})


// const ism = 'Ibaydullo'

// const regEX = /^[a-zA-Z0-9]{6,12}$/








// const result = regEX.test(ism)

// console.log(result)