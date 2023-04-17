var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNum = numbers.map(function (x) {
  return x * 2;
});
console.log(newNum);

//Filter - Create a new array by keeping the items that return true.
var numbers = [3, 56, 2, 48, 5];

const newNum = numbers.filter(function (num) {
  return num < 10;
});
console.log(newNum);

var newNumb = [];
numbers.forEach(function (num) {
  if (num > 10) {
    newNumb.push(num);
  }
});
console.log(newNumb);

//Reduce - Accumulate a value by doing something to each item in an array.
var numbers = [3, 56, 2, 48, 5];
--forEach;
var newNum = 0;
numbers.forEach(function (currentNum) {
  newNum += currentNum;
});
console.log(newNum);

//---Reduce function

var newNum = numbers.reduce(function (accumulator, currentNum) {
  console.log("accumulator = " + accumulator);
  console.log("currentNum = " + currentNum);

  return accumulator + currentNum;
});
console.log(newNum);

//Find - find the first item that matches from an array.
var numbers = [3, 56, 2, 48, 5];

const newNum = numbers.find(function (num) {
  return num > 10;
});

console.log(newNum);

//FindIndex - find the index of the first item that matches.

const newNumb = numbers.findIndex(function (numb) {
  return numb > 10;
});
console.log(newNumb);
