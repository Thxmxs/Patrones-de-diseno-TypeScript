// Mediator
interface ChatMediator {
    sendMessage(message: string, user: User): void;
    addUser(user: User): void;
    removeUser(user: User): void;
  }
  
// Concrete mediator
  class ChatRoom implements ChatMediator {
    private users: User[] = [];
  
    public sendMessage(message: string, user: User): void {
      this.users.forEach((u) => {
        if (u !== user) {
          u.receiveMessage(message);
        }
      });
    }
  
    public addUser(user: User): void {
      this.users.push(user);
    }
  
    public removeUser(user: User): void {
      this.users = this.users.filter((u) => u !== user);
    }
  }
  
  // Colleague
  interface User {
    receiveMessage(message: string): void;
    sendMessage(message: string): void;
  }
  
  // Componente
  class ChatUser implements User {
    private name: string;
    private chatRoom: ChatMediator;
  
    constructor(name: string, chatRoom: ChatMediator) {
      this.name = name;
      this.chatRoom = chatRoom;
    }
  
    public receiveMessage(message: string): void {
      console.log(`${this.name} recibio: ${message}`);
    }
  
    public sendMessage(message: string): void {
      console.log(`${this.name} envio: ${message}`);
      this.chatRoom.sendMessage(message, this);
    }
  }
  
  // Uso
  const chatRoom = new ChatRoom();
  
  const user1 = new ChatUser("user1", chatRoom);
  const user2 = new ChatUser("user2", chatRoom);
  
  chatRoom.addUser(user1);
  chatRoom.addUser(user2);
  
  user1.sendMessage("Hola user2");
  user2.sendMessage("Hola user1");