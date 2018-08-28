// let options = {
//   repeat: true,
//   save: false
// };

// let repeat = options.repeat,
//     save = options.save;

// Destructuring objects:

// - Assignment with destructuring
// let node = {
//   type: 'Identifier',
//   name: 'foo'
// },
// type = 'Literal',
// name = 5;

// function outputInfo(value) {
//   console.log(value === node);
// }

// outputInfo({typ, name } = node);

// console.log(type);
// console.log(name)

// - Default values
// let node = {
//   type: 'Idintifier',
//   name: 'foo'
// };

// let {type, name, value = true } = node;
// console.log(type);
// console.log(name);
// console.log(value);

// - Assignment to local variables with other names
// let node = {
//   type: 'Idintifier',
//   name: 'foo'
// };

// let { type: localType, name: localName } = node;
// console.log(localType);
// console.log(localName);

// let node = {
//   type: 'Idintifier'
// }

// let {type: localType, name: localName = 'bar' } = node;

// console.log(localType);
// console.log(localName);

// - Destructuring nested objects
// let node = {
//   type: 'Idintifier',
//   name: 'foo',
//   loc: {
//     start: {
//       line: 1,
//       column: 1
//     },
//     end: {
//       lind: 1,
//       column: 4
//     }
//   }
// }

// let { loc: {start}} = node;
// let { loc: { start: localStart }} = node;

// console.log(start.line);
// console.log(start.column);

// console.log(localStart.line);
// console.log(localStart.column);

//Destructuring arrays:
// let colors = [ 'red', 'green', 'blue' ];
// let [ firstColor, secondColor ] = colors;
// let [ , , thirdColor ] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// - Assignment with destructuring
// let colors = [ 'red', 'green' , 'blue' ];
// fristColor = 'black';
// secondColor = 'purple';

// [ firstColor, secondColor ] = colors;
// console.log(firstColor);
// console.log(secondColor);

// - Exchange of values of variables in ECMAScript 5
// let a = 1,
//     b = 2,
//     tmp;
  
// tmp = a; 
// a = b;
// b = tmp;

// console.log(a);
// console.log(b);

// - Exchange of values of variables in ECMAScript 6
// let a = 1,
//     b = 2;

// [ a, b ] = [ b, a ];
// console.log(a);
// console.log(b);

// - Default values: 
// let colors = [ 'red' ];
// let [ firstColor, secondColor = 'green' ] = colors;
// console.log(firstColor);
// console.log(secondColor);

// - Destructuring nested arrays
// let colors = [ 'red', [ 'green', 'lightgreen' ], 'blue' ];

// let [firstColor, [secondColor]] = colors;
// console.log(firstColor);
// console.log(secondColor);

// - Rest items:
// let colors = [ 'red', 'green', 'blue' ]
// let [ firstColor, ...restColors] = colors;

// console.log(firstColor);
// console.log(restColors.length);
// console.log(restColors[0]);
// console.log(resColors[1]);

// let colors = [ 'red', 'green', 'blue' ];
// let [...clonedColors] = colors;
// console.log(clonedColors);

// - Mixed destructuring:
// let node = {
//   type: 'Idintifier',
//   name: 'foo',
//   loc: {
//     start: {
//       line: 1, 
//       column: 1
//     },
//     end: {
//       line: 1,
//       column: 4
//     }
//   },
//   range: [0, 3]
// }

// let {
//   loc: {start},
//   range: [ startIndex ]
// } = node;

// console.log(start.line);
// console.log(start.column);
// console.log(startIndex);

// - The destructured parameters
function setCoockie(name, value, opions) {
  options = options || {};
  let secure = options.secure,
      path = options.path,
      domain = options.domain,
      expires = options.expires;
      // ... code option cookie
}

setCoockie('type', 'js', {
  secure: true,
  expires: 6000
});

function setCookieDestructurtingParams(name, value, { secure, path, domain, expires }) {
  // some code
}

setCookieDestructurtingParams('type', 'js', {
  secure: true,
  expires: 6000
})
