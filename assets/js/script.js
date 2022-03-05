import Aguila from "./Aguila.js";
import Leon from "./Leon.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";
import Lobo from "./Lobo.js";

//Variable que recibe la data
let theAnimals = "";
//Arreglo de entradas nuevas a renderizar en la sección Animales
const myAnimals = [];
//Petición que trae la data (IIFE)
const cargarAnimales = (async () => {
  try {
    const respuesta = await fetch("../animales.json");
    const datos = await respuesta.json();
    theAnimals = datos.animales;

    return theAnimals;
  } catch (error) {
    console.log(error);
  }
})();

//Manejo del evento Click
const btnRegistrar = document.getElementById("btnRegistrar");

btnRegistrar.addEventListener("click", () => {
  

  let newAnimal = "";
  const animal = document.getElementById("animal").value
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;
  
  const ani = theAnimals.filter(
    (a) => a.name === animal
  )[0];
  
  if (ani.name === "Oso") {
    newAnimal = new Oso(ani.name, edad, ani.imagen, comentarios, ani.sonido);
  }
  if (ani.name === "Lobo") {
    newAnimal = new Lobo(ani.name, edad, ani.imagen, comentarios, ani.sonido);
  }
  if (ani.name === "Serpiente") {
    newAnimal = new Serpiente(
      ani.name,
      edad,
      ani.imagen,
      comentarios,
      ani.sonido
    );
  }
  if (ani.name === "Leon") {
    newAnimal = new Leon(ani.name, edad, ani.imagen, comentarios, ani.sonido);
  }
  if (ani.name === "Aguila") {
    newAnimal = new Aguila(ani.name, edad, ani.imagen, comentarios, ani.sonido);
  }
  myAnimals.push(newAnimal);

  renderAnimals(newAnimal);


});

//Iteración del arreglo myAnimals para ser renderizado en la sección de Animales
const renderAnimals = (a) => {
  const animales = document.getElementById("Animales");

  console.log(a.img());

  animales.innerHTML += 

    `<div class="text-white w-25 card h-25">
    <img src="./assets/imgs/${a.img()}" alt="" class="" />
    <audio class="w-100" controls>
      <source src="./assets/sounds/${a.sonido()}" type="audio/ogg" />
    </audio>
  </div>`



};



