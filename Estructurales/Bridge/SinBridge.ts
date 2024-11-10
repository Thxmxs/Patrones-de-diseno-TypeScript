// Clase base para todas las formas
abstract class FormaSinBridge {
    abstract drawer(): void;
}

// Implementaciones especificas para cada variante
class CirculoPantalla extends FormaSinBridge {
    drawer() {
        console.log("Dibujando un círculo en la pantalla");
    }
}

class CirculoImpresora extends FormaSinBridge {
    drawer() {
        console.log("Dibujando un círculo en la impresora");
    }
}

class CuadradoPantalla extends FormaSinBridge {
    drawer() {
        console.log("Dibujando un cuadrado en la pantalla");
    }
}

class CuadradoImpresora extends FormaSinBridge {
    drawer() {
        console.log("Dibujando un cuadrado en la impresora");
    }
}

// Uso
const circuloPantalla = new CirculoPantalla();
circuloPantalla.drawer();

const cuadradoImpresora = new CuadradoImpresora();
cuadradoImpresora.drawer();
