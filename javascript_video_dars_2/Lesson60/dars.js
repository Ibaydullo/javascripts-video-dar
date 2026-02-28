//  filter
const movies = [
    {name: 'Avatar 3D',  year: 2008, rating: 9},
    {name: 'Titanik 4D',  year: 1997, rating: 7},
    {name: 'Forsaj 9 3D',  year: 2020, rating: 4},
    {name: 'Avangers',  year: 2012, rating: 6},
]

const newMoves = movies.map((move) => {
    return {name: move.name, year: move.year, rating: move.rating + 1
    }    
})

console.log(newMoves)
console.log(movies)




// const numbers = [2,3,4,5]

// const mapNumbers = numbers.map((num) => {
//     return num ** 2
// })

// console.log(mapNumbers)

// forEach
// const newNumbers = []

// numbers.forEach((num) => {
//     newNumbers.push(num ** 2)
// })

// console.log(newNumbers)








// const filterMovies = movies.filter((movie) => {
//     return movie.year > 2010
// })

// console.log(filterMovies)
// console.log(movies)



// // movies.forEach( (e) => {
// //     if (e.year < 2010) {
// //         console.log(e)
// //     }
// // }) 