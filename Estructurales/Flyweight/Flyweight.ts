// 1. Flyweight: Representa el estado compartido
class ArbolTipo {
    constructor(
      public readonly nombre: string,
      public readonly color: string,
      public readonly textura: string
    ) {}
  
    dibujar(x: number, y: number): void {
      console.log(
        `Dibujando un árbol de tipo ${this.nombre} con color ${this.color} y textura ${this.textura} en la posición (${x}, ${y}).`
      );
    }
  }

  // 2. Flyweight Factory: Gestiona los objetos compartidos
class ArbolTipoFactory {
    private static tiposArboles: Map<string, ArbolTipo> = new Map();
  
    static getTipoArbol(name: string, color: string, texture: string): ArbolTipo {
      const key = `${name}-${color}-${texture}`;
      if (!this.tiposArboles.has(key)) {
        this.tiposArboles.set(key, new ArbolTipo(name, color, texture));
        console.log(`Creado un nuevo tipo de árbol: ${key}`);
      }
      return this.tiposArboles.get(key)!;
    }
  }

  // 3. Contexto: Representa el estado extrínseco (posición del árbol)
class Arbol {
    constructor(
      private x: number,
      private y: number,
      private tipo: ArbolTipo // Flyweight
    ) {}
  
    dibujar(): void {
      this.tipo.dibujar(this.x, this.y);
    }
  }

  // 4. Cliente: Usa los objetos Flyweight
class Bosque {
    private arboles: Arbol[] = [];
  
    plantarArbol(x: number, y: number, name: string, color: string, texture: string) {
      const tipo = ArbolTipoFactory.getTipoArbol(name, color, texture);
      const arbol = new Arbol(x, y, tipo);
      this.arboles.push(arbol);
    }
  
    dibujar(): void {
      for (const arbol of this.arboles) {
        arbol.dibujar();
      }
    }
  }

  // Uso del patrón Flyweight
const bosque = new Bosque();
bosque.plantarArbol(10, 20, "Roble", "Verde", "Liso");
bosque.plantarArbol(15, 25, "Roble", "Verde", "Liso"); // Reutiliza el mismo tipo
bosque.plantarArbol(30, 40, "Pino", "Verde oscuro", "Aspero");

bosque.dibujar();