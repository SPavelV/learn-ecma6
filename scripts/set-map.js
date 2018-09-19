'use strict';

// // - Old version set:
// let set = Object.create(null);
// set.foo = true;
//
// if(set.foo) {
//   console.log('set.foo');
// }
//
// // - old version map:
//
// let map = Object.create(null);
// map.foo = 'bar';
// let value = map.foo;
//
// console.log(value);

// // Set ecma6:
// let set = new Set();
// set.add(5);
// set.add('5');
// console.log(set.size);
//
// // object value:
// let set2 = new Set(),
//     key1 = {},
//     key2 = {};
// set2.add(key1);
// set2.add(key2);
// console.log(set2.size);
//
// // repeat values:
// let set3 = new Set();
// set3.add(5);
// set3.add('5');
// set3.add(5);
// console.log(set3.size);
//
// let set4 = new Set([1,2,3,4,5,5,5,5,5]);
// console.log(set4.size);
//
// // Check for the presence of a value in the set:
// let set5 = new Set();
// set5.add(5);
// set5.add('5');
// console.log(set.has(5));
// console.log(set.has(6));

// // Delete one element:
// let set6 = new Set();
// set6.add(5);
// set6.add('5');
// console.log(set6.has(5));
//
// set6.delete(5);
// console.log(set6.has(5));
// console.log(set6.size);
//
// // Delete all elements:
// set6.clear();
// console.log(set6.has('5'));
// console.log(set6.size);

// // Iteration set:
// let set7 = new Set([1, 2]);
// set7.forEach(function (value, key, ownerSet) {
//   console.log(key + ' ' + value);
//   console.log(ownerSet === set7);
// });

// let set8 = new Set([1,2]);
// let processor = {
//   output(value) {
//     console.log(value);
//   },
//   process(dataSet) {
//     dataSet.forEach(function (value) {
//       this.output(value);
//     }, this);
//   }
// };
// processor.process(set8);

// let set9 = new Set([1,2]);
// let processor = {
//   output(value) {
//     console.log(value);
//   },
//   process(dataSet) {
//     dataSet.forEach(value => this.output(value));
//   }
// };
// processor.process(set9);

// Converting a Set to an Array:

// let set10 = new Set([1, 2, 3, 3, 3, 3, 4, 5]),
//     array = [...set10];
// console.log(array);
//
// function eliminateDuplicates(items) {
//   return [...new Set(items)];
// }
//
// let numbers = [1, 2, 3, 3, 3, 4, 5],
//     noDublicates = eliminateDuplicates(numbers);
//
// console.log(noDublicates);


// // Sets with weak references:
//
// let set = new Set(),
//     key = {};
//
// set.add(key);
// console.log(set.size);
//
// key = null;
// console.log(set.size);
//
// key = [...set][0];

// let set = new WeakSet(),
//     key = {};
//
// set.add(key);
//
// console.log(set.has(key));
// set.delete(key);
//
// console.log(set.has(key));

// let key1 = {},
//     key2 = {},
//     set = new WeakSet([key1, key2]);
//
// console.log(set.has(key1));
// console.log(set.has(key2));

// // Key differences between the two types of sets
//
// let set = new WeakSet(),
//     key = {};
// set.add(key);
// console.log(set.has(key));
//
// key = null;

// Associative Arrays in ECMAScript 6:

// let map = new Map();
// map.set('title', 'Understanding ECMAScript 6');
// map.set('year', 2016);
//
// console.log(map.get('title'));
// console.log(map.get('year'));

// let map = new Map(),
//     key1 = {},
//     key2 = {};
//
// map.set(key1, 5);
// map.set(key2, 42);
//
// console.log(map.get(key2));
// console.log(map.get(key1));

// //Map methods:
//
// let map = new Map();
// map.set('name', 'Nicolas');
// map.set('age', 25);
//
// console.log(map.size);
//
// console.log(map.has('name'));
// console.log(map.get('name'));
//
// console.log(map.has('age'));
// console.log(map.get('age'));
//
// map.delete('name');
// console.log(map.has(name));
// console.log(map.get(name));
// console.log(map.size);
//
// map.clear();
// console.log(map.has('name'));
// console.log(map.get('name'));
// console.log(map.has('age'));
// console.log(map.get('age'));
// console.log(map.size);

// // Initializing Map:
//
// let map = new Map([['name', 'Nicolas'], ['age', 25]]);
// console.log(map.has('name'));
// console.log(map.get('name'));
// console.log(map.has('age'));
// console.log(map.get('age'));
// console.log(map.size);

// Map method forEach:

// let map = new Map([ ['name', 'Nicolas'], ['age', 25] ]);
//
// map.forEach(function (value, key, ownerMap) {
//   console.log(key + ' ' + value);
//   console.log(ownerMap === map);
// });

// // Maps with weak references:

// let map = new WeakMap(),
//     element = document.querySelector('.element');
//
// map.set(element, 'Original');
//
// let value = map.get(element);
// console.log(value);
//
// element.parentNode.removeChild(element);
// element = null;

// // Initialization of associative arrays with weak references:
//
// let key1 = {},
//     key2 = {},
//     map = new WeakMap([[key1,'Hello'], [key2, 42]]);
// console.log(map.has(key1));
// console.log(map.get(key1));
// console.log(map.has(key2));
// console.log(map.get(key2));

// Weak maps methods:

// let map = new WeakMap(),
//     element = document.querySelector('.element');
//
// map.set(element, 'Original');
//
// console.log(map.has(element));
// console.log(map.get(element));
//
// map.delete(element);
// console.log(map.has(element));
// console.log(map.get(element));

// Private object data:

// old version:
// function Person(name) {
//   this._name = name;
// }
//
// Person.prototype.getName = function () {
//   return this._name;
// };
//
// let Person = (function () {
//   let privateData = {},
//       privateId = 0;
//   function Person(name) {
//     Object.defineProperty(this, '_id', {value: privateId++ });
//
//     privateData[this._id] = {
//       name: name
//     };
//   }
//
//   Person.prototype.getName = function () {
//     return privateData[this._id].name;
//   };
//
//   return Person;
// }());

let Person = (function () {
  let privateData = new WeakMap();

  function Person(name) {
    privateData.set(this, { name: name });
  }

  Person.prototype.getName = function () {
    return privateData.get(this).name;

    return Person;
  }
}());

