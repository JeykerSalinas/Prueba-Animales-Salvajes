import Animal from "./Animal.js";

export default class Aguila extends Animal{
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
      }
rugir(){

    console.log("Pakaaaw")
}
}