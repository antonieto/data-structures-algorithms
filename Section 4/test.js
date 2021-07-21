const array1 = ['a', 'b', 'c', 'x']; 
const array2 = ['z', 'y', 'x'];

function commonElement(array1, array2) { 
    let comparisonKeys = {};
    for(let i = 0; i < array1.length ; i++) { 
        
        if(comparisonKeys[array1[i]]) { 
            return true;
        } 
        comparisonKeys[array2[i]] = true;
    } 
    return false;
} 

console.log(commonElement(array1,array2));