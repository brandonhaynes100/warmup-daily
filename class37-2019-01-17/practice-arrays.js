'use strict';
// - Create an array of numbers, 1 through 10
// - Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
// - Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
// - Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

let arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forLoop = inputArray => {
  for( let i = 0; i < inputArray.length; i++ ) {
    console.log(inputArray[i]);
  }
};

// Running the below should log 1-10
// forLoop(arrayOfTen);

const whileLoop = inputArray => {
  let i = 0;
  while( i < inputArray.length ){
    console.log(inputArray[i]);
    i++;
  }
};


// Running the below should log 1-10
// whileLoop(arrayOfTen);

const map = (inputArray, inputFunction) => {
  let returnArray = [];
  for( let i = 0; i < inputArray.length; i++ ){
    returnArray[i] = inputFunction(inputArray[i]);
  }
  return returnArray;
};

let incrementFunction = intInput => {
  return intInput + 1;
};

// Running the below should log an array of ints 2-11
// console.log(map(arrayOfTen, incrementFunction));

let checkEvenFunction = intInput => {
  if ((intInput % 2) == 0 ){
    return true;
  } else {
    return false;
  }
};

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const filter = (inputArray, inputFunction) => {
  let returnArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputFunction(inputArray[i])) {
      returnArray.push(inputArray[i]);
    }
  }
  return returnArray;
};

// Running the below should log an array of even ints 2-10
// console.log(filter(arrayOfTen, checkEvenFunction));

// The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
const reduce = (inputArray, inputFunction) => {
  let returnValue = 0;
  for( let i = 0; i < inputArray.length; i++) {
    returnValue = inputFunction(returnValue, inputArray[i]);
  }
  return returnValue;
};

let accumulatorFunction = (currentVal, intInput) => {
  return currentVal + intInput;
};

// Running the below should log the value 55
// console.log(reduce(arrayOfTen, accumulatorFunction));