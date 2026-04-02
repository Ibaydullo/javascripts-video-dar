const api = "http://87.192.233.178:49304/api/v1"
let clentsStatistic = document.getElementById("clentstatistic")
let adminStatistic = document.getElementById("adminstatistic")
let home = document.getElementById("home")
let client = document.getElementById("client")
let statistic = document.getElementById("statistic")
let client_form = document.getElementById("client_form")
let admin_sahifa = document.getElementById("admin_sahifa")
let admin = null
let modalDebt = document.getElementById("modal_debt")





function showAddClientForm() {
    statistic.classList.add("hidden")
    client_form.classList.remove("hidden")

}


function getAdmin() {
    let token = localStorage.getItem("access_token")

    axios({
        url: api + "/auth/decode",
        nethod: "GET",
        headers: { Authorization: token }
    })
        .then((res) => {
            admin = res.data
            console.log(admin)
        }).catch((error) => {
            console.log(error);
            window.location.replace("../login/login.html")

        })
}
getAdmin()

function addClient() {
    if (admin == null) {
        alert("Siz admin emasiz")
        return;
    }

    let error_message = document.getElementById("error_message")
    let clientName = document.getElementById("client_name").value
    let clientPhone = document.getElementById("client_phone").value
    let clientDabt = document.getElementById("client_dabt").value
    let clientPayment = document.getElementById("client_payment").value

    if (
        clientName.trim() !== "" &&
        clientPhone && clientPhone.length >= 9 &&
        clientDabt.trim() !== "" &&
        clientPayment.trim() !== ""
    ) {
        let obj = {
            userId: admin.id,
            name: clientName,
            phone: clientPhone,
            debt: clientDabt,
            payment: clientPayment,
        }

        console.log(obj);

        axios.post(`${api}/client`, obj)
            .then((response) => {
                console.log(response.data)
                getClients()
            })
            .catch((err) => {
                console.log("Xatolik:", err)
            })

        statistic.classList.remove("hidden")
        client_form.classList.add("hidden")
    }
    else {
        error_message.innerText = "Malumot t'g'ri kiriting"
        setTimeout(() => {
            error_message.innerText = ""
        }, 3000)
    }
}



function getUsers() {
    statistic.classList.remove("hidden")
    let response = axios.get(`${api}/admin`)
        .then((response) => {
            console.log(response.data)
            adminStatistic.innerHTML = ""
            response.data.forEach((element, index) => {
                element.roles.forEach(i => {
                    adminStatistic.innerHTML += `
                        <tr class="border border-gray-300 break-all">
                            <td class="border-1 border-gray-300 px-4 py-2">${index + 1}</td>
                            <td class="border-1 border-gray-300 px-4 py-2">${element.username}</td>
                            <td class="border-1 border-gray-300 px-4 py-2">${element.phone}</td>
                            <td class="border-1 border-gray-300 px-4 py-2">${element.password}</td>
                            <td class="border-1 border-gray-300 px-4 py-2">${i.name}</td>
                        </tr>
                    `
                    console.log(element)
                });
            });
        })
        .catch((error) => {
            console.log(error);
        });
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

}


let searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", (e) => {
    statistic.classList.remove("hidden")
    let response = axios.get(`${api}/client`)
        .then((response) => {
            clentsStatistic.innerHTML = ""
            response.data.forEach((element, index) => {
                element.name.toLowerCase().includes(e.target.value) && (
                    clentsStatistic.innerHTML += `
                <tr class="border border-gray-300 break-all">
                    <td class="border-1 border-gray-300 px-4 py-2">${index + 1}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.name}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.phone}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.createdAt}</td>
                    <td class="border border-gray-300 px-4 py-5 gap-5 flex">
                        <button onclick="openMoodalDebt('${element.name}', '${element.id}')" class="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="openMoodalPayment('${element.name}', '${element.id}')"  class="bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition"><i class="fa-regular fa-credit-card"></i></button>
                        <button onclick="deleteClient('${element.id}')" class="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
            `)
            });
        })
        .catch((error) => {
            console.log(error);
        });

})




function getClients(search) {
    console.log(search)
    statistic.classList.remove("hidden")
    let response = axios.get(`${api}/client`)
        .then((response) => {
            clentsStatistic.innerHTML = ""
            response.data.forEach((element, index) => {
                    clentsStatistic.innerHTML += `
                <tr class="border border-gray-300 break-all">
                    <td class="border-1 border-gray-300 px-4 py-2">${index + 1}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.name}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.phone}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.createdAt}</td>
                    <td class="border border-gray-300 px-4 py-5 gap-5 flex">
                        <button onclick="openMoodalDebt('${element.name}', '${element.id}')" class="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="openMoodalPayment('${element.name}', '${element.id}')"  class="bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition"><i class="fa-regular fa-credit-card"></i></button>
                        <button onclick="deleteClient('${element.id}')" class="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
            `
            });
        })
        .catch((error) => {
            console.log(error);
        });
}
getClients();

if (home) {
    home.addEventListener("click", (e) => {
        e.preventDefault();
        getUsers();
        getClients();
        users.classList.remove('hidden');
        clients.classList.remove('hidden');

    });
}

if (client) {
    client.addEventListener("click", (e) => {
        e.preventDefault();
        getClients();
        users.classList.add('hidden');
        clients.classList.remove('hidden');
    });
}


function deleteClient(clientId) {
    axios(
        {
            url: api + `/client/${clientId}`,
            method: "DELETE",
        }
    )
        .then((res) => {
            alert("deleted successfully")
            getClients()
        })
        .catch((err) => {
            alert("not deleted")
        })
}


let clientId = ""


function openMoodalDebt(clientname, clientbebtId) {
    statistic.classList.add("hidden");
    modalDebt.classList.remove("hidden");
    console.log(client);
    document.getElementById("modal_claentname").innerText = clientname + " ga qo'shish"
    clientId = clientbebtId



}


function closeModal() {
    statistic.classList.remove("hidden");
    modalDebt.classList.add("hidden");
    document.getElementById("debt_amount").value = null
    document.getElementById("debt_reason").value = ""
    clientId = ""

}

function handleSaveClaentDebts() {
    let amount = document.getElementById("debt_amount").value
    let description = document.getElementById("debt_reason").value
    if (amount !== "" && description !== "") {

        let obj = {
            attachmentId: null,
            userId: admin.id,
            clientId: clientId,
            amount: amount,
            description: description,
        }

        axios({
            url: api + "/debts",
            nethod: "POST",
            data: obj
        })
            .then((res) => {
                alert("Zo'r bir odamni tiqting")
                closeModal()
            }).catch((error) => {
                alert("Oxshmadi")

            })



    }
    else {
        document.getElementById("error_message_debt").innerText = "Malumot t'g'ri kiriting"
        setTimeout(() => {
            document.getElementById("error_message_debt").innerText = ""
        }, 3000)
    }
}


function logaut() {
    window.location.replace("../login/login.html");
}


function openMoodalPayment(name, id) {
    clientId = id;
    document.getElementById("payment_claentname").innerText = name;
    statistic.classList.add("hidden");
    document.getElementById("modal_payment").classList.remove("hidden");
}

function handleSavePayment() {
    let amount = document.getElementById("payment_amount").value
    let description = document.getElementById("payment_reason").value


    let obj = {
        clientId: clientId,
        userId: admin.id,
        amount: amount,
        description: description,
    }

    let res = axios({
        url: api + "/payment",
        nethod: "POST",
        data: obj
    })
        .then((res) => {
            alert("Qarz tolovi")
            closeModal()
            closeModalPayment()
        }).catch((error) => {
            alert("Oxshmadi")

        })



}

function closeModalPayment() {
    clientId = "";
    document.getElementById("payment_claentname").innerText = "";
    statistic.classList.remove("hidden");
    document.getElementById("modal_payment").classList.add("hidden");
    document.getElementById("payment_amount").innerText = "";
    document.getElementById("payment_reason").innerText = "";

}


