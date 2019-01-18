'use strict';
// Objects
// Begin with the starter code below …
// [x] Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.
// [x] Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it
// [x] Create a state object with keys of people and stuff that contain the people and stuff data.
//    Do this using object destructuring assignment
// [x] Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
// [x] Prove that the original people, stuff, and state are unchanged.
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};


let newPeople = ['Odie', ...people, 'Garfield'];

const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'Tonka'],
};

let state = {
  people: [...people],
  stuff: {...stuff},
};

let newState = {
  people: ['Odie', ...state.people, 'Garfield'],
  stuff: {...state.stuff, cars:[...state.stuff.cars, 'Tonka'],
  },
};

console.log('people: ', people);
console.log('stuff:', stuff);
console.log('state:', state);
