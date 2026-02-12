// If Satatement


// const age = 20

// if (age > 20) {
//     console.log('siz 20 yoshdan katasiz')
// }


const mexmonlar = ['ibaydullo', 'sardor', 'sarvavr']

if (mexmonlar.length > 2) {
    console.log('yetarlicha mexmonlar bor')
}


const parol = 'pasword123'

if (parol.length >= 12 && parol.includes('@')) {
    console.log('sizning parolingiz juda uzun!')
}else if (parol.length >= 8 || (parol.includes('@') && parol.length >= 5)) {
    console.log('sizning parolingiz yetarlicha kuchli')
} else {
    console.log('Sizning parolingiz yetarlicha kuchli emas')
}



// if (parol.length >= 8) {
//     console.log('sizning parolingiz yetarlicha kuchli')
// } else {
//     console.log('Sizning parolingiz yetarlicha kuchli emas')
// }