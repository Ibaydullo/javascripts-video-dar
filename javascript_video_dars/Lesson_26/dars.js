// Block Scops

let age = 24 //global scope

if (true) {
    let age = 25
    let ism = 'ibaydullo'
    console.log('If elsening ichidagi age:', age, ism)

    if (true) {
        let age = 30
        console.log('Ikkinchi if ichi:', age)
        var test = 'Hello'
    }
}


console.log("Tashqi tomongda chaqirilgan age:", age, test)




let joy = 'Fargona'


{
    let joy = 'Toshkent'

    {
        console.log(joy)
    }
}