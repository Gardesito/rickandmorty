/* 
  
  let rickyAndMortyPersonajes = [];

async function getPersonajes() {
  let response = await fetch(
    "https://rickandmortyapi.com/api/character"
  );
  let data = await response.json();
rickyAndMortyPersonajes=data.results
mostrarPersonajes(rickyAndMortyPersonajes)
}
function mostrarPersonajes(personajes){
    let caja = document.getElementById("caja")
    for ( let i = 0; i<personajes.length; i++){
console.log(personajes[i].name)
        let h2 = document.createElement("h2")
        h2.innerText=personajes[i].name
        caja.appendChild(h2)
    }
}

getPersonajes(); */
 
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

 async function getPersonajes() {
    let response = await fetch("https://rickandmortyapi.com/api/character"
    )
    let data = await response.json();
rickAndMortyPersonajes=data.results;
for (let i = 0; i<rickAndMortyPersonajes.length; i++){
    console.log(rickAndMortyPersonajes[i].name)
    let card = document.createElement("div")
    card.classList.add("card")
    let nombre = document.createElement("p")
        nombre.innerText=rickAndMortyPersonajes[i].name
        card.appendChild(nombre)
        let img = document.createElement("img")
        img.src=rickAndMortyPersonajes[i].image
        card.appendChild(img)
        let status = document.createElement("p")
        status.innerText=rickAndMortyPersonajes[i].status
        card.appendChild(status)
        let species = document.createElement("p")
        species.innerText=rickAndMortyPersonajes[i].species
        card.appendChild(species)
        let gender = document.createElement("p")
        gender.innerText=rickAndMortyPersonajes[i].gender
        card.appendChild(gender)
        let origin = document.createElement("p")
        origin.innerText=rickAndMortyPersonajes[i].origin.name
        card.appendChild(origin)
        let location = document.createElement("p")
        location.innerText=rickAndMortyPersonajes[i].location.name
        card.appendChild(location)
        container.appendChild(card)
    }     
}
getPersonajes()
