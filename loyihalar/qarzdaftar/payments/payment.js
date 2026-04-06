const api = "http://87.192.233.178:49304/api/v1"
let paymentsTableBody = document.getElementById("paymentsTableBody")
let client = document.getElementById("client")
let statistic = document.getElementById("statistic")
let client_form = document.getElementById("client_form")
let admin = null
let modalDebt = document.getElementById("modal_debt")




function logaut() {
    window.location.replace("../login/login.html")
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




let searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", (e) => {
    statistic.classList.remove("hidden")
    let response = axios.get(`${api}/payment`)

        .then((response) => {
            console.log(response.data);
            paymentsTableBody.innerHTML = ""
            response.data.forEach((element, index) => {
                element.clients.name.toLowerCase().includes(e.target.value) && (
                    paymentsTableBody.innerHTML += `
                    <tr class="border border-gray-300 break-all">
                        <td class="border-1 border-gray-300 px-4 py-2">${index + 1}</td>
                        <td class="border-1 border-gray-300 px-4 py-2">${element.clients.name}</td>
                        <td class="border-1 border-gray-300 px-4 py-2">${element.clients.id}</td>
                        <td class="border-1 border-gray-300 px-4 py-2">${element.usersId}</td>
                        <td class="border-1 border-gray-300 px-4 py-2">${element.amount}</td>
                        <td class="border-1 border-gray-300 px-4 py-2">${element.description}</td>
                        <td class="border-1 border-gray-300 px-4 py-2">${element.createdAt}</td>
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
    let response = axios.get(`${api}/payment`)
        .then((response) => {
            console.log(response.data);

            paymentsTableBody.innerHTML = ""
            response.data.forEach((element, index) => {
                paymentsTableBody.innerHTML += `
                    <tr class="border border-gray-300 break-all">
                        <td class="border-1 border-gray-300 px-4 py-2 ">${index + 1}</td>
                        <td class="border-1 border-gray-300 px-4 py-2 ">${element.clients.name}</td>
                        <td class="border-1 border-gray-300 px-4 py-2 ">${element.clients.id}</td>
                        <td class="border-1 border-gray-300 px-4 py-2 ">${element.user.id}</td>
                        <td class="border-1 border-gray-300 px-4 py-2 ">${element.amount}</td>
                        <td class="border-1 border-gray-300 px-4 py-2 ">${element.description}</td>
                        <td class="border-1 border-gray-300 px-4 py-2 ">${element.createdAt}</td>
                        <td class="border-1 border-gray-300 px-4 py-2 ">${element.clients.phone}</td>
                    </tr>
                `
            });
        })
        .catch((error) => {
            console.log(error);
        });
}
getClients();
