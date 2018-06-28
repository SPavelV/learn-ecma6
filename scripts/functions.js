function makeRequest(url, timeout, callback) {
  timeout = timeout || 2000;
  callback = callback || function () {};
}

function makeRequest2(url, timeout, callback) {
  timeout = (typeof timeout == 'undefined') ? 2000 : timeout;
  callback = (typeof callback == 'undefined') ? function(){} : callback ;
}

function pick(object) {
  let result = Object.create(null);

  for(let i = 1, len = arguments.length; i < len; i++) {
    result[arguments[i]] =  object[arguments[i]];
  }

  return result;
}

let book = {
  title: 'Understanding ECMAScript 6',
  author: 'Nicolas C.Zakas',
  year: 2016
};

let bookData = pick(book, 'author', 'year');
console.log(bookData.author);
console.log(bookData.year);