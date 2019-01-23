'use strict';
// Objects
// Begin with the starter code below …

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

const people = ['Kookla','Fran','Ollie'];


// Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.
let newPeople = ['Odie', ...people, 'Garfield'];

// Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it
const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'Ford'],
};

// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment
let state = {people: people, stuff: stuff};

// Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
let newState = {
  people: [
    'Odie',
    ...people,
    'Garfield',
  ],
  stuff: {
    ...stuff, 
    cars: [
      ...stuff.cars,
      'Ford',
    ],
  },
};

// Prove that the original people, stuff, and state are unchanged.
console.log('people:\n',people);
console.log('stuff:\n',stuff);
console.log('state:\n',state);

console.log('newPeople:\n', newPeople);
console.log('newStuff:\n', newStuff);
console.log('newState:\n', newState);