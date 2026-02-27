// JavaScript Masalalari:

// Loop / Array / String / Function / Object

/* --------------------  1 MASHQ🚩 -------------------- */
// ushbu arraydagi stringni inxednini toping.


// const myArray = [[false, true], [1, 2], 99, 'yaxshi']
// for (let i = 0; i < myArray.length; i++) {
//     if (typeof myArray[i] === 'string') {
//         console.log("string index:", i);
//     }
// }





// /* --------------------  2 MASHQ🚩 -------------------- */
// // Array ichidagi faqat arraylarni elementlarini ajratib oling.
// // Kutilyotgan natija: [1, 2, 3, 4, 5, 6]
// const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]
// const newData = []
// for (let i = 0; i < data.length; i++) {
//    if (Array.isArray(data[i])) {
//       for (let j = 0; j < data[i].length; j++) {
//          newData.push(data[i][j])
//       }
//    }
// }

// console.log(newData);




// /* --------------------  3 MASHQ🚩 -------------------- */
// // Array ichidagi
// // [null, 0, "", false, undefined, NaN]
// //qiymatlarini ajratib oladigan cod yozing.


// const myArray = [null, 0, "0", false, undefined, NaN]
// const newArray = []
// // myArray.forEach(function (element) {
// //     if (!element) {
// //         newArray.push(element)
// //     }
// // })

// // for (let i = 0; i < myArray.length; i++) {
// //    if (!myArray[i]) {
// //       newArray.push(typeof myArray[i])
// //    }
// // }

// console.log(newArray);





// /* --------------------  4 MASHQ🚩 -------------------- */
// // Berilgan qiymat: 'samarqand'
// // Kutilyotgan qiymat : 'dnaqramas' => elementlarni teskari qilib beradigan cod yozing.

// const soz = "samarqand"
// let newSoz2 = ""
// for (let i = soz.length - 1; i >= 0; i--) {
//       newSoz2 += soz[i]
// }
// console.log(newSoz2)


// /* --------------------  5 MASHQ🚩 -------------------- */
// // Propmpdan kiritilgan istalgan so’zlarni, misol uchun.
// // Kiritiladi: “AsSSalamu AlAyKUM YaxShimisiz” so’zi kiritilgan bo’lsa. Uni:
// // Javob: “aSSALOMU aLAYKUM yAXSHIMISIZ” ko’rinishida qaytaring.
// const word = "aSSALOMU aLAYKUM yAXSHIMISIZ"
// let newWord = ""
// const wordArray = word.split(' ')
// console.log(wordArray)
// wordArray.forEach(function (soz){
//     let newSoz = soz.charAt().toUpperCase() + soz.slice(1).toLocaleLowerCase()
//     newWord += newSoz + " "
// })
// console.log(newWord)









// /* --------------------  6 MASHQ🚩 -------------------- */
// // 7) Arraydagi Natural raqamlarni yig’indisini topadigan cod yozing.
// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// let sum = 0
// numbers.forEach(function (number) {
//     if (number > 0 && Number.isInteger(number)) {
//          sum += number
//       }  
// })
// console.log(sum)







/* --------------------  7 MASHQ🚩 -------------------- */
// 7) Prompt’dan kiritilgan stringlar ichidagi “a” harfi necha marta ishtirok etganini aniqlaydigan cod yozing.
// “Qalesiz yaxshimisiz ? Yaxshimi ishlar ?” - nechta “a” harifi qatnashganini toping.

// const text = "Qalesiz yaxshimisiz ? Yaxshimi ishlar ?"
// let count = 0
// text.split("").forEach(function (harf) {
//     if (harf.toLocaleLowerCase() === "a") {
//         count++
//     }
// })    
// console.log(count)







// /* --------------------  8 MASHQ🚩 -------------------- */
// // Berilgan: [21.1, "Roziya", "array", ["I am array"], null, true, 214]
// // array berilgan Uni:
// // Natija: ["number", "string", "string", "object", "object", "boolean", "number"]
// // ko’rinishida qaytaring.
// const myArray = [21.1, "Roziya", "array", ["I am array"], null, true, 214]
// let newArray = []
// for (let i = 0; i < myArray.length; i++) {
//    newArray.push(typeof myArray[i])
// }
// console.log(newArray)







// /* --------------------  9 MASHQ🚩 -------------------- */
// // Kiritilgan text'ni nechta elementdan iboratligini aniqlovchi cod yozing.lendth dan "FOIDALANMANG".
// const word = 'Uzbekistan'
// let count = 0
// for (let i = 0; i < word.length; i++ ){
//    count++
// }
// console.log(count)







// /* -------------------- 10 MASHQ🚩 -------------------- */
// // Arrayning berilgan: [1, 2, 3, 4, 5] uning ichidagi elementlariga o’z index(position) raqamini qo’shib yangi array hosil qiling.
// // Natija: [1, 3, 5, 7, 9] bo’lsin.

// const array = [1, 2, 3, 4, 5]
// let newArray = []
// for (let i = 0; i < array.length; i++){
//    newArray.push(array[i] + i)
// }
// console.log(newArray)






// /* -------------------- 11 MASHQ🚩 -------------------- */
// // Berilgan sonning “tarkibidagi” sonlar yig’indisini toping.
// // Misol uchun:
// /*
//    1 + 2 + 3 = 6
//    1 + 2 + 3 + ... + 10 = 55
//    1 + 2 + 3 + ... + 7 = 28
// */

// const son = 10
// let result = 0
// for (let i = 0; i <= son; i++ ){
//    result += i
// }
// console.log(result)






// /* -------------------- 12 MASHQ🚩 -------------------- */
// // Berilgan sonni n ga ko’paytirib 1 ni qo’shadigan cod yozing. Birinchi 10 ta holat qaytarilsin.
// // n=2 misolidida:
// /*
//    7 - "8,15,22,29,36,43,50,57,64,71"
//    1 - "2,3,4,5,6,7,8,9,10,11"
//    3 - "4,7,10,13,16,19,22,25,28,31"
// */
// let number = 7 
// let result = " "
// for (let i = 1; i <= 10; i++ ) {
//    result += (i * number) + 1 + ","
// }
// console.log(result)










// /* -------------------- 13 MASHQ🚩 -------------------- */
// // functionga array kiritsak u array ichidagi raqamlarni teskari ishorasiga aylanitirib berisin.
// // [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5]
// // [1, -2, 3, -4, 5] => [-1, 2, -3, 4, -5]
// // [] => []

// let numbers = [1, -2, 3, 4, 5]
// let result = []
// const reverseFunc = () => {
//    for (let i = 0; i < numbers.length; i++ ) {
//       result.push(numbers[i] * -1)
//    }
//    console.log(result)
// }

// reverseFunc()





// /* -------------------- 14 MASHQ🚩 -------------------- */
// // functionga berilgan raqamni 0 dan o'sha raqamlargarcha bo'lgan sonlarni 3,5 va 15 ga bo'linish holatlarini tekshiring.
// // agar 3 ga bo'linadigan sonlar - 'fizz'
// // agar 5 ga bo'linadigan sonlar - 'buzz'
// // agar 15 ga bo'linadigan sonlar - 'fizzbuzz' -  deb ataladi.

// // kirilgan 25
// // kutilgan javob - [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz' ]

// const kiritilgan = 25
// let arrayResult = []

// const sonlararry = () => {
//    for (let i = 1; i < kiritilgan; i++ ){
//       if (i % 15 == 0){
//          arrayResult.push('fizzbuzz')
//       }else if (i % 5 == 0) {
//          arrayResult.push('buzz')
//       }else if (i % 3 == 0) {
//          arrayResult.push('fizz')
//       }else {
//          arrayResult.push(i)
//       }

//    }
//    console.log(arrayResult)
// }
// sonlararry()





/* -------------------- 15 MASHQ🚩 -------------------- */
// o'zingiz haqingizda object yarating va unga haqida mehtodni qo'shing. U methodan fidalaninlsa objectdagi ma'lumotlardan foidalanib o'zingiz haqingizda gapirib beradi.



const ibaydullo = {
   name: 'Ibaydullo',
   lastname: 'Saydumarov',
   age: 25,
   region: 'Andijon',
   isMerried: false,
   job: 'Programmer',
   haqida: function () {
      return `
         Assalomu aleykum, Mening ismim ${this.name}, 
         Familiyam ${this.lastname}. Yoshim ${this.age}da.
         ${this.region}da yashayman. ${this.job} bo'lin ishlayman. 
          ${this.isMerried ? 'Uylanganman' : 'Hali uylganmaganman'
         }
      `
   }
}

const result1 = ibaydullo.haqida()
console.log(result1)



