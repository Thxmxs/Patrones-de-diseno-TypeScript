// strategy
interface EnvioStrategy {
  calcularCosto(peso: number): number;
}

//concrete strategies
class EnvioTerrestre implements EnvioStrategy {
  calcularCosto(peso: number): number {
    return peso * 1.5;
  }
}

class EnvioAereo implements EnvioStrategy {
  calcularCosto(peso: number): number {
    return peso * 3.0;
  }
}

class EnvioMaritimo implements EnvioStrategy {
  calcularCosto(peso: number): number {
    return peso * 0.8;
  }
}

class EnvioEspacial implements EnvioStrategy {
  calcularCosto(peso: number): number {
    return peso * 10.0;
  }
}

// context
class CalculadoraCostoEnvio {
  private estrategia: EnvioStrategy;

  constructor(estrategia: EnvioStrategy) {
    this.estrategia = estrategia;
  }

  establecerEstrategia(estrategia: EnvioStrategy): void {
    this.estrategia = estrategia;
  }

  calcular(peso: number): number {
    return this.estrategia.calcularCosto(peso);
  }
}

// cliente
const envioEspacial = new EnvioEspacial();
const calculadora = new CalculadoraCostoEnvio(envioEspacial);
console.log("Costo de Envío Espacial:", calculadora.calcular(10));
