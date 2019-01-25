// - Create an array of numbers, 1 through 10
// - Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
// - Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
// - Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

const myLog = inputToLog => {
  console.log(inputToLog);
};

const forLoop = inputArray => {
  myMap(inputArray, myLog);
};

const whileLoop = inputArray => {
  let i = 0;
  while( i < inputArray.length) {
    console.log(inputArray[i]);
    i++;
  }
};

const myMap = (inputArray, inputFunction) => {
  let returnArray = [];
  for( let i = 0; i < inputArray.length; i++ ) {
    returnArray[i] = inputFunction(inputArray[i]);
  }
  return returnArray;
};

const myFilter = (inputArray, inputBooleanFunction) => {
  let returnArray = [];
  for( let i = 0; i < inputArray.length; i++){
    if( inputBooleanFunction( inputArray[i] ) ){
      returnArray.push(inputArray[i]);
    }
  }
  return returnArray;
};

const myReduce = (inputArray, inputAccumulatorFunction) => {
  let accumulated = 0;
  for( let i = 0; i < inputArray.length; i++) {
    accumulated = inputAccumulatorFunction(accumulated, inputArray[i]);
  }
  return accumulated;
};

/*********
**TESTING**
**********/

let arrayOfTen = [1,2,3,4,5,6,7,8,9,10];

let incrementFunction = intInput => {
  return intInput + 1;
};

let checkEvenFunction = intInput => {
  if ((intInput % 2) == 0 ){
    return true;
  } else {
    return false;
  }
};

let accumulatorFunction = (currentVal, intInput) => {
  return currentVal + intInput;
};

// Running the below should log 1-10
// forLoop(arrayOfTen);

// Running the below should log 1-10
// whileLoop(arrayOfTen);

// Running the below should log an array of ints 2-11
// console.log(myMap(arrayOfTen, incrementFunction));

// Running the below should log an array of even ints 2-10
// console.log(myFilter(arrayOfTen, checkEvenFunction));

// Running the below should log the value 55
// console.log(myReduce(arrayOfTen, accumulatorFunction));