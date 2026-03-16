let cofes = [
    {
        id: 1,
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 999,
        img: "card_1.png",
    },
    {
        id: 2,
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 999,
        img: "card_2.png",
    },
    {
        id: 3,
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 999,
        img: "card_3.png",
    },
    {
        id: 4,
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 999,
        img: "card_4.png",
    },
    {
        id: 5,
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 999,
        img: "card_5.png",
    },
    {
        id: 6,
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 999,
        img: "card_6.png",
    },
    {
        id: 7,
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 999,
        img: "card_7.png",
    },
    {
        id: 8,
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 999,
        img: "card_8.png",
    },
    {
        id: 9,
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 999,
        img: "card_9.png",
    },
    {
        id: 10,
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 999,
        img: "card_10.png",
    },
]

let handeleSaveCof = document.getElementById("handeleSaveCofe")
let locCofes = localStorage.getItem("cofes")
if (locCofes == null) {
    localStorage.setItem("cofes", JSON.stringify(cofes))
}



let isEditCofe = -1

let images = ["card_1.png", "card_2.png", "card_3.png", "card_4.png", "card_5.png", "card_6.png", "card_7.png", "card_8.png", "card_9.png", "card_10.png",]

let productCategory = document.getElementById("productCategory")


productCategory.innerHTML = ""
images.forEach((index) => {
    productCategory.innerHTML += `
    <option>${index}</option>
    `
})

let productTableBody = document.getElementById("productTableBody")

function handleDrawCofes() {
    let cofes = JSON.parse(localStorage.getItem("cofes"))

    productTableBody.innerHTML = ""
    cofes.forEach((element, index) => {
        productTableBody.innerHTML += `
        <tr>
            <td class="py-2 px-4 border-3 border-sky-500">${element.id}</td>
            <td class="py-2 px-4 border-3 border-sky-500">${element.name}</td>
            <td class="py-2 px-4 border-3 border-sky-500"><img src="./images/${element.img}" alt="Product Image" class="w-30 h-30"></td>
            <td class="py-2 px-4 border-3 border-sky-500">${element.price}</td>
            <td class="py-2 px-4 border-3 border-sky-500">${element.description}</td>   
            <td class="py-2 px-4 border-3 border-sky-500">            
                <button onclick="hendleEditeCofe(${index})" class="border-2 w-full px-4 py-2 text-xl bg-blue-500 text-white hover:bg-blue-700" >Edite</button>
                <button onclick="hendleEditeCofe(${index})" class="border-2 w-full px-4 py-2 text-xl bg-red-500 text-white hover:bg-red-700">Delete</button>
            </td>   

        </tr>

        `
    });
}




function handeleSaveCofe() {
    let productName = document.getElementById("productName").value
    let productDescription = document.getElementById("productDescription").value
    let productPrice = document.getElementById("productPrice").value
    let productCategory = document.getElementById("productCategory").value

    let cofes = JSON.parse(localStorage.getItem("cofes"))
    let id = cofes[cofes.length - 1].id
    if (cofes == null) {
        cofes = []
    }
    let cofe = {
        id: id + 1,
        name: productName,
        description: productDescription,
        price: productPrice,
        img: productCategory,
    }

    if (isEditCofe == -1) {
        cofes.push(cofe)
    } else {
        cofe.id = cofes[isEditCofe].id
        cofes[isEditCofe] = cofe
    }
    localStorage.setItem("cofes", JSON.stringify(cofes))

    handleDrawCofes()
    document.getElementById("productName").value = ""
    document.getElementById("productDescription").value = ""
    document.getElementById("productPrice").value = ""
    document.getElementById("productCategory").value = ""
    isEditCofe = -1

}

handeleSaveCof.addEventListener("click", (e) => {
    e.preventDefault()
    handeleSaveCofe()
})

function hendleEditeCofe(index) {
    let cofes = JSON.parse(localStorage.getItem("cofes"))
    cofes.splice(index, 1)
    localStorage.setItem("cofes", JSON.stringify(cofes))
    handleDrawCofes()

}

function hendleEditeCofe(index) {
    isEditCofe = index

    let cofes = JSON.parse(localStorage.getItem("cofes"))

    document.getElementById("productName").value = cofes[index].name
    document.getElementById("productDescription").value = cofes[index].description
    document.getElementById("productPrice").value = cofes[index].price
    document.getElementById("productCategory").value = cofes[index].img

}

handleDrawCofes()
