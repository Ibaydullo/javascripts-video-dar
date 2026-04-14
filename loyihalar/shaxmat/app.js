// let ot = `<div onclick="otonclik()" id="ot_id" class=" border-2.5 rounded-xl w-full h-full mx-auto"><i id="" class="fa-solid fa-chess-knight mt-3 text-5xl" ></i></div>`
// let q1 = 1
// let w1 = 2
// let doskaot = document.getElementById(`k${q1}${w1}`)
// doskaot.innerHTML = ot
// function End(q2, w2) {
//     document.getElementById("ot_id").classList.add("bg-yellow-400")
//     let doskaot2 = document.getElementById(`k${q2}${w2}`)
//     if ((Math.abs(x1 - x2) == 1 && Math.abs(y1 - y2) == 2) || (Math.abs(x1 - x2) == 2 && Math.abs(y1 - y2) == 1)) {
//         doskaot2.innerHTML = ot
//         let doskaot = document.getElementById(`k${q1}${w1}`)
//         doskaot.innerHTML = "" 
//         q1 = q2
//         w1 = w2
//     }
// }







// let farz = `<div onclick="farzonclik()" id="farzid" class=" border-2.5 rounded-xl w-full h-full mx-auto"><i id="" class="fa-solid fa-chess-queen mt-3 text-5xl" ></i></div>`
// let x1 = 1
// let y1 = 1
// let doska = document.getElementById(`k${x1}${y1}`)
// doska.innerHTML = farz
// function farzonclik() {
//     document.getElementById("farzid").classList.add("bg-yellow-400")
// }


// function End(x2, y2) {
//     let doska2 = document.getElementById(`k${x2}${y2}`)
//     if ((Math.abs(x1 - x2) == 1 && Math.abs(y1 - y2) == 1) ||
//         (Math.abs(x1 - x2) == 2 && Math.abs(y1 - y2) == 2) ||
//         (Math.abs(x1 - x2) == 3 && Math.abs(y1 - y2) == 3) ||
//         (Math.abs(x1 - x2) == 4 && Math.abs(y1 - y2) == 4) ||
//         (Math.abs(x1 - x2) == 5 && Math.abs(y1 - y2) == 5) ||
//         (Math.abs(x1 - x2) == 6 && Math.abs(y1 - y2) == 6) ||
//         (Math.abs(x1 - x2) == 7 && Math.abs(y1 - y2) == 7) ||
//         (Math.abs(x1 - x2) == 1 && Math.abs(y1 - y2) == 0) ||
//         (Math.abs(x1 - x2) == 2 && Math.abs(y1 - y2) == 0) ||
//         (Math.abs(x1 - x2) == 3 && Math.abs(y1 - y2) == 0) ||
//         (Math.abs(x1 - x2) == 4 && Math.abs(y1 - y2) == 0) ||
//         (Math.abs(x1 - x2) == 5 && Math.abs(y1 - y2) == 0) ||
//         (Math.abs(x1 - x2) == 6 && Math.abs(y1 - y2) == 0) ||
//         (Math.abs(x1 - x2) == 7 && Math.abs(y1 - y2) == 0) ||
//         (Math.abs(x1 - x2) == 0 && Math.abs(y1 - y2) == 1) ||
//         (Math.abs(x1 - x2) == 0 && Math.abs(y1 - y2) == 2) ||
//         (Math.abs(x1 - x2) == 0 && Math.abs(y1 - y2) == 3) ||
//         (Math.abs(x1 - x2) == 0 && Math.abs(y1 - y2) == 4) ||
//         (Math.abs(x1 - x2) == 0 && Math.abs(y1 - y2) == 5) ||
//         (Math.abs(x1 - x2) == 0 && Math.abs(y1 - y2) == 6) ||
//         (Math.abs(x1 - x2) == 0 && Math.abs(y1 - y2) == 7)
//     ) {
//         let doska = document.getElementById(`k${x1}${y1}`)
//         doska.innerHTML = ""
//         doska2.innerHTML = farz
//         x1 = x2
//         y1 = y2
//     }
// }





// let farz = `<div onclick="farzonclik()" id="farzid" class="border-2.5 rounded-xl w-full h-full mx-auto"><i id="" class="fa-solid fa-chess-queen mt-3 text-5xl" ></i></div>`

// let x1 = 1
// let y1 = 1
// let doska = document.getElementById(`k${x1}${y1}`)
// doska.innerHTML = farz


// function farzonclik() {
//     document.getElementById("farzid").classList.add("bg-yellow-400")
// }

// function End(x2, y2) {


//     let doska2 = document.getElementById(`k${x2}${y2}`)

//     if (
//         Math.abs(x1 - x2) == Math.abs(y1 - y2) ||
//         x1 == x2 ||
//         y1 == y2
//     ) {
//         let doska = document.getElementById(`k${x1}${y1}`)
//         doska.innerHTML = ""
//         doska2.innerHTML = farz

//         x1 = x2
//         y1 = y2
//     }

// }






// let farz = `<div onclick="farzonclik()" id="farzid" class="border-2.5 rounded-xl w-full h-full mx-auto"><i id="" class="fa-solid fa-chess-queen mt-3 text-5xl" ></i></div>`
// let ot = `<div onclick="otonclik()" id="ot_id" class=" border-2.5 rounded-xl w-full h-full mx-auto"><i id="" class="fa-solid fa-chess-knight mt-3 text-5xl" ></i></div>`
// let x3 = 1
// let y3 = 2
// let x1 = 2
// let y1 = 4
// let doska = document.getElementById(`k${x1}${y1}`)
// let doskaot = document.getElementById(`k${x3}${y3}`)
// if (farzonclik()) {
//     doska.innerHTML = farz
//     function farzonclik() {
//         document.getElementById("farzid").classList.add("bg-yellow-400")
//     }
    
//     function End(x2, y2) {
//         let doska2 = document.getElementById(`k${x2}${y2}`)
//         if (
//             Math.abs(x1 - x2) == Math.abs(y1 - y2) ||
//             x1 == x2 ||
//             y1 == y2
//         ) {
//             let doska = document.getElementById(`k${x1}${y1}`)
//             doska.innerHTML = ""
//             doska2.innerHTML = farz
//             x1 = x2
//             y1 = y2
//         }

//     }
// } 
// else if (otonclik()) {
//     doskaot.innerHTML = ot
//     function End(x2, y2) {
//         document.getElementById("ot_id").classList.add("bg-yellow-400")
//         let doskaot2 = document.getElementById(`k${x2}${y2}`)
//         if ((Math.abs(x3 - x2) == 1 && Math.abs(y3 - y2) == 2) || (Math.abs(x3 - x2) == 2 && Math.abs(y3 - y2) == 1)) {
//             let doskaot = document.getElementById(`k${x3}${y3}`)
//             doskaot.innerHTML = ""
//             doskaot2.innerHTML = ot
//             x3 = x2
//             y3 = y2
//         }
//     }
// }





let farz = `<div onclick="farzonclik()"  type="farz" id="farzid" class="border-2.5 rounded-xl w-full h-full mx-auto">
<i class="fa-solid fa-chess-queen mt-3 text-5xl"></i></div>`

let ot = `<div onclick="otonclik()" id="ot_id" type="ot" class="border-2.5 rounded-xl w-full h-full mx-auto">
<i class="fa-solid fa-chess-knight mt-3 text-5xl"></i></div>`

let x1 = 2, y1 = 4
let x3 = 1, y3 = 2

let doska = document.getElementById(`k${x1}${y1}`)
let doskaot = document.getElementById(`k${x3}${y3}`)

// boshlang‘ich joylash
doska.innerHTML = farz
doskaot.innerHTML = ot
doska.type="farz"
doskaot.type="ot"

// FARZ (queen)
function farzonclik() {
    document.getElementById("farzid").classList.add("bg-yellow-400")
}

// OT (knight)
function otonclik() {
    document.getElementById("ot_id").classList.add("bg-yellow-400")
}

// HARAKAT
function End(x2, y2, type) {
    console.log(type);
    
    if (type === "farz") {
        let doska2 = document.getElementById(`k${x2}${y2}`)

        if (
            Math.abs(x1 - x2) == Math.abs(y1 - y2) ||
            x1 == x2 ||
            y1 == y2
        ) {
            document.getElementById(`k${x1}${y1}`).innerHTML = ""
            doska2.innerHTML = farz
            doska2.type="farz"

            x1 = x2
            y1 = y2
        }
    }

    if (type === "ot") {
        let doskaot2 = document.getElementById(`k${x2}${y2}`)

        if (
            (Math.abs(x3 - x2) == 1 && Math.abs(y3 - y2) == 2) ||
            (Math.abs(x3 - x2) == 2 && Math.abs(y3 - y2) == 1)
        ) {
            document.getElementById(`k${x3}${y3}`).innerHTML = ""
            doskaot2.innerHTML = ot
            doskaot2.type="ot"

            x3 = x2
            y3 = y2
        }
    }
}
