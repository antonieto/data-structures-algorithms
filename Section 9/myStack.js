class Node { 
    constructor(value) { 
        this.value = value; 
        this.next = null;
    }
}
class Stack { 
    constructor() { 
        this.top = null; 
        this.bottom = null; 
        this.length = 0;
    } 
    peek() { 
        return this.top;
    } 
    push(value) { 
        const newNode = new Node(value); 
        if(this.isEmpty()) { 
            this.bottom = newNode; 
        } 
        const previousTop = this.top; 
        this.top = newNode; 
        this.top.next = previousTop; 
        this.length++;
    } 
    pop() { 
        if(!this.top) { 
            return null;
        } 
        if(this.length === 1) { 
            this.bottom = null;
        }
        const previousTop = this.top; 
        this.top = this.top.next; 
        this.length--;
    } 
    isEmpty() { 
        if(!this.length) {
            return true;
        }  
        return false;
    } 
    printStack() { 
        let iterator = this.top; 
        const array = [];
        while(iterator !== null) { 
            array.push(iterator.value);
            iterator = iterator.next;
        } 
        console.log(array); 
        return array;
    }
} 

const myStack = new Stack(); 

console.log(myStack.isEmpty());
myStack.push('1');
myStack.push('2'); 
myStack.push('3'); 
myStack.printStack(); 
myStack.pop(); 
myStack.printStack();