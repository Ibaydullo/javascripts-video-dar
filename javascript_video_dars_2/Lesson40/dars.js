// // objects


// const user = {
//     name: 'polonjon',
//     age:24,
//     email: 'pistonjonov@gmail.com',
//     location: 'vatikan',
//     langs: ['sil','milm','elim'],
//     login: function () {
//         console.log("Siz bu saytdagi sahifangizga kirdingiz")
//     },
//     logout: function() {
//         console.log('Siz bu saytdagi sahifangizdan tark etdingiz.')
//     },
//     speak: function () {
//         console.log('I can speak')
//         this.langs.forEach((lang) => {
//             console.log(lang)
//         })

//     },
// }

// user.login()
// user.logout()
// user.speak()




// objectlar arrayda


const movies = [
    {name:'Avatar', likes: 2312},
    {name:'Harry Potter', likes: 543},
    {name:'Titanic', likes: 432},
    {name:'Sitve Jobs', likes: 7654},
    {name:'holms', likes: 321},
]


movies.forEach((movie) =>{
    const result = `Kino nomi: ${movie.name} 📽, Likes: ${movie.likes}❤`
    console.log(result)
})