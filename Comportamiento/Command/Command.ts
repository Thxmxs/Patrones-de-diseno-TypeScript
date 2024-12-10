interface Command {
    execute(): void;
    undo(): void;
}

//receiver
class TextEditor {
    private content: string = "";

    addText(text: string) {
        this.content += text;
        console.log(`Content after add: "${this.content}"`);
    }

    removeText(count: number) {
        this.content = this.content.slice(0, -count);
        console.log(`Content after remove: "${this.content}"`);
    }

    getContent(): string {
        return this.content;
    }
}


//comandos concretos
class AddTextCommand implements Command {
    private editor: TextEditor;
    private text: string;

    constructor(editor: TextEditor, text: string) {
        this.editor = editor;
        this.text = text;
    }

    execute() {
        this.editor.addText(this.text);
    }

    undo() {
        this.editor.removeText(this.text.length);
    }
}

class RemoveTextCommand implements Command {
    private removedText: string = "";

    constructor( private editor: TextEditor, private count: number) {}

    execute() {
        this.removedText = this.editor.getContent().slice(-this.count);
        this.editor.removeText(this.count);
    }

    undo() {
        this.editor.addText(this.removedText);
    }
}


//clase invoker
class CommandManager {
    private undoStack: Command[] = [];
    private redoStack: Command[] = [];

    executeCommand(command: Command) {
        command.execute();
        this.undoStack.push(command);
        this.redoStack = []; // Limpiar la pila de rehacer cuando se ejecuta un nuevo comando
    }

    undo() {
        if (this.undoStack.length === 0) {
            console.log("Nothing to undo.");
            return;
        }
        const command = this.undoStack.pop()!;
        command.undo();
        this.redoStack.push(command);
    }

    redo() {
        if (this.redoStack.length === 0) {
            console.log("Nothing to redo.");
            return;
        }
        const command = this.redoStack.pop()!;
        command.execute();
        this.undoStack.push(command);
    }
}


//cliente
const editor = new TextEditor();
const commandManager = new CommandManager();

// Ejecutar comandos
commandManager.executeCommand(new AddTextCommand(editor, "Hello, "));
commandManager.executeCommand(new AddTextCommand(editor, "world!"));
commandManager.executeCommand(new RemoveTextCommand(editor, 6)); 

// Deshacer acciones
commandManager.undo(); // Rehacer "world!"
commandManager.undo(); // Quitar "Hello, "
commandManager.undo(); // Nada que deshacer

// Rehacer acciones
commandManager.redo(); // Rehacer "Hello, "
commandManager.redo(); // Rehacer "world!"
commandManager.redo(); // Nada que rehacer
