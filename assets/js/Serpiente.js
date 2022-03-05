import Animal from "./Animal.js";

export default class Serpiente extends Animal{
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
      }
rugir(){

    console.log("psss")
}
}