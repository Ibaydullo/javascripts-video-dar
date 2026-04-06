const api = "http://87.192.233.178:49304/api/v1"
let clentsStatistic = document.getElementById("clentstatistic")
let client = document.getElementById("client")
let statistic = document.getElementById("statistic")
let client_form = document.getElementById("client_form")
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
        method: "GET",
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
        }, 5000)
    }
}

function closePageModal() {
    statistic.classList.remove("hidden")
    client_form.classList.add("hidden")
    document.getElementById("error_message").innerHTML = ""
    document.getElementById("client_name").value = ""
    document.getElementById("client_phone").value = ""
    document.getElementById("client_dabt").value = ""
    document.getElementById("client_payment").value = ""
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
                <td class="border-1 border-gray-300 px-4 py-2 w-screen "><p onclick="OpenHistory('${element.id}')" class="cursor-pointer">${element.name}</p></td>
                <td class="border-1 border-gray-300 px-4 py-2 w-screen ">${index + 1}</td>
                    <td class="border-1 border-gray-300 px-4  w-screen py-2">${element.phone}</td>
                    <td class="border-1 border-gray-300 px-4  w-screen py-2">${element.createdAt}</td>
                    <td class="border border-gray-300 px-4 py-5 gap-5 flex">
                        <button onclick="openMoodalDebt('${element.name}', '${element.id}')" class="bg-blue-500           w-screen    text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="openMoodalPayment('${element.name}', '${element.id}')"  class="bg-green-500      w-screen   text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition"><i class="fa-regular fa-credit-card"></i></button>
                        <button onclick="deleteClient('${element.id}')" class="bg-red-500 text-white px-3 py-1 rounded-lg w-screen shadow hover:bg-red-600 transition"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
            `)
            });
        })
        .catch((error) => {
            console.log(error);
        });

})




function getClients() {
    statistic.classList.remove("hidden")
    let response = axios.get(`${api}/client`)
        .then((response) => {
            clentsStatistic.innerHTML = ""
            console.log(response.data);
            response.data.forEach((element, index) => {
                clentsStatistic.innerHTML += `
                <tr class="border border-gray-300 break-all">
                    <td class="border-1 border-gray-300 lg:px-4 lg:py-2 md:p-2 p-2 w-screen">${index + 1}</td>
                    <td class="border-1 border-gray-300 lg:px-4 lg:py-2 md:p-2 p-2 w-screen"><p onclick="OpenHistory('${element.id}')" class="cursor-pointer">${element.name}</p></td>
                    <td class="border-1 border-gray-300 lg:px-4 lg:py-2 md:p-2 p-2 w-screen">${element.phone}</td>
                    <td class="border-1 border-gray-300 lg:px-4 lg:py-2 md:p-2 p-2 w-screen">${element.createdAt}</td>
                    <td class="border border-gray-300 lg:px-4 lg:py-5  p-5 gap-2 lg:gap-5 w-screen md:w-auto justify-center items-center flex">
                        <button onclick="openMoodalDebt('${element.name}', '${element.id}')" class="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="openMoodalPayment('${element.name}', '${element.id}')"  class="bg-green-500 text-white px-3 py-1  rounded-lg shadow hover:bg-green-600 transition"><i class="fa-regular fa-credit-card"></i></button>
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


function OpenHistory(e) {
    localStorage.setItem("historyklentid", e)
    window.location.href = ('../history/history.html')
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

        console.log(obj);
        console.log(api + "/debts");


        axios({
            url: api + "/debts",
            method: "POST",
            data: obj
        })
            .then((res) => {
                alert(res.data)
                closeModal()
                amount = ""
                description = ""
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
        method: "POST",
        data: obj
    })
        .then((res) => {
            alert("Qarz tolovi")
            closeModal()
            closeModalPayment()
            amount = ""
            description = ""
        }).catch((error) => {
            alert("Oxshmadi")

        })



}

function closeModalPayment() {
    clientId = "";
    document.getElementById("payment_claentname").innerText = "";
    statistic.classList.remove("hidden");
    document.getElementById("modal_payment").classList.add("hidden");
    document.getElementById("payment_amount").value = "";
    document.getElementById("payment_reason").value = "";

}


