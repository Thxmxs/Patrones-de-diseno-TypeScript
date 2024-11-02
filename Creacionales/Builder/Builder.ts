interface Builder {
    setWeapon(weapon: string): Builder;
    setArmor(armor: string): Builder;
    setLevel(level: number): Builder;
    build(): Character;
}

class Character {
    private name: string;
    private race: string;
    private weapon: string;
    private armor: string;
    private level: number;

    constructor(builder: CharacterBuilder) {
        this.name = builder.name;
        this.race = builder.race;
        this.weapon = builder.weapon;
        this.armor = builder.armor;
        this.level = builder.level;
    }

    displayInfo() {
        console.log(`Character info:
        Name: ${this.name}
        Race: ${this.race}
        Weapon: ${this.weapon}
        Armor: ${this.armor}
        Level: ${this.level}`);
    }
}

class CharacterBuilder implements Builder {
    name: string;
    race: string;
    weapon: string = "Espada basica";
    armor: string = "Armadura basica";
    level: number = 1;

    constructor(name: string, race: string) {
        this.name = name;
        this.race = race;
    }

    setWeapon(weapon: string): Builder {
        this.weapon = weapon;
        return this;
    }

    setArmor(armor: string): Builder {
        this.armor = armor;
        return this;
    }

    setLevel(level: number): Builder {
        this.level = level;
        return this;
    }

    build(): Character {
        return new Character(this);
    }
}


class CharacterDirector {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    // Construcción estándar para un guerrero
    buildWarrior(): Character {
        return this.builder
            .setWeapon("Espada rompemallas")
            .setArmor("Cota de mallas")
            .setLevel(10)
            .build();
    }

    // construccion de un mago
    buildMage(): Character {
        return this.builder
            .setWeapon("Vara de sabiduria")
            .setArmor("Tunica oscura")
            .setLevel(12)
            .build();
    }
}

const builder = new CharacterBuilder("Legolas", "Elfo");
const director = new CharacterDirector(builder);

const warrior = director.buildWarrior();
warrior.displayInfo();

const mage = director.buildMage();
mage.displayInfo();

  