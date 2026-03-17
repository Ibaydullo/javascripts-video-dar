function locationFul() {
    let orders = JSON.parse(localStorage.getItem("orders"))

    let location = document.getElementById("location")
    location.innerHTML = ""
    orders.forEach(element => {

        location.innerHTML += `
            <div class="mt-10 mb-10 p-1 rounded-4xl bg-gradient-to-br from-[#DBAC2C] to-[#8047F8]">
                <div id="" class="bg-white rounded-4xl p-10">
                    <div class="space-y-6">
                        <div name="user name" class="flex items-start gap-4">
                            <span
                                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#8047F8] text-white">
                                <i class="fas fa-user"></i>
                            </span>
                            <div>
                                <p class="text-sm text-[#574F4D]">Entrega para</p>
                                <p class="text-base font-bold text-[#403937]" id="customer-name">${element.fio}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span
                                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#8047F8] text-white">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                            <div>
                                <p class="text-sm text-[#574F4D]">Entrega em</p>
                                <p class="text-base font-bold text-[#403937]" id="delivery-address">
                                    ${element.manzil}
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span
                                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#8047F8] text-white">
                                <i class="fas fa-phone"></i>
                            </span>
                            <div>
                                <p class="text-sm text-[#574F4D]">Contato</p>
                                <p class="text-base font-bold text-[#403937]" id="customer-phone">${element.nomer}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span
                                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#DBAC2C] text-white">
                                <i class="fas fa-clock"></i>
                            </span>
                            <div>
                                <p class="text-sm text-[#574F4D]">Previsão de entrega</p>
                                <p class="text-base font-bold text-[#403937]" id="delivery-time">20 min - 30 min</p>
                            </div>
                        </div>
                        <a onclick="removeDastavka(${element.id})">
                            <button  class="border-2 border-green-500 text-green-600 font-semibold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-green-500 transition duration-300 hover:text-white">
                                <span class="bg-green-100 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org" class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Buyurtma yetkazildi
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        `
    })
}

function removeDastavka(id) {
    let orders = JSON.parse(localStorage.getItem("orders"))
    orders.splice(id, 1)
    localStorage.setItem("orders", JSON.stringify(orders))
    window.location.href = "./index.html";

    locationFul()
}

locationFul()