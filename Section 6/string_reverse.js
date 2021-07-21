const text = "Hello world !";
function reverse(str) { 
    if(!str || typeof str !== 'string') { 
        return 'Your input must be a string';
    } 
    let newStr = "";
    for(let i = 1; i < str.length+1; i++) { 
        newStr = newStr + str[str.length-i];
    } 
    return newStr;
} 
console.log(reverse(text));