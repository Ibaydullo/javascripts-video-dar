// Locoal Storage

// setItem
// const name = 'Ibaydullo'
// const age = 25
// localStorage.setItem('name',name)
// localStorage.setItem('age',age)



// // getItem
// const getAge = localStorage.getItem('age')
// console.log(getAge)

// const names = ['polonjon', 'ppistonjon', 'valanjon']

// localStorage.setItem("names", JSON.stringify(names))

// const geatNames = JSON.parse(localStorage.getItem('names'))
// console.log(geatNames)

// // clear
// localStorage.clear(names)

// const names = JSON.parse(localStorage.getItem('names')) ? JSON.parse(localStorage.getItem("names")) : []

// if (names.length > 0) {
//     names.forEach((name) => {
//         console.log(name)
//     })
// } else {
//     console.log("Hechqanday isim yo'q")
// }




// setTimeout

// setTimeout(function, time)





// setTimeout(() => {
//     console.log("Hello world")
// }, 3000)


// function callMe() {
//     alert('Hello Jon')
// }

// setTimeout(() => {
//     callMe()
// }, 3000)


let a = 0
const timeIntervall = setInterval(() => {
    a++
    console.log(a)
}, 1000)


setTimeout(() => {
    clearInterval(timeIntervall)
},10000)