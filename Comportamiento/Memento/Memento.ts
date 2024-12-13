// Memento: Almacena el estado del texto.
class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}

// Originator: Representa el editor de texto.
class TextEditor {
    private text: string = '';

    setText(newText: string): void {
        this.text = newText;
    }

    getText(): string {
        return this.text;
    }

    save(): Memento {
        return new Memento(this.text);
    }

    restore(memento: Memento): void {
        this.text = memento.getState();
    }
}

// Caretaker: Gestiona los mementos
class Caretaker {
    private mementos: Memento[] = [];
    private originator: TextEditor;

    constructor(originator: TextEditor) {
        this.originator = originator;
    }

    save(): void {
        this.mementos.push(this.originator.save());
    }

    undo(): void {
        if (this.mementos.length > 0) {
            const memento = this.mementos.pop();
            if (memento) {
                this.originator.restore(memento);
            }
        }
    }
}

// Uso del patrón
const editor = new TextEditor();
const caretaker = new Caretaker(editor);

// Simulamos cambios de texto y deshacer
editor.setText('Primer texto');
caretaker.save();

editor.setText('Segundo texto');
caretaker.save();

editor.setText('Tercer texto');

console.log('Texto actual:', editor.getText()); // "Tercer texto"

caretaker.undo();
console.log('Después de deshacer:', editor.getText()); // "Segundo texto"

caretaker.undo();
console.log('Después de deshacer nuevamente:', editor.getText()); // "Primer texto"
