
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};


// - Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.
let newPeople = ['Odie', ...people, 'Garfield'];

// - Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it
const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'New Car'],
};

// - Create a state object with keys of people and stuff that contain the people and stuff data.
let state = {people, stuff};

console.log('newPeople:');
console.log(newPeople);

console.log('newStuff:');
console.log(newStuff);

console.log('state:');
console.log(state);


// Do this using object destructuring assignment
// - Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
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
      'New Car',
    ],
  },
};
// - Prove that the original people, stuff, and state are unchanged.

console.log('newState:');
console.log(JSON.stringify(newState));