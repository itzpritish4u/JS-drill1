import { testObject, keys, values, mapObject, pairs, invert, defaults } from './solution.js';

// Implementing keys()
console.log(keys(testObject));

// Implementing values()
console.log(values(testObject));

// Testing mapObject()
console.log(mapObject(testObject, (key, value) => value.toString().toUpperCase()));

// Testing pairs()
console.log(pairs(testObject));
