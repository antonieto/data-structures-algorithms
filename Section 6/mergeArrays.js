const arr1 = [0,3,4,31];
const arr2 = [4,6,30];     

// [ 0, 3, 4, 4, 6, 30, 31 ]  

function mergeSortedArrays(arr1, arr2) { 
    if(typeof arr1 !== 'object' || typeof arr2 !== 'object') { 
        return 'Inputs must be arrays';
    }
    const mergedArray = []; 
    let array1Item = arr1[0]; 
    let array2Item = arr2[0]; 
    let i = 1; 
    let j = 1;

    while (array1Item || array2Item ) { 
        if(!array2Item || array1Item < array2Item) { 
            mergedArray.push(array1Item); 
            array1Item = arr1[i]; 
            i++; 
        } else { 
            mergedArray.push(array2Item); 
            array2Item = arr2[j]; 
            j++; 
        }
    } 
    return mergedArray;
} 

mergeSortedArrays(arr1, arr2);


mergeSortedArrays2 = function(arr1, arr2) { 
    
}