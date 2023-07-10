// A function that takes a number and returns its square.
function square(n) {
    return n * n;
  }
  
  // A function that takes a string and returns a new string with all the letters in lowercase.
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  // A function that takes an array of numbers and returns the sum of the numbers in the array.
  function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
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