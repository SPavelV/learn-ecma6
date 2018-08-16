'use strict';
// function makeRequest(url, timeout, callback) {
//   timeout = timeout || 2000;
//   callback = callback || function () {};
// }
//
// function makeRequest2(url, timeout, callback) {
//   timeout = (typeof timeout == 'undefined') ? 2000 : timeout;
//   callback = (typeof callback == 'undefined') ? function(){} : callback ;
// }
//
// function pick(object) {
//   let result = Object.create(null);
//
//   for(let i = 1, len = arguments.length; i < len; i++) {
//     result[arguments[i]] =  object[arguments[i]];
//   }
//
//   return result;
// }
//
// let book = {
//   title: 'Understanding ECMAScript 6',
//   author: 'Nicolas C.Zakas',
//   year: 2016
// };
//
// let bookData = pick(book, 'author', 'year');
// console.log(bookData.author);
// console.log(bookData.year);


// function pick2(object, ...keys) {
//   let result = Object.create(null);
//
//   for (let i = 0, len = keys.length; i < len; i++) {
//     result[keys[i]] = object[keys[i]];
//   }
//
//   return result;
// }
//
// function checkArgs(...args) {
//   console.log(args.length);
//   console.log(arguments.length);
//   console.log(args[0], arguments[0]);
//   console.log(args[1], arguments[1]);
// }
// checkArgs('a', 'b');

// var add = new Function('first', 'second = first', 'return first + second');
// console.log(add(1,1));
// console.log(add(1));
//
// var pickFirst = new Function('...args', 'return args[0]');
// console.log(pickFirst(1,2));

// spread

// let value1 = 25,
//     value2 = 50;
// console.log(Math.max(value1, value2));
//
// let values = [25, 50, 75, 100];
// console.log(Math.max.apply(Math, values));
// console.log(Math.max(...values));
//
// let values2 = [-25, -50, -75, -100];
// console.log(Math.max(...values2, 0));


// determine how to call a function

// function Person(name) {
//   if(this instanceof Person) {
//     this.name = name;
//   } else  {
//     throw new Error("You must use new with Person.")
//   }
// }
//
// let person = new Person("Dan");
// // let notAPerson = Person("Dan");
//
// let notAPerson = Person.call(person, "Vova");

// meta prop new.target
// function Person(name) {
//   if(typeof new.target !== 'undefined') {
//     this.name = name;
//   } else {
//     throw new Error('You must use new with Person');
//   }
// }
// let person = new Person("Dan");
// let notAPerson = Person.call(person, "Vova");

// function Person(name) {
//   if(typeof new.target === Person) {
//     this.name = name;
//   } else {
//     throw new Error('You must use new with Person');
//   }
// }
// function AnoterPerson(name) {
//   Person.call(this, name);
// }
//
// let person = new Person('Bob');
// let anotherPerson = new AnoterPerson('Bob');


// arrow functions:

// - IIFE

// let person = function(name) {
//   return {
//     getName: function () {
//       return name;
//     }
//   };
// }('Nicolas');
// console.log(person.getName());
//
// let person2 = ( (name) => {
//   return {
//     getName: function () {
//       return name;
//     }
//   };
// })('Nicolas2');
// console.log(person2.getName());

// - Lack of biding this

let PageHandler = {
  id: "123456",
  init: function () {
    document.addEventListener('click', function (e) {
      this.doSomething(e.type);
    }.bind(this), false);
  },

  doSomething: function (type) {
    console.log('Handling ' + type + ' for ' + this.id);
  }
};

let PageHandler2 = {
  id: '123456',
  init: function () {
    document.addEventListener('click',
              event => this.doSomething(event.type), false);
  },
  doSomething: function (type) {
    console.log('Handing ' + type + ' for ' + this.id);
  }
};