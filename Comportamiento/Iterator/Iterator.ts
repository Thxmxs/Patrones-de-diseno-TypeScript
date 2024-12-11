// Iterator
interface MyIterator<T> {
    next(): T | null;
    hasNext(): boolean; 
  }
  
  // IterableCollection
  interface MyIterableCollection<T> {
    createIterator(): MyIterator<T>;
  }
  
  // concrete iterator
  class StackIterator<T> implements MyIterator<T> {
    private stack: T[];
    private position: number;
  
    constructor(stack: T[]) {
      this.stack = stack;
      this.position = stack.length - 1; 
    }
  
    next(): T | null {
      if (this.hasNext()) {
        return this.stack[this.position--];
      }
      return null; 
    }
  
    hasNext(): boolean {
      return this.position >= 0;
    }
  }
  
  // concrete collection
  class Stack<T> implements MyIterableCollection<T> {
    private items: T[] = [];
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    createIterator(): MyIterator<T> {
      return new StackIterator(this.items);
    }
  }
  
  // Cliente
  const stack = new Stack<number>();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Elementos en la pila:");
  const iterator = stack.createIterator();
  
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  