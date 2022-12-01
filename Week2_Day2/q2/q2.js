function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

function add2(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(add(1, 2, 3));
console.log(add2(1)(2)(3));
