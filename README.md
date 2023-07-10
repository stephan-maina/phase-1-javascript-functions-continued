# Functions: Continued

# JavaScript Functions
This repository provides examples of JavaScript functions that perform various operations. Functions in JavaScript allow you to encapsulate a block of code and execute it whenever needed. Here are some examples:

# Square Function
javascript
Copy code
// A function that takes a number and returns its square.
function square(n) {
    return n * n;
}
The square function takes a number as an argument and returns the square of that number by multiplying it with itself.

# toLowerCase Function
javascript
Copy code
// A function that takes a string and returns a new string with all the letters in lowercase.
function toLowerCase(str) {
    return str.toLowerCase();
}
The toLowerCase function takes a string as an argument and returns a new string with all the letters converted to lowercase using the toLowerCase method.

# Sum Function
javascript
Copy code
// A function that takes an array of numbers and returns the sum of the numbers in the array.
function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
The sum function takes an array of numbers as an argument and calculates the sum of all the numbers in the array by iterating over the array and accumulating the sum.

# longerThanFive Function
javascript
Copy code
// A function that takes an array of strings and returns a new array with all the strings in the original array that are longer than 5 characters.
function longerThanFive(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
The longerThanFive function takes an array of strings as an argument and creates a new array containing only the strings from the original array that have a length greater than 5.

These examples demonstrate the usage of functions in JavaScript to perform specific tasks. You can modify the functions according to your requirements or create new functions to perform different operations.
