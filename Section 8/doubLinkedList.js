const basket = ['apples', 'grapes', 'pears']; 

// 10-->5-->16
class Node {  
    constructor(value) { 
        this.value = value; 
        this.next = null, 
        this.prev = null
    }
}

class LinkedList { 
    constructor(value) { 
        this.head = { 
            value: value, 
            next: null, 
            prev: null
        } 
        this.tail = this.head; 
        this.length = 1;
    } 
    append(value) { 
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode; 
        this.tail = newNode;
        this.length++; 
        return this;
    } 
    prepend(value) { 
        let newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode; 
        this.length++;
    }  
    traverseToIndex(index) { 
        if(index > this.length) { 
            return 'Index is outside of list';
        }
        let counter = 0; 
        let currentNode = this.head; 
        while( counter !== index) { 
            currentNode = currentNode.next; 
            counter++;
        } 
        return currentNode;
    }
    insert(index, value) { 
        let newNode = new Node(value); 
        let currentNode = this.head;
        for(let i = 0; i < index-1; i++) { 
            currentNode = currentNode.next;
        } 

        let nextNode = currentNode.next;
        currentNode.next = newNode;  
        newNode.prev = currentNode;
        newNode.next = nextNode; 
        nextNode.prev = newNode;
        this.length++;
    }  
    remove(index) { 
        //Check parameters 
        const pastNode = this.traverseToIndex(index-1);
        const currentNode = pastNode.next;
        const nextNode = currentNode.next;  
        pastNode.next = nextNode; 
        this.length--; 
        return this.printList();
    }
    printList() { 
        let array = [];
        let currentNode = this.head;
        while(currentNode !== null) { 
            array.push(currentNode.value); 
            currentNode = currentNode.next;
        } 
        console.log(array);
        return array;
    } 
    reverse() { 

        let newList = new LinkedList(this.tail.value); 
        let currentNode = this.head; 
        let counter = 0; 
        while(counter < this.length) { 
            newList.prepend(currentNode.value);
            currentNode = currentNode.next;
            counter++;
        }
        return newList; 
    }
    removeSolution() { 
        if(!this.head.next) { 
            return this.head;
        } 
        let first = this.head; 
        this.tail = this.head;
        let second = first.next; 
        while(second) { 
            const temp = second.next; 
            second.next =first; 
            first = second; 
            second = temp; 
        } 
        this.head.next = null; 
        this.head = first; 
        return this;
    }
}

const myLinkedList = new LinkedList(10); 

myLinkedList.append(5);  
myLinkedList.append(16);  
myLinkedList.prepend(20); 
//myLinkedList.printList(); 
myLinkedList.insert(3,'valor 10'); 
//myLinkedList.printList(); 
myLinkedList.printList(); 
myLinkedList.remove(2); 
myLinkedList.printList(); 
myLinkedList.reverse().printList();
//console.log(myLinkedList)