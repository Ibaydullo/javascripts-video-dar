const KEY = '96b947a45d33d7dc1c49af3203966408'
// const KEY = '31ea0be034a50a17f09fb3b85e85c80b'
// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web


const getDate = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${KEY}`
    loader(true)
    const req = await fetch(base + query)
    const data = await req.json()
    loader(false)

    return data
}


