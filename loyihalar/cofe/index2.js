let carShop = JSON.parse(localStorage.getItem("car-shop"))
if (span) span.innerHTML = carShop.length

if (carShop != null) {
    let selectedCoffees = document.getElementById('selected-coffees')
    let cofetPrice = document.getElementById("product-price")
    let totalPrice = document.getElementById("total-price")



    function draweBasket() {
        let productPrice = 0
        let carShop = JSON.parse(localStorage.getItem("car-shop"))
        if (selectedCoffees == null) {
            return;
        }
        selectedCoffees.innerHTML = ""
        let product = null
        carShop.forEach(item => {
            let cofes = JSON.parse(localStorage.getItem("cofes"))
            cofes.forEach((cofe) => {
                if (cofe.id == item.cofeId) {
                    product = cofe

                }
            })
            productPrice += item.count * product.price
            selectedCoffees.innerHTML += `
            <div class="flex items-center justify-between gap-4 p-4 bg-[#F3F2F2] rounded-lg">
                <div class="flex items-center gap-4">
                    <div class="h-16 w-16 rounded-full bg-[#E6E5E5] flex items-center justify-center">
                        <img src="./images/${product.img}" alt="">
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-[#403937]">${product.name}</div>
                        <div class="flex items-center gap-2 mt-2">
                            <button onclick="removeCofeToStorage(${product.id})"
                                class="cursor-pointer h-8 w-8 rounded-md bg-[#E6E5E5] text-[#4B2995] hover:bg-[#D7D5D5] transition">-</button>
                            <span class="w-6 text-center text-sm font-medium">${item.count}</span>
                            <button onclick="addCofeToStorage(${product.id})"
                                class="cursor-pointer h-8 w-8 rounded-md bg-[#E6E5E5] text-[#4B2995] hover:bg-[#D7D5D5] transition">+</button>
                            <button onclick="removeCarShop(${product.id})"
                                class="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md bg-[#E6E5E5] text-[#574F4D] hover:bg-[#D7D5D5] transition">
                                <i class="fas fa-trash-alt text-[#8047F8]"></i>
                                REMOVER
                            </button>
                        </div>
                    </div>
                </div>
                <div class="text-sm font-bold text-[#403937]">R$ ${product.price * item.count}</div>
            </div>
        `
            cofetPrice.innerText = productPrice
            totalPrice.innerText = productPrice + 350
        });



    }

    function removeCarShop(id) {
        let carShop = JSON.parse(localStorage.getItem("car-shop"))
        carShop.forEach((item, index) => {
            if (id == item.cofeId) {
                carShop.splice(index, 1)
            }
        })
        localStorage.setItem("car-shop", JSON.stringify(carShop))
        draweBasket()
    }
    draweBasket()


    function confirmOrder() {
        let Orders = JSON.parse(localStorage.getItem("orders")) || [];
        let fio = document.getElementById("fio").value
        let manzil = document.getElementById("manzil").value
        let nomer = document.getElementById("nomer").value
        let carShop = JSON.parse(localStorage.getItem("car-shop"))
        if (fio.length < 3 || manzil.length < 3 || nomer.length < 7 || carShop == null || carShop.length == 0) {
            alert("Iltimos to'liq kiriting")
            return;
        }
        location.replace("./index3.html")
        let obj = {
            fio,
            manzil,
            nomer,
            orders: carShop
        }
        Orders.push(obj)
        localStorage.setItem("orders", JSON.stringify(Orders))
        localStorage.setItem("car-shop", JSON.stringify([]))
        locationFul()


    }





}


