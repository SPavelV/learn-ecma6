'use strict';

// Problems using cycles:

// let colors = ['red', 'green', 'blue'];
// for(let i = 0, len = colors.length; i < len; i++) {
//   console.log(colors[i]);
// }

function createIterator(items) {
  let i = 0;

  return {
    next: function () {
      let done = (i >= items.length);
      let value = !done ? items[i++] : undefined;

      return {
        done: done,
        value: value
      }
    }
  }
}

let iterator = createIterator([1, 2, 3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
