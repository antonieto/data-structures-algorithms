var object1 = { value: 10 }; 
var object2 = object1; 
var object3 = { value: 10 }; 

//Context vs Scope 
const object4 = { 
    a: function() { 
        console.log(this);
    }
} 

//Instantiation 
class Player { 
    constructor(_name, _type) { 
        this.name = _name; 
        this.type = _type; 

    } 
    introduce() { 
        console.log(`Hi,  I am ${this.name}, I'm a ${this.type}`);
    }
} 
 
class Wizard extends Player { 
    constructor(name, type) { 
        super(name, type)
    } 
    play() { 
        console.log(`I am a ${this.type} and i am playing!`); 
    }
} 

const wizard1 = new Wizard('Shelly', 'Healer'); 
const wizard2 = new Wizard('Chepe', 'DPS'); 