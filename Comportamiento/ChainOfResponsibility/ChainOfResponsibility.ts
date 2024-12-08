// Interfaz para los manejadores
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: any): void;
}

// Clase base para los manejadores con logica para encadenar
abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler; // Permite encadenar llamadas
    }

    handle(request: any): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

// Manejador concreto para validar si un campo está vacío
class NotEmptyHandler extends AbstractHandler {
    handle(request: any): void {
        if (!request.value) {
            console.error(`El campo "${request.field}" no puede estar vacío.`);
            return; // Detenemos la cadena si falla la validacion
        }
        super.handle(request); // Pasamos al siguiente manejador
    }
}

// Manejador concreto para validar la longitud minima
class MinLengthHandler extends AbstractHandler {
    constructor(private minLength: number) {
        super();
    }

    handle(request: any): void {
        if (request.value.length < this.minLength) {
            console.error(
                `El campo "${request.field}" debe tener al menos ${this.minLength} caracteres.`
            );
            return; // Detenemos la cadena si falla la validacion
        }
        super.handle(request); // Pasamos al siguiente manejador
    }
}

// Manejador concreto para validar si es un email valido
class EmailHandler extends AbstractHandler {
    handle(request: any): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(request.value)) {
            console.error(`El campo "${request.field}" debe ser un correo válido.`);
            return; // Detenemos la cadena si falla la validación
        }
        super.handle(request); // Pasamos al siguiente manejador
    }
}

// cliente
const emailValidation = new EmailHandler();
const lengthValidation = new MinLengthHandler(5);
const emptyValidation = new NotEmptyHandler();

// seteamos la cadena de responsabilidad
emptyValidation.setNext(lengthValidation).setNext(emailValidation);

// ejemplo de validacion
const request = { field: "email", value: "abc" };
emptyValidation.handle(request);

// Otro ejemplo
const validRequest = { field: "email", value: "user@example.com" };
emptyValidation.handle(validRequest);
