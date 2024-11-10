// Componente (interfaz común)
interface Archivo {
    mostrar(): void;
}

// Hoja (Leaf)
class ArchivoSimple implements Archivo {
    constructor(private nombre: string) {}

    mostrar(): void {
        console.log(this.nombre);
    }
}

// Compuesto (Composite)
class Carpeta implements Archivo {
    private elementos: Archivo[] = [];

    constructor(private nombre: string) {}

    agregar(elemento: Archivo): void {
        this.elementos.push(elemento);
    }

    mostrar(): void {
        console.log(`Carpeta: ${this.nombre}`);
        this.elementos.forEach(elemento => elemento.mostrar());
    }
}

// Uso
const archivo1 = new ArchivoSimple("archivo1.txt");
const archivo2 = new ArchivoSimple("archivo2.txt");

const carpeta = new Carpeta("Mis documentos");
carpeta.agregar(archivo1);
carpeta.agregar(archivo2);

const subCarpeta = new Carpeta("Fotos");
subCarpeta.agregar(new ArchivoSimple("vacaciones.jpg"));

carpeta.agregar(subCarpeta);

// Mostrar la estructura completa
carpeta.mostrar();


