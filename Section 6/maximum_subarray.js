nums = [-2 , 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) { 
    let maximum = 0; 
    let sum = 0;
    for(let i = 0; i < nums.length; i++) { 
        console.log(sum);
        sum += nums[i]; 
        if(sum > maximum) { 
            maximum = sum;
        }
    }  
    return maximum;
} 

console.log(maxSubArray(nums));