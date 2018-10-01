'use strict';

// Problems using cycles:

// let colors = ['red', 'green', 'blue'];
// for(let i = 0, len = colors.length; i < len; i++) {
//   console.log(colors[i]);
// }
//
// function createIterator(items) {
//   let i = 0;
//
//   return {
//     next: function () {
//       let done = (i >= items.length);
//       let value = !done ? items[i++] : undefined;
//
//       return {
//         done: done,
//         value: value
//       }
//     }
//   }
// }
//
// let iterator = createIterator([1, 2, 3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//Generators:
// function *createIterator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// let iterator = createIterator();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// Add arguments in generator:
// function* createIterator(items) {
//   for (let i = 0; i < items.length; i++) {
//     yield items[i];
//   }
// }
//
// let iterator = createIterator([1, 2, 3]);
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// //Expressions of the functions of the generators:
//
// let createIterator = function *(items) {
//   for(let i = 0; i < items.length; i++) {
//     yield items[i];
//   }
// };
//
// let iterator = createIterator([1, 2, 3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // Methods-generators object:
//
// let o = {
//   createIterator: function *(items) {
//     for (let i = 0; i < items.length; i++) {
//       yield items[i];
//     }
//   }
// };
//
// let iterator = o.createIterator([1, 2, 3]);

// //Iterated objects and for-of loops:
//
// let values = [1, 2, 3];
// for (let num of values) {
//   console.log(num);
// }

// // Access to the default iterator:
//
// let values = [1, 2, 3];
// let iterator = values[Symbol.iterator]();
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
//
// function isIterable(object) {
//   return typeof object[Symbol.iterator] === 'function';
// }
//
// console.log(isIterable([1, 2, 3]));
// console.log(isIterable('Hello'));
// console.log(isIterable(new Map()));
// console.log(isIterable(new Set()));
// console.log(isIterable(new WeakMap()));
// console.log(isIterable(new WeakSet()));

// //Creating iterated objects:
//
// let collection = {
//   items: [],
//   *[Simbol.iterator](){
//     for(let item of this.items) {
//       yield item;
//     }
//   }
// };
//
// collection.items.push(1);
// collection.items.push(2);
// collection.items.push(3);
//
// for(let x of collection) {
//   console.log(x);
// }

//Built-in generators:

let colors = ['red', 'green', 'blue'];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set('title', 'Understanding ECMAScript 6');
data.set('format', 'ebook');

// for(let entry of colors.entries()) {
//   console.log(entry);
// }
//
// for(let entry of tracking.entries()) {
//   console.log(entry);
// }
//
// for(let entry of data.entries()) {
//   console.log(entry);
// }

// for(let value of colors.values()){
//   console.log(value);
// }
//
// for(let value of tracking.values()) {
//   console.log(value);
// }
//
// for(let value of data.values()) {
//   console.log(value);
// }

// for(let key of colors.keys()) {
//   console.log(key);
// }
//
// for(let key of tracking.keys()) {
//   console.log(key);
// }
//
// for(let key of data.keys()) {
//   console.log(key);
// }

//Destructurization and for-of cycles
// for(let [key, value] of data) {
//   console.log(key + '=' + value);
// }

//Iterators nodeList:
let divs = document.getElementsByTagName('div');

for(let div of divs) {
  console.log(div.id);
}


