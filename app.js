// function decSum(a, b, c, d) {
//   return a;
// }
// console.log(decSum(1));

// const expression = function () {
//   return "This Is expression Function";
// };
// console.log(expression());

function Closure(a = 0) {
  return function (b) {
    return function (c = 0) {
      return a + b + c;
    };
  };
}
console.log(Closure(1)()(3));
