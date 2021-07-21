let array = [1,3,5,3,2]; //Returns 3 
let array2 = [1,2,3,4,5];

function firstRecurringItem(array) { 
    let checked = {}; 
    for(let i = 0; i < array.length; i++) { 

        if(checked[array[i]]){ 
            return array[i];
        } 
        checked[array[i]] = true;
    }
} 

console.log(firstRecurringItem(array));