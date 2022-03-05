
export default class Animal {
    constructor(nombre, edad, img, comentario, sonido){
        this.__nombre = ()=> nombre
        this.__edad = ()=> edad
        this.__img = ()=> img
        this.__comentario = ()=> comentario
        this.__sonido = ()=> sonido
    }

    get nombre(){
        return this.__nombre
    }
    get edad(){
        return this.__edad
    }
    get img(){
        return this.__img
    }
    get sonido(){
        return this.__sonido
    }

    set comentario (comentario){
    this.__comentario = () => comentario
    }   

}