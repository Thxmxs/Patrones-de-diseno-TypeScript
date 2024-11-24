//1. Target Interfaz esperada por el cliente
interface Cargador{
    cargarDispositivo(): void
}

//2. Adaptee: clase incompatible
class CargadorEuropeo{
    enchufarEnSocketEuropeo(): void {
        console.log("Cargando dispositivo utilizando un socket europeo");
      }
}

//3. Adapter: traduce la interface del Adaptee al Target
class AdapterCargadorEuropeo implements Cargador {
    private cargadorEuropeo: CargadorEuropeo;

    constructor(cargadorEuropeo: CargadorEuropeo){
        this.cargadorEuropeo = cargadorEuropeo;
    }

    cargarDispositivo(): void {
        console.log("Adaptando cargador europeo a cargador standard");
        this.cargadorEuropeo.enchufarEnSocketEuropeo();
    }    
}

// 4. Cliente
function cargar(cargador: Cargador): void {
    cargador.cargarDispositivo();
}

//uso
const cargadorEuropeo = new CargadorEuropeo();
const adapter = new AdapterCargadorEuropeo(cargadorEuropeo);

cargar(adapter);