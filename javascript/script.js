// question 1

function findLargestNumber(arr) {
    return Math.max(...arr);
}

let numbers = [3, 5, 7, 2, 8, 1];
let largestNumber = findLargestNumber(numbers);
console.log(largestNumber);



// question 2

function reverseString(str) {
    return str.split('').reverse().join('');
}


let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log(reversedString); 



// question 3

function hasDuplicates(arr) {
    const uniqueValues = new Set(arr);
    return uniqueValues.size !== arr.length;
}


let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 4];

console.log(hasDuplicates(array1));
console.log(hasDuplicates(array2));
