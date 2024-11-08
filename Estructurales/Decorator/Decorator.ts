//Abstraccion de toda nuestras clases (bebida) 
interface IBebida {
    obtenerDescripcion(): string;
    obtenerCosto(): number;
}

//Clase concreta
class BebidaBase implements IBebida{
    obtenerCosto(): number {
        return 10
    }
    obtenerDescripcion(): string {
        return "Agua caliente en un vaso"
    }
}

//Abstraccion decorador base nos sirve como puente entre la clase base (Bebida)
//y los decoradores concretos
//es abstracta para que no se pueda instanciar
abstract class BebidaDecorator implements IBebida{
    protected bebida: IBebida;

    constructor(bebidaToDecorate: IBebida){
        this.bebida = bebidaToDecorate;
    }

    obtenerCosto(): number {
        return this.obtenerCosto()
    }
    obtenerDescripcion(): string {
        return this.bebida.obtenerDescripcion()
    }
}

//Abstraccion decorador concreto
class Cafe extends BebidaDecorator{
    obtenerCosto(): number {
        return this.bebida.obtenerCosto() + 5
    }
    obtenerDescripcion(): string {
        return this.bebida.obtenerDescripcion() + " con una cucharada de cafe"
    }
}

class Azucar extends BebidaDecorator{
    obtenerCosto(): number {
        return this.bebida.obtenerCosto() + 2
    }
    obtenerDescripcion(): string {
        return this.bebida.obtenerDescripcion() + " y tres cucharadas de azucar"
    }
}

function mainDecorator(){
    //las clases que heredan del decorador bebidaDecorador implementan su constructor de forma implicita por lo que podemos
    //ir pasando miBebida e ir incrementando sus funcionalidades con la misma instancia
    let miBebida = new BebidaBase();
    miBebida = new Cafe(miBebida);
    miBebida = new Azucar(miBebida);

    console.log(miBebida.obtenerCosto());
    console.log(miBebida.obtenerDescripcion());
}

mainDecorator()