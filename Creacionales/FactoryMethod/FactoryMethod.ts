interface Entity {
    updateLogic(): void;
}

class Boo implements Entity {
    updateLogic(): void {
        console.log("Boo: Subiendo 20 puntos de fuerza");
    }
}

class Koopa implements Entity {
    updateLogic(): void {
        console.log("Koopa: Subiendo 40 puntos de fuerza");
    }
}

class Goomba implements Entity {
    updateLogic(): void {
        console.log("Goomba: Subiendo 60 puntos de fuerza");
    }
}

// Interfaz para crear enemigos
interface EnemyFactory {
    createEnemy(): Entity;
}

// Fabrica de enemigos aleatorios
class RandomEnemyFactory implements EnemyFactory {
    createEnemy(): Entity {
        const randomNum = Math.floor(Math.random() * 3);
        switch (randomNum) {
            case 0: return new Boo();
            case 1: return new Koopa();
            case 2: return new Goomba();
            default: return new Goomba();
        }
    }
}

// Fabrica de enemigos aleatorios dificiles
class RandomDifficultEnemyFactory implements EnemyFactory {
    createEnemy(): Entity {
        const randomNum = Math.floor(Math.random() * 3);
        switch (randomNum) {
            case 0: 
                console.log("Creando un Boo difícil.");
                return new Boo();
            case 1: 
                console.log("Creando un Koopa difícil.");
                return new Koopa();
            case 2: 
                console.log("Creando un Goomba difícil.");
                return new Goomba();
            default: return new Goomba();
        }
    }
}

class Game {
    private enemyFactory: EnemyFactory;
    private entities: Entity[] = [];

    constructor(enemyFactory: EnemyFactory) {
        this.enemyFactory = enemyFactory;
    }
    processGameLogic(entities: Entity[]) {
        for (let entity of entities) {
            entity.updateLogic();
        }
    }
    // Genera nuevos enemigos y ejecuta la logica del juego
    gameLogic() {
        console.log("Generando enemigo...");
        const newEnemy = this.enemyFactory.createEnemy();
        this.entities.push(newEnemy);
        console.log("Ejecutando lógica del juego:");
        this.processGameLogic(this.entities);
    }
}

// Simulación del juego
const randomEnemyGame = new Game(new RandomEnemyFactory());
randomEnemyGame.gameLogic(); 

const difficultEnemyGame = new Game(new RandomDifficultEnemyFactory());
difficultEnemyGame.gameLogic(); 
