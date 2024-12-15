// Interfaz del estado
interface State {
    insertCoin(): void;
    pressButton(): void;
    dispense(): void;
  }
  
  // Contexto
  class VendingMachine {
    private state: State;
  
    // Estados concretos
    public noCoinState: State;
    public hasCoinState: State;
    public dispenseState: State;
  
    constructor() {
      this.noCoinState = new NoCoinState(this);
      this.hasCoinState = new HasCoinState(this);
      this.dispenseState = new DispenseState(this);
  
      // Estado inicial
      this.state = this.noCoinState;
    }
  
    setState(state: State): void {
      this.state = state;
    }
  
    getState(): State {
      return this.state;
    }
  
    insertCoin(): void {
      this.state.insertCoin();
    }
  
    pressButton(): void {
      this.state.pressButton();
    }
  
    dispense(): void {
      this.state.dispense();
    }
  }
  
  // Estado concreto: no tiene monedas
  class NoCoinState implements State {
    constructor(private vendingMachine: VendingMachine) {}
  
    insertCoin(): void {
      console.log("Moneda insertada. Ahora puedes presionar el botón.");
      this.vendingMachine.setState(this.vendingMachine.hasCoinState);
    }
  
    pressButton(): void {
      console.log("Inserta una moneda primero.");
    }
  
    dispense(): void {
      console.log("Inserta una moneda primero.");
    }
  }
  
  // Estado concreto: tiene una moneda
  class HasCoinState implements State {
    constructor(private vendingMachine: VendingMachine) {}
  
    insertCoin(): void {
      console.log("Ya has insertado una moneda.");
    }
  
    pressButton(): void {
      console.log("Botón presionado. Dispensa en progreso.");
      this.vendingMachine.setState(this.vendingMachine.dispenseState);
    }
  
    dispense(): void {
      console.log("Presiona el boton para obtener el producto.");
    }
  }
  
  // Estado concreto: dispensa producto
  class DispenseState implements State {
    constructor(private vendingMachine: VendingMachine) {}
  
    insertCoin(): void {
      console.log("Espera a que termine el proceso de dispensa.");
    }
  
    pressButton(): void {
      console.log("Espera a que termine el proceso de dispensa.");
    }
  
    dispense(): void {
      console.log("Producto dispensado. Gracias por tu compra.");
      this.vendingMachine.setState(this.vendingMachine.noCoinState);
    }
  }
  
  // Uso
  const vendingMachine = new VendingMachine();
  
  vendingMachine.pressButton(); // Inserta una moneda primero
  vendingMachine.insertCoin();  // Moneda insertada. Ahora puedes presionar el boton
  vendingMachine.insertCoin();  // Ya has insertado una moneda
  vendingMachine.pressButton(); // Boton presionado. en progreso
  vendingMachine.dispense();    // Producto entregado
  vendingMachine.dispense();    // Inserta una moneda primero
  