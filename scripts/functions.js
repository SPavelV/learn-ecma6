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


function pick2(object, ...keys) {
  let result = Object.create(null);

  for (let i = 0, len = keys.length; i < len; i++) {
    result[keys[i]] = object[keys[i]];
  }

  return result;
}

function checkArgs(...args) {
  console.log(args.length);
  console.log(arguments.length);
  console.log(args[0], arguments[0]);
  console.log(args[1], arguments[1]);
}
checkArgs('a', 'b');