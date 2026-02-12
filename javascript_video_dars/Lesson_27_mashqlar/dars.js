/* 1) prompdan isim va yosh kiritilsa kiritilgan yosh orqali ushbu malumotlar hisoblanib berish kerak :
tug'ilgan yili (2001), yashagan oy, hafta, kun, soat, daqiqiqa, sekunda */

// let isim = prompt("Ismingizni kiriting")
// let yil = prompt("Tug'ilgan yilingizni kiriting")


// let yoshi = (2025 - yil)
// let yashagan_oy = (12 * yoshi) 
// let hafta = (4 * yashagan_oy)
// let kun = (yashagan_oy * 30)
// let soat = (24 * kun)
// let daqiqiqa = (soat * 60)
// let soniya = (daqiqiqa * 60)

// console.log(`${isim} siz ${yil} da tug'ilgansiz yoshingiz ${yoshi}-da Yashagan oyingiz ${yashagan_oy} yashagan haftangiz ${hafta} kunigiz ${kun} soatingiz ${soat} daqiqangiz ${daqiqiqa} soniyangiz ${soniya} yashagansiz`)



// const isim = prompt("Ismingizni kiriting:")
// const yosh = prompt("Yoshingizni kiriting:")

// let tugilgan_yil = 2026 - yosh
// let oy = yosh * 12
// let hafta = ((yosh * 365) / 7).toFixed(0)
// let kun = yosh * 365
// let soat = kun * 24
// let daqiqa = soat * 60
// let soniya = daqiqa * 60

// const result = `Qadrli ${isim}. Siz ${tugilgan_yil} yilda tug'ilgansiz. Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz. 😎😎`


// alert(result)




/* 2) - ismlar array'i ichidan promptdan so'ralyotgan ism bo'lsa unda ha bunday ism bor agar bo'lmasa afsus bunday ism yo'q degan yozuv chiqarilishi kerak. */

// const ism = prompt("Isim kiriting:")




// const ismlar = ['Ahror', 'Sardor', 'Doniyor']


// if (ismlar.includes(ism)) {
//     alert(`Ha ${ism} bor`)
// }else {
//     alert(`Afsus ${ism} yoq`)
// }









// const isim = prompt("Isim kiriting")

// const result = ismlar.includes(isim)

// alert(result)








/* 3) array ichidagi ismlarning oxiriga bek qo'shimchasini qo'shing. Va console ga chiqaring */
const ismlar = ['Ahror', 'Sardor', 'Doniyor']

// for (let i = 0; i < ismlar.length; i++) {
//     let result = ismlar[i] + "bek"
//     console.log(result)
// }

// let i = 0

// while (i < ismlar.length) {
//     console.log(i)

//     i++
// }





// for (let i = 0; i < ismlar.length; i++) {
//     console.log(ismlar[i]+"bek")

// }





// 4) promptdan kiritilan viloyat nomi oqarli o'sha viloyatda qancha aholi borlini chiqaring */


// const viloyatNomi = prompt("QQaysi viloyat kerak ?")


// switch (viloyatNomi) {
//     case "Farg'ona":
//         alert("Farg'onada 2 ml aholi boreeee")
//         break
//     case "Andijon":
//         alert("Andijon 20 ml aholi boreeee")
//         break
//     case "Namangan":
//         alert("Namangan 2 ml aholi boreeee")
//         break
//     default:
//         alert("Hozircha bunday viloyat mavjud emas")
    
// }







/* 5) promptga kiritilgan belgilar soni meyoridan oshsa qancha oshgani
 va qancha yozgani, agar meyoridan kam yozilgan bo'lsa qancha 
 yozgani va qancha yana belgi kiritilishi kerakligini yatishi kerak. */

// let meyor = 20
// const belgilar = prompt("Belgilafar kiriting")

// if (meyor === belgilar.length){
//     console.log("Belgilar soni yetarli")
// }else if (meyor > belgilar.length){
//     console.log(`Belgilar soni ${meyor - belgilar.length} ta kam`)
// }else {
//     console.log(`Belgilar soni ${belgilar.length - meyor} ta ko'p`)
// }



// for (let i = 0; i < ismlar.length; i++) 

// for (let i = 1; i <= 10; i++) {
//     console.log(`9 x ${i} = ${9 * i}`)
// }
