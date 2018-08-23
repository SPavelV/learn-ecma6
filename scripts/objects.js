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

// let suffix = ' name';
// const person2 = {
//   ['first' + suffix]: 'Nicolas',
//   ['last' + suffix]: 'Zakas'
// };
// console.log(person2['first name']);
// console.log(person2['last name']);

// // New methods:
//
// // - Object.is():
//
// console.log(+0 == -0);
// console.log(+0 === -0);
// console.log(Object.is(+0, -0));
//
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));
//
// console.log(5 == 5);
// console.log(5 == '5');
// console.log(5 === 5);
// console.log(5 === '5');
// console.log(Object.is(5, 5));
// console.log(Object.is(5, '5'));

// - Object assign():

// old version
// function mixin(receiver, supplier) {
//   Object.keys(supplier).forEach(function (key) {
//     receiver[key] = supplier[key]
//
//   });
//
//   return receiver;
// }
//
// function EventTarget() {
//   // some code
// }
//
// EventTarget.prototype = {
//   constructor: EventTarget,
//   emit: function () {
//     // some code
//   },
//   on: function () {
//     // some code
//   }
// };
//
// const myObject = {};
// mixin(myObject, EventTarget.prototype);
// myObject.emit('somethingChange');

// // new version
// function EventTarget() {
//   // some code
// }
// EventTarget.prototype = {
//   constructor: EventTarget,
//   emit: function () {
//     // some code
//   },
//   on: function () {
//     // some code
//   }
// };
// const myObject = {};
// Object.assign(myObject, EventTarget.prototype);
// myObject.emit('somethingChanged');
//
// const receiver = {};
// Object.assign(receiver,
//   {
//     type: 'js',
//     name: 'file.js'
//   },
//   {
//     type: 'css'
//   }
// );
//
// console.log(receiver.type);
// console.log(receiver.name);
//
// let receiver = {},
//     supplier = {
//       get name() {
//         return 'file.js'
//       }
//     };
//
// Object.assign(receiver, supplier);
//
// let descriptor = Object.getOwnPropertyDescriptor(receiver, 'name');
//
// console.log(descriptor.value);
// console.log(descriptor.get);

// // Dublicates of properties in object literals.
// let person = {
//   name: 'Nicolas',
//   name: 'greg'
// };
// console.log(person.name);

// Dublicate props in the object literal

const obj = {
  a: 1,
  0: 1,
  c: 1,
  2: 1,
  b: 1,
  1: 1
};

obj.d = 1;
console.log(Object.getOwnPropertyNames(obj).join(''));
