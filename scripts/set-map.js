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



