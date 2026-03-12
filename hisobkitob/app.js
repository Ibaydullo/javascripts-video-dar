const resultText = document.getElementById('resultText');
const natijaText = document.getElementById('natija-text');
const statistikKirim = document.getElementById('statistikKirim')
const statistikChiqim = document.getElementById('statistikChiqim')
const kirimInput = document.getElementById('kirimInput');
const chiqimInput = document.getElementById('chiqimInput');
const hisoblaBtn = document.getElementById('hisoblaBtn');
const hisoblaBtn2 = document.getElementById('hisoblaBtn2');
const kirimInputText = document.getElementById('kirimInput_text')
const chiqimInputText = document.getElementById('chiqimInput_text')
const clearBtn = document.getElementById('clearBtn')


let kirimlar = JSON.parse(localStorage.getItem('kirimList')) ? JSON.parse(localStorage.getItem('kirimList')) : []
let chiqimlar = JSON.parse(localStorage.getItem('chiqimList')) ? JSON.parse(localStorage.getItem('chiqimList')) : []
let hamyon = localStorage.getItem('hamyonList') ? localStorage.getItem('hamyonList') : 0
let total = Number(hamyon)
console.log(kirimlar);


function textHtml() {

    resultText.textContent = hamyon
    if (hamyon < 0) {
        natijaText.classList.remove('text-green-600')
        natijaText.classList.add('text-red-600')

    }else if (hamyon > 0){
        natijaText.classList.add('text-green-600')
        natijaText.classList.remove('text-red-600')
    }
}
textHtml()



function statistik() {
    statistikKirim.innerHTML = ''
    
    kirimlar.forEach(element => {
        let kirim = element.kirim
        let hisoboti = element.hisoboti
        total = total + element.kirim
        hamyon = total
        statistikKirim.innerHTML += `
        <tr>
            <td class="border border-gray-600">
                <p class="ml-2">${kirim}</p>
            </td>
            <td class="border border-gray-600">
                <p class="ml-2">${hisoboti}</p>
            </td>
        </tr>
    `
    });
    statistikChiqim.innerHTML = ''
    chiqimlar.forEach(element => {
        let chiqim = element.chiqim
        let hisoboti = element.hisoboti
        total = total - element.chiqim
        hamyon = total
        statistikChiqim.innerHTML += `
        <tr>
            <td class="border border-red-600">
                <p class="ml-2">${chiqim}</p>
            </td>
            <td class="border border-red-600">
                <p class="ml-2">${hisoboti}</p>
            </td>
        </tr>
    `
    });
    total = 0
}
statistik()









// localStorage ga qo'shish
function setKirimlar() {
    localStorage.setItem('kirimList', JSON.stringify(kirimlar))
    localStorage.setItem('hamyonList', hamyon)

}

function setChiqimlar() {
    localStorage.setItem('chiqimList', JSON.stringify(chiqimlar))
    localStorage.setItem('hamyonList', hamyon)
}



hisoblaBtn.addEventListener('click', () => {
    const todoText = kirimInput.value.trim()
    if (todoText.length) {
        kirimlar.push({ kirim: Number(kirimInput.value), hisoboti: kirimInputText.value })
        statistik()
        setKirimlar()
        textHtml()
        kirimInput.value = ""
        kirimInputText.value = ""
    }else {
        
    }
})

hisoblaBtn2.addEventListener('click', () => {
    const todoText = chiqimInput.value.trim()
    if (todoText.length) {
        chiqimlar.push({ chiqim: Number(chiqimInput.value), hisoboti: chiqimInputText.value })
        statistik()
        setChiqimlar()
        textHtml()
        chiqimInput.value = ""
        chiqimInputText.value = ""
    } else {
        
    }
})

clearBtn.addEventListener('click', () => {
    localStorage.setItem('kirimList', [])
    localStorage.setItem('chiqimList', [])
    localStorage.setItem('hamyonList', 0)
})