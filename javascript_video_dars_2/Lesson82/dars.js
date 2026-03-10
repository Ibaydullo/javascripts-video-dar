// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all');
// xhr.setRequestHeader('x-rapidapi-host', 'ajayakv-rest-countries-v1.p.rapidapi.com');

// xhr.send(data);


const API = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies'
// old => new XMLHttpRequest()

// const getData = (resource) => {
// 	return new Promise((resolve, reject) => {
// 		const request = new XMLHttpRequest()

// 		request.addEventListener('readystatechange', () => {
// 			if (request.readyState == 4 && request.status == 200) {
// 				const data = JSON.parse(request.responseText)
// 				// console.log(request.responseText)
// 				resolve(data)
// 			} else if (request.readyState == 4) {
// 				reject('error !!')
// 			}
// 		})

// 		request.open('GET', resource)
// 		request.send()
// 	})
// }

// getData(API)
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch(() => {
// 		console.log("Eror !!")
// 	})

// fetch

// fetch(API)
// 	.then((data) => {
// 		return data.json()
// 	})
// 	.then((dataJson) => {
// 		console.log(dataJson)
// 	})
// 	.catch((err) => {
// 		console.log("Eror !!")
// 	})



// async & awiat

const getData = async (resurs) => {
	const request = await fetch(resurs)

	if (request.status != 200) {
		throw new Error('Eror')
	}
	const data = await request.json()
	return data
}


getData(API)
	.then((data) => {
		console.log(data)
	})
	.catch((err) => {
		console.log(err.message)
	})