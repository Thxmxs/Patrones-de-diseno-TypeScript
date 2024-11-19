//interfaz comun
interface Imagen{
    mostrar(): void;
}

//sujeto real
class ImagenReal implements Imagen{
    private nombreArchivo: string;

    constructor(nombreArchivo:string){
        this.nombreArchivo = nombreArchivo;
        this.cargarDesdeDiscoDuro();
    }

    private cargarDesdeDiscoDuro(): void{
        console.log(`Cargando ${this.nombreArchivo}`)
    }
    
    mostrar(): void {
        console.log(`Mostrando ${this.nombreArchivo}`)
    }
}

//Proxy
class ProxyImagen implements Imagen{
    private imagenReal: ImagenReal | null = null;
    private nombreArchivo: string;

    constructor(nombreArchivo: string){
        this.nombreArchivo = nombreArchivo;
    }

    mostrar(): void {
        if(this.imagenReal === null){
            this.imagenReal = new ImagenReal(this.nombreArchivo);
        }
        this.imagenReal.mostrar()
    }
}

//uso
const imagen = new ProxyImagen("Perfil.png");
imagen.mostrar();//carga y muestra la imagen
imagen.mostrar();//vuelve a mostrar la imagen sin volver a cargarla