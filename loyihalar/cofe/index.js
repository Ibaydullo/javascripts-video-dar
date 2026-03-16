let cofeDiv = document.getElementById('cofeDiv')
let span = document.getElementById("span")
if (span) {
    let carShop = JSON.parse(localStorage.getItem("car-shop")) || [];
    span.innerText = carShop.length
}



function handleDrawCofeDiv() {
    if (!cofeDiv) return;
    let cofes = JSON.parse(localStorage.getItem("cofes"))
    cofeDiv.innerHTML = ""
    cofes.forEach((item) => {
        cofeDiv.innerHTML += `
        <!-- Card 1 -->
                <div class="bg-[#F3F2F2] rounded-tr-3xl rounded-bl-3xl  p-6 mt-10 shadow-sm hover:shadow-lg transition">
                    <img src="images/${item.img}" alt="Expresso Tradicional" class="mx-auto w-32 h-32 -mt-14 mb-4">
                    <div class="flex items-center justify-center gap-2 mb-4">
                        <span
                            class="text-[10px] font-bold uppercase bg-[#F1E9C9] text-[#C47F17] px-3 py-1 rounded-full">Tradicional</span>
                    </div>
                    <div class="justify-center items-center text-center gap-2 mb-4">

                        <h3 class="text-lg font-bold text-gray-900 mb-2">${item.name}</h3>
                        <p class="text-sm text-gray-500 mb-6">${item.description}
                        </p>
                    </div>
                    <div class="flex items-center gap-2 mr-5 justify-between">
                        <div class="flex items-center gap-2">
                            <p class="text-sm text-gray-500">R$</p>
                            <p class="text-2xl font-extrabold text-gray-900">${item.price}</p>
                        </div>
                        <div class="flex h-10 items-center gap-2 bg-[#E6E5E5] p-1 rounded-lg">
                            <button onclick="removeCofeToStorage(${item.id})" class="w-6 h-10 rounded bg-[#E6E5E5] text-[#272221] font-bold cursor-pointer text-2xl">-</button>
                            <span id="count${item.id}" class="w-6 text-center text-xl">0</span>
                            <button onclick="addCofeToStorage(${item.id})" class="w-6 h-10 rounded bg-[#E6E5E5] text-[#272221] font-bold cursor-pointer text-2xl">+</button>
                        </div>
                        <a href="./index2.html">
                        <button class="bg-[#4B2995] h-10 text-white p-3 rounded-lg hover:bg-[#3A2170] cursor-pointer">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        </a>
                    </div>
                </div>
        `
    })
}

function countCofe(id) {
    let carShop = JSON.parse(localStorage.getItem("car-shop")) || [];
    carShop.forEach((item) => {
        let p = document.getElementById(`count${item.cofeId}`);
        if (p) p.innerText = item.count;

    });

}



function addCofeToStorage(id) {
    let carShop = JSON.parse(localStorage.getItem("car-shop"))
    if (carShop == null) {
        carShop = []
        let obj = {
            cofeId: id,
            count: 1
        }
        carShop.push(obj)

        localStorage.setItem("car-shop", JSON.stringify(carShop))
    }
    let ishave = true
    carShop.forEach((item, index) => {
        if (item.cofeId == id) {
            ishave = false
            item.count += 1
        }
    })
    if (ishave) {
        let obj = {
            cofeId: id,
            count: 1
        }
        carShop.push(obj)
    }
    localStorage.setItem("car-shop", JSON.stringify(carShop))
    draweBasket();
    countCofe();

    span.innerText = carShop.length


}


function removeCofeToStorage(id) {
    let carShop = JSON.parse(localStorage.getItem("car-shop"))
    if (carShop == null) {
        return;
    } else {
        carShop.forEach((item, index) => {
            if (item.cofeId == id) {
                if (item.count == 1) {
                    carShop.splice(index, 1)
                    let p = document.getElementById(`count${item.cofeId}`)
                    p.innerText = 0
                }
                item.count -= 1
            }
        })
    }
    localStorage.setItem("car-shop", JSON.stringify(carShop))
    draweBasket();
    countCofe();

    span.innerText = carShop.length
}

handleDrawCofeDiv()
countCofe()

