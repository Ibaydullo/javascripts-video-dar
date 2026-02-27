// // ---------Lesson 41 -----------

// // Math object

// // Math, Math.PI, Math.E
// console.log(Math)
// console.log(Math.E)
// console.log(Math.PI)

// const area = 7.9

// // soning eng yaqin butun qismga yaxlitlaydi
// // Math.round()
// console.log(Math.round(area))

// // eng yaqin kichik butun qisimga qarab yaxlitlaydi
// // Math.floor()
// console.log(Math.floor(area))

// // eng yaqin kattasiga butun qismiga qarab yaxlitlaydi 
// // Math.ceil()
// console.log(Math.ceil(area))

// // sonning faqat butun qismini qaytaradi
// // Math.trunc()
// console.log(Math.trunc(area))

// // 0 va 1 oralig'ida ixtiyoriy raqamlarni qaytaradi 
// // Math.random()
// const randomNumber = Math.trunc(Math.random() * 10) + 1
// console.log(randomNumber)





const sozyoz = prompt("So'z kiriting:")
let newSoz = ""
sozyoz.split("").forEach(function (soz){
    let newsozcha = soz.charAt().toUpperCase() + soz.slice(1).toLocaleLowerCase()
    newSoz += newsozcha
})
console.log(newSoz)