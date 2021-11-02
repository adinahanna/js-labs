// #### Requirements

// Define and code the functions below.

// Define the functions using the approach as specified (either as a function expression or declaration).

// Be sure to number each function with a comment above it.

// After each function, call it **at least once** and `console.log` the results.

// Here are the functions:

// 1. Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct.
// 1. 

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function, as a function expression, `maxOfThree` that takes three numbers as arguments and returns the largest of them.

// 2.
const maxOfThree = function(x, y, z) {
    if (x >= y && x >= z){
        return x;
    } else if (y >= z && y >= x) {
        return y;
    } else {
        return x;
    }
};
console.log(maxOfThree(5, 10, 1));

// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
// 3.
function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    char = char.toLowerCase();
    for (let i = 0; i <= vowels.length; i++){
        if (char === vowels[i]) {
            return true;
        } else {
            return false;
        }
    }
};
console.log(isCharAVowel('b'));

// 4. Define a function `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
// 4. 
const sumArray = (numArray) => {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5])); 

// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
// 5.
function multiplyArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++){
        product *= arr[i];
    }
    return product;
};
console.log(multiplyArray([10, 4, 2]));

// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
// 6.
const numArgs = function(){
    return arguments.length;
};
console.log(numArgs('test', true, 5));

// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
// 7.
function reverseString(str) {
    return str.split('').reverse().join('');
};
console.log(reverseString('adina'));

// 8. Define a function, as a function expression, `longestWordLength` that takes an array of strings (words) and returns the length of the longest word.
// 8.
const longestWordLength = function(wordsArr){
    let longestWord = '';
    for (const word of wordsArr){
        if (word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord.length;
};
console.log(longestWordLength(['touch', 'me', 'in', 'the', 'morning']));

// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['touch', 'me', 'in', 'the', 'morning'], 2);` would return `["touch", "the", "morning"]`.
// 9. 
function stringsLongerThan(arr, num) {
    const longerWords = arr.filter(word => word.length > num);
    return longerWords;
};
console.log(stringsLongerThan(['touch', 'me', 'in', 'the', 'morning'], 2));