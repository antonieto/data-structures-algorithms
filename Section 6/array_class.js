class MyArray { 
    constructor() { 
        this.length = 0; 
        this.data = {};
    } 
    get(index) { 
        return this.data[index];
    } 
    push(item) { 
        this.data[this.length] = item; 
        this.length++; 
        return this.length;
    } 
    pop() { 
        const lastItem = this.data[this.length-1]; 
        delete this.data[this.length-1]; 
        return lastItem;
    } 
    delete(index) { 
        const item = this.data[index]; 
        this.shiftItems(index); 
    } 
    shiftItems(index) {  
        for(let i = index; i < this.length -1; i++) { 
            this.data[i] = this.data[i+1];
        } 
        delete this.data[this.length - 1]; 
        this.length = this.length-1;
    }
} 

const array = new MyArray(); 
array.push('Hello there'); 
array.push('You'); 
array.push('Are'); 
array.push('Nice'); 

array.pop();

console.log(array);