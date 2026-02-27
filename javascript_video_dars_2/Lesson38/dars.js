// objects


const user = {
    name: 'polonjon',
    age:24,
    email: 'pistonjonov@gmail.com',
    location: 'vatikan',
    langs: ['sil','milm','elim'],
    login: function () {
        console.log("Siz bu saytdagi sahifangizga kirdingiz")
    },
    logout: function() {
        console.log('Siz bu saytdagi sahifangizdan tark etdingiz.')
    },
    speak: function () {
        console.log('I can speak')
        this.langs.forEach((lang) => {
            console.log(lang)
        })

    },
}

user.login()
user.logout()
user.speak()
