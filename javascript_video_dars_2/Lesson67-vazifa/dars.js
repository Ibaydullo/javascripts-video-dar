const fullday = document.querySelector('#full-day')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')



function fuldata() {
    const now = new Date()
    const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const soat = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
    const minut = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
    const sekund = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
    fullday.textContent = `${today}  ${months[month]}, ${year}`
    hour.textContent = soat
    minute.textContent = minut
    second.textContent = sekund
}

setInterval(() => {
    fuldata()
}, 1000)




