class HashTable { 
    constructor(size) { 
        this.data = new Array(size);
    } 
    _hash(key) { //Hash Function 
        let hash = 0; 
        for (let i = 0; i < key.length; i++) { 
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
          
        } 
        return hash;
    } 
    set(key,value) {  
        let adress = this._hash(key);        
        if(!this.data[adress]) {  
            
            this.data[adress] = [];
        } 
        this.data[adress].push([ key, value ]);
        
    } 
    get(key) { 
        let adress = this._hash(key);
        let currentBucket = this.data[adress];

        if(currentBucket) { 
            for(let i = 0; i < currentBucket.length; i++) { 
                if(currentBucket[i][0] === key) { 
                    return currentBucket[i][1]; 
                }
            }
        }  
        return undefined; 
    } 
    keys() { 
        const keysArray = []; 
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) { 
                keysArray.push(this.data[i][0][0]);
            }
        } 
        return keysArray;
    }
} 

const myHashTable = new HashTable(50); 

myHashTable.set('io',10000);  
myHashTable.set('ehhh','hola'); 
myHashTable.set('hell','hola'); 
myHashTable.set('oranges',2); 
let get = myHashTable.get('ehhh'); 
console.log(get); //Should return 10000   

console.log(myHashTable.keys());