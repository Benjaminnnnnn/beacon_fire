/**
 * Driver: Albert
 * Navigator: Benjamin
 */

function plusOne(digits) {
  // loop based
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      break;
    } else {
      digits[i] = 0;
    }
  }

  if (digits[0] === 0) {
    digits = [1].concat(digits);
  }
  return digits;

  // // recursion based
  // function plusOneHelper(digits, i) {
  //   if (digits[i] < 9) {
  //     digits[i]++;
  //     return digits;
  //   } else if (i > 0) {
  //     digits[i] = 0;
  //     return plusOneHelper(digits, i - 1);
  //   } else {
  //     let newDigits = new Array(digits.length + 1).fill(0);
  //     newDigits[0] = 1;
  //     return newDigits;
  //   }
  // }

  return plusOneHelper(digits, digits.length - 1);
}

test1 = [1, 2, 3];
test2 = [4, 3, 2, 1];
test3 = [9];
test4 = [9, 9];
test5 = [8, 9, 9, 9];

console.log(plusOne(test1));
console.log(plusOne(test2));
console.log(plusOne(test3));
console.log(plusOne(test4));
console.log(plusOne(test5));
