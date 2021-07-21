class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() { 
        return this.first;
    }
    enqueue(value){ 
        const newNode = new Node(value); 
        if(!this.length) { 
            this.first = newNode;
        } 
        const previousLast = this.last;  
        this.last = newNode;
        newNode.next = previousLast; 
        this.length++;
    }
    dequeue(){  
        if(!this.last) { 
            return null;
        } 
        if(this.length === 1) { 
            this.first = null;
        }
        const previousLast = this.last.next; 
        this.last = previousLast; 
        this.length--;
    } 

    //isEmpty; 
    printQueue() { 
        let iterator = this.last; 
        const array = [];
        while(iterator) { 
            array.push(iterator.value); 
            iterator = iterator.next;
        } 
        console.log(array);
        return array; 
    }
  }
  
const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');

myQueue.printQueue(); 

myQueue.dequeue(); 
myQueue.dequeue(); 
myQueue.dequeue(); 

myQueue.printQueue();
  //Joy
  //Matt
  //Pavel
  //Samir
  