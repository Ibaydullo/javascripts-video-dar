const api = "http://87.192.233.178:49304/api/v1"
let debtHistoryTable = document.getElementById("debtHistoryTable")
let paymentsHistoryTable = document.getElementById("paymentsHistoryTable")
let umumiySoldoVaAmount = document.getElementById("umumiySoldoVaAmount")


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



// function historyClients() {
//     let hisstoryid = localStorage.getItem("historyklentid")
//     let response = axios.get(`${api}/debts`)
//         .then((response) => {
//             debtHistoryTable.innerHTML = ""
//             console.log(response.data);
//             response.data.forEach((element, index) => {

//             });

//             debtHistoryTable.innerHTML = `
//                         <tr>
//                             <td class="py-2 px-4 border border-gray-700">${numer}</td>
//                             <td class="py-2 px-4 border border-gray-700">Ali Valiyev</td>
//                             <td class="py-2 px-4 border border-gray-700">Admin1</td>
//                             <td class="py-2 px-4 border border-gray-700">1000</td>
//                             <td class="py-2 px-4 border border-gray-700">2024-01-01</td>
//                             <td class="py-2 px-4 border border-gray-700">Admin2</td>
//                             <td class="py-2 px-4 border border-gray-700">500</td>
//                             <td class="py-2 px-4 border border-gray-700">2024-01-15</td>
//                             <td class="py-2 px-4 border border-gray-700">500</td>
//                         </tr>
//                 `
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }




function historyClients() {
    let hisstoryid = localStorage.getItem("historyklentid")
    let soldoall = 0;
    let amountall = 0;
    let historyHTML = "";

    axios.get(`${api}/debts`)
        .then((response) => {
            debtHistoryTable.innerHTML = ""
            // console.log(response.data);
            // console.log('----------------------------------------------------------');

            response.data.forEach((item, index) => {
                if (item.clients.id == hisstoryid) {
                    console.log(item);

                    amountall += item.amount;
                    soldoall += item.soldo;

                    historyHTML += `
                        <tr>
                            <td class="py-2 px-4 border border-gray-700">${index + 1}</td>
                            <td class="py-2 px-4 border border-gray-700">${item.clients.name}</td>
                            <td class="py-2 px-4 border border-gray-700">${item.user.username}</td>
                            <td class="py-2 px-4 border border-gray-700">${item.amount}</td>
                            <td class="py-2 px-4 border border-gray-700">${item.createdAt.slice(0, 10)} ${item.createdAt.slice(11, 16)}</td>
                        </tr>
                `
                }
            });

            debtHistoryTable.innerHTML = historyHTML

            umumiySoldoVaAmount.innerHTML = `
                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold text-blue-700">Umumiy olgan suma</span>
                            <i class="fas fa-wallet text-blue-500"></i>
                        </div>
                        <div class="text-3xl font-bold text-blue-600">
                            <span >${amountall}</span><span class="text-base font-medium text-slate-500"> $</span>
                        </div>
                    </div>
                    <div class="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold text-emerald-700">Umumiy To'lovlar</span>
                            <i class="fas fa-hand-holding-dollar text-emerald-500"></i>
                        </div>
                        <div class="text-3xl font-bold text-emerald-600">
                            <span >${amountall-soldoall}</span><span class="text-base font-medium text-slate-500"> $</span>
                        </div>
                    </div>
                    <div class="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-rose-100 p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold text-rose-700">Qolgan Qarz</span>
                            <i class="fas fa-credit-card text-rose-500"></i>
                        </div>
                        <div class="text-3xl font-bold text-rose-600">
                            <span >${soldoall}</span><span class="text-base font-medium text-slate-500"> $</span>
                        </div>
                    </div>
                </div>
            `;
        })
        .catch((error) => {
            console.log(error);
        });
}
historyClients()




function historyClientspayment() {
    let hisstoryid = localStorage.getItem("historyklentid")
    let historyHTML = "";

    axios.get(`${api}/payment`)
        .then((response) => {
            paymentsHistoryTable.innerHTML = ""
            console.log(response.data);
            console.log('----------------------------------------------------------');

            response.data.forEach((item, index) => {
                if (item.clients.id == hisstoryid) {
                    console.log(item.amount);

                    historyHTML += `
                        <tr>
                            <td class="py-2 px-2 w-15 border border-gray-700">${index + 1}</td>
                            <td class="py-2 px-2 w-30 border border-gray-700">${item.clients.name}</td>
                            <td class="py-2 px-2 w-30 border border-gray-700">${item.user.username}</td>
                            <td class="py-2 px-2 w-30 border border-gray-700">${item.amount}</td>
                            <td class="py-2 px-2 w-30 border border-gray-700">${item.createdAt.slice(0, 10)} ${item.createdAt.slice(11, 16)}</td>
                        </tr>
                `
                }
            });

            paymentsHistoryTable.innerHTML = historyHTML
        })
        .catch((error) => {
            console.log(error);
        });
}

historyClientspayment()

