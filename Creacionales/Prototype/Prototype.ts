interface Prototype {
    clone(): Prototype;
}

class Pokemon implements Prototype {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    getNombre() {
        console.log(`Soy el pokemon ${this.nombre}`);
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    clone(): Prototype {
        return new Pokemon(this.nombre); 
    }
}

let pokemon = new Pokemon("Pikachu");
pokemon.getNombre();

let pokemonClone = pokemon.clone();
(pokemonClone as Pokemon).getNombre();
