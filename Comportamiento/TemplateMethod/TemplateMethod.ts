// Clase base abstracta
abstract class Bebida {
    // template method
    public prepararReceta(): void {
      this.hervirAgua();
      this.preparar(); // Método abstracto
      this.servirEnTaza();
      if (this.clienteQuiereCondimentos()) { // Metodo gancho
        this.agregarCondimentos(); // Metodo abstracto
      }
    }
  
    // Metodos comunes para todas las bebidas
    private hervirAgua(): void {
      console.log("Hirviendo agua");
    }
  
    private servirEnTaza(): void {
      console.log("Sirviendo en la taza");
    }
  
    // Metodos abstractos que las subclases deben implementar
    protected abstract preparar(): void;
    protected abstract agregarCondimentos(): void;
  
    // Gancho: las subclases pueden sobrescribirlo si es necesario
    protected clienteQuiereCondimentos(): boolean {
      return true; // Por defecto se añaden condimentos
    }
  }
  
  // Subclase
  class Te extends Bebida {
    protected preparar(): void {
      console.log("reposando el te");
    }
  
    protected agregarCondimentos(): void {
      console.log("agregando limon");
    }
  }
  
  // Subclase
  class Cafe extends Bebida {
    protected preparar(): void {
      console.log("Preparando cafe en prensa francesa");
    }
  
    protected agregarCondimentos(): void {
      console.log("Agregando azucar");
    }
  
    protected clienteQuiereCondimentos(): boolean {
      // Sobrescribimos el gancho
      return false; // En este caso, no queremos condimentos
    }
  }
  
  // Uso del patrón
  const te = new Te();
  console.log("Preparando te...");
  te.prepararReceta();
  
  const cafe = new Cafe();
  console.log("\nPreparando cafe...");
  cafe.prepararReceta();
  