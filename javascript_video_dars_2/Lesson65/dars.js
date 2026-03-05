const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const gameLavel = document.querySelector('#gameLavel')
const btn1 = document.querySelector('#btnPlayer1')
const btn2 = document.querySelector('#btnPlayer2')
const reset = document.querySelector('#reset')




btn1.addEventListener('click', () => {
    console.log(gameLavel.value ,player1.textContent );
    if (gameLavel.value > player1.textContent && gameLavel.value > player2.textContent) {
        player1.textContent++

        if (gameLavel.value == player1.textContent) {
            player1.classList.add('winner')
            player2.classList.add('loser')
        }
    }
})


btn2.addEventListener('click', () => {
    console.log(gameLavel.value ,player2.textContent );
    
    if (gameLavel.value > player2.textContent && gameLavel.value > player1.textContent) {
        player2.textContent++

        if (gameLavel.value == player2.textContent) {
            player2.classList.add('winner')
            player1.classList.add('loser')
        }
    }
})

reset.addEventListener('click', () => {
    player1.textContent = 0
    player2.textContent = 0
    player1.classList.remove('loser')
    player2.classList.remove('loser')
    player1.classList.remove('winner')
    player2.classList.remove('winner')

})
































































// // // javasscript destructuring

// // const [olma,gilos,...boshqamevalar] = ['olma🍎','gilos🍒','uzum🍇','nok🍐']




// // // const olma = mevalar[0]
// // // const gilos = mevalar[1]
// // // const uzum = mevalar[2]
// // // const nok = mevalar[3]

// // console.log(olma,gilos,boshqamevalar)

// // // console.log(olma,gilos,uzum,nok)




// const {name:ism,age,job} = {
//     name:'Ibaydullo',
//     age:24,
//     job:'developer'
// }


// console.log(ism,age,job)

