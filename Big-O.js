
//          REVERSE A STRING        //

//we define the result as an empty string
// We loop over the length of the string in reverse
// Concatinate the result with each index of string
// return the new string 

function reverse(str) {
    let res = '';
    for (let i = 0; i<str.length; i--) {
        result+=str[i]
    }
    return res;
}

// Split creates an array of chars.
// Arrays have a built in reverse function reverse(). 
// Then we join the array back into a string using the array method

function reverse2(str) {
    return str.split('').reverse().join('');
}




//          SUM         //

// calculate the sum of numbers from 1 up to (and including) some number n

function addUpToFirst(n) {

    let total = 0;
    for (i = 0; i<n; i++) {
        total += i;
    }
    return total;
}

function addUpToSecond(n) {
    return n * (n + 1) / 2;
}


//          ALL EVENS           //

function allEven(nums){
    for(let i = 0; i<nums.length; i++) {
        if (nums[i] % 2 !== 0){
            return false;
        }
    }
    return true;
}


