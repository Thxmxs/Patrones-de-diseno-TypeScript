//abstracciones
interface BloqueInterrogante{
    spawnItem();
    render();
}

interface Moneda{
    spawnItem();
    render();
}

interface AbstractFactory{
    createMoneda(): Moneda;
    createBloqueInterrogante(): BloqueInterrogante
}

// Clases concretas para Gameboy
class GameboyMoneda implements Moneda {
    spawnItem() {
        console.log("Gameboy: Moneda aparece.");
    }
    render() {
        console.log("Renderizando Moneda en estilo Gameboy.");
    }
}

class GameboyBloqueInterrogante implements BloqueInterrogante {
    spawnItem() {
        console.log("Gameboy: Bloque de interrogación aparece.");
    }
    render() {
        console.log("Renderizando Bloque de interrogación en estilo Gameboy.");
    }
}

// Clases concretas para Nintendo DS
class NintendoDSMoneda implements Moneda {
    spawnItem() {
        console.log("Nintendo DS: Moneda aparece.");
    }
    render() {
        console.log("Renderizando Moneda en estilo Nintendo DS.");
    }
}

class NintendoDSBloqueInterrogante implements BloqueInterrogante {
    spawnItem() {
        console.log("Nintendo DS: Bloque de interrogación aparece.");
    }
    render() {
        console.log("Renderizando Bloque de interrogación en estilo Nintendo DS.");
    }
}

//factories ded creacion
class GameboyItemFactory implements AbstractFactory{
    createMoneda(): Moneda {
        return new GameboyMoneda()
    }
    createBloqueInterrogante(): BloqueInterrogante {
        return new GameboyBloqueInterrogante()
    }
}

class NintendoDSItemFactory implements AbstractFactory{
    createMoneda(): Moneda {
        return new GameboyMoneda()
    }
    createBloqueInterrogante(): BloqueInterrogante {
        return new GameboyBloqueInterrogante()
    }
}