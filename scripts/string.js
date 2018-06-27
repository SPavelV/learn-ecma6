// template tag

// function tag(literals, ...subtitutions) {
  // get string
// }

// function passthru(literals, ...substitutions) {
//   let result = '';
//
//   for(let i = 0; i < substitutions.length; i++) {
//     result += literals[i];
//     result += substitutions[i];
//   }
//
//   result += literals[literals.length - 1];
//
//   return result;
// }
//
// let count = 10,
//     price = 0.25,
//     message = passthru`${count} items cost $${(count * price).toFixed(2)}.`;

// let message1 = `Multiline\nstring`,
//     message2 = String.raw`Multiline\nstring`;
// console.log(message1);
// console.log(message2);

function raw(literals, ...substitutions) {
  let result = '';
  
  for(let i = 0; i < substitutions.length; i++) {
    result += literals.raw[i];
    result += substitutions[i];
  }
  
  result += literals.raw[literals.length - 1];
  
  return result;
}

let message = raw`Multiline\nstring`;
console.log(message);
console.log(message.length);


