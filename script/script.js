// console.log('Start')
// setTimeout(()=>{
//     console.log('SetTimeOUT')
// },2000)
//
// console.log('End')


// console.log('Start')
//
//
// const response = new XMLHttpRequest()
// response.open('GET', '/', false)//functiile sincrone apar primele si dupa apar funtiile asincrone daca punem 'false' e sincron 'true' e asincron
// response.onload = ()=>{
//     setTimeout(()=>{
//         console.log('SetTimeOUT')
//     },2000)
//     console.log('2')
// }
// response.send()
//
// console.log('End')








// console.log('loading...')
//
// const request = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Preparearea datelor')
//         const obiect ={
//             nume: 'Televizor',
//             pret:2000
//         }
//
//         //reject(obiect)// intoarce obiectul dar ca eroare 'reject' intoarce o eraoare
//         resolve(obiect)//intoartce obiectul
//     },3000)
// })
//
// request.then((data)=>{
//     setTimeout(()=>{
//         data.ordered = true
//         console.log(data)
//     },5000)
//
// })//ne da posibilitatea sa asteptam datele 'then'




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => {
//      return response.json()
// })
//
// .then((data) => {data.forEach((item)=>{
//     console.log(item)
// })
// })






//Cream un tabel cu 10 carti care va avea ca coloane id,type, vor fi trei coloane 'id,type,body' si body in body= 'titlu,autorii, datapublicarii, nrpagini, tara'



// fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })




const body = document.body
const tabel = document.createElement('table')
const tr_coloane = document.createElement('tr')
const coloana1 = document.createElement('th')
const coloana2 = document.createElement('th')
const coloana3 = document.createElement('th')
body.append(tabel)
tabel.append(tr_coloane)
coloana1.textContent = 'ID'
coloana2.textContent = 'Type'
coloana3.textContent = 'Body'
tr_coloane.append(coloana1,coloana2,coloana3)





const create_book = (element) => {
    const tr_rind = document.createElement('tr')
    const rindul_1_1 = document.createElement('td')
    const rindul_1_2 = document.createElement('td')
    const rindul_1_3 = document.createElement('td')
    tabel.append(tr_rind)



    rindul_1_1.textContent = element.id
    rindul_1_2.textContent = element.volumeInfo.printType


    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    const paragraf1 = document.createElement('p')
    const paragraf2 = document.createElement('p')
    const paragraf3 = document.createElement('p')
    const paragraf4 = document.createElement('p')
    const image = document.createElement('img')

    h2.textContent = element.volumeInfo.title
    h3.textContent = `Autors: ${element.volumeInfo.authors}`
    image.src = element.volumeInfo.imageLinks.smallThumbnail
    paragraf1.textContent = `Publication date: ${element.volumeInfo.publishedDate}`
    paragraf2.textContent = element.volumeInfo.description
    paragraf3.textContent = `Number of pages: ${element.volumeInfo.pageCount}`
    paragraf4.textContent = `Country of publication: ${element.accessInfo.country}`



    tr_rind.append(rindul_1_1,rindul_1_2,rindul_1_3)
    rindul_1_3.append(h2,h3,image,paragraf1,paragraf2,paragraf3,paragraf4)

}




fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)


        data.items.forEach((item)=> create_book(item))



    })





