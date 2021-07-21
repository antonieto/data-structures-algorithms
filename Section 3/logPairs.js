//Log all pairs of array

const boxes = [1,2,3,4,5]; 

function logAllPairs(array) { 
    for(let i = 0; i < boxes.length ; i++) // O(n)
    { 
        for(let j = 0; j < boxes.length; j++)    //O(n)
        { 
            console.log(array[i],array[j])
        }
    }
}

logAllPairs(boxes);
