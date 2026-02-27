// // brek end continue

// const natijalar = [32,43,34,23,0,34,2,432,34]

// for (let i = 0; i < natijalar.length; i++) {
//     if (natijalar[i] === 0){
//         continue
//     }

//     console.log("sizning natijangiz:" , natijalar[i])
    
//     if (natijalar[i] === 432) {
//         console.log("Siz eng yqori natija topladingiz")
//         break
//     }
// }



// switch case

// const baho = "D"

// switch (baho) {
//     case "A":
//         console.log("Sizning bahoyingiiz A")
//         break
//     case "B":
//         console.log("Sizning bahoyingiiz B")
//         break
//     case "C":
//         console.log("Sizning bahoyingiiz C")
//         break
//     case "D":
//         console.log("Sizning bahoyingiiz D")
//         break
//     default:
//         console.log("Sizning bahoyingiiz E")
//         break

// }





// Block Scope

// let age = 24 // globol scope


// if (true) {
//     age = 25
//     console.log("If elsening ichidagi age:", age)

//     if (true) {
//         console.log("Ikkinchi if ichi:", age)
//     }
// }

// console.log("Tashqi tomonda chaqirilgan age:", age)




let joy = 'Andijon'
{
    let joy = 'Toshkent'

    {
        console.log(joy)
    }
}