let pagina = 1
let total = 0 
let contadorDePaginaActual = document.getElementById ("pagina-actual")
let muestraTotalDePaginas = document.getElementById("total-de-paginas")
let personajes = document.getElementById("personajes")

const container = document.getElementById("container")


const inicio = document.getElementById("inicio")
const atras = document.getElementById("atras")
const adelante = document.getElementById("adelante")
const final = document.getElementById("final")

const todos = document.getElementById("Todos")
const mujer = document.getElementById("Mujeres")
const hombre = document.getElementById("Hombres")

/* let grid =document.createElement("div");
grid.classList.add("grid") */

let datapersonajes = {};

const printData = arr => {
  //se vacia y lo rellena con los datos del for 
  container.innerHTML="";
  for (let i = 0; i<arr.length; i++){
    /*  console.log(arr[i].name) */
     let card = document.createElement("div")
     card.classList.add("card")
     let nombre = document.createElement("p")
         nombre.innerText= "Nombre : " + arr[i].name
         card.appendChild(nombre)
         let img = document.createElement("img")
         img.src=arr[i].image
         card.appendChild(img)
         let status = document.createElement("p")
         status.innerText="Status : " +  arr[i].status
         card.appendChild(status)
         let species = document.createElement("p")
         species.innerText="Especies : " +arr[i].species
         card.appendChild(species)
         let gender = document.createElement("p")
         gender.innerText= "Genero : " + arr[i].gender
         card.appendChild(gender)
         let origin = document.createElement("p")
         origin.innerText="Origen : " +  arr[i].origin.name
         card.appendChild(origin)
         let location = document.createElement("p")
         location.innerText="Location : "  + arr[i].location.name
         card.appendChild(location)
         container.appendChild(card)
     }  
} 

 async function getPersonajes() {
    let response = await fetch("https://rickandmortyapi.com/api/character"
    )
    let data = await response.json();
rickAndMortyPersonajes=data.results;
datapersonajes=data.results
   printData(datapersonajes)
}
getPersonajes()

mujer.addEventListener("click", () => {
  const arr = datapersonajes;
  let mujeres = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].gender === 'Female'){
      mujeres.push(arr[i])
    }
    }
   printData(mujeres)
})

hombre.addEventListener("click", () =>{
  const arr =  datapersonajes;
  let hombres = arr.filter(personaje => personaje.gender === "Male")
  printData(hombres)
})
