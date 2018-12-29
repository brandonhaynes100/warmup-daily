'use strict';
// - Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
// - Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
// - Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let forLoop = (array) => {
  for( let i in array ) {
    console.log( array[i]);
  }
};

let whileLoop = (array) => { 
  let i = 0;
  while( i < array.length ){
    console.log(array[i]);
    i++;
  }
};

let map = (array, callback) => { 
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    returnArray.push(callback(array[i]));
  }
  return returnArray;
};

let filter = (array, callback) => { 
  let returnArray = [];
  for( let i = 0; i < array.length; i++) {
    if( callback( array[i] ) )  {
      returnArray.push(array[i]);
    }
  }
};

let reduce = (array, callback, startingPoint) => { 
  let accumulator = startingPoint;
  for( let i = 0; i < array.length; i++) {
    accumulator += callback(array[i]);
  }
};
