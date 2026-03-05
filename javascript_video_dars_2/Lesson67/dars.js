// data

console.log(new Date())


const now = new Date()

const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
const month = now.getMonth() 
const year = now.getFullYear() 


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


console.log("Today:",today)
console.log("Month:",months[month])
console.log("Year:",year)

const hour  = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
const minute  = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
const secund  = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()

console.log(`${hour}:${minute}:${secund}`)