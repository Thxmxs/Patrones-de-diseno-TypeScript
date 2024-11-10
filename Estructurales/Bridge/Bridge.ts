// Implementor
interface Dibujador {
    dibujarForma(): void;
}

// ConcreteImplementor A
class DibujadorPantalla implements Dibujador {
    dibujarForma() {
        console.log("Dibujando en pantalla");
    }
}

// ConcreteImplementor B
class DibujadorImpresora implements Dibujador {
    dibujarForma() {
        console.log("Dibujando en impresora");
    }
}

// Abstraction
abstract class Forma {
    protected dibujador: Dibujador;

    constructor(dibujador: Dibujador) {
        this.dibujador = dibujador;
    }

    abstract dibujar(): void;
}

// RefinedAbstraction
class Circulo extends Forma {
    dibujar() {
        console.log("Dibujando un círculo");
        this.dibujador.dibujarForma();
    }
}

class Cuadrado extends Forma {
    dibujar() {
        console.log("Dibujando un cuadrado");
        this.dibujador.dibujarForma();
    }
}

// uso
const dibujadorPantalla = new DibujadorPantalla();
const circulo = new Circulo(dibujadorPantalla);
circulo.dibujar();

const dibujadorImpresora = new DibujadorImpresora();
const cuadrado = new Cuadrado(dibujadorImpresora);
cuadrado.dibujar();
