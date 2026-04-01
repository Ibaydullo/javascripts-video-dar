let users = document.getElementById("admin_page")
let clients = document.getElementById("client_page")
const api = "http://87.192.233.178:49304/api/v1"
let clentsStatistic = document.getElementById("clentstatistic")
let adminStatistic = document.getElementById("adminstatistic")
let home = document.getElementById("home")
let admin = document.getElementById("admin")
let client = document.getElementById("client")
let statistic = document.getElementById("statistic")
let client_form = document.getElementById("client_form")



function showAddClientForm() {
    statistic.classList.add("hidden")
    client_form.classList.remove("hidden")

}




function addClient() {
    let error_message = document.getElementById("error_message")
    let clientName = document.getElementById("client_name").value
    let clientPhone = document.getElementById("client_phone").value
    let clientDabt = document.getElementById("client_dabt").value
    let clientPayment = document.getElementById("client_payment").value

    if (clientName != null && clientPhone.length >= 9 && clientDabt != null && clientPayment != null) {

        let obj = {
            neme: clientName,
            phone: clientPhone,
            debt: clientDabt,
            payment: clientPayment,
        }
        console.log(obj);
        axios.post(`${api}/client`, obj)
        .then((response) => {
            console.log()
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
                            <td class="border-1 border-gray-300 px-4 py-2">${index+1}</td>
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




function getClients() {
    statistic.classList.remove("hidden")
    let response = axios.get(`${api}/client`)
        .then((response) => {
            console.log(response.data)
            clentsStatistic.innerHTML = ""
            response.data.forEach((element, index) => {
                clentsStatistic.innerHTML += `
                <tr class="border border-gray-300 break-all">
                    <td class="border-1 border-gray-300 px-4 py-2">${index + 1}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.name}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.phone}</td>
                    <td class="border-1 border-gray-300 px-4 py-2">${element.createdAt}</td>
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

if (admin) {
    admin.addEventListener("click", (e) => {
        e.preventDefault();
        getUsers();
        clients.classList.add('hidden');
        users.classList.remove('hidden');
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

function logaut() {
    window.location.replace("../login/login.html")
}