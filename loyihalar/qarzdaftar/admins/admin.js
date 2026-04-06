const api = "http://87.192.233.178:49304/api/v1"
let adminStatistic = document.getElementById("adminstatistic")
let admin = document.getElementById("admin")






function getUsers() {
    let response = axios.get(`${api}/admin`)
        .then((response) => {
            adminStatistic.innerHTML = ""
            response.data.forEach((element, index) => {
                element.roles.forEach(i => {
                    adminStatistic.innerHTML += `
                        <tr class="border border-gray-300 break-all">
                            <td class="border-1 border-gray-300 md:px-4 md:py-2">${index+1}</td>
                            <td class="border-1 border-gray-300 md:px-4 md:py-2">${element.username}</td>
                            <td class="border-1 border-gray-300 md:px-4 md:py-2">${element.phone}</td>
                            <td class="border-1 border-gray-300 md:px-4 md:py-2">${element.password}</td>
                            <td class="border-1 border-gray-300 md:px-4 md:py-2">${i.name}</td>
                        </tr>
                    `
                });
            });
        })
        .catch((error) => {
            console.log(error);
        });

}



getUsers();


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