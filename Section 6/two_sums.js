const numbers = [2,7,11,15] 
const target = 9;

function twoSum(nums, target) { 
    const checked = {}; 
    for(let i = 0; i < nums.length ; i++) { 
        const complementary = target - nums[i]; 
        if(checked[complementary] !== undefined) { 
            return [checked[complementary], i];
        }
        checked[nums[i]] = i; 
    } 
} 

console.log(twoSum(numbers,target))
