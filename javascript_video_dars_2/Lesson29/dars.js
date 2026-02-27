// // function decloration
// function SayHello() {
//     console.log("Hello world")
// }
// SayHello()
// SayHello()
// SayHello()


// // function axpression
// const Saybaybay = function() {
//     console.log("Bay world")
// }

// Saybaybay()

// // arrow function

// const flip = () => {
//     console.log("This is arrow function")
// }

// flip()



// --------------------------------- Lesson 30 -------------------------------
// Argument & Parametrs


// const SayHello = function (isim = prompt("isim kiriting")) {
//     console.log(`Hayrli kun ${isim}`)
// }

// SayHello()


// const calcArea = function(radius) {
//     const area = 3.14 * radius ** 2
//     return area
// }


// const calcArea = (radius) => {
//     return 3.14 * radius ** 2
// }


// const area = calcArea(5)

// console.log(area)




// const greet = function (){
//     return "hello world"
// }

// const greet = (isim, familiya) => {
//     return `hello ${isim} ${familiya}`
// }


// const result = greet('dani', 'sul')

// console.log(result)



// const bill = function(product, text) {
//     let total = 0

//     for (let i = 0; i < product.length; i ++) {
//         total += product[i] + product[i] * text
//     }
//     return total
// }

// const bill = (product, text) => {
//     let total = 0

//     for (let i = 0; i < product.length; i ++) {
//         total += product[i] + product[i] * text
//     }
//     return total
// }

// const result = bill([10,13,45],0.2)

// console.log(result)





// // -----------------------------------------------------Lesson 32 -----------------------------------
// // Functions vs Methods


// const ism = 'polon'


// // function


// const greet = () => 'hello'

// const result = greet()
// console.log(result)



// // methods

// const res = ism.toUpperCase()
// console.log(res)




// function calcArea(birhtYear, firstName) {
//     const age = 2026 - birhtYear
//     console.log(`${firstName} siz ${age} yoshga kirdiz`)
//     return age 
// }


// const age = calcArea(2001, 'Ibaydullo')




