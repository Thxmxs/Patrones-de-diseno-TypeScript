// Subsistema: Clases complejas que forman parte del sistema.
class Luces {
    encender() { console.log("Luces encendidas"); }
    apagar() { console.log("Luces apagadas"); }
}

class Alarma {
    activar() { console.log("Alarma activada"); }
    desactivar() { console.log("Alarma desactivada"); }
}

class Termostato {
    setTemperatura(temp: number) { console.log(`Temperatura ajustada a ${temp}°C`); }
}

// Facade: interfaz simplificada al cliente
class CasaFacade {
    private luces: Luces;
    private alarma: Alarma;
    private termostato: Termostato;

    constructor() {
        this.luces = new Luces();
        this.alarma = new Alarma();
        this.termostato = new Termostato();
    }

    public salirDeCasa() {
        this.luces.apagar();
        this.alarma.activar();
        this.termostato.setTemperatura(18);
        console.log("Preparado para salir de casa.");
    }

    public LLegarACasa() {
        this.luces.encender();
        this.alarma.desactivar();
        this.termostato.setTemperatura(22);
        console.log("Bienvenido a casa.");
    }
}

// Uso del patrón Facade
const miCasa = new CasaFacade();
miCasa.salirDeCasa(); 
miCasa.LLegarACasa();
