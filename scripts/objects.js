'use strict';

// //shortened syntax for initializing props:
//
// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age
//   };
// }
//
// function createPerson2(name, age) {
//   return {
//     name,
//     age
//   }
// }
//
// //shortened syntax for definition method:
//
// const person = {
//   name: 'Nicolas',
//   sayName: function () {
//     console.log(this.name);
//   }
// };
//
// const person2 = {
//   mame: 'Nicolas',
//   sayName() {
//     console.log(this.name);
//   }
// };

// Calculated property names:

// const person = {},
//       lastName = 'last name';
// person['first name'] = 'Nicolas';
// person[lastName] = 'Zakas';
//
// console.log(person['first name']);
// console.log(person[lastName]);
// const person2 = {
//   'first name': 'Nicolas'
// };
//
// console.log(person['first name']);

// let lastName = 'last name';
// const person = {
//   'first name': 'Nicolas',
//   [lastName]: 'Zakas'
// };
// console.log(person['first name']);
// console.log(person[lastName]);

let suffix = ' name';
const person2 = {
  ['first' + suffix]: 'Nicolas',
  ['last' + suffix]: 'Zakas'
};
console.log(person2['first name']);
console.log(person2['last name']);