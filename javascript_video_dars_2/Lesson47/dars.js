/* --------------- Lesson 47 --------------- */
// const content = document.querySelector('p');


// console.log(content.classList)
// content.classList.add('success')
// content.classList.remove('success')
// content.classList.add('error')

const para = document.querySelectorAll('p')

para.forEach((soz) =>{
    if (textError = soz.textContent.includes('error')) {
        soz.classList.add('error')
    }else if (textSuccess = soz.textContent.includes('success')) {
        soz.classList.add('success')
    }
})


const text = document.querySelector('h1')

text.classList.toggle('success')
text.classList.toggle('success')


