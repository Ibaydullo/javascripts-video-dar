/* 1) promptdan ism va yosh kiritilsa kiritilgan yosh orqali ushbu ma'lumotlar hioblanib berilishi kerak:
 tug'ilgan yil (1998), yashagan oy, hafta, kun, soat, daqiqa, sekund */

// let ism = prompt("Isim:")
// let yosh = prompt("Yosh:")
// let tyil = 2026 - yosh 
// let oy = 12 * yosh
// let hafta = (365 * yosh) / 7
// let kun = 365 * yosh
// let soat = 365 * yosh * 24
// let daqiqa = 365 * yosh * 24 * 60
// let sekund = 365 * yosh * 24 * 60 * 60
// alert(`${ism} siz ${tyil} yilda tug'ilgansiz. Siz ${oy}-oy ${kun}-kun ${soat}-soat ${daqiqa}-daqiqa ${sekund}-sekund yashagansiz`)
// console.log(`${ism} siz ${tyil} yilda tug'ilgansiz. Siz ${oy}-oy ${kun}-kun ${soat}-soat ${daqiqa}-daqiqa ${sekund}-sekund yashagansiz`)





/* 2) - ismlar array'i ichidan promptdan so'ralyotgan ism bo'lsa unda ha bunday ism bor agar bo'lmasa afsus bunday ism yo'q degan yozuv chiqarilishi kerak. */
// let ismlar = ['Ahror', 'Sardor', 'Doniyor']
// let ism = prompt("Isim kiriting:")
// if (ismlar.includes(ism)) {
//     alert(`ha ${ism} bor`)
// }else{
//     alert('yoq ekan')
// }









/* 3) array ichidagi ismlarning oxiriga bek qo'shimchasini qo'shing. Va console ga chiqaring */
// const ismlar = ['Ahror', 'Sardor', 'Doniyor']

// for (let i = 0; i < ismlar.length; i++ ) {
//     console.log(`${ismlar[i]}bek`)
// }

// // for / while => loop







// 4) promptdan kiritilan viloyat nomi oqarli o'sha viloyatda qancha aholi borlini chiqaring */
// let viloyat = prompt("Viloyat kiriting:")
// switch(viloyat) {
//     case "Andijon":
//         alert("Andijonda 1232 aholi bor ")
//         break
//     case "Namangan":
//         alert("Namangan 1232 aholi bor ")
//         break
//     case "Fargon":
//         alert("Fargon 1232 aholi bor ")
//         break
//     case "Buhor":
//         alert("Buhor 1232 aholi bor ")
//         break
// }





// /* 5) promptga kiritilgan belgilar soni meyoridan oshsa qancha oshgani va qancha yozgani, agar meyoridan kam yozilgan bo'lsa qancha yozgani va qancha yana belgi kiritilishi kerakligini yatishi kerak. */
// let parol = prompt("parol kiriting:")
// if (parol.length > 8) {
//     alert(`${parol.length-8}-ta kop`)
// }else if (parol.length < 8) {
//     alert(`${8-parol.length}-ta kam`)
// }else {
//     alert("Parol yetarli")
// }