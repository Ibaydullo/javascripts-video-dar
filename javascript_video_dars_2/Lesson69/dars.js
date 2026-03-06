// shallow copy - sayoz nusxalash
// deep copy - chuqur nusxalash


// primitive 
let a = 2
let b = a
b = 7
console.log('b', b)
console.log('a', a)


// reference

const person = {
    name: 'ibaydullo',
    age: 25,
}



const newPerson = {...person}
newPerson.name = 'Polonjon'
newPerson.age = 12


console.log('person', person)
console.log('newPerson', newPerson)


const [bir , ...qolgani] = [1,2,3,4]

console.log(qol)